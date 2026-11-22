# Agent Discovery

CostImplodeAI publishes agent-readable metadata so agents can discover public product, API, support, BYOK pricing, and authentication information without scraping browser-only HTML.

## Published Resources

- `/.well-known/api-catalog`
- `/openapi.json`
- `/docs/api`
- `/auth.md`
- `/.well-known/oauth-protected-resource`
- `/.well-known/oauth-authorization-server`
- `/.well-known/openid-configuration`
- `/.well-known/mcp/server-card.json`
- `/.well-known/agent-skills/index.json`
- `/llms.txt`

## Homepage Negotiation

Browsers receive HTML by default.

Agents can request Markdown:

```bash
curl -H "Accept: text/markdown" https://costimplodeai.com/
```

The response is:

```text
Content-Type: text/markdown; charset=utf-8
```

## WebMCP

`public/webmcp.js` registers safe browser tools only when `navigator.modelContext` exists:

- `view_pricing`: Navigate to BYOK pricing tiers
- `connect_cometapi`: Connect to CometAPI partner portal with 10% credit bonus
- `test_simulator`: Open the live arbitrage simulator
- `token_tax_audit`: Open multilingual token tax audit calculator
- `open_docs`: Open OpenAPI and developer documentation

## Knowledge Engine ("Ask a question")

The visible UI says `Ask a question`.

The gateway exposes:

- `/ai-search/search` and `/search`
- `/mcp`
- `/v1/chat/completions` (OpenAI-compatible arbitrage endpoint)
- `/v1/models` (Model catalog across CometAPI and Google AI Studio)
