/**
 * default.js脚本
 * gulp执行时有一个默认的动作：会去找default.js
 */

import gulp from 'gulp';  // 引进gulp包

// 注册default任务
gulp.task('default', ['build']);
