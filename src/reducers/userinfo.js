import ACTIONS from '../constants/userinfo'
const initialState = {}
export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.USERINFO_UPDATE:
            return action.userinfo
        default:
            return state
    }
}