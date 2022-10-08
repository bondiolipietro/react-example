/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const webpack = require('webpack')

module.exports = function override(config, env) {
  const alias = config.resolve.fallback || {}
  Object.assign(alias, {
    '@/components': path.resolve(__dirname, '../src/components'),
    '@/config': path.resolve(__dirname, '../src/config'),
    '@/constants': path.resolve(__dirname, '../src/constants'),
    '@/pages': path.resolve(__dirname, '../src/pages'),
    '@/router': path.resolve(__dirname, '../src/router'),
    '@/services': path.resolve(__dirname, '../src/services'),
    '@/state': path.resolve(__dirname, '../src/state'),
    '@/styles': path.resolve(__dirname, '../src/styles'),
    '@/utils': path.resolve(__dirname, '../src/utils'),
    stream: 'stream-browserify',
    path: 'path-browserify',
  })

  const fallback = config.resolve.fallback || {}
  Object.assign(fallback, {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
    zlib: require.resolve('browserify-zlib'),
    fs: false,
    buffer: 'buffer/',
    util: 'util/',
  })

  config.resolve.fallback = fallback
  config.resolve.alias = alias

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ])

  return config
}
