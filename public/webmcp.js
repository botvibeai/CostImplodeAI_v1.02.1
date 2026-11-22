(() => {
  const context = navigator.modelContext;
  if (!context) return;
  const register = context.registerTool || context.provideContext;
  if (typeof register !== "function") return;
  const controller = new AbortController();
  const tools = [
    {
      name: "view_pricing",
      description: "Open the CostImplodeAI Whop subscription plans section.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      execute: async () => { location.hash = "pricing"; return { ok: true, url: location.href }; }
    },
    {
      name: "connect_cometapi",
      description: "Navigate to the CometAPI partner registration with 10% credit bonus.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      execute: async () => { location.href = "/partners/cometapi"; return { ok: true, url: "https://www.cometapi.com/?ref=gcp" }; }
    },
    {
      name: "test_simulator",
      description: "Open the CostImplodeAI live arbitrage simulator.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      execute: async () => { location.hash = "simulator"; return { ok: true, url: location.href }; }
    },
    {
      name: "open_keys_guide",
      description: "Open the CostImplodeAI API key generation, rotation, and BYOK security guide.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      execute: async () => { location.href = "/docs/keys"; return { ok: true, url: location.href }; }
    },
    {
      name: "open_docs",
      description: "Open CostImplodeAI public API documentation.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      execute: async () => { location.href = "/docs/api"; return { ok: true, url: location.href }; }
    }
  ];
  for (const tool of tools) {
    try { register.call(context, tool, { signal: controller.signal }); } catch {}
  }
})();