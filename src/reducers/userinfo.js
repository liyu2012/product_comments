import ACTIONS from '../constants/userinfo'
const initialState = {}
export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.USERINFO_UPDATE:
            //console.log(action)
            return action.userinfo
        default:
            //console.log(11, actionTypes.USERINFO_UPDATE)
            return state
    }
}