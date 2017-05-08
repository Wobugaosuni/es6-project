/**
 * 处理模板的工具脚本
 */

import gulp from 'gulp';  // 引进gulp包
import gulpif from 'gulp-if';  // gulp语句中作if判断
import livereload from 'gulp-livereload';  //热更新，文件修改后浏览器自动更新
import args from './util/args';  // 处理命令行参数解析的包

gulp.task('pages', () => {
  return gulp.src('app/**/*.ejs')  // 打开app下的所有ejs文件，包括各个嵌套目录

    // 把所有模板文件拷贝到server/views目录下
    .pipe(gulp.dest('server'))

    // 当命令行有相关选项时，执行热更新
    .pipe(gulpif(args.watch, livereload()))
})
