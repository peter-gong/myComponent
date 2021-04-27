#### 2021 年 4 月 27 日

package.json 注释

```
{
  "name": "myComponents",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "webpack serve  --config config/webpack.dev.mjs",
    "build:prd": "webpack --config config/webpack.prd.mjs"
  },
  "devDependencies": {
    "@babel/core": "^7.13.16",
    "@babel/preset-env": "^7.13.15",  // 对es的新特性进行转换， 要注意转换是从后向前进行的
    "@babel/preset-react": "^7.13.13",  // 将jsx代码转换成函数api的方式
    "@types/loadable__component": "^5.13.3",
    "@types/react": "^17.0.3",
    "@types/react-dom": "^17.0.3",
    "@types/react-router": "^5.1.13",
    "@types/react-router-dom": "^5.1.7",
    "babel-loader": "^8.2.2",   // 编译es6和jsx语法
    "clean-webpack-plugin": "^4.0.0-alpha.0",   // 在每次打包前清空dist目录下内容
    "copy-webpack-plugin": "^8.1.1",  // 打包的时候将public目录下的内容拷贝到dist目录下
    "css-loader": "^5.2.4",
    "css-minimizer-webpack-plugin": "^2.0.0",   // 对抽取的css文件进行压缩
    "html-webpack-plugin": "^5.3.1",  // 根据模板来生成html文件，动态注入打包后的js文件
    "less": "^4.1.1",
    "less-loader": "^8.1.1",
    "mini-css-extract-plugin": "^1.5.0",  // 将bundle.js中的样式文件抽取到css文件中
    "sass": "^1.32.11",
    "sass-loader": "^11.0.1",
    "style-loader": "^2.0.0",
    "ts-loader": "^9.1.1",
    "typescript": "^4.2.4",
    "webpack": "^5.35.1",   // 模块化打包工具
    "webpack-cli": "^4.6.0",  // 模块化打包工具
    "webpack-dev-server": "^3.11.2",  // 提供http-server,热更新,代理
    "webpack-merge": "^5.7.3"   // 对webpack的配置进行结合，合并配置文件
  },
  "dependencies": {
    "@hot-loader/react-dom": "^17.0.1",  // react的热更新
    "@loadable/component": "^5.14.1",
    "axios": "^0.21.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-hot-loader": "^4.13.0",  // react的热更新
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0"
  }
}
```

#### 2021 年 4 月 26 日

创建，记录积累适用组件
