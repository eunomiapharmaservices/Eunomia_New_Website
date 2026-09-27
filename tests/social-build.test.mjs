import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import pages from "../data/social-pages.json" with { type: "json" };
import articles from "../data/article-seo.json" with { type: "json" };

// Run after next build: verify what crawlers receive, including the actual PNGs.
const build = new URL("../.next/server/app/", import.meta.url);
const read = path => readFileSync(new URL(path, build));
const routes = [...Object.keys(pages), ...articles.map(a => `/resources/articles/${a.slug}`)];
const tags = html => [...html.matchAll(/<meta\s+[^>]*>/g)].map(match => Object.fromEntries([...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1],m[2]])));

test("all content pages provide unique, complete sharing metadata and a real 1200×627 PNG", () => {
  const images = new Set();
  for (const route of routes) {
    const html = read(route === "/" ? "index.html" : `${route.slice(1)}.html`).toString();
    const metadata = tags(html);
    const get = name => {
      const matches = metadata.filter(tag => tag.name === name || tag.property === name);
      assert.equal(matches.length, 1, `${route}: one ${name}`);
      assert.ok(matches[0].content, `${route}: non-empty ${name}`);
      return matches[0].content;
    };
    for (const name of ["og:title", "og:description", "twitter:title", "twitter:description", "og:image:alt", "twitter:image:alt"]) get(name);
    assert.equal(get("twitter:card"), "summary_large_image");
    assert.equal(get("og:image:width"), "1200");
    assert.equal(get("og:image:height"), "627");
    const image = get("og:image");
    assert.equal(get("twitter:image"), image);
    assert.equal(new URL(image).origin, "https://www.eunomiapharmaservices.com");
    assert.ok(!images.has(image), `${route}: page-specific image`);
    images.add(image);
    const png = read(`${new URL(image).pathname.slice(1)}.body`);
    assert.equal(png.subarray(1,4).toString(), "PNG");
    assert.equal(png.readUInt32BE(16), 1200);
    assert.equal(png.readUInt32BE(20), 627);
  }
});

test("resource thumbnails and team portraits have names or topics in their alt text", () => {
  for (const route of ["resources", "team"]) {
    const html = read(`${route}.html`).toString();
    const images = [...html.matchAll(/<img\s+[^>]*>/g)];
    assert.ok(images.length > 10);
    for (const [image] of images) assert.match(image, /alt="[^"]+"/, `${route}: ${image}`);
  }
  const home = read("index.html").toString();
  assert.match(home, /<img[^>]*alt=""[^>]*>/, "decorative duplicate logos stay decorative");
});
