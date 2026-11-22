// CostImplodeAI Branded Pages Templates (BYOK Guide, Keys & Rotation Guide, Privacy, Terms, Compliance)
// Built with dark theme, responsive cross-linked navigation, back-to-home buttons, and CometAPI-only BYOK architecture.

export function getSharedStyles() {
  return `
    :root {
      --orange: #ff1a0a;
      --orange-light: #ff3b24;
      --orange-dim: rgba(255,26,10,0.12);
      --orange-border: rgba(255,26,10,0.32);
      --cyan: #00b4d8;
      --cyan-dim: rgba(0,180,216,0.15);
      --cyan-border: rgba(0,180,216,0.35);
      --bg: #030712;
      --surface: #0f172a;
      --card: #0d1117;
      --card2: #111827;
      --border: #1f2937;
      --border2: #374151;
      --text: #f9fafb;
      --muted: #9ca3af;
      --dim: #6b7280;
      --green: #4ade80;
      --blue: #60a5fa;
      --purple: #c084fc;
      --gold: #fbbf24;
      --font-mono: 'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.65;
      overflow-x: hidden;
      font-size: 15px;
    }
    a { text-decoration: none; color: inherit; }

    /* NAV */
    nav {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      backdrop-filter: blur(14px);
      background: rgba(3,7,18,0.94);
      border-bottom: 1px solid var(--border);
    }
    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 900;
      white-space: nowrap;
    }
    .logo-mark-img {
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      object-fit: cover;
      border-radius: 8px;
    }
    .logo-wordmark {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: var(--orange);
      font-size: 15px;
      line-height: 0.95;
      letter-spacing: 0.08em;
      font-weight: 950;
      text-transform: uppercase;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 18px;
    }
    .nav-links a {
      color: var(--muted);
      font-size: 13.5px;
      font-weight: 600;
      transition: color .15s;
    }
    .nav-links a:hover, .nav-links a.active {
      color: var(--text);
    }
    .nav-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .nav-comet {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--cyan-dim);
      border: 1px solid var(--cyan-border);
      color: #38bdf8;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      transition: all .15s;
    }
    .nav-comet:hover {
      background: rgba(0,180,216,0.25);
      transform: translateY(-1px);
    }
    .btn-return-home {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--orange);
      color: #fff;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      transition: all .15s;
      white-space: nowrap;
    }
    .btn-return-home:hover {
      background: var(--orange-light);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(255,26,10,0.3);
    }

    /* BADGES */
    .badge-fips {
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: var(--green);
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    /* LAYOUT */
    .page-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 32px 24px 80px;
    }
    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: var(--dim);
      margin-bottom: 24px;
      flex-wrap: wrap;
    }
    .breadcrumbs a {
      color: var(--muted);
      transition: color .15s;
    }
    .breadcrumbs a:hover {
      color: var(--orange-light);
    }
    .breadcrumbs span.sep {
      color: var(--border2);
    }
    .breadcrumbs span.current {
      color: var(--text);
      font-weight: 600;
    }

    /* HERO BANNER */
    .page-hero {
      background: linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(13,17,23,0.65) 100%);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 36px 32px;
      margin-bottom: 36px;
      position: relative;
      overflow: hidden;
    }
    .page-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--orange), var(--cyan), transparent);
    }
    .page-hero h1 {
      font-size: 32px;
      font-weight: 900;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
      color: var(--text);
    }
    .page-hero p {
      font-size: 16px;
      color: var(--muted);
      max-width: 840px;
      line-height: 1.65;
    }
    .meta-bar {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 20px;
      font-size: 12px;
      color: var(--dim);
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.06);
    }

    /* TWO-COLUMN CONTENT */
    .content-grid {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 40px;
      align-items: start;
    }
    .sticky-toc {
      position: sticky;
      top: 80px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
    }
    .toc-title {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--dim);
      margin-bottom: 12px;
    }
    .toc-menu {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .toc-menu a {
      display: block;
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 13px;
      color: var(--muted);
      transition: all .15s;
    }
    .toc-menu a:hover {
      color: var(--text);
      background: rgba(255,255,255,0.04);
      padding-left: 14px;
    }

    /* ARTICLE SECTIONS */
    .article-body section {
      margin-bottom: 44px;
      scroll-margin-top: 90px;
    }
    .article-body h2 {
      font-size: 22px;
      font-weight: 800;
      color: var(--text);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .article-body h3 {
      font-size: 16px;
      font-weight: 700;
      color: #e2e8f0;
      margin: 20px 0 10px;
    }
    .article-body p {
      color: #cbd5e1;
      margin-bottom: 14px;
      line-height: 1.7;
    }
    .article-body ul, .article-body ol {
      margin-left: 20px;
      margin-bottom: 16px;
      color: #cbd5e1;
    }
    .article-body li {
      margin-bottom: 8px;
      line-height: 1.6;
    }

    /* CARDS & CALLOUTS */
    .callout {
      border-radius: 10px;
      padding: 16px 20px;
      margin: 18px 0;
      font-size: 14px;
      line-height: 1.6;
    }
    .callout-orange {
      background: rgba(255,26,10,0.08);
      border: 1px solid var(--orange-border);
      color: #fed7aa;
    }
    .callout-cyan {
      background: rgba(0,180,216,0.08);
      border: 1px solid var(--cyan-border);
      color: #bae6fd;
    }
    .callout-green {
      background: rgba(74,222,128,0.08);
      border: 1px solid rgba(74,222,128,0.25);
      color: #bbf7d0;
    }
    .callout-gold {
      background: rgba(251,191,36,0.08);
      border: 1px solid rgba(251,191,36,0.3);
      color: #fef3c7;
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin: 20px 0;
    }
    .feature-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      transition: all .2s;
    }
    .feature-card:hover {
      border-color: var(--border2);
      transform: translateY(-2px);
    }
    .feature-card h4 {
      font-size: 15px;
      font-weight: 800;
      color: var(--text);
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .feature-card p {
      font-size: 13px;
      color: var(--muted);
      margin: 0;
      line-height: 1.55;
    }

    /* CODE BLOCKS */
    code {
      font-family: var(--font-mono);
      background: #0f172a;
      border: 1px solid var(--border);
      color: #ff6b4a;
      border-radius: 4px;
      padding: 2px 6px;
      font-size: 13px;
    }
    pre {
      background: #070b14;
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 16px;
      overflow-x: auto;
      font-family: var(--font-mono);
      font-size: 13px;
      line-height: 1.6;
      margin: 16px 0;
      color: #e2e8f0;
      position: relative;
    }
    pre code {
      background: transparent;
      border: none;
      padding: 0;
      color: inherit;
    }
    .code-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #0d1117;
      border: 1px solid var(--border);
      border-bottom: none;
      border-radius: 10px 10px 0 0;
      padding: 8px 14px;
      font-size: 11px;
      color: var(--dim);
      font-family: var(--font-mono);
    }
    .code-head + pre {
      margin-top: 0;
      border-radius: 0 0 10px 10px;
    }
    .copy-btn {
      background: rgba(255,255,255,0.06);
      border: 1px solid var(--border2);
      color: var(--muted);
      padding: 3px 8px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 11px;
      transition: all .15s;
    }
    .copy-btn:hover {
      background: rgba(255,255,255,0.12);
      color: var(--text);
    }

    /* TABLES */
    .spec-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 13px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
    }
    .spec-table th, .spec-table td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid var(--border);
    }
    .spec-table th {
      background: #0b0f19;
      color: var(--muted);
      font-weight: 700;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .spec-table tr:last-child td {
      border-bottom: none;
    }

    /* FOOTER */
    footer {
      border-top: 1px solid var(--border);
      padding: 50px 24px 30px;
      background: #02050e;
      margin-top: 60px;
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 40px;
    }
    .footer-brand p {
      color: var(--dim);
      font-size: 13px;
      margin-top: 12px;
      line-height: 1.6;
      max-width: 320px;
    }
    .footer-col h4 {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      margin-bottom: 16px;
    }
    .footer-col a {
      display: block;
      color: var(--dim);
      font-size: 13px;
      margin-bottom: 8px;
      transition: color .15s;
    }
    .footer-col a:hover {
      color: var(--text);
    }
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.06);
      padding-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 12px;
      color: var(--dim);
    }

    @media (max-width: 900px) {
      .content-grid { grid-template-columns: 1fr; }
      .sticky-toc { display: none; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .nav-links { display: none; }
    }
    @media (max-width: 600px) {
      .footer-grid { grid-template-columns: 1fr; }
    }
  `;
}

