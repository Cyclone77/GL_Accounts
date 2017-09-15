import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'

import Invoice from '@/view/Invoice/Default'

import Credit from '@/view/Credit/Default'
import CreditAdd from '@/view/Credit/Add'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/invoice',
        name: 'Invoice',
        component: Invoice
    }, {
        path: '/credit',
        name: 'Credit',
        component: Credit
    }, {
        path: '/credit/add',
        name: 'CreditAdd',
        component: CreditAdd
    }]
})