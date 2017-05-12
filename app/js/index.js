class Test{
  constructor () {
    this.a = 'hello world'
  }
}

let test = new Test();

// 把结果打到页面上
document.body.innerHTML = test.a;

// 引入兼容库
import 'babel-polyfill';
import './class/string.js';