export function renderSharedHeader(activePath, cometAffiliateUrl) {
  return `
<nav>
  <div class="nav-inner">
    <a href="/" class="logo" aria-label="CostImplodeAI home">
      <img class="logo-mark-img" src="/costimplode-mark.png" alt="CostImplodeAI" />
      <span class="logo-wordmark"><span>COST</span><span>IMPLODEAI</span></span>
    </a>
    <div class="nav-links">
      <a href="/#how-it-works">Architecture</a>
      <a href="/#simulator">Simulator</a>
      <a href="/docs/byok" class="${activePath === '/docs/byok' ? 'active' : ''}" style="color:var(--cyan);font-weight:700;">BYOK Guide</a>
      <a href="/docs/keys" class="${activePath === '/docs/keys' ? 'active' : ''}" style="color:var(--orange-light);font-weight:700;">Keys &amp; Rotation</a>
      <a href="/docs/api" class="${activePath === '/docs/api' ? 'active' : ''}">API Docs</a>
      <a href="/compliance.html" class="${activePath === '/compliance.html' ? 'active' : ''}">Compliance</a>
      <a href="/#pricing">Whop Plans</a>
    </div>
    <div class="nav-right">
      <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" class="nav-comet" title="Buy credits on CometAPI.com">
        <img src="/cometapi-logo.svg" alt="CometAPI" style="height:16px;vertical-align:middle;" />
        Buy Credits (10% Bonus)
      </a>
      <a href="/" class="btn-return-home" title="Return to interactive live homepage">
        &larr; Main Site
      </a>
    </div>
  </div>
</nav>
`;
}

export function renderSharedFooter(cometAffiliateUrl) {
  return `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo">
          <img class="logo-mark-img" src="/costimplode-mark.png" alt="CostImplodeAI" />
          <span class="logo-wordmark"><span>COST</span><span>IMPLODEAI</span></span>
        </a>
        <p>100% BYOK autonomous AI model arbitrage gateway powered by your funded CometAPI.com account, with Whop OAuth membership &amp; billing and mathematically governed savings up to 63.3%.</p>
      </div>
      <div class="footer-col">
        <h4>Documentation &amp; Product</h4>
        <a href="/">Homepage &amp; Dashboard</a>
        <a href="/#simulator">Live Arbitrage Simulator</a>
        <a href="/docs/byok">BYOK Setup Guide (CometAPI)</a>
        <a href="/docs/keys">API Key Lifecycle &amp; Rotation</a>
        <a href="/docs/api">API Reference &amp; SDKs</a>
        <a href="/#pricing">Whop Subscription Plans</a>
      </div>
      <div class="footer-col">
        <h4>Sole AI Supplier</h4>
        <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer">CometAPI.com (Purchase Credits + 10% Bonus)</a>
        <a href="/#api-vault">CometAPI Key Vault</a>
        <a href="/#tokentax">TokenTax0 (Coming Soon)</a>
        <a href="/sitemap.xml">XML Sitemap</a>
      </div>
      <div class="footer-col">
        <h4>Legal &amp; Security</h4>
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/terms.html">Terms of Service</a>
        <a href="/compliance.html">Compliance Whitepaper</a>
        <a href="mailto:support@costimplodeai.com">support@costimplodeai.com</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">&copy; 2026 BotVibe AI LLC. All rights reserved. CostImplodeAI is a registered trademark.</div>
      <div style="display:flex;gap:16px;font-size:12px;color:var(--dim);flex-wrap:wrap;">
        <span>100% BYOK Sovereignty</span>
        <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:none;">CometAPI.com Sole AI Supplier</a>
        <span>Whop Checkout &amp; OAuth</span>
      </div>
    </div>
  </div>
</footer>

<script>
function copyCode(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const txt = el.innerText || el.textContent;
  navigator.clipboard.writeText(txt).then(() => {
    const btn = event && event.target;
    if (btn) {
      const oldText = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = oldText; }, 2000);
    }
  });
}
</script>
`;
}

