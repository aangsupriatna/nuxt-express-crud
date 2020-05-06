module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
  ],

  moment: {
    locales: ['id']
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/moment'
  ],
  serverMiddleware: ['~/server/api/index.js'],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseUrl: 'http://localhost:3000'
  },
  
  // Auth config
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
        // autoFetchUser: true
      }, 
      redirect: {
        home: false
      },
    }
  },
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
      new MomentLocalesPlugin({
        localesToKeep: ['id'],
      })
    }
  }
}
