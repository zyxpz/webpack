const path = require('path');

let devservers = {

}

function devserver(params) {
  const {
    env = 'mock',
      localhost = 'localhost'
  } = params;
  if (env === 'mock') {
    return devservers = {
      contentBase: path.resolve(__dirname, 'dist'), // 配置开发服务运行时的文件根目录
      host: localhost, // 开发服务器监听的主机地址
      compress: true, // 开发服务器是否启动gzip等压缩
      port: 8080, // 开发服务器监听的端口
      stats: 'errors-only'
    }
  } else {
    return ''
  }

}

module.exports = devserver;