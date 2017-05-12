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
   * 根据字符获取码值
   * es5中对unicode的处理
   */
  let string = '𠮷';
  console.log('string length:', string.length);  // 2。 码值大于两个字节，每两个字节是一个长度

  console.log('string.charAt(0):', string.charAt(0));  // 取第一个字符
  console.log('string.charAt(1):', string.charAt(1)); // 取第二个字符

  console.log('string.charCodeAt(0):', string.charCodeAt(0)); // 取第一个字符的unicode编码的码值
  console.log('string.charCodeAt(1):', string.charCodeAt(1)); // 取第二个字符的unicode编码的码值

  /**
   * 根据字符获取码值
   * es6中对unicode的处理
   */
  let string2 = '𠮷a';
  console.log('string2 length:', string2.length);

  console.log('string2.codePointAt(0)', string2.codePointAt(0)); // 取第一个字符的unicode编码的码值，默认10进制
  console.log('string2.codePointAt(1)', string2.codePointAt(1));
  console.log('string2.codePointAt(2)', string2.codePointAt(2));
  console.log('string2.codePointAt(0).toString(16)', string2.codePointAt(0).toString(16));  // 转换成16进制
}

{
  /**
   * 根据码值获取字符
   * 两种方法区别在于：能不能处理大于两个字节的字符
   */
  console.log(String.fromCharCode('0x20bb7'));  //es5，不能

  console.log(String.fromCodePoint('0x20bb7'));  // es6，能
}

/**
 * 字符串遍历器接口
 */
{
  let string = '\u{20bb7}abc';
  console.log(string.length);

  // es5
  for (let i=0; i<string.length; i++) {
    console.log('item', string[i]);
  }

  // es6 字符串遍历器接口
  for (let item of string) {
    console.log('item', item);
  }
}

/**
 * 判断字符串是否包含某些字符
 */
{
  let string = 'string';
  console.log('includes', string.includes('s'));

  console.log('start', string.startsWith('str'));

  console.log('end', string.endsWith('ing'));
}

/**
 * 重复
 */
{
  let string = 'abc';

  console.log('repeat', string.repeat(2));
}

/**
 * 字符串补白:约定长度，不够则补
 * 处理日期、号码等情况
 * syntax: str.padEnd(targetLength [, padString])
 */
{
  console.log('padStart', '1'.padStart(2, '0')); // 向前补
  console.log('padEnd', '21'.padEnd(4, '00'));  // 向后补
}

/**
 * 标签模板
 * 作用1：过滤html字符串
 * 作用2：处理多语言转换
 */
{
  let user = {
    name: 'list',
    info: 'hello world'
  };

  abc`i am ${user.name},${user.info}`;
  console.log(abc`i am ${user.name},${user.info}`);

  function abc (param1, param2, param3) {
    // console.log('param', param1, param2, param3);
    return param1+param2+param3;
  }
}

/**
 * 斜杠失效
 */
{
  console.log('raw:', String.raw`Hi\n${1+2}`);  // '\n'换行符没有生效。原因：Sring.raw的api对斜杠进行了转义：在斜杠前又加了斜杠
  console.log(`Hi\n${1+2}`);
}
