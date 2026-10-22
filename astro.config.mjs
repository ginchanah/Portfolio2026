// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ginchanah.github.io',
  base: process.env.NODE_ENV === 'production' ? '/Portfolio2026/' : '/',
})