# SEO implementation

## Implemented in the feature branch

`python3 scripts/seo.py` derives the origin from existing CNAME and reads each page's title/description. It deterministically emits canonical tags, X card metadata, Organization/WebSite/WebPage JSON-LD, robots.txt and sitemap.xml. HTML is committed and works with existing GitHub Pages hosting; no JavaScript SEO injection or framework migration is needed.

| Route | Canonical | Indexing |
|---|---|---|
| `/` | `https://nuranihomes.com/` | Existing indexability retained, legal approval before publication |
| `/buyers.html` | Same apex/path | Same |
| `/partners.html` | Same apex/path | Same |
| `/privacy.html` | Same apex/path | Same |
| `/thank-you.html` | Same apex/path | `noindex, follow`; excluded from sitemap |

Privacy and thank-you now have descriptions and H1s. Each page has a main landmark. The thank-you social URL is fixed. The old Organization description with unverified land/payment claims was removed from structured data; no RealEstateAgent, review, rating, address, licence, price or offer schema was added. Existing homepage title/descriptions remain subject to content approval.

All four indexable URLs are in the sitemap. Stale hardcoded lastmod values were removed rather than replaced with invented dates. Robots now allows crawling of thank-you so its noindex can be read: [Google robots guidance](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

## AI discovery and language

Important English content is already static HTML; a crawler does not need a client-rendered app. Urdu remains a preference/query-driven translation, not a separate fully translated crawlable route. Do not advertise hreflang alternatives until distinct static Urdu pages and translated metadata exist and are reviewed. Query variants canonicalize to the English base page; test `/index.html` and www/apex redirect behavior on production before changing host settings.

Crawlability, accurate text and consistent structured data support discovery, but do not guarantee inclusion in AI answers. No special AI schema, llms.txt or Search Console registration with assistants was added. [Google AI search guidance](https://developers.google.com/search/docs/appearance/ai-features).

## Verification and release

- Run `npm run build`; generation is idempotent. Checks parse JSON-LD, verify expected types/URLs, validate sitemap XML and local link targets. This is local validation, not a Google rich-result eligibility certificate.
- Existing SVG artwork/icons/social image are retained. No unmeasured image compression or font change is claimed.
- Before publication: approve existing claims, inspect mobile/desktop with real fonts, confirm host redirects, HTTP 404 behavior, TLS/cache headers, then check live HTML against branch assets.
- After approved release: Search Console > URL inspection > Test live URL for all indexable routes; validate structured data with Schema.org Validator, submit `https://nuranihomes.com/sitemap.xml`, inspect Pages indexing and Core Web Vitals.
- DNS, canonical host redirects and Search Console property status were not verified in this session. No sitemap was submitted.
