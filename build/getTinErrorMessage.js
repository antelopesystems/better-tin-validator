"use strict";

var _require = require("./countries-data.js"),
    countriesData = _require.countriesData;

var getTinErrorMessage = function getTinErrorMessage(countryIso) {
    var countryData = countriesData[countryIso];

    if (countryData) {
        return countryData.tooltip;
    } else {
        throw "Invalid country ISO";
    }
};

module.exports = { getTinErrorMessage: getTinErrorMessage };