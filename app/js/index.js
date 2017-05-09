class Test{
  constructor () {
    this.a = 'hello world'
  }
}

let test = new Test();

// 把结果打到页面上
document.body.innerHTML = test.a;