// 1. BYOK Integration Guide HTML (CometAPI-Only Sole Supplier)
export function byokDocsHtml(origin, cometAffiliateUrl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Bring Your Own Key (BYOK) Integration Guide - CostImplodeAI</title>
  <meta name="description" content="Complete step-by-step guide for Bring Your Own Key (BYOK) setup on CostImplodeAI. Fund your CometAPI.com credits, encrypt your key client-side, and route across frontier and fast models." />
  <link rel="canonical" href="${origin}/docs/byok" />
  <style>
    ${getSharedStyles()}
  </style>
</head>
<body>

${renderSharedHeader('/docs/byok', cometAffiliateUrl)}

<div class="page-wrapper">
  <div class="breadcrumbs">
    <a href="/">Home</a>
    <span class="sep">/</span>
    <a href="/docs/api">Developer Docs</a>
    <span class="sep">/</span>
    <span class="current">BYOK Setup Guide</span>
  </div>

  <div class="page-hero">
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
      <span class="badge-fips">🔑 100% BYOK Architecture</span>
      <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" class="badge-fips" style="background:rgba(0,180,216,0.12);border-color:var(--cyan-border);color:var(--cyan);text-decoration:none;">CometAPI.com Sole AI Supplier ↗</a>
      <span class="badge-fips" style="background:rgba(255,26,10,0.12);border-color:var(--orange-border);color:var(--orange-light);">Audited 63.3% Savings</span>
    </div>
    <h1>Bring Your Own Key (BYOK) Integration Guide</h1>
    <p>
      CostImplodeAI is a 100% Bring Your Own Key (BYOK) gateway backed solely by <strong><a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);">CometAPI.com</a></strong>. You purchase inference credits directly in your <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:underline;">CometAPI.com</a> account and supply your API key—our autonomous router cuts your effective AI spend by up to 63.3% while keeping every dollar of your model credits under your ownership.
    </p>
    <div class="meta-bar">
      <span><strong>Prerequisite:</strong> Purchase credits at <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:underline;">CometAPI.com</a> before using live routing</span>
      <span>&bull;</span>
      <span><strong>Auth &amp; Billing:</strong> Whop OAuth 2.1 + Whop Checkout</span>
      <span>&bull;</span>
      <span><strong>Next Guide:</strong> <a href="/docs/keys" style="color:var(--orange-light);text-decoration:underline;">API Key Lifecycle &amp; Rotation &rarr;</a></span>
    </div>
  </div>

  <div class="content-grid">
    <!-- TOC -->
    <aside class="sticky-toc">
      <div class="toc-title">On This Page</div>
      <ul class="toc-menu">
        <li><a href="#why-byok">1. Why BYOK Matters</a></li>
        <li><a href="#cometapi-prerequisite">2. Purchase CometAPI Credits First</a></li>
        <li><a href="#routing-engine">3. How Single-Supplier Routing Works</a></li>
        <li><a href="#whop-membership">4. Whop Sign-In &amp; Plan Activation</a></li>
        <li><a href="#vault-encryption">5. Client-Side Security Measures</a></li>
        <li><a href="#code-integration">6. 1-Minute SDK Integration</a></li>
        <li><a href="#return-cta">7. Related Docs &amp; Next Steps</a></li>
      </ul>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:grid;gap:8px;">
        <a href="/docs/keys" class="btn-return-home" style="width:100%;justify-content:center;font-size:12px;background:#0f172a;border:1px solid var(--cyan-border);color:var(--cyan);">
          🔑 Key Generation &amp; Rotation &rarr;
        </a>
        <a href="/" class="btn-return-home" style="width:100%;justify-content:center;font-size:12px;">
          &larr; Launch Live Dashboard
        </a>
      </div>
    </aside>

    <!-- CONTENT -->
    <main class="article-body">
      <section id="why-byok">
        <h2><span>🛡️</span> 1. Why CostImplodeAI is 100% BYOK</h2>
        <p>
          Traditional AI proxy services act as resellers: you deposit funds with them, pay retail pricing plus hidden markups, and lose visibility over upstream token usage.
        </p>
        <p>
          <strong>CostImplodeAI keeps you in full control:</strong>
        </p>
        <ul>
          <li><strong>Direct CometAPI Ownership:</strong> Your token balance and billing live strictly inside your own CometAPI.com account.</li>
          <li><strong>Zero Token Markup:</strong> CostImplodeAI charges zero per-token surcharge. You capture 100% of wholesale routing discounts and the 10% CometAPI referral credit bonus.</li>
          <li><strong>Stateless Volatile Execution:</strong> Keys and prompt payloads execute strictly in volatile container RAM and are never written to plaintext disk or telemetry logs.</li>
        </ul>
      </section>

      <section id="cometapi-prerequisite">
        <h2><span>⚡</span> 2. Mandatory First Step: Purchase Credits on <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);">CometAPI.com</a></h2>
        <div class="callout callout-gold">
          <strong>Credit Prerequisite:</strong> You <strong>must purchase credits inside <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">CometAPI.com</a></strong> before sending live traffic through CostImplodeAI. Without a funded CometAPI key, upstream requests cannot be billed or executed by your account.
        </div>
        <p>
          Follow these three steps to fund and connect your <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:underline;">CometAPI.com</a> key:
        </p>
        <ol>
          <li>
            <strong>Create &amp; Fund Your CometAPI Account:</strong> Sign up at <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);font-weight:700;text-decoration:underline;">CometAPI.com via our partner link</a> to receive an automatic <strong>10% credit bonus</strong> when you purchase credits.
          </li>
          <li>
            <strong>Generate a Scoped CometAPI Secret Key:</strong> Inside the CometAPI dashboard, open <em>API Keys &rarr; Create Secret Key</em>, give it a clear label (e.g. <code>costimplode-gateway</code>), and copy your <code>sk-...</code> token.
          </li>
          <li>
            <strong>Connect to the CostImplodeAI Vault:</strong> Paste your key into the <a href="/#api-vault" style="color:var(--orange-light);font-weight:700;text-decoration:underline;">BYOK Key Vault</a> (which verifies syntax, computes a SHA-256 fingerprint, and encrypts client-side with PBKDF2 + AES-GCM-256) or pass it per request via HTTP headers.
          </li>
        </ol>

        <table class="spec-table">
          <thead>
            <tr>
              <th>CometAPI Model Tier</th>
              <th>Workload Class</th>
              <th>Retail Baseline</th>
              <th>CometAPI Wholesale + Arbitrage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Gemini 2.5 Flash-Lite / DeepSeek V3</strong></td>
              <td>Class 1 Janitor (&theta; = 0)</td>
              <td>$5.00 / 1M blended</td>
              <td><span style="color:var(--green);font-weight:700;">$0.10 – $0.14 in / $0.40 – $0.42 out (Up to 63.3% Savings)</span></td>
            </tr>
            <tr>
              <td><strong>Gemini 2.5 Flash / Llama 3.3 70B</strong></td>
              <td>Class 1 Fast Execution (&theta; = 0)</td>
              <td>$5.00 / 1M blended</td>
              <td><span style="color:var(--green);font-weight:700;">$0.30 – $0.35 in / $0.85 – $2.50 out</span></td>
            </tr>
            <tr>
              <td><strong>DeepSeek R1 / Claude 3.5 Sonnet / GPT-5</strong></td>
              <td>Class 2 Brain Surgeon (&theta; = 1)</td>
              <td>$3.00 – $15.00 / 1M</td>
              <td><span style="color:var(--green);font-weight:700;">Wholesale ~20% Discount + 10% Credit Bonus</span></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="routing-engine">
        <h2><span>🔀</span> 3. Single-Supplier Model Arbitrage via <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);">CometAPI.com</a></h2>
        <div class="callout callout-cyan">
          <strong>One Supplier, Full Model Spectrum:</strong> With <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;">CometAPI.com</a> as your single upstream supplier, CostImplodeAI eliminates multi-vendor billing sprawl while retaining our sub-5ms semantic entropy router across fast Class 1 models and frontier Class 2 models.
        </div>
        <p>
          For every incoming request, our mathematical optimizer evaluates semantic entropy <code>S_entropy</code> against threshold <code>&tau; = 0.50</code>, prunes boilerplate tokens by ~28%, and selects the lowest-cost model tier on CometAPI that preserves output quality.
        </p>
      </section>

      <section id="whop-membership">
        <h2><span>🪪</span> 4. Whop OAuth Login &amp; Plan Activation</h2>
        <p>
          User accounts, session sign-in, and paid subscription billing (Starter $29/mo, Pro $149/mo, Enterprise $999+/mo) are handled securely through <strong>Whop</strong>:
        </p>
        <ul>
          <li><strong>Whop OAuth 2.1 (PKCE):</strong> Click <em>Sign in with Whop</em> in the top navbar or pricing cards to verify your membership inside a secure popup without sharing passwords with CostImplodeAI.</li>
          <li><strong>Whop Checkout Links:</strong> Upgrading your gateway throughput or vector cache tier redirects directly to official Whop Checkout pages—CostImplodeAI never handles or stores credit card numbers.</li>
        </ul>
      </section>

      <section id="vault-encryption">
        <h2><span>🔒</span> 5. Current-Practice BYOK Key Entry &amp; Security</h2>
        <p>
          CostImplodeAI enforces modern browser cryptographic hygiene whenever you enter a CometAPI key:
        </p>
        <ul>
          <li><strong>No Persistent Token Storage in Browser Storage:</strong> Auth session tokens and plaintext BYOK secrets are never written to <code>localStorage</code> or <code>sessionStorage</code>.</li>
          <li><strong>Strict Format &amp; Fingerprint Check:</strong> Keys are validated against the <code>sk-...</code> pattern, auto-masked when focus leaves the field, and summarized via a non-reversible SHA-256 fingerprint preview.</li>
          <li><strong>PBKDF2 + AES-GCM-256 Envelope Encryption:</strong> Your browser derives a 256-bit AES key using PBKDF2-SHA256 (100,000 iterations with a random 128-bit salt) and seals your secret with a 96-bit unique IV via <code>window.crypto.subtle</code> before transmitting ciphertext to the sync endpoint.</li>
          <li><strong>Zero-Storage Direct Header Mode:</strong> Prefer zero vault sync? Pass <code>x-byok-cometapi-key</code> directly per API call; the gateway uses it in transient container RAM and zeros the buffer immediately.</li>
        </ul>
        <p>
          Read the full rotation, scoping, and incident-response guide in our <a href="/docs/keys" style="color:var(--orange-light);font-weight:700;text-decoration:underline;">API Key Generation &amp; Rotation Guide &rarr;</a>.
        </p>
      </section>

      <section id="code-integration">
        <h2><span>💻</span> 6. 1-Minute SDK Integration</h2>
        <p>
          Point any OpenAI-compatible SDK to <code>https://api.costimplodeai.com/v1</code> with your CostImplodeAI Gateway key (created in the <a href="/#api-vault" style="color:var(--orange-light);">Gateway Keys tab</a> or via <code>POST /api/v1/keys</code>).
        </p>

        <div class="code-head">
          <span>python_openai_cometapi_byok.py</span>
          <button class="copy-btn" onclick="copyCode('code-byok-py')">Copy Code</button>
        </div>
        <pre><code id="code-byok-py">import os
