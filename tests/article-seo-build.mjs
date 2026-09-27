// Run after `next build`: node --test tests/article-seo-build.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const articles = JSON.parse(read('data/article-seo.json'));
const base = 'https://www.eunomiapharmaservices.com';
const duplicate = 'ai-in-healthcare-compliance-navigating-opportunities-risks-regulatory-landscapes';
const canonical = '/resources/articles/ai-in-healthcare-compliance';
const structuredData = (html) => [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));

test('both duplicate routes return 301 directly to the short canonical URL', () => {
  const { redirects } = JSON.parse(read('.next/routes-manifest.json'));
  for (const source of [`/${duplicate}`, `/resources/articles/${duplicate}`]) {
    const redirect = redirects.find((item) => item.source === source);
    assert.equal(redirect?.statusCode, 301);
    assert.equal(redirect.destination, canonical);
  }
  assert.equal(existsSync(new URL(`../.next/server/app/resources/articles/${duplicate}.html`, import.meta.url)), false);
  const sitemap = read('.next/server/app/sitemap.xml.body');
  assert.ok(!sitemap.includes(duplicate));
  assert.equal(sitemap.split(`<loc>${base}${canonical}</loc>`).length - 1, 1);
  const library = read('.next/server/app/resources.html');
  assert.ok(!library.includes(duplicate));
  assert.equal(library.split(`href="${canonical}"`).length - 1, 1);
});

test('every generated article has a canonical, valid dates and a linked team Person', () => {
  const team = structuredData(read('.next/server/app/team.html')).flatMap((entry) => entry['@graph'] ?? [entry]);
  for (const article of articles) {
    const html = read(`.next/server/app/resources/articles/${article.slug}.html`);
    const schemas = structuredData(html).filter((entry) => entry['@type'] === 'Article');
    assert.equal(schemas.length, 1, article.slug);
    const schema = schemas[0];
    assert.equal(schema.url, `${base}/resources/articles/${article.slug}`);
    assert.ok(html.includes(`<link rel="canonical" href="${schema.url}"`));
    for (const key of ['datePublished', 'dateModified']) {
      assert.match(schema[key], /^\d{4}-\d{2}-\d{2}$/);
      assert.ok(Number.isFinite(Date.parse(schema[key])));
    }
    assert.ok(schema.dateModified >= schema.datePublished);
    assert.ok(html.includes(`dateTime="${schema.datePublished}"`));
    const person = team.find((entry) => entry['@id'] === schema.author['@id']);
    assert.equal(person?.['@type'], 'Person');
    assert.equal(person.name, schema.author.name);
    assert.ok(html.includes(`href="${schema.author.url.replace(base, '')}"`));
    assert.ok(html.includes('By <a'));
  }
  const ai = read('.next/server/app/resources/articles/ai-in-healthcare-compliance.html');
  assert.ok(!ai.match(/<title>[^<]*\(2025\)/));
  assert.ok(ai.includes('dateTime="2026-04-30"'));
});

test('the ten priority descriptions are complete and between 140 and 155 characters', () => {
  const slugs = [
    'ai-in-healthcare-compliance', 'pmcpas-2026-social-media-guidance',
    'ensure-audit-readiness-in-pharma-compliance', 'pharma-compliance-risk-assessment-framework',
    'top-transparency-reporting-mistakes-pharmaceutical-companies-should-avoid',
    'right-sized-compliance-support-for-biotech-and-global-pharma',
    'fair-market-value-fmv-in-healthcare-compliance',
    'from-risk-to-resilience-why-third-party-risk-management-is-pharmas-biggest-competitive-advantage',
    'navigating-country-level-accountability-in-europe', 'what-makes-healthcare-compliance-training-effective',
  ];
  for (const slug of slugs) {
    const { description } = articles.find((article) => article.slug === slug);
    assert.ok(description.length >= 140 && description.length <= 155, slug);
    assert.ok(description.endsWith('.') && !description.includes('…'), slug);
    assert.ok(read(`.next/server/app/resources/articles/${slug}.html`).includes(`<meta name="description" content="${description}"`));
  }
});

