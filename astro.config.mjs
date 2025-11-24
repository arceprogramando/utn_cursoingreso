import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import { resolve } from 'path';
import AstroPWA from '@vite-pwa/astro';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://utn-cursoingreso.vercel.app',

  integrations: [
    sitemap({
      serialize(item) {
        const today = new Date().toISOString();

        const indexUrl = /^https?:\/\/[^/]+\/$/.test(item.url) || item.url === '/';
        const isCareerUrl = /career/.test(item.url) && !/\/career\/programacion(1|2)(\/|$)/.test(item.url);
        const isCareerProgramationUrl = /\/career\/programacion(1|2)(\/|$)/.test(item.url);
        const isDataBaseUrl = /\/career\/basededatos(1|2)(\/|$)/.test(item.url);

        if (indexUrl) return { ...item, changefreq: 'daily', lastmod: today, priority: 1.0 };

        if (isCareerUrl) return { ...item, changefreq: 'daily', lastmod: today, priority: 0.9 };

        if (isCareerProgramationUrl) return { ...item, changefreq: 'daily', lastmod: today, priority: 0.8 };

        if (isDataBaseUrl) return { ...item, changefreq: 'daily', lastmod: today, priority: 0.7 };

        return { ...item, changefreq: 'monthly', lastmod: today, priority: 0.6 };
      },
    }),
    icon(),
    mdx(),
    AstroPWA({
      mode: 'production',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Tecnicatura en Programación UTN',
        short_name: 'UTN Programación',
        description: 'Apuntes y recursos para la Tecnicatura Universitaria en Programación en la Universidad Técnica Nacional',
        theme_color: '#3b82f6',
        background_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait-primary',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        categories: ['education', 'productivity'],
        lang: 'es-AR',
      },
      workbox: {
        navigateFallback: '/offline',
        navigateFallbackDenylist: [/^\/api/],
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2,avif,webp,jpg,jpeg}'],
        globIgnores: ['**/node_modules/**/*'],
        maximumFileSizeToCacheInBytes: 3000000, // 3MB
        cleanupOutdatedCaches: true,
        sourcemap: false,
        runtimeCaching: [
          // Páginas HTML - Network First con fallback a caché
          {
            urlPattern: /^https:\/\/utn-cursoingreso\.vercel\.app\/.*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 días
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Páginas locales
          {
            urlPattern: ({ request }) => {
              return request.mode === 'navigate';
            },
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 días
              },
            },
          },
          // Fuentes de Google
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Imágenes de Cloudinary
          {
            urlPattern: /^https:\/\/res\.cloudinary\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cloudinary-images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 días
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Imágenes locales
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 días
              },
            },
          },
          // CSS y JS
          {
            urlPattern: /\.(?:css|js)$/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 días
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
  ],

  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
    },
  },
});
