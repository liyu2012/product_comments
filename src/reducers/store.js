import * as ACTIONS from '../constants/store'
const initialState = []
export default function store(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.STORE_ADD:
            state.unshift(action.data)
            return state
        case ACTIONS.STORE_UPDATE:
            return action.data
        case ACTIONS.STORE_REMOVE:
            return state.filter(item => {
                if (item.id !== action.data.id)
                    return item
            })
        default:
            //console.log(11, actionTypes.USERINFO_UPDATE)
            return state
    }
}