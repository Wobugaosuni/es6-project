/**
 * generator
 * 异步编程解决方案
 */

// 应用场景1 —— 抽奖逻辑，控制 抽奖次数 和 限制
{
  let draw = function (count) {
    // 具体抽奖逻辑
    // ...
    console.log(`剩余${count}次`)
  }

  // 1. 创建 generator函数，控制 抽奖次数 和 限制
  let residue = function* (count) {
    while (count > 0) {
      count --
      yield draw(count)
    }
  }

  // 2. 实例化 generator函数
  let star = residue(5)

  // 3. 增加元素
  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent='抽奖'
  document.body.appendChild(btn)

  // 4. 事件监听
  document.getElementById('start').addEventListener('click', () => {
    star.next()
  }, false)
}

// 应用场景2
// 场景服务端的数据定期的变化 ——> 前端需要定时的从服务端取这个状态（因为app是无状态的连接）
// 解决方法：1. websocket：浏览器兼容性不好。2. 传统轮询：普遍的用法，通过定时器向后端取数据
{
  // 传统轮询
  // 1. 模拟后端请求
  let ajax = function* () {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        // 拿到数据了
        resolve({code: 0})
      }, 200);
    })
  }

  // 2. 拉数据
  let pull = function () {
    // 实例化 generator
    let generator = ajax()

    // 执行
    let step = generator.next()

    // 数据拿回来了
    step.value.then(data => {
      if (data.code !== 0) {
        // 轮询
        setTimeout(() => {
          console.info('wait')
          pull()
        }, 1000);
      } else {
        console.info('data:', data)
      }
    })
  }

  pull()
}
