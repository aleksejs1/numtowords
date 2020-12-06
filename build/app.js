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
      eur = this.endingsRu(orig, elements[0]) + ' ' + elements[1] + ' ' + this.endingsRu(orig, elements[2]);
    }
  }

  return num + ' ' + eur.toLowerCase() + centi;
};

NumToWords.prototype.endingsRu = function (number, currency) {
  if (number.length > 1 && number[number.length - 1] === "1" && number[number.length - 2] !== "1" || number === "1") {} else if (number.length > 1 && (number[number.length - 1] === "2" || number[number.length - 1] === "3" || number[number.length - 1] === "4") && number[number.length - 2] !== "1" || number === "1") {
    if (currency[currency.length - 1] === "р" || currency[currency.length - 1] === "т" || currency[currency.length - 1] === "к") {
      currency = currency + 'а';
    } else if (currency[currency.length - 1] === "ь") {
      currency = currency.substring(0, currency.length - 1) + 'я';
    } else if (currency[currency.length - 1] === "й" && currency[currency.length - 2] === "и") {
      currency = currency.substring(0, currency.length - 2) + 'их';
    } else if (currency[currency.length - 1] === "й" && currency[currency.length - 2] === "ы") {
      currency = currency.substring(0, currency.length - 2) + 'ых';
    } else if (currency[currency.length - 1] === "я" && currency[currency.length - 2] === "а") {
      currency = currency.substring(0, currency.length - 2) + 'ие';
    } else if (currency[currency.length - 1] === "а") {
      currency = currency.substring(0, currency.length - 1) + 'ы';
    }
  } else {
    if (currency[currency.length - 1] === "р" || currency[currency.length - 1] === "т" || currency[currency.length - 1] === "к") {
      currency = currency + 'ов';
    } else if (currency[currency.length - 1] === "ь") {
      currency = currency + 'ей';
    } else if (currency[currency.length - 1] === "й" && currency[currency.length - 2] === "и") {
      currency = currency.substring(0, currency.length - 2) + 'их';
    } else if (currency[currency.length - 1] === "й" && currency[currency.length - 2] === "ы") {
      currency = currency.substring(0, currency.length - 2) + 'ых';
    } else if (currency[currency.length - 1] === "я" && currency[currency.length - 2] === "а") {
      currency = currency.substring(0, currency.length - 2) + 'их';
    } else if (currency[currency.length - 1] === "а") {
      currency = currency.substring(0, currency.length - 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJudW10b3dvcmRzIiwiTnVtVG9Xb3JkcyIsInVwZGF0ZUFsbCIsImN1cnJlbmN5IiwiJCIsInZhbCIsImxhbmciLCJudW0iLCJyZXMiLCJnZXRGdWxsIiwiaHRtbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZmFkZUluIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJzaG93SGVscCIsImhpZGUiLCJvbiIsInNlbCIsInZhbHMiLCJnZXRWYWxzIiwia2V5IiwidmFsYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwibGFuZ1ZhbHMiLCJjaGVja2VkIiwidHJhbnNsYXRvciIsIlQyVyIsInRyYW5zbGF0aW9ucyIsIldvcmRUcmFuc2xhdGlvbnMiLCJwcm90b3R5cGUiLCJjdXJyZW5jeUx2IiwidW5pdHMiLCJudW1lcmljVW5pdCIsInVuaXROYW1lc1J1IiwidW5pdE5hbWVzTHYiLCJ0ZWVucyIsInRlZW5OYW1lc1J1IiwidGVlbk5hbWVzTHYiLCJ0ZW5uZXJzIiwibnVtZXJpY1RlbiIsInRlbm5lck5hbWVzUnUiLCJ0ZW5uZXJOYW1lc0x2IiwiaHVuZHJlZHMiLCJudW1lcmljSHVuZHJlZCIsImh1bmRyZWRzTmFtZXNSdSIsImdlbmVyaWNDYWxsZXIiLCJtZXRob2ROYW1lIiwiYXJncyIsImNhbGwiLCJhcmd1bWVudHMiLCJzaGlmdCIsImFwcGx5IiwidW5pIiwibGVuIiwidjEiLCJ2bSIsIm5mbSIsIm1pbGlvbmkiLCJzdWJzdHJpbmciLCJ0aG91c2FuZHNjaSIsIm1pbGpXb3JkIiwidGhvdXNhbmRzIiwidmwiLCJtaWxsaW9ucyIsImJpbGxpb25zIiwidHJpbGxpb25zIiwicXVhZHJpbGxpb25zIiwidHJpbSIsImdldFJlc3VsdCIsImNlbnQiLCJldXIiLCJwb2ludCIsImxhc3RJbmRleE9mIiwiY29tYSIsInBvaW50Q291bnQiLCJzcGxpdCIsImxlbmd0aCIsImNvbWFDb3VudCIsInNlcCIsInVuIiwiY29tYXRzIiwiY2VudGkiLCJyZXBsYWNlIiwiY2VudGkxIiwiY2VudGkyIiwib3JpZyIsInRvV29yZHMiLCJOdW1iZXIiLCJlIiwicmVwZWF0IiwiZWxlbWVudHMiLCJlbmRpbmdzUnUiLCJ0b0xvd2VyQ2FzZSIsIm51bWJlciIsInZhbHV0YSIsImVkZW4iLCJzbSIsImN1cnJlbmN5RW4iLCJodW5kcmVkdGhzRW4iLCJjdXJyZW5jeVJ1IiwiaHVuZHJlZHRoc1J1IiwiaHVuZHJlZHRoc0x2Iiwic21yZXMiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxVQUFVLEdBQUcsSUFBSUMsbURBQUosRUFBakI7O0FBRUEsU0FBU0MsU0FBVCxHQUFxQjtBQUNqQixNQUFJQyxRQUFRLEdBQUdDLDZDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEdBQWIsRUFBZjtBQUNBLE1BQUlDLElBQUksR0FBR0YsNkNBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDQyxHQUFoQyxFQUFYO0FBQ0EsTUFBSUUsR0FBRyxHQUFHSCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRQyxHQUFSLEVBQVY7QUFDQSxNQUFJRyxHQUFHLEdBQUdSLFVBQVUsQ0FBQ1MsT0FBWCxDQUFtQk4sUUFBbkIsRUFBNkJHLElBQTdCLEVBQW1DQyxHQUFuQyxDQUFWO0FBQ0FILCtDQUFDLENBQUMsTUFBRCxDQUFELENBQVVNLElBQVYsQ0FBZUYsR0FBZjtBQUNBRyxjQUFZLENBQUND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TyxlQTVCTztBQTZCZCxXQUFPLG9CQTdCTztBQThCZCxXQUFPLGtCQTlCTztBQStCZCxXQUFPLGNBL0JPO0FBZ0NkLFdBQU8sa0JBaENPO0FBaUNkLFdBQU8sbUJBakNPO0FBa0NkLFdBQU8sa0JBbENPO0FBbUNkLFdBQU8sZ0JBbkNPO0FBb0NkLFdBQU8sb0JBcENPO0FBcUNkLFdBQU8sY0FyQ087QUFzQ2QsV0FBTyxrQkF0Q087QUF1Q2QsV0FBTyxnQkF2Q087QUF3Q2QsV0FBTyxnQkF4Q087QUF5Q2QsV0FBTyxnQkF6Q087QUEwQ2QsV0FBTyxnQkExQ087QUEyQ2QsV0FBTyxtQkEzQ087QUE0Q2QsV0FBTyxpQkE1Q087QUE2Q2QsV0FBTyxpQkE3Q087QUE4Q2QsV0FBTyxjQTlDTztBQStDZCxXQUFPLGtCQS9DTztBQWdEZCxXQUFPLGVBaERPO0FBaURkLFdBQU8saUJBakRPO0FBa0RkLFdBQU8sZUFsRE87QUFtRGQsV0FBTyxpQkFuRE87QUFvRGQsV0FBTyxnQkFwRE87QUFxRGQsV0FBTyxpQkFyRE87QUFzRGQsV0FBTyxjQXRETztBQXVEZCxXQUFPLGtCQXZETztBQXdEZCxXQUFPLGdCQXhETztBQXlEZCxXQUFPO0FBekRPLEdBQWxCO0FBNERBLE9BQUtDLFlBQUwsR0FBb0I7QUFDaEIsV0FBTyxPQURTO0FBRWhCLFdBQU8sT0FGUztBQUdoQixXQUFPLE9BSFM7QUFJaEIsV0FBTyxRQUpTO0FBS2hCLFdBQU8sT0FMUztBQU1oQixXQUFPLFNBTlM7QUFPaEIsV0FBTyxPQVBTO0FBUWhCLFdBQU8sU0FSUztBQVNoQixXQUFPLE1BVFM7QUFVaEIsV0FBTyxLQVZTO0FBV2hCLFdBQU8sS0FYUztBQVloQixXQUFPO0FBWlMsR0FBcEI7QUFjSCxDQXpURDs7QUEyVGV0RSwrRUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAnXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IE51bVRvV29yZHMgZnJvbSBcIi4vbnVtdG93b3Jkc1wiO1xyXG5cclxudmFyIG51bXRvd29yZHMgPSBuZXcgTnVtVG9Xb3JkcygpO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQWxsKCkge1xyXG4gICAgdmFyIGN1cnJlbmN5ID0gJChcIiN2YWx1dGFcIikudmFsKCk7XHJcbiAgICB2YXIgbGFuZyA9ICQoJ2lucHV0W25hbWU9XCJsYW5nXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgIHZhciBudW0gPSAkKFwiI2NcIikudmFsKCk7XHJcbiAgICB2YXIgcmVzID0gbnVtdG93b3Jkcy5nZXRGdWxsKGN1cnJlbmN5LCBsYW5nLCBudW0pO1xyXG4gICAgJChcIiNyZXNcIikuaHRtbChyZXMpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnZlcnRfbGFuZycsIGxhbmcpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnZlcnRfY3VycmVuY3knLCBjdXJyZW5jeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHkoKSB7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCgkKFwiI3Jlc1wiKS5odG1sKCkpO1xyXG4gICAgJChcIiNhbHJ0XCIpLmZhZGVJbigpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHskKFwiI2FscnRcIikuZmFkZU91dCgpO30sIDEwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SGVscCgpIHtcclxuICAgICQoXCIjaGVscFwiKS5mYWRlSW4oKTtcclxuICAgICQoXCIjaGVscC1idG5cIikuaGlkZSgpO1xyXG59XHJcblxyXG4kKFwiI2NcIikub24oJ2tleXVwJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ2NsaWNrJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdwYXN0ZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjdmFsdXRhXCIpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPWxhbmddJykub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY29weS1idG5cIikub24oJ2NsaWNrJywgY29weSk7XHJcbiQoXCIjaGVscC1idG5cIikub24oJ2NsaWNrJywgc2hvd0hlbHApO1xyXG5cclxudmFyIHNlbCA9ICcnO1xyXG52YXIgdmFscyA9IG51bXRvd29yZHMuZ2V0VmFscygpO1xyXG5mb3IgKHZhciBrZXkgaW4gdmFscykge1xyXG4gICAgdmFyIHZhbGEgPSB2YWxzW2tleV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWxzW2tleV0uc2xpY2UoMSk7XHJcbiAgICBzZWwgPSBzZWwgKyAnPG9wdGlvbiB2YWx1ZT1cIicra2V5KydcIj4nK2tleS50b1VwcGVyQ2FzZSgpKycgJyt2YWxhKyc8L29wdGlvbj4nO1xyXG59O1xyXG4kKFwiI3ZhbHV0YVwiKS5odG1sKHNlbCk7XHJcbnZhciBsYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnZlcnRfbGFuZycpO1xyXG5pZiAobGFuZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICB2YXIgbGFuZ1ZhbHMgPSB7XHJcbiAgICAgICAgJ2x2JzogMCxcclxuICAgICAgICAnZW4nOiAxLFxyXG4gICAgICAgICdydSc6IDJcclxuICAgIH07XHJcblxyXG4gICAgJCgnaW5wdXQ6cmFkaW9bbmFtZT1cImxhbmdcIl0nKVtsYW5nVmFsc1tsYW5nXV0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAkKCdpbnB1dFtuYW1lPVwibGFuZ1wiXTpjaGVja2VkJykudmFsKCk7XHJcbn1cclxudmFyIGN1cnJlbmN5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnZlcnRfY3VycmVuY3knKTtcclxuaWYgKGN1cnJlbmN5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICQoXCIjdmFsdXRhXCIpLnZhbChjdXJyZW5jeSk7XHJcbn1cclxuIiwiaW1wb3J0IFQyVyBmcm9tIFwibnVtYmVyczJ3b3Jkc1wiO1xyXG5pbXBvcnQgV29yZFRyYW5zbGF0aW9ucyBmcm9tIFwiLi90cmFuc2xhdGlvbnNcIjtcclxuXHJcbnZhciBOdW1Ub1dvcmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy50cmFuc2xhdG9yID0gbmV3IFQyVyhcIkVOX1VTXCIpO1xyXG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSBuZXcgV29yZFRyYW5zbGF0aW9ucygpO1xyXG4gICAgdGhpcy5sYW5nID0gJ2x2JztcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0VmFscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUx2O1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bml0cyA9IGZ1bmN0aW9uIChudW1lcmljVW5pdCkge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy51bml0TmFtZXNSdVtudW1lcmljVW5pdF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLnVuaXROYW1lc0x2W251bWVyaWNVbml0XTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudGVlbnMgPSBmdW5jdGlvbiAodGVlbnMpIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMudGVlbk5hbWVzUnVbdGVlbnNdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy50ZWVuTmFtZXNMdlt0ZWVuc107XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnRlbm5lcnMgPSBmdW5jdGlvbiAobnVtZXJpY1Rlbikge1xyXG4gICAgaWYgKG51bWVyaWNUZW5bMF0gPT09IFwiMFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5pdHMobnVtZXJpY1RlblsxXSk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIxXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZWVucyhudW1lcmljVGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLnRlbm5lck5hbWVzUnVbbnVtZXJpY1RlblswXV0gKyBcIiBcIiArIHRoaXMudW5pdHMobnVtZXJpY1RlblsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLnRlbm5lck5hbWVzTHZbbnVtZXJpY1RlblswXV0gKyBcIiBcIiArIHRoaXMudW5pdHMobnVtZXJpY1RlblsxXSk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmh1bmRyZWRzID0gZnVuY3Rpb24gKG51bWVyaWNIdW5kcmVkKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWRzTmFtZXNSdVtudW1lcmljSHVuZHJlZFswXV0gKyAnICcgKyB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY0h1bmRyZWRbMF0gPT09IFwiMFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljSHVuZHJlZFswXSA9PT0gXCIxXCIpIHtcclxuICAgICAgICByZXR1cm4gJ3ZpZW5zIHNpbXRzJyArICcgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaXRzKG51bWVyaWNIdW5kcmVkWzBdKSArICcgc2ltdGkgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxufVxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZW5lcmljQ2FsbGVyID0gZnVuY3Rpb24obWV0aG9kTmFtZSkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7ICAvL2NvbnZlcnRzIGFyZ3VtZW50cyB0byBhbiBhcnJheVxyXG4gICAgYXJncy5zaGlmdCgpOyAvL3JlbW92ZSB0aGUgbWV0aG9kIG5hbWVcclxuICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsIGFyZ3MpOyAgLy9jYWxsIHlvdXIgbWV0aG9kIHdpdGggdGhlIGN1cnJlbnQgc2NvcGUgYW5kIHBhc3MgdGhlIGFyZ3VtZW50c1xyXG59O1xyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudW5pID0gZnVuY3Rpb24gKG51bSwgbGVuLCB2MSwgdm0sIG5mbSkge1xyXG4gICAgdmFyIG1pbGlvbmkgPSBudW0uc3Vic3RyaW5nKDAsIDMpO1xyXG4gICAgdmFyIHRob3VzYW5kc2NpID0gbnVtLnN1YnN0cmluZygzLCBsZW4pO1xyXG5cclxuICAgIGlmIChtaWxpb25pID09PSAnMDAwJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyaWNDYWxsZXIobmZtLHRob3VzYW5kc2NpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWlsaldvcmQgPSB2bTtcclxuICAgIGlmIChtaWxpb25pWzJdID09PSBcIjFcIiAmJiBtaWxpb25pWzFdICE9PSBcIjFcIikge1xyXG4gICAgICAgIG1pbGpXb3JkID0gdjFcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh1bmRyZWRzKG1pbGlvbmkpICsgJyAnK21pbGpXb3JkKycgJyArIHRoaXMuZ2VuZXJpY0NhbGxlcihuZm0sdGhvdXNhbmRzY2kpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS50aG91c2FuZHMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ9GC0YvRgdGP0YfQsCc7XHJcbiAgICAgICAgdmFyIHZtID0gJ9GC0YvRgdGP0YcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdmwgPSAndMWra3N0b3Rpcyc7XHJcbiAgICAgICAgdmFyIHZtID0gJ3TFq2tzdG/FoWknO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudW5pKG51bSwgNiwgdmwsIHZtLCAnaHVuZHJlZHMnKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUubWlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ9C80LjQu9C70LjQvtC9JztcclxuICAgICAgICB2YXIgdm0gPSAn0LzQuNC70LvQuNC+0L3QvtCyJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ21pbGpvbnMnO1xyXG4gICAgICAgIHZhciB2bSA9ICdtaWxqb25pJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDksIHZsLCB2bSwgJ3Rob3VzYW5kcycpXHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmJpbGxpb25zID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHZhciB2bCA9ICfQvNC40LvQu9C40LDRgNC0JztcclxuICAgICAgICB2YXIgdm0gPSAn0LzQuNC70LvQuNCw0YDQtNC+0LInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdmwgPSAnbWlsamFyZHMnO1xyXG4gICAgICAgIHZhciB2bSA9ICdtaWxqYXJkaSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCAxMiwgdmwsIHZtLCAnbWlsbGlvbnMnKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudHJpbGxpb25zID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHZhciB2bCA9ICfRgtGA0LjQu9C70LjQvtC9JztcclxuICAgICAgICB2YXIgdm0gPSAn0YLQvtC40LvQu9C40L7QvdC+0LInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdmwgPSAndHJpbGpvbnMnO1xyXG4gICAgICAgIHZhciB2bSA9ICd0cmlsam9uaSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCAxNSwgdmwsIHZtLCAnYmlsbGlvbnMnKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUucXVhZHJpbGxpb25zID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHZhciB2bCA9ICfQutCy0LDQtNGA0LjQu9C70LjQvtC9JztcclxuICAgICAgICB2YXIgdm0gPSAn0LrQstCw0LTRgNC40LvQu9C40L7QvdC+0LInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdmwgPSAna3ZhZHJpbGpvbnMnO1xyXG4gICAgICAgIHZhciB2bSA9ICdrdmFkcmlsam9uaSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCAxOCwgdmwsIHZtLCAndHJpbGxpb25zJykudHJpbSgpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRSZXN1bHQgPSBmdW5jdGlvbiAobnVtLCBjZW50LCBldXIpIHtcclxuICAgIHZhciBwb2ludCA9IG51bS5sYXN0SW5kZXhPZignLicpO1xyXG4gICAgdmFyIGNvbWEgPSBudW0ubGFzdEluZGV4T2YoJywnKTtcclxuICAgIHZhciBwb2ludENvdW50ID0gKG51bS5zcGxpdChcIi5cIikubGVuZ3RoIC0gMSlcclxuICAgIHZhciBjb21hQ291bnQgPSAobnVtLnNwbGl0KFwiLFwiKS5sZW5ndGggLSAxKVxyXG4gICAgdmFyIHNlcCA9IC0xO1xyXG4gICAgaWYgKHBvaW50ICE9PSAtMSAmJiBwb2ludCA+IGNvbWEgJiYgcG9pbnRDb3VudCA9PT0gMSkge1xyXG4gICAgICAgIHZhciBzZXAgPSBwb2ludDtcclxuICAgIH0gZWxzZSBpZiAoY29tYSAhPT0gLTEgJiYgY29tYSA+IHBvaW50ICYmIGNvbWFDb3VudCA9PT0gMSkge1xyXG4gICAgICAgIHZhciBzZXAgPSBjb21hO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsZW5ndGggPSBudW0ubGVuZ3RoO1xyXG4gICAgdmFyIHVuID0gJ3VuJ1xyXG4gICAgdmFyIGNvbWF0cyA9ICdrb21hdHMnO1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIHVuID0gJ2FuZCdcclxuICAgICAgICBjb21hdHMgPSAnY29tYSc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHVuID0gJ9C4J1xyXG4gICAgICAgIGNvbWF0cyA9ICfQutC+0LzQsCc7XHJcbiAgICB9XHJcbiAgICB2YXIgY2VudGkgPSAnICcrdW4rJyAwMCAnICsgY2VudDtcclxuICAgIGlmIChzZXAgIT09IC0xKSB7XHJcbiAgICAgICAgY2VudGkgPSBudW0uc3Vic3RyaW5nKHNlcCsxLCBsZW5ndGgpO1xyXG4gICAgICAgIGNlbnRpID0gY2VudGkucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcbiAgICAgICAgbnVtID0gbnVtLnN1YnN0cmluZygwLCBzZXApO1xyXG4gICAgICAgIGlmIChjZW50aS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAwMCAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aSsnMCAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aSsnICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjZW50aTEgPSBjZW50aS5zdWJzdHJpbmcoMCwyKTtcclxuICAgICAgICAgICAgdmFyIGNlbnRpMiA9IGNlbnRpLnN1YnN0cmluZygyLGNlbnRpLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aTEgKyAnLCAnICsgY29tYXRzICsnLCAnKyBjZW50aTIrJyAnICsgY2VudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9yaWcgPSBudW07XHJcbiAgICBudW0gPSBudW0ucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcblxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG51bSA9IHRoaXMudHJhbnNsYXRvci50b1dvcmRzKE51bWJlcihudW0pKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgbnVtID0gJ0EgbG90IG9mJztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIG51bSA9ICcwJy5yZXBlYXQoMTggLSBudW0ubGVuZ3RoKSArIG51bTtcclxuICAgICAgICBudW0gPSB0aGlzLnF1YWRyaWxsaW9ucyhudW0pO1xyXG4gICAgICAgIGlmIChudW0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgIG51bSA9ICfQvdC+0LvRjCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBudW0gPSAnMCcucmVwZWF0KDE4IC0gbnVtLmxlbmd0aCkgKyBudW07XHJcbiAgICAgICAgbnVtID0gdGhpcy5xdWFkcmlsbGlvbnMobnVtKTtcclxuICAgICAgICBpZiAobnVtID09PSAnJykge1xyXG4gICAgICAgICAgICBudW0gPSAnbnVsbGUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnbHYnKSB7XHJcbiAgICAgICAgaWYgKChvcmlnLmxlbmd0aCA+IDEgJiYgb3JpZ1tvcmlnLmxlbmd0aC0xXSA9PT0gXCIxXCIgJiYgb3JpZ1tvcmlnLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG9yaWcgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGV1cltldXIubGVuZ3RoLTFdICE9IFwib1wiICYmIGV1cltldXIubGVuZ3RoLTFdICE9IFwiZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKSArICdpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMl0gPT09IFwiaVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMV0gPT09IFwi0YBcIikge1xyXG4gICAgICAgICAgICAgICAgZXVyID0gZXVyLnN1YnN0cmluZygwLCBldXIubGVuZ3RoIC0gMSkgKyAn0YDQvtCyJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZXVyLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBldXIgPSB0aGlzLmVuZGluZ3NSdShvcmlnLCBldXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGV1ciA9IHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzBdKSArICcgJyArIHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzFdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICBldXIgPSB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1swXSkgKyAnICcgKyBlbGVtZW50c1sxXSArICcgJyArIHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bSArICcgJyArIGV1ci50b0xvd2VyQ2FzZSgpICsgY2VudGk7XHJcbn1cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZW5kaW5nc1J1ID0gZnVuY3Rpb24gKG51bWJlciwgY3VycmVuY3kpIHtcclxuICAgIGlmICgobnVtYmVyLmxlbmd0aCA+IDEgJiYgbnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiMVwiICYmIG51bWJlcltudW1iZXIubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgbnVtYmVyID09PSBcIjFcIikge1xyXG4gICAgfSBlbHNlIGlmICgobnVtYmVyLmxlbmd0aCA+IDEgJiYgKG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjJcIiB8fCBudW1iZXJbbnVtYmVyLmxlbmd0aC0xXSA9PT0gXCIzXCIgfHwgbnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiNFwiKSAmJiBudW1iZXJbbnVtYmVyLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG51bWJlciA9PT0gXCIxXCIpIHtcclxuICAgICAgICBpZiAoY3VycmVuY3lbY3VycmVuY3kubGVuZ3RoLTFdID09PSBcItGAXCIgfHwgY3VycmVuY3lbY3VycmVuY3kubGVuZ3RoLTFdID09PSBcItGCXCIgfHwgY3VycmVuY3lbY3VycmVuY3kubGVuZ3RoLTFdID09PSBcItC6XCIpIHtcclxuICAgICAgICAgICAgY3VycmVuY3kgPSBjdXJyZW5jeSArICfQsCc7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKGN1cnJlbmN5W2N1cnJlbmN5Lmxlbmd0aC0xXSA9PT0gXCLRjFwiKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5ID0gY3VycmVuY3kuc3Vic3RyaW5nKDAsIGN1cnJlbmN5Lmxlbmd0aCAtIDEpICsgJ9GPJztcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAoY3VycmVuY3lbY3VycmVuY3kubGVuZ3RoLTFdID09PSBcItC5XCIgJiYgY3VycmVuY3lbY3VycmVuY3kubGVuZ3RoLTJdID09PSBcItC4XCIpIHtcclxuICAgICAgICAgICAgY3VycmVuY3kgPSBjdXJyZW5jeS5zdWJzdHJpbmcoMCwgY3VycmVuY3kubGVuZ3RoIC0gMikgKyAn0LjRhSc7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKGN1cnJlbmN5W2N1cnJlbmN5Lmxlbmd0aC0xXSA9PT0gXCLQuVwiICYmIGN1cnJlbmN5W2N1cnJlbmN5Lmxlbmd0aC0yXSA9PT0gXCLRi1wiKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5ID0gY3VycmVuY3kuc3Vic3RyaW5nKDAsIGN1cnJlbmN5Lmxlbmd0aCAtIDIpICsgJ9GL0YUnO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmIChjdXJyZW5jeVtjdXJyZW5jeS5sZW5ndGgtMV0gPT09IFwi0Y9cIiAmJiBjdXJyZW5jeVtjdXJyZW5jeS5sZW5ndGgtMl0gPT09IFwi0LBcIikge1xyXG4gICAgICAgICAgICBjdXJyZW5jeSA9IGN1cnJlbmN5LnN1YnN0cmluZygwLCBjdXJyZW5jeS5sZW5ndGggLSAyKSArICfQuNC1JztcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAoY3VycmVuY3lbY3VycmVuY3kubGVuZ3RoLTFdID09PSBcItCwXCIpIHtcclxuICAgICAgICAgICAgY3VycmVuY3kgPSBjdXJyZW5jeS5zdWJzdHJpbmcoMCwgY3VycmVuY3kubGVuZ3RoIC0gMSkgKyAn0YsnO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbmN5W2N1cnJlbmN5Lmxlbmd0aC0xXSA9PT0gXCLRgFwiIHx8IGN1cnJlbmN5W2N1cnJlbmN5Lmxlbmd0aC0xXSA9PT0gXCLRglwiIHx8IGN1cnJlbmN5W2N1cnJlbmN5Lmxlbmd0aC0xXSA9PT0gXCLQulwiKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5ID0gY3VycmVuY3kgKyAn0L7Qsic7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKGN1cnJlbmN5W2N1cnJlbmN5Lmxlbmd0aC0xXSA9PT0gXCLRjFwiKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5ID0gY3VycmVuY3kgKyAn0LXQuSc7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKGN1cnJlbmN5W2N1cnJlbmN5Lmxlbmd0aC0xXSA9PT0gXCLQuVwiICYmIGN1cnJlbmN5W2N1cnJlbmN5Lmxlbmd0aC0yXSA9PT0gXCLQuFwiKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5ID0gY3VycmVuY3kuc3Vic3RyaW5nKDAsIGN1cnJlbmN5Lmxlbmd0aCAtIDIpICsgJ9C40YUnO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgIGlmIChjdXJyZW5jeVtjdXJyZW5jeS5sZW5ndGgtMV0gPT09IFwi0LlcIiAmJiBjdXJyZW5jeVtjdXJyZW5jeS5sZW5ndGgtMl0gPT09IFwi0YtcIikge1xyXG4gICAgICAgICAgICBjdXJyZW5jeSA9IGN1cnJlbmN5LnN1YnN0cmluZygwLCBjdXJyZW5jeS5sZW5ndGggLSAyKSArICfRi9GFJztcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAoY3VycmVuY3lbY3VycmVuY3kubGVuZ3RoLTFdID09PSBcItGPXCIgJiYgY3VycmVuY3lbY3VycmVuY3kubGVuZ3RoLTJdID09PSBcItCwXCIpIHtcclxuICAgICAgICAgICAgY3VycmVuY3kgPSBjdXJyZW5jeS5zdWJzdHJpbmcoMCwgY3VycmVuY3kubGVuZ3RoIC0gMikgKyAn0LjRhSc7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKGN1cnJlbmN5W2N1cnJlbmN5Lmxlbmd0aC0xXSA9PT0gXCLQsFwiKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5ID0gY3VycmVuY3kuc3Vic3RyaW5nKDAsIGN1cnJlbmN5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3VycmVuY3k7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldEZ1bGwgPSBmdW5jdGlvbiAodmFsdXRhLCBsYW5nLCBudW0pIHtcclxuICAgIHRoaXMubGFuZyA9IGxhbmc7XHJcbiAgICB2YXIgZWRlbiA9IHtcclxuICAgIH07XHJcbiAgICB2YXIgc20gPSB7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdlbicpIHtcclxuICAgICAgICBlZGVuID0gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lFbjtcclxuICAgICAgICBzbSA9IHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWR0aHNFbjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgZWRlbiA9IHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5UnU7XHJcbiAgICAgICAgc20gPSB0aGlzLnRyYW5zbGF0aW9ucy5odW5kcmVkdGhzUnU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUx2O1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc0x2O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgc21yZXMgPSAnKDEvMTAwKSAnICsgdmFsdXRhLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzbSwgdmFsdXRhKSkge1xyXG4gICAgICAgIHNtcmVzID0gc21bdmFsdXRhXTtcclxuICAgIH1cclxuICAgIHZhciByZXMgPSB0aGlzLmdldFJlc3VsdChudW0sIHNtcmVzLCBlZGVuW3ZhbHV0YV0pO1xyXG4gICAgcmVzID0gcmVzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzLnNsaWNlKDEpO1xyXG5cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51bVRvV29yZHM7XHJcbiIsInZhciBXb3JkVHJhbnNsYXRpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5jdXJyZW5jeUx2ID0ge1xyXG4gICAgICAgIFwiZXVyXCI6IFwiZXVyb1wiLFxyXG4gICAgICAgIFwidXNkXCI6IFwiZG9sxIFyc1wiLFxyXG4gICAgICAgIFwiZ2JwXCI6IFwiTGllbGJyaXTEgW5pamFzIG3EgXJjacWGYVwiLFxyXG4gICAgICAgIFwicnViXCI6IFwiS3JpZXZpamFzIHJ1Ymxpc1wiLFxyXG4gICAgICAgIFwicGxuXCI6IFwiUG9saWphcyB6bG90c1wiLFxyXG4gICAgICAgIFwia3p0XCI6IFwiS2F6YWhzdMSBbmFzIHRlbmdlXCIsXHJcbiAgICAgICAgXCJjaGZcIjogXCLFoHZlaWNlcyBmcmFua3NcIixcclxuICAgICAgICBcImFlZFwiOiBcIkFwdmllbm90byBBcsSBYnUgRW1pcsSBdHUgZGlyaGFtc1wiLFxyXG4gICAgICAgIFwiZGtrXCI6IFwiRMSBbmlqYXMga3JvbmFcIixcclxuICAgICAgICBcInNla1wiOiBcIlp2aWVkcmlqYXMga3JvbmFcIixcclxuICAgICAgICBcIm5va1wiOiBcIk5vcnbEk8SjaWphcyBrcm9uYVwiLFxyXG4gICAgICAgIFwiYmduXCI6IFwiQnVsZ8SBcmlqYXMgbGV2YVwiLFxyXG4gICAgICAgIFwiaHVmXCI6IFwiVW5nxIFyaWphcyBmb3JpbnRzXCIsXHJcbiAgICAgICAgXCJ0cnlcIjogXCJUdXJjaWphcyBsaXJhXCIsXHJcbiAgICAgICAgXCJhbGxcIjogXCJBbGLEgW5pamFzIGxla3NcIixcclxuICAgICAgICBcImhya1wiOiBcIkhvcnbEgXRpamFzIGt1bmFcIixcclxuICAgICAgICBcImN6a1wiOiBcIsSMZWhpamFzIGtyb25hXCIsXHJcbiAgICAgICAgXCJnZWxcIjogXCJHcnV6aWphcyBsYXJpXCIsXHJcbiAgICAgICAgXCJsa3JcIjogXCLFoHJpbGFua2FzIHLFq3BpamFcIixcclxuICAgICAgICBcInRuZFwiOiBcIlR1bmlzaWphcyBkaW7EgXJzXCIsXHJcbiAgICAgICAgXCJpbHNcIjogXCJJenJhxJNsYXMgxaFla2Vsc1wiLFxyXG4gICAgICAgIFwiam9kXCI6IFwiSm9yZMSBbmlqYXMgZGluxIFyc1wiLFxyXG4gICAgICAgIFwiYnluXCI6IFwiQmFsdGtyaWV2aWphcyBydWJsaXNcIixcclxuICAgICAgICBcImVncFwiOiBcIsSSxKNpcHRlcyBtxIFyY2nFhmFcIixcclxuICAgICAgICBcInVhaFwiOiBcIlVrcmFpbmFzIGdyaXZuYVwiLFxyXG4gICAgICAgIFwiY255XCI6IFwixLbEq25hcyBqdWHFhmFcIixcclxuICAgICAgICBcInRoYlwiOiBcIlRhaXplbWVzIGJhdHNcIixcclxuICAgICAgICBcInZuZFwiOiBcIlZqZXRuYW1hcyBkb25nc1wiLFxyXG4gICAgICAgIFwicGhwXCI6IFwiRmlsaXDEq251IHBlc29cIixcclxuICAgICAgICBcIm1hZFwiOiBcIk1hcm9rYXMgZGlyaGFtc1wiLFxyXG4gICAgICAgIFwiYXVkXCI6IFwiQXVzdHLEgWxpamFzIGRvbMSBcnNcIixcclxuICAgICAgICBcImFyc1wiOiBcIkFyZ2VudMSrbmFzIHBlc29cIixcclxuICAgICAgICBcImpweVwiOiBcIkphcMSBbmFzIGrEk25hXCIsXHJcbiAgICAgICAgXCJpZHJcIjogXCJJbmRvbsSTemlqYXMgcsWrcGlqYVwiLFxyXG4gICAgICAgIFwiaXNrXCI6IFwiSXNsYW5kZXMga3JvbmFcIixcclxuICAgICAgICBcImFtZFwiOiBcIkFybcSTbmlqYXMgZHJhbXNcIixcclxuICAgICAgICBcInJvblwiOiBcIlJ1bcSBbmlqYXMgbGVqYVwiLFxyXG4gICAgICAgIFwic2dkXCI6IFwiU2luZ2FwxatyYXMgZG9sxIFyc1wiLFxyXG4gICAgICAgIFwic2JwXCI6IFwiU2tvdGlqYXMgbcSBcmNpxYZhXCIsXHJcbiAgICAgICAgXCJjYWRcIjogXCJLYW7EgWRhcyBkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJicmxcIjogXCJCcmF6xKtsaWphcyByZcSBbHNcIixcclxuICAgICAgICBcInphclwiOiBcIkRpZW52aWTEgWZyaWthcyByZW5kc1wiLFxyXG4gICAgICAgIFwiaW5yXCI6IFwiSW5kaWphcyByxatwaWphXCIsXHJcbiAgICAgICAgXCJyc2RcIjogXCJTZXJiaWphcyBkaW7EgXJzXCIsXHJcbiAgICAgICAgXCJuemRcIjogXCJKYXVuesSTbGFuZGVzIGRvbMSBcnNcIixcclxuICAgICAgICBcIm15clwiOiBcIk1hbGFpemlqYXMgcmluZ2l0c1wiLFxyXG4gICAgICAgIFwibXVyXCI6IFwiTWF1csSrY2lqYXMgc2FsYXMgcsWrcGlqYVwiLFxyXG4gICAgICAgIFwiaGtkXCI6IFwiSG9ua29uZ2FzIGRvbMSBcnNcIixcclxuICAgICAgICBcImtyd1wiOiBcIkRpZW52aWRrb3JlamFzIHZvbmFcIixcclxuICAgICAgICBcIm14blwiOiBcIk1la3Npa2FzIHBlc29cIixcclxuICAgICAgICBcIm1rZFwiOiBcIk1hxLdlZG9uaWphcyBkZW7EgXJzXCIsXHJcbiAgICAgICAgXCJkb3BcIjogXCJEb21pbmlrxIFuYXMgcGVzb1wiLFxyXG4gICAgICAgIFwia2VzXCI6IFwiS2VuaWphcyDFoWlsacWGxaFcIixcclxuICAgICAgICBcImRlbVwiOiBcIlbEgWNpamFzIG1hcmthXCIsXHJcbiAgICAgICAgXCJlZWtcIjogXCJJZ2F1bmlqYXMga3JvbmFcIixcclxuICAgICAgICBcImx0bFwiOiBcIkxpZXR1dmFzIGxpdHNcIixcclxuICAgICAgICBcImx2bFwiOiBcIkxhdHZpamFzIGxhdHNcIixcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5odW5kcmVkdGhzTHYgPSB7XHJcbiAgICAgICAgJ2V1cic6ICdjZW50aScsXHJcbiAgICAgICAgJ3VzZCc6ICdjZW50aScsXHJcbiAgICAgICAgJ2dicCc6ICdwZW5pJyxcclxuICAgICAgICAncnViJzogJ2thcGVpa8SBcycsXHJcbiAgICAgICAgJ3Bsbic6ICdncm/FoWknLFxyXG4gICAgICAgICdsdmwnOiAnc2FudGltaScsXHJcbiAgICAgICAgJ2t6dCc6ICd0aWrEq25pJyxcclxuICAgICAgICAnY2hmJzogJ3JhcGVuaScsXHJcbiAgICAgICAgJ2FlZCc6ICdmaWxpJyxcclxuICAgICAgICAnZGtrJzogJ8STcmknLFxyXG4gICAgICAgICdzZWsnOiAnxJNyaScsXHJcbiAgICAgICAgJ25vayc6ICfEk3JpJyxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy51bml0TmFtZXNMdiA9IHtcclxuICAgICAgICBcIjBcIjogXCJcIixcclxuICAgICAgICBcIjFcIjogXCJ2aWVuc1wiLFxyXG4gICAgICAgIFwiMlwiOiBcImRpdmlcIixcclxuICAgICAgICBcIjNcIjogXCJ0csSrc1wiLFxyXG4gICAgICAgIFwiNFwiOiBcIsSNZXRyaVwiLFxyXG4gICAgICAgIFwiNVwiOiBcInBpZWNpXCIsXHJcbiAgICAgICAgXCI2XCI6IFwic2XFoWlcIixcclxuICAgICAgICBcIjdcIjogXCJzZXB0acWGaVwiLFxyXG4gICAgICAgIFwiOFwiOiBcImFzdG/FhmlcIixcclxuICAgICAgICBcIjlcIjogXCJkZXZpxYZpXCJcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50ZWVuTmFtZXNMdiA9IHtcclxuICAgICAgICBcIjEwXCI6IFwiZGVzbWl0XCIsXHJcbiAgICAgICAgXCIxMVwiOiBcInZpZW5wYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxMlwiOiBcImRpdnBhZHNtaXRcIixcclxuICAgICAgICBcIjEzXCI6IFwidHLEq3NwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxNFwiOiBcIsSNZXRycGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTVcIjogXCJwaWVjcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTZcIjogXCJzZcWhcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTdcIjogXCJzZXB0acWGcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMThcIjogXCJhc3RvxYZwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxOVwiOiBcImRldmnFhnBhZHNtaXRcIlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRlbm5lck5hbWVzTHYgPSB7XHJcbiAgICAgICAgXCIyXCI6IFwiZGl2ZGVzbWl0XCIsXHJcbiAgICAgICAgXCIzXCI6IFwidHLEq3NkZXNtaXRcIixcclxuICAgICAgICBcIjRcIjogXCLEjWV0cmRlc21pdFwiLFxyXG4gICAgICAgIFwiNVwiOiBcInBpZWNkZXNtaXRcIixcclxuICAgICAgICBcIjZcIjogXCJzZcWhZGVzbWl0XCIsXHJcbiAgICAgICAgXCI3XCI6IFwic2VwdGnFhmRlc21pdFwiLFxyXG4gICAgICAgIFwiOFwiOiBcImFzdG/FhmRlc21pdFwiLFxyXG4gICAgICAgIFwiOVwiOiBcImRldmnFhmRlc21pdFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY3VycmVuY3lSdSA9IHtcclxuICAgICAgICBcImV1clwiOiBcItCV0LLRgNC+XCIsXHJcbiAgICAgICAgXCJ1c2RcIjogXCLQlNC+0LvQu9Cw0YBcIixcclxuICAgICAgICBcImdicFwiOiBcItCQ0L3Qs9C70LjQudGB0LrQuNC5INGE0YPQvdGCINGB0YLQtdGA0LvQuNC90LPQvtCyXCIsXHJcbiAgICAgICAgXCJydWJcIjogXCLQoNC+0YHRgdC40LnRgdC60LjQuSDRgNGD0LHQu9GMXCIsXHJcbiAgICAgICAgXCJwbG5cIjogXCLQn9C+0LvRjNGB0LrQuNC5INC30LvQvtGC0YvQuVwiLFxyXG4gICAgICAgIFwia3p0XCI6IFwi0JrQsNC30LDRhdGB0YLQsNC90YHQutC40Lkg0YLQtdC90LPQtVwiLFxyXG4gICAgICAgIFwiY2hmXCI6IFwi0KjQstC10LnRhtCw0YDRgdC60LjQuSDRhNGA0LDQvdC6XCIsXHJcbiAgICAgICAgXCJhZWRcIjogXCLQlNC40YDRhdCw0Lwg0J7QkNCtXCIsXHJcbiAgICAgICAgXCJka2tcIjogXCLQlNCw0YLRgdC60LDRjyDQutGA0L7QvdCwXCIsXHJcbiAgICAgICAgXCJzZWtcIjogXCLQqNCy0LXQtNGB0LrQsNGPINC60YDQvtC90LBcIixcclxuICAgICAgICBcIm5va1wiOiBcItCd0L7RgNCy0LXQttGB0LrQsNGPINC60YDQvtC90LBcIixcclxuICAgICAgICBcImJnblwiOiBcItCR0L7Qu9Cz0LDRgNGB0LrQuNC5INC70LXQslwiLFxyXG4gICAgICAgIFwiaHVmXCI6IFwi0LLQtdC90LPQtdGA0YHQutC40Lkg0YTQvtGA0LjQvdGCXCIsXHJcbiAgICAgICAgXCJ0cnlcIjogXCLQotGD0YDQtdGG0LrQsNGPINC70LjRgNCwXCIsXHJcbiAgICAgICAgXCJhbGxcIjogXCLQkNC70LHQsNC90YHQutC40Lkg0LvQtdC6XCIsXHJcbiAgICAgICAgXCJocmtcIjogXCJY0L7RgNCy0LDRgtGB0LrQsNGPINC60YPQvdCwXCIsXHJcbiAgICAgICAgXCJjemtcIjogXCLQp9C10YjRgdC60LDRjyDQutGA0L7QvdCwXCIsXHJcbiAgICAgICAgXCJnZWxcIjogXCLQk9GA0YPQt9C40L3RgdC60LjQuSDQu9Cw0YDQuFwiLFxyXG4gICAgICAgIFwibGtyXCI6IFwi0KjRgNC4LdC70LDQvdC60LjQudGB0LrQsNGPINGA0YPQv9C40Y9cIixcclxuICAgICAgICBcInRuZFwiOiBcItCi0YPQvdC40YHRgdC60LjQuSDQtNC40L3QsNGAXCIsXHJcbiAgICAgICAgXCJpbHNcIjogXCLQmNC30YDQsNC40LvRjNGB0LrQuNC5INGI0LXQutC10LvRjFwiLFxyXG4gICAgICAgIFwiam9kXCI6IFwi0JjQvtGA0LTQsNC90YHQutC40Lkg0LTQuNC90LDRgFwiLFxyXG4gICAgICAgIFwiYnluXCI6IFwi0JHQtdC70L7RgNGD0YHRgdC60LjQuSDRgNGD0LHQu9GMXCIsXHJcbiAgICAgICAgXCJlZ3BcIjogXCLQldCz0LjQv9C10YLRgdC60LjQuSDRhNGD0L3RglwiLFxyXG4gICAgICAgIFwidWFoXCI6IFwi0KPQutGA0LDQuNC90YHQutCw0Y8g0LPRgNC40LLQvdCwXCIsXHJcbiAgICAgICAgXCJjbnlcIjogXCLQmtC40YLQsNC50YHQutC40Lkg0Y7QsNC90YxcIixcclxuICAgICAgICBcInRoYlwiOiBcItCi0LDQuNC70LDQvdC00YHQutC40Lkg0LHQsNGCXCIsXHJcbiAgICAgICAgXCJ2bmRcIjogXCLQktGM0LXRgtC90LDQvNGB0LrQuNC5INC00L7QvdCzXCIsXHJcbiAgICAgICAgXCJwaHBcIjogXCLQpNC40LvQuNC/0L/QuNC90YHQutC+0LUg0L/QtdGB0L5cIixcclxuICAgICAgICBcIm1hZFwiOiBcItCc0LDRgNC+0LrQutCw0L3RgdC60LjQuSDQtNC40YDRhdCw0LxcIixcclxuICAgICAgICBcImF1ZFwiOiBcItCQ0LLRgdGC0YDQsNC70LjQudGB0LrQuNC5INC00L7Qu9C70LDRgFwiLFxyXG4gICAgICAgIFwiYXJzXCI6IFwi0JDRgNCz0LXQvdGC0LjQvdGB0LrQvtC1INC/0LXRgdC+XCIsXHJcbiAgICAgICAgXCJqcHlcIjogXCLQr9C/0L7QvdGB0LrQsNGPINC40LXQvdCwXCIsXHJcbiAgICAgICAgXCJpZHJcIjogXCLQmNC90LTQvtC90LXQt9C40LnRgdC60LDRjyDRgNGD0L/QuNGPXCIsXHJcbiAgICAgICAgXCJpc2tcIjogXCLQmNGB0LvQsNC90LTRgdC60LDRjyDQutGA0L7QvdCwXCIsXHJcbiAgICAgICAgXCJhbWRcIjogXCLQkNGA0LzRj9C90YHQutC40Lkg0LTRgNCw0LxcIixcclxuICAgICAgICBcInJvblwiOiBcItCg0YPQvNGL0L3RgdC60LDRjyDQu9C10Y9cIixcclxuICAgICAgICBcInNnZFwiOiBcItCh0LjQvdCz0LDQv9GD0YDRgdC60LjQuSDQtNC+0LvQu9Cw0YBcIixcclxuICAgICAgICBcInNicFwiOiBcItCo0L7RgtC70LDQvdC00YHQutC40Lkg0YTRg9C90YJcIixcclxuICAgICAgICBcImNhZFwiOiBcItCa0LDQvdCw0LTRgdC60LjQuSDQtNC+0LvQu9Cw0YBcIixcclxuICAgICAgICBcImJybFwiOiBcItCR0YDQsNC30LjQu9GM0YHQutC40Lkg0YDQtdCw0LtcIixcclxuICAgICAgICBcInphclwiOiBcItCu0LbQvdC+0LDRhNGA0LjQutCw0L3RgdC60LjQuSDRgNGN0L3QtFwiLFxyXG4gICAgICAgIFwiaW5yXCI6IFwi0JjQvdC00LjQudGB0LrQsNGPINGA0YPQv9C40Y9cIixcclxuICAgICAgICBcInJzZFwiOiBcItCh0LXRgNCx0YHQutC40Lkg0LTQuNC90LDRgFwiLFxyXG4gICAgICAgIFwibnpkXCI6IFwi0J3QvtCy0L7Qt9C10LvQsNC90LTRgdC60LjQuSDQtNC+0LvQu9Cw0YBcIixcclxuICAgICAgICBcIm15clwiOiBcIk3QsNC70LDQudC30LjQudGB0LrQuNC5INGA0LjQvdCz0LPQuNGCXCIsXHJcbiAgICAgICAgXCJtdXJcIjogXCLQnNCw0LLRgNC40LrQuNC50YHQutCw0Y8g0YDRg9C/0LjRj1wiLFxyXG4gICAgICAgIFwiaGtkXCI6IFwi0JPQvtC90LrQvtC90LPRgdC60LjQuSDQtNC+0LvQu9Cw0YBcIixcclxuICAgICAgICBcImtyd1wiOiBcItCu0LbQvdC+0LrQvtGA0LXQudGB0LrQsNGPINCy0L7QvdCwXCIsXHJcbiAgICAgICAgXCJteG5cIjogXCLQnNC10LrRgdC40LrQsNC90YHQutC+0LUg0L/QtdGB0L5cIixcclxuICAgICAgICBcIm1rZFwiOiBcItCc0LDQutC10LTQvtC90YHQutC40Lkg0LTQuNC90LDRgFwiLFxyXG4gICAgICAgIFwiZG9wXCI6IFwi0JTQvtC80LjQvdC40LrQsNC90YHQutC+0LUg0L/QtdGB0L5cIixcclxuICAgICAgICBcImtlc1wiOiBcItCa0LXQvdC40LnRgdC60LjQuSDRiNC40LvQu9C40L3Qs1wiLFxyXG4gICAgICAgIFwiZGVtXCI6IFwi0J3QtdC80LXRhtC60LDRjyDQvNCw0YDQutCwXCIsXHJcbiAgICAgICAgXCJlZWtcIjogXCLQrdGB0YLQvtC90YHQutCw0Y8g0LrRgNC+0L3QsFwiLFxyXG4gICAgICAgIFwibHRsXCI6IFwi0JvQuNGC0L7QstGB0LrQuNC5INC70LjRglwiLFxyXG4gICAgICAgIFwibHZsXCI6IFwi0JvQsNGC0LLQuNC50YHQutC40Lkg0LvQsNGCXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaHVuZHJlZHRoc1J1ID0ge1xyXG4gICAgICAgICdldXInOiAn0YbQtdC90YLQvtCyJyxcclxuICAgICAgICAndXNkJzogJ9GG0LXQvdGC0L7QsicsXHJcbiAgICAgICAgJ2dicCc6ICfQv9C10L3QuCcsXHJcbiAgICAgICAgJ3J1Yic6ICfQutC+0L/QtdC10LonLFxyXG4gICAgICAgICdwbG4nOiAn0LPRgNC+0YgnLFxyXG4gICAgICAgICdsdmwnOiAn0YHQsNC90YLQuNC80L7QsicsXHJcbiAgICAgICAgJ2t6dCc6ICfRgtC40YvQvScsXHJcbiAgICAgICAgJ2NoZic6ICfRgNCw0L/Qv9C10L3QvtCyJyxcclxuICAgICAgICAnYWVkJzogJ9GE0LjQu9GBJyxcclxuICAgICAgICAnZGtrJzogJ9GN0YDQtScsXHJcbiAgICAgICAgJ3Nlayc6ICfRjdGA0LUnLFxyXG4gICAgICAgICdub2snOiAn0Y3RgNC1JyxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy51bml0TmFtZXNSdSA9IHtcclxuICAgICAgICBcIjBcIjogXCJcIixcclxuICAgICAgICBcIjFcIjogXCLQvtC00LjQvVwiLFxyXG4gICAgICAgIFwiMlwiOiBcItC00LLQsFwiLFxyXG4gICAgICAgIFwiM1wiOiBcItGC0YDQuFwiLFxyXG4gICAgICAgIFwiNFwiOiBcItGH0LXRgtGL0YDQtVwiLFxyXG4gICAgICAgIFwiNVwiOiBcItC/0Y/RgtGMXCIsXHJcbiAgICAgICAgXCI2XCI6IFwi0YjQtdGB0YLRjFwiLFxyXG4gICAgICAgIFwiN1wiOiBcItGB0LXQvNGMXCIsXHJcbiAgICAgICAgXCI4XCI6IFwi0LLQvtGB0LXQvNGMXCIsXHJcbiAgICAgICAgXCI5XCI6IFwi0LTQtdCy0Y/RgtGMXCJcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50ZWVuTmFtZXNSdSA9IHtcclxuICAgICAgICBcIjEwXCI6IFwi0LTQtdGB0Y/RgtGMXCIsXHJcbiAgICAgICAgXCIxMVwiOiBcItC+0LTQuNC90LDQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCIxMlwiOiBcItC00LLQtdC90LDQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCIxM1wiOiBcItGC0YDQtdC90LDQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCIxNFwiOiBcItGH0LXRgtGL0YDQvdCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiMTVcIjogXCLQv9GP0YLQvdCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiMTZcIjogXCLRiNC10YHQvdCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiMTdcIjogXCLRgdC10LzQvdCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiMThcIjogXCLQstC+0YHQtdC80L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjE5XCI6IFwi0LTQtdCy0Y/RgtC90LDQtNGG0LDRgtGMXCJcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50ZW5uZXJOYW1lc1J1ID0ge1xyXG4gICAgICAgIFwiMlwiOiBcItC00LLQsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjNcIjogXCLRgtGA0LjQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCI0XCI6IFwi0YHQvtGA0L7QulwiLFxyXG4gICAgICAgIFwiNVwiOiBcItC/0Y/RjNC00LXRgdGP0YJcIixcclxuICAgICAgICBcIjZcIjogXCLRiNC10YHRgtGM0LTQtdGB0Y/RglwiLFxyXG4gICAgICAgIFwiN1wiOiBcItGB0LXQvNGM0LTQtdGB0Y/RglwiLFxyXG4gICAgICAgIFwiOFwiOiBcItCy0L7RgdC10LzRjNC00LXRgdGP0YJcIixcclxuICAgICAgICBcIjlcIjogXCLQtNC10LLRj9C90L7RgdGC0L5cIlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmh1bmRyZWRzTmFtZXNSdSA9IHtcclxuICAgICAgICBcIlwiOiBcIlwiLFxyXG4gICAgICAgIFwiMFwiOiBcIlwiLFxyXG4gICAgICAgIFwiMVwiOiBcItGB0YLQvlwiLFxyXG4gICAgICAgIFwiMlwiOiBcItC00LLQtdGB0YLQuFwiLFxyXG4gICAgICAgIFwiM1wiOiBcItGC0YDQuNGB0YLQsFwiLFxyXG4gICAgICAgIFwiNFwiOiBcItGH0LXRgtGL0YDQtdGB0YLQsFwiLFxyXG4gICAgICAgIFwiNVwiOiBcItC/0Y/RgtGM0YHQvtGCXCIsXHJcbiAgICAgICAgXCI2XCI6IFwi0YjQtdGB0YLRjNGB0L7RglwiLFxyXG4gICAgICAgIFwiN1wiOiBcItGB0LXQvNGM0YHQvtGCXCIsXHJcbiAgICAgICAgXCI4XCI6IFwi0LLQvtGB0LXQvNGM0YHQvtGCXCIsXHJcbiAgICAgICAgXCI5XCI6IFwi0LTQtdCy0Y/RgtGM0YHQvtGCXCJcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jdXJyZW5jeUVuID0ge1xyXG4gICAgICAgIFwiZXVyXCI6IFwiZXVyb1wiLFxyXG4gICAgICAgIFwidXNkXCI6IFwiZG9sbGFyXCIsXHJcbiAgICAgICAgXCJnYnBcIjogXCJicml0aXNoIHBvdW5kXCIsXHJcbiAgICAgICAgXCJydWJcIjogXCJydXNzaWFuIHJ1YmxlXCIsXHJcbiAgICAgICAgXCJwbG5cIjogXCJwb2xpc2ggemxvdHlcIixcclxuICAgICAgICBcImJnblwiOiBcImJ1bGdhcmlhbiBsZXZcIixcclxuICAgICAgICBcImh1ZlwiOiBcImh1bmdhcmlhbiBmb3JpbnRcIixcclxuICAgICAgICBcInRyeVwiOiBcInR1cmtpc2ggbGlyYVwiLFxyXG4gICAgICAgIFwiaHJrXCI6IFwiY3JvYXRpYW4ga3VuYVwiLFxyXG4gICAgICAgIFwiY3prXCI6IFwiY3plY2gga29ydW5hXCIsXHJcbiAgICAgICAgXCJnZWxcIjogXCJnZW9yZ2lhbiBsYXJpXCIsXHJcbiAgICAgICAgXCJhbGxcIjogXCJhbGJhbmlhbiBsZWtcIixcclxuICAgICAgICBcImxrclwiOiBcInNyaSBsYW5rYW4gcnVwZWVcIixcclxuICAgICAgICBcInNla1wiOiBcInN3ZWRpc2gga3JvbmFcIixcclxuICAgICAgICBcInRoYlwiOiBcInRoYWkgYmFodFwiLFxyXG4gICAgICAgIFwidG5kXCI6IFwidHVuaXNpYW4gZGluYXJcIixcclxuICAgICAgICBcImlsc1wiOiBcImlzcmFlbGkgc2hlcWVsXCIsXHJcbiAgICAgICAgXCJjaGZcIjogXCJzd2lzcyBmcmFuY1wiLFxyXG4gICAgICAgIFwibm9rXCI6IFwibm9yd2VnaWFuIGtyb25lXCIsXHJcbiAgICAgICAgXCJka2tcIjogXCJkYW5pc2gga3JvbmVcIixcclxuICAgICAgICBcImFlZFwiOiBcInVuaXRlZCBhcmFiIGVtaXJhdGVzIGRpcmhhbVwiLFxyXG4gICAgICAgIFwiY2FkXCI6IFwiY2FuYWRpYW4gZG9sbGFyXCIsXHJcbiAgICAgICAgXCJieW5cIjogXCJiZWxhcnVzaWFuIG5ldyBydWJsZVwiLFxyXG4gICAgICAgIFwiYXVkXCI6IFwiYXVzdHJhbGlhbiBkb2xsYXJcIixcclxuICAgICAgICBcImpweVwiOiBcImphcGFuZXNlIHllblwiLFxyXG4gICAgICAgIFwiY255XCI6IFwiY2hpbmVzZSB5dWFuXCIsXHJcbiAgICAgICAgXCJ1YWhcIjogXCJ1a3JhaW5pYW4gaHJ5dm5pYVwiLFxyXG4gICAgICAgIFwiaXNrXCI6IFwiaWNlbGFuZCBrcm9uYVwiLFxyXG4gICAgICAgIFwibnpkXCI6IFwibmV3IHplYWxhbmQgZG9sbGFyXCIsXHJcbiAgICAgICAgXCJrcndcIjogXCJzb3V0aCBrb3JlYW4gd29uXCIsXHJcbiAgICAgICAgXCJyb25cIjogXCJyb21hbmlhbiBsZXVcIixcclxuICAgICAgICBcInNnZFwiOiBcInNpbmdhcG9yZSBkb2xsYXJcIixcclxuICAgICAgICBcImlkclwiOiBcImluZG9uZXNpYW4gcnVwaWFoXCIsXHJcbiAgICAgICAgXCJoa2RcIjogXCJob25nIGtvbmcgZG9sbGFyXCIsXHJcbiAgICAgICAgXCJzYnBcIjogXCJzY290dGlzaCBwb3VuZFwiLFxyXG4gICAgICAgIFwiemFyXCI6IFwic291dGggYWZyaWNhbiByYW5kXCIsXHJcbiAgICAgICAgXCJteG5cIjogXCJtZXhpY2FuIHBlc29cIixcclxuICAgICAgICBcIm1rZFwiOiBcIm1hY2Vkb25pYW4gZGluYXJcIixcclxuICAgICAgICBcImJybFwiOiBcImJyYXppbGlhbiByZWFsXCIsXHJcbiAgICAgICAgXCJlZ3BcIjogXCJlZ3lwdGlhbiBwb3VuZFwiLFxyXG4gICAgICAgIFwiYXJzXCI6IFwiYXJnZW50aW5lIHBlc29cIixcclxuICAgICAgICBcImtlc1wiOiBcImtlbnlhIHNoaWxsaW5nXCIsXHJcbiAgICAgICAgXCJteXJcIjogXCJtYWxheXNpYW4gcmluZ2dpdFwiLFxyXG4gICAgICAgIFwibXVyXCI6IFwibWF1cml0aWFuIHJ1cGVlXCIsXHJcbiAgICAgICAgXCJwaHBcIjogXCJwaGlsaXBwaW5lIHBlc29cIixcclxuICAgICAgICBcImluclwiOiBcImluZGlhbiBydXBlZVwiLFxyXG4gICAgICAgIFwia3p0XCI6IFwia2F6YWtoc3RhbiB0ZW5nZVwiLFxyXG4gICAgICAgIFwiYW1kXCI6IFwiYXJtZW5pYW4gZHJhbVwiLFxyXG4gICAgICAgIFwibWFkXCI6IFwibW9yb2NjYW4gZGlyaGFtXCIsXHJcbiAgICAgICAgXCJyc2RcIjogXCJzZXJiaWFuIGRpbmFyXCIsXHJcbiAgICAgICAgXCJ2bmRcIjogXCJ2aWV0bmFtZXNlIGRvbmdcIixcclxuICAgICAgICBcImRvcFwiOiBcImRvbWluaWNhbiBwZXNvXCIsXHJcbiAgICAgICAgXCJqb2RcIjogXCJqb3JkYW5pYW4gZGluYXJcIixcclxuICAgICAgICBcImx2bFwiOiBcImxhdHZpYW4gbGF0c1wiLFxyXG4gICAgICAgIFwibHRsXCI6IFwibGl0aHVhbmlhbiBsaXRhc1wiLFxyXG4gICAgICAgIFwiZWVrXCI6IFwiZXN0b25pYW4ga3Jvb25cIixcclxuICAgICAgICBcImRlbVwiOiBcImdlcm1hbiBtYXJrXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaHVuZHJlZHRoc0VuID0ge1xyXG4gICAgICAgICdldXInOiAnY2VudHMnLFxyXG4gICAgICAgICd1c2QnOiAnY2VudHMnLFxyXG4gICAgICAgICdnYnAnOiAncGVuY2UnLFxyXG4gICAgICAgICdydWInOiAna29wZWtzJyxcclxuICAgICAgICAncGxuJzogJ2dyb3N6JyxcclxuICAgICAgICAnbHZsJzogJ3NhbnRpbXMnLFxyXG4gICAgICAgICdrenQnOiAndMSxeW5zJyxcclxuICAgICAgICAnY2hmJzogJ3JhcHBlbnMnLFxyXG4gICAgICAgICdhZWQnOiAnZmlscycsXHJcbiAgICAgICAgJ2Rrayc6ICdvcmUnLFxyXG4gICAgICAgICdzZWsnOiAnb3JlJyxcclxuICAgICAgICAnbm9rJzogJ29yZScsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkVHJhbnNsYXRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9