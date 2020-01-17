
export default {
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
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/live2d-widget@3.0.5/lib/L2Dwidget.min.js', async: true, defer: true }
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
    'element-ui/lib/theme-chalk/index.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    'highlight.js/styles/github.css',
    '@/assets/style/markdown.less',
    '@/assets/style/reset.less'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** srcDir
  */
  srcDir: 'src/',
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    loader:[
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  // router: {
  //   base: '/blog/'
  // },
  server: {
    port: 3000,
    host: 'localhost', // default: localhost,
  }
}
