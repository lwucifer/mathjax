export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "UpBeat",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Ứng dụng nghe nhạc được phát triển trên nền tảng di động cho phép bạn nghe, tìm kiếm và sắp xếp nhạc trực tiếp từ YouTube."
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'upbeat, youtube'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Upbeat - Tận hưởng âm nhạc cả khi màn hình khoá'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'upbeat.famtech.vn'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://upbeat.famtech.vn/favicon.ico'
      },
      {
        hid: 'description',
        property: 'description',
        content: 'Ứng dụng nghe nhạc được phát triển trên nền tảng di động cho phép bạn nghe, tìm kiếm và sắp xếp nhạc trực tiếp từ YouTube.'
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Upbeat - Tận hưởng âm nhạc cả khi màn hình khoá'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@upbeat.famtech.vn'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://upbeat.famtech.vn/favicon.ico'
      },
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        content: 'https://upbeat.famtech.vn/favicon.ico'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'Ứng dụng nghe nhạc được phát triển trên nền tảng di động cho phép bạn nghe, tìm kiếm và sắp xếp nhạc trực tiếp từ YouTube.'
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@nuxtjs/svg"
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
