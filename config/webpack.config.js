const webapck = require('webpack');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

const loader = require('./webpack.loader');
const plugins = require('./webpack.plugins');
const decserver = require('./webpack.devserver');


var myip = require('my-ip')();
const pkg = require('../package.json');

let localhost;

if (NODE_ENV === 'mock') {
  localhost = 'localhost'
} else {
  localhost = 'mido'
}

const config = {
  entry: pkg.entry,
  output: {
    filename: '[name].[hash].js',
    path: __dirname + '../dist',
    publicPath: '/'
  },
  module: loader,
  plugins: plugins(NODE_ENV),
  devServer: decserver({
    NODE_ENV,
    localhost
  })
}

module.exports = config;