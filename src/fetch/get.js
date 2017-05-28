 export function get(url) {
     const ops = {
         headers: {
             'Accept': 'application/json,text/plain,*/*'
         },
         method: 'GET'
     }
     return fetch(url, ops)
 }