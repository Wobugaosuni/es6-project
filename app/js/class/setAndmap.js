// 总结
// 开发中，涉及到数据结构的，推荐 map > array
// 要求数据存储的唯一性，考虑使用set
// 放弃使用array、object

/**
 * Set
 */
{
  // 声明
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size', list.size);
}

{
  let arr = [1, 2, 3, 4, 4];
  let list = new Set(arr);

  console.log('size2', list.size);  // 4, 成员的值是唯一的
  console.log('去重', Array.isArray([...list]));
}

/**
 * WeakSet
 */
{
  let weakList = new WeakSet();

  weakList.add({});

  console.log('weakList', weakList);
}

/**
 * Map
 */
{
  let map = new Map();
  let arr = ['123'];

  map.set(arr, 456); // 键名可以是任何数据类型

  console.log('map', map, map.get(arr));
}

/**
 * WeakMap
 */
{
  let weakmap = new WeakMap();
}

/**
 * Map、Array对比
 */
{
  let map = new Map();
  let array = [];

  // 增
  map.set('t', 1);
  array.push({t: 1});
  console.log('增', map, array);

  // 查
  let has = map.has('t');
  let find = array.find(item => item.t);
  console.log('查', has, find);

  //  改
  map.set('t', 2);
  array.forEach(item => item.t ? item.t = 2 : ''); // 先判断值是否存在
  console.log('改', map, array);

  // 删
  map.delete('t');

  let index = array.findIndex(item => item.t); // 先找到数组索引
  array.splice(index, 1); // 删除索引对应的值
  console.log('删', map, array);
}

/**
 * Set、Array对比
 */
{
  let set = new Set();
  let array = [];

  // 增
  set.add({t: 1});
  array.push({t: 1});
  console.log('增', set, array);

  // 查
  let has = set.has({t: 1});  // false , 因为对象是引用类型，{t: 1}需要被保存过，才为true
  let find = array.find(item => item.t);
  console.log('查', has, find);

  // 改
  set.forEach(item => item.t ? item.t = 2 : ''); // 先判断值是否存在
  array.forEach(item => item.t ? item.t = 2 : ''); // 先判断值是否存在
  console.log('改', set, array);

  // 删
  set.delete({t: 1}); // 删除失败
  set.forEach(item => item.t ? set.delete(item) : ''); // 先判断值是否存在 删除成功

  let index = array.findIndex(item => item.t); // 先找到数组索引
  array.splice(index, 1); // 删除索引对应的值
  console.log('删', set, array);
}

/**
 * Map、Set、object对比
 */
{
  let item = {t: 1}; // 先进行保存!
  let obj = {};
  let map = new Map();
  let set = new Set();

  // 增
  map.set('t', 1);
  set.add(item);
  obj['t'] = 1;
  console.log('增', map, set, obj);

  // 查
  console.info({
    map: map.has('t'),
    set: set.has(item),
    obj: 't' in obj
  });

  // 改
  map.set('t', 2);
  item.t = 2;  // !!!直接修改元素本身, set不作操作
  obj['t'] = 2;
  console.log('改', map, set, obj);

  // 删
  map.delete('t');
  set.delete(item);
  delete obj['t'];
  console.log('删', map, set, obj);
}
