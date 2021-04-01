"use strict";

var countriesData = {
    AF: {
        name: "Afghanistan",
        tinRules: [],
        tooltip: ""
    },
    AX: {
        name: "Aland Islands",
        tinRules: [],
        tooltip: ""
    },
    AL: {
        name: "Albania",
        tinRules: [],
        tooltip: ""
    },
    DZ: {
        name: "Algeria",
        tinRules: [],
        tooltip: ""
    },
    AS: {
        name: "American Samoa",
        tinRules: [],
        tooltip: ""
    },
    AD: {
        name: "Andorra",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /([efEF])([0-9]{6})([a-zA-Z])/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.ANDORRA"
    },
    AO: {
        name: "Angola",
        tinRules: [],
        tooltip: ""
    },
    AI: {
        name: "Anguilla",
        tinRules: [],
        tooltip: ""
    },
    AQ: {
        name: "Antarctica",
        tinRules: [],
        tooltip: ""
    },
    AG: {
        name: "Antigua And Barbuda",
        tinRules: [],
        tooltip: ""
    },
    AR: {
        name: "Argentina",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /(2)([034567])([0-9]{9})/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.ARGENTINA"
    },
    AM: {
        name: "Armenia",
        tinRules: [],
        tooltip: ""
    },
    AW: {
        name: "Aruba",
        tinRules: [],
        tooltip: ""
    },
    AU: {
        name: "Australia",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{8,9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.AUSTRALIA"
    },
    AT: {
        name: "Austria",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.AUSTRIA"
    },
    AZ: {
        name: "Azerbaijan",
        tinRules: [],
        tooltip: ""
    },
    BS: {
        name: "Bahamas",
        tinRules: [],
        tooltip: ""
    },
    BH: {
        name: "Bahrain",
        tinRules: [],
        tooltip: ""
    },
    BD: {
        name: "Bangladesh",
        tinRules: [],
        tooltip: ""
    },
    BB: {
        name: "Barbados",
        tinRules: [],
        tooltip: ""
    },
    BY: {
        name: "Belarus",
        tinRules: [],
        tooltip: ""
    },
    BE: {
        name: "Belgium",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{11}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.BELGIUM"
    },
    BZ: {
        name: "Belize",
        tinRules: [],
        tooltip: ""
    },
    BJ: {
        name: "Benin",
        tinRules: [],
        tooltip: ""
    },
    BM: {
        name: "Bermuda",
        tinRules: [],
        tooltip: ""
    },
    BT: {
        name: "Bhutan",
        tinRules: [],
        tooltip: ""
    },
    BO: {
        name: "Bolivia",
        tinRules: [],
        tooltip: ""
    },
    BA: {
        name: "Bosnia And Herzegovina",
        tinRules: [],
        tooltip: ""
    },
    BW: {
        name: "Botswana",
        tinRules: [],
        tooltip: ""
    },
    BV: {
        name: "Bouvet Island",
        tinRules: [],
        tooltip: ""
    },
    BR: {
        name: "Brazil",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{11}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.BRAZIL"
    },
    IO: {
        name: "British Indian Ocean Territory",
        tinRules: [],
        tooltip: ""
    },
    BN: {
        name: "Brunei Darussalam",
        tinRules: [],
        tooltip: ""
    },
    BG: {
        name: "Bulgaria",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{10}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.BULGARIA"
    },
    BF: {
        name: "Burkina Faso",
        tinRules: [],
        tooltip: ""
    },
    BI: {
        name: "Burundi",
        tinRules: [],
        tooltip: ""
    },
    KH: {
        name: "Cambodia",
        tinRules: [],
        tooltip: ""
    },
    CM: {
        name: "Cameroon",
        tinRules: [],
        tooltip: ""
    },
    CA: {
        name: "Canada",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.CANADA"
    },
    CV: {
        name: "Cape Verde",
        tinRules: [],
        tooltip: ""
    },
    KY: {
        name: "Cayman Islands",
        tinRules: [],
        tooltip: ""
    },
    CF: {
        name: "Central African Republic",
        tinRules: [],
        tooltip: ""
    },
    TD: {
        name: "Chad",
        tinRules: [],
        tooltip: ""
    },
    CL: {
        name: "Chile",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.CHILE"
    },
    CN: {
        name: "China",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{17}([0-9]|x|X)/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.CHINA"
    },
    CX: {
        name: "Christmas Island",
        tinRules: [],
        tooltip: ""
    },
    CC: {
        name: "Cocos (Keeling) Islands",
        tinRules: [],
        tooltip: ""
    },
    CO: {
        name: "Colombia",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{10}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.COLOMBIA"
    },
    KM: {
        name: "Comoros",
        tinRules: [],
        tooltip: ""
    },
    CG: {
        name: "Congo",
        tinRules: [],
        tooltip: ""
    },
    CD: {
        name: "Congo, Democratic Republic",
        tinRules: [],
        tooltip: ""
    },
    CK: {
        name: "Cook Islands",
        tinRules: [],
        tooltip: ""
    },
    CR: {
        name: "Costa Rica",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.COSTA.RICA"
    },
    CI: {
        name: "Cote D'Ivoire",
        tinRules: [],
        tooltip: ""
    },
    HR: {
        name: "Croatia",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{11}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.CROATIA"
    },
    CU: {
        name: "Cuba",
        tinRules: [],
        tooltip: ""
    },
    CY: {
        name: "Cyprus",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /([0-9]|[a-z]|[A-Z]){9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.CYPRUS"
    },
    CZ: {
        name: "Czech Republic",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{9,10}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.CZECH.REPUBLIC"
    },
    DK: {
        name: "Denmark",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{10}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.DENMARK"
    },
    DJ: {
        name: "Djibouti",
        tinRules: [],
        tooltip: ""
    },
    DM: {
        name: "Dominica",
        tinRules: [],
        tooltip: ""
    },
    DO: {
        name: "Dominican Republic",
        tinRules: [],
        tooltip: ""
    },
    EC: {
        name: "Ecuador",
        tinRules: [],
        tooltip: ""
    },
    EG: {
        name: "Egypt",
        tinRules: [],
        tooltip: ""
    },
    SV: {
        name: "El Salvador",
        tinRules: [],
        tooltip: ""
    },
    GQ: {
        name: "Equatorial Guinea",
        tinRules: [],
        tooltip: ""
    },
    ER: {
        name: "Eritrea",
        tinRules: [],
        tooltip: ""
    },
    EE: {
        name: "Estonia",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{11}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.ESTONIA"
    },
    ET: {
        name: "Ethiopia",
        tinRules: [],
        tooltip: ""
    },
    FK: {
        name: "Falkland Islands (Malvinas)",
        tinRules: [],
        tooltip: ""
    },
    FO: {
        name: "Faroe Islands",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.FAROE.ISLANDS"
    },
    FJ: {
        name: "Fiji",
        tinRules: [],
        tooltip: ""
    },
    FI: {
        name: "Finland",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{6}(-|\+|A)[0-9]{3}[A-Za-z0-9]{1}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.FINLAND"
    },
    FR: {
        name: "France",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-3][0-9]{12}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.FRANCE"
    },
    GF: {
        name: "French Guiana",
        tinRules: [],
        tooltip: ""
    },
    PF: {
        name: "French Polynesia",
        tinRules: [],
        tooltip: ""
    },
    TF: {
        name: "French Southern Territories",
        tinRules: [],
        tooltip: ""
    },
    GA: {
        name: "Gabon",
        tinRules: [],
        tooltip: ""
    },
    GM: {
        name: "Gambia",
        tinRules: [],
        tooltip: ""
    },
    GE: {
        name: "Georgia",
        tinRules: [],
        tooltip: ""
    },
    DE: {
        name: "Germany",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{11}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.GERMANY"
    },
    GH: {
        name: "Ghana",
        tinRules: [],
        tooltip: ""
    },
    GI: {
        name: "Gibraltar",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{0,6}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.GIBRALTAR"
    },
    GR: {
        name: "Greece",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.GREECE"
    },
    GL: {
        name: "Greenland",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{10}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.GREENLAND"
    },
    GD: {
        name: "Grenada",
        tinRules: [],
        tooltip: ""
    },
    GP: {
        name: "Guadeloupe",
        tinRules: [],
        tooltip: ""
    },
    GU: {
        name: "Guam",
        tinRules: [],
        tooltip: ""
    },
    GT: {
        name: "Guatemala",
        tinRules: [],
        tooltip: ""
    },
    GG: {
        name: "Guernsey",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /(GY)[0-9]{6}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.GUERNSEY"
    },
    GN: {
        name: "Guinea",
        tinRules: [],
        tooltip: ""
    },
    GW: {
        name: "Guinea-Bissau",
        tinRules: [],
        tooltip: ""
    },
    GY: {
        name: "Guyana",
        tinRules: [],
        tooltip: ""
    },
    HT: {
        name: "Haiti",
        tinRules: [],
        tooltip: ""
    },
    HM: {
        name: "Heard Island & Mcdonald Islands",
        tinRules: [],
        tooltip: ""
    },
    VA: {
        name: "Holy See (Vatican City State)",
        tinRules: [],
        tooltip: ""
    },
    HN: {
        name: "Honduras",
        tinRules: [],
        tooltip: ""
    },
    HK: {
        name: "Hong Kong",
        tinRules: [],
        tooltip: ""
    },
    HU: {
        name: "Hungary",
        tinRules: [],
        tooltip: ""
    },
    IS: {
        name: "Iceland",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{10}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.ICELAND"
    },
    IN: {
        name: "India",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /([0-9]|[a-z]|[A-Z]){10}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.INDIA"
    },
    ID: {
        name: "Indonesia",
        tinRules: [],
        tooltip: ""
    },
    IR: {
        name: "Iran, Islamic Republic Of",
        tinRules: [],
        tooltip: ""
    },
    IQ: {
        name: "Iraq",
        tinRules: [],
        tooltip: ""
    },
    IE: {
        name: "Ireland",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{7}[A-Za-z]{1,2}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.IRELAND"
    },
    IM: {
        name: "Isle Of Man",
        tinRules: [],
        tooltip: ""
    },
    IL: {
        name: "Israel",
        tinRules: [],
        tooltip: ""
    },
    IT: {
        name: "Italy",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /([0-9]|[a-z]|[A-Z]){16}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.ITALY"
    },
    JM: {
        name: "Jamaica",
        tinRules: [],
        tooltip: ""
    },
    JP: {
        name: "Japan",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{12}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.JAPAN"
    },
    JE: {
        name: "Jersey",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /([0-9]|[a-z]|[A-Z]){8}([AaBbCcDd])/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.JERSEY"
    },
    JO: {
        name: "Jordan",
        tinRules: [],
        tooltip: ""
    },
    KZ: {
        name: "Kazakhstan",
        tinRules: [],
        tooltip: ""
    },
    KE: {
        name: "Kenya",
        tinRules: [],
        tooltip: ""
    },
    KI: {
        name: "Kiribati",
        tinRules: [],
        tooltip: ""
    },
    KR: {
        name: "Korea",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{13}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.KOREA"
    },
    KW: {
        name: "Kuwait",
        tinRules: [],
        tooltip: ""
    },
    KG: {
        name: "Kyrgyzstan",
        tinRules: [],
        tooltip: ""
    },
    LA: {
        name: "Lao People's Democratic Republic",
        tinRules: [],
        tooltip: ""
    },
    LV: {
        name: "Latvia",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /([0-9]){6}([0-2])([0-9]){4}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.LATVIA"
    },
    LB: {
        name: "Lebanon",
        tinRules: [],
        tooltip: ""
    },
    LS: {
        name: "Lesotho",
        tinRules: [],
        tooltip: ""
    },
    LR: {
        name: "Liberia",
        tinRules: [],
        tooltip: ""
    },
    LY: {
        name: "Libyan Arab Jamahiriya",
        tinRules: [],
        tooltip: ""
    },
    LI: {
        name: "Liechtenstein",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /([0-9]){12}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.LIECHTENSTEIN"
    },
    LT: {
        name: "Lithuania",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{11}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.LITHUANIA"
    },
    LU: {
        name: "Luxembourg",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{13}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.LUXEMBOURG"
    },
    MO: {
        name: "Macao",
        tinRules: [],
        tooltip: ""
    },
    MK: {
        name: "Macedonia",
        tinRules: [],
        tooltip: ""
    },
    MG: {
        name: "Madagascar",
        tinRules: [],
        tooltip: ""
    },
    MW: {
        name: "Malawi",
        tinRules: [],
        tooltip: ""
    },
    MY: {
        name: "Malaysia",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /(SG|OG)[0-9|a-zA-Z]{11}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.MALAYSIA"
    },
    MV: {
        name: "Maldives",
        tinRules: [],
        tooltip: ""
    },
    ML: {
        name: "Mali",
        tinRules: [],
        tooltip: ""
    },
    MT: {
        name: "Malta",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9|a-zA-Z]{7}[MmGgAaPpLlHhBbZz]/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.MALTA"
    },
    MH: {
        name: "Marshall Islands",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /(04)[0-9]{6}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.MARSHALL.ISLANDS"
    },
    MQ: {
        name: "Martinique",
        tinRules: [],
        tooltip: ""
    },
    MR: {
        name: "Mauritania",
        tinRules: [],
        tooltip: ""
    },
    MU: {
        name: "Mauritius",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[178][0-9]{7}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.MAURITIUS"
    },
    YT: {
        name: "Mayotte",
        tinRules: [],
        tooltip: ""
    },
    MX: {
        name: "Mexico",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[a-zA-Z]{4}[0-9]{6}[0-9|a-zA-Z]{3}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.MEXICO"
    },
    FM: {
        name: "Micronesia, Federated States Of",
        tinRules: [],
        tooltip: ""
    },
    MD: {
        name: "Moldova",
        tinRules: [],
        tooltip: ""
    },
    MC: {
        name: "Monaco",
        tinRules: [],
        tooltip: ""
    },
    MN: {
        name: "Mongolia",
        tinRules: [],
        tooltip: ""
    },
    ME: {
        name: "Montenegro",
        tinRules: [],
        tooltip: ""
    },
    MS: {
        name: "Montserrat",
        tinRules: [],
        tooltip: ""
    },
    MA: {
        name: "Morocco",
        tinRules: [],
        tooltip: ""
    },
    MZ: {
        name: "Mozambique",
        tinRules: [],
        tooltip: ""
    },
    MM: {
        name: "Myanmar",
        tinRules: [],
        tooltip: ""
    },
    NA: {
        name: "Namibia",
        tinRules: [],
        tooltip: ""
    },
    NR: {
        name: "Nauru",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.NAURU"
    },
    NP: {
        name: "Nepal",
        tinRules: [],
        tooltip: ""
    },
    NL: {
        name: "Netherlands",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.NETHERLANDS"
    },
    AN: {
        name: "Netherlands Antilles",
        tinRules: [],
        tooltip: ""
    },
    NC: {
        name: "New Caledonia",
        tinRules: [],
        tooltip: ""
    },
    NZ: {
        name: "New Zealand",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{8,9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.NEW.ZEALAND"
    },
    NI: {
        name: "Nicaragua",
        tinRules: [],
        tooltip: ""
    },
    NE: {
        name: "Niger",
        tinRules: [],
        tooltip: ""
    },
    NG: {
        name: "Nigeria",
        tinRules: [],
        tooltip: ""
    },
    NU: {
        name: "Niue",
        tinRules: [],
        tooltip: ""
    },
    NF: {
        name: "Norfolk Island",
        tinRules: [],
        tooltip: ""
    },
    MP: {
        name: "Northern Mariana Islands",
        tinRules: [],
        tooltip: ""
    },
    NO: {
        name: "Norway",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{11}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.NORWAY"
    },
    OM: {
        name: "Oman",
        tinRules: [],
        tooltip: ""
    },
    PK: {
        name: "Pakistan",
        tinRules: [],
        tooltip: ""
    },
    PW: {
        name: "Palau",
        tinRules: [],
        tooltip: ""
    },
    PS: {
        name: "Palestinian Territory, Occupied",
        tinRules: [],
        tooltip: ""
    },
    PA: {
        name: "Panama",
        tinRules: [],
        tooltip: ""
    },
    PG: {
        name: "Papua New Guinea",
        tinRules: [],
        tooltip: ""
    },
    PY: {
        name: "Paraguay",
        tinRules: [],
        tooltip: ""
    },
    PE: {
        name: "Peru",
        tinRules: [],
        tooltip: ""
    },
    PH: {
        name: "Philippines",
        tinRules: [],
        tooltip: ""
    },
    PN: {
        name: "Pitcairn",
        tinRules: [],
        tooltip: ""
    },
    PL: {
        name: "Poland",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{10,11}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.POLAND"
    },
    PT: {
        name: "Portugal",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[1-4][0-9]{8}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.PORTUGAL"
    },
    PR: {
        name: "Puerto Rico",
        tinRules: [],
        tooltip: ""
    },
    QA: {
        name: "Qatar",
        tinRules: [],
        tooltip: ""
    },
    RE: {
        name: "Reunion",
        tinRules: [],
        tooltip: ""
    },
    RO: {
        name: "Romania",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{13}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.ROMANIA"
    },
    RU: {
        name: "Russian Federation",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{12}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.RUSSIAN.FEDERATION"
    },
    RW: {
        name: "Rwanda",
        tinRules: [],
        tooltip: ""
    },
    BL: {
        name: "Saint Barthelemy",
        tinRules: [],
        tooltip: ""
    },
    SH: {
        name: "Saint Helena",
        tinRules: [],
        tooltip: ""
    },
    KN: {
        name: "Saint Kitts And Nevis",
        tinRules: [],
        tooltip: ""
    },
    LC: {
        name: "Saint Lucia",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{0,6}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SAINT.LUCIA"
    },
    MF: {
        name: "Saint Martin",
        tinRules: [],
        tooltip: ""
    },
    PM: {
        name: "Saint Pierre And Miquelon",
        tinRules: [],
        tooltip: ""
    },
    VC: {
        name: "Saint Vincent And Grenadines",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]+/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SAINT.VINCENT.AND.GRENADINES"
    },
    WS: {
        name: "Samoa",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /(70004)[0-9]*/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SAMOA"
    },
    SM: {
        name: "San Marino",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]+/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SAN.MARINO"
    },
    ST: {
        name: "Sao Tome And Principe",
        tinRules: [],
        tooltip: ""
    },
    SA: {
        name: "Saudi Arabia",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{15}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SAUDI.ARABIA"
    },
    SN: {
        name: "Senegal",
        tinRules: [],
        tooltip: ""
    },
    RS: {
        name: "Serbia",
        tinRules: [],
        tooltip: ""
    },
    SC: {
        name: "Seychelles",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{2}(2)[0-9]{6}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SEYCHELLES"
    },
    SL: {
        name: "Sierra Leone",
        tinRules: [],
        tooltip: ""
    },
    SG: {
        name: "Singapore",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9|A-Za-z][0-9]{6}[0-9|A-Za-z]/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SINGAPORE"
    },
    SK: {
        name: "Slovakia",
        tinRules: [],
        tooltip: ""
    },
    SI: {
        name: "Slovenia",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{8}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SLOVENIA"
    },
    SB: {
        name: "Solomon Islands",
        tinRules: [],
        tooltip: ""
    },
    SO: {
        name: "Somalia",
        tinRules: [],
        tooltip: ""
    },
    ZA: {
        name: "South Africa",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{10}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SOUTH.AFRICA"
    },
    GS: {
        name: "South Georgia And Sandwich Isl.",
        tinRules: [],
        tooltip: ""
    },
    ES: {
        name: "Spain",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{8}[A-Za-z]/);
        }], [function (tinString) {
            return testRegex(tinString, /[LlKk][0-9]{7}[A-Za-z]/);
        }], [function (tinString) {
            return testRegex(tinString, /[MmXxYyZz][0-9]{7}[A-Za-z]/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SPAIN"
    },
    LK: {
        name: "Sri Lanka",
        tinRules: [],
        tooltip: ""
    },
    SD: {
        name: "Sudan",
        tinRules: [],
        tooltip: ""
    },
    SR: {
        name: "Suriname",
        tinRules: [],
        tooltip: ""
    },
    SJ: {
        name: "Svalbard And Jan Mayen",
        tinRules: [],
        tooltip: ""
    },
    SZ: {
        name: "Swaziland",
        tinRules: [],
        tooltip: ""
    },
    SE: {
        name: "Sweden",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{6}(-|\+)[0-9]{4}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SWEDEN"
    },
    CH: {
        name: "Switzerland",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /(756)[0-9]{10}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.SWITZERLAND"
    },
    SY: {
        name: "Syrian Arab Republic",
        tinRules: [],
        tooltip: ""
    },
    TW: {
        name: "Taiwan",
        tinRules: [],
        tooltip: ""
    },
    TJ: {
        name: "Tajikistan",
        tinRules: [],
        tooltip: ""
    },
    TZ: {
        name: "Tanzania",
        tinRules: [],
        tooltip: ""
    },
    TH: {
        name: "Thailand",
        tinRules: [],
        tooltip: ""
    },
    TL: {
        name: "Timor-Leste",
        tinRules: [],
        tooltip: ""
    },
    TG: {
        name: "Togo",
        tinRules: [],
        tooltip: ""
    },
    TK: {
        name: "Tokelau",
        tinRules: [],
        tooltip: ""
    },
    TO: {
        name: "Tonga",
        tinRules: [],
        tooltip: ""
    },
    TT: {
        name: "Trinidad And Tobago",
        tinRules: [],
        tooltip: ""
    },
    TN: {
        name: "Tunisia",
        tinRules: [],
        tooltip: ""
    },
    TR: {
        name: "Turkey",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{10}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.TURKEY"
    },
    TM: {
        name: "Turkmenistan",
        tinRules: [],
        tooltip: ""
    },
    TC: {
        name: "Turks And Caicos Islands",
        tinRules: [],
        tooltip: ""
    },
    TV: {
        name: "Tuvalu",
        tinRules: [],
        tooltip: ""
    },
    UG: {
        name: "Uganda",
        tinRules: [],
        tooltip: ""
    },
    UA: {
        name: "Ukraine",
        tinRules: [],
        tooltip: ""
    },
    AE: {
        name: "United Arab Emirates",
        tinRules: [],
        tooltip: ""
    },
    GB: {
        name: "United Kingdom",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9|A-Za-z]{9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.UNITED.KINGDOM"
    },
    US: {
        name: "United States",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{9}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.UNITED.STATES"
    },
    UM: {
        name: "United States Outlying Islands",
        tinRules: [],
        tooltip: ""
    },
    UY: {
        name: "Uruguay",
        tinRules: [[function (tinString) {
            return testRegex(tinString, /[0-9]{8}/);
        }]],
        tooltip: "CUSTOM.VALIDATION.ERROR.INVALID.TIN.URUGUAY"
    },
    UZ: {
        name: "Uzbekistan",
        tinRules: [],
        tooltip: ""
    },
    VU: {
        name: "Vanuatu",
        tinRules: [],
        tooltip: ""
    },
    VE: {
        name: "Venezuela",
        tinRules: [],
        tooltip: ""
    },
    VN: {
        name: "Viet Nam",
        tinRules: [],
        tooltip: ""
    },
    VG: {
        name: "Virgin Islands, British",
        tinRules: [],
        tooltip: ""
    },
    VI: {
        name: "Virgin Islands, U.S.",
        tinRules: [],
        tooltip: ""
    },
    WF: {
        name: "Wallis And Futuna",
        tinRules: [],
        tooltip: ""
    },
    EH: {
        name: "Western Sahara",
        tinRules: [],
        tooltip: ""
    },
    YE: {
        name: "Yemen",
        tinRules: [],
        tooltip: ""
    },
    ZM: {
        name: "Zambia",
        tinRules: [],
        tooltip: ""
    },
    ZW: {
        name: "Zimbabwe",
        tinRules: [],
        tooltip: ""
    }
};

function testRegex(stringToCheck, regexLiteral) {
    var regex = new RegExp("^" + regexLiteral.source + "$");
    return regex.test(stringToCheck);
}

function modulus11CheckDigit(stringToCheck, checkDigitPosition) {
    var weightingFactors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [10, 9, 8, 7, 6, 5, 4, 3, 2];

    var digitsToCheck = stringToCheck.substring(0, checkDigitPosition).split("");
    var multooltipliedDigits = digitsToCheck.map(function (digit, index) {
        return digit * weightingFactors[weightingFactors.length - digitsToCheck.length + index];
    });
    var multooltipliedDigitsSum = multooltipliedDigits.reduce(function (a, b) {
        return a + b;
    });
    var mod11Result = multooltipliedDigitsSum % 11;
    if (mod11Result === 0) {
        return 0;
    } else {
        return 11 - mod11Result;
    }
}

module.exports = { countriesData: countriesData };