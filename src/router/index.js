import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/page/Hello'
import Invoice from '@/components/page/Invoice'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/invoice',
        name: 'Invoice',
        component: Invoice
    }]
})