from openai import OpenAI

client = OpenAI(
    base_url="https://api.costimplodeai.com/v1",
    api_key=os.environ["COSTIMPLODE_API_KEY"],
    default_headers={
        # Optional: stateless direct passthrough using your funded CometAPI key
        "x-byok-cometapi-key": os.environ["COMETAPI_API_KEY"]
    }
)

response = client.chat.completions.create(
    model="auto",
    messages=[
        {"role": "system", "content": "You are a senior software architect."},
        {"role": "user", "content": "Design a resilient queue consumer."}
    ]
)

print(response.choices[0].message.content)</code></pre>
      </section>

      <section id="return-cta" style="background:rgba(15,23,42,0.85);border:1px solid var(--border2);border-radius:14px;padding:28px;text-align:center;">
        <h3 style="font-size:20px;color:var(--text);margin-bottom:8px;">Next: Generate &amp; Rotate Your Gateway Keys</h3>
        <p style="color:var(--muted);max-width:620px;margin:0 auto 20px;">
          Once your CometAPI.com account is funded, review our complete key generation, zero-downtime rotation, and app integration playbook.
        </p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <a href="/docs/keys" class="btn-return-home" style="padding:10px 22px;font-size:13px;">
            API Key Generation &amp; Rotation Guide &rarr;
          </a>
          <a href="/docs/api" class="btn-return-home" style="padding:10px 22px;font-size:13px;background:#111827;border:1px solid var(--border2);">
            Full API Reference &rarr;
          </a>
          <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" class="nav-comet" style="padding:10px 18px;font-size:13px;">
            Fund CometAPI Credits (10% Bonus) ↗
          </a>
        </div>
      </section>
    </main>
  </div>
</div>

${renderSharedFooter(cometAffiliateUrl)}

