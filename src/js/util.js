export function obj2params(obj) {
    var result = ''
    var item
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item])
    }
    if (result) {
        result = result.slice(1)
    }
    return result
}