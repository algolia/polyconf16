var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var compiler = webpack(config);
var args = process.argv.slice(2);

var server = new WebpackDevServer(compiler, {
  hot: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  },
  stats: {
    assets: true,
    colors: true,
    version: false,
    hash: true,
    timings: false,
    chunks: true,
    chunkModules: false
  },
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 1500
  }
});

server.listen(8080);