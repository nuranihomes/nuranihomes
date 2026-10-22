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

macOS Darwin arm64; Git 2.51.2; Node 25.9.0; npm 11.12.1; `gh` available. `gh auth status` reported invalid authentication, but outbound DNS is also blocked, so credential validity cannot be independently diagnosed here. Both connected GitHub accounts report `pull:true`, `push:false` for this repository. No matching local project/context or Nurani credential-map entry was found.

Normal clone failed because the terminal could not resolve github.com. The exact signed upstream commit, tree and all 18 blobs were recovered through the GitHub integration and verified against Git SHA-1 object IDs. This is a genuine shallow checkout, not a recreated baseline commit. Earlier history is not locally available.

Independent live inspection was attempted at www/apex HTTPS, robots.txt and the GitHub Pages URL. Web fetch failed; terminal DNS failed; `dig` was denied socket access. Therefore live HTTP codes, TLS, redirects, DNS provider/records, current HTML, broken external links, cache headers and performance scores remain **unverified**. Repository/domain correspondence is strongly supported by CNAME and the Pages run, but byte-level production parity is **not established**. Do not interpret the tooling failures as a website outage.

Chromium launch failed with macOS sandbox `bootstrap_check_in ... Permission denied`. Desktop/mobile screenshots, real font layout, contrast and browser interaction checks are pending. DOM tests do not prove rendered mobile quality.

## Findings by business impact

| Priority | Evidence | Impact and disposition |
|---|---|---|
| P0, release gate | Homepage/meta claim DHA-titled land, Dubai sales, instalments; buyer form contains approximate US$36k/51k/64k prices and ownership/payment claims | Approval evidence absent. Existing copy preserved; property promotion and release must wait for owner/legal review. See COMPLIANCE_BLOCKERS.md. |
| P1 | Both forms redirected after any resolved `no-cors` fetch | Opaque responses cannot confirm storage. Shared handler now reports unconfirmed receipt and does not emit a conversion or redirect. Backend acknowledgement remains blocked. |
| P1 | Apps Script code/ownership and spreadsheet access unavailable | Cannot verify retention, validation, rate limiting, consent evidence or saved leads. Existing endpoint unchanged; no real submissions sent. |
| P1 | No form email validity check; hidden partner fieldsets still submitted stale values | Validation and disabled inactive fieldsets implemented, covered by mocked tests. Client checks do not replace server validation. |
| P2 | No canonical on any page; privacy/thank-you lacked descriptions; thank-you OG URL pointed home | Generated canonical/social metadata and missing descriptions added. Existing claims in metadata still require approval. |
| P2 | robots blocked thank-you but page had no noindex; sitemap lastmod was stale | Added crawlable noindex; regenerated four-page sitemap without invented modification dates. |
| P2 | Missing main landmarks, no H1 on privacy/thank-you, unnamed option groups | Semantic headings/landmarks, skip link, group labels, error focus and reduced-motion support implemented. Visual verification pending. |
| P2 | Only `src`/`utm_source` recorded at direct form entry | Attribution across homepage navigation and full UTM fields remain a preparation item, not a working analytics integration. |
| P2 | No test/build process; engineering docs could enter Pages output | Added reproducible checks, public-asset build allowlist and Jekyll exclusions. Remote CI and exclusions still need hosted verification. |
| P3 | Repeated inline CSS; external English/Urdu fonts | No measured bottleneck available. Retained branding/fonts; defer CSS extraction and font self-hosting until browser measurements justify them. |

## Security

No private-key material, credential files, server secrets, exposed admin route or privileged API key was identified in the inspected base tree. The Apps Script URL and Cloudflare beacon identifier are public client configuration, not server credentials. Full historic secret scanning and fresh dependency-advisory lookup are not complete; no rotation or history rewrite was performed.

No production npm dependencies. Test-only packages are lockfile-pinned and installed from the local cache with lifecycle scripts disabled. Offline `npm audit --omit=dev` reported zero findings; this does not establish that development dependencies are free of current vulnerabilities. Refresh their advisory audit before CI/release. Legacy jsdom transitive packages emitted deprecation warnings.

Server review must cover allowlisted fields, types/lengths, consent, body limits, rate limits, abuse controls, deduplication and spreadsheet formula injection. Do not put API tokens in browser files. Review Google Fonts, existing analytics and data transfers with counsel. Referrer policy now limits cross-origin referrer detail.

## Local verification

`npm ci --offline --ignore-scripts --no-audit --no-fund`, `npm test`, `npm run build` and `git diff --check` are the release candidate checks. Final results are recorded in NEXT_STEPS.md. The static check covers five pages/four sitemap URLs, local paths/fragments, metadata, schema JSON and landmarks. Browser/production/backend checks remain separate gates.
