function test () {
  /**
   * let
   */
  // 块级作用域：大括号包围内的就是块级作用域，在大括号外，变量生命周期结束
  // 在es6中，强制开启了严格模式. 变量没有声明，不能引用，否则会报ReferenceError
  for (let i=1; i<3; i++) {
    console.log(i);
  }
  console.log(i); //ReferenceError: i is not defined

  // 不可重复声明
  let a = 0; // Cannot find module "./class/test"
  let a = 1;

  /**
   * const
   */
  // 声明的类型是值类型，不能修改
  // 对象是引用类型，返回值是：指向对象存储的内存中的指针。指针不能变化，但对象可以变化
  const PI = 3.1415926;
  const k = {
    a: 1
  };

  PI = 4; // SyntaxError: "PI" is read-only
  k.b = 3; // 没报错

  console.log('PI:', PI);
  console.log('k:', k);
}

test();
