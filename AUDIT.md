# Nurani Homes technical audit

Evidence date: 2026-10-22. Repository: `nuranihomes/nuranihomes`. Branch: `codex/nurani-digital-foundation`. Base: `14d7c5b336fb0dc2b4649e89e3231eea8dfbf21f`.

## Architecture and deployment

- Five static HTML pages: home, buyer questionnaire, partner questionnaire, privacy, thank-you. About/contact content lives on the homepage; there are no standalone about/contact routes or listing-detail pages.
- Inline CSS and SVG artwork, local icons/social image, Google Fonts, `lang.js` English/Urdu DOM translation. English content is already present without JavaScript. Urdu content is client translated.
- Two forms POST URL-encoded data to the existing Google Apps Script web app in `form-endpoint.js`. Backend source, destination spreadsheet, access rules and delivery logs are not in this repository.
- Cloudflare Web Analytics appears on all five pages. No GA4, GTM, Meta Pixel, phone link, WhatsApp link, Facebook/Instagram profile link or verification meta tag was found in the inspected source.
- `CNAME` contains `nuranihomes.com`. GitHub Actions reports successful GitHub Pages deployment of the base commit on 2026-10-05: [run 37313930687](https://github.com/nuranihomes/nuranihomes/actions/runs/37313930687). No custom workflow, package manifest, tests, server or environment files existed in the base tree.
- No migration is needed. This branch adds offline tooling and read-only CI checks; it does not add a deployment job. Confirm Settings > Pages source and Jekyll exclusions before release.

## Discovery and evidence limits

macOS Darwin arm64; Git 2.51.2; Node 25.9.0; npm 11.12.1. Initial sandbox networking prevented normal clone/authentication and Chromium launch. Those environment restrictions were lifted later on 2026-10-22. GitHub invitation accepted and repository `push:true` verified through the API. No account password was used by the agent.

The exact signed upstream commit, tree and all 18 blobs were initially recovered through the GitHub integration and verified against Git SHA-1 object IDs. This is a genuine shallow checkout. Remote main still matches the upstream base; earlier history is not locally available.

Live recheck: all five HTML pages plus robots.txt, sitemap.xml, lang.js and form-endpoint.js return HTTP 200 and match the upstream base byte-for-byte. HTTPS www redirects 301 to apex. A nonexistent route returns 404; `/index.html` and extensionless `/buyers` also resolve, making canonical tags relevant. GitHub Pages responses carry `Cache-Control: max-age=600`. TLS requests passed normal certificate validation.

Nameservers identify Squarespace DNS. Public NS/A/AAAA/MX/TXT/CAA records and www records were saved locally; this is not a complete provider-zone export. No Google or Meta verification TXT marker was returned in the queried apex records. That does not establish whether a Search Console property or another verification method exists. DNS was not changed.

Browser recheck found existing horizontal overflow at 320px in the language/header controls. The branch wraps those controls below the logo on screens up to 400px. All 40 page/viewport/language checks now pass with live Google Fonts, plus two mocked form flows; mobile and desktop screenshots were visually inspected. Real lead persistence and Search Console/account ownership remain unverified. No real form was submitted.

## Findings by business impact

| Priority | Evidence | Impact and disposition |
|---|---|---|
| P0, release gate | Homepage/meta claim DHA-titled land, Dubai sales, instalments; buyer form contains approximate US$36k/51k/64k prices and ownership/payment claims | Approval evidence absent. Existing copy preserved; property promotion and release must wait for owner/legal review. See COMPLIANCE_BLOCKERS.md. |
| P1 | Both forms redirected after any resolved `no-cors` fetch | Opaque responses cannot confirm storage. Shared handler now reports unconfirmed receipt and does not emit a conversion or redirect. Backend acknowledgement remains blocked. |
| P1 | Apps Script code/ownership and spreadsheet access unavailable | Cannot verify retention, validation, rate limiting, consent evidence or saved leads. Existing endpoint unchanged; no real submissions sent. |
| P1 | No form email validity check; hidden partner fieldsets still submitted stale values | Validation and disabled inactive fieldsets implemented, covered by mocked tests. Client checks do not replace server validation. |
| P2 | No canonical on any page; privacy/thank-you lacked descriptions; thank-you OG URL pointed home | Generated canonical/social metadata and missing descriptions added. Existing claims in metadata still require approval. |
| P2 | robots blocked thank-you but page had no noindex; sitemap lastmod was stale | Added crawlable noindex; regenerated four-page sitemap without invented modification dates. |
| P2 | Missing main landmarks, no H1 on privacy/thank-you, unnamed option groups | Semantic headings/landmarks, skip link, group labels, error focus and reduced-motion support implemented. Mobile/desktop browser checks passed. |
| P2 | Only `src`/`utm_source` recorded at direct form entry | Attribution across homepage navigation and full UTM fields remain a preparation item, not a working analytics integration. |
| P2 | No test/build process; engineering docs could enter Pages output | Added reproducible checks, public-asset build allowlist and Jekyll exclusions. Remote CI and exclusions still need hosted verification. |
| P3 | Repeated inline CSS; external English/Urdu fonts | No measured bottleneck available. Retained branding/fonts; defer CSS extraction and font self-hosting until browser measurements justify them. |

## Security

No private-key material, credential files, server secrets, exposed admin route or privileged API key was identified in the inspected base tree. The Apps Script URL and Cloudflare beacon identifier are public client configuration, not server credentials. Full historic secret scanning is not complete; no rotation or history rewrite was performed.

No production npm dependencies. Test-only packages are lockfile-pinned and installed from the local cache with lifecycle scripts disabled. A fresh online `npm audit` including development packages reported zero vulnerabilities on 2026-10-22. This is an advisory database check, not proof of absence of all vulnerabilities. Legacy jsdom transitive packages emitted deprecation warnings.

Server review must cover allowlisted fields, types/lengths, consent, body limits, rate limits, abuse controls, deduplication and spreadsheet formula injection. Do not put API tokens in browser files. Review Google Fonts, existing analytics and data transfers with counsel. Referrer policy now limits cross-origin referrer detail.

## Local verification

`npm ci --offline --ignore-scripts --no-audit --no-fund`, `npm test`, `npm run build` and `git diff --check` are the release candidate checks. Final results are recorded in NEXT_STEPS.md. The static check covers five pages/four sitemap URLs, local paths/fragments, metadata, schema JSON and landmarks. Browser checks and production baseline comparison now pass; backend persistence remains a separate gate.
