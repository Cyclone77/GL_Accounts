import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/page/Home'
import Invoice from '@/components/page/Invoice'
import Credit from '@/components/page/Credit'

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
    }]
})