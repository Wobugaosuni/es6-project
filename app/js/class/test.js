// 块级作用域：大括号包围内的就是块级作用域，在大括号外，变量生命周期结束
function test () {
  for (let i=1; i<3; i++) {
    console.log(i);
  }
  console.log(i);
}

test();
