// class Test{
//   constructor () {
//     this.a = 'hello world'
//   }
// }

// let test = new Test();

// 把结果打到页面上
// document.body.innerHTML = test.a;

// 引入兼容库
// import 'babel-polyfill';
// import './class/module';

// 引入模块：./class/module.js
// import {a, test, Hello} from './class/module'
import * as module from './class/module'

console.log(module.a)
