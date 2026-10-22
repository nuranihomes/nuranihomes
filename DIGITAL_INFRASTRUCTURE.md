# Digital infrastructure preparation

## Current boundary

Existing: GitHub Pages + static pages + Google Apps Script form destination + Cloudflare Web Analytics snippet. Only repository access was available. No new cloud resources, paid services, messaging integrations or tracking IDs were created. Account ownership, form storage and analytics data are unverified.

Keep this stack initially. Before changing hosting, inspect the existing Apps Script/Google Workspace deployment and prove that a test submission is written to a company-controlled sheet. The website's privacy notice already claims such storage, but source code alone cannot substantiate it.

## Form receipt contract

Current transport is opaque `no-cors`; a browser cannot distinguish saved, rejected or failed backend responses. This branch intentionally shows an unconfirmed receipt, prevents immediate repeat submits after an opaque response, and provides the existing email fallback. Network failures/timeouts also avoid claiming receipt. It does not fix or verify backend delivery.

Preferred next step: review the current Apps Script first. If it cannot provide a readable, verifiable acknowledgement safely, prepare a company-owned same-origin form API or approved managed form service. Do not add a proxy/provider until ownership and architecture are approved.

Acceptance contract: bounded/allowlisted request, server validation of consent and fields, honeypot/rate limit, deduplication key, write-before-ack, stable internal lead ID and a JSON receipt only after successful persistence. Handle timeout as unknown and reconcile by deduplication key. Use restricted logs without raw contact data. Protect Sheets writes from formula interpretation (typed RAW values or safe escaping). Do not trust browser validation. Test on an isolated sheet with mock data, then read back the created row; do not message customers.

## WhatsApp and CRM choice

Start with the WhatsApp Business App on a verified company-owned number and a restricted company Workspace lead sheet, subject to confirming Workspace ownership. It suits the present manual, early-stage workflow; there is no evidence yet that an API/shared automation platform is needed. [WhatsApp Business App](https://whatsappbusiness.com/products/business-app/).

| Candidate | Implementation estimate, not a quote | Maintenance / spend decision |
|---|---|---|
| Existing Workspace sheet + Business App | 0.5-1 engineering day after access | Lowest setup burden; manual assignment/history; verify existing subscription and permissions |
| Hosted CRM + approved WhatsApp connector | 2-4 days after vendor/access decision | Less custom code, recurring vendor/seat/messaging costs; obtain live quote and processing terms |
| Custom CRM + Cloud API | 5-10+ days for a tested initial flow | Highest engineering/security burden; unjustified at current stage |

No licence or subscription prices have been assumed. App, Platform/API and third-party providers are distinct: Cloud API is Meta-hosted Platform access; a third-party provider adds its own tooling, fees and processing relationship. Actual account eligibility, verification and template rules must be checked in the owned Meta account before implementation.

Pipeline: New Lead → Contacted → Qualified → Meeting Scheduled → Interested → Follow-up Required → Closed Won / Closed Lost. These are allowed statuses, not a forced linear funnel. Record every status change with timestamp/actor; require next action for open leads and reason for loss. Owner defines qualification criteria before reporting qualified leads.

Minimal lead fields: internal ID, created time, lead source/campaign, consent purpose/time/version/channel, contact name and approved contact channel, interested market/property type, optional budget range, assigned person, current stage, last contact, next action/date, meeting outcome, closed/lost reason. Avoid passport, bank or identity-document collection at this stage. Review existing profession/family/housing fields for necessity; do not silently remove existing business fields.

For API phase only: signed incoming webhook → deduplicate provider message ID → normalize owned contact channel → find/create lead → append restricted conversation record → assign human → status/next action → aggregate reporting. Validate webhook verification and signatures, keep tokens server-side, acknowledge promptly, retry queued persistence, support opt-out and human handoff. Use provider test numbers; approve templates and consent flows before any outbound automation. Add Cloud API only when multi-agent workload/history requirements justify it.

## Measurement plan, not installed tracking

Cloudflare beacon preserved. GA4/GTM/Meta Pixel IDs and owners are unknown. Do not add duplicate page tags or trackers before privacy review and approval. If GTM is chosen, it is the single tag owner; disable competing direct tags/automatic form events where they duplicate custom events.

| Event | Trigger / owner | Status |
|---|---|---|
| `page_view` | One page load after applicable consent; analytics owner | Existing Cloudflare page metrics only; GA4 pending |
| `contact_form_submit` | One confirmed backend receipt, not button click or opaque response | Blocked on receipt contract |
| `email_click` | Real mailto activation, coarse destination category only | Planned; links already exist |
| `whatsapp_click` | Real owned-number link activation | No verified number/link; not implemented |
| `phone_click` | Real tel activation | No verified number/link; not implemented |
| `lead_created` | One persisted CRM lead, deduplicated internally | Backend/CRM pending |
| `meeting_requested` | Actual booking/request acceptance | No meeting flow exists; not implemented |

Keep names, phone/email, form answers, message text and contact IDs out of analytics. Use allowlisted campaign codes; sanitize page URL/referrer, exclude arbitrary query strings and never use personal data in UTM parameters. Disable advanced matching/user-provided data by default. [Google PII guidance](https://support.google.com/analytics/answer/6366371?hl=en).

Future attribution: approved `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`; preserve across internal CTA navigation only after storage/consent design review. Existing `source` retains only direct form-entry `src` or `utm_source`, capped at 60 characters. Do not report full attribution as implemented.

Reporting: weekly visits and sources from the approved analytics account; unique persisted leads, qualified leads, meetings and stage changes from CRM. Report lead/session conversion with matching periods and deduplicated totals; consent/model differences may prevent exact reconciliation. CPL = approved spend / unique leads, CPQL = spend / qualified leads; use N/A for zero denominators or missing spend. No baseline exists in this audit.

## B2C/B2B research

Treat 80/20 as a hypothesis. Separate B2C (Gulf-based Pakistani professionals/overseas Pakistanis, by need and market) from B2B (brokers, agencies, referral/community partners). Research approved factual messaging, channel fit, language, response time, qualification and meeting quality independently. Do not infer foreign-buyer eligibility or Karachi sale permission.

First use permitted organic enquiries and owner-led interviews. After legal approval, collect current channel/vendor quotes for test reach, creative and spend; no credible CPM/CPL estimate is available yet. Model spend = impressions / 1,000 × quoted CPM; leads = visits × explicitly assumed conversion; track assumptions separately from observations. Approve exact daily budget and currency before paid tests. Review qualified-lead and meeting outcomes by segment before adopting an 80/20 allocation. No campaigns or customer outreach were started.
