{
  // 基本定义: 使用class关键字
  // constructor: 给对象声明属性时用，只强调方法，没有属性时，可以不写
  class Parent {
    constructor (name='beach') {
      this.name = name;
    }
  }

  // 生成实例
  let v_parent = new Parent('hello');
  console.log('实例', v_parent.name);
}

{
  // 继承: 使用extends关键字
  class Parent {
    constructor (name='beach') {
      this.name = name;
    }
  }

  class Child extends Parent {

  }

  console.log('继承', new Child());
}

{
  // 继承: 传递参数
  // 子类覆盖父类的值：通过super方法
  class Parent {
    constructor (name='beach') {
      this.name = name;
    }
  }

  class Child extends Parent {
    constructor (name='child') {
      super(name); // super参数的列表就是：父类中constructor参数的列表。 super为空时，使用父类的默认值
      this.type = 'child'; // 子类新增的属性，一定要放在super后
    }
  }

  console.log('传递参数', new Child());
}

/**
 * getter, setter
 * 通过实例去调用
 */
{
  class Parent {
    constructor (name='beach') {
      this.name = name;
    }

    get longName () {  // longName是属性！不是方法。
      return `mk${this.name}`
    }

    set longName (value) {
      this.name = value;
    }
  }

  let instance = new Parent();
  console.log('getter', instance.longName);

  instance.longName = 'hello';  // 赋值就是set的操作
  console.log('setter', instance.longName);
}

/**
 * 类的静态方法
 * 通过类去调用，而不是通过实例
 */
{
  class Parent {
    constructor (name='beach') {
      this.name = name;
    }

    static tell () {  // tell是方法
      console.log('tell');
    }
  }

  Parent.tell();
}

/**
 * 类的静态属性
 * 通过类去调用，而不是通过实例
 */
{
  class Parent {
    constructor (name='beach') {
      this.name = name;
    }
  }

  Parent.type = 'test';  // 定义类的静态属性

  console.log('静态属性', Parent.type);
}


