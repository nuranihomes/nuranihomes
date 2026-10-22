# Release handoff

Repository: `nuranihomes/nuranihomes`.
Branch: `codex/nurani-digital-foundation`.
Upstream base: `14d7c5b336fb0dc2b4649e89e3231eea8dfbf21f`.
Local directory: `Projects/nurani-homes`.
GitHub write invitation accepted and `push:true` verified. Branch/PR publication is the current step; no merge, DNS change or production deployment performed.

## Verified locally

- All 18 original blobs, upstream tree and signed commit reconstructed through GitHub integration with matching Git object hashes; original history ancestry preserved as a shallow boundary.
- Offline dependency installation with lifecycle scripts disabled; no runtime npm dependencies.
- 17 tests pass: static headings/content, English/Urdu toggle, validation/consent, honeypot, hidden partner fields, network/timeout handling, repeat-submit protection, missing endpoint and repeated-checkbox payloads. All submissions are mocked.
- `npm run build` passes: deterministic SEO generation, JavaScript syntax checks, five-page metadata/schema/internal-link validation, four sitemap URLs and 20-file public build in `dist/`.
- SEO generation is idempotent. `git diff --check` passes.
- Fresh online npm audit including development packages reports zero vulnerabilities.
- All 40 browser page/viewport/language checks pass with live fonts, plus two mocked form flows. Desktop/mobile screenshots inspected.
- Live assets match the upstream base; www redirects to apex; a missing route returns 404. DNS nameservers are Squarespace. No DNS changes made.

## Not verified

Backend saved leads, Workspace/Search Console/Meta ownership, complete DNS provider-zone export, remote CI, content/legal approval and post-release parity remain unverified. Live baseline checks and mobile/desktop rendering are now complete. `NH_BROWSER_LIVE_FONTS=1 npm run test:browser` allows only font hosts externally; form submissions remain mocked.

## Changed files

- Existing: `index.html`, `buyers.html`, `partners.html`, `privacy.html`, `thank-you.html`, `lang.js`, `robots.txt`, `sitemap.xml`.
- New implementation/tooling: `forms.js`, `accessibility.css`, `.gitignore`, `_config.yml`, `package.json`, `package-lock.json`, `scripts/seo.py`, `scripts/validate.py`, `scripts/build.py`, `scripts/browser-check.cjs`, `tests/site.test.cjs`, `.github/workflows/checks.yml`.
- Documentation: this file plus `AUDIT.md`, `SEO_IMPLEMENTATION.md`, `DIGITAL_INFRASTRUCTURE.md`, `INTEGRATIONS_CHECKLIST.md`, `COMPLIANCE_BLOCKERS.md`.
- Existing form endpoint, CNAME, images, branding and Cloudflare snippet preserved. No new integration activated.

## Five priorities

1. Publish the verified feature branch and draft PR using the now-confirmed write access. Remote main remains at the original base. Keep production unchanged while the receipt contract is reviewed.
2. Obtain owner/legal decisions on existing land, project, pricing, eligibility and overseas-advertising claims. Record approved content and required permits before release or promotion.
3. Verify company Apps Script/Workspace ownership and source, test persistence on an isolated sheet and implement a readable receipt contract. Do not count opaque fetches as leads. Approve any new endpoint or hosting architecture separately.
4. Run `npm ci --ignore-scripts`, fresh dependency audit, `npm test`, `npm run build`, `npx playwright install chromium`, `npm run test:browser`; inspect real-font desktop/mobile screenshots and live site independently. Resolve failures, verify Jekyll exclusions and request explicit release approval for the reviewed commit.
5. After approved deployment and live readback, verify company Search Console/domain and submit sitemap. Inventory owned Meta/WhatsApp assets; approve CRM fields and measurement consent before tracking activation. Advertising remains inactive pending all legal and budget gates.

Suggested PR title: `Fix form receipt handling and establish static SEO checks`.
Suggested PR description: `The buyer and partner forms treated an opaque request as a saved lead. Share validation/submission handling, report unconfirmed receipts honestly, and exclude inactive partner fields. Add deterministic static metadata, sitemap/robots fixes, semantic accessibility and local/CI checks. Local build and 17 mocked tests pass. 40 browser combinations and two mocked form flows also pass; live baseline parity is confirmed. Backend delivery and legal copy approval remain pending. No production deployment or integration activation.`
