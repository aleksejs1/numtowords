(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/css/app.scss":
/*!**************************!*\
  !*** ./src/css/app.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/app.scss */ "./src/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _numtowords__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./numtowords */ "./src/js/numtowords.js");






var numtowords = new _numtowords__WEBPACK_IMPORTED_MODULE_5__["default"]();

function updateAll() {
  var currency = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#valuta").val();
  var lang = jquery__WEBPACK_IMPORTED_MODULE_4___default()('input[name="lang"]:checked').val();
  var num = jquery__WEBPACK_IMPORTED_MODULE_4___default()("#c").val();
  var res = numtowords.getFull(currency, lang, num);
  jquery__WEBPACK_IMPORTED_MODULE_4___default()("#res").html(res);
  localStorage.setItem('convert_lang', lang);
  localStorage.setItem('convert_currency', currency);
}

function copy() {
  navigator.clipboard.writeText(jquery__WEBPACK_IMPORTED_MODULE_4___default()("#res").html());
  jquery__WEBPACK_IMPORTED_MODULE_4___default()("#alrt").fadeIn();
  setTimeout(function () {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()("#alrt").fadeOut();
  }, 1000);
}

function showHelp() {
  jquery__WEBPACK_IMPORTED_MODULE_4___default()("#help").fadeIn();
  jquery__WEBPACK_IMPORTED_MODULE_4___default()("#help-btn").hide();
}

jquery__WEBPACK_IMPORTED_MODULE_4___default()("#c").on('keyup', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_4___default()("#c").on('change', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_4___default()("#c").on('click', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_4___default()("#c").on('paste', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_4___default()("#valuta").on('change', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_4___default()('input[type=radio][name=lang]').on('change', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_4___default()("#copy-btn").on('click', copy);
jquery__WEBPACK_IMPORTED_MODULE_4___default()("#help-btn").on('click', showHelp);
var sel = '';
var vals = numtowords.getVals();

for (var key in vals) {
  var vala = vals[key].charAt(0).toUpperCase() + vals[key].slice(1);
  sel = sel + '<option value="' + key + '">' + key.toUpperCase() + ' ' + vala + '</option>';
}

;
jquery__WEBPACK_IMPORTED_MODULE_4___default()("#valuta").html(sel);
var lang = localStorage.getItem('convert_lang');

if (lang !== undefined) {
  var langVals = {
    'lv': 0,
    'en': 1,
    'ru': 2
  };
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('input:radio[name="lang"]')[langVals[lang]].checked = true;
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('input[name="lang"]:checked').val();
}

var currency = localStorage.getItem('convert_currency');

if (currency !== undefined) {
  jquery__WEBPACK_IMPORTED_MODULE_4___default()("#valuta").val(currency);
}

/***/ }),

/***/ "./src/js/numtowords.js":
/*!******************************!*\
  !*** ./src/js/numtowords.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.repeat */ "./node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var numbers2words__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! numbers2words */ "./node_modules/numbers2words/build/numbers2words.min.js");
/* harmony import */ var numbers2words__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(numbers2words__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./translations */ "./src/js/translations.js");











var NumToWords = function NumToWords() {
  this.translator = new numbers2words__WEBPACK_IMPORTED_MODULE_8___default.a("EN_US");
  this.translations = new _translations__WEBPACK_IMPORTED_MODULE_9__["default"]();
  this.lang = 'lv';
};

NumToWords.prototype.getVals = function () {
  return this.translations.currencyLv;
};

NumToWords.prototype.units = function (numericUnit) {
  if (this.lang === 'ru') {
    return this.translations.unitNamesRu[numericUnit];
  }

  return this.translations.unitNamesLv[numericUnit];
};

NumToWords.prototype.teens = function (teens) {
  if (this.lang === 'ru') {
    return this.translations.teenNamesRu[teens];
  }

  return this.translations.teenNamesLv[teens];
};

NumToWords.prototype.tenners = function (numericTen) {
  if (numericTen[0] === "0") {
    return this.units(numericTen[1]);
  }

  if (numericTen[0] === "1") {
    return this.teens(numericTen);
  }

  if (this.lang === 'ru') {
    return this.translations.tennerNamesRu[numericTen[0]] + " " + this.units(numericTen[1]);
  }

  return this.translations.tennerNamesLv[numericTen[0]] + " " + this.units(numericTen[1]);
};

NumToWords.prototype.hundreds = function (numericHundred) {
  if (this.lang === 'ru') {
    return this.translations.hundredsNamesRu[numericHundred[0]] + ' ' + this.tenners(numericHundred[1] + numericHundred[2]);
  }

  if (numericHundred[0] === "0") {
    return this.tenners(numericHundred[1] + numericHundred[2]);
  }

  if (numericHundred[0] === "1") {
    return 'viens simts' + ' ' + this.tenners(numericHundred[1] + numericHundred[2]);
  }

  return this.units(numericHundred[0]) + ' simti ' + this.tenners(numericHundred[1] + numericHundred[2]);
};

NumToWords.prototype.genericCaller = function (methodName) {
  var args = [].slice.call(arguments); //converts arguments to an array

  args.shift(); //remove the method name

  return this[methodName].apply(this, args); //call your method with the current scope and pass the arguments
};

NumToWords.prototype.uni = function (num, len, v1, vm, nfm) {
  var milioni = num.substring(0, 3);
  var thousandsci = num.substring(3, len);

  if (milioni === '000') {
    return this.genericCaller(nfm, thousandsci);
  }

  var miljWord = vm;

  if (milioni[2] === "1" && milioni[1] !== "1") {
    miljWord = v1;
  }

  return this.hundreds(milioni) + ' ' + miljWord + ' ' + this.genericCaller(nfm, thousandsci);
};

NumToWords.prototype.thousands = function (num) {
  if (this.lang === 'ru') {
    var vl = 'тысяча';
    var vm = 'тысяч';
  } else {
    var vl = 'tūkstotis';
    var vm = 'tūkstoši';
  }

  return this.uni(num, 6, vl, vm, 'hundreds');
};

NumToWords.prototype.millions = function (num) {
  if (this.lang === 'ru') {
    var vl = 'миллион';
    var vm = 'миллионов';
  } else {
    var vl = 'miljons';
    var vm = 'miljoni';
  }

  return this.uni(num, 9, vl, vm, 'thousands');
};

NumToWords.prototype.billions = function (num) {
  if (this.lang === 'ru') {
    var vl = 'миллиард';
    var vm = 'миллиардов';
  } else {
    var vl = 'miljards';
    var vm = 'miljardi';
  }

  return this.uni(num, 12, vl, vm, 'millions');
};

NumToWords.prototype.trillions = function (num) {
  if (this.lang === 'ru') {
    var vl = 'триллион';
    var vm = 'тоиллионов';
  } else {
    var vl = 'triljons';
    var vm = 'triljoni';
  }

  return this.uni(num, 15, vl, vm, 'billions');
};

NumToWords.prototype.quadrillions = function (num) {
  if (this.lang === 'ru') {
    var vl = 'квадриллион';
    var vm = 'квадриллионов';
  } else {
    var vl = 'kvadriljons';
    var vm = 'kvadriljoni';
  }

  return this.uni(num, 18, vl, vm, 'trillions').trim();
};

NumToWords.prototype.getResult = function (num, cent, eur) {
  var point = num.lastIndexOf('.');
  var coma = num.lastIndexOf(',');
  var pointCount = num.split(".").length - 1;
  var comaCount = num.split(",").length - 1;
  var sep = -1;

  if (point !== -1 && point > coma && pointCount === 1) {
    var sep = point;
  } else if (coma !== -1 && coma > point && comaCount === 1) {
    var sep = coma;
  }

  var length = num.length;
  var un = 'un';
  var comats = 'komats';

  if (this.lang === 'en') {
    un = 'and';
    comats = 'coma';
  } else if (this.lang === 'ru') {
    un = 'и';
    comats = 'кома';
  }

  var centi = ' ' + un + ' 00 ' + cent;

  if (sep !== -1) {
    centi = num.substring(sep + 1, length);
    centi = centi.replace(/[^0-9]/g, "");
    num = num.substring(0, sep);

    if (centi.length === 0) {
      centi = ' ' + un + ' 00 ' + cent;
    } else if (centi.length == 1) {
      centi = ' ' + un + ' ' + centi + '0 ' + cent;
    } else if (centi.length == 2) {
      centi = ' ' + un + ' ' + centi + ' ' + cent;
    } else {
      var centi1 = centi.substring(0, 2);
      var centi2 = centi.substring(2, centi.length);
      centi = ' ' + un + ' ' + centi1 + ', ' + comats + ', ' + centi2 + ' ' + cent;
    }
  }

  var orig = num;
  num = num.replace(/[^0-9]/g, "");

  if (this.lang === 'en') {
    try {
      num = this.translator.toWords(Number(num));
    } catch (e) {
      num = 'A lot of';
    }
  } else if (this.lang === 'ru') {
    num = '0'.repeat(18 - num.length) + num;
    num = this.quadrillions(num);

    if (num === '') {
      num = 'ноль';
    }
  } else {
    num = '0'.repeat(18 - num.length) + num;
    num = this.quadrillions(num);

    if (num === '') {
      num = 'nulle';
    }
  }

  if (this.lang === 'lv') {
    if (orig.length > 1 && orig[orig.length - 1] === "1" && orig[orig.length - 2] !== "1" || orig === "1") {} else {
      if (eur[eur.length - 1] != "o" && eur[eur.length - 1] != "e") {
        eur = eur.substring(0, eur.length - 1) + 'i';
      }

      if (eur[eur.length - 2] === "i") {
        eur = eur.substring(0, eur.length - 1);
      }

      if (eur[eur.length - 1] === "р") {
        eur = eur.substring(0, eur.length - 1) + 'ров';
      }
    }
  } else if (this.lang === 'ru') {
    var elements = eur.split(' ');

    if (elements.length === 1) {
      eur = this.endingsRu(orig, eur);
    } else if (elements.length === 2) {
      eur = this.endingsRu(orig, elements[0]) + ' ' + this.endingsRu(orig, elements[1]);
    } else if (elements.length === 3) {
      eur = this.endingsRu(orig, elements[0]) + ' ' + this.endingsRu(orig, elements[1]) + ' ' + elements[2];
    }
  }

  return num + ' ' + eur.toLowerCase() + centi;
};

NumToWords.prototype.endingsRu = function (number, currency) {
  if (number.length > 1 && number[number.length - 1] === "1" && number[number.length - 2] !== "1" || number === "1") {} else if (number.length > 1 && (number[number.length - 1] === "2" || number[number.length - 1] === "3" || number[number.length - 1] === "4") && number[number.length - 2] !== "1" || number === "1") {
    var endings = {
      'add': {
        "р": "а",
        "т": "а",
        "к": "а",
        "ам": "а"
      },
      'replace': {
        "ира": "иры",
        "ь": "я",
        "ский": "ские",
        "ий": "их",
        "ый": "а",
        "ая": "ие",
        "ф": "ы",
        "на": "ны"
      }
    };

    for (var ending in endings['add']) {
      if (currency.substring(currency.length - ending.length) === ending) {
        return currency + endings['add'][ending];
      }
    }

    for (ending in endings['replace']) {
      if (currency.substring(currency.length - ending.length) === ending) {
        return currency.substring(0, currency.length - ending.length) + endings['replace'][ending];
      }
    }
  } else {
    var endings = {
      'add': {
        "р": "ов",
        "т": "ов",
        "к": "ов"
      },
      'replace': {
        "ь": "ей",
        "ий": "их",
        "ый": "ых",
        "ая": "их",
        "а": ""
      }
    };

    for (var ending in endings['add']) {
      if (currency.substring(currency.length - ending.length) === ending) {
        return currency + endings['add'][ending];
      }
    }

    for (ending in endings['replace']) {
      if (currency.substring(currency.length - ending.length) === ending) {
        return currency.substring(0, currency.length - ending.length) + endings['replace'][ending];
      }
    }
  }

  return currency;
};

NumToWords.prototype.getFull = function (valuta, lang, num) {
  this.lang = lang;
  var eden = {};
  var sm = {};

  if (this.lang === 'en') {
    eden = this.translations.currencyEn;
    sm = this.translations.hundredthsEn;
  } else if (this.lang === 'ru') {
    eden = this.translations.currencyRu;
    sm = this.translations.hundredthsRu;
  } else {
    eden = this.translations.currencyLv;
    sm = this.translations.hundredthsLv;
  }

  var smres = '(1/100) ' + valuta.toUpperCase();

  if (hasOwnProperty.call(sm, valuta)) {
    smres = sm[valuta];
  }

  var res = this.getResult(num, smres, eden[valuta]);
  res = res.charAt(0).toUpperCase() + res.slice(1);
  return res;
};

/* harmony default export */ __webpack_exports__["default"] = (NumToWords);

/***/ }),

/***/ "./src/js/translations.js":
/*!********************************!*\
  !*** ./src/js/translations.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var WordTranslations = function WordTranslations() {
  this.currencyLv = {
    "eur": "euro",
    "usd": "dolārs",
    "gbp": "Lielbritānijas mārciņa",
    "rub": "Krievijas rublis",
    "pln": "Polijas zlots",
    "kzt": "Kazahstānas tenge",
    "chf": "Šveices franks",
    "aed": "Apvienoto Arābu Emirātu dirhams",
    "dkk": "Dānijas krona",
    "sek": "Zviedrijas krona",
    "nok": "Norvēģijas krona",
    "bgn": "Bulgārijas leva",
    "huf": "Ungārijas forints",
    "try": "Turcijas lira",
    "all": "Albānijas leks",
    "hrk": "Horvātijas kuna",
    "czk": "Čehijas krona",
    "gel": "Gruzijas lari",
    "lkr": "Šrilankas rūpija",
    "tnd": "Tunisijas dinārs",
    "ils": "Izraēlas šekels",
    "jod": "Jordānijas dinārs",
    "byn": "Baltkrievijas rublis",
    "egp": "Ēģiptes mārciņa",
    "uah": "Ukrainas grivna",
    "cny": "Ķīnas juaņa",
    "thb": "Taizemes bats",
    "vnd": "Vjetnamas dongs",
    "php": "Filipīnu peso",
    "mad": "Marokas dirhams",
    "aud": "Austrālijas dolārs",
    "ars": "Argentīnas peso",
    "jpy": "Japānas jēna",
    "idr": "Indonēzijas rūpija",
    "isk": "Islandes krona",
    "amd": "Armēnijas drams",
    "ron": "Rumānijas leja",
    "sgd": "Singapūras dolārs",
    "sbp": "Skotijas mārciņa",
    "cad": "Kanādas dolārs",
    "brl": "Brazīlijas reāls",
    "zar": "Dienvidāfrikas rends",
    "inr": "Indijas rūpija",
    "rsd": "Serbijas dinārs",
    "nzd": "Jaunzēlandes dolārs",
    "myr": "Malaizijas ringits",
    "mur": "Maurīcijas salas rūpija",
    "hkd": "Honkongas dolārs",
    "krw": "Dienvidkorejas vona",
    "mxn": "Meksikas peso",
    "mkd": "Maķedonijas denārs",
    "dop": "Dominikānas peso",
    "kes": "Kenijas šiliņš",
    "dem": "Vācijas marka",
    "eek": "Igaunijas krona",
    "ltl": "Lietuvas lits",
    "lvl": "Latvijas lats"
  };
  this.hundredthsLv = {
    'eur': 'centi',
    'usd': 'centi',
    'gbp': 'peni',
    'rub': 'kapeikās',
    'pln': 'groši',
    'lvl': 'santimi',
    'kzt': 'tijīni',
    'chf': 'rapeni',
    'aed': 'fili',
    'dkk': 'ēri',
    'sek': 'ēri',
    'nok': 'ēri'
  };
  this.unitNamesLv = {
    "0": "",
    "1": "viens",
    "2": "divi",
    "3": "trīs",
    "4": "četri",
    "5": "pieci",
    "6": "seši",
    "7": "septiņi",
    "8": "astoņi",
    "9": "deviņi"
  };
  this.teenNamesLv = {
    "10": "desmit",
    "11": "vienpadsmit",
    "12": "divpadsmit",
    "13": "trīspadsmit",
    "14": "četrpadsmit",
    "15": "piecpadsmit",
    "16": "sešpadsmit",
    "17": "septiņpadsmit",
    "18": "astoņpadsmit",
    "19": "deviņpadsmit"
  };
  this.tennerNamesLv = {
    "2": "divdesmit",
    "3": "trīsdesmit",
    "4": "četrdesmit",
    "5": "piecdesmit",
    "6": "sešdesmit",
    "7": "septiņdesmit",
    "8": "astoņdesmit",
    "9": "deviņdesmit"
  };
  this.currencyRu = {
    "eur": "Евро",
    "usd": "Доллар",
    "gbp": "Английский фунт стерлингов",
    "rub": "Российский рубль",
    "pln": "Польский злотый",
    "kzt": "Казахстанский тенге",
    "chf": "Швейцарский франк",
    "aed": "Дирхам ОАЭ",
    "dkk": "Датская крона",
    "sek": "Шведская крона",
    "nok": "Норвежская крона",
    "bgn": "Болгарский лев",
    "huf": "венгерский форинт",
    "try": "Турецкая лира",
    "all": "Албанский лек",
    "hrk": "Xорватская куна",
    "czk": "Чешская крона",
    "gel": "Грузинский лари",
    "lkr": "Шри-ланкийская рупия",
    "tnd": "Тунисский динар",
    "ils": "Израильский шекель",
    "jod": "Иорданский динар",
    "byn": "Белорусский рубль",
    "egp": "Египетский фунт",
    "uah": "Украинская гривна",
    "cny": "Китайский юань",
    "thb": "Таиландский бат",
    "vnd": "Вьетнамский донг",
    "php": "Филиппинское песо",
    "mad": "Марокканский дирхам",
    "aud": "Австралийский доллар",
    "ars": "Аргентинское песо",
    "jpy": "Японская иена",
    "idr": "Индонезийская рупия",
    "isk": "Исландская крона",
    "amd": "Армянский драм",
    "ron": "Румынская лея",
    "sgd": "Сингапурский доллар",
    "sbp": "Шотландский фунт",
    "cad": "Канадский доллар",
    "brl": "Бразильский реал",
    "zar": "Южноафриканский рэнд",
    "inr": "Индийская рупия",
    "rsd": "Сербский динар",
    "nzd": "Новозеландский доллар",
    "myr": "Mалайзийский ринггит",
    "mur": "Маврикийская рупия",
    "hkd": "Гонконгский доллар",
    "krw": "Южнокорейская вона",
    "mxn": "Мексиканское песо",
    "mkd": "Македонский динар",
    "dop": "Доминиканское песо",
    "kes": "Кенийский шиллинг",
    "dem": "Немецкая марка",
    "eek": "Эстонская крона",
    "ltl": "Литовский лит",
    "lvl": "Латвийский лат"
  };
  this.hundredthsRu = {
    'eur': 'центов',
    'usd': 'центов',
    'gbp': 'пени',
    'rub': 'копеек',
    'pln': 'грош',
    'lvl': 'сантимов',
    'kzt': 'тиын',
    'chf': 'раппенов',
    'aed': 'филс',
    'dkk': 'эре',
    'sek': 'эре',
    'nok': 'эре'
  };
  this.unitNamesRu = {
    "0": "",
    "1": "один",
    "2": "два",
    "3": "три",
    "4": "четыре",
    "5": "пять",
    "6": "шесть",
    "7": "семь",
    "8": "восемь",
    "9": "девять"
  };
  this.teenNamesRu = {
    "10": "десять",
    "11": "одинадцать",
    "12": "двенадцать",
    "13": "тренадцать",
    "14": "четырнадцать",
    "15": "пятнадцать",
    "16": "шеснадцать",
    "17": "семнадцать",
    "18": "восемнадцать",
    "19": "девятнадцать"
  };
  this.tennerNamesRu = {
    "2": "двадцать",
    "3": "тридцать",
    "4": "сорок",
    "5": "пяьдесят",
    "6": "шестьдесят",
    "7": "семьдесят",
    "8": "восемьдесят",
    "9": "девяносто"
  };
  this.hundredsNamesRu = {
    "": "",
    "0": "",
    "1": "сто",
    "2": "двести",
    "3": "триста",
    "4": "четыреста",
    "5": "пятьсот",
    "6": "шестьсот",
    "7": "семьсот",
    "8": "восемьсот",
    "9": "девятьсот"
  };
  this.currencyEn = {
    "eur": "euro",
    "usd": "dollar",
    "gbp": "british pound",
    "rub": "russian ruble",
    "pln": "polish zloty",
    "bgn": "bulgarian lev",
    "huf": "hungarian forint",
    "try": "turkish lira",
    "hrk": "croatian kuna",
    "czk": "czech koruna",
    "gel": "georgian lari",
    "all": "albanian lek",
    "lkr": "sri lankan rupee",
    "sek": "swedish krona",
    "thb": "thai baht",
    "tnd": "tunisian dinar",
    "ils": "israeli sheqel",
    "chf": "swiss franc",
    "nok": "norwegian krone",
    "dkk": "danish krone",
    "aed": "united arab emirates dirham",
    "cad": "canadian dollar",
    "byn": "belarusian new ruble",
    "aud": "australian dollar",
    "jpy": "japanese yen",
    "cny": "chinese yuan",
    "uah": "ukrainian hryvnia",
    "isk": "iceland krona",
    "nzd": "new zealand dollar",
    "krw": "south korean won",
    "ron": "romanian leu",
    "sgd": "singapore dollar",
    "idr": "indonesian rupiah",
    "hkd": "hong kong dollar",
    "sbp": "scottish pound",
    "zar": "south african rand",
    "mxn": "mexican peso",
    "mkd": "macedonian dinar",
    "brl": "brazilian real",
    "egp": "egyptian pound",
    "ars": "argentine peso",
    "kes": "kenya shilling",
    "myr": "malaysian ringgit",
    "mur": "mauritian rupee",
    "php": "philippine peso",
    "inr": "indian rupee",
    "kzt": "kazakhstan tenge",
    "amd": "armenian dram",
    "mad": "moroccan dirham",
    "rsd": "serbian dinar",
    "vnd": "vietnamese dong",
    "dop": "dominican peso",
    "jod": "jordanian dinar",
    "lvl": "latvian lats",
    "ltl": "lithuanian litas",
    "eek": "estonian kroon",
    "dem": "german mark"
  };
  this.hundredthsEn = {
    'eur': 'cents',
    'usd': 'cents',
    'gbp': 'pence',
    'rub': 'kopeks',
    'pln': 'grosz',
    'lvl': 'santims',
    'kzt': 'tıyns',
    'chf': 'rappens',
    'aed': 'fils',
    'dkk': 'ore',
    'sek': 'ore',
    'nok': 'ore'
  };
};

/* harmony default export */ __webpack_exports__["default"] = (WordTranslations);

/***/ })

},[["./src/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJudW10b3dvcmRzIiwiTnVtVG9Xb3JkcyIsInVwZGF0ZUFsbCIsImN1cnJlbmN5IiwiJCIsInZhbCIsImxhbmciLCJudW0iLCJyZXMiLCJnZXRGdWxsIiwiaHRtbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZmFkZUluIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJzaG93SGVscCIsImhpZGUiLCJvbiIsInNlbCIsInZhbHMiLCJnZXRWYWxzIiwia2V5IiwidmFsYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwibGFuZ1ZhbHMiLCJjaGVja2VkIiwidHJhbnNsYXRvciIsIlQyVyIsInRyYW5zbGF0aW9ucyIsIldvcmRUcmFuc2xhdGlvbnMiLCJwcm90b3R5cGUiLCJjdXJyZW5jeUx2IiwidW5pdHMiLCJudW1lcmljVW5pdCIsInVuaXROYW1lc1J1IiwidW5pdE5hbWVzTHYiLCJ0ZWVucyIsInRlZW5OYW1lc1J1IiwidGVlbk5hbWVzTHYiLCJ0ZW5uZXJzIiwibnVtZXJpY1RlbiIsInRlbm5lck5hbWVzUnUiLCJ0ZW5uZXJOYW1lc0x2IiwiaHVuZHJlZHMiLCJudW1lcmljSHVuZHJlZCIsImh1bmRyZWRzTmFtZXNSdSIsImdlbmVyaWNDYWxsZXIiLCJtZXRob2ROYW1lIiwiYXJncyIsImNhbGwiLCJhcmd1bWVudHMiLCJzaGlmdCIsImFwcGx5IiwidW5pIiwibGVuIiwidjEiLCJ2bSIsIm5mbSIsIm1pbGlvbmkiLCJzdWJzdHJpbmciLCJ0aG91c2FuZHNjaSIsIm1pbGpXb3JkIiwidGhvdXNhbmRzIiwidmwiLCJtaWxsaW9ucyIsImJpbGxpb25zIiwidHJpbGxpb25zIiwicXVhZHJpbGxpb25zIiwidHJpbSIsImdldFJlc3VsdCIsImNlbnQiLCJldXIiLCJwb2ludCIsImxhc3RJbmRleE9mIiwiY29tYSIsInBvaW50Q291bnQiLCJzcGxpdCIsImxlbmd0aCIsImNvbWFDb3VudCIsInNlcCIsInVuIiwiY29tYXRzIiwiY2VudGkiLCJyZXBsYWNlIiwiY2VudGkxIiwiY2VudGkyIiwib3JpZyIsInRvV29yZHMiLCJOdW1iZXIiLCJlIiwicmVwZWF0IiwiZWxlbWVudHMiLCJlbmRpbmdzUnUiLCJ0b0xvd2VyQ2FzZSIsIm51bWJlciIsImVuZGluZ3MiLCJlbmRpbmciLCJ2YWx1dGEiLCJlZGVuIiwic20iLCJjdXJyZW5jeUVuIiwiaHVuZHJlZHRoc0VuIiwiY3VycmVuY3lSdSIsImh1bmRyZWR0aHNSdSIsImh1bmRyZWR0aHNMdiIsInNtcmVzIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsVUFBVSxHQUFHLElBQUlDLG1EQUFKLEVBQWpCOztBQUVBLFNBQVNDLFNBQVQsR0FBcUI7QUFDakIsTUFBSUMsUUFBUSxHQUFHQyw2Q0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxHQUFiLEVBQWY7QUFDQSxNQUFJQyxJQUFJLEdBQUdGLDZDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ0MsR0FBaEMsRUFBWDtBQUNBLE1BQUlFLEdBQUcsR0FBR0gsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUMsR0FBUixFQUFWO0FBQ0EsTUFBSUcsR0FBRyxHQUFHUixVQUFVLENBQUNTLE9BQVgsQ0FBbUJOLFFBQW5CLEVBQTZCRyxJQUE3QixFQUFtQ0MsR0FBbkMsQ0FBVjtBQUNBSCwrQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVTSxJQUFWLENBQWVGLEdB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QUF3Q2QsV0FBTyxnQkF4Q087QUF5Q2QsV0FBTyxnQkF6Q087QUEwQ2QsV0FBTyxnQkExQ087QUEyQ2QsV0FBTyxtQkEzQ087QUE0Q2QsV0FBTyxpQkE1Q087QUE2Q2QsV0FBTyxpQkE3Q087QUE4Q2QsV0FBTyxjQTlDTztBQStDZCxXQUFPLGtCQS9DTztBQWdEZCxXQUFPLGVBaERPO0FBaURkLFdBQU8saUJBakRPO0FBa0RkLFdBQU8sZUFsRE87QUFtRGQsV0FBTyxpQkFuRE87QUFvRGQsV0FBTyxnQkFwRE87QUFxRGQsV0FBTyxpQkFyRE87QUFzRGQsV0FBTyxjQXRETztBQXVEZCxXQUFPLGtCQXZETztBQXdEZCxXQUFPLGdCQXhETztBQXlEZCxXQUFPO0FBekRPLEdBQWxCO0FBNERBLE9BQUtDLFlBQUwsR0FBb0I7QUFDaEIsV0FBTyxPQURTO0FBRWhCLFdBQU8sT0FGUztBQUdoQixXQUFPLE9BSFM7QUFJaEIsV0FBTyxRQUpTO0FBS2hCLFdBQU8sT0FMUztBQU1oQixXQUFPLFNBTlM7QUFPaEIsV0FBTyxPQVBTO0FBUWhCLFdBQU8sU0FSUztBQVNoQixXQUFPLE1BVFM7QUFVaEIsV0FBTyxLQVZTO0FBV2hCLFdBQU8sS0FYUztBQVloQixXQUFPO0FBWlMsR0FBcEI7QUFjSCxDQXpURDs7QUEyVGV4RSwrRUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAnXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IE51bVRvV29yZHMgZnJvbSBcIi4vbnVtdG93b3Jkc1wiO1xyXG5cclxudmFyIG51bXRvd29yZHMgPSBuZXcgTnVtVG9Xb3JkcygpO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQWxsKCkge1xyXG4gICAgdmFyIGN1cnJlbmN5ID0gJChcIiN2YWx1dGFcIikudmFsKCk7XHJcbiAgICB2YXIgbGFuZyA9ICQoJ2lucHV0W25hbWU9XCJsYW5nXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgIHZhciBudW0gPSAkKFwiI2NcIikudmFsKCk7XHJcbiAgICB2YXIgcmVzID0gbnVtdG93b3Jkcy5nZXRGdWxsKGN1cnJlbmN5LCBsYW5nLCBudW0pO1xyXG4gICAgJChcIiNyZXNcIikuaHRtbChyZXMpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnZlcnRfbGFuZycsIGxhbmcpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnZlcnRfY3VycmVuY3knLCBjdXJyZW5jeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHkoKSB7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCgkKFwiI3Jlc1wiKS5odG1sKCkpO1xyXG4gICAgJChcIiNhbHJ0XCIpLmZhZGVJbigpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHskKFwiI2FscnRcIikuZmFkZU91dCgpO30sIDEwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SGVscCgpIHtcclxuICAgICQoXCIjaGVscFwiKS5mYWRlSW4oKTtcclxuICAgICQoXCIjaGVscC1idG5cIikuaGlkZSgpO1xyXG59XHJcblxyXG4kKFwiI2NcIikub24oJ2tleXVwJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ2NsaWNrJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdwYXN0ZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjdmFsdXRhXCIpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPWxhbmddJykub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY29weS1idG5cIikub24oJ2NsaWNrJywgY29weSk7XHJcbiQoXCIjaGVscC1idG5cIikub24oJ2NsaWNrJywgc2hvd0hlbHApO1xyXG5cclxudmFyIHNlbCA9ICcnO1xyXG52YXIgdmFscyA9IG51bXRvd29yZHMuZ2V0VmFscygpO1xyXG5mb3IgKHZhciBrZXkgaW4gdmFscykge1xyXG4gICAgdmFyIHZhbGEgPSB2YWxzW2tleV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWxzW2tleV0uc2xpY2UoMSk7XHJcbiAgICBzZWwgPSBzZWwgKyAnPG9wdGlvbiB2YWx1ZT1cIicra2V5KydcIj4nK2tleS50b1VwcGVyQ2FzZSgpKycgJyt2YWxhKyc8L29wdGlvbj4nO1xyXG59O1xyXG4kKFwiI3ZhbHV0YVwiKS5odG1sKHNlbCk7XHJcbnZhciBsYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnZlcnRfbGFuZycpO1xyXG5pZiAobGFuZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICB2YXIgbGFuZ1ZhbHMgPSB7XHJcbiAgICAgICAgJ2x2JzogMCxcclxuICAgICAgICAnZW4nOiAxLFxyXG4gICAgICAgICdydSc6IDJcclxuICAgIH07XHJcblxyXG4gICAgJCgnaW5wdXQ6cmFkaW9bbmFtZT1cImxhbmdcIl0nKVtsYW5nVmFsc1tsYW5nXV0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAkKCdpbnB1dFtuYW1lPVwibGFuZ1wiXTpjaGVja2VkJykudmFsKCk7XHJcbn1cclxudmFyIGN1cnJlbmN5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnZlcnRfY3VycmVuY3knKTtcclxuaWYgKGN1cnJlbmN5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICQoXCIjdmFsdXRhXCIpLnZhbChjdXJyZW5jeSk7XHJcbn1cclxuIiwiaW1wb3J0IFQyVyBmcm9tIFwibnVtYmVyczJ3b3Jkc1wiO1xyXG5pbXBvcnQgV29yZFRyYW5zbGF0aW9ucyBmcm9tIFwiLi90cmFuc2xhdGlvbnNcIjtcclxuXHJcbnZhciBOdW1Ub1dvcmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy50cmFuc2xhdG9yID0gbmV3IFQyVyhcIkVOX1VTXCIpO1xyXG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSBuZXcgV29yZFRyYW5zbGF0aW9ucygpO1xyXG4gICAgdGhpcy5sYW5nID0gJ2x2JztcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0VmFscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUx2O1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bml0cyA9IGZ1bmN0aW9uIChudW1lcmljVW5pdCkge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy51bml0TmFtZXNSdVtudW1lcmljVW5pdF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLnVuaXROYW1lc0x2W251bWVyaWNVbml0XTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudGVlbnMgPSBmdW5jdGlvbiAodGVlbnMpIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMudGVlbk5hbWVzUnVbdGVlbnNdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy50ZWVuTmFtZXNMdlt0ZWVuc107XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnRlbm5lcnMgPSBmdW5jdGlvbiAobnVtZXJpY1Rlbikge1xyXG4gICAgaWYgKG51bWVyaWNUZW5bMF0gPT09IFwiMFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5pdHMobnVtZXJpY1RlblsxXSk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIxXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZWVucyhudW1lcmljVGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLnRlbm5lck5hbWVzUnVbbnVtZXJpY1RlblswXV0gKyBcIiBcIiArIHRoaXMudW5pdHMobnVtZXJpY1RlblsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLnRlbm5lck5hbWVzTHZbbnVtZXJpY1RlblswXV0gKyBcIiBcIiArIHRoaXMudW5pdHMobnVtZXJpY1RlblsxXSk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmh1bmRyZWRzID0gZnVuY3Rpb24gKG51bWVyaWNIdW5kcmVkKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWRzTmFtZXNSdVtudW1lcmljSHVuZHJlZFswXV0gKyAnICcgKyB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY0h1bmRyZWRbMF0gPT09IFwiMFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljSHVuZHJlZFswXSA9PT0gXCIxXCIpIHtcclxuICAgICAgICByZXR1cm4gJ3ZpZW5zIHNpbXRzJyArICcgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaXRzKG51bWVyaWNIdW5kcmVkWzBdKSArICcgc2ltdGkgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxufVxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZW5lcmljQ2FsbGVyID0gZnVuY3Rpb24obWV0aG9kTmFtZSkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7ICAvL2NvbnZlcnRzIGFyZ3VtZW50cyB0byBhbiBhcnJheVxyXG4gICAgYXJncy5zaGlmdCgpOyAvL3JlbW92ZSB0aGUgbWV0aG9kIG5hbWVcclxuICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsIGFyZ3MpOyAgLy9jYWxsIHlvdXIgbWV0aG9kIHdpdGggdGhlIGN1cnJlbnQgc2NvcGUgYW5kIHBhc3MgdGhlIGFyZ3VtZW50c1xyXG59O1xyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudW5pID0gZnVuY3Rpb24gKG51bSwgbGVuLCB2MSwgdm0sIG5mbSkge1xyXG4gICAgdmFyIG1pbGlvbmkgPSBudW0uc3Vic3RyaW5nKDAsIDMpO1xyXG4gICAgdmFyIHRob3VzYW5kc2NpID0gbnVtLnN1YnN0cmluZygzLCBsZW4pO1xyXG5cclxuICAgIGlmIChtaWxpb25pID09PSAnMDAwJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyaWNDYWxsZXIobmZtLHRob3VzYW5kc2NpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWlsaldvcmQgPSB2bTtcclxuICAgIGlmIChtaWxpb25pWzJdID09PSBcIjFcIiAmJiBtaWxpb25pWzFdICE9PSBcIjFcIikge1xyXG4gICAgICAgIG1pbGpXb3JkID0gdjFcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh1bmRyZWRzKG1pbGlvbmkpICsgJyAnK21pbGpXb3JkKycgJyArIHRoaXMuZ2VuZXJpY0NhbGxlcihuZm0sdGhvdXNhbmRzY2kpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS50aG91c2FuZHMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ9GC0YvRgdGP0YfQsCc7XHJcbiAgICAgICAgdmFyIHZtID0gJ9GC0YvRgdGP0YcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdmwgPSAndMWra3N0b3Rpcyc7XHJcbiAgICAgICAgdmFyIHZtID0gJ3TFq2tzdG/FoWknO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudW5pKG51bSwgNiwgdmwsIHZtLCAnaHVuZHJlZHMnKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUubWlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ9C80LjQu9C70LjQvtC9JztcclxuICAgICAgICB2YXIgdm0gPSAn0LzQuNC70LvQuNC+0L3QvtCyJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ21pbGpvbnMnO1xyXG4gICAgICAgIHZhciB2bSA9ICdtaWxqb25pJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDksIHZsLCB2bSwgJ3Rob3VzYW5kcycpXHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmJpbGxpb25zID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHZhciB2bCA9ICfQvNC40LvQu9C40LDRgNC0JztcclxuICAgICAgICB2YXIgdm0gPSAn0LzQuNC70LvQuNCw0YDQtNC+0LInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdmwgPSAnbWlsamFyZHMnO1xyXG4gICAgICAgIHZhciB2bSA9ICdtaWxqYXJkaSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCAxMiwgdmwsIHZtLCAnbWlsbGlvbnMnKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudHJpbGxpb25zID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHZhciB2bCA9ICfRgtGA0LjQu9C70LjQvtC9JztcclxuICAgICAgICB2YXIgdm0gPSAn0YLQvtC40LvQu9C40L7QvdC+0LInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdmwgPSAndHJpbGpvbnMnO1xyXG4gICAgICAgIHZhciB2bSA9ICd0cmlsam9uaSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCAxNSwgdmwsIHZtLCAnYmlsbGlvbnMnKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUucXVhZHJpbGxpb25zID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHZhciB2bCA9ICfQutCy0LDQtNGA0LjQu9C70LjQvtC9JztcclxuICAgICAgICB2YXIgdm0gPSAn0LrQstCw0LTRgNC40LvQu9C40L7QvdC+0LInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdmwgPSAna3ZhZHJpbGpvbnMnO1xyXG4gICAgICAgIHZhciB2bSA9ICdrdmFkcmlsam9uaSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCAxOCwgdmwsIHZtLCAndHJpbGxpb25zJykudHJpbSgpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRSZXN1bHQgPSBmdW5jdGlvbiAobnVtLCBjZW50LCBldXIpIHtcclxuICAgIHZhciBwb2ludCA9IG51bS5sYXN0SW5kZXhPZignLicpO1xyXG4gICAgdmFyIGNvbWEgPSBudW0ubGFzdEluZGV4T2YoJywnKTtcclxuICAgIHZhciBwb2ludENvdW50ID0gKG51bS5zcGxpdChcIi5cIikubGVuZ3RoIC0gMSlcclxuICAgIHZhciBjb21hQ291bnQgPSAobnVtLnNwbGl0KFwiLFwiKS5sZW5ndGggLSAxKVxyXG4gICAgdmFyIHNlcCA9IC0xO1xyXG4gICAgaWYgKHBvaW50ICE9PSAtMSAmJiBwb2ludCA+IGNvbWEgJiYgcG9pbnRDb3VudCA9PT0gMSkge1xyXG4gICAgICAgIHZhciBzZXAgPSBwb2ludDtcclxuICAgIH0gZWxzZSBpZiAoY29tYSAhPT0gLTEgJiYgY29tYSA+IHBvaW50ICYmIGNvbWFDb3VudCA9PT0gMSkge1xyXG4gICAgICAgIHZhciBzZXAgPSBjb21hO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsZW5ndGggPSBudW0ubGVuZ3RoO1xyXG4gICAgdmFyIHVuID0gJ3VuJ1xyXG4gICAgdmFyIGNvbWF0cyA9ICdrb21hdHMnO1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIHVuID0gJ2FuZCdcclxuICAgICAgICBjb21hdHMgPSAnY29tYSc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHVuID0gJ9C4J1xyXG4gICAgICAgIGNvbWF0cyA9ICfQutC+0LzQsCc7XHJcbiAgICB9XHJcbiAgICB2YXIgY2VudGkgPSAnICcrdW4rJyAwMCAnICsgY2VudDtcclxuICAgIGlmIChzZXAgIT09IC0xKSB7XHJcbiAgICAgICAgY2VudGkgPSBudW0uc3Vic3RyaW5nKHNlcCsxLCBsZW5ndGgpO1xyXG4gICAgICAgIGNlbnRpID0gY2VudGkucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcbiAgICAgICAgbnVtID0gbnVtLnN1YnN0cmluZygwLCBzZXApO1xyXG4gICAgICAgIGlmIChjZW50aS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAwMCAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aSsnMCAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aSsnICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjZW50aTEgPSBjZW50aS5zdWJzdHJpbmcoMCwyKTtcclxuICAgICAgICAgICAgdmFyIGNlbnRpMiA9IGNlbnRpLnN1YnN0cmluZygyLGNlbnRpLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aTEgKyAnLCAnICsgY29tYXRzICsnLCAnKyBjZW50aTIrJyAnICsgY2VudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9yaWcgPSBudW07XHJcbiAgICBudW0gPSBudW0ucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcblxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG51bSA9IHRoaXMudHJhbnNsYXRvci50b1dvcmRzKE51bWJlcihudW0pKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgbnVtID0gJ0EgbG90IG9mJztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIG51bSA9ICcwJy5yZXBlYXQoMTggLSBudW0ubGVuZ3RoKSArIG51bTtcclxuICAgICAgICBudW0gPSB0aGlzLnF1YWRyaWxsaW9ucyhudW0pO1xyXG4gICAgICAgIGlmIChudW0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgIG51bSA9ICfQvdC+0LvRjCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBudW0gPSAnMCcucmVwZWF0KDE4IC0gbnVtLmxlbmd0aCkgKyBudW07XHJcbiAgICAgICAgbnVtID0gdGhpcy5xdWFkcmlsbGlvbnMobnVtKTtcclxuICAgICAgICBpZiAobnVtID09PSAnJykge1xyXG4gICAgICAgICAgICBudW0gPSAnbnVsbGUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnbHYnKSB7XHJcbiAgICAgICAgaWYgKChvcmlnLmxlbmd0aCA+IDEgJiYgb3JpZ1tvcmlnLmxlbmd0aC0xXSA9PT0gXCIxXCIgJiYgb3JpZ1tvcmlnLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG9yaWcgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGV1cltldXIubGVuZ3RoLTFdICE9IFwib1wiICYmIGV1cltldXIubGVuZ3RoLTFdICE9IFwiZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKSArICdpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMl0gPT09IFwiaVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMV0gPT09IFwi0YBcIikge1xyXG4gICAgICAgICAgICAgICAgZXVyID0gZXVyLnN1YnN0cmluZygwLCBldXIubGVuZ3RoIC0gMSkgKyAn0YDQvtCyJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZXVyLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBldXIgPSB0aGlzLmVuZGluZ3NSdShvcmlnLCBldXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGV1ciA9IHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzBdKSArICcgJyArIHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzFdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICBldXIgPSB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1swXSkgKyAnICcgKyB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1sxXSkgKyAnICcgKyBlbGVtZW50c1syXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bSArICcgJyArIGV1ci50b0xvd2VyQ2FzZSgpICsgY2VudGk7XHJcbn1cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZW5kaW5nc1J1ID0gZnVuY3Rpb24gKG51bWJlciwgY3VycmVuY3kpIHtcclxuICAgIGlmICgobnVtYmVyLmxlbmd0aCA+IDEgJiYgbnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiMVwiICYmIG51bWJlcltudW1iZXIubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgbnVtYmVyID09PSBcIjFcIikge1xyXG4gICAgfSBlbHNlIGlmICgobnVtYmVyLmxlbmd0aCA+IDEgJiYgKG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjJcIiB8fCBudW1iZXJbbnVtYmVyLmxlbmd0aC0xXSA9PT0gXCIzXCIgfHwgbnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiNFwiKSAmJiBudW1iZXJbbnVtYmVyLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG51bWJlciA9PT0gXCIxXCIpIHtcclxuICAgICAgICB2YXIgZW5kaW5ncyA9IHsnYWRkJzp7XCLRgFwiOiBcItCwXCIsIFwi0YJcIjogXCLQsFwiLCBcItC6XCI6IFwi0LBcIiwgXCLQsNC8XCI6IFwi0LBcIn0sICdyZXBsYWNlJzoge1wi0LjRgNCwXCI6IFwi0LjRgNGLXCIsIFwi0YxcIjogXCLRj1wiLCBcItGB0LrQuNC5XCI6XCLRgdC60LjQtVwiLCBcItC40LlcIjogXCLQuNGFXCIsIFwi0YvQuVwiOiBcItCwXCIsIFwi0LDRj1wiOiBcItC40LVcIiwgXCLRhFwiOiBcItGLXCIsIFwi0L3QsFwiOiBcItC90YtcIn19O1xyXG4gICAgICAgIGZvciAodmFyIGVuZGluZyBpbiBlbmRpbmdzWydhZGQnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeSArIGVuZGluZ3NbJ2FkZCddW2VuZGluZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChlbmRpbmcgaW4gZW5kaW5nc1sncmVwbGFjZSddKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5zdWJzdHJpbmcoY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgPT09IGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LnN1YnN0cmluZygwLCBjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSArIGVuZGluZ3NbJ3JlcGxhY2UnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgZW5kaW5ncyA9IHsnYWRkJzp7XCLRgFwiOiBcItC+0LJcIiwgXCLRglwiOiBcItC+0LJcIiwgXCLQulwiOiBcItC+0LJcIn0sICdyZXBsYWNlJzoge1wi0YxcIjogXCLQtdC5XCIsIFwi0LjQuVwiOiBcItC40YVcIiwgXCLRi9C5XCI6IFwi0YvRhVwiLCBcItCw0Y9cIjogXCLQuNGFXCIsIFwi0LBcIjogXCJcIn19O1xyXG4gICAgICAgIGZvciAodmFyIGVuZGluZyBpbiBlbmRpbmdzWydhZGQnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeSArIGVuZGluZ3NbJ2FkZCddW2VuZGluZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChlbmRpbmcgaW4gZW5kaW5nc1sncmVwbGFjZSddKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5zdWJzdHJpbmcoY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgPT09IGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LnN1YnN0cmluZygwLCBjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSArIGVuZGluZ3NbJ3JlcGxhY2UnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyZW5jeTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0RnVsbCA9IGZ1bmN0aW9uICh2YWx1dGEsIGxhbmcsIG51bSkge1xyXG4gICAgdGhpcy5sYW5nID0gbGFuZztcclxuICAgIHZhciBlZGVuID0ge1xyXG4gICAgfTtcclxuICAgIHZhciBzbSA9IHtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUVuO1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc0VuO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICBlZGVuID0gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lSdTtcclxuICAgICAgICBzbSA9IHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWR0aHNSdTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWRlbiA9IHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5THY7XHJcbiAgICAgICAgc20gPSB0aGlzLnRyYW5zbGF0aW9ucy5odW5kcmVkdGhzTHY7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBzbXJlcyA9ICcoMS8xMDApICcgKyB2YWx1dGEudG9VcHBlckNhc2UoKTtcclxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNtLCB2YWx1dGEpKSB7XHJcbiAgICAgICAgc21yZXMgPSBzbVt2YWx1dGFdO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcyA9IHRoaXMuZ2V0UmVzdWx0KG51bSwgc21yZXMsIGVkZW5bdmFsdXRhXSk7XHJcbiAgICByZXMgPSByZXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXMuc2xpY2UoMSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtVG9Xb3JkcztcclxuIiwidmFyIFdvcmRUcmFuc2xhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmN1cnJlbmN5THYgPSB7XHJcbiAgICAgICAgXCJldXJcIjogXCJldXJvXCIsXHJcbiAgICAgICAgXCJ1c2RcIjogXCJkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJnYnBcIjogXCJMaWVsYnJpdMSBbmlqYXMgbcSBcmNpxYZhXCIsXHJcbiAgICAgICAgXCJydWJcIjogXCJLcmlldmlqYXMgcnVibGlzXCIsXHJcbiAgICAgICAgXCJwbG5cIjogXCJQb2xpamFzIHpsb3RzXCIsXHJcbiAgICAgICAgXCJrenRcIjogXCJLYXphaHN0xIFuYXMgdGVuZ2VcIixcclxuICAgICAgICBcImNoZlwiOiBcIsWgdmVpY2VzIGZyYW5rc1wiLFxyXG4gICAgICAgIFwiYWVkXCI6IFwiQXB2aWVub3RvIEFyxIFidSBFbWlyxIF0dSBkaXJoYW1zXCIsXHJcbiAgICAgICAgXCJka2tcIjogXCJExIFuaWphcyBrcm9uYVwiLFxyXG4gICAgICAgIFwic2VrXCI6IFwiWnZpZWRyaWphcyBrcm9uYVwiLFxyXG4gICAgICAgIFwibm9rXCI6IFwiTm9ydsSTxKNpamFzIGtyb25hXCIsXHJcbiAgICAgICAgXCJiZ25cIjogXCJCdWxnxIFyaWphcyBsZXZhXCIsXHJcbiAgICAgICAgXCJodWZcIjogXCJVbmfEgXJpamFzIGZvcmludHNcIixcclxuICAgICAgICBcInRyeVwiOiBcIlR1cmNpamFzIGxpcmFcIixcclxuICAgICAgICBcImFsbFwiOiBcIkFsYsSBbmlqYXMgbGVrc1wiLFxyXG4gICAgICAgIFwiaHJrXCI6IFwiSG9ydsSBdGlqYXMga3VuYVwiLFxyXG4gICAgICAgIFwiY3prXCI6IFwixIxlaGlqYXMga3JvbmFcIixcclxuICAgICAgICBcImdlbFwiOiBcIkdydXppamFzIGxhcmlcIixcclxuICAgICAgICBcImxrclwiOiBcIsWgcmlsYW5rYXMgcsWrcGlqYVwiLFxyXG4gICAgICAgIFwidG5kXCI6IFwiVHVuaXNpamFzIGRpbsSBcnNcIixcclxuICAgICAgICBcImlsc1wiOiBcIkl6cmHEk2xhcyDFoWVrZWxzXCIsXHJcbiAgICAgICAgXCJqb2RcIjogXCJKb3JkxIFuaWphcyBkaW7EgXJzXCIsXHJcbiAgICAgICAgXCJieW5cIjogXCJCYWx0a3JpZXZpamFzIHJ1Ymxpc1wiLFxyXG4gICAgICAgIFwiZWdwXCI6IFwixJLEo2lwdGVzIG3EgXJjacWGYVwiLFxyXG4gICAgICAgIFwidWFoXCI6IFwiVWtyYWluYXMgZ3Jpdm5hXCIsXHJcbiAgICAgICAgXCJjbnlcIjogXCLEtsSrbmFzIGp1YcWGYVwiLFxyXG4gICAgICAgIFwidGhiXCI6IFwiVGFpemVtZXMgYmF0c1wiLFxyXG4gICAgICAgIFwidm5kXCI6IFwiVmpldG5hbWFzIGRvbmdzXCIsXHJcbiAgICAgICAgXCJwaHBcIjogXCJGaWxpcMSrbnUgcGVzb1wiLFxyXG4gICAgICAgIFwibWFkXCI6IFwiTWFyb2thcyBkaXJoYW1zXCIsXHJcbiAgICAgICAgXCJhdWRcIjogXCJBdXN0csSBbGlqYXMgZG9sxIFyc1wiLFxyXG4gICAgICAgIFwiYXJzXCI6IFwiQXJnZW50xKtuYXMgcGVzb1wiLFxyXG4gICAgICAgIFwianB5XCI6IFwiSmFwxIFuYXMgasSTbmFcIixcclxuICAgICAgICBcImlkclwiOiBcIkluZG9uxJN6aWphcyByxatwaWphXCIsXHJcbiAgICAgICAgXCJpc2tcIjogXCJJc2xhbmRlcyBrcm9uYVwiLFxyXG4gICAgICAgIFwiYW1kXCI6IFwiQXJtxJNuaWphcyBkcmFtc1wiLFxyXG4gICAgICAgIFwicm9uXCI6IFwiUnVtxIFuaWphcyBsZWphXCIsXHJcbiAgICAgICAgXCJzZ2RcIjogXCJTaW5nYXDFq3JhcyBkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJzYnBcIjogXCJTa290aWphcyBtxIFyY2nFhmFcIixcclxuICAgICAgICBcImNhZFwiOiBcIkthbsSBZGFzIGRvbMSBcnNcIixcclxuICAgICAgICBcImJybFwiOiBcIkJyYXrEq2xpamFzIHJlxIFsc1wiLFxyXG4gICAgICAgIFwiemFyXCI6IFwiRGllbnZpZMSBZnJpa2FzIHJlbmRzXCIsXHJcbiAgICAgICAgXCJpbnJcIjogXCJJbmRpamFzIHLFq3BpamFcIixcclxuICAgICAgICBcInJzZFwiOiBcIlNlcmJpamFzIGRpbsSBcnNcIixcclxuICAgICAgICBcIm56ZFwiOiBcIkphdW56xJNsYW5kZXMgZG9sxIFyc1wiLFxyXG4gICAgICAgIFwibXlyXCI6IFwiTWFsYWl6aWphcyByaW5naXRzXCIsXHJcbiAgICAgICAgXCJtdXJcIjogXCJNYXVyxKtjaWphcyBzYWxhcyByxatwaWphXCIsXHJcbiAgICAgICAgXCJoa2RcIjogXCJIb25rb25nYXMgZG9sxIFyc1wiLFxyXG4gICAgICAgIFwia3J3XCI6IFwiRGllbnZpZGtvcmVqYXMgdm9uYVwiLFxyXG4gICAgICAgIFwibXhuXCI6IFwiTWVrc2lrYXMgcGVzb1wiLFxyXG4gICAgICAgIFwibWtkXCI6IFwiTWHEt2Vkb25pamFzIGRlbsSBcnNcIixcclxuICAgICAgICBcImRvcFwiOiBcIkRvbWluaWvEgW5hcyBwZXNvXCIsXHJcbiAgICAgICAgXCJrZXNcIjogXCJLZW5pamFzIMWhaWxpxYbFoVwiLFxyXG4gICAgICAgIFwiZGVtXCI6IFwiVsSBY2lqYXMgbWFya2FcIixcclxuICAgICAgICBcImVla1wiOiBcIklnYXVuaWphcyBrcm9uYVwiLFxyXG4gICAgICAgIFwibHRsXCI6IFwiTGlldHV2YXMgbGl0c1wiLFxyXG4gICAgICAgIFwibHZsXCI6IFwiTGF0dmlqYXMgbGF0c1wiLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmh1bmRyZWR0aHNMdiA9IHtcclxuICAgICAgICAnZXVyJzogJ2NlbnRpJyxcclxuICAgICAgICAndXNkJzogJ2NlbnRpJyxcclxuICAgICAgICAnZ2JwJzogJ3BlbmknLFxyXG4gICAgICAgICdydWInOiAna2FwZWlrxIFzJyxcclxuICAgICAgICAncGxuJzogJ2dyb8WhaScsXHJcbiAgICAgICAgJ2x2bCc6ICdzYW50aW1pJyxcclxuICAgICAgICAna3p0JzogJ3RpasSrbmknLFxyXG4gICAgICAgICdjaGYnOiAncmFwZW5pJyxcclxuICAgICAgICAnYWVkJzogJ2ZpbGknLFxyXG4gICAgICAgICdka2snOiAnxJNyaScsXHJcbiAgICAgICAgJ3Nlayc6ICfEk3JpJyxcclxuICAgICAgICAnbm9rJzogJ8STcmknLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnVuaXROYW1lc0x2ID0ge1xyXG4gICAgICAgIFwiMFwiOiBcIlwiLFxyXG4gICAgICAgIFwiMVwiOiBcInZpZW5zXCIsXHJcbiAgICAgICAgXCIyXCI6IFwiZGl2aVwiLFxyXG4gICAgICAgIFwiM1wiOiBcInRyxKtzXCIsXHJcbiAgICAgICAgXCI0XCI6IFwixI1ldHJpXCIsXHJcbiAgICAgICAgXCI1XCI6IFwicGllY2lcIixcclxuICAgICAgICBcIjZcIjogXCJzZcWhaVwiLFxyXG4gICAgICAgIFwiN1wiOiBcInNlcHRpxYZpXCIsXHJcbiAgICAgICAgXCI4XCI6IFwiYXN0b8WGaVwiLFxyXG4gICAgICAgIFwiOVwiOiBcImRldmnFhmlcIlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRlZW5OYW1lc0x2ID0ge1xyXG4gICAgICAgIFwiMTBcIjogXCJkZXNtaXRcIixcclxuICAgICAgICBcIjExXCI6IFwidmllbnBhZHNtaXRcIixcclxuICAgICAgICBcIjEyXCI6IFwiZGl2cGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTNcIjogXCJ0csSrc3BhZHNtaXRcIixcclxuICAgICAgICBcIjE0XCI6IFwixI1ldHJwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxNVwiOiBcInBpZWNwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxNlwiOiBcInNlxaFwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxN1wiOiBcInNlcHRpxYZwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxOFwiOiBcImFzdG/FhnBhZHNtaXRcIixcclxuICAgICAgICBcIjE5XCI6IFwiZGV2acWGcGFkc21pdFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGVubmVyTmFtZXNMdiA9IHtcclxuICAgICAgICBcIjJcIjogXCJkaXZkZXNtaXRcIixcclxuICAgICAgICBcIjNcIjogXCJ0csSrc2Rlc21pdFwiLFxyXG4gICAgICAgIFwiNFwiOiBcIsSNZXRyZGVzbWl0XCIsXHJcbiAgICAgICAgXCI1XCI6IFwicGllY2Rlc21pdFwiLFxyXG4gICAgICAgIFwiNlwiOiBcInNlxaFkZXNtaXRcIixcclxuICAgICAgICBcIjdcIjogXCJzZXB0acWGZGVzbWl0XCIsXHJcbiAgICAgICAgXCI4XCI6IFwiYXN0b8WGZGVzbWl0XCIsXHJcbiAgICAgICAgXCI5XCI6IFwiZGV2acWGZGVzbWl0XCJcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jdXJyZW5jeVJ1ID0ge1xyXG4gICAgICAgIFwiZXVyXCI6IFwi0JXQstGA0L5cIixcclxuICAgICAgICBcInVzZFwiOiBcItCU0L7Qu9C70LDRgFwiLFxyXG4gICAgICAgIFwiZ2JwXCI6IFwi0JDQvdCz0LvQuNC50YHQutC40Lkg0YTRg9C90YIg0YHRgtC10YDQu9C40L3Qs9C+0LJcIixcclxuICAgICAgICBcInJ1YlwiOiBcItCg0L7RgdGB0LjQudGB0LrQuNC5INGA0YPQsdC70YxcIixcclxuICAgICAgICBcInBsblwiOiBcItCf0L7Qu9GM0YHQutC40Lkg0LfQu9C+0YLRi9C5XCIsXHJcbiAgICAgICAgXCJrenRcIjogXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LjQuSDRgtC10L3Qs9C1XCIsXHJcbiAgICAgICAgXCJjaGZcIjogXCLQqNCy0LXQudGG0LDRgNGB0LrQuNC5INGE0YDQsNC90LpcIixcclxuICAgICAgICBcImFlZFwiOiBcItCU0LjRgNGF0LDQvCDQntCQ0K1cIixcclxuICAgICAgICBcImRra1wiOiBcItCU0LDRgtGB0LrQsNGPINC60YDQvtC90LBcIixcclxuICAgICAgICBcInNla1wiOiBcItCo0LLQtdC00YHQutCw0Y8g0LrRgNC+0L3QsFwiLFxyXG4gICAgICAgIFwibm9rXCI6IFwi0J3QvtGA0LLQtdC20YHQutCw0Y8g0LrRgNC+0L3QsFwiLFxyXG4gICAgICAgIFwiYmduXCI6IFwi0JHQvtC70LPQsNGA0YHQutC40Lkg0LvQtdCyXCIsXHJcbiAgICAgICAgXCJodWZcIjogXCLQstC10L3Qs9C10YDRgdC60LjQuSDRhNC+0YDQuNC90YJcIixcclxuICAgICAgICBcInRyeVwiOiBcItCi0YPRgNC10YbQutCw0Y8g0LvQuNGA0LBcIixcclxuICAgICAgICBcImFsbFwiOiBcItCQ0LvQsdCw0L3RgdC60LjQuSDQu9C10LpcIixcclxuICAgICAgICBcImhya1wiOiBcIljQvtGA0LLQsNGC0YHQutCw0Y8g0LrRg9C90LBcIixcclxuICAgICAgICBcImN6a1wiOiBcItCn0LXRiNGB0LrQsNGPINC60YDQvtC90LBcIixcclxuICAgICAgICBcImdlbFwiOiBcItCT0YDRg9C30LjQvdGB0LrQuNC5INC70LDRgNC4XCIsXHJcbiAgICAgICAgXCJsa3JcIjogXCLQqNGA0Lgt0LvQsNC90LrQuNC50YHQutCw0Y8g0YDRg9C/0LjRj1wiLFxyXG4gICAgICAgIFwidG5kXCI6IFwi0KLRg9C90LjRgdGB0LrQuNC5INC00LjQvdCw0YBcIixcclxuICAgICAgICBcImlsc1wiOiBcItCY0LfRgNCw0LjQu9GM0YHQutC40Lkg0YjQtdC60LXQu9GMXCIsXHJcbiAgICAgICAgXCJqb2RcIjogXCLQmNC+0YDQtNCw0L3RgdC60LjQuSDQtNC40L3QsNGAXCIsXHJcbiAgICAgICAgXCJieW5cIjogXCLQkdC10LvQvtGA0YPRgdGB0LrQuNC5INGA0YPQsdC70YxcIixcclxuICAgICAgICBcImVncFwiOiBcItCV0LPQuNC/0LXRgtGB0LrQuNC5INGE0YPQvdGCXCIsXHJcbiAgICAgICAgXCJ1YWhcIjogXCLQo9C60YDQsNC40L3RgdC60LDRjyDQs9GA0LjQstC90LBcIixcclxuICAgICAgICBcImNueVwiOiBcItCa0LjRgtCw0LnRgdC60LjQuSDRjtCw0L3RjFwiLFxyXG4gICAgICAgIFwidGhiXCI6IFwi0KLQsNC40LvQsNC90LTRgdC60LjQuSDQsdCw0YJcIixcclxuICAgICAgICBcInZuZFwiOiBcItCS0YzQtdGC0L3QsNC80YHQutC40Lkg0LTQvtC90LNcIixcclxuICAgICAgICBcInBocFwiOiBcItCk0LjQu9C40L/Qv9C40L3RgdC60L7QtSDQv9C10YHQvlwiLFxyXG4gICAgICAgIFwibWFkXCI6IFwi0JzQsNGA0L7QutC60LDQvdGB0LrQuNC5INC00LjRgNGF0LDQvFwiLFxyXG4gICAgICAgIFwiYXVkXCI6IFwi0JDQstGB0YLRgNCw0LvQuNC50YHQutC40Lkg0LTQvtC70LvQsNGAXCIsXHJcbiAgICAgICAgXCJhcnNcIjogXCLQkNGA0LPQtdC90YLQuNC90YHQutC+0LUg0L/QtdGB0L5cIixcclxuICAgICAgICBcImpweVwiOiBcItCv0L/QvtC90YHQutCw0Y8g0LjQtdC90LBcIixcclxuICAgICAgICBcImlkclwiOiBcItCY0L3QtNC+0L3QtdC30LjQudGB0LrQsNGPINGA0YPQv9C40Y9cIixcclxuICAgICAgICBcImlza1wiOiBcItCY0YHQu9Cw0L3QtNGB0LrQsNGPINC60YDQvtC90LBcIixcclxuICAgICAgICBcImFtZFwiOiBcItCQ0YDQvNGP0L3RgdC60LjQuSDQtNGA0LDQvFwiLFxyXG4gICAgICAgIFwicm9uXCI6IFwi0KDRg9C80YvQvdGB0LrQsNGPINC70LXRj1wiLFxyXG4gICAgICAgIFwic2dkXCI6IFwi0KHQuNC90LPQsNC/0YPRgNGB0LrQuNC5INC00L7Qu9C70LDRgFwiLFxyXG4gICAgICAgIFwic2JwXCI6IFwi0KjQvtGC0LvQsNC90LTRgdC60LjQuSDRhNGD0L3RglwiLFxyXG4gICAgICAgIFwiY2FkXCI6IFwi0JrQsNC90LDQtNGB0LrQuNC5INC00L7Qu9C70LDRgFwiLFxyXG4gICAgICAgIFwiYnJsXCI6IFwi0JHRgNCw0LfQuNC70YzRgdC60LjQuSDRgNC10LDQu1wiLFxyXG4gICAgICAgIFwiemFyXCI6IFwi0K7QttC90L7QsNGE0YDQuNC60LDQvdGB0LrQuNC5INGA0Y3QvdC0XCIsXHJcbiAgICAgICAgXCJpbnJcIjogXCLQmNC90LTQuNC50YHQutCw0Y8g0YDRg9C/0LjRj1wiLFxyXG4gICAgICAgIFwicnNkXCI6IFwi0KHQtdGA0LHRgdC60LjQuSDQtNC40L3QsNGAXCIsXHJcbiAgICAgICAgXCJuemRcIjogXCLQndC+0LLQvtC30LXQu9Cw0L3QtNGB0LrQuNC5INC00L7Qu9C70LDRgFwiLFxyXG4gICAgICAgIFwibXlyXCI6IFwiTdCw0LvQsNC50LfQuNC50YHQutC40Lkg0YDQuNC90LPQs9C40YJcIixcclxuICAgICAgICBcIm11clwiOiBcItCc0LDQstGA0LjQutC40LnRgdC60LDRjyDRgNGD0L/QuNGPXCIsXHJcbiAgICAgICAgXCJoa2RcIjogXCLQk9C+0L3QutC+0L3Qs9GB0LrQuNC5INC00L7Qu9C70LDRgFwiLFxyXG4gICAgICAgIFwia3J3XCI6IFwi0K7QttC90L7QutC+0YDQtdC50YHQutCw0Y8g0LLQvtC90LBcIixcclxuICAgICAgICBcIm14blwiOiBcItCc0LXQutGB0LjQutCw0L3RgdC60L7QtSDQv9C10YHQvlwiLFxyXG4gICAgICAgIFwibWtkXCI6IFwi0JzQsNC60LXQtNC+0L3RgdC60LjQuSDQtNC40L3QsNGAXCIsXHJcbiAgICAgICAgXCJkb3BcIjogXCLQlNC+0LzQuNC90LjQutCw0L3RgdC60L7QtSDQv9C10YHQvlwiLFxyXG4gICAgICAgIFwia2VzXCI6IFwi0JrQtdC90LjQudGB0LrQuNC5INGI0LjQu9C70LjQvdCzXCIsXHJcbiAgICAgICAgXCJkZW1cIjogXCLQndC10LzQtdGG0LrQsNGPINC80LDRgNC60LBcIixcclxuICAgICAgICBcImVla1wiOiBcItCt0YHRgtC+0L3RgdC60LDRjyDQutGA0L7QvdCwXCIsXHJcbiAgICAgICAgXCJsdGxcIjogXCLQm9C40YLQvtCy0YHQutC40Lkg0LvQuNGCXCIsXHJcbiAgICAgICAgXCJsdmxcIjogXCLQm9Cw0YLQstC40LnRgdC60LjQuSDQu9Cw0YJcIixcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5odW5kcmVkdGhzUnUgPSB7XHJcbiAgICAgICAgJ2V1cic6ICfRhtC10L3RgtC+0LInLFxyXG4gICAgICAgICd1c2QnOiAn0YbQtdC90YLQvtCyJyxcclxuICAgICAgICAnZ2JwJzogJ9C/0LXQvdC4JyxcclxuICAgICAgICAncnViJzogJ9C60L7Qv9C10LXQuicsXHJcbiAgICAgICAgJ3Bsbic6ICfQs9GA0L7RiCcsXHJcbiAgICAgICAgJ2x2bCc6ICfRgdCw0L3RgtC40LzQvtCyJyxcclxuICAgICAgICAna3p0JzogJ9GC0LjRi9C9JyxcclxuICAgICAgICAnY2hmJzogJ9GA0LDQv9C/0LXQvdC+0LInLFxyXG4gICAgICAgICdhZWQnOiAn0YTQuNC70YEnLFxyXG4gICAgICAgICdka2snOiAn0Y3RgNC1JyxcclxuICAgICAgICAnc2VrJzogJ9GN0YDQtScsXHJcbiAgICAgICAgJ25vayc6ICfRjdGA0LUnLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnVuaXROYW1lc1J1ID0ge1xyXG4gICAgICAgIFwiMFwiOiBcIlwiLFxyXG4gICAgICAgIFwiMVwiOiBcItC+0LTQuNC9XCIsXHJcbiAgICAgICAgXCIyXCI6IFwi0LTQstCwXCIsXHJcbiAgICAgICAgXCIzXCI6IFwi0YLRgNC4XCIsXHJcbiAgICAgICAgXCI0XCI6IFwi0YfQtdGC0YvRgNC1XCIsXHJcbiAgICAgICAgXCI1XCI6IFwi0L/Rj9GC0YxcIixcclxuICAgICAgICBcIjZcIjogXCLRiNC10YHRgtGMXCIsXHJcbiAgICAgICAgXCI3XCI6IFwi0YHQtdC80YxcIixcclxuICAgICAgICBcIjhcIjogXCLQstC+0YHQtdC80YxcIixcclxuICAgICAgICBcIjlcIjogXCLQtNC10LLRj9GC0YxcIlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRlZW5OYW1lc1J1ID0ge1xyXG4gICAgICAgIFwiMTBcIjogXCLQtNC10YHRj9GC0YxcIixcclxuICAgICAgICBcIjExXCI6IFwi0L7QtNC40L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjEyXCI6IFwi0LTQstC10L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjEzXCI6IFwi0YLRgNC10L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjE0XCI6IFwi0YfQtdGC0YvRgNC90LDQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCIxNVwiOiBcItC/0Y/RgtC90LDQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCIxNlwiOiBcItGI0LXRgdC90LDQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCIxN1wiOiBcItGB0LXQvNC90LDQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCIxOFwiOiBcItCy0L7RgdC10LzQvdCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiMTlcIjogXCLQtNC10LLRj9GC0L3QsNC00YbQsNGC0YxcIlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRlbm5lck5hbWVzUnUgPSB7XHJcbiAgICAgICAgXCIyXCI6IFwi0LTQstCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiM1wiOiBcItGC0YDQuNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjRcIjogXCLRgdC+0YDQvtC6XCIsXHJcbiAgICAgICAgXCI1XCI6IFwi0L/Rj9GM0LTQtdGB0Y/RglwiLFxyXG4gICAgICAgIFwiNlwiOiBcItGI0LXRgdGC0YzQtNC10YHRj9GCXCIsXHJcbiAgICAgICAgXCI3XCI6IFwi0YHQtdC80YzQtNC10YHRj9GCXCIsXHJcbiAgICAgICAgXCI4XCI6IFwi0LLQvtGB0LXQvNGM0LTQtdGB0Y/RglwiLFxyXG4gICAgICAgIFwiOVwiOiBcItC00LXQstGP0L3QvtGB0YLQvlwiXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaHVuZHJlZHNOYW1lc1J1ID0ge1xyXG4gICAgICAgIFwiXCI6IFwiXCIsXHJcbiAgICAgICAgXCIwXCI6IFwiXCIsXHJcbiAgICAgICAgXCIxXCI6IFwi0YHRgtC+XCIsXHJcbiAgICAgICAgXCIyXCI6IFwi0LTQstC10YHRgtC4XCIsXHJcbiAgICAgICAgXCIzXCI6IFwi0YLRgNC40YHRgtCwXCIsXHJcbiAgICAgICAgXCI0XCI6IFwi0YfQtdGC0YvRgNC10YHRgtCwXCIsXHJcbiAgICAgICAgXCI1XCI6IFwi0L/Rj9GC0YzRgdC+0YJcIixcclxuICAgICAgICBcIjZcIjogXCLRiNC10YHRgtGM0YHQvtGCXCIsXHJcbiAgICAgICAgXCI3XCI6IFwi0YHQtdC80YzRgdC+0YJcIixcclxuICAgICAgICBcIjhcIjogXCLQstC+0YHQtdC80YzRgdC+0YJcIixcclxuICAgICAgICBcIjlcIjogXCLQtNC10LLRj9GC0YzRgdC+0YJcIlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbmN5RW4gPSB7XHJcbiAgICAgICAgXCJldXJcIjogXCJldXJvXCIsXHJcbiAgICAgICAgXCJ1c2RcIjogXCJkb2xsYXJcIixcclxuICAgICAgICBcImdicFwiOiBcImJyaXRpc2ggcG91bmRcIixcclxuICAgICAgICBcInJ1YlwiOiBcInJ1c3NpYW4gcnVibGVcIixcclxuICAgICAgICBcInBsblwiOiBcInBvbGlzaCB6bG90eVwiLFxyXG4gICAgICAgIFwiYmduXCI6IFwiYnVsZ2FyaWFuIGxldlwiLFxyXG4gICAgICAgIFwiaHVmXCI6IFwiaHVuZ2FyaWFuIGZvcmludFwiLFxyXG4gICAgICAgIFwidHJ5XCI6IFwidHVya2lzaCBsaXJhXCIsXHJcbiAgICAgICAgXCJocmtcIjogXCJjcm9hdGlhbiBrdW5hXCIsXHJcbiAgICAgICAgXCJjemtcIjogXCJjemVjaCBrb3J1bmFcIixcclxuICAgICAgICBcImdlbFwiOiBcImdlb3JnaWFuIGxhcmlcIixcclxuICAgICAgICBcImFsbFwiOiBcImFsYmFuaWFuIGxla1wiLFxyXG4gICAgICAgIFwibGtyXCI6IFwic3JpIGxhbmthbiBydXBlZVwiLFxyXG4gICAgICAgIFwic2VrXCI6IFwic3dlZGlzaCBrcm9uYVwiLFxyXG4gICAgICAgIFwidGhiXCI6IFwidGhhaSBiYWh0XCIsXHJcbiAgICAgICAgXCJ0bmRcIjogXCJ0dW5pc2lhbiBkaW5hclwiLFxyXG4gICAgICAgIFwiaWxzXCI6IFwiaXNyYWVsaSBzaGVxZWxcIixcclxuICAgICAgICBcImNoZlwiOiBcInN3aXNzIGZyYW5jXCIsXHJcbiAgICAgICAgXCJub2tcIjogXCJub3J3ZWdpYW4ga3JvbmVcIixcclxuICAgICAgICBcImRra1wiOiBcImRhbmlzaCBrcm9uZVwiLFxyXG4gICAgICAgIFwiYWVkXCI6IFwidW5pdGVkIGFyYWIgZW1pcmF0ZXMgZGlyaGFtXCIsXHJcbiAgICAgICAgXCJjYWRcIjogXCJjYW5hZGlhbiBkb2xsYXJcIixcclxuICAgICAgICBcImJ5blwiOiBcImJlbGFydXNpYW4gbmV3IHJ1YmxlXCIsXHJcbiAgICAgICAgXCJhdWRcIjogXCJhdXN0cmFsaWFuIGRvbGxhclwiLFxyXG4gICAgICAgIFwianB5XCI6IFwiamFwYW5lc2UgeWVuXCIsXHJcbiAgICAgICAgXCJjbnlcIjogXCJjaGluZXNlIHl1YW5cIixcclxuICAgICAgICBcInVhaFwiOiBcInVrcmFpbmlhbiBocnl2bmlhXCIsXHJcbiAgICAgICAgXCJpc2tcIjogXCJpY2VsYW5kIGtyb25hXCIsXHJcbiAgICAgICAgXCJuemRcIjogXCJuZXcgemVhbGFuZCBkb2xsYXJcIixcclxuICAgICAgICBcImtyd1wiOiBcInNvdXRoIGtvcmVhbiB3b25cIixcclxuICAgICAgICBcInJvblwiOiBcInJvbWFuaWFuIGxldVwiLFxyXG4gICAgICAgIFwic2dkXCI6IFwic2luZ2Fwb3JlIGRvbGxhclwiLFxyXG4gICAgICAgIFwiaWRyXCI6IFwiaW5kb25lc2lhbiBydXBpYWhcIixcclxuICAgICAgICBcImhrZFwiOiBcImhvbmcga29uZyBkb2xsYXJcIixcclxuICAgICAgICBcInNicFwiOiBcInNjb3R0aXNoIHBvdW5kXCIsXHJcbiAgICAgICAgXCJ6YXJcIjogXCJzb3V0aCBhZnJpY2FuIHJhbmRcIixcclxuICAgICAgICBcIm14blwiOiBcIm1leGljYW4gcGVzb1wiLFxyXG4gICAgICAgIFwibWtkXCI6IFwibWFjZWRvbmlhbiBkaW5hclwiLFxyXG4gICAgICAgIFwiYnJsXCI6IFwiYnJhemlsaWFuIHJlYWxcIixcclxuICAgICAgICBcImVncFwiOiBcImVneXB0aWFuIHBvdW5kXCIsXHJcbiAgICAgICAgXCJhcnNcIjogXCJhcmdlbnRpbmUgcGVzb1wiLFxyXG4gICAgICAgIFwia2VzXCI6IFwia2VueWEgc2hpbGxpbmdcIixcclxuICAgICAgICBcIm15clwiOiBcIm1hbGF5c2lhbiByaW5nZ2l0XCIsXHJcbiAgICAgICAgXCJtdXJcIjogXCJtYXVyaXRpYW4gcnVwZWVcIixcclxuICAgICAgICBcInBocFwiOiBcInBoaWxpcHBpbmUgcGVzb1wiLFxyXG4gICAgICAgIFwiaW5yXCI6IFwiaW5kaWFuIHJ1cGVlXCIsXHJcbiAgICAgICAgXCJrenRcIjogXCJrYXpha2hzdGFuIHRlbmdlXCIsXHJcbiAgICAgICAgXCJhbWRcIjogXCJhcm1lbmlhbiBkcmFtXCIsXHJcbiAgICAgICAgXCJtYWRcIjogXCJtb3JvY2NhbiBkaXJoYW1cIixcclxuICAgICAgICBcInJzZFwiOiBcInNlcmJpYW4gZGluYXJcIixcclxuICAgICAgICBcInZuZFwiOiBcInZpZXRuYW1lc2UgZG9uZ1wiLFxyXG4gICAgICAgIFwiZG9wXCI6IFwiZG9taW5pY2FuIHBlc29cIixcclxuICAgICAgICBcImpvZFwiOiBcImpvcmRhbmlhbiBkaW5hclwiLFxyXG4gICAgICAgIFwibHZsXCI6IFwibGF0dmlhbiBsYXRzXCIsXHJcbiAgICAgICAgXCJsdGxcIjogXCJsaXRodWFuaWFuIGxpdGFzXCIsXHJcbiAgICAgICAgXCJlZWtcIjogXCJlc3RvbmlhbiBrcm9vblwiLFxyXG4gICAgICAgIFwiZGVtXCI6IFwiZ2VybWFuIG1hcmtcIixcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5odW5kcmVkdGhzRW4gPSB7XHJcbiAgICAgICAgJ2V1cic6ICdjZW50cycsXHJcbiAgICAgICAgJ3VzZCc6ICdjZW50cycsXHJcbiAgICAgICAgJ2dicCc6ICdwZW5jZScsXHJcbiAgICAgICAgJ3J1Yic6ICdrb3Bla3MnLFxyXG4gICAgICAgICdwbG4nOiAnZ3Jvc3onLFxyXG4gICAgICAgICdsdmwnOiAnc2FudGltcycsXHJcbiAgICAgICAgJ2t6dCc6ICd0xLF5bnMnLFxyXG4gICAgICAgICdjaGYnOiAncmFwcGVucycsXHJcbiAgICAgICAgJ2FlZCc6ICdmaWxzJyxcclxuICAgICAgICAnZGtrJzogJ29yZScsXHJcbiAgICAgICAgJ3Nlayc6ICdvcmUnLFxyXG4gICAgICAgICdub2snOiAnb3JlJyxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRUcmFuc2xhdGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=