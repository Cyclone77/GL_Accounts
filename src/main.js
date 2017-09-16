// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import '../theme/index.css'
Vue.use(ElementUI);

import './icons' //svg图标
import '@/components' //组件

//全局API路径
import HttpPath from '@/components/common/HttpPath'
Vue.prototype.$httpurl = HttpPath;

import axios from 'axios';
Vue.prototype.$axios = axios

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})