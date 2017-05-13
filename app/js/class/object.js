{
  /**
   * 简洁表示法
   */
  let a = 1;
  let b = 2;
  let object = {a, b};

  console.log('object', object);

  // 函数
  let es5_method = {
    hello: function () {
      console.log('hello');
    }
  };

  let es6_method = {
    hello () {
      console.log('hello');
    }
  };

  console.log('函数', es5_method.hello(), es6_method.hello());
}

{
  /**
   * 属性表达式
   * key值可以是变量！用中括号表示
   */
  let a = 'b';
  let es5_obj = {
    a: 'c'
  };
  let es6_obj = {
    [a]: 'c'
  };

  console.log('obj', es5_obj, es6_obj);
}

/**
 * 新增API
 */
{
  // 判断两个值是否相等
  console.log('字符串', Object.is('abc', 'abc'), 'abc'==='abc'); // Object.is()相当于三个等号
  console.log('数组', Object.is([], []), []===[]); // false 因为数组是引用类型，指向不同的地址

  // 拷贝
  console.log('拷贝', Object.assign({'a': 1}, {'b': 2}));  // 不拷贝：继承的属性、不可枚举的属性

  // 遍历
  let test = {k: 123, j: 456};

  for (let [key, value] of Object.entries(test)) {
    console.log('遍历', [key, value]);
  }

  console.log('entries', Object.entries(test));
}

{
  /**
   * 扩展运算符
   * 但babel支持不友好
   */
  let {a, b, ...c} = {a: 1, b: 2, c: 3, d: 4};
}
