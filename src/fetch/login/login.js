import { post } from '../post'
export function postLoginData(name, pass) {
    if (name == null || name == '' || pass == null || pass == '') {
        return

    }
    //console.log(name, pass)
    const result = post(`http://localhost:8080/api/login`, {
        name,
        pass
    })
    return result
}