import {
  faGithub,
  faTwitter,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'modavidc.com',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    '@nuxtjs/i18n',
  ],
  chakra: {
    icons: {
      // Here we state that we use `fa`
      // icons library for Chakra's
      // internal icon parser
      iconPack: 'fa',
      iconSet: {
        faGithub,
        faTwitter,
        faLinkedin,
        faStackOverflow,
      },
    },
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        es: {
          welcome: 'Hola, Vaquero del Espacio! 👋🛸',
          iam: 'Soy',
          names: 'Cedeño, Moisés Cedeño.',
        },
        en: {
          welcome: 'Hi, Space Cowboy! 👋🛸',
          iam: "I'm",
          names: 'Cedeño, Moisés Cedeño.',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    port: process.env.PORT || 4002,
  },
}
