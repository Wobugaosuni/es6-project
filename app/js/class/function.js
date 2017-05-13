{
  /**
   * 函数参数默认值
   */
  function test (x, y = 'world', z) {
    console.log('默认值', x, y, z);
  }

  test('hello', 'dog', 'cat');
}

{
  /**
   * 作用域
   */
  let x = 'test';
  function test2 (x, y = x) {
    console.log('作用域', x, y)
  }

  test2('hello'); // hello hello
  test2(); // undefined undefined

  function test3 (z, y = x) {
    console.log('作用域2', z, y);
  }

  test3('hello'); // hello test
}

{
  /**
   * rest参数： 将参数转换成数组
   */
  function test4 (...arg) {
    for (let value of arg) {
      console.log('rest', value);
    }
  }

  test4(1, 2, 3);
}

{
  /**
   * 扩展运算符
   */
  console.log(...[1, 2, 4]);  // 将数组转换成离散的值
  console.log('a', ...[1, 2, 4]);
}

{
  /**
   * 箭头函数
   */
  let arrowFunction = value => value*2;

  console.log('arrow', arrowFunction(3));
}

{
  /**
   * 伪调用：函数的最后一句话是不是一个函数
   * 相对于递归，可以提升性能
   */
  function tail (x) {
    console.log('tail', x);
  }

  function fx (x) {
    return tail(x);
  }

  fx(123);
}
