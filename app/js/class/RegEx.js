{
  // RegExp 构造函数创建一个正则对象

  /**
   * ES5写法
   */
  let regExp1 = new RegExp('xyz', 'i');  // 第一个参数是字符串，第二个参数是修饰符i: 忽略大小写
  let regExp2 = new RegExp(/xyz/i); // 只接受一个参数：正则表达式

  console.log('regExp1', regExp1.test('1xyz123'));
  console.log('regExp2', regExp2.test('xyz123'));

  /**
   * ES6写法
   */
  let regExp3 = new RegExp(/xyz/ig, 'i'); // 可以接受两个参数: 第一个参数：正则表达式，第二个参数：修饰符。第二个参数会覆盖正则表达式的修饰符

  console.log('regExp3.flags', regExp3.flags);  // flag: 新增的用来获取修饰符的属性
  console.log('regExp3', regExp3.test('1xyzg'));

}

{
  /**
   * y修饰符
   */
  let string = 'bbb_bb_b';
  let regExp1 = /b+/g;
  let regExp2 = /b+/y;

  console.log('y one:', regExp1.exec(string), regExp2.exec(string));
  console.log('y two:', regExp1.exec(string), regExp2.exec(string));
  console.log('y three:', regExp1.exec(string), regExp2.exec(string));
  console.log('y four:', regExp1.exec(string), regExp2.exec(string));

  // g 和 y 相同点：都是全局匹配
  // g 和 y 不同点

  // 判断正则对象是否开启了带y修饰符的作用
  console.log(regExp1.sticky, regExp2.sticky);
}

{
  /**
   * u修饰符
   * 使用场景：如果处理字符串中的正则表达式，有字符大于两个字节的，要加u修饰符
   * '.'只能匹配小于两个字节的字符，不是能匹配所有的字符
   * 字符大于两个字节的，一定要加u修饰符，才能正确识别
   */
  console.log('u-1', /^\uD83D/.test('\uD83D\uDdc2A'));
  console.log('u-2', /^\uD83D/u.test('\uD83D\uDdc2A'));

  // a的unicode码: 61
  // 大括号包起来的内容是作为unicode编码，需要加u修饰符识别
  console.log('u-3', /\u{61}/.test('a'));
  console.log('u-4', /\u{61}/u.test('a'));

  console.log('\u{20BB7}'); // 𠮷
  let string = '𠮷';
  console.log('u-5', /^.$/.test(string));  // ^.$中的.：匹配任何字符
  console.log('u-6', /^.$/u.test(string));  // 字符大于两个字节的，一定要加u修饰符，才能正确识别

  console.log('test-1', /𠮷{2}/.test('𠮷𠮷'));
  console.log('test-2', /𠮷{2}/u.test('𠮷𠮷'));
}

/**
 * s修饰符
 * '.'只能匹配小于两个字节的字符，不是能匹配所有的字符。
 * 还有四种情况不能处理的，例如换行符，回车符，行分隔符，段分隔符
 * 解决方法：加s修饰符
 * 但es6还没有实现，只是提案阶段，
 */

