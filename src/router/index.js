import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/page/Home'

import Invoice from '@/components/page/Invoice/Default'
import InvoiceAll from '@/components/page/Invoice/All'
import InvoiceSystem from '@/components/page/Invoice/System'
import InvoiceHandment from '@/components/page/Invoice/Handment'

import Credit from '@/components/page/Credit/Default'
import CreditAdd from '@/components/page/Credit/Add'

Vue.use(Router)

export default new Router({
    //mode: 'history',
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
    }, {
        path: '/credit/add',
        name: 'CreditAdd',
        component: CreditAdd
    }]
})