</body>
</html>`;
}

// 2. Dedicated API Key Lifecycle, Rotation & Security Guide (/docs/keys)
export function keysDocsHtml(origin, cometAffiliateUrl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>API Key Generation, Rotation &amp; BYOK Security Guide - CostImplodeAI</title>
  <meta name="description" content="Production playbook for CostImplodeAI Gateway API key generation, scoping, zero-downtime key rotation, instant revocation, and secure CometAPI BYOK secret hygiene." />
  <link rel="canonical" href="${origin}/docs/keys" />
  <style>
    ${getSharedStyles()}
  </style>
</head>
<body>

${renderSharedHeader('/docs/keys', cometAffiliateUrl)}

<div class="page-wrapper">
  <div class="breadcrumbs">
    <a href="/">Home</a>
    <span class="sep">/</span>
    <a href="/docs/api">Developer Docs</a>
    <span class="sep">/</span>
    <span class="current">API Key Generation, Rotation &amp; Security</span>
  </div>

  <div class="page-hero">
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
      <span class="badge-fips">🔑 Key Lifecycle Playbook</span>
      <span class="badge-fips" style="background:rgba(0,180,216,0.12);border-color:var(--cyan-border);color:var(--cyan);">Zero-Downtime Rotation</span>
      <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" class="badge-fips" style="background:rgba(255,26,10,0.12);border-color:var(--orange-border);color:var(--orange-light);text-decoration:none;">CometAPI BYOK Hygiene ↗</a>
    </div>
    <h1>API Key Generation, Rotation &amp; Security Guide</h1>
    <p>
      Everything engineers need to generate scoped CostImplodeAI Gateway keys (<code>cia_live_...</code> / <code>cia_test_...</code>), enforce RPM and monthly spend caps, perform zero-downtime rotations, revoke exposed credentials immediately, and securely plug your funded <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:underline;">CometAPI.com</a> key into production applications.
    </p>
    <div class="meta-bar">
      <span><strong>Gateway Endpoints:</strong> <code>/api/v1/keys</code>, <code>/api/v1/keys/rotate</code>, <code>/api/v1/keys/usage</code></span>
      <span>&bull;</span>
      <span><strong>Client Vault Security:</strong> PBKDF2-SHA256 + AES-GCM-256 (96-bit IV)</span>
      <span>&bull;</span>
      <span><strong>Prerequisite:</strong> <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:underline;">Funded CometAPI.com Credits ↗</a></span>
    </div>
  </div>

  <div class="content-grid">
    <aside class="sticky-toc">
      <div class="toc-title">Keys Playbook</div>
      <ul class="toc-menu">
        <li><a href="#key-types">1. Key Types &amp; Architecture</a></li>
        <li><a href="#generate-keys">2. Generating Scoped Keys</a></li>
        <li><a href="#rotate-keys">3. Zero-Downtime Rotation</a></li>
        <li><a href="#revoke-incident">4. Revocation &amp; Incident Runbook</a></li>
        <li><a href="#byok-security">5. CometAPI BYOK Entry Security</a></li>
        <li><a href="#app-plug-in">6. Plugging Into Your App</a></li>
        <li><a href="#monitoring-rpm">7. Live RPM &amp; Spend Telemetry</a></li>
      </ul>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:grid;gap:8px;">
        <a href="/#api-vault" class="btn-return-home" style="width:100%;justify-content:center;font-size:12px;">
          Manage Keys in Vault &rarr;
        </a>
        <a href="/docs/byok" class="btn-return-home" style="width:100%;justify-content:center;font-size:12px;background:#0f172a;border:1px solid var(--border2);">
          &larr; BYOK Setup Guide
        </a>
      </div>
    </aside>

    <main class="article-body">
      <section id="key-types">
        <h2><span>🗝️</span> 1. Two-Key Architecture: Gateway Key vs. CometAPI BYOK Key</h2>
        <p>
          Plugging your app into CostImplodeAI involves two distinct credentials with clean separation of privilege:
        </p>
        <div class="card-grid">
          <div class="feature-card">
            <h4><span>1️⃣</span> CostImplodeAI Gateway Key</h4>
            <p>Authenticates your application to <code>https://api.costimplodeai.com/v1</code>. Prefixed with <code>cia_live_...</code> (production) or <code>cia_test_...</code> (sandbox). Controls RPM limits, scopes, and hard monthly spend caps.</p>
          </div>
          <div class="feature-card">
            <h4><span>2️⃣</span> <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:none;">Funded CometAPI.com BYOK Key ↗</a></h4>
            <p>Authorizes upstream model execution against your own prepaid credits at <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:underline;">CometAPI.com</a> (prefixed <code>sk-...</code>). Encrypted client-side in your vault or sent statelessly via <code>x-byok-cometapi-key</code>.</p>
          </div>
        </div>
        <div class="callout callout-gold">
          <strong>Important:</strong> You must purchase credits in <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;font-weight:700;">CometAPI.com</a> before live requests can execute. Use separate keys per environment (production, staging, CI, local developer laptops) so revoking one never disrupts another.
        </div>
      </section>

      <section id="generate-keys">
        <h2><span>⚡</span> 2. Generating &amp; Scoping Gateway API Keys</h2>
        <p>
          You can generate gateway keys interactively from the <a href="/#api-vault" style="color:var(--orange-light);font-weight:700;text-decoration:underline;">Gateway API Keys dashboard</a> or programmatically via <code>POST /api/v1/keys</code>:
        </p>

        <table class="spec-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Recommended Practice</th>
              <th>Example Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>label</code></td>
              <td>Include service name + environment</td>
              <td><code>billing-worker-prod</code></td>
            </tr>
            <tr>
              <td><code>env</code></td>
              <td>Use <code>test</code> in dev/CI; <code>live</code> only in prod</td>
              <td><code>"live"</code> or <code>"test"</code></td>
            </tr>
            <tr>
              <td><code>spend_cap</code></td>
              <td>Always enforce a monthly hard stop for non-critical workloads</td>
              <td><code>"500"</code> ($500/mo ceiling)</td>
            </tr>
            <tr>
              <td><code>scopes</code></td>
              <td>Grant least-privilege scopes per microservice</td>
              <td><code>["arbitrage:execute", "models:read"]</code></td>
            </tr>
          </tbody>
        </table>

        <div class="code-head">
          <span>create_gateway_key.sh</span>
          <button class="copy-btn" onclick="copyCode('code-create-key')">Copy Code</button>
        </div>
        <pre><code id="code-create-key">curl -X POST ${origin}/api/v1/keys \\
  -H "Content-Type: application/json" \\
  -d '{
    "label": "checkout-agent-prod",
    "env": "live",
    "spend_cap": "500",
    "scopes": ["arbitrage:execute", "models:read"]
  }'</code></pre>

        <p>
          <strong>One-Time Raw Token Rule:</strong> The server displays the raw <code>cia_live_...</code> token <strong>exactly once</strong> upon creation or rotation. Copy it straight into your secret manager (GCP Secret Manager, AWS Secrets Manager, HashiCorp Vault, or GitHub Actions Secrets)—never commit it to git or paste it into client-side code.
        </p>
      </section>

      <section id="rotate-keys">
        <h2><span>🔄</span> 3. Zero-Downtime Key Rotation</h2>
        <p>
          Rotate production gateway keys every <strong>90 days</strong> (and immediately on team offboarding). Our <code>POST /api/v1/keys/rotate</code> endpoint issues a new secret token while preserving your existing <code>keyId</code>, rate limits, spend cap, and cumulative savings analytics.
        </p>
        <div class="callout callout-cyan">
          <strong>Zero-Downtime Cutover Pattern (Recommended for High-Availability Services):</strong>
          <ol style="margin-top:8px;margin-bottom:0;">
            <li>Create a secondary key (<code>label: "service-prod-b"</code>) with identical scopes and spend cap.</li>
            <li>Deploy the secondary key to your secret manager and verify live traffic succeeds in telemetry.</li>
            <li>Call <code>POST /api/v1/keys/rotate</code> or <code>DELETE /api/v1/keys</code> on key <code>-a</code> once zero traffic hits the old token.</li>
          </ol>
        </div>

        <div class="code-head">
          <span>rotate_gateway_key.sh</span>
          <button class="copy-btn" onclick="copyCode('code-rotate-key')">Copy Code</button>
        </div>
        <pre><code id="code-rotate-key">curl -X POST ${origin}/api/v1/keys/rotate \\
  -H "Content-Type: application/json" \\
  -d '{ "keyId": "key_01jh89f0a2" }'</code></pre>
      </section>

      <section id="revoke-incident">
        <h2><span>🚨</span> 4. Instant Revocation &amp; Compromised Key Playbook</h2>
        <p>
          If a Gateway Key or CometAPI BYOK key is accidentally leaked in logs, build artifacts, or a public repository, execute this sequence immediately:
        </p>
        <ol>
          <li><strong>Revoke the Exposed Gateway Key:</strong> Click <em>Revoke</em> in <a href="/#api-vault" style="color:var(--orange-light);">Gateway API Keys</a> or send <code>DELETE /api/v1/keys</code> with <code>{"keyId":"..."}</code>. All subsequent calls with that token are blocked instantaneously.</li>
          <li><strong>Revoke &amp; Replace Your CometAPI Key:</strong> Log in to <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);">CometAPI.com</a>, delete the exposed <code>sk-...</code> key, and generate a replacement key.</li>
          <li><strong>Re-Seal the Client Vault:</strong> Enter the new CometAPI key into the BYOK Vault, run <em>Test Connection</em>, and click <em>Seal &amp; Encrypt Vault</em>.</li>
          <li><strong>Audit Usage Spikes:</strong> Inspect <code>GET /api/v1/keys/usage</code> for anomalous RPM or spend spikes during the exposure window.</li>
        </ol>

        <div class="code-head">
          <span>revoke_gateway_key.sh</span>
          <button class="copy-btn" onclick="copyCode('code-revoke-key')">Copy Code</button>
        </div>
        <pre><code id="code-revoke-key">curl -X DELETE ${origin}/api/v1/keys \\
  -H "Content-Type: application/json" \\
  -d '{ "keyId": "key_01jh89f0a2" }'</code></pre>
      </section>

      <section id="byok-security">
        <h2><span>🛡️</span> 5. Strong BYOK Entry &amp; Client-Side Security Measures</h2>
        <p>
          When you enter your CometAPI.com key on CostImplodeAI, the interface enforces modern security safeguards designed to keep secrets strictly under your control:
        </p>
        <ul>
          <li><strong>Format &amp; Whitespace Hygiene:</strong> Rejects malformed tokens before transmission and alerts if accidental whitespace or non-ASCII characters are pasted.</li>
          <li><strong>Auto-Masking on Blur:</strong> Key fields automatically revert to masked password inputs whenever you click away, preventing shoulder-surfing leaks.</li>
          <li><strong>Non-Reversible SHA-256 Fingerprint:</strong> Displays a local 12-character hex fingerprint computed inside your browser so you can confirm which key is sealed without exposing plaintext.</li>
          <li><strong>Client-Side PBKDF2 + AES-GCM-256 Sealing:</strong> Keys are encrypted inside your browser via <code>window.crypto.subtle</code> (100,000 PBKDF2-SHA256 iterations, unique 128-bit salt, random 96-bit IV) before syncing ciphertext to the vault.</li>
          <li><strong>Memory-Only Session Handling:</strong> Neither Whop session tokens nor your CometAPI key are persisted in <code>localStorage</code> or <code>sessionStorage</code>.</li>
        </ul>
      </section>

      <section id="app-plug-in">
        <h2><span>🔌</span> 6. Plugging Your App Into CostImplodeAI</h2>
        <p>Store both secrets strictly in server-side environment variables and configure your OpenAI-compatible client:</p>
        <div class="code-head">
          <span>.env (Server-Side Only — Never Commit)</span>
          <button class="copy-btn" onclick="copyCode('code-env-plug')">Copy Code</button>
        </div>
        <pre><code id="code-env-plug">COSTIMPLODE_BASE_URL=https://api.costimplodeai.com/v1
COSTIMPLODE_API_KEY=cia_live_replace_with_generated_token
COMETAPI_API_KEY=sk-replace-with-your-funded-cometapi-key</code></pre>

        <div class="code-head" style="margin-top:16px;">
          <span>node_sdk_production.ts</span>
          <button class="copy-btn" onclick="copyCode('code-node-plug')">Copy Code</button>
        </div>
        <pre><code id="code-node-plug">import OpenAI from "openai";

const client = new OpenAI({
  baseURL: process.env.COSTIMPLODE_BASE_URL || "https://api.costimplodeai.com/v1",
  apiKey: process.env.COSTIMPLODE_API_KEY,
  defaultHeaders: {
    // Optional air-gapped passthrough: zero persistent key storage
    "x-byok-cometapi-key": process.env.COMETAPI_API_KEY || ""
  }
});

const completion = await client.chat.completions.create({
  model: "auto",
  messages: [{ role: "user", content: "Summarize quarterly SLA metrics." }]
});</code></pre>
      </section>

      <section id="monitoring-rpm">
        <h2><span>📊</span> 7. Live RPM &amp; Spend Telemetry Check</h2>
        <p>Automate budget alerts in your CI/CD or ops dashboards by polling <code>GET /api/v1/keys/usage</code>:</p>
        <div class="code-head">
          <span>check_key_usage.sh</span>
          <button class="copy-btn" onclick="copyCode('code-usage-poll')">Copy Code</button>
        </div>
        <pre><code id="code-usage-poll">curl -s ${origin}/api/v1/keys/usage | jq '.global_summary'</code></pre>
      </section>
    </main>
  </div>
</div>

${renderSharedFooter(cometAffiliateUrl)}

</body>
</html>`;
}

