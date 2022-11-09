const { name } = require('./package')

function getBasePath () {
  if (process.env.NODE_ENV === 'development') {
    return `//localhost:${process.env.PORT}/`
  }
  if (process.env.NODE_ENV === 'production') {
    return `/modules/${name}/`
  }
}

module.exports = {
  publicPath: getBasePath(),
  outputDir: `dist/modules/${name}`,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
