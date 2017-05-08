/**
 * 处理脚本编译
 */

import gulp from 'gulp';  // 引进gulp包
import gulpif from 'gulp-if';  // gulp语句中作if判断
import concat from 'gulp-concat';  // 处理文件拼接
import webpack from 'webpack';  // 使用webpack打包
import gulpWebpack from 'webpack-stream';  // webpack对gulp的支持
import named from 'vinyl-named';  // 文件重命名标记
import livereload from 'gulp-livereload';  //热更新，文件修改后浏览器自动更新
import plumber from 'gulp-plumber';  // 处理文件信息流
import rename from 'gulp-rename';  // 处理文件重命名的包
import uglify from 'gulp-uglify';  // 处理js、css压缩的包
import {log, colors} from 'gulp-util';  // 命令行输出和色彩的包
import args from './util/args';  // 处理命令行参数解析的包


// 利用gulp提供的api(task、src)创建脚本编译的任务
gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])  // 打开app/js/index.js文件

    // gulp规定，每个pipe时，出现错误都要抛出异常
    .pipe(plumber({
      errorHandle: function () {
        // 处理常规的错误逻辑
      }
    }))

    // 文件重命名
    .pipe(named())

    // js编译，进入webpack功能，接收三个参数
    // 第三个参数：处理错误的情况
    .pipe(gulpWebpack({
      module: {  // 需要module模块
        loaders: [{  // 遇到js时，使用babel编译
          test: /\.js$/,
          loader: 'babel'
        }]
      }
    }), null, (error, stats) => {
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false
      }))
    })

    // 1-3步，使得server/public/js有两个js文件：编译后文件，编译后经过压缩重命名的文件

    // 1. 把编译后的文件拷贝到server/public/js目录下
    // 放在server目录下原因：server需要拿到编译后的js在服务中跑起来
    .pipe(gulp.dest('server/public/js'))

    // 2. 把编译后的文件复制一份，重命名，但基础是先进行uglify
    .pipe(rename({
      basename: 'copy',
      extname: '.min.js'
    }))

    // 文件压缩
    .pipe(uglify({
      compress: {
        properties: false
      },
      output: {
        'quote_keys': true
      }
    }))

    // 3.压缩后进行存储
    .pipe(gulp.dest('server/public/js'))

    // 文件改动时监听文件变化，自动刷新
    .pipe(gulpif(args.watch, livereload()))  // 如果(gulpif)命令行有watch选项，执行热更新
})
