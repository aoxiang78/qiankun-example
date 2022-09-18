const { name } = require('./package')

const PublicPath = (() => {
  if (process.env.NODE_ENV === 'development') {
    return `//localhost:${process.env.PORT}/`
  }
  if (process.env.NODE_ENV === 'production') {
    return `/modules/${name}/`
  }
  return '/'
})

module.exports = {
  webpack: function(config, env) {
    config.output.publicPath = PublicPath
    config.output.library = `${name}-[name]`
    config.output.libraryTarget = 'umd'
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`
    return config;
  },
  // Extend/override the dev server configuration used by CRA
  // See: https://github.com/timarney/react-app-rewired#extended-configuration-options
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      // Default config: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpackDevServer.config.js
      const config = configFunction(proxy, allowedHost);
      config.headers = {'Access-Control-Allow-Origin': '*'}

      return config;
    };
  },
};
