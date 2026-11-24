// @ts-check
import { defineConfig } from 'astro/config';
import { URL_SITIO } from './src/sitio.mjs';

// https://astro.build/config
export default defineConfig({
  site: URL_SITIO, // se cambia en src/sitio.mjs
  trailingSlash: 'ignore',
});
