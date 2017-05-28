 export function post(url, params) {
     const result = fetch('api/submitcomment', {
         method: 'POST',
         headers: {
             'Accept': 'application/json,text/plain,*/*',
             'Content-type': 'application/x-www-form-urlencoded'
         },
         body: params
     })
     return result
 }