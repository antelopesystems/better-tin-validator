const { countriesData } = require("./countries-data.js");

const validateCountryTin = (dataToValidate, countryIso) => {
  const countryData = countriesData[countryIso];

  if (countryData) {
    let isTinValid = false;

    if(countryData.tinRules.length > 0) {
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
    } else {
      isTinValid = true;
    }
    return isTinValid;
  } else {
    throw "Invalid country ISO";
  }
};

module.exports = { validateCountryTin };