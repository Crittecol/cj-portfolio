import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://crittecol.github.io',
  base: '/cj-portfolio/',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
