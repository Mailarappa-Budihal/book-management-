
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidTitle = function (value) {
    return ['Mr', 'Mrs', 'Miss'].indexOf(value) !== -1
}



module.exports = {isValid, isValidTitle}

