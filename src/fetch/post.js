 import { obj2params } from '../js/util'
 export function post(url, params) {
     console.log(params)
     const result = fetch(url, {
         method: 'POST',
         headers: {
             'Accept': 'application/json,text/plain,*/*',
             'Content-type': 'application/x-www-form-urlencoded'
         },
         body: obj2params(params)
     })
     return result
 }