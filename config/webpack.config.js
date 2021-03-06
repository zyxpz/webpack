const webapck = require('webpack');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

const loader = require('./webpack.loader');
const plugins = require('./webpack.plugins');
const decserver = require('./webpack.devserver');

const APP_ROOT = process.cwd();


var myip = require('my-ip')();
const pkg = require('../package.json');

let localhost;

if (NODE_ENV === 'mock') {
  localhost = 'localhost'
} else {
  localhost = 'mido'
}

const config = {
  resolve: { // 重定向路径
    mainFiles: ['index.web', 'index'],
    modules: [path.resolve(APP_ROOT, 'src'), 'node_modules'],
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.less', '.scss'],
    alias: {}
  },
  entry: pkg.entry,
  output: {
    filename: '[name].js',
    path: path.resolve(APP_ROOT, 'dist'),
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