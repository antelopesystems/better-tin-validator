"use strict";

var countriesData = {
	AF: {
		name: "Afghanistan",
		tinRules: []
	},
	AX: {
		name: "Aland Islands",
		tinRules: []
	},
	AL: {
		name: "Albania",
		tinRules: []
	},
	DZ: {
		name: "Algeria",
		tinRules: []
	},
	AS: {
		name: "American Samoa",
		tinRules: []
	},
	AD: {
		name: "Andorra",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /F-[0-6]{1}[0-9]{5}-[A-Za-z]{1}/);
		}], [function (tinString) {
			return testRegex(tinString, /(A|L)-7[0-9]{5}-[A-Za-z]{1}/);
		}], [function (tinString) {
			return testRegex(tinString, /(C|D|E|G|O|P|U)-[0-9]{6}-[A-Za-z]{1}/);
		}]]
	},
	AO: {
		name: "Angola",
		tinRules: []
	},
	AI: {
		name: "Anguilla",
		tinRules: []
	},
	AQ: {
		name: "Antarctica",
		tinRules: []
	},
	AG: {
		name: "Antigua And Barbuda",
		tinRules: []
	},
	AR: {
		name: "Argentina",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /(20|23|24|25|26|27|30|33)[0-9]{9}/);
		}]]
	},
	AM: {
		name: "Armenia",
		tinRules: []
	},
	AW: {
		name: "Aruba",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{8}/);
		}]]
	},
	AU: {
		name: "Australia",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{8,9}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{11}/);
		}, function (tinString) {
			var weightingFactors = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
			var digitsToCheck = tinString.split("");
			digitsToCheck[0]--;
			var multipliedDigits = digitsToCheck.map(function (digit, index) {
				return digit * weightingFactors[weightingFactors.length - digitsToCheck.length + index];
			});
			var multipliedDigitsSum = multipliedDigits.reduce(function (a, b) {
				return a + b;
			});
			return multipliedDigitsSum % 89 === 0;
		}]]
	},
	AT: {
		name: "Austria",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{9}/);
		}]]
	},
	AZ: {
		name: "Azerbaijan",
		tinRules: []
	},
	BS: {
		name: "Bahamas",
		tinRules: []
	},
	BH: {
		name: "Bahrain",
		tinRules: []
	},
	BD: {
		name: "Bangladesh",
		tinRules: []
	},
	BB: {
		name: "Barbados",
		tinRules: []
	},
	BY: {
		name: "Belarus",
		tinRules: []
	},
	BE: {
		name: "Belgium",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{10,11}/);
		}]]
	},
	BZ: {
		name: "Belize",
		tinRules: []
	},
	BJ: {
		name: "Benin",
		tinRules: []
	},
	BM: {
		name: "Bermuda",
		tinRules: []
	},
	BT: {
		name: "Bhutan",
		tinRules: []
	},
	BO: {
		name: "Bolivia",
		tinRules: []
	},
	BA: {
		name: "Bosnia And Herzegovina",
		tinRules: []
	},
	BW: {
		name: "Botswana",
		tinRules: []
	},
	BV: {
		name: "Bouvet Island",
		tinRules: []
	},
	BR: {
		name: "Brazil",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}/);
		}]]
	},
	IO: {
		name: "British Indian Ocean Territory",
		tinRules: []
	},
	BN: {
		name: "Brunei Darussalam",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /00-0(?!00000)([0-7][0-9]{4}|80000)/);
		}], [function (tinString) {
			return testRegex(tinString, /00-1(?!10000)([1-2][0-9]{4}|30000)/);
		}], [function (tinString) {
			return testRegex(tinString, /00-(?!250000|6[6-9][0-9]{4}|65[0-9]{3}[1-9])([2-6][0-9]{5})/);
		}], [function (tinString) {
			return testRegex(tinString, /(P|RC|RFC)[0-9]{8}/);
		}]]
	},
	BG: {
		name: "Bulgaria",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{9,10}/);
		}]]
	},
	BF: {
		name: "Burkina Faso",
		tinRules: []
	},
	BI: {
		name: "Burundi",
		tinRules: []
	},
	KH: {
		name: "Cambodia",
		tinRules: []
	},
	CM: {
		name: "Cameroon",
		tinRules: []
	},
	CA: {
		name: "Canada",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{9}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{9}[A-Za-z]{2}[0-9]{4}/);
		}], [function (tinString) {
			return testRegex(tinString, /T[0-9]{8}/);
		}]]
	},
	CV: {
		name: "Cape Verde",
		tinRules: []
	},
	KY: {
		name: "Cayman Islands",
		tinRules: []
	},
	CF: {
		name: "Central African Republic",
		tinRules: []
	},
	TD: {
		name: "Chad",
		tinRules: []
	},
	CL: {
		name: "Chile",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{2}\.[0-9]{3}\.[0-9]{3}-([0-9]|K)/);
		}, function (tinString) {
			tinString = tinString.split(".").join("").split("-").join("");
			var modulus11Result = modulus11CheckDigit(tinString, 8, [3, 2, 7, 6, 5, 4, 3, 2]);
			return modulus11Result == tinString[8] || tinString[8] === "K" && modulus11Result === 10;
		}]]
	},
	CN: {
		name: "China",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{15}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{8}[0-9A-Za-z]{10}/);
		}], [function (tinString) {
			return testRegex(tinString, /(C|W|H|M|T)[0-9]{16}[0-9A-Za-z]/);
		}], [function (tinString) {
			return testRegex(tinString, /J[0-9]{14}/);
		}]]
	},
	CX: {
		name: "Christmas Island",
		tinRules: []
	},
	CC: {
		name: "Cocos (Keeling) Islands",
		tinRules: []
	},
	CO: {
		name: "Colombia",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[1-9][0-9]{3}[0-9]{3}[0-9]{3}/);
		}], [function (tinString) {
			return testRegex(tinString, /[1-9]\.[0-9]{3}\.[0-9]{3}\.[0-9]{3}/);
		}], [function (tinString) {
			return testRegex(tinString, /(?!00000000)[0-9]{2}[0-9]{3}[0-9]{3}/);
		}], [function (tinString) {
			return testRegex(tinString, /(?!00.000.000)[0-9]{2}\.[0-9]{3}\.[0-9]{3}/);
		}]]
	},
	KM: {
		name: "Comoros",
		tinRules: []
	},
	CG: {
		name: "Congo",
		tinRules: []
	},
	CD: {
		name: "Congo, Democratic Republic",
		tinRules: []
	},
	CK: {
		name: "Cook Islands",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{5}/);
		}]]
	},
	CR: {
		name: "Costa Rica",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]-[0-9]{4}-[0-9]{4}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]-[0-9]{3}-[0-9]{6}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{11,12}/);
		}]]
	},
	CI: {
		name: "Cote D'Ivoire",
		tinRules: []
	},
	HR: {
		name: "Croatia",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{11}/);
		}, function (tinString) {
			var numbersToCheck = tinString.substring(0, 10).split("");
			var previousMod11Result = 10;
			numbersToCheck.forEach(function (digit) {
				var mod10Result = (parseInt(digit) + previousMod11Result) % 10;
				if (mod10Result === 0) {
					mod10Result = 10;
				}
				previousMod11Result = mod10Result * 2 % 11;
			});
			return 11 - previousMod11Result == tinString[10];
		}]]
	},
	CU: {
		name: "Cuba",
		tinRules: []
	},
	CY: {
		name: "Cyprus",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{8}[A-Z]/);
		}]]
	},
	CZ: {
		name: "Czech Republic",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{9,10}/);
		}]]
	},
	DK: {
		name: "Denmark",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{6}-?[0-9]{4}/);
		}], [function (tinString) {
			return testRegex(tinString, /(CVR|SE)\s?[0-9]{8}/);
		}]]
	},
	DJ: {
		name: "Djibouti",
		tinRules: []
	},
	DM: {
		name: "Dominica",
		tinRules: []
	},
	DO: {
		name: "Dominican Republic",
		tinRules: []
	},
	EC: {
		name: "Ecuador",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{10}001/);
		}, function (tinString) {
			var modulus11Result = luhnChecksum(tinString, 9);
			return modulus11Result == tinString[9];
		}]]
	},
	EG: {
		name: "Egypt",
		tinRules: []
	},
	SV: {
		name: "El Salvador",
		tinRules: []
	},
	GQ: {
		name: "Equatorial Guinea",
		tinRules: []
	},
	ER: {
		name: "Eritrea",
		tinRules: []
	},
	EE: {
		name: "Estonia",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{11}/);
		}], [function (tinString) {
			return testRegex(tinString, /(1|8|9)[0-9]{7}/);
		}]]
	},
	ET: {
		name: "Ethiopia",
		tinRules: []
	},
	FK: {
		name: "Falkland Islands (Malvinas)",
		tinRules: []
	},
	FO: {
		name: "Faroe Islands",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{6}-?[0-9]{3}/);
		}]]
	},
	FJ: {
		name: "Fiji",
		tinRules: []
	},
	FI: {
		name: "Finland",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{6}(-|\+|A)[0-9]{3}[A-Za-z0-9]{1}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{7}-[0-9]{1}/);
		}]]
	},
	FR: {
		name: "France",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-3][0-9]{12}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-3][0-9]\s[0-9]{2}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{9}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{3}\s[0-9]{3}\s[0-9]{3}/);
		}]]
	},
	GF: {
		name: "French Guiana",
		tinRules: []
	},
	PF: {
		name: "French Polynesia",
		tinRules: []
	},
	TF: {
		name: "French Southern Territories",
		tinRules: []
	},
	GA: {
		name: "Gabon",
		tinRules: []
	},
	GM: {
		name: "Gambia",
		tinRules: []
	},
	GE: {
		name: "Georgia",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{7}/);
		}]]
	},
	DE: {
		name: "Germany",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{11}/);
		}]]
	},
	GH: {
		name: "Ghana",
		tinRules: []
	},
	GI: {
		name: "Gibraltar",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{1,6}/);
		}]]
	},
	GR: {
		name: "Greece",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{9}/);
		}]]
	},
	GL: {
		name: "Greenland",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{6}-?[0-9]{3}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{8}/);
		}]]
	},
	GD: {
		name: "Grenada",
		tinRules: []
	},
	GP: {
		name: "Guadeloupe",
		tinRules: []
	},
	GU: {
		name: "Guam",
		tinRules: []
	},
	GT: {
		name: "Guatemala",
		tinRules: []
	},
	GG: {
		name: "Guernsey",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /GY[0-9]{6}/);
		}], [function (tinString) {
			return testRegex(tinString, /[A-Za-z]{2}[0-9]{6}(A|B|C|D)/);
		}], [function (tinString) {
			return testRegex(tinString, /[A-Za-z]{2}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}\s(A|B|C|D)/);
		}], [function (tinString) {
			return testRegex(tinString, /JY[0-9]{6}[A-Za-z]/);
		}], [function (tinString) {
			return testRegex(tinString, /JY\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}\s[A-Za-z]/);
		}], [function (tinString) {
			return testRegex(tinString, /(?!0)[0-9]{1,6}/);
		}], [function (tinString) {
			return testRegex(tinString, /(?!0)[0-9]{1,3}/);
		}], [function (tinString) {
			return testRegex(tinString, /(CH|NP)[0-9]{1,3}/);
		}]]
	},
	GN: {
		name: "Guinea",
		tinRules: []
	},
	GW: {
		name: "Guinea-Bissau",
		tinRules: []
	},
	GY: {
		name: "Guyana",
		tinRules: []
	},
	HT: {
		name: "Haiti",
		tinRules: []
	},
	HM: {
		name: "Heard Island & Mcdonald Islands",
		tinRules: []
	},
	VA: {
		name: "Holy See (Vatican City State)",
		tinRules: []
	},
	HN: {
		name: "Honduras",
		tinRules: []
	},
	HK: {
		name: "Hong Kong",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[A-Z]{1,2}[0-9]{6}([0-9]|A){1}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{8}-[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{1}/);
		}]]
	},
	HU: {
		name: "Hungary",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /8[0-9]{9}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{8}-(1|2)-[0-9]{2}/);
		}]]
	},
	IS: {
		name: "Iceland",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{6}-?[0-9]{4}/);
		}, function (tinString) {
			tinString = tinString.split("-").join("");
			var modulus11Result = modulus11CheckDigit(tinString, 8, [3, 2, 7, 6, 5, 4, 3, 2]);
			return modulus11Result == tinString[8];
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{6}-?[0-9]{4}/);
		}, function (tinString) {
			// Same modulus 11 algorithm but requires adding 4 to the first digit before multiplying
			tinString = tinString.split("-").join("");
			var digitsToCheck = tinString.substring(0, 8).split("");
			var weightingFactors = [3, 2, 7, 6, 5, 4, 3, 2];
			var multipliedDigits = digitsToCheck.map(function (digit, index) {
				if (index === 0) {
					digit = parseInt(digit) + 4;
				}
				return digit * weightingFactors[weightingFactors.length - digitsToCheck.length + index];
			});
			var multipliedDigitsSum = multipliedDigits.reduce(function (a, b) {
				return a + b;
			});
			var remainder = multipliedDigitsSum % 11;

			var modulus11Result = void 0;
			if (remainder === 0) {
				modulus11Result = 0;
			} else {
				modulus11Result = 11 - remainder;
			}

			return modulus11Result == tinString[8];
		}]]
	},
	IN: {
		name: "India",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[A-Z]{3}(P|F|C|H|A|T|B|L|J|G)[A-Z](?!0000)[0-9]{4}[A-Z]/);
		}]]
	},
	ID: {
		name: "Indonesia",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{2}\.[0-9]{3}\.[0-9]{3}\.[0-9]-[0-9]{3}\.[0-9]{3}/);
		}]]
	},
	IR: {
		name: "Iran, Islamic Republic Of",
		tinRules: []
	},
	IQ: {
		name: "Iraq",
		tinRules: []
	},
	IE: {
		name: "Ireland",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{7}[A-Za-z]{1,2}/);
		}], [function (tinString) {
			return testRegex(tinString, /CHY[0-9]{1,5}/);
		}]]
	},
	IM: {
		name: "Isle Of Man",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /(H|C|X)[0-9]{6}/);
		}], [function (tinString) {
			return testRegex(tinString, /(H|C|X)[0-9]{6}-[0-9]{2}/);
		}], [function (tinString) {
			return testRegex(tinString, /[A-Za-z]{2}[0-9]{6}(A|B|C|D)/);
		}]]
	},
	IL: {
		name: "Israel",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{9}/);
		}]]
	},
	IT: {
		name: "Italy",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[A-Za-z]{6}[0-9]{2}[A-Za-z][0-9]{2}[A-Za-z][0-9]{3}[A-Za-z]/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{11}/);
		}]]
	},
	JM: {
		name: "Jamaica",
		tinRules: []
	},
	JP: {
		name: "Japan",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{12,13}/);
		}]]
	},
	JE: {
		name: "Jersey",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[A-Za-z]{2}[0-9]{6}(A|B|C|D)/);
		}], [function (tinString) {
			return testRegex(tinString, /(C|D|E)[A-Za-z][0-9]{1,5}/);
		}]]
	},
	JO: {
		name: "Jordan",
		tinRules: []
	},
	KZ: {
		name: "Kazakhstan",
		tinRules: []
	},
	KE: {
		name: "Kenya",
		tinRules: []
	},
	KI: {
		name: "Kiribati",
		tinRules: []
	},
	KR: {
		name: "Korea",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /(?!0|100)[0-9]{3}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}[0-9]/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{6}-[0-9]{7}/);
		}]]
	},
	KW: {
		name: "Kuwait",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{12}/);
		}]]
	},
	KG: {
		name: "Kyrgyzstan",
		tinRules: []
	},
	LA: {
		name: "Lao People's Democratic Republic",
		tinRules: []
	},
	LV: {
		name: "Latvia",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{6}(0|1|2)[0-9]{4}/);
		}], [function (tinString) {
			return testRegex(tinString, /(4000|5000|9000)[0-9]{7}/);
		}], [function (tinString) {
			return testRegex(tinString, /32[0-9]{9}/);
		}]]
	},
	LB: {
		name: "Lebanon",
		tinRules: []
	},
	LS: {
		name: "Lesotho",
		tinRules: []
	},
	LR: {
		name: "Liberia",
		tinRules: []
	},
	LY: {
		name: "Libyan Arab Jamahiriya",
		tinRules: []
	},
	LI: {
		name: "Liechtenstein",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{1,12}/);
		}]]
	},
	LT: {
		name: "Lithuania",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{11}/);
		}]]
	},
	LU: {
		name: "Luxembourg",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{11}/);
		}, function (tinString) {
			var modulus11Result = modulus11CheckDigit(tinString, 10, [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]);
			return modulus11Result == tinString[10];
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{13}/);
		}, function (tinString) {
			var deLuhn10Result = luhnChecksum(tinString, 11);
			var verhoeffChecksumResult = verhoeffChecksum(tinString, 11);
			return deLuhn10Result == tinString[11] && verhoeffChecksumResult == tinString[12];
		}]]
	},
	MO: {
		name: "Macao",
		tinRules: []
	},
	MK: {
		name: "Macedonia",
		tinRules: []
	},
	MG: {
		name: "Madagascar",
		tinRules: []
	},
	MW: {
		name: "Malawi",
		tinRules: []
	},
	MY: {
		name: "Malaysia",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /(SG|OG)\s[0-9]{1,10}[0-1]{1}/);
		}], [function (tinString) {
			return testRegex(tinString, /[A-Za-z]{1,2}\s[0-9]{1,10}/);
		}]]
	},
	MV: {
		name: "Maldives",
		tinRules: []
	},
	ML: {
		name: "Mali",
		tinRules: []
	},
	MT: {
		name: "Malta",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{9}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{7}(M|G|A|P|L|H|B|Z)/);
		}]]
	},
	MH: {
		name: "Marshall Islands",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{5}-04/);
		}], [function (tinString) {
			return testRegex(tinString, /04-[0-9]{6}/);
		}]]
	},
	MQ: {
		name: "Martinique",
		tinRules: []
	},
	MR: {
		name: "Mauritania",
		tinRules: []
	},
	MU: {
		name: "Mauritius",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{7}/);
		}]]
	},
	YT: {
		name: "Mayotte",
		tinRules: []
	},
	MX: {
		name: "Mexico",
		tinRules: []
	},
	FM: {
		name: "Micronesia, Federated States Of",
		tinRules: []
	},
	MD: {
		name: "Moldova",
		tinRules: []
	},
	MC: {
		name: "Monaco",
		tinRules: []
	},
	MN: {
		name: "Mongolia",
		tinRules: []
	},
	ME: {
		name: "Montenegro",
		tinRules: []
	},
	MS: {
		name: "Montserrat",
		tinRules: []
	},
	MA: {
		name: "Morocco",
		tinRules: []
	},
	MZ: {
		name: "Mozambique",
		tinRules: []
	},
	MM: {
		name: "Myanmar",
		tinRules: []
	},
	NA: {
		name: "Namibia",
		tinRules: []
	},
	NR: {
		name: "Nauru",
		tinRules: []
	},
	NP: {
		name: "Nepal",
		tinRules: []
	},
	NL: {
		name: "Netherlands",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{9}/);
		}, function (tinString) {
			var modulus11Result = modulus11CheckDigit(tinString, 8);
			var finalResult = modulus11Result === 0 ? 0 : 11 - modulus11Result;
			return finalResult == tinString[8];
		}]]
	},
	AN: {
		name: "Netherlands Antilles",
		tinRules: []
	},
	NC: {
		name: "New Caledonia",
		tinRules: []
	},
	NZ: {
		name: "New Zealand",
		tinRules: []
	},
	NI: {
		name: "Nicaragua",
		tinRules: []
	},
	NE: {
		name: "Niger",
		tinRules: []
	},
	NG: {
		name: "Nigeria",
		tinRules: []
	},
	NU: {
		name: "Niue",
		tinRules: []
	},
	NF: {
		name: "Norfolk Island",
		tinRules: []
	},
	MP: {
		name: "Northern Mariana Islands",
		tinRules: []
	},
	NO: {
		name: "Norway",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{11}/);
		}], [function (tinString) {
			return testRegex(tinString, /[8-9]{1}[0-9]{7}[0-9]{1}(MVA)?/);
		}, function (tinString) {
			tinString = tinString.substring(0, 9);
			var modulus11Result = modulus11CheckDigit(tinString, 8, [3, 2, 7, 6, 5, 4, 3, 2]);
			return modulus11Result == tinString[8];
		}]]
	},
	OM: {
		name: "Oman",
		tinRules: []
	},
	PK: {
		name: "Pakistan",
		tinRules: []
	},
	PW: {
		name: "Palau",
		tinRules: []
	},
	PS: {
		name: "Palestinian Territory, Occupied",
		tinRules: []
	},
	PA: {
		name: "Panama",
		tinRules: []
	},
	PG: {
		name: "Papua New Guinea",
		tinRules: []
	},
	PY: {
		name: "Paraguay",
		tinRules: []
	},
	PE: {
		name: "Peru",
		tinRules: []
	},
	PH: {
		name: "Philippines",
		tinRules: []
	},
	PN: {
		name: "Pitcairn",
		tinRules: []
	},
	PL: {
		name: "Poland",
		tinRules: []
	},
	PT: {
		name: "Portugal",
		tinRules: []
	},
	PR: {
		name: "Puerto Rico",
		tinRules: []
	},
	QA: {
		name: "Qatar",
		tinRules: []
	},
	RE: {
		name: "Reunion",
		tinRules: []
	},
	RO: {
		name: "Romania",
		tinRules: []
	},
	RU: {
		name: "Russian Federation",
		tinRules: []
	},
	RW: {
		name: "Rwanda",
		tinRules: []
	},
	BL: {
		name: "Saint Barthelemy",
		tinRules: []
	},
	SH: {
		name: "Saint Helena",
		tinRules: []
	},
	KN: {
		name: "Saint Kitts And Nevis",
		tinRules: []
	},
	LC: {
		name: "Saint Lucia",
		tinRules: []
	},
	MF: {
		name: "Saint Martin",
		tinRules: []
	},
	PM: {
		name: "Saint Pierre And Miquelon",
		tinRules: []
	},
	VC: {
		name: "Saint Vincent And Grenadines",
		tinRules: []
	},
	WS: {
		name: "Samoa",
		tinRules: []
	},
	SM: {
		name: "San Marino",
		tinRules: []
	},
	ST: {
		name: "Sao Tome And Principe",
		tinRules: []
	},
	SA: {
		name: "Saudi Arabia",
		tinRules: []
	},
	SN: {
		name: "Senegal",
		tinRules: []
	},
	RS: {
		name: "Serbia",
		tinRules: []
	},
	SC: {
		name: "Seychelles",
		tinRules: []
	},
	SL: {
		name: "Sierra Leone",
		tinRules: []
	},
	SG: {
		name: "Singapore",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{8}[A-Za-z]{1}/);
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{9}[A-Za-z]{1}/);
		}], [function (tinString) {
			return testRegex(tinString, /F(000|\s\s\s)[0-9]{5}[A-Za-z]{1}/);
		}], [function (tinString) {
			return testRegex(tinString, /(S|T)[0-9]{2}[A-Za-z]{2}[0-9]{4}[A-Za-z]{1}/);
		}], [function (tinString) {
			return testRegex(tinString, /A[0-9]{7}[A-Za-z]{1}/);
		}], [function (tinString) {
			return testRegex(tinString, /4[0-9]{8}[A-Za-z]{1}/);
		}], [function (tinString) {
			return testRegex(tinString, /(S|T|F|G)[0-9]{7}[A-Za-z]{1}/);
		}]]
	},
	SK: {
		name: "Slovakia",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{9,10}/);
		}]]
	},
	SI: {
		name: "Slovenia",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[1-9]{1}[0-9]{6}([0-9]|X){1}/);
		}, function (tinString) {
			var modulus11Result = modulus11CheckDigit(tinString, 7);
			return modulus11Result == tinString[7] || tinString[7] === "X" && modulus11Result === 10;
		}]]
	},
	SB: {
		name: "Solomon Islands",
		tinRules: []
	},
	SO: {
		name: "Somalia",
		tinRules: []
	},
	ZA: {
		name: "South Africa",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /([0-3]|9){1}[0-9]{9}/);
		}]]
	},
	GS: {
		name: "South Georgia And Sandwich Isl.",
		tinRules: []
	},
	ES: {
		name: "Spain",
		tinRules: []
	},
	LK: {
		name: "Sri Lanka",
		tinRules: []
	},
	SD: {
		name: "Sudan",
		tinRules: []
	},
	SR: {
		name: "Suriname",
		tinRules: []
	},
	SJ: {
		name: "Svalbard And Jan Mayen",
		tinRules: []
	},
	SZ: {
		name: "Swaziland",
		tinRules: []
	},
	SE: {
		name: "Sweden",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{6}(-|\+)[0-9]{4}/);
		}]]
	},
	CH: {
		name: "Switzerland",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{3}\.[0-9]{4}\.[0-9]{4}\.[0-9]{1}([0-9]|X){1}/);
		}, function (tinString) {
			tinString = tinString.substring(4).split(".").join("");
			var modulus11Result = modulus11CheckDigit(tinString, 9);
			return modulus11Result == tinString[9] || tinString[9] === "X" && modulus11Result === 10;
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{3}[0-9]{4}[0-9]{4}[0-9]{1}([0-9]|X){1}/);
		}, function (tinString) {
			tinString = tinString.substring(3);
			var modulus11Result = modulus11CheckDigit(tinString, 9);
			return modulus11Result == tinString[9] || tinString[9] === "X" && modulus11Result === 10;
		}], [function (tinString) {
			return testRegex(tinString, /CHE-[0-9]{3}\.[0-9]{3}\.[0-9]{2}([0-9]|X){1}/);
		}, function (tinString) {
			tinString = tinString.substring(4).split(".").join("");
			var modulus11Result = modulus11CheckDigit(tinString, 8);
			return modulus11Result == tinString[8] || tinString[8] === "X" && modulus11Result === 10;
		}], [function (tinString) {
			return testRegex(tinString, /CHE[0-9]{3}[0-9]{3}[0-9]{2}([0-9]|X){1}/);
		}, function (tinString) {
			tinString = tinString.substring(3);
			var modulus11Result = modulus11CheckDigit(tinString, 8);
			return modulus11Result == tinString[8] || tinString[8] === "X" && modulus11Result === 10;
		}]]
	},
	SY: {
		name: "Syrian Arab Republic",
		tinRules: []
	},
	TW: {
		name: "Taiwan",
		tinRules: []
	},
	TJ: {
		name: "Tajikistan",
		tinRules: []
	},
	TZ: {
		name: "Tanzania",
		tinRules: []
	},
	TH: {
		name: "Thailand",
		tinRules: []
	},
	TL: {
		name: "Timor-Leste",
		tinRules: []
	},
	TG: {
		name: "Togo",
		tinRules: []
	},
	TK: {
		name: "Tokelau",
		tinRules: []
	},
	TO: {
		name: "Tonga",
		tinRules: []
	},
	TT: {
		name: "Trinidad And Tobago",
		tinRules: []
	},
	TN: {
		name: "Tunisia",
		tinRules: []
	},
	TR: {
		name: "Turkey",
		tinRules: []
	},
	TM: {
		name: "Turkmenistan",
		tinRules: []
	},
	TC: {
		name: "Turks And Caicos Islands",
		tinRules: []
	},
	TV: {
		name: "Tuvalu",
		tinRules: []
	},
	UG: {
		name: "Uganda",
		tinRules: []
	},
	UA: {
		name: "Ukraine",
		tinRules: []
	},
	AE: {
		name: "United Arab Emirates",
		tinRules: []
	},
	GB: {
		name: "United Kingdom",
		tinRules: []
	},
	US: {
		name: "United States",
		tinRules: []
	},
	UM: {
		name: "United States Outlying Islands",
		tinRules: []
	},
	UY: {
		name: "Uruguay",
		tinRules: []
	},
	UZ: {
		name: "Uzbekistan",
		tinRules: []
	},
	VU: {
		name: "Vanuatu",
		tinRules: []
	},
	VE: {
		name: "Venezuela",
		tinRules: []
	},
	VN: {
		name: "Viet Nam",
		tinRules: []
	},
	VG: {
		name: "Virgin Islands, British",
		tinRules: []
	},
	VI: {
		name: "Virgin Islands, U.S.",
		tinRules: []
	},
	WF: {
		name: "Wallis And Futuna",
		tinRules: []
	},
	EH: {
		name: "Western Sahara",
		tinRules: []
	},
	YE: {
		name: "Yemen",
		tinRules: []
	},
	ZM: {
		name: "Zambia",
		tinRules: []
	},
	ZW: {
		name: "Zimbabwe",
		tinRules: []
	}
};

