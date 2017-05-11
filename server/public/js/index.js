/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Test = function Test() {
	  _classCallCheck(this, Test);

	  this.a = 'hello world';
	};

	var test = new Test();

	// 把结果打到页面上
	document.body.innerHTML = test.a;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	{
	  // RegExp 构造函数创建一个正则对象

	  /**
	   * ES5写法
	   */
	  var regExp1 = new RegExp('xyz', 'i'); // 第一个参数是字符串，第二个参数是修饰符i: 忽略大小写
	  var regExp2 = new RegExp(/xyz/i); // 只接受一个参数：正则表达式

	  console.log('regExp1', regExp1.test('1xyz123'));
	  console.log('regExp2', regExp2.test('xyz123'));

	  /**
	   * ES6写法
	   */
	  var regExp3 = new RegExp(/xyz/ig, 'i'); // 可以接受两个参数: 第一个参数：正则表达式，第二个参数：修饰符。第二个参数会覆盖正则表达式的修饰符

	  console.log('regExp3.flags', regExp3.flags); // flag: 新增的用来获取修饰符的属性
	  console.log('regExp3', regExp3.test('1xyzg'));
	}

	{
	  /**
	   * y修饰符
	   */
	  var string = 'bbb_bb_b';
	  var _regExp = /b+/g;
	  var _regExp2 = new RegExp('b+', 'y');

	  console.log('y one:', _regExp.exec(string), _regExp2.exec(string));
	  console.log('y two:', _regExp.exec(string), _regExp2.exec(string));
	  console.log('y three:', _regExp.exec(string), _regExp2.exec(string));
	  console.log('y four:', _regExp.exec(string), _regExp2.exec(string));

	  // g 和 y 相同点：都是全局匹配
	  // g 和 y 不同点

	  // 判断正则对象是否开启了带y修饰符的作用
	  console.log(_regExp.sticky, _regExp2.sticky);
	}

	{
	  /**
	   * u修饰符
	   * 使用场景：如果处理字符串中的正则表达式，有字符大于两个字节的，要加u修饰符
	   * '.'只能匹配小于两个字节的字符，不是能匹配所有的字符
	   * 字符大于两个字节的，一定要加u修饰符，才能正确识别
	   */
	  console.log('u-1', /^\uD83D/.test('\uD83D\uDDC2A'));
	  console.log('u-2', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDDC2A'));

	  // a的unicode码: 61
	  // 大括号包起来的内容是作为unicode编码，需要加u修饰符识别
	  console.log('u-3', /\u{61}/.test('a'));
	  console.log('u-4', /a/.test('a'));

	  console.log('\uD842\uDFB7'); // 𠮷
	  var _string = '𠮷';
	  console.log('u-5', /^.$/.test(_string)); // ^.$中的.：匹配任何字符
	  console.log('u-6', /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(_string)); // 字符大于两个字节的，一定要加u修饰符，才能正确识别

	  console.log('test-1', /𠮷{2}/.test('𠮷𠮷'));
	  console.log('test-2', /(?:\uD842\uDFB7){2}/.test('𠮷𠮷'));
	}

	/**
	 * s修饰符
	 * '.'只能匹配小于两个字节的字符，不是能匹配所有的字符。
	 * 还有四种情况不能处理的，例如换行符，回车符，行分隔符，段分隔符
	 * 解决方法：加s修饰符
	 * 但es6还没有实现，只是提案阶段，
	 */

/***/ })
/******/ ]);