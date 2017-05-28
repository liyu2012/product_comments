import {get } from '../get'
export function getSearchListData(cityName, type, keyword) {
    if (!keyword) {
        const result = get(`http://localhost:8080/api/search/${cityName}/${type}`)
        return result
    } else {
        const result = get(`http://localhost:8080/api/search/${cityName}/${type}/${keyword}`)
        return result

    }
}