const path = require('path');
const APP_ROOT = process.cwd();
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const loader = {
  rules: [{
      test: /\.jsx?$/,
      exclude: [
        /**
         * 在node_modules的文件不被babel理会
         */
        path.resolve(APP_ROOT, 'node_modules'),
      ],
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true // 启用编译缓存
        }
      }]
    }, {
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
    },
    {
      test: /\.json$/i,
      use: 'json-loader'
    }
  ]
}

module.exports = loader;