/**
 * 处理服务器相关构建的脚本
 */

import gulp from 'gulp';  // 引进gulp包
import gulpif from 'gulp-if';  // gulp语句中作if判断
import liveserver from 'gulp-live-server';  // 引入能启动服务器的包
import args from './util/args';  // 处理命令行参数解析的包


gulp.task('serve', (callback) => {
  // 如果不是处于监听状态下
  if (!args.watch) return callback();

  // 如果处于监听状态下，创建服务器
  var server = liveserver.new(
    ['--harmony', 'server/bin/www']  // 在当前命令行下，执行server/bin/www服务器脚本
  );

  // 启动服务器
  server.start();

  // 服务器下文件改动的热更新
  // 监听server目录下的ejs和js文件
  gulp.watch(
    ['server/views/**/*.ejs', 'server/public/**/*.js'],
    function (file) {
      // 监听后的处理，通知服务器文件发生了改变，服务器做出相应的处理
      server.notify.apply(server, [file]);
    }
  )

  // 路由、接口等发生变化，刷新页面是不行的，需要服务器的重启才能生效
  // 监听需要服务器重启的文件, server/app.js是server的入口文件
  gulp.watch(
    ['server/routes/**/*.js', 'server/app.js'],
    function () {
      // 调用api进行重启
      server.start.bind(server)()
    }
  )
})