function testRegex(stringToCheck, regexLiteral) {
	var regex = new RegExp("^" + regexLiteral.source + "$");
	return regex.test(stringToCheck);
}

function modulus11CheckDigit(stringToCheck, checkDigitPosition) {
	var weightingFactors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [10, 9, 8, 7, 6, 5, 4, 3, 2];

	var digitsToCheck = stringToCheck.substring(0, checkDigitPosition).split("");
	var multipliedDigits = digitsToCheck.map(function (digit, index) {
		return parseInt(digit) * weightingFactors[weightingFactors.length - digitsToCheck.length + index];
	});
	var multipliedDigitsSum = multipliedDigits.reduce(function (a, b) {
		return a + b;
	});
	var remainder = multipliedDigitsSum % 11;
	if (remainder === 0) {
		return 0;
	} else {
		return 11 - remainder;
	}
}

function luhnChecksum(stringToCheck, checkDigitPosition) {
	var digitsToCheck = stringToCheck.substring(0, checkDigitPosition).split("");
	var sum = 0;
	digitsToCheck.forEach(function (digit, index) {
		var currentDigit = parseInt(digit);
		if (index % 2 === 0) {
			currentDigit *= 2;
			if (currentDigit > 9) {
				currentDigit -= 9;
			}
		}
		sum += currentDigit;
	});
	return 10 - sum % 10;
}

var verhoeffPermutations = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];

var verhoeffMultiplicativeInverse = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

var verhoeffDihedralGroup = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];

function verhoeffChecksum(stringToCheck, checkDigitPosition) {
	var digitsToCheck = stringToCheck.substring(0, checkDigitPosition).split("");
	var checkSum = 0;
	digitsToCheck.reverse().forEach(function (digit, index) {
		checkSum = verhoeffDihedralGroup[checkSum][verhoeffPermutations[(index + 1) % 8][digit]];
	});

	return verhoeffMultiplicativeInverse[checkSum];
}

module.exports = { countriesData: countriesData };