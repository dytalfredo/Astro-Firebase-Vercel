
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"
import icon from "astro-icon";
import { VitePWA } from "vite-plugin-pwa"



// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind(), icon()],
  adapter: vercel(),
  output: "server",

  vite: {

    ssr: {
      noExternal: ["path-to-regexp"],
    },
    plugins: [
      VitePWA({
        registerType: "autoUpdate",

        workbox: {
          globDirectory: ".vercel/output/static",
          globPatterns: ["**/*.{html,js,css,woff,woff2,ttf,eot,ico}"],
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
              handler: "CacheFirst",
              options: {
                cacheName: "images",
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 30 * 24 * 60 * 60,
                },
              },
            },
            {
              urlPattern: /\.(?:woff|woff2|ttf|eot|ico)$/,
              handler: "CacheFirst",
              options: {
                cacheName: "fonts",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 30 * 24 * 60 * 60,
                },
              },
            },
          ],
          navigateFallback: null,
        },
      }),
    ],
  },
})