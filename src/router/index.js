import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/page/Home'

import Invoice from '@/components/page/Invoice'
import InvoiceAll from '@/components/page/InvoiceChild/All'
import InvoiceSystem from '@/components/page/InvoiceChild/System'
import InvoiceHandment from '@/components/page/InvoiceChild/Handment'

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
        component: Invoice,
        children: [{
            path: 'all',
            component: InvoiceAll
        }, {
            path: 'system',
            component: InvoiceSystem
        }, {
            path: 'handment',
            component: InvoiceHandment
        }]
    }, {
        path: '/credit',
        name: 'Credit',
        component: Credit
    }]
})