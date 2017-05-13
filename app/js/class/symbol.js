{
  // 声明
  let a1 = Symbol();
  let a2 = Symbol();
  console.log(a1===a2);  // false

  let a3 = Symbol.for('a3'); // 后面的'a3'是key值
  let a4 = Symbol.for('a3');
  console.log('a3', a3);
  console.log('a4', a4);
  console.log(a3===a4);  // true
}

{
  let a1 = Symbol.for('abc');
  let object = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  }

  console.log('object', object);

  for (let [key, value] of Object.entries(object)) {
    console.log('遍历', [key, value]);  // 取不到symbol变量作为key值的属性
  }

  console.log('symbolArray', Object.getOwnPropertySymbols(object));

  Object.getOwnPropertySymbols(object).forEach(key => {
    console.log('symbolKey, symbolValue:', key, object[key]);  // 只取到symbol变量作为key值的属性
  })

  // 取symbol变量作为key值的属性和其他key值的属性
  console.log(Reflect.ownKeys(object));
  Reflect.ownKeys(object).forEach(key => {
    console.log('key&value', key, object[key]);
  })
}
