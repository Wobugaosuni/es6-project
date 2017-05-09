## 项目简介
- gulp配置，实现自动构建
- ES6 Practice

## 搭建本地环境
1. 安装所有依赖
```bash
## 根目录下
npm install
## server目录下
npm install
```

2. 编译
```bash
## 根目录下
gulp
```

3. 打开浏览器
localhost:3000

## 目录结构
```
.
└── app  ------------------------------ 前端代码目录
    ├── css  -------------------------- css目录
    ├── js  --------------------------- 放置js的目录
    │   ├── class  -------------------- es6类 目录
    │   │   ├── test.js  -------------- 空的类文件
    │   ├── index.js  ----------------- 入口文件
    ├── views  ------------------------ 放置模板的目录
    │   ├── index.ejs  ---------------- 放置入口的模板
    │   ├── error.ejs  ---------------- 放置错误的模板

└── server  ---------------------------- 服务器目录
    ├── bin  ---------------------------
    │   ├── www  ----------------------- 服务器脚本
    ├── node_modules  ------------------ 依赖包
    ├── public  ------------------------ 存放编译后的js和css
    ├── routes  ------------------------
    ├── views  ------------------------- 存放模板
    │   ├── error.ejs  ----------------- 服务器脚本
    │   ├── index.ejs  ----------------- 服务器脚本
    ├── app.js  ------------------------ 入口文件
    ├── package.json  ------------------ 项目配置

└── tasks  ------------------------------ 构建工具目录
    ├── util  --------------------------- 放置常用脚本
    │   ├── args.js  -------------------- 初始化的文件(命令行参数配置)
    ├── scripts.js  --------------------- 构建脚本，对js的处理: es6编译 + js和压缩js拷贝到server/public/js目录下 + 热更新
    ├── pages.js  ----------------------- 构建脚本，对模板的处理: 模板拷贝到server目录下 + 热更新
    ├── css.js  ------------------------- 构建脚本，对css的处理: css拷贝到server/public/stylesheets目录下，不热更新
    ├── server.js  ---------------------- 处理服务器相关构建的脚本: 当处于监听状态时，创建服务器 + 启动服务器 + 服务器下文件改动的热更新
    ├── browser.js  --------------------- 当处于监听状态时，app下文件改动时，同步到server目录
    ├── clean.js  ----------------------- 每次重新生成拷贝时，清空指定目录文件
    ├── build.js  ----------------------- build命令后，按顺序相应执行脚本
    ├── default.js  --------------------- gulp执行时有一个默认的动作：会去找default.js

└── package.json  ----------------------- 项目配置

└── .babelrc  --------------------------- babel编译工具的文件

└── gulpfile.babel.js  ------------------ gulp配置文件(es6)(es6以下：gulpfile.js)

└── .gitignore  ------------------------- git忽略文件

└── README.md  --------------------------
```
