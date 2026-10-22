"""Offline checks for routes, metadata, structured data and JavaScript syntax."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
import re
import subprocess
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(); self.tags=[]; self.feed(source)
    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

pages = {p.name: Page(p.read_text()) for p in ROOT.glob('*.html')}
origin = 'https://' + (ROOT/'CNAME').read_text().strip()
titles=[]
for name, page in pages.items():
    source=(ROOT/name).read_text()
    expected=origin+('/' if name=='index.html' else '/'+name)
    title=re.search(r'<title>(.*?)</title>',source).group(1); assert title not in titles; titles.append(title)
    assert sum(t=='h1' for t,a in page.tags)==1, name+' h1'
    assert sum(t=='main' for t,a in page.tags)==1, name+' main'
    ids=[a['id'] for t,a in page.tags if 'id' in a]; assert len(ids)==len(set(ids)), name+' duplicate id'
    canon=[a['href'] for t,a in page.tags if t=='link' and a.get('rel')=='canonical']; assert canon==[expected]
    for key in ['description','twitter:card','twitter:title','twitter:description','twitter:image']:
        assert len([a for t,a in page.tags if t=='meta' and a.get('name')==key and a.get('content')])==1,(name,key)
    assert [a['content'] for t,a in page.tags if t=='meta' and a.get('property')=='og:url']==[expected]
    for key in ['og:title','og:description','og:image','og:type']:
        assert len([a for t,a in page.tags if t=='meta' and a.get('property')==key and a.get('content')])==1,(name,key)
    for raw in re.findall(r'<script type="application/ld\+json">(.*?)</script>',source,re.S):
        schema=json.loads(raw); assert schema['@context']=='https://schema.org'
        assert {x['@type'] for x in schema['@graph']}=={'Organization','WebSite','WebPage'}
        assert next(x for x in schema['@graph'] if x['@type']=='WebPage')['url']==expected
    for raw in re.findall(r'<script>(.*?)</script>',source,re.S):
        subprocess.run(['node','--check'],input=raw.encode(),check=True,capture_output=True)
    for tag,a in page.tags:
        for attr in ['href','src']:
            if attr not in a: continue
            url=urlsplit(a[attr])
            if url.scheme or url.netloc: continue
            target=unquote(url.path).lstrip('/') or (name if not url.path else 'index.html')
            assert (ROOT/target).is_file(),(name,'missing',target)
            if url.fragment and target in pages:
                assert any(x.get('id')==url.fragment for t,x in pages[target].tags),(name,'fragment',url.fragment)
        if 'aria-labelledby' in a:
            assert all(label in ids for label in a['aria-labelledby'].split())
    if name=='thank-you.html':
        assert any(t=='meta' and a.get('name')=='robots' and 'noindex' in a.get('content','') for t,a in page.tags)
urls=[e.text for e in ET.parse(ROOT/'sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert set(urls)=={origin+'/',*(origin+'/'+n for n in pages if n not in ['index.html','thank-you.html'])}
assert 'Disallow: /thank-you.html' not in (ROOT/'robots.txt').read_text()
assert 'no-cors' not in (ROOT/'buyers.html').read_text()  # only shared transport owns submission
assert 'location.href' not in (ROOT/'forms.js').read_text()
print(f'PASS: {len(pages)} pages, {len(urls)} sitemap URLs, metadata, schema, landmarks and local links')
