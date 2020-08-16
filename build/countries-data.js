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
		tinRules: []
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
		tinRules: []
	},
	AM: {
		name: "Armenia",
		tinRules: []
	},
	AW: {
		name: "Aruba",
		tinRules: []
	},
	AU: {
		name: "Australia",
		tinRules: []
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
		tinRules: []
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
		tinRules: []
	},
	IO: {
		name: "British Indian Ocean Territory",
		tinRules: []
	},
	BN: {
		name: "Brunei Darussalam",
		tinRules: []
	},
	BG: {
		name: "Bulgaria",
		tinRules: []
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
		tinRules: []
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
		tinRules: []
	},
	CN: {
		name: "China",
		tinRules: []
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
		tinRules: []
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
		tinRules: []
	},
	CR: {
		name: "Costa Rica",
		tinRules: []
	},
	CI: {
		name: "Cote D'Ivoire",
		tinRules: []
	},
	HR: {
		name: "Croatia",
		tinRules: []
	},
	CU: {
		name: "Cuba",
		tinRules: []
	},
	CY: {
		name: "Cyprus",
		tinRules: []
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
		tinRules: []
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
		tinRules: []
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
		tinRules: []
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
		tinRules: []
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
		tinRules: []
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
		tinRules: []
	},
	GR: {
		name: "Greece",
		tinRules: []
	},
	GL: {
		name: "Greenland",
		tinRules: []
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
		tinRules: []
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
		tinRules: []
	},
	IS: {
		name: "Iceland",
		tinRules: []
	},
	IN: {
		name: "India",
		tinRules: []
	},
	ID: {
		name: "Indonesia",
		tinRules: []
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
		tinRules: []
	},
	IL: {
		name: "Israel",
		tinRules: []
	},
	IT: {
		name: "Italy",
		tinRules: []
	},
	JM: {
		name: "Jamaica",
		tinRules: []
	},
	JP: {
		name: "Japan",
		tinRules: []
	},
	JE: {
		name: "Jersey",
		tinRules: []
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
		tinRules: []
	},
	KW: {
		name: "Kuwait",
		tinRules: []
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
		tinRules: []
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
		tinRules: []
	},
	LT: {
		name: "Lithuania",
		tinRules: [[function (tinString) {
			return testRegex(tinString, /[0-9]{11}/);
		}]]
	},
	LU: {
		name: "Luxembourg",
		tinRules: []
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
		tinRules: []
	},
	MH: {
		name: "Marshall Islands",
		tinRules: []
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
		tinRules: []
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
			var modulus11Remainder = modulus11CheckDigit(tinString, 8);
			var remainder = modulus11Remainder === 0 ? 0 : 11 - modulus11Remainder;
			return remainder == tinString[8];
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
			var remainder = modulus11CheckDigit(tinString, 8, [3, 2, 7, 6, 5, 4, 3, 2]);
			return remainder == tinString[8];
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
			var remainder = modulus11CheckDigit(tinString, 7);
			return remainder == tinString[7] || tinString[7] === "X" && remainder === 10;
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
			var remainder = modulus11CheckDigit(tinString, 9);
			return remainder == tinString[9] || tinString[9] === "X" && remainder === 10;
		}], [function (tinString) {
			return testRegex(tinString, /[0-9]{3}[0-9]{4}[0-9]{4}[0-9]{1}([0-9]|X){1}/);
		}, function (tinString) {
			tinString = tinString.substring(3);
			var remainder = modulus11CheckDigit(tinString, 9);
			return remainder == tinString[9] || tinString[9] === "X" && remainder === 10;
		}], [function (tinString) {
			return testRegex(tinString, /CHE-[0-9]{3}\.[0-9]{3}\.[0-9]{2}([0-9]|X){1}/);
		}, function (tinString) {
			tinString = tinString.substring(4).split(".").join("");
			var remainder = modulus11CheckDigit(tinString, 8);
			return remainder == tinString[8] || tinString[8] === "X" && remainder === 10;
		}], [function (tinString) {
			return testRegex(tinString, /CHE[0-9]{3}[0-9]{3}[0-9]{2}([0-9]|X){1}/);
		}, function (tinString) {
			tinString = tinString.substring(3);
			var remainder = modulus11CheckDigit(tinString, 8);
			return remainder == tinString[8] || tinString[8] === "X" && remainder === 10;
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
		return digit * weightingFactors[weightingFactors.length - digitsToCheck.length + index];
	});
	var multipliedDigitsSum = multipliedDigits.reduce(function (a, b) {
		return a + b;
	});
	var mod11Result = multipliedDigitsSum % 11;
	if (mod11Result === 0) {
		return 0;
	} else {
		return 11 - mod11Result;
	}
}

module.exports = { countriesData: countriesData };