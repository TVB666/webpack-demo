let path = require('path')
console.log(path.resolve(__dirname, 'dist'));

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
        }
      ]
  }
}