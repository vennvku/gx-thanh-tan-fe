export default {
  server: {
    host: '0.0.0.0', // lắng nghe trên tất cả các địa chỉ IP
    port: 3000, // port bạn muốn chạy ứng dụng (có thể thay đổi nếu cần)
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Giáo xứ Thanh Tân - TGP Huế',
    htmlAttrs: {
      lang: 'vi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Transition page mode
  transition: {
    name: 'page',
    mode: 'out-in',
    duration: '200',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss', '~/assets/fonts/Mulish.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/bus' }, { src: '~plugins/i18n' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,

    extend(config) {
      // Tìm rule hiện tại đang xử lý file SVG
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      // Thay đổi rule hiện tại để không xử lý SVG bằng file-loader nữa
      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      // Thêm rule mới cho vue-svg-loader để xử lý SVG như component
      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: ['babel-loader', 'vue-svg-loader'],
          },
          {
            use: 'file-loader',
          },
        ],
      })
    },
  },
}
