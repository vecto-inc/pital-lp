import { writeFile } from "node:fs/promises";

const origin = process.env.PITAL_PREVIEW_ORIGIN ?? "http://localhost:3000";
const pageResponse = await fetch(`${origin}/`);

if (!pageResponse.ok) {
  throw new Error(`Failed to fetch preview: ${pageResponse.status}`);
}

let html = await pageResponse.text();
const stylesheetMatch = html.match(/<link rel="stylesheet" href="([^"]+)"[^>]*\/>/);

if (!stylesheetMatch) {
  throw new Error("Preview stylesheet was not found.");
}

const cssResponse = await fetch(new URL(stylesheetMatch[1], origin));

if (!cssResponse.ok) {
  throw new Error(`Failed to fetch stylesheet: ${cssResponse.status}`);
}

const css = await cssResponse.text();
html = html
  .replace(stylesheetMatch[0], `<style>${css}</style>`)
  .replace(/<link rel="modulepreload"[^>]*\/>/g, "")
  .replace(/<script(?:\s[^>]*)?>[\s\S]*?<\/script>/g, "");

await writeFile(new URL("../pital-lp.html", import.meta.url), html, "utf8");
console.log("Exported pital-lp.html");
