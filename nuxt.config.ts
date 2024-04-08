// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-swiper",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
  ],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },

  app: {
    head: {
      title: "Nuxt.js TypeScript TailwindCSS Starter",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        { name: "theme-color", content: "#000000" },
        {
          hid: "description",
          name: "description",
          content: "Nuxt.js TypeScript TailwindCSS Starter",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "msapplication-TileColor", content: "#000000" },
        // { name: "msapplication-TileImage", content: "/icons/ms-icon-144x144.png" },
        // { name: "msapplication-config", content: "/icons/browserconfig.xml" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        {
          name: "apple-mobile-web-app-title",
          content: "Nuxt.js TypeScript TailwindCSS Starter",
        },
        {
          name: "keywords",
          content: "",
        },
        {
          name: "application-name",
          content: "Nuxt.js TypeScript TailwindCSS Starter",
        },
        { name: "msapplication-TileColor", content: "#000000" },
        { name: "theme-color", content: "#000000" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "عنب" },
        {
          name: "twitter:description",
          content: "Nuxt.js TypeScript TailwindCSS Starter",
        },
        {
          name: "twitter:image",
          content: "https://enab.app/enabog.png",
        },
        { name: "twitter:creator", content: "@Starter" },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Nuxt.js TypeScript TailwindCSS Starter",
        },
        {
          property: "og:description",
          content: "Nuxt.js TypeScript TailwindCSS Starter",
        },
        {
          property: "og:site_name",
          content: "Nuxt.js TypeScript TailwindCSS Starter ",
        },
        { property: "og:url", content: "" },
        {
          property: "og:image",
          content: "/logo.png",
        },
      ],
      link: [
        // Favicon
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        //Inter font
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@200;400;500;700;800&display=swap",
        },
      ],

      viewport:
        "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, viewport-fit=cover",
    },
  },
});
