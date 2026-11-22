# Security Policy

## Reporting

For security, privacy, credential, routing, or abuse concerns, contact:

- `support@costimplodeai.com`

## Secrets

Never commit:

- Cloudflare API tokens
- provider API keys
- gateway keys
- customer data
- PayPal receipts
- private dashboard exports
- `.env` or `.dev.vars`

Only public endpoint URLs and public discovery metadata belong in this repository.

## Deployment Safety

The root production domain `https://costimplodeai.com` is treated as protected. Promote a Worker route to the root domain only after explicit approval and a visual/discovery verification pass.

## Auth Metadata

OAuth/OIDC documents in this repository are prelaunch discovery metadata. They must not advertise production token endpoints or grants until real authentication exists.
