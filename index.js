var validateCountryTin = require("./build/tin-validator").validateCountryTin;
var countriesData = require("./build/tin-validator").countriesData;

module.exports = validateCountryTin;

// Tests
console.log(countriesData["DE"].tinRules[0][0].toString().includes("testRegex"))
// console.log(validateCountryTin("1234567", "MU"));
