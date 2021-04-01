var validateCountryTin = require("./build/tin-validator").validateCountryTin;
var getTinErrorMessage = require("./build/getTinErrorMessage").getTinErrorMessage;

module.exports = {
    validateCountryTin,
    getTinErrorMessage
}
