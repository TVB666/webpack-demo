## 04 配置plugin 完成html模板 打包

>第一步  

  复制webpack-demo3 中的src文件夹与根目录下的文件

>第二步  

  安装 HtmlWebpackPlugin
```
cnpm install html-webpack-plugin --save-dev
```

>第三步  

导入 HtmlWebpackPlugin
```
let HtmlWebpackPlugin = require('html-webpack-plugin');
```
>第四步

```
  // plgins 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  // 输入路径index所在位置
    })
  ]
```

> 第五步  

运行指令
```
webpack
```