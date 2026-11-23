# Security Specification — CostImplodeAI Telemetry (`call_telemetry`)

## 1. Data Invariants
1. Telemetry records in `call_telemetry` MUST ONLY be written by the server backend (`POST /v1/chat/completions`) via the Firebase Admin SDK.
2. Telemetry documents MUST NEVER contain prompt text, conversation messages, completion outputs, user emails, or API keys.
3. Direct client reads (`get`, `list`) and writes (`create`, `update`, `delete`) against `/call_telemetry/{telemetryId}` MUST always return `PERMISSION_DENIED`.
4. Aggregated statistics are exposed solely through `GET /api/dash-stats` computed server-side from `call_telemetry`.

## 2. Adversarial Payloads ("Dirty Dozen")
All 12 client-side requests against `/call_telemetry` must fail with `PERMISSION_DENIED`:
1. Unauthenticated client `addDoc(collection(db, 'call_telemetry'), validPayload)` -> Denied.
2. Authenticated client `addDoc(collection(db, 'call_telemetry'), validPayload)` -> Denied.
3. Unauthenticated client `getDocs(collection(db, 'call_telemetry'))` -> Denied.
4. Authenticated client `getDocs(collection(db, 'call_telemetry'))` -> Denied.
5. Client attempting shadow field injection (`{ ...validPayload, prompt: "secret" }`) -> Denied.
6. Client attempting API key exfiltration field (`{ ...validPayload, api_key: "sk-123" }`) -> Denied.
7. Client attempting inflated savings injection (`{ ...validPayload, savings_pct: 99.99 }`) -> Denied.
8. Client attempting negative baseline cost tampering (`{ ...validPayload, baseline_cost_usd: -5 }`) -> Denied.
9. Client attempting 1.5KB oversized document ID poisoning -> Denied.
10. Client attempting `updateDoc` on existing telemetry doc to alter `ny_date` -> Denied.
11. Client attempting `deleteDoc` on existing telemetry doc -> Denied.
12. Client attempting read/write on arbitrary undeclared root collections (`/secrets/keys`) -> Denied by global catch-all.
