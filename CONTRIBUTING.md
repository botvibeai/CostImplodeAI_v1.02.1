# Contributing

CostImplodeAI is a protected live-site import. Keep changes narrow, reviewed, and easy to verify.

## Ground Rules

- Do not redesign the UI without approval.
- Do not delete baseline files without approval.
- Do not reframe CostImplodeAI as Cloudflare advertising.
- Keep public copy focused on BYOK AI gateway routing and eligible cost savings.
- Keep Native1API references separate and prelaunch-accurate.
- Do not expose private provider, margin, cache, supplier, or affiliate mechanics.

## Before Changing Public UI

1. Capture or review the current screenshot.
2. Explain the intended visual change.
3. Keep the change scoped.
4. Verify desktop and mobile.

## Before Deploying

Run:

```powershell
npm run build
```

Then verify:

```powershell
curl.exe -sS -D - https://ciai.costimplodeai.com/ -o NUL
curl.exe -sS -D - -H "Accept: text/markdown" https://ciai.costimplodeai.com/ -o NUL
curl.exe -sS -D - https://ciai.costimplodeai.com/.well-known/api-catalog -o NUL
curl.exe -sS https://ciai.costimplodeai.com/api/status
```
