import { createI18n } from 'vue-i18n'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,        // recommended for Vue 3 Composition API
  globalInjection: true, // allows $t in templates without import
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en
  }
})

export default i18n