// 3. Privacy Policy HTML
export function privacyHtml(origin, cometAffiliateUrl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Privacy Policy &amp; Zero-Data-Retention Guarantee - CostImplodeAI</title>
  <meta name="description" content="CostImplodeAI Privacy Policy. Client-side AES-GCM-256 BYOK encryption, zero prompt logging policy, CometAPI.com sole AI supplier architecture, and Whop OAuth privacy." />
  <link rel="canonical" href="${origin}/privacy.html" />
  <style>
    ${getSharedStyles()}
  </style>
</head>
<body>

${renderSharedHeader('/privacy.html', cometAffiliateUrl)}

<div class="page-wrapper">
  <div class="breadcrumbs">
    <a href="/">Home</a>
    <span class="sep">/</span>
    <span class="current">Privacy Policy</span>
  </div>

  <div class="page-hero">
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
      <span class="badge-fips">🛡️ FIPS 140-3 Hardware HSM</span>
      <span class="badge-fips" style="background:rgba(74,222,128,0.1);color:var(--green);border-color:rgba(74,222,128,0.3);">Zero Prompt Logging</span>
      <span class="badge-fips" style="background:rgba(56,189,248,0.1);color:var(--cyan);border-color:var(--cyan-border);">GDPR &amp; CCPA Ready</span>
    </div>
    <h1>CostImplodeAI Privacy Policy</h1>
    <p>
      We believe enterprise AI cost optimization must never compromise data confidentiality. CostImplodeAI is engineered on Google Cloud Run with ephemeral memory processing, client-side CometAPI key encryption, Whop OAuth membership verification, and a zero-retention routing pipeline.
    </p>
    <div class="meta-bar">
      <span><strong>Entity:</strong> BotVibe AI LLC</span>
      <span>&bull;</span>
      <span><strong>Effective Date:</strong> October 2026</span>
      <span>&bull;</span>
      <span><strong>Contact:</strong> support@costimplodeai.com</span>
    </div>
  </div>

  <div class="content-grid">
    <aside class="sticky-toc">
      <div class="toc-title">Privacy Sections</div>
      <ul class="toc-menu">
        <li><a href="#zero-logging">1. Zero Prompt Logging</a></li>
        <li><a href="#byok-sovereignty">2. CometAPI BYOK Sovereignty</a></li>
        <li><a href="#whop-oauth">3. Whop OAuth &amp; Billing Data</a></li>
        <li><a href="#data-collected">4. Operational Metadata</a></li>
        <li><a href="#third-party-providers">5. Upstream AI Supplier</a></li>
        <li><a href="#gdpr-ccpa">6. GDPR &amp; CCPA Rights</a></li>
        <li><a href="#contact-us">7. Contact &amp; Governance</a></li>
      </ul>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">
        <a href="/" class="btn-return-home" style="width:100%;justify-content:center;font-size:12px;">
          &larr; Return to Main Site
        </a>
      </div>
    </aside>

    <main class="article-body">
      <section id="zero-logging">
        <h2><span>🚫</span> 1. Zero Prompt &amp; Completion Logging Policy</h2>
        <p>
          <strong>CostImplodeAI does not log, inspect, store, or train on your prompt payloads or model responses.</strong>
        </p>
        <p>
          All inference traffic passing through <code>https://api.costimplodeai.com/v1</code> is processed ephemerally in volatile container RAM on Google Cloud Run. Once the response stream completes, the memory buffer is cleared. No prompt content or completions are committed to persistent disk or analytics logs.
        </p>
      </section>

      <section id="byok-sovereignty">
        <h2><span>🔑</span> 2. <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);">CometAPI.com</a> BYOK Key Sovereignty</h2>
        <p>
          CostImplodeAI is a 100% Bring Your Own Key gateway with <strong><a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);">CometAPI.com</a></strong> as the sole upstream AI supplier:
        </p>
        <ul>
          <li>You supply your own funded <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:underline;">CometAPI.com</a> secret key (<code>sk-...</code>).</li>
          <li>Keys entered in the Vault are encrypted inside your browser using PBKDF2-SHA256 + Web Crypto AES-GCM-256 before transmission.</li>
          <li>Alternatively, you may inject keys statelessly per request using <code>x-byok-cometapi-key</code> with zero server persistence.</li>
        </ul>
      </section>

      <section id="whop-oauth">
        <h2><span>🪪</span> 3. Whop OAuth Authentication &amp; Checkout Billing</h2>
        <p>
          Account login and subscription payments are processed exclusively through <strong>Whop</strong> (OAuth 2.1 with PKCE and Whop Checkout):
        </p>
        <ul>
          <li>When you sign in via Whop, we receive only your basic profile identifier, username/display name, email (if granted), and active membership tier.</li>
          <li>Payment instruments, invoices, and tax details are handled directly by Whop. CostImplodeAI never collects or stores payment card numbers.</li>
        </ul>
      </section>

      <section id="data-collected">
        <h2><span>📊</span> 4. Operational Metadata We Collect</h2>
        <ul>
          <li><strong>Gateway Key Identifiers:</strong> Label, environment tag (<code>live</code>/<code>test</code>), masked token prefix (e.g. <code>cia_live_••••••••a9e1</code>), and RPM/spend-cap configuration.</li>
          <li><strong>Aggregated Usage Counters:</strong> Request count, token volume, live RPM, and calculated dollar savings.</li>
          <li><strong>Support Communications:</strong> Email messages sent to <code>support@costimplodeai.com</code>.</li>
        </ul>
      </section>

      <section id="third-party-providers">
        <h2><span>🤝</span> 5. Upstream AI Supplier</h2>
        <p>
          When you execute live inference through CostImplodeAI, requests dispatch directly to <strong>CometAPI.com</strong> (<a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);">cometapi.com</a>) under your own BYOK credentials and credit balance.
        </p>
      </section>

      <section id="gdpr-ccpa">
        <h2><span>⚖️</span> 6. GDPR, CCPA &amp; International Compliance</h2>
        <ul>
          <li>You may request export or deletion of your gateway key metadata and sealed vault records at any time.</li>
          <li>We never sell or rent developer credentials, personal data, or prompt traffic.</li>
          <li>Contact <a href="mailto:support@costimplodeai.com" style="color:var(--orange-light);">support@costimplodeai.com</a> for privacy requests.</li>
        </ul>
      </section>

      <section id="contact-us">
        <h2><span>📬</span> 7. Contact Us</h2>
        <div style="background:var(--card);border:1px solid var(--border);border-radius:10px;padding:16px;">
          <strong>BotVibe AI LLC &bull; Security &amp; Data Protection Office</strong><br/>
          Email: <a href="mailto:support@costimplodeai.com" style="color:var(--orange-light);">support@costimplodeai.com</a><br/>
          Website: <a href="https://costimplodeai.com/" style="color:var(--cyan);">https://costimplodeai.com</a>
        </div>
      </section>
    </main>
  </div>
</div>

${renderSharedFooter(cometAffiliateUrl)}

</body>
</html>`;
}

// 4. Terms of Service HTML
export function termsHtml(origin, cometAffiliateUrl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Terms of Service - CostImplodeAI</title>
  <meta name="description" content="CostImplodeAI Terms of Service. CometAPI.com BYOK prerequisite, Whop subscription billing, 63.3% savings governance ceiling, and acceptable use." />
  <link rel="canonical" href="${origin}/terms.html" />
  <style>
    ${getSharedStyles()}
  </style>
</head>
<body>

${renderSharedHeader('/terms.html', cometAffiliateUrl)}

<div class="page-wrapper">
  <div class="breadcrumbs">
    <a href="/">Home</a>
    <span class="sep">/</span>
    <span class="current">Terms of Service</span>
  </div>

  <div class="page-hero">
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
      <span class="badge-fips">📜 Enterprise Terms</span>
      <span class="badge-fips" style="background:rgba(255,26,10,0.1);color:var(--orange-light);border-color:var(--orange-border);">63.3% Governed Ceiling</span>
      <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" class="badge-fips" style="background:rgba(0,180,216,0.1);color:var(--cyan);border-color:var(--cyan-border);text-decoration:none;">CometAPI BYOK + Whop ↗</a>
    </div>
    <h1>CostImplodeAI Terms of Service</h1>
    <p>
      Please read these terms carefully before accessing or using the CostImplodeAI autonomous arbitrage gateway. By authenticating with Whop, subscribing via Whop Checkout, configuring CometAPI BYOK credentials, or calling our API, you agree to these terms.
    </p>
    <div class="meta-bar">
      <span><strong>Operator:</strong> BotVibe AI LLC</span>
      <span>&bull;</span>
      <span><strong>Governing Law:</strong> State of Delaware, USA</span>
      <span>&bull;</span>
      <span><strong>Last Updated:</strong> October 2026</span>
    </div>
  </div>

  <div class="content-grid">
    <aside class="sticky-toc">
      <div class="toc-title">Terms Index</div>
      <ul class="toc-menu">
        <li><a href="#acceptance">1. Acceptance of Terms</a></li>
        <li><a href="#byok-model">2. BYOK Service Model</a></li>
        <li><a href="#cometapi-clause">3. CometAPI Credits Prerequisite</a></li>
        <li><a href="#whop-billing">4. Whop Subscriptions &amp; OAuth</a></li>
        <li><a href="#savings-cap">5. 63.3% Governed Ceiling</a></li>
        <li><a href="#acceptable-use">6. Acceptable Use &amp; Key Security</a></li>
        <li><a href="#tokentax-disclaimer">7. TokenTax0 Status</a></li>
        <li><a href="#liability">8. Limitation of Liability</a></li>
      </ul>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">
        <a href="/" class="btn-return-home" style="width:100%;justify-content:center;font-size:12px;">
          &larr; Return to Main Site
        </a>
      </div>
    </aside>

    <main class="article-body">
      <section id="acceptance">
        <h2><span>📜</span> 1. Acceptance of Terms</h2>
        <p>
          These Terms of Service form a binding agreement between you and <strong>BotVibe AI LLC</strong> governing your use of CostImplodeAI (<code>costimplodeai.com</code>).
        </p>
      </section>

      <section id="byok-model">
        <h2><span>🔑</span> 2. Bring Your Own Key (BYOK) Service Model</h2>
        <ul>
          <li>CostImplodeAI operates strictly as an optimization and routing gateway, not a model credit reseller.</li>
          <li>You maintain a direct account and billing relationship with <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:underline;">CometAPI.com</a> for inference token charges.</li>
          <li>CostImplodeAI adds zero token markup onto upstream inference bills.</li>
        </ul>
      </section>

      <section id="cometapi-clause">
        <h2><span>⚡</span> 3. <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);">CometAPI.com</a> Credit Prerequisite</h2>
        <p>
          <strong>CometAPI.com is the sole AI supplier</strong> supported for live gateway routing. You must purchase and maintain positive inference credits in your <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:underline;">CometAPI.com</a> account in order to route live traffic through CostImplodeAI.
        </p>
      </section>

      <section id="whop-billing">
        <h2><span>🪪</span> 4. Whop Subscriptions &amp; Account Authentication</h2>
        <p>
          Platform access tiers (Starter, Pro, Enterprise) and developer login are managed via <strong>Whop OAuth</strong> and <strong>Whop Checkout</strong>. Subscription renewals, cancellations, and receipts are governed by your Whop membership settings and Whop's checkout terms.
        </p>
      </section>

      <section id="savings-cap">
        <h2><span>📉</span> 5. 63.3% Governed Savings Ceiling</h2>
        <p>
          CostImplodeAI governs optimization routing such that advertised cost reductions are strictly bounded at <strong>up to 63.3%</strong> relative to un-arbitraged retail baselines across eligible workloads.
        </p>
      </section>

      <section id="acceptable-use">
        <h2><span>🛡️</span> 6. Acceptable Use &amp; Key Security Responsibilities</h2>
        <p>
          You are responsible for safeguarding your CostImplodeAI Gateway keys (<code>cia_live_...</code>) and CometAPI BYOK keys, enforcing appropriate spend caps, and rotating any credentials suspected of exposure. See our <a href="/docs/keys" style="color:var(--orange-light);text-decoration:underline;">API Key Lifecycle &amp; Rotation Guide</a>.
        </p>
      </section>

      <section id="tokentax-disclaimer">
        <h2><span>⏳</span> 7. TokenTax0 Feature Disclaimer</h2>
        <p>
          The TokenTax0 multilingual BPE compression module is in private beta and marked <strong>Coming Soon (Q4 2026)</strong>. Interactive calculators preview projected script compression rates.
        </p>
      </section>

      <section id="liability">
        <h2><span>⚖️</span> 8. Limitation of Liability</h2>
        <p>
          CostImplodeAI and BotVibe AI LLC are not liable for upstream rate limits, depleted CometAPI credit balances, or indirect damages arising from third-party service interruptions.
        </p>
      </section>
    </main>
  </div>
</div>

${renderSharedFooter(cometAffiliateUrl)}

</body>
</html>`;
}

