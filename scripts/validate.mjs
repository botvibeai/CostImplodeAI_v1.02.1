import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");

const jsonFiles = [
  "openapi.json",
  ".well-known/api-catalog.json",
  ".well-known/oauth-protected-resource.json",
  ".well-known/oauth-authorization-server.json",
  ".well-known/openid-configuration.json",
  ".well-known/jwks.json",
  ".well-known/mcp/server-card.json",
  ".well-known/agent-skills/index.json"
];

for (const file of jsonFiles) {
  JSON.parse(await readFile(path.join(publicDir, file), "utf8"));
}

const html = await readFile(path.join(publicDir, "index.html"), "utf8");
assert(html.includes("Ask a question"), "Ask a question UI missing");
assert(!html.includes("__CF$cv"), "Cloudflare challenge snippet should not be imported");
assert(!html.includes("<strong>Cloudflare</strong> Edge"), "Cloudflare marketing copy still present in trust strip");
assert(html.includes("/costimplode-mark.png"), "Square mark should be wired into homepage");
assert(html.includes("/costimplode-social.jpg"), "Social image should use wordmark asset");

const sitemap = await readFile(path.join(publicDir, "sitemap.xml"), "utf8");
for (const expectedLoc of ["/docs/byok", "/docs/keys", "/docs/api", "/privacy.html", "/terms.html", "/compliance.html"]) {
  assert(sitemap.includes(`https://costimplodeai.com${expectedLoc}`), `sitemap.xml missing ${expectedLoc}`);
}

const publicPagesToAudit = [
  "index.html",
  "docs/api.html",
  "docs/byok.html",
  "docs/keys.html",
  "privacy.html",
  "terms.html",
  "compliance.html",
  "llms.txt",
  "openapi.json",
  "auth.md"
];

for (const page of publicPagesToAudit) {
  const content = await readFile(path.join(publicDir, page), "utf8");
  const lower = content.toLowerCase();
  assert(!lower.includes("aimlapi"), `Removed supplier aimlapi found in ${page}`);
  assert(!lower.includes("edenai"), `Removed supplier edenai found in ${page}`);
  assert(!lower.includes("eden ai"), `Removed supplier 'eden ai' found in ${page}`);
  assert(!lower.includes("stripe"), `Removed payment provider stripe found in ${page}`);
  assert(!lower.includes("ref=costimplode"), `Legacy affiliate ref=costimplode found in ${page}`);
  if (page.endsWith(".html")) {
    assert(content.includes("CometAPI"), `CometAPI branding missing in ${page}`);
    assert(content.includes('href="/"'), `Home link missing in ${page}`);
    assert(content.includes('href="https://www.cometapi.com/?ref=gcp"'), `Missing ?ref=gcp affiliate href in ${page}`);
    const strippedHrefContent = content.replaceAll('href="https://www.cometapi.com/?ref=gcp"', "");
    assert(!strippedHrefContent.includes("ref=gcp"), `Visible affiliate ref parameter found outside href in ${page}`);
  }
}

const askQuestion = await readFile(path.join(publicDir, "ask-question.js"), "utf8");
assert(!askQuestion.includes("ref=costimplode"), "Legacy ref=costimplode found in ask-question.js");
assert(askQuestion.includes('url: "https://www.cometapi.com/?ref=gcp"'), "Missing ?ref=gcp url in ask-question.js");

const keysPage = await readFile(path.join(publicDir, "docs/keys.html"), "utf8");
assert(keysPage.includes("/api/v1/keys/rotate"), "/docs/keys.html missing key rotation endpoint documentation");

const auth = await readFile(path.join(publicDir, "auth.md"), "utf8");
assert(auth.startsWith("# auth.md"), "auth.md must start with H1");

const index = JSON.parse(await readFile(path.join(publicDir, ".well-known/agent-skills/index.json"), "utf8"));
assert(index.$schema === "https://schemas.agentskills.io/discovery/0.2.0/schema.json", "agent skills schema mismatch");
for (const skill of index.skills) {
  assert(/^sha256:[a-f0-9]{64}$/.test(skill.digest), `invalid digest for ${skill.name}`);
}

console.log("Validation passed");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}
