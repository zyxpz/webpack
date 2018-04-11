const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const loader = {
  rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: path.join(__dirname, './src'),
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif|svg|bmp|eot|woff|woff2|ttf)$/,
      loader: {
        loader: 'url-loader',
        options: {
          limit: 5 * 1024, // 图片大小 > limit 使用file-loader, 反之使用url-loader
          outputPath: 'images/' // 指定打包后的图片位置
        }
      }
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader"
      ]
    }, {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "less-loader"
      ]
    }
  ]
}

module.exports = loader;