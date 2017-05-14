{
  /**
   * proxy: 拦截/代理
   * 用户看不到obj这一层的，只能看到代理后的这一层
   */
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(targetObj, key) {
      return targetObj[key].replace('2017', '2018')  // replace: 将结果中2017的字段替换为2018
    },

    // 拦截对象属性的设置
    set(targetObj, key, value) {
      if (key === 'name') {  // 只允许修改name
        return targetObj[key] = value;
      } else {
        return targetObj[key]; // 不做赋值操作，直接返回这个值
      }
    },

    // 判断当前对象是否拥有某个属性
    // 拦截key in object
    has(targetObj, key) {
      if (key === 'name') {  // 只暴露name属性
        return targetObj[key];
      } else {
        return false;
      }
    },

    // 删除
    // 拦截对象属性的删除
    deleteProperty(targetObj, key) {
      if (key.indexOf('_') > -1) {  // 如果属性是下划线开头的，允许删除
        delete targetObj[key];
        return true;
      } else {
        return targetObj[key];
      }
    },

    // 拦截Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyNames
    ownKeys(targetObj) {
      return Object.keys(targetObj).filter(item => item !== 'time'); // 过滤掉key为time的属性, 达到保护time属性的目的
    }
  });

  // 读取
  console.log('get', monitor.time);

  // 修改
  monitor.time = '2019'; // 修改时间
  monitor.name = "niubi"; // 修改name
  console.log('set', monitor.time, monitor.name);

  // 对象是否拥有某个属性
  console.log('has', 'name' in monitor, 'time' in monitor);  // has true false

  // 删除
  delete monitor.time; // 不能删
  // delete monitor._r; // 能删
  console.log('delete', monitor);

  // 属性
  console.log('ownKeys', Object.keys(monitor)); // ["name", "_r"]
}

{
  /**
   * Reflect
   */
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  console.log('reflect', Reflect.get(obj, 'time')); // 读取time属性

  Reflect.set(obj, 'name', 'beach');
  console.log('set', obj);

  console.log('has', Reflect.has(obj, 'name'));
}

/**
 * 应用
 * 数据校验
 * 条件和业务解耦
 * 好处：有利于代码的维护，有利于提高代码整洁度、代码复用性、代码健壮性
 */
{
  function validator (targetObj, validator) {
    return new Proxy(targetObj, {
      _validator: validator,

      set(targetObj, key, value, proxy) {
        if (targetObj.hasOwnProperty(key)) {  // 是否有这个属性

          let personValidator = this._validator[key];

          console.log('validator personValidator', personValidator);

          if (!!personValidator(value)) {  // 如果value值通过personValidator校验
            return Reflect.set(targetObj, key, value, proxy)
            // return targetObj[key] = value // 拦截对象属性的设置

          } else {
            throw Error(`不能设置${key}到${value}`)
          }

        } else {
          throw Error(`${key}不存在`)
        }
      }
    })
  }

  const personValidators = {
    name(value) {
      return typeof value === 'string' // 名字需是字符串
    },
    age(value) {
      return typeof value === 'number' && value >18  // 年龄需是数字且大于18
    }
  }

  class Person{
    constructor(name, age) {
      this.name = name;
      this.age = age;
      console.log('Person this', this);  // this指Person的实例
      return validator(this, personValidators);
    }
  }

  const person = new Person('lilei', 30);
  console.info(person);

  person.name = 'han mei';
  console.info(person);

  person.age = 19;
  console.log(person);
}
