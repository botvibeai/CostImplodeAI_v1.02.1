# auth.md

CostImplodeAI operates as a 100% BYOK AI model arbitrage gateway on Google Cloud Run. Inference executes strictly against your funded **CometAPI.com** account, while developer login and subscription billing use **Whop OAuth 2.1** and **Whop Checkout**.

## Prerequisites

1. Purchase credits at [CometAPI.com](https://www.cometapi.com/?ref=gcp) (includes an automatic 10% referral credit bonus) and generate your `sk-...` API key.
2. Sign in via **Whop OAuth** and generate a `cia_live_...` gateway key.

## Authentication & BYOK Configuration

- **Gateway Header Authentication**: `Authorization: Bearer <your_costimplode_gateway_key>`
- **CometAPI Direct Passthrough Header**: `x-byok-cometapi-key: <your_funded_cometapi_key>`
- **Base URL**: `https://api.costimplodeai.com/v1`
- **Key Rotation & Security Playbook**: `https://costimplodeai.com/docs/keys`

## OAuth Protected Resource

- Protected Resource Metadata: `https://costimplodeai.com/.well-known/oauth-protected-resource`
- Authorization Server Metadata: `https://costimplodeai.com/.well-known/oauth-authorization-server`
