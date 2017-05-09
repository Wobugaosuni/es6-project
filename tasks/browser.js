/**
 * app下文件改动时，同步到server目录
 */

import gulp from 'gulp';  // 引进gulp包
import gulpif from 'gulp-if';  // gulp语句中作if判断
import gutil from 'gulp-util';
import args from './util/args';  // 处理命令行参数解析的包

// 创建任务
gulp.task('browser', (callback) => {
  // 如果不是处于监听状态下，直接返回回调
  if (!args.watch) return callback();

  // app/**/*.js文件发生改动时，执行相应的构建脚本（scripts.js）
  gulp.watch('a/**/*.js', ['scripts']);
  gulp.watch('app/**/*.ejs', ['pages']);
  gulp.watch('app/**/*.css', ['css']);
});
