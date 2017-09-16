import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '@/views/layout/Layout'
import NotFoundComponent from '@/views/404'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '*',
        component: NotFoundComponent
    }, {
        path: '/',
        name: '首页',
        redirect: '/home',
        component: Layout,
        children: [{ path: 'home', component: _import('home/index') }]
    }, {
        path: '/credit',
        redirect: '/credit/index',
        name: '应收账款',
        component: Layout,
        children: [
            { path: 'index', component: _import('credit/index'), name: '应收账款预览' },
            { path: 'add', component: _import('credit/add'), name: '应收账款增加' }
        ]
    }, {
        path: '/invoice',
        redirect: '/invoice/index',
        name: '开票申请',
        component: Layout,
        children: [
            { path: 'index', component: _import('invoice/index'), name: '发票管理 ' },
            { path: 'view', component: _import('invoice/view'), name: '发票申请预览 ' },
            { path: 'add', component: _import('invoice/add'), name: '发票申请添加 ' }
        ]
    }]
})