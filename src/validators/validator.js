const isValid = function(value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const regxMobile = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const regxEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const regxPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
const regxPincode = /^(\+\d{1,3}[- ]?)?\d{6}$/;
const regxName = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/;




module.exports = { isValid, regxMobile, regxEmail, regxPassword, regxPincode, regxName }