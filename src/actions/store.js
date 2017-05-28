import * as actions from '../constants/store'
const ACTIONS = {
    update: function(data) {

        return {
            type: actions.STORE_UPDATE,
            data
        }

    },
    add: function(data) {
        return {
            type: actions.STORE_ADD,
            data
        }
    },
    remove: function(data) {
        return {
            type: actions.STORE_REMOVE,
            data
        }
    }

}
export default ACTIONS