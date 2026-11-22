# CostImplodeAI - BYOK AI Arbitrage Gateway

CostImplodeAI is an autonomous multi-provider AI arbitrage gateway and savings governance engine running on Google Cloud Run and Google AI Studio. It routes model requests across high-yield provider paths (Google AI Studio Gemini hierarchy, CometAPI frontier intelligence pipeline, and custom OpenAI-compatible slots) while keeping provider accounts, keys, and billing strictly under user control.

## Architecture & Core Features

- **Google Cloud Run Baseline**: Stateless containerized deployment with sub-second scale and high-concurrency request dispatching.
- **Google AI Studio Integration**: Multi-tier Gemini model execution (Gemini 2.5 Flash-Lite, 2.5 Flash, 3.8 Flash, 2.5/3.1 Pro).
- **Official Frontier Partner**: [CometAPI.com](https://www.cometapi.com/?ref=costimplode) provides Claude 4.5 Sonnet, GPT-5, and DeepSeek-R1 frontier routing with an exclusive 10% credit bonus (`ref=costimplode`).
- **Dynamic Yield Optimization**: Real-time prompt complexity classification, token deduplication, and Quad-Tier semantic caching delivering audited savings of up to 63.3%.
- **Multilingual Token Tax Mitigation (Coming Soon)**: tokentax0.com compression module eliminating BPE token penalties on non-Latin scripts (Devanagari, Arabic, Cyrillic) delivering up to 63.3% cost reduction (launching Q4 2026).
- **BYOK Key Sovereignty**: API keys stay under user ownership; secured via GCP Cloud KMS Hardware Security Modules (AES-GCM-256).
- **OpenAI-Compatible Ingress**: Drop-in `baseURL: "https://api.costimplodeai.com/v1"` without application code rewrites.

## What This Site Provides

- Multilingual homepage with interactive token tax calculator and live arbitrage simulator
- Canonical square logo mark (`/costimplode-mark.png`) and social preview card (`/costimplode-social.jpg`)
- Official CometAPI vector asset (`/cometapi-logo.svg`)
- RFC 8288 homepage `Link` headers
- `Accept: text/markdown` content negotiation for agents
- API catalog at `/.well-known/api-catalog`
- OpenAPI 3.1 specification at `/openapi.json`
- Human API docs at `/docs/api`
- Agent registration guidance at `/auth.md`
- OAuth protected-resource and authorization-server metadata
- MCP server card at `/.well-known/mcp/server-card.json`
- Agent skills index and hosted `SKILL.md` artifacts
- WebMCP guarded browser tools

## Project Structure

```text
baseline/                 Captured live-site baseline and assets
public/                   Static assets, logos, and generated discovery files
public/.well-known/       Agent skills, OAuth, API catalog, and MCP discovery files
scripts/                  Generator, local server, and validation scripts
src/                      Routing logic and generated homepage modules
docs/                     Deployment and agent discovery guides
```

## Development & Local Run

Requirements: Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```
2. Build and generate static discovery artifacts:
   ```bash
   npm run build
   ```
3. Run locally:
   ```bash
   npm run dev
   ```
4. Access local site:
   ```text
   http://localhost:3000
   ```

## Production Deployment

Refer to [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for Google Cloud Run deployment instructions.

## Verification

Run all build and validation checks:

```bash
npm run build
npm run validate
```
