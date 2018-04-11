const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const pkgEntry = require('../package.json').entry;

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const miniCss = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

let htmlWebpackPlugin = [];
let plugins = [];

for (const i in pkgEntry) {
  htmlWebpackPlugin.push(new HtmlWebpackPlugin({
    template: `./mock/${i}.html`, // 指定产出的模板
    filename: `${i}.html`, // 产出的文件名
    chunks: ['common', 'base'], // 在产出的HTML文件里引入哪些代码块
    hash: true, // 名称是否哈希值
    title: i, // 可以给模板设置变量名，在html模板中调用 htmlWebpackPlugin.options.title 可以使用
    minify: { // 对html文件进行压缩
      removeAttributeQuotes: true // 移除双引号
    }
  }))
}

const cleanWebpackPlugin = new CleanWebpackPlugin(); // 打包前先清空输出目录

const uglifyjsWebpackPlugin = new UglifyjsWebpackPlugin() // 压缩js

function plugin(env) {
  if (env === 'mock') {
    plugins.push(cleanWebpackPlugin, ...htmlWebpackPlugin, miniCss);
  } else {

  }

  return plugins;
}

module.exports = plugin;