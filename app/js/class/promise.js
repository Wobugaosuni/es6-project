{
  /**
   * es5回调
   */
  let ajax = function (callback) {
    console.log('执行');

    setTimeout(function() {  // 模仿异步
      callback && callback.call();
    }, 1000);
  }

  ajax(function () {
    console.log('timeout');
  })
}

{
  /**
   * es6 promise
   * 可读性和可维护性高
   */
  let ajax = function () {
    console.log('执行2');

    return new Promise(function (resolve, reject) {
      setTimeout(function() {
        resolve()
      }, 1000);
    })
  }

  ajax().then(function () {  // ajax运行完后，返回一个promise实例，实例的方法: .then 表示执行下一步
    console.log('promise', 'timeout2');
  })
}

{
  /**
   * 多个下一步
   */
  let ajax = function () {
    console.log('执行3');

    return new Promise(function (resolve, reject) {
      setTimeout(function() {
        resolve()
      }, 1000);
    })
  }

  ajax()
    .then(function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 2000);
    })
  })
    .then(function () {
    console.log('timeout3');
  })
}

{
  /**
   * 捕获异常错误
   */
  let ajax = function (num) {
    console.log('执行4');

    return new Promise(function (resolve, reject) {
      if (num >5) {
        resolve()
      } else {
        throw new Error('num太小');
      }
    })
  }

  ajax(3)
    .then(function () {
      console.log('num', 3);
  }).catch(function (error) {
    console.log('catch', error);
  })
}

{
  /**
   * 所有图片加载完后再添加到页面
   * 使用Promise.all接口
   */
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;

      img.onload = function () {
        resolve(img);
      }

      img.onerror = function (error) {
        reject(error);
      }
    })
  }

  function showImgs (imgs) {
    imgs.forEach(img => {
      document.body.appendChild(img);
    })
  }

  Promise.all([
    loadImg('http://att.bbs.duowan.com/forum/201507/20/0004003hbbi3ljqbqzy31q.jpg'),
    loadImg('http://img.article.pchome.net/00/32/63/20/pic_lib/wm/ghibli_19.jpg'),
  ]).then(showImgs);
}

{
  /**
   * 有一张图片加载完就添加到页面
   * 使用Promise.race接口
   */
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;

      img.onload = function () {
        resolve(img);
      }

      img.onerror = function (error) {
        reject(error);
      }
    })
  }

  function showImgs (img) {
    let p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
  }

  Promise.race([
    loadImg('http://att.bbs.duowan.com/forum/201507/20/0004003hbbi3ljqbqzy31q.jpg'),
    loadImg('http://img.article.pchome.net/00/32/63/20/pic_lib/wm/ghibli_19.jpg'),
  ]).then(showImgs);
}
