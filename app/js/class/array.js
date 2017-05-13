/**
 * Array.from()
 */
{
  let pElements = document.querySelectorAll('p');
  console.log('pElements', pElements);
  console.log('pElements type:', typeof pElements);

  let pArr = Array.from(pElements);
  console.log('pArr', pArr);
  console.log('pArr type:', typeof pArr);

  pElements.forEach(item => {
    console.log('item content：', item.textContent);
  })
}

/**
 * Array.keys()
 * Array.values()
 */
{
  let iterator = ['1', 'c'].keys();
  console.log('iterator', iterator);

  let iterator2 = ['1', 'c'].values();
  console.log('iterator2', iterator2);

  for (let index of iterator) {
    console.log('index:', index);
  }

  for (let value of ['1', 'c']) {
    console.log('value', value);
  }
}

/**
 * Array.entries()
 */
{
  for (let [index, value] of ['1', 'c', 'kk'].entries()) {
    console.log('index&values', index, value);
  }
}

/**
 * Array.includes()
 */
{
  console.log('NaN', [1, 2, NaN].includes(NaN));
}
