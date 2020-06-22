const pageLimit = 10

const fetchBlogRes = async () => {
  const contentful = require('contentful')
  const client = contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN
  })
  const blogRes = await client.getEntries({
    content_type: 'blogPosts',
    order: "-sys.createdAt",
  })
  return blogRes
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { name: 'msapplication-TileColor', content: '#ff0000' },
      { name: 'theme-color', content: '#ff0000' },
      { name: 'keywords', content: 'ランデレオン, learn de leon, 群馬 家庭教師, 邑楽 家庭教師, 教育 エンタメ' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#63aee5' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700%7cOpen+Sans:100,200,300,400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sawarabi+Mincho' }
    ]
  },
  env: {
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseDatabaseURL: process.env.FIREBASE_DATABASE_URL,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseMessageingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    ctfSpaceId: process.env.CTF_SPACE_ID,
    ctfCdaAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    pageLimit
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '@/components/modules/Loading.vue',
  /*
   ** Global CSS
   */
  css: [
    'ress',
    'github-markdown-css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/burgerButton.js', ssr: false },
    { src: '~/plugins/contentful.js' },
    { src: '~/plugins/dateFormat.js' },
    { src: '~/plugins/firebaseFunctions.js' },
    { src: '~/plugins/lazyLoad.js' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    ['vue-scrollto/nuxt', { duration: 500 }],
    '@/modules/paging.js'
  ],
  styleResources: {
    sass: [
      '@/assets/sass/constants.sass',
      '@/assets/sass/plugins.sass'
    ]
  },
  generate: {
    async routes() {
      const blogRes = await fetchBlogRes()
      const totalPages = Math.ceil(blogRes.total / pageLimit);
      const pageRange = [...Array(totalPages).keys()]
      let urls = pageRange.map(pageNum => ({
        route: `/blogs/page/${pageNum + 1}`
      }))
      urls = urls.concat(blogRes.items.map(item => ({
        route: `/blogs/${item.sys.id}`,
        payload: item
      })))
      return urls
    }
  },
  toast: {
    position: 'bottom-center',
    action: {
      text: '閉じる',
      onClick(_e, toastObject) {
        toastObject.goAway(0)
      }
    }
  },
  markdownit: {
    injected: true
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://learndeleon.com',
    gzip: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
  },
}
