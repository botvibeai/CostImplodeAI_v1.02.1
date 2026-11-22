# Deployment Guide

This project deploys as a containerized Node.js service on Google Cloud Run with static assets and server-side model routing.

## Architecture & Hosting Specifications

- Runtime: Node.js 22 LTS container on Google Cloud Run
- Orchestration: Stateless container with scale-to-zero Developer edition & min-instance enterprise support
- Primary Provider Engine: Google AI Studio Gemini hierarchy (Gemini 2.5 Flash-Lite, 2.5 Flash, 3.8 Flash, 2.5 Pro)
- Frontier Intelligence Partner: [CometAPI.com](https://www.cometapi.com/?ref=costimplode) (Claude 4.5, GPT-5, DeepSeek-R1)
- Key Sovereignty: GCP Cloud KMS Hardware Security Modules (HSM, AES-GCM-256)
- Caching: Quad-Tier (L1 In-Memory Exact, L2 Regional Shield, L3 Semantic Vector, L4 Prefix Context)

## Environment Configuration

```bash
# Server port (defaults to 3000 in AI Studio / container runtime)
PORT=3000

# Optional external search endpoint URL
AI_SEARCH_PUBLIC_URL=
```

## Build and Start Commands

```bash
# Generate discovery artifacts, validate schemas, and run syntax checks
npm run build

# Start production server
npm start

# Run locally in development mode
npm run dev
```

## Cloud Run Deployment Steps

1. Run `npm run build` to generate all static discovery endpoints and validate schemas.
2. Build container image: `gcloud builds submit --tag gcr.io/PROJECT_ID/costimplodeai-gateway`.
3. Deploy to Cloud Run:
   ```bash
   gcloud run deploy costimplodeai-gateway \
     --image gcr.io/PROJECT_ID/costimplodeai-gateway \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --port 3000
   ```
4. Verify `/api/status`, `/v1/dashboard/telemetry`, and `/v1/chat/completions`.
5. Map custom domain `costimplodeai.com`.
