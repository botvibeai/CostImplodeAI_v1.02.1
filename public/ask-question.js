(() => {
  const trigger = document.getElementById("askTriggerBtn");
  const dialog = document.getElementById("askAiDialog");
  const close = document.querySelector(".ask-ai-close");
  const input = document.getElementById("askAiInput");
  const form = document.getElementById("askAiForm");
  const results = document.getElementById("askAiResults");

  if (!trigger || !dialog || !form) return;

  function openDialog() {
    dialog.classList.add("open");
    setTimeout(() => input?.focus(), 50);
  }

  function closeDialog() {
    dialog.classList.remove("open");
  }

  trigger.addEventListener("click", openDialog);
  close?.addEventListener("click", closeDialog);
  dialog.addEventListener("click", (e) => { if (e.target === dialog) closeDialog(); });

  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openDialog();
    }
    if (e.key === "Escape" && dialog.classList.contains("open")) closeDialog();
  });

  const knowledge = [
    {
      q: "cometapi",
      title: "CometAPI.com Sole AI Supplier (Credits Required)",
      body: "CometAPI.com is our sole AI supplier. You must purchase credits inside CometAPI.com before routing live inference for an automatic 10% credit bonus.",
      url: "https://www.cometapi.com/?ref=gcp"
    },
    {
      q: "key",
      title: "API Key Generation, Rotation & Security Guide",
      body: "Learn how to create scoped cia_live_... gateway keys, perform zero-downtime rotations via POST /api/v1/keys/rotate, and encrypt your CometAPI key client-side with PBKDF2 + AES-GCM-256.",
      url: "/docs/keys"
    },
    {
      q: "whop",
      title: "Whop OAuth Sign-In & Subscription Checkout",
      body: "Member login uses Whop OAuth 2.1 (PKCE + OIDC) and tiers ($0/mo Explorer, $29/mo Starter, $49/mo Pro, $149/mo Agency) process directly through Whop Checkout links.",
      url: "/#pricing"
    },
    {
      q: "savings",
      title: "Cost Optimization Engine (Up to 63.3% Savings)",
      body: "CostImplodeAI classifies prompt semantic entropy and routes through CometAPI's model hierarchy with speculative pruning and quad-tier caching for up to 63.3% savings.",
      url: "/#simulator"
    },
    {
      q: "token tax",
      title: "Multilingual Token Tax Mitigation (tokentax0.com - Coming Soon)",
      body: "Non-Latin scripts suffer token fragmentation under standard tokenizers. tokentax0.com pre-translation is coming soon in Q4 2026 to deliver up to 63.3% script savings.",
      url: "/#tokentax"
    }
  ];

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = input.value.trim().toLowerCase();
    if (!query) return;

    const matched = knowledge.filter(k => query.includes(k.q) || k.body.toLowerCase().includes(query) || k.title.toLowerCase().includes(query));
    if (matched.length > 0) {
      results.innerHTML = matched.map(m =>
        '<div class="ask-ai-result"><div class="ask-ai-result-title">' + m.title + '</div><div class="ask-ai-result-body">' + m.body + (m.url ? '<br><a href="' + m.url + '"' + (m.url.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '') + ' style="color:#ff3b24;font-weight:700;">Open resource -></a>' : '') + '</div></div>'
      ).join('');
      return;
    }

    results.innerHTML = '<div class="ask-ai-result"><div class="ask-ai-result-title">CostImplodeAI Knowledge Engine</div><div class="ask-ai-result-body">CostImplodeAI is a 100% BYOK AI arbitrage gateway powered solely by your funded CometAPI.com account, with Whop OAuth &amp; Checkout and up to 63.3% audited savings.<br><a href="/docs/keys" style="color:#ff3b24;font-weight:700;">Read Key Rotation &amp; Security Guide -></a></div></div>';
  });
})();