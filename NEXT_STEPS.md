# Release handoff

Repository: `nuranihomes/nuranihomes`.
Branch: `codex/nurani-digital-foundation`.
Upstream base: `14d7c5b336fb0dc2b4649e89e3231eea8dfbf21f`.
Local directory: `Projects/nurani-homes`.
PR: not created; both connected GitHub accounts have read-only repository access. No push, merge, DNS change or production deployment performed.

## Verified locally

- All 18 original blobs, upstream tree and signed commit reconstructed through GitHub integration with matching Git object hashes; original history ancestry preserved as a shallow boundary.
- Offline dependency installation with lifecycle scripts disabled; no runtime npm dependencies.
- 17 tests pass: static headings/content, English/Urdu toggle, validation/consent, honeypot, hidden partner fields, network/timeout handling, repeat-submit protection, missing endpoint and repeated-checkbox payloads. All submissions are mocked.
- `npm run build` passes: deterministic SEO generation, JavaScript syntax checks, five-page metadata/schema/internal-link validation, four sitemap URLs and 20-file public build in `dist/`.
- SEO generation is idempotent. `git diff --check` passes.
- Offline production-only audit reports no findings; development-package advisory freshness is not verified.

## Not verified

Browser rendering/mobile screenshots (Chromium blocked by sandbox), external fonts, live performance, HTTP/TLS/cache/redirect/404 behavior, production byte parity, DNS zone/provider, backend saved leads, account ownership, current full dependency advisories, remote CI and legal approval. `npm run test:browser` is prepared for 40 viewport/page/language combinations using mocked local HTTP responses; it blocks external services and cannot prove real-font appearance. It did not run successfully in this environment.

## Changed files

- Existing: `index.html`, `buyers.html`, `partners.html`, `privacy.html`, `thank-you.html`, `lang.js`, `robots.txt`, `sitemap.xml`.
- New implementation/tooling: `forms.js`, `accessibility.css`, `.gitignore`, `_config.yml`, `package.json`, `package-lock.json`, `scripts/seo.py`, `scripts/validate.py`, `scripts/build.py`, `scripts/browser-check.cjs`, `tests/site.test.cjs`, `.github/workflows/checks.yml`.
- Documentation: this file plus `AUDIT.md`, `SEO_IMPLEMENTATION.md`, `DIGITAL_INFRASTRUCTURE.md`, `INTEGRATIONS_CHECKLIST.md`, `COMPLIANCE_BLOCKERS.md`.
- Existing form endpoint, CNAME, images, branding and Cloudflare snippet preserved. No new integration activated.

## Five priorities

1. Restore network/browser capability and company GitHub write access. Recheck remote main before push; this checkout has the actual upstream parent, so no unrelated-history merge is needed. Push the named branch and open a draft PR only after verifying permissions and remote changes.
2. Obtain owner/legal decisions on existing land, project, pricing, eligibility and overseas-advertising claims. Record approved content and required permits before release or promotion.
3. Verify company Apps Script/Workspace ownership and source, test persistence on an isolated sheet and implement a readable receipt contract. Do not count opaque fetches as leads. Approve any new endpoint or hosting architecture separately.
4. Run `npm ci --ignore-scripts`, fresh dependency audit, `npm test`, `npm run build`, `npx playwright install chromium`, `npm run test:browser`; inspect real-font desktop/mobile screenshots and live site independently. Resolve failures, verify Jekyll exclusions and request explicit release approval for the reviewed commit.
5. After approved deployment and live readback, verify company Search Console/domain and submit sitemap. Inventory owned Meta/WhatsApp assets; approve CRM fields and measurement consent before tracking activation. Advertising remains inactive pending all legal and budget gates.

Suggested PR title: `Fix form receipt handling and establish static SEO checks`.
Suggested PR description: `The buyer and partner forms treated an opaque request as a saved lead. Share validation/submission handling, report unconfirmed receipts honestly, and exclude inactive partner fields. Add deterministic static metadata, sitemap/robots fixes, semantic accessibility and local/CI checks. Local build and 17 mocked tests pass. Browser, backend delivery, live parity and legal copy approval remain release gates. No production deployment or integration activation.`
