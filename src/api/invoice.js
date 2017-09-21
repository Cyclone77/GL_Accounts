import fetch from '@/utils/fetch'

export function getTable() {
    return fetch({
        url: '/availableInvoiceAmount',
        method: 'get'
    })
}