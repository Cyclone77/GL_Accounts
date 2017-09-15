# 开发约定

- js 用es6
- 单位用 rem 或者 em

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

## 加载图片
首先，如果使用的是img标签那么可以这样

``` javascript
data () {
    return {
        img: require('@/path/to/your/source')
    }
}

//然后在template中
<img :src="img" />

data () {
    return {
        img: require('@/path/to/your/source')
    }
}

//可以这样
<div :style="{backgroundImage: 'url(' + img + ')'}"></div>

或者直接在css中定义

background-image: url('path/to/your/source');
```

## 加载第三方字体图标
参考链接：https://cisy.me/webpack-svg-sprite/
###  安装 
``` git
npm install svg-sprite-loader --save-dev
```
### 配置
build／webpack.base.conf.js下
``` javascript
//svg-sprite-loader 配置
{
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    include: [resolve('src/icons')],
    options: {
        symbolId: 'icon-[name]'
    }
},
{
    test: /\.(png|jpe?g|gif)(\?.*)?$/, ///\.(png|jpe?g|gif|svg)(\?.*)?$/ 默认的加载方法取消
    loader: 'url-loader',
    options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
    }
}
```
颜色更改：fill: red;
如果svg的fill: currentColor设置后；则可以用color来改变颜色
设置：svg的宽高，利用em单位的特点，根据font-size改变大小
``` css
height: 1em;
width: 1em;
```

## 定义组件

## 调试

在`build/webpack.dev.conf.js`内修改`devtool: "source-map"` 则可以在浏览器中断点map。

## 发布

在`confing/index.js`内修改`assetsPublicPath: './'`为了让绝对路径改为相对路径。可以双击发布后的index.html直接访问。

## 警告
[Bug Report] Vue@2.2.x 增加了v-for丢失key的警告，是否可将文档中的key都加上以消除警告？
https://github.com/ElemeFE/element/issues/4137

``` javascript
<el-tag v-for="tag in tags">
=>
<el-tag v-for="(tag, index) in tags" :key="index">
```