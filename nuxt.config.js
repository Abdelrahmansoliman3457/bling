// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  // ssr: false,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Bling",
      meta: [
        { name: "description", content: "موقع بلينج لبيع المنتجات" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        { rel: "icon", type: "image/x-icon", href: "/logo.png" },
      ],
    },
  },
  build: {
    transpile: ["vuetify", "@fawmi/vue-google-maps"],
  },
  router: {
    middleware: ["auth"],
    // options: {
    //   hashMode: true
    // }
  },

  devtools: { enabled: false },
  // prime vue
  modules: ["@nuxtjs/axios" , '@vee-validate/nuxt'],
  modules: [
    "nuxt-primevue",
    "vue3-carousel-nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  // plugins: [
  //   // ...
  //   "@/plugins/vue-google-maps",
  // ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    "assets/css/style.css",
    "assets/css/ltrstyle.css",
    "primevue/resources/themes/lara-light-green/theme.css",
    "primevue/resources/primevue.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "bootstrap/dist/css/bootstrap.min.css",
    // "~/assets/styles/main.scss",
    "primeicons/primeicons.css",
  ],
  primevue: {
    usePrimeVue: true,
    options: {},
    importPT: undefined,
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    directives: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
    composables: {
      prefix: "",
      name: undefined,
      include: undefined,
      exclude: undefined,
    },
  },
});
