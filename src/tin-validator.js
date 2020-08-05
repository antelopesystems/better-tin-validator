const countriesData = require("./countries-data.js");

const tinValidator = (function() {

  let publicMethods = {};

  publicMethods.validateCountryTin = (dataToValidate, countryIso) => {
    const countryData = countriesData[countryIso];

    if (countryData) {
      let isTinValid = false;

      countryData.tinRules.forEach(tinRule => {
        if (!isTinValid) {
          let areAllRuleFunctionsValid = true;

          tinRule.forEach(ruleFunction => {
            if (areAllRuleFunctionsValid) {
              try {
                areAllRuleFunctionsValid = ruleFunction.call(
                  this,
                  dataToValidate
                );
              } catch (e) {
                areAllRuleFunctionsValid = false;
              }
            }
          });
          isTinValid = areAllRuleFunctionsValid;
        }
      });

      return isTinValid;
    } else {
      throw "Invalid country ISO";
    }
  };

  return publicMethods;
})();

module.exports = { tinValidator };