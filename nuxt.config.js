module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Levi Bostian',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal site for Levi Bostian.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/mixy_pixy.js', type: 'application/javascript' }
    ]
  },
  loading: { color: '#2D9668' },
  css: [
  ],
  modules: [
      'nuxtent'
//    '@nuxtjs/cssnano',
//    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
