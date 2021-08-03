import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: '%s - game-match',
    title: 'game-match',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
    '~/plugins/auth0.js'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  auth: {
    auth0: {
      domain: 'dev-czgqj68f.jp.auth0.com',
      client_id: 'rVXyBs93aSmbZHlUYty1Vr3WZ3qk2kRZ',
      logoutRedirectUri: 'http://localhost:3000'
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/callback',
      home: '/home'
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
  },
  server: {
    host: '0.0.0.0',
    port: '8000'
  }
}
