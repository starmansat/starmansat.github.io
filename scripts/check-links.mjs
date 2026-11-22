// Fails if any built page links to an internal path that doesn't exist in dist/. Run after `npm run build`.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const pages = [];
const walk = (d) => readdirSync(d).forEach((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : f.endsWith('.html') && pages.push(join(d, f))));
walk(dist);

const exists = (p) => {
  const f = join(dist, decodeURIComponent(p.split(/[?#]/)[0]));
  return existsSync(f) && (statSync(f).isFile() || existsSync(join(f, 'index.html')));
};
let bad = 0;
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    if (url.startsWith('//') || exists(url)) continue;
    console.log(`${page.slice(dist.length)} -> ${url}`);
    bad++;
  }
}
console.log(`${pages.length} pages checked, ${bad} broken internal links`);
process.exit(bad ? 1 : 0);
