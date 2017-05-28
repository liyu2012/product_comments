import {get } from '../get'
export function getProductDetail(id) {
    const result = get(`/api/detail/${id}`)
    return result
}
export function getComments(id, page) {
    const result = get(`/api/comments/${id}/${page}`)
    return result
}