// 5. Compliance Whitepaper HTML
export function complianceHtml(origin, cometAffiliateUrl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Enterprise Security &amp; Compliance Whitepaper - CostImplodeAI</title>
  <meta name="description" content="CostImplodeAI Enterprise Security Whitepaper. FIPS 140-3 Level 3 HSMs, client-side PBKDF2 + AES-GCM-256 BYOK encryption for CometAPI keys, and SOC 2 Type II posture." />
  <link rel="canonical" href="${origin}/compliance.html" />
  <style>
    ${getSharedStyles()}
  </style>
</head>
<body>

${renderSharedHeader('/compliance.html', cometAffiliateUrl)}

<div class="page-wrapper">
  <div class="breadcrumbs">
    <a href="/">Home</a>
    <span class="sep">/</span>
    <span class="current">Enterprise Compliance</span>
  </div>

  <div class="page-hero">
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
      <span class="badge-fips">🛡️ FIPS 140-3 Level 3</span>
      <span class="badge-fips" style="background:rgba(251,191,36,0.12);color:var(--gold);border-color:rgba(251,191,36,0.3);">SOC 2 Type II Ready</span>
      <span class="badge-fips" style="background:rgba(56,189,248,0.12);color:var(--cyan);border-color:var(--cyan-border);">HIPAA BAA Ready</span>
    </div>
    <h1>Enterprise Security, Cryptography &amp; Compliance Whitepaper</h1>
    <p>
      Technical overview of CostImplodeAI's zero-knowledge cryptographic architecture, volatile container execution, Whop OAuth PKCE session hardening, and single-supplier CometAPI BYOK isolation.
    </p>
    <div class="meta-bar">
      <span><strong>Standards:</strong> NIST SP 800-38D, FIPS 140-3 Level 3 HSM</span>
      <span>&bull;</span>
      <span><strong>Client Cipher:</strong> PBKDF2-SHA256 + AES-GCM-256 (96-bit unique IV)</span>
      <span>&bull;</span>
      <span><strong>Docs:</strong> <a href="/docs/keys" style="color:var(--orange-light);text-decoration:underline;">Key Lifecycle &amp; Rotation &rarr;</a></span>
    </div>
  </div>

  <div class="content-grid">
    <aside class="sticky-toc">
      <div class="toc-title">Compliance Index</div>
      <ul class="toc-menu">
        <li><a href="#envelope-encryption">1. Envelope Encryption</a></li>
        <li><a href="#fips-hsm">2. FIPS 140-3 HSM Root</a></li>
        <li><a href="#volatile-ram">3. Volatile RAM Processing</a></li>
        <li><a href="#zero-logging">4. Zero-Retention Guarantee</a></li>
        <li><a href="#byok-sovereignty">5. CometAPI BYOK Isolation</a></li>
        <li><a href="#audit-checklist">6. Security Checklist</a></li>
      </ul>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:grid;gap:8px;">
        <a href="/docs/keys" class="btn-return-home" style="width:100%;justify-content:center;font-size:12px;background:#0f172a;border:1px solid var(--cyan-border);color:var(--cyan);">
          🔑 Key Rotation Guide &rarr;
        </a>
        <a href="/" class="btn-return-home" style="width:100%;justify-content:center;font-size:12px;">
          &larr; Return to Main Site
        </a>
      </div>
    </aside>

    <main class="article-body">
      <section id="envelope-encryption">
        <h2><span>🛡️</span> 1. Two-Tier Envelope Encryption Architecture</h2>
        <p>
          CostImplodeAI implements two-tier envelope encryption conforming to NIST SP 800-38D:
        </p>
        <ul>
          <li><strong>Key Encryption Key (KEK):</strong> A 256-bit AES master key sealed inside Google Cloud KMS Hardware Security Modules.</li>
          <li><strong>Client-Side Key Derivation &amp; DEK:</strong> Browser inputs derive 256-bit keys using PBKDF2-SHA256 (100,000 iterations + random 128-bit salt) and encrypt payloads via AES-GCM-256 with a cryptographically random 96-bit initialization vector (IV).</li>
        </ul>
      </section>

      <section id="fips-hsm">
        <h2><span>🏛️</span> 2. FIPS 140-3 Level 3 Hardware Security Modules</h2>
        <p>
          Server-side vault envelopes are backed by Google Cloud KMS HSM clusters validated under <strong>FIPS 140-3 Level 3</strong>, enforcing tamper-resistant cryptographic boundaries and strict zeroization.
        </p>
      </section>

      <section id="volatile-ram">
        <h2><span>⚡</span> 3. Ephemeral Volatile Execution (Zero Disk Storage)</h2>
        <ol>
          <li>CometAPI BYOK credentials are either passed per-request via HTTPS headers or decrypted transiently inside container RAM.</li>
          <li>The upstream TLS 1.3 connection to <code>api.cometapi.com</code> executes with forward secrecy.</li>
          <li>Immediately after request dispatch, volatile memory buffers are zeroed; plaintext keys never touch persistent storage or logs.</li>
        </ol>
      </section>

      <section id="zero-logging">
        <h2><span>🚫</span> 4. Zero Prompt Retention &amp; Training Guarantee</h2>
        <ul>
          <li><strong>Zero Model Training:</strong> Prompts and responses are never used to train models.</li>
          <li><strong>Zero Payload Persistence:</strong> Neither prompts nor completions are persisted to databases.</li>
          <li><strong>Session Token Hygiene:</strong> Browser sessions keep bearer tokens strictly in JavaScript memory (or SameSite=None Partitioned HttpOnly cookies), never in <code>localStorage</code>.</li>
        </ul>
      </section>

      <section id="byok-sovereignty">
        <h2><span>🔑</span> 5. Single-Supplier <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);">CometAPI.com</a> BYOK Isolation</h2>
        <p>
          By consolidating upstream inference strictly onto your funded <a href="${cometAffiliateUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);text-decoration:underline;">CometAPI.com</a> account, security teams audit one wholesale vendor relationship and enforce per-key RPM + monthly spend caps via <a href="/docs/keys" style="color:var(--orange-light);text-decoration:underline;">Gateway API Key governance</a>.
        </p>
      </section>

      <section id="audit-checklist">
        <h2><span>✅</span> 6. Enterprise Security Checklist</h2>
        <table class="spec-table">
          <thead>
            <tr>
              <th>Security Control</th>
              <th>Specification</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>HSM Standard</strong></td>
              <td>FIPS 140-3 Level 3 Hardware Boundary</td>
              <td><span style="color:var(--green);font-weight:700;">VERIFIED</span></td>
            </tr>
            <tr>
              <td><strong>Client BYOK Cipher</strong></td>
              <td>PBKDF2-SHA256 + AES-256-GCM (96-bit IV) + SHA-256 Fingerprint</td>
              <td><span style="color:var(--green);font-weight:700;">VERIFIED</span></td>
            </tr>
            <tr>
              <td><strong>Authentication &amp; Billing</strong></td>
              <td>Whop OAuth 2.1 (PKCE + OIDC) + Whop Checkout</td>
              <td><span style="color:var(--green);font-weight:700;">VERIFIED</span></td>
            </tr>
            <tr>
              <td><strong>Prompt Retention</strong></td>
              <td>0% Persistent Retention (RAM Ephemeral)</td>
              <td><span style="color:var(--green);font-weight:700;">VERIFIED</span></td>
            </tr>
            <tr>
              <td><strong>Key Rotation</strong></td>
              <td>Instant Zero-Downtime Token Rotation (<code>/api/v1/keys/rotate</code>)</td>
              <td><span style="color:var(--green);font-weight:700;">VERIFIED</span></td>
            </tr>
            <tr>
              <td><strong>Savings Ceiling</strong></td>
              <td>Strictly Governed at Up to 63.3%</td>
              <td><span style="color:var(--green);font-weight:700;">VERIFIED</span></td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</div>

${renderSharedFooter(cometAffiliateUrl)}

</body>
</html>`;
}
