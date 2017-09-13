# 开发过程遇到的问题

## 路由
如果在组件（子页面）获得当前路由，及操作；

``` javascript
this.$router;
this.$router.push(`路由路径`);
```

## 加载CSS
如果是引入CSS
``` html
/*
    其实用的原生应用，只是~@代表相对路径src在webpack指定
    这样做有个弊端就是 style scoped是无效的对于这个css内的样式
*/

@import '~@/css/index.css';

```

## 定义组件

## 调试

在`build/webpack.dev.conf.js`内修改`devtool: "source-map"` 则可以在浏览器中断点map。

## 发布

在`confing/index.js`内修改`assetsPublicPath: './'`为了让绝对路径改为相对路径。可以双击发布后的index.html直接访问。