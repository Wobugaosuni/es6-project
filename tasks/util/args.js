/**
 * 处理命令行参数
 */
import yargs from 'yargs';

const args = yargs

  // 区分开发环境和线上环境
  .option('production', {
    boolean: true,  // 这个选项是布尔类型
    default: false,  // 默认开发环境
    describe: 'min all scripts'
  })

  // 是否监听文件的改动
  .option('watch', {
    boolean: true,  // 这个选项是布尔类型
    default: false,  // 默认不监听
    describe: 'watch all files'
  })

  // 是否详细地输出命令行执行的日志
  .option('verbose', {
    boolean: true,
    default: false,
    describe: 'log'
  })

  // 资源的映射
  .option('sourcemaps', {
    describe: 'force the creation of sourcemaps' // 强制生成sourcemaps
  })

  // 服务器的端口
  .option('port', {
    string: true,
    default: 3000,
    describe: 'server port'
  })

  // 输入的命令行的内容以字符串进行解析
  .argv

export default args;
