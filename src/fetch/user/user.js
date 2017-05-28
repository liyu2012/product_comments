import {get } from '../get'
import { post } from '../post'
export function getOrderlist(id, page) {
    const result = get(`/api/orderlist/${id}/${page}`)
    return result
}

export function submitComments(url, params) {
    const result = post(url, params)
    return result
}