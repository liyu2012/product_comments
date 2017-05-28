import {get } from '../get'
export function getAdJson() {
    const result = get("http://localhost:8080/api/ad")
    return result
}
export function getListData(cityName, page) {
    const result = get(`http://localhost:8080/api/list/${cityName}/${page}`)
    return result


}