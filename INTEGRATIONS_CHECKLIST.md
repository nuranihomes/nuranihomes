# Integrations checklist

2026-10-22. No external integration was newly configured or verified. Existing form endpoint and Cloudflare beacon remain unchanged. Never reuse another client's accounts or credentials.

| System | Evidence / access gap | Next owner action and verification |
|---|---|---|
| GitHub | Public source recovered; both connected accounts have pull only | Repository > Settings > Collaborators: owner decides any access change. Owner authenticates securely with `gh auth login -h github.com`; verify `gh auth status` and repository push permission. No password/token in chat. |
| Hosting | Successful Pages run at base commit; live parity unknown | Repository > Settings > Pages: inspect branch/folder, domain, HTTPS. Confirm build respects `_config.yml` exclusions. No merge/deploy before approval. |
| DNS | Provider and full zone unknown; query blocked | Registrar > Nameservers, then actual DNS provider > DNS records: export current zone including A/AAAA/CNAME/MX/TXT/CAA and TTLs. Cloudflare analytics does not prove Cloudflare DNS. Do not modify records until provider/configuration and exact change are reviewed. |
| Search Console | No HTML verification marker in source; DNS/property ownership unknown | Sign into company Google account > Search Console > Property selector. Inspect existing domain and URL-prefix properties before creating anything. Existing owner: Settings > Users and permissions. Otherwise Add property > Domain > `nuranihomes.com` and obtain Google's actual record. |
| Apps Script / Sheets | Existing public endpoint; no script/storage access | Company Workspace > Drive > existing lead sheet > Extensions > Apps Script > Deploy > Manage deployments. Confirm endpoint ownership, code, scopes, permissions, saved rows and error logs. Read back only isolated mock submissions after owner authorizes backend test. |
| Cloudflare Analytics | Beacon included on every page; dashboard unavailable | Company Cloudflare > Web Analytics > site: verify owner/site and actual page metrics. No metrics inferred from snippet presence. |
| Meta portfolio | Granted connector exposes only another client's portfolio/app | Company Meta Business Suite > Settings > Business portfolio info: inspect existing portfolio first. Owner grants intended access through official sign-in; do not create duplicate assets. |
| Facebook / Instagram | No linked account URLs in repository; existence unknown | Business settings > Accounts > Pages / Instagram accounts: confirm company ownership, professional-account linkage and administrators. Access changes require approval. |
| Ad account | No Nurani account available | Business settings > Accounts > Ad accounts: inspect ownership, timezone/currency and restrictions. Do not add contractor/personal accounts, payment details or activate spend. |
| Meta domain | No verification marker in source; DNS unknown | Business settings > Brand safety and suitability > Domains (label may vary): inspect existing domain, obtain the exact Meta-issued method/token. DNS/HTML change and publication require approval; poll Meta verification afterward. |
| Pixel / dataset | No Pixel found in source; account inventory unavailable | Events Manager > Data sources: inspect existing dataset and ownership before creating. Confirm consent, approved IDs and conversion semantics, then test once per action with mock data. |
| WhatsApp | No company number or WABA accessible | Owner supplies an owned number through account setup, completes OTP personally and confirms App vs Platform inventory. Number/login ownership must remain with Nurani. No customer messages during tests. |
| CRM | No accessible CRM found in source | Confirm existing Workspace ownership first. Approve minimum fields, roles, retention and qualification definition before importing personal data. |

## Search Console verification handoff

Exact verification record: **not obtained**, because there is no authorized Search Console session. Do not substitute a guessed token. After Google provides it, record host/name, TXT or CNAME type, exact value and provider TTL; compare with exported zone, obtain DNS approval, add only that record, wait for propagation, then press Verify and confirm Google's result. Do not replace SPF, MX or existing verification records. [Google ownership verification](https://support.google.com/webmasters/answer/9008080?hl=en).

After approved website release: Sitemaps > Add new sitemap > `https://nuranihomes.com/sitemap.xml`; verify submission result and use URL inspection on all four indexable pages. Submission is not proof of indexing. No submission was made in this session.

## Meta readiness gate

Use company-owned assets and named administrators. Owner completes any identity/2FA challenge. Legal name/address/licence and requested supporting documents must match approved evidence; requirements are account-specific and were not inspected. No business verification documents, access/ownership changes or campaigns were submitted. A missing asset in this limited connector scope does not prove it does not exist.

## Integration release acceptance

Owner-confirmed destination → mock request → server persistence → readback → readable receipt → one conversion event, if approved → no contact data in analytics. Verify consent withdrawal/STOP handling and deletion. A click, opaque fetch, successful build or direct visit to thank-you is not a recorded lead.
