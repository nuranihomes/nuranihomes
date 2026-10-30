"""Stage only public assets. No deployment or runtime dependencies."""
from pathlib import Path
import shutil
ROOT=Path(__file__).resolve().parents[1]
FILES=['CNAME','index.html','buyers.html','partners.html','privacy.html','thank-you.html','saima-shield-towers.html','404.html','lang.js','forms.js','attribution.js','form-endpoint.js','accessibility.css','robots.txt','sitemap.xml','site.webmanifest','icon.svg','favicon.ico','favicon-32.png','apple-touch-icon.png','icon-192.png','icon-512.png','og-image.jpg']
out=ROOT/'dist'; out.mkdir(exist_ok=True)
assert not set(p.name for p in out.iterdir())-set(FILES), 'Unexpected files in dist; inspect before publishing'
for name in FILES: shutil.copyfile(ROOT/name,out/name)
print(f'PASS: staged {len(FILES)} public files in dist; no deployment performed')
