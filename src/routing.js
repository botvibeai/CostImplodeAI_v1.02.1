export const SITE_ORIGIN = "https://costimplodeai.com";

export const LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</docs/api>; rel="service-doc"; type="text/html"',
  '</auth.md>; rel="describedby"; type="text/markdown"',
  '</.well-known/oauth-protected-resource>; rel="oauth-protected-resource"; type="application/json"',
  '</.well-known/agent-skills/index.json>; rel="describedby"; type="application/json"',
  '</.well-known/mcp/server-card.json>; rel="describedby"; type="application/json"'
].join(", ");

export const STATIC_ROUTE_MAP = {
  "/.well-known/api-catalog": {
    assetPath: "/.well-known/api-catalog.json",
    contentType: "application/linkset+json; charset=utf-8"
  },
  "/.well-known/oauth-protected-resource": {
    assetPath: "/.well-known/oauth-protected-resource.json",
    contentType: "application/json; charset=utf-8"
  },
  "/.well-known/oauth-authorization-server": {
    assetPath: "/.well-known/oauth-authorization-server.json",
    contentType: "application/json; charset=utf-8"
  },
  "/.well-known/openid-configuration": {
    assetPath: "/.well-known/openid-configuration.json",
    contentType: "application/json; charset=utf-8"
  },
  "/.well-known/jwks.json": {
    assetPath: "/.well-known/jwks.json",
    contentType: "application/json; charset=utf-8"
  },
  "/.well-known/mcp/server-card.json": {
    assetPath: "/.well-known/mcp/server-card.json",
    contentType: "application/json; charset=utf-8"
  },
  "/.well-known/agent-skills/index.json": {
    assetPath: "/.well-known/agent-skills/index.json",
    contentType: "application/json; charset=utf-8"
  },
  "/auth.md": {
    assetPath: "/auth.md",
    contentType: "text/markdown; charset=utf-8"
  },
  "/docs/api": {
    assetPath: "/docs/api.html",
    contentType: "text/html; charset=utf-8"
  },
  "/docs": {
    assetPath: "/docs/api.html",
    contentType: "text/html; charset=utf-8"
  },
  "/docs/byok": {
    assetPath: "/docs/byok.html",
    contentType: "text/html; charset=utf-8"
  },
  "/byok": {
    assetPath: "/docs/byok.html",
    contentType: "text/html; charset=utf-8"
  },
  "/docs/keys": {
    assetPath: "/docs/keys.html",
    contentType: "text/html; charset=utf-8"
  },
  "/keys": {
    assetPath: "/docs/keys.html",
    contentType: "text/html; charset=utf-8"
  },
  "/privacy": {
    assetPath: "/privacy.html",
    contentType: "text/html; charset=utf-8"
  },
  "/terms": {
    assetPath: "/terms.html",
    contentType: "text/html; charset=utf-8"
  },
  "/compliance": {
    assetPath: "/compliance.html",
    contentType: "text/html; charset=utf-8"
  },
  "/dash": {
    assetPath: "/dash.html",
    contentType: "text/html; charset=utf-8"
  },
  "/openapi.json": {
    assetPath: "/openapi.json",
    contentType: "application/openapi+json; charset=utf-8"
  },
  "/llms.txt": {
    assetPath: "/llms.txt",
    contentType: "text/plain; charset=utf-8"
  },
  "/favicon.ico": {
    assetPath: "/favicon.png",
    contentType: "image/png"
  },
  "/cometapi-logo.svg": {
    assetPath: "/cometapi-logo.svg",
    contentType: "image/svg+xml"
  }
};

export function securityHeaders() {
  return {
    "x-content-type-options": "nosniff",
    "referrer-policy": "strict-origin-when-cross-origin",
    "permissions-policy": "camera=(), microphone=(), geolocation=(), payment=()"
  };
}

export function jsonResponse(body, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("content-type", "application/json; charset=utf-8");
  for (const [key, value] of Object.entries(securityHeaders())) headers.set(key, value);
  return new Response(JSON.stringify(body, null, 2), { ...init, headers });
}

export function normalizeAiSearchUrl(value) {
  if (!value) return "";
  const trimmed = String(value).trim().replace(/\/+$/, "");
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") return trimmed;
  } catch {}
  return "";
}
