import data from './data.json'

//引入样式资源
import './style.css'

function fn1(){
  console.log('----------');
}

fn1();
console.log(data);

// 打包 开发环境
// webpack ./src/index.js -o ./dist/bandle.js --mode=development

// 生产环境
// webpack ./src/index.js -o ./dist/bandle_production.js --mode=production
// 生产环境比开发环境多了压缩代码和代码混淆