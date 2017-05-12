{
  console.log('0b', 0b11110111); // 二进制数值的表示法：以0b开头 // 247

  console.log('0o', 0o767); // 八进制数值的表示法：以0o开头 // 503
}

/**
 * 检测传入的参数是否是一个有穷数（finite number）
 */
{
  console.log('15', Number.isFinite(15));
  console.log('NaN', Number.isFinite(NaN));
  console.log('1/0', Number.isFinite(1/0));
}

/**
 * 检测传入的值是否是 NaN
 */
{
  console.log('NaN', Number.isNaN(NaN));
  console.log('21', Number.isNaN(21));
}

{
  console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);  // 最大安全整数
}

/**
 * 判断数字符号
 */
{
  console.log('sign1', Math.sign(5));  // 1
  console.log('sign2', Math.sign('jd')); // NaN
}
