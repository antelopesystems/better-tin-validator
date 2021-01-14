"use strict";

var _require = require("./countries-data.js"),
    countriesData = _require.countriesData;

var validateCountryTin = function validateCountryTin(dataToValidate, countryIso) {
  var countryData = countriesData[countryIso];

  if (countryData) {
    var isTinValid = false;

    if (countryData.tinRules.length > 0) {
      countryData.tinRules.forEach(function (tinRule) {
        if (!isTinValid) {
          var areAllRuleFunctionsValid = true;

          tinRule.forEach(function (ruleFunction) {
            if (areAllRuleFunctionsValid) {
              try {
                areAllRuleFunctionsValid = ruleFunction.call(undefined, dataToValidate);
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

module.exports = { validateCountryTin: validateCountryTin, countriesData: countriesData };