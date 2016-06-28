require('source-map-support/register');
require('babel-register')({
  ignore: /(node_modules|\.svg$)/ // We don't want babel to try to parse the svg files
});