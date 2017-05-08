/**
 * 编译完的文件时，有一个拷贝的过程
 * 为安全起见，每次重新生成拷贝时，清空指定目录文件
 */

import gulp from 'gulp';  // 引进gulp包
import del from 'del'; // 引入删除的包
import args from './util/args';  // 处理命令行参数解析的包

gulp.task('clean', () => {
  return del(['server/public', 'server/views'])
});
