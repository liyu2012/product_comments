import ACTIONS from '../constants/userinfo'
const actions = {
    update: function(data) {
        return {
            type: ACTIONS.USERINFO_UPDATE,
            userinfo: data
        }
    }
}
export default actions