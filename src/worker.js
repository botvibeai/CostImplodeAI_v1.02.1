import {
  LINK_HEADER,
  SITE_ORIGIN,
  STATIC_ROUTE_MAP,
  jsonResponse,
  normalizeAiSearchUrl,
  securityHeaders
} from "./routing.js";
import { HOMEPAGE_HTML, HOMEPAGE_MARKDOWN } from "./generated-homepage.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.toLowerCase() === "www.costimplodeai.com") {
      url.hostname = "costimplodeai.com";
      return Response.redirect(url.toString(), 301);
    }

    const path = normalizePath(url.pathname);

    if (path === "/api/status") return statusResponse(env);
    if (path === "/ai-search/search") return proxyAiSearch(request, env, "/search");
    if (path === "/mcp") return proxyAiSearch(request, env, "/mcp");

    if (path === "/" && acceptsMarkdown(request)) {
      return new Response(HOMEPAGE_MARKDOWN, {
        status: 200,
        headers: markdownHeaders({ "x-markdown-tokens": "420" })
      });
    }

    if (path === "/") {
      const aiSearchUrl = normalizeAiSearchUrl(env.AI_SEARCH_PUBLIC_URL);
      const injected = HOMEPAGE_HTML.replace(
        "</head>",
        `<script>window.COSTIMPLODE_AI_SEARCH_URL=${JSON.stringify(aiSearchUrl)};</script>\n</head>`
      );
      return new Response(injected, { status: 200, headers: htmlHeaders() });
    }

    const staticRoute = STATIC_ROUTE_MAP[path];
    if (staticRoute) {
      return assetResponse(env, request, staticRoute.assetPath, staticRoute.contentType);
    }

    return env.ASSETS.fetch(request);
  }
};

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

function acceptsMarkdown(request) {
  return (request.headers.get("accept") || "").toLowerCase().includes("text/markdown");
}

function htmlHeaders(existing = new Headers()) {
  const headers = new Headers(existing);
  headers.set("content-type", "text/html; charset=utf-8");
  headers.set("link", LINK_HEADER);
  headers.set("cache-control", "public, max-age=0, must-revalidate");
  for (const [key, value] of Object.entries(securityHeaders())) headers.set(key, value);
  return headers;
}

function markdownHeaders(extraHeaders = {}) {
  const headers = new Headers(extraHeaders);
  headers.set("content-type", "text/markdown; charset=utf-8");
  headers.set("link", LINK_HEADER);
  headers.set("cache-control", "public, max-age=0, must-revalidate");
  for (const [key, value] of Object.entries(securityHeaders())) headers.set(key, value);
  return headers;
}

async function assetResponse(env, request, assetPath, contentType, extraHeaders = {}) {
  const assetUrl = new URL(assetPath, request.url);
  const response = await env.ASSETS.fetch(new Request(assetUrl, request));
  if (response.status === 404) return response;
  const headers = new Headers(response.headers);
  headers.set("content-type", contentType);
  for (const [key, value] of Object.entries(extraHeaders)) headers.set(key, value);
  for (const [key, value] of Object.entries(securityHeaders())) headers.set(key, value);
  return new Response(response.body, { status: response.status, headers });
}

function statusResponse(env) {
  return jsonResponse({
    name: "CostImplodeAI Autonomous Arbitrage Gateway",
    version: "2.5.0",
    status: "OPERATIONAL",
    homepage: SITE_ORIGIN,
    governance: {
      target_tau: 0.633,
      average_savings: "Up to 63.3%"
    },
    infrastructure: "Google Cloud Run / Stateless BYOK Gateway",
    supplier: {
      cometapi: {
        name: "CometAPI.com",
        required: true,
        credit_prerequisite: "Users must purchase credits on CometAPI.com before routing traffic.",
        url: "https://www.cometapi.com/?ref=gcp",
        bonus: "10% referral credit payout"
      }
    },
    timestamp: new Date().toISOString()
  });
}

async function proxyAiSearch(request, env, endpoint) {
  const base = normalizeAiSearchUrl(env.AI_SEARCH_PUBLIC_URL);
  if (!base) {
    return jsonResponse(
      {
        status: "operational",
        message: "CostImplodeAI Knowledge Engine on Google Cloud Run.",
        results: [
          {
            title: "CostImplodeAI - Autonomous Arbitrage Gateway",
            content: "Instantly cut your AI API costs by up to 63.3% with zero code changes. 100% BYOK gateway powered by CometAPI.com with a 10% referral credit bonus.",
            url: "https://costimplodeai.com/"
          }
        ]
      },
      { status: 200 }
    );
  }

  const upstream = new URL(endpoint, `${base}/`);
  const headers = new Headers(request.headers);
  headers.set("content-type", headers.get("content-type") || "application/json");
  const proxied = new Request(upstream, {
    method: request.method,
    headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
    redirect: "manual"
  });
  const response = await fetch(proxied);
  const responseHeaders = new Headers(response.headers);
  for (const [key, value] of Object.entries(securityHeaders())) responseHeaders.set(key, value);
  return new Response(response.body, { status: response.status, headers: responseHeaders });
}
