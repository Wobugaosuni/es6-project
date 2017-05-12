/**
 * es6中unicode的表示
 */
{
  console.log('a', `\u0061`);

  console.log('s', `\u20BB7`);
  console.log('s', `\u{20BB7}`);  // 正确的unicode表示方法
}

{
  /**
   * es5中对unicode的处理
   */
  let string = '𠮷';
  console.log('string length:', string.length);  // 2。码值大于两个字节，每两个字节是一个长度

  console.log('string.charAt(0):', string.charAt(0));  // 取第一个字符
  console.log('string.charAt(1):', string.charAt(1)); // 取第二个字符

  console.log('string.charCodeAt(0):', string.charCodeAt(0)); // 取第一个字符的unicode编码的码值
  console.log('string.charCodeAt(1):', string.charCodeAt(1)); // 取第二个字符的unicode编码的码值

  /**
   * es6中对unicode的处理
   */
  let string2 = '𠮷a';
  console.log('string2 length:', string2.length);

  console.log('string2.codePointAt(0)', string2.codePointAt(0)); // 取第一个字符的unicode编码的码值，默认10进制
  console.log('string2.codePointAt(1)', string2.codePointAt(1));
  console.log('string2.codePointAt(2)', string2.codePointAt(2));
  console.log('string2.codePointAt(0).toString(16)', string2.codePointAt(0).toString(16));  // 转换成16进制
}
