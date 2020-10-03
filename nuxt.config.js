import theme from '@nuxt/content-theme-docs'

export default theme({
  i18n: {
    locales: () => [{
      code: 'ja',
      iso: 'ja_JP',
      file: 'ja_JP.js',
      name: '日本語'
    }],
    defaultLocale: 'ja'
  },
  watchers: {
    webpack: {
      poll: 1000,
    },
  }
})