/**
 * 解构赋值
 */
// 新建块级作用域
// 数组解构赋值
{
  let a,b,rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5];
  console.log('a:', a);
  console.log('b:', b);
  console.log('rest type:', typeof rest, '。rest:', rest);
}

// 对象解构赋值
{
  let c, d;
  ({c, d} = {c: 1, d: 2});
  console.log('c:', c);
  console.log('d:', d);
}

{
  let {a=10, b=5} = {a: 3}; // 对象属性默认值的一种写法
  console.log(a, b); // 3, 5
}

// 解构赋值应用
{
  function f () {
    return [1, 3, 3, 5, 7];
  }

  let a,b
  [a, , ...b] = f();
  console.log(a, b);
}

{
  let jsonData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }

  let {title: esTitle, test: [{title: cnTitle}]} = jsonData;
  console.log(esTitle, cnTitle);
}
