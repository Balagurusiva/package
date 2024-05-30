export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title:
        "Cblaze Product",
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    serveStatic: true,
  },
  sourcemap: { server: false, client: false },
  devServerHandlers: [],
});
