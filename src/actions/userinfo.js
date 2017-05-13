import ACTIONS from '../constants/userinfo'
export function update(data) {
    console.log()
    return {
        type: ACTIONS.USERINFO_UPDATE,
        data
    }

}