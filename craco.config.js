const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      "components": resolve('src/components'),
      "utils": resolve('src/utils')
    },
    configure: (webpackConfig, { env, paths }) => {
      // 修改输出目录
      webpackConfig.output.path = resolve('dist')
      return webpackConfig
    }
  }
}