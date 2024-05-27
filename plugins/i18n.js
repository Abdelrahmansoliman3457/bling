import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const myAppLang = process.server ? 'ar' : localStorage.getItem('locale') || "ar";
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    langDir: "locales",
    locale: myAppLang,
    messages: {
      en: en,
      ar: ar,
    },
  });

  vueApp.use(i18n);
});
