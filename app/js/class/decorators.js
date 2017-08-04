/**
 * decorators修饰器
 * 是一个函数
 * 修改类的行为
 */
{
  // 修饰器，类属性只可读
  let readonly = (target, name, descriptor) => {
    descriptor.writable = false
    return descriptor
  }

  // 定义类
  class Test {
    // 1. 修饰器，对类的功能进行修改
    @readonly

    // 2. 定义类的属性
    time () {
      return '2017-03-11'
    }
  }

  // 实例
  let test = new Test()

  // test: 修改类的属性
  // test.time = () => console.log('reset time')

  console.log('time:', test.time())
}

{
  // 在类下增加 静态属性
  let typename = (target, name, descriptor) => {
    target.myname = 'hello'
  }

  // 对类进行修饰
  @typename
  class Test {

  }

  console.log('类修饰符', Test.myname)
}

{
  // 现实案例 —— 日志系统
  let log = type => {
    return (target, name, descriptor) => {
      let srcMethod = descriptor.value

      descriptor.value = (...arg) => {
        srcMethod.apply(target, arg)

        // 具体的埋点接口
        console.log(`log ${type}`)
      }
    }
  }

  class Ad {
    @log('show')
    show () {
      console.log('ad is show')
    }

    @log('click')
    click () {
      console.log('ad is click')
    }
  }

  let ad = new Ad()
  ad.show()
  ad.click()
}
