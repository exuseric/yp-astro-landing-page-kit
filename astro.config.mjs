// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import purgecss from 'astro-purgecss';
import { getPage } from './src/pocketbase.ts';
// @ts-ignore
const { expand: { site_details: { url, theme_color, title } } } = await getPage();

export default defineConfig({
    output: "static",
    outDir: process.cwd() + '\\build\\' + url.slice(8),
    site: url,

    build: {
        assets: 'assets',
        inlineStylesheets: 'never'
    },

    image: {
        domains: ["127.0.0.1"]
    },

    compressHTML: false,
    integrations: [sitemap({
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date(),
        i18n: {
            defaultLocale: 'en',
            locales: {
                en: 'en-US'
            }
        }
    }), icon(), purgecss({
        content: [
            process.cwd() + '/src/**/*.astro'
        ],
        keyframes: true,
        fontFace: true,
        variables: true
    })]
});