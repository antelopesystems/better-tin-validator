const { countriesData } = require("./countries-data.js");

const getTinErrorMessage = (countryIso) => {
    const countryData = countriesData[countryIso];

    if (countryData) {
        return countryData.tooltip;
    } else {
        throw `Invalid country ISO`;
    }
}

module.exports = { getTinErrorMessage };
