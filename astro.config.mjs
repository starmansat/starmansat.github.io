import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://starmansat.github.io', // switch to the custom domain if you add one (also add public/CNAME)
  trailingSlash: 'always',
  integrations: [sitemap()],
});
