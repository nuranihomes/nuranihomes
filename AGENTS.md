# Nurani Homes session coordination

At the beginning of each session, read all eight files in `.chatgpt-sync/` if present, inspect Git status and compare the documented state with the implementation. Treat recorded checks as dated evidence, not current guarantees. If these private files are missing in a fresh clone, request the current handoff; do not reconstruct business decisions as facts.

At the end of each session, update `CURRENT_STATUS.md`, `TASKS.md`, `CHANGELOG.md` and `HANDOFF_TO_CHATGPT.md` with verified results, unresolved blockers and the next action. Preserve previous decisions and dated entries.

When the user supplies instructions from ChatGPT, append a dated entry to `INSTRUCTIONS_FROM_CHATGPT.md`, identify technical implications and conflicts, and update the task list. Business decisions belong to Nuraly and the partners; Codex executes technical work. An unapproved ChatGPT proposal does not authorize spending, publication or regulatory claims.

The sync directory is private, local and ignored by Git. Never add it to a public commit or website output. Do not store credentials or customer records in it. ChatGPT receives only a user-pasted handoff; no automatic cross-chat integration is configured.

No production deployment, paid activation, advertising launch, property sales offer, reservation collection or claim of licensing without the user's explicit approval and applicable permissions. Consultancy licensing does not establish permission for overseas lead generation or referrals. Record uncertainty, do not resolve it through website wording.

Preserve the owner's current design and content unless changes are requested. Work on a feature branch. Before merging older work, inspect newer owner changes, especially consultancy positioning and removal of the phone number. Mocked tests do not prove a live lead was saved or an email was delivered.
