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
