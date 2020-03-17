# hmr-demo

## step 0

修改 webpack.config.js 文件

1. devServer 选项新增配置 `hot: true`
2. 新增 HotModuleReplacementPlugin

## step 1

main.js 文件修改

```js
if (module.hot) {
  module.hot.accept('./a.js', function () {
    let str = require('./a.js')
    document.getElementById('app').innerHTML = str
  })
}
```

当 a.js 文件修改时，触发回调函数，实现热更新。我们可以查看浏览器，实现热更新的实质就是重新请求了一段 js

此时我们修改 main.js，还是 full reload 的，因为我们只对 a.js 做了热更新

## step 2

如果要兼容所有文件实现热更新呢？

```js
if (module.hot) {
  module.hot.accept()
}
```