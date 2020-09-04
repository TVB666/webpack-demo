let path = require('path')
console.log(path.resolve(__dirname, 'dist'));

// 安装html-webpack-plugin cnpm isntall html-webpack-plugin
let  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口文件
  entry:  "./src/index.js",
  output: {
    //输出文件名称
    filename: "bundle.js",
    // 输出的路劲
    //绝对路径
    path: path.resolve(__dirname, 'dist')
  },
  //开发模式 production(生产模式)
  mode: 'development',
  // loader的配置
  module:{
      // 对某个格式的文件进行转换处理
      rules: [
        {
          test: /\.css$/,
          use: [
            // use 数组里中的loader 的顺序，为逆序执行
            // 将js的样式内容插入到style标签里
            "style-loader",
            // 将css文件装换为js
            "css-loader"
          ]
        },{
          test: /\.(jpg|png|gif)$/,
          loader: 'url-loader',
          // 图片小于8kb,base64处理，减少请求数量，会是体积更大
          options: {
            limit: 8*1024,
            esModule: false,
            //[hash:10] 哈希前十位
            // .[ext] 去图片拓展名
            name: '[hash:10].[ext]'
          }
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }

      ]
  },
  // plgins 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}