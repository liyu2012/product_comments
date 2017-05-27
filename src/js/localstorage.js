export default {
    getItem: function(key) {
        let v
        try {
            v = localStorage.getItem(key)

        } catch (e) {
            if (__DEV__) {
                console.error('localStorage.getItem error', e.message)
            }
        } finally {
            return v
        }
    },
    setItem: function(k, v) {
        try {
            localStorage.setItem(k, v)
        } catch (e) {
            if (__DEV__)
                console.error('localStorage.setItem error', e.message)
        }
    }
}