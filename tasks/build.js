/**
 * 把所有任务串起来，谁依赖谁等
 * server启动前：先编译好js、模板脚本
 */

import gulp from 'gulp';  // 引进gulp包
import gulpSequence from 'gulp-sequence'; // 处理脚本的编译顺序

/**
 * build命令后，按顺序相应执行脚本
 * 1. 清空指定目录：public、views
 * 2. 执行模板、样式、js的构建脚本
 * 3. 执行browser、server脚本
 */
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));
