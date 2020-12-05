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
    if (orig.length > 1 && orig[orig.length - 1] === "1" && orig[orig.length - 2] !== "1" || orig === "1") {} else if (orig.length > 1 && (orig[orig.length - 1] === "2" || orig[orig.length - 1] === "3" || orig[orig.length - 1] === "4") && orig[orig.length - 2] !== "1" || orig === "1") {
      if (eur[eur.length - 1] === "р" || eur[eur.length - 1] === "т" || eur[eur.length - 1] === "к") {
        eur = eur + 'а';
      }

      if (eur[eur.length - 1] === "ь") {
        eur = eur.substring(0, eur.length - 1) + 'я';
      }
    } else {
      if (eur[eur.length - 1] === "р" || eur[eur.length - 1] === "т" || eur[eur.length - 1] === "к") {
        eur = eur + 'ов';
      }

      if (eur[eur.length - 1] === "ь") {
        eur = eur + 'ей';
      }
    }
  }

  return num + ' ' + eur.toLowerCase() + centi;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJudW10b3dvcmRzIiwiTnVtVG9Xb3JkcyIsInVwZGF0ZUFsbCIsImN1cnJlbmN5IiwiJCIsInZhbCIsImxhbmciLCJudW0iLCJyZXMiLCJnZXRGdWxsIiwiaHRtbCIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJmYWRlSW4iLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsInNob3dIZWxwIiwiaGlkZSIsIm9uIiwic2VsIiwidmFscyIsImdldFZhbHMiLCJrZXkiLCJ2YWxhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRyYW5zbGF0b3IiLCJUMlciLCJ0cmFuc2xhdGlvbnMiLCJXb3JkVHJhbnNsYXRpb25zIiwicHJvdG90eXBlIiwiY3VycmVuY3lMdiIsInVuaXRzIiwibnVtZXJpY1VuaXQiLCJ1bml0TmFtZXNSdSIsInVuaXROYW1lc0x2IiwidGVlbnMiLCJ0ZWVuTmFtZXNSdSIsInRlZW5OYW1lc0x2IiwidGVubmVycyIsIm51bWVyaWNUZW4iLCJ0ZW5uZXJOYW1lc1J1IiwidGVubmVyTmFtZXNMdiIsImh1bmRyZWRzIiwibnVtZXJpY0h1bmRyZWQiLCJodW5kcmVkc05hbWVzUnUiLCJnZW5lcmljQ2FsbGVyIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJjYWxsIiwiYXJndW1lbnRzIiwic2hpZnQiLCJhcHBseSIsInVuaSIsImxlbiIsInYxIiwidm0iLCJuZm0iLCJtaWxpb25pIiwic3Vic3RyaW5nIiwidGhvdXNhbmRzY2kiLCJtaWxqV29yZCIsInRob3VzYW5kcyIsInZsIiwibWlsbGlvbnMiLCJiaWxsaW9ucyIsInRyaWxsaW9ucyIsInF1YWRyaWxsaW9ucyIsInRyaW0iLCJnZXRSZXN1bHQiLCJjZW50IiwiZXVyIiwicG9pbnQiLCJsYXN0SW5kZXhPZiIsImNvbWEiLCJwb2ludENvdW50Iiwic3BsaXQiLCJsZW5ndGgiLCJjb21hQ291bnQiLCJzZXAiLCJ1biIsImNvbWF0cyIsImNlbnRpIiwicmVwbGFjZSIsImNlbnRpMSIsImNlbnRpMiIsIm9yaWciLCJ0b1dvcmRzIiwiTnVtYmVyIiwiZSIsInJlcGVhdCIsInRvTG93ZXJDYXNlIiwidmFsdXRhIiwiZWRlbiIsInNtIiwiY3VycmVuY3lFbiIsImh1bmRyZWR0aHNFbiIsImN1cnJlbmN5UnUiLCJodW5kcmVkdGhzUnUiLCJodW5kcmVkdGhzTHYiLCJzbXJlcyIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFVBQVUsR0FBRyxJQUFJQyxtREFBSixFQUFqQjs7QUFFQSxTQUFTQyxTQUFULEdBQXFCO0FBQ2pCLE1BQUlDLFFBQVEsR0FBR0MsNkNBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsR0FBYixFQUFmO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRiw2Q0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NDLEdBQWhDLEVBQVg7QUFDQSxNQUFJRSxHQUFHLEdBQUdILDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFDLEdBQVIsRUFBVjtBQUNBLE1BQUlHLEdBQUcsR0FBR1IsVUFBVSxDQUFDUyxPQUFYLENBQW1CTixRQUFuQixFQUE2QkcsSUFBN0IsRUFBbUNDLEdBQW5DLENBQVY7QUFDQUgsK0NBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVU0sSUFBVixDQUFlRixHQUFmO0FBQ0g7O0FBRUQsU0FBU0csSUFBVCxHQUFnQjtBQUNaQyxXQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCViw2Q0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVTSxJQUFWLEVBQTlCO0FBQ0FOLCtD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QURTO0FBRWhCLFdBQU8sT0FGUztBQUdoQixXQUFPLE9BSFM7QUFJaEIsV0FBTyxRQUpTO0FBS2hCLFdBQU8sT0FMUztBQU1oQixXQUFPLFNBTlM7QUFPaEIsV0FBTyxPQVBTO0FBUWhCLFdBQU8sU0FSUztBQVNoQixXQUFPLE1BVFM7QUFVaEIsV0FBTyxLQVZTO0FBV2hCLFdBQU8sS0FYUztBQVloQixXQUFPO0FBWlMsR0FBcEI7QUFjSCxDQXpURDs7QUEyVGVuRSwrRUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAnXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IE51bVRvV29yZHMgZnJvbSBcIi4vbnVtdG93b3Jkc1wiO1xyXG5cclxudmFyIG51bXRvd29yZHMgPSBuZXcgTnVtVG9Xb3JkcygpO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQWxsKCkge1xyXG4gICAgdmFyIGN1cnJlbmN5ID0gJChcIiN2YWx1dGFcIikudmFsKCk7XHJcbiAgICB2YXIgbGFuZyA9ICQoJ2lucHV0W25hbWU9XCJsYW5nXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgIHZhciBudW0gPSAkKFwiI2NcIikudmFsKCk7XHJcbiAgICB2YXIgcmVzID0gbnVtdG93b3Jkcy5nZXRGdWxsKGN1cnJlbmN5LCBsYW5nLCBudW0pO1xyXG4gICAgJChcIiNyZXNcIikuaHRtbChyZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5KCkge1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoJChcIiNyZXNcIikuaHRtbCgpKTtcclxuICAgICQoXCIjYWxydFwiKS5mYWRlSW4oKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7JChcIiNhbHJ0XCIpLmZhZGVPdXQoKTt9LCAxMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0hlbHAoKSB7XHJcbiAgICAkKFwiI2hlbHBcIikuZmFkZUluKCk7XHJcbiAgICAkKFwiI2hlbHAtYnRuXCIpLmhpZGUoKTtcclxufVxyXG5cclxuJChcIiNjXCIpLm9uKCdrZXl1cCcsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY1wiKS5vbignY2hhbmdlJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdjbGljaycsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY1wiKS5vbigncGFzdGUnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI3ZhbHV0YVwiKS5vbignY2hhbmdlJywgdXBkYXRlQWxsKTtcclxuJCgnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1sYW5nXScpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NvcHktYnRuXCIpLm9uKCdjbGljaycsIGNvcHkpO1xyXG4kKFwiI2hlbHAtYnRuXCIpLm9uKCdjbGljaycsIHNob3dIZWxwKTtcclxuXHJcbnZhciBzZWwgPSAnJztcclxudmFyIHZhbHMgPSBudW10b3dvcmRzLmdldFZhbHMoKTtcclxuZm9yICh2YXIga2V5IGluIHZhbHMpIHtcclxuICAgIHZhciB2YWxhID0gdmFsc1trZXldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsc1trZXldLnNsaWNlKDEpO1xyXG4gICAgc2VsID0gc2VsICsgJzxvcHRpb24gdmFsdWU9XCInK2tleSsnXCI+JytrZXkudG9VcHBlckNhc2UoKSsnICcrdmFsYSsnPC9vcHRpb24+JztcclxufTtcclxuJChcIiN2YWx1dGFcIikuaHRtbChzZWwpO1xyXG4iLCJpbXBvcnQgVDJXIGZyb20gXCJudW1iZXJzMndvcmRzXCI7XHJcbmltcG9ydCBXb3JkVHJhbnNsYXRpb25zIGZyb20gXCIuL3RyYW5zbGF0aW9uc1wiO1xyXG5cclxudmFyIE51bVRvV29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0b3IgPSBuZXcgVDJXKFwiRU5fVVNcIik7XHJcbiAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IG5ldyBXb3JkVHJhbnNsYXRpb25zKCk7XHJcbiAgICB0aGlzLmxhbmcgPSAnbHYnO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRWYWxzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5THY7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnVuaXRzID0gZnVuY3Rpb24gKG51bWVyaWNVbml0KSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLnVuaXROYW1lc1J1W251bWVyaWNVbml0XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMudW5pdE5hbWVzTHZbbnVtZXJpY1VuaXRdO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS50ZWVucyA9IGZ1bmN0aW9uICh0ZWVucykge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy50ZWVuTmFtZXNSdVt0ZWVuc107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLnRlZW5OYW1lc0x2W3RlZW5zXTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudGVubmVycyA9IGZ1bmN0aW9uIChudW1lcmljVGVuKSB7XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bml0cyhudW1lcmljVGVuWzFdKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljVGVuWzBdID09PSBcIjFcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlZW5zKG51bWVyaWNUZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMudGVubmVyTmFtZXNSdVtudW1lcmljVGVuWzBdXSArIFwiIFwiICsgdGhpcy51bml0cyhudW1lcmljVGVuWzFdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMudGVubmVyTmFtZXNMdltudW1lcmljVGVuWzBdXSArIFwiIFwiICsgdGhpcy51bml0cyhudW1lcmljVGVuWzFdKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuaHVuZHJlZHMgPSBmdW5jdGlvbiAobnVtZXJpY0h1bmRyZWQpIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHNOYW1lc1J1W251bWVyaWNIdW5kcmVkWzBdXSArICcgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljSHVuZHJlZFswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWVyaWNIdW5kcmVkWzBdID09PSBcIjFcIikge1xyXG4gICAgICAgIHJldHVybiAndmllbnMgc2ltdHMnICsgJyAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudW5pdHMobnVtZXJpY0h1bmRyZWRbMF0pICsgJyBzaW10aSAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0pO1xyXG59XHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdlbmVyaWNDYWxsZXIgPSBmdW5jdGlvbihtZXRob2ROYW1lKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTsgIC8vY29udmVydHMgYXJndW1lbnRzIHRvIGFuIGFycmF5XHJcbiAgICBhcmdzLnNoaWZ0KCk7IC8vcmVtb3ZlIHRoZSBtZXRob2QgbmFtZVxyXG4gICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJncyk7ICAvL2NhbGwgeW91ciBtZXRob2Qgd2l0aCB0aGUgY3VycmVudCBzY29wZSBhbmQgcGFzcyB0aGUgYXJndW1lbnRzXHJcbn07XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bmkgPSBmdW5jdGlvbiAobnVtLCBsZW4sIHYxLCB2bSwgbmZtKSB7XHJcbiAgICB2YXIgbWlsaW9uaSA9IG51bS5zdWJzdHJpbmcoMCwgMyk7XHJcbiAgICB2YXIgdGhvdXNhbmRzY2kgPSBudW0uc3Vic3RyaW5nKDMsIGxlbik7XHJcblxyXG4gICAgaWYgKG1pbGlvbmkgPT09ICcwMDAnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJpY0NhbGxlcihuZm0sdGhvdXNhbmRzY2kpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtaWxqV29yZCA9IHZtO1xyXG4gICAgaWYgKG1pbGlvbmlbMl0gPT09IFwiMVwiICYmIG1pbGlvbmlbMV0gIT09IFwiMVwiKSB7XHJcbiAgICAgICAgbWlsaldvcmQgPSB2MVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHVuZHJlZHMobWlsaW9uaSkgKyAnICcrbWlsaldvcmQrJyAnICsgdGhpcy5nZW5lcmljQ2FsbGVyKG5mbSx0aG91c2FuZHNjaSk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnRob3VzYW5kcyA9IGZ1bmN0aW9uIChudW0pIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICB2YXIgdmwgPSAn0YLRi9GB0Y/Rh9CwJztcclxuICAgICAgICB2YXIgdm0gPSAn0YLRi9GB0Y/Rhyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2bCA9ICd0xatrc3RvdGlzJztcclxuICAgICAgICB2YXIgdm0gPSAndMWra3N0b8WhaSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCA2LCB2bCwgdm0sICdodW5kcmVkcycpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5taWxsaW9ucyA9IGZ1bmN0aW9uIChudW0pIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICB2YXIgdmwgPSAn0LzQuNC70LvQuNC+0L0nO1xyXG4gICAgICAgIHZhciB2bSA9ICfQvNC40LvQu9C40L7QvdC+0LInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdmwgPSAnbWlsam9ucyc7XHJcbiAgICAgICAgdmFyIHZtID0gJ21pbGpvbmknO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudW5pKG51bSwgOSwgdmwsIHZtLCAndGhvdXNhbmRzJylcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuYmlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ9C80LjQu9C70LjQsNGA0LQnO1xyXG4gICAgICAgIHZhciB2bSA9ICfQvNC40LvQu9C40LDRgNC00L7Qsic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2bCA9ICdtaWxqYXJkcyc7XHJcbiAgICAgICAgdmFyIHZtID0gJ21pbGphcmRpJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDEyLCB2bCwgdm0sICdtaWxsaW9ucycpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS50cmlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ9GC0YDQuNC70LvQuNC+0L0nO1xyXG4gICAgICAgIHZhciB2bSA9ICfRgtC+0LjQu9C70LjQvtC90L7Qsic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2bCA9ICd0cmlsam9ucyc7XHJcbiAgICAgICAgdmFyIHZtID0gJ3RyaWxqb25pJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDE1LCB2bCwgdm0sICdiaWxsaW9ucycpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5xdWFkcmlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ9C60LLQsNC00YDQuNC70LvQuNC+0L0nO1xyXG4gICAgICAgIHZhciB2bSA9ICfQutCy0LDQtNGA0LjQu9C70LjQvtC90L7Qsic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2bCA9ICdrdmFkcmlsam9ucyc7XHJcbiAgICAgICAgdmFyIHZtID0gJ2t2YWRyaWxqb25pJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDE4LCB2bCwgdm0sICd0cmlsbGlvbnMnKS50cmltKCk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldFJlc3VsdCA9IGZ1bmN0aW9uIChudW0sIGNlbnQsIGV1cikge1xyXG4gICAgdmFyIHBvaW50ID0gbnVtLmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICB2YXIgY29tYSA9IG51bS5sYXN0SW5kZXhPZignLCcpO1xyXG4gICAgdmFyIHBvaW50Q291bnQgPSAobnVtLnNwbGl0KFwiLlwiKS5sZW5ndGggLSAxKVxyXG4gICAgdmFyIGNvbWFDb3VudCA9IChudW0uc3BsaXQoXCIsXCIpLmxlbmd0aCAtIDEpXHJcbiAgICB2YXIgc2VwID0gLTE7XHJcbiAgICBpZiAocG9pbnQgIT09IC0xICYmIHBvaW50ID4gY29tYSAmJiBwb2ludENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIHNlcCA9IHBvaW50O1xyXG4gICAgfSBlbHNlIGlmIChjb21hICE9PSAtMSAmJiBjb21hID4gcG9pbnQgJiYgY29tYUNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIHNlcCA9IGNvbWE7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxlbmd0aCA9IG51bS5sZW5ndGg7XHJcbiAgICB2YXIgdW4gPSAndW4nXHJcbiAgICB2YXIgY29tYXRzID0gJ2tvbWF0cyc7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgdW4gPSAnYW5kJ1xyXG4gICAgICAgIGNvbWF0cyA9ICdjb21hJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdW4gPSAn0LgnXHJcbiAgICAgICAgY29tYXRzID0gJ9C60L7QvNCwJztcclxuICAgIH1cclxuICAgIHZhciBjZW50aSA9ICcgJyt1bisnIDAwICcgKyBjZW50O1xyXG4gICAgaWYgKHNlcCAhPT0gLTEpIHtcclxuICAgICAgICBjZW50aSA9IG51bS5zdWJzdHJpbmcoc2VwKzEsIGxlbmd0aCk7XHJcbiAgICAgICAgY2VudGkgPSBjZW50aS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIilcclxuICAgICAgICBudW0gPSBudW0uc3Vic3RyaW5nKDAsIHNlcCk7XHJcbiAgICAgICAgaWYgKGNlbnRpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnIDAwICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VudGkubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpKycwICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VudGkubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNlbnRpMSA9IGNlbnRpLnN1YnN0cmluZygwLDIpO1xyXG4gICAgICAgICAgICB2YXIgY2VudGkyID0gY2VudGkuc3Vic3RyaW5nKDIsY2VudGkubGVuZ3RoKTtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpMSArICcsICcgKyBjb21hdHMgKycsICcrIGNlbnRpMisnICcgKyBjZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3JpZyA9IG51bTtcclxuICAgIG51bSA9IG51bS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIilcclxuXHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbnVtID0gdGhpcy50cmFuc2xhdG9yLnRvV29yZHMoTnVtYmVyKG51bSkpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBudW0gPSAnQSBsb3Qgb2YnO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgbnVtID0gJzAnLnJlcGVhdCgxOCAtIG51bS5sZW5ndGgpICsgbnVtO1xyXG4gICAgICAgIG51bSA9IHRoaXMucXVhZHJpbGxpb25zKG51bSk7XHJcbiAgICAgICAgaWYgKG51bSA9PT0gJycpIHtcclxuICAgICAgICAgICAgbnVtID0gJ9C90L7Qu9GMJztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG51bSA9ICcwJy5yZXBlYXQoMTggLSBudW0ubGVuZ3RoKSArIG51bTtcclxuICAgICAgICBudW0gPSB0aGlzLnF1YWRyaWxsaW9ucyhudW0pO1xyXG4gICAgICAgIGlmIChudW0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgIG51bSA9ICdudWxsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdsdicpIHtcclxuICAgICAgICBpZiAoKG9yaWcubGVuZ3RoID4gMSAmJiBvcmlnW29yaWcubGVuZ3RoLTFdID09PSBcIjFcIiAmJiBvcmlnW29yaWcubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgb3JpZyA9PT0gXCIxXCIpIHtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMV0gIT0gXCJvXCIgJiYgZXVyW2V1ci5sZW5ndGgtMV0gIT0gXCJlXCIpIHtcclxuICAgICAgICAgICAgICAgIGV1ciA9IGV1ci5zdWJzdHJpbmcoMCwgZXVyLmxlbmd0aCAtIDEpICsgJ2knO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldXJbZXVyLmxlbmd0aC0yXSA9PT0gXCJpXCIpIHtcclxuICAgICAgICAgICAgICAgIGV1ciA9IGV1ci5zdWJzdHJpbmcoMCwgZXVyLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldXJbZXVyLmxlbmd0aC0xXSA9PT0gXCLRgFwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKSArICfRgNC+0LInO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICBpZiAoKG9yaWcubGVuZ3RoID4gMSAmJiBvcmlnW29yaWcubGVuZ3RoLTFdID09PSBcIjFcIiAmJiBvcmlnW29yaWcubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgb3JpZyA9PT0gXCIxXCIpIHtcclxuICAgICAgICB9IGVsc2UgaWYgKChvcmlnLmxlbmd0aCA+IDEgJiYgKG9yaWdbb3JpZy5sZW5ndGgtMV0gPT09IFwiMlwiIHx8IG9yaWdbb3JpZy5sZW5ndGgtMV0gPT09IFwiM1wiIHx8IG9yaWdbb3JpZy5sZW5ndGgtMV0gPT09IFwiNFwiKSAmJiBvcmlnW29yaWcubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgb3JpZyA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgaWYgKGV1cltldXIubGVuZ3RoLTFdID09PSBcItGAXCIgfHwgZXVyW2V1ci5sZW5ndGgtMV0gPT09IFwi0YJcIiB8fCBldXJbZXVyLmxlbmd0aC0xXSA9PT0gXCLQulwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIgKyAn0LAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldXJbZXVyLmxlbmd0aC0xXSA9PT0gXCLRjFwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKSArICfRjyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMV0gPT09IFwi0YBcIiB8fCBldXJbZXVyLmxlbmd0aC0xXSA9PT0gXCLRglwiIHx8IGV1cltldXIubGVuZ3RoLTFdID09PSBcItC6XCIpIHtcclxuICAgICAgICAgICAgICAgIGV1ciA9IGV1ciArICfQvtCyJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMV0gPT09IFwi0YxcIikge1xyXG4gICAgICAgICAgICAgICAgZXVyID0gZXVyICsgJ9C10LknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW0gKyAnICcgKyBldXIudG9Mb3dlckNhc2UoKSArIGNlbnRpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRGdWxsID0gZnVuY3Rpb24gKHZhbHV0YSwgbGFuZywgbnVtKSB7XHJcbiAgICB0aGlzLmxhbmcgPSBsYW5nO1xyXG4gICAgdmFyIGVkZW4gPSB7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNtID0ge1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgZWRlbiA9IHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5RW47XHJcbiAgICAgICAgc20gPSB0aGlzLnRyYW5zbGF0aW9ucy5odW5kcmVkdGhzRW47XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeVJ1O1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc1J1O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlZGVuID0gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lMdjtcclxuICAgICAgICBzbSA9IHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWR0aHNMdjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIHNtcmVzID0gJygxLzEwMCkgJyArIHZhbHV0YS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc20sIHZhbHV0YSkpIHtcclxuICAgICAgICBzbXJlcyA9IHNtW3ZhbHV0YV07XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzID0gdGhpcy5nZXRSZXN1bHQobnVtLCBzbXJlcywgZWRlblt2YWx1dGFdKTtcclxuICAgIHJlcyA9IHJlcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlcy5zbGljZSgxKTtcclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdW1Ub1dvcmRzO1xyXG4iLCJ2YXIgV29yZFRyYW5zbGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuY3VycmVuY3lMdiA9IHtcclxuICAgICAgICBcImV1clwiOiBcImV1cm9cIixcclxuICAgICAgICBcInVzZFwiOiBcImRvbMSBcnNcIixcclxuICAgICAgICBcImdicFwiOiBcIkxpZWxicml0xIFuaWphcyBtxIFyY2nFhmFcIixcclxuICAgICAgICBcInJ1YlwiOiBcIktyaWV2aWphcyBydWJsaXNcIixcclxuICAgICAgICBcInBsblwiOiBcIlBvbGlqYXMgemxvdHNcIixcclxuICAgICAgICBcImt6dFwiOiBcIkthemFoc3TEgW5hcyB0ZW5nZVwiLFxyXG4gICAgICAgIFwiY2hmXCI6IFwixaB2ZWljZXMgZnJhbmtzXCIsXHJcbiAgICAgICAgXCJhZWRcIjogXCJBcHZpZW5vdG8gQXLEgWJ1IEVtaXLEgXR1IGRpcmhhbXNcIixcclxuICAgICAgICBcImRra1wiOiBcIkTEgW5pamFzIGtyb25hXCIsXHJcbiAgICAgICAgXCJzZWtcIjogXCJadmllZHJpamFzIGtyb25hXCIsXHJcbiAgICAgICAgXCJub2tcIjogXCJOb3J2xJPEo2lqYXMga3JvbmFcIixcclxuICAgICAgICBcImJnblwiOiBcIkJ1bGfEgXJpamFzIGxldmFcIixcclxuICAgICAgICBcImh1ZlwiOiBcIlVuZ8SBcmlqYXMgZm9yaW50c1wiLFxyXG4gICAgICAgIFwidHJ5XCI6IFwiVHVyY2lqYXMgbGlyYVwiLFxyXG4gICAgICAgIFwiYWxsXCI6IFwiQWxixIFuaWphcyBsZWtzXCIsXHJcbiAgICAgICAgXCJocmtcIjogXCJIb3J2xIF0aWphcyBrdW5hXCIsXHJcbiAgICAgICAgXCJjemtcIjogXCLEjGVoaWphcyBrcm9uYVwiLFxyXG4gICAgICAgIFwiZ2VsXCI6IFwiR3J1emlqYXMgbGFyaVwiLFxyXG4gICAgICAgIFwibGtyXCI6IFwixaByaWxhbmthcyByxatwaWphXCIsXHJcbiAgICAgICAgXCJ0bmRcIjogXCJUdW5pc2lqYXMgZGluxIFyc1wiLFxyXG4gICAgICAgIFwiaWxzXCI6IFwiSXpyYcSTbGFzIMWhZWtlbHNcIixcclxuICAgICAgICBcImpvZFwiOiBcIkpvcmTEgW5pamFzIGRpbsSBcnNcIixcclxuICAgICAgICBcImJ5blwiOiBcIkJhbHRrcmlldmlqYXMgcnVibGlzXCIsXHJcbiAgICAgICAgXCJlZ3BcIjogXCLEksSjaXB0ZXMgbcSBcmNpxYZhXCIsXHJcbiAgICAgICAgXCJ1YWhcIjogXCJVa3JhaW5hcyBncml2bmFcIixcclxuICAgICAgICBcImNueVwiOiBcIsS2xKtuYXMganVhxYZhXCIsXHJcbiAgICAgICAgXCJ0aGJcIjogXCJUYWl6ZW1lcyBiYXRzXCIsXHJcbiAgICAgICAgXCJ2bmRcIjogXCJWamV0bmFtYXMgZG9uZ3NcIixcclxuICAgICAgICBcInBocFwiOiBcIkZpbGlwxKtudSBwZXNvXCIsXHJcbiAgICAgICAgXCJtYWRcIjogXCJNYXJva2FzIGRpcmhhbXNcIixcclxuICAgICAgICBcImF1ZFwiOiBcIkF1c3RyxIFsaWphcyBkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJhcnNcIjogXCJBcmdlbnTEq25hcyBwZXNvXCIsXHJcbiAgICAgICAgXCJqcHlcIjogXCJKYXDEgW5hcyBqxJNuYVwiLFxyXG4gICAgICAgIFwiaWRyXCI6IFwiSW5kb27Ek3ppamFzIHLFq3BpamFcIixcclxuICAgICAgICBcImlza1wiOiBcIklzbGFuZGVzIGtyb25hXCIsXHJcbiAgICAgICAgXCJhbWRcIjogXCJBcm3Ek25pamFzIGRyYW1zXCIsXHJcbiAgICAgICAgXCJyb25cIjogXCJSdW3EgW5pamFzIGxlamFcIixcclxuICAgICAgICBcInNnZFwiOiBcIlNpbmdhcMWrcmFzIGRvbMSBcnNcIixcclxuICAgICAgICBcInNicFwiOiBcIlNrb3RpamFzIG3EgXJjacWGYVwiLFxyXG4gICAgICAgIFwiY2FkXCI6IFwiS2FuxIFkYXMgZG9sxIFyc1wiLFxyXG4gICAgICAgIFwiYnJsXCI6IFwiQnJhesSrbGlqYXMgcmXEgWxzXCIsXHJcbiAgICAgICAgXCJ6YXJcIjogXCJEaWVudmlkxIFmcmlrYXMgcmVuZHNcIixcclxuICAgICAgICBcImluclwiOiBcIkluZGlqYXMgcsWrcGlqYVwiLFxyXG4gICAgICAgIFwicnNkXCI6IFwiU2VyYmlqYXMgZGluxIFyc1wiLFxyXG4gICAgICAgIFwibnpkXCI6IFwiSmF1bnrEk2xhbmRlcyBkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJteXJcIjogXCJNYWxhaXppamFzIHJpbmdpdHNcIixcclxuICAgICAgICBcIm11clwiOiBcIk1hdXLEq2NpamFzIHNhbGFzIHLFq3BpamFcIixcclxuICAgICAgICBcImhrZFwiOiBcIkhvbmtvbmdhcyBkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJrcndcIjogXCJEaWVudmlka29yZWphcyB2b25hXCIsXHJcbiAgICAgICAgXCJteG5cIjogXCJNZWtzaWthcyBwZXNvXCIsXHJcbiAgICAgICAgXCJta2RcIjogXCJNYcS3ZWRvbmlqYXMgZGVuxIFyc1wiLFxyXG4gICAgICAgIFwiZG9wXCI6IFwiRG9taW5pa8SBbmFzIHBlc29cIixcclxuICAgICAgICBcImtlc1wiOiBcIktlbmlqYXMgxaFpbGnFhsWhXCIsXHJcbiAgICAgICAgXCJkZW1cIjogXCJWxIFjaWphcyBtYXJrYVwiLFxyXG4gICAgICAgIFwiZWVrXCI6IFwiSWdhdW5pamFzIGtyb25hXCIsXHJcbiAgICAgICAgXCJsdGxcIjogXCJMaWV0dXZhcyBsaXRzXCIsXHJcbiAgICAgICAgXCJsdmxcIjogXCJMYXR2aWphcyBsYXRzXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaHVuZHJlZHRoc0x2ID0ge1xyXG4gICAgICAgICdldXInOiAnY2VudGknLFxyXG4gICAgICAgICd1c2QnOiAnY2VudGknLFxyXG4gICAgICAgICdnYnAnOiAncGVuaScsXHJcbiAgICAgICAgJ3J1Yic6ICdrYXBlaWvEgXMnLFxyXG4gICAgICAgICdwbG4nOiAnZ3JvxaFpJyxcclxuICAgICAgICAnbHZsJzogJ3NhbnRpbWknLFxyXG4gICAgICAgICdrenQnOiAndGlqxKtuaScsXHJcbiAgICAgICAgJ2NoZic6ICdyYXBlbmknLFxyXG4gICAgICAgICdhZWQnOiAnZmlsaScsXHJcbiAgICAgICAgJ2Rrayc6ICfEk3JpJyxcclxuICAgICAgICAnc2VrJzogJ8STcmknLFxyXG4gICAgICAgICdub2snOiAnxJNyaScsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudW5pdE5hbWVzTHYgPSB7XHJcbiAgICAgICAgXCIwXCI6IFwiXCIsXHJcbiAgICAgICAgXCIxXCI6IFwidmllbnNcIixcclxuICAgICAgICBcIjJcIjogXCJkaXZpXCIsXHJcbiAgICAgICAgXCIzXCI6IFwidHLEq3NcIixcclxuICAgICAgICBcIjRcIjogXCLEjWV0cmlcIixcclxuICAgICAgICBcIjVcIjogXCJwaWVjaVwiLFxyXG4gICAgICAgIFwiNlwiOiBcInNlxaFpXCIsXHJcbiAgICAgICAgXCI3XCI6IFwic2VwdGnFhmlcIixcclxuICAgICAgICBcIjhcIjogXCJhc3RvxYZpXCIsXHJcbiAgICAgICAgXCI5XCI6IFwiZGV2acWGaVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGVlbk5hbWVzTHYgPSB7XHJcbiAgICAgICAgXCIxMFwiOiBcImRlc21pdFwiLFxyXG4gICAgICAgIFwiMTFcIjogXCJ2aWVucGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTJcIjogXCJkaXZwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxM1wiOiBcInRyxKtzcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTRcIjogXCLEjWV0cnBhZHNtaXRcIixcclxuICAgICAgICBcIjE1XCI6IFwicGllY3BhZHNtaXRcIixcclxuICAgICAgICBcIjE2XCI6IFwic2XFoXBhZHNtaXRcIixcclxuICAgICAgICBcIjE3XCI6IFwic2VwdGnFhnBhZHNtaXRcIixcclxuICAgICAgICBcIjE4XCI6IFwiYXN0b8WGcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTlcIjogXCJkZXZpxYZwYWRzbWl0XCJcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50ZW5uZXJOYW1lc0x2ID0ge1xyXG4gICAgICAgIFwiMlwiOiBcImRpdmRlc21pdFwiLFxyXG4gICAgICAgIFwiM1wiOiBcInRyxKtzZGVzbWl0XCIsXHJcbiAgICAgICAgXCI0XCI6IFwixI1ldHJkZXNtaXRcIixcclxuICAgICAgICBcIjVcIjogXCJwaWVjZGVzbWl0XCIsXHJcbiAgICAgICAgXCI2XCI6IFwic2XFoWRlc21pdFwiLFxyXG4gICAgICAgIFwiN1wiOiBcInNlcHRpxYZkZXNtaXRcIixcclxuICAgICAgICBcIjhcIjogXCJhc3RvxYZkZXNtaXRcIixcclxuICAgICAgICBcIjlcIjogXCJkZXZpxYZkZXNtaXRcIlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbmN5UnUgPSB7XHJcbiAgICAgICAgXCJldXJcIjogXCLQldCy0YDQvlwiLFxyXG4gICAgICAgIFwidXNkXCI6IFwi0JTQvtC70LvQsNGAXCIsXHJcbiAgICAgICAgXCJnYnBcIjogXCLQkNC90LPQu9C40LnRgdC60LjQuSDRhNGD0L3RgiDRgdGC0LXRgNC70LjQvdCz0L7QslwiLFxyXG4gICAgICAgIFwicnViXCI6IFwi0KDQvtGB0YHQuNC50YHQutC40Lkg0YDRg9Cx0LvRjFwiLFxyXG4gICAgICAgIFwicGxuXCI6IFwi0J/QvtC70YzRgdC60LjQuSDQt9C70L7RgtGL0LlcIixcclxuICAgICAgICBcImt6dFwiOiBcItCa0LDQt9Cw0YXRgdGC0LDQvdGB0LrQuNC5INGC0LXQvdCz0LVcIixcclxuICAgICAgICBcImNoZlwiOiBcItCo0LLQtdC50YbQsNGA0YHQutC40Lkg0YTRgNCw0L3QulwiLFxyXG4gICAgICAgIFwiYWVkXCI6IFwi0JTQuNGA0YXQsNC8INCe0JDQrVwiLFxyXG4gICAgICAgIFwiZGtrXCI6IFwi0JTQsNGC0YHQutCw0Y8g0LrRgNC+0L3QsFwiLFxyXG4gICAgICAgIFwic2VrXCI6IFwi0KjQstC10LTRgdC60LDRjyDQutGA0L7QvdCwXCIsXHJcbiAgICAgICAgXCJub2tcIjogXCLQndC+0YDQstC10LbRgdC60LDRjyDQutGA0L7QvdCwXCIsXHJcbiAgICAgICAgXCJiZ25cIjogXCLQkdC+0LvQs9Cw0YDRgdC60LjQuSDQu9C10LJcIixcclxuICAgICAgICBcImh1ZlwiOiBcItCy0LXQvdCz0LXRgNGB0LrQuNC5INGE0L7RgNC40L3RglwiLFxyXG4gICAgICAgIFwidHJ5XCI6IFwi0KLRg9GA0LXRhtC60LDRjyDQu9C40YDQsFwiLFxyXG4gICAgICAgIFwiYWxsXCI6IFwi0JDQu9Cx0LDQvdGB0LrQuNC5INC70LXQulwiLFxyXG4gICAgICAgIFwiaHJrXCI6IFwiWNC+0YDQstCw0YLRgdC60LDRjyDQutGD0L3QsFwiLFxyXG4gICAgICAgIFwiY3prXCI6IFwi0KfQtdGI0YHQutCw0Y8g0LrRgNC+0L3QsFwiLFxyXG4gICAgICAgIFwiZ2VsXCI6IFwi0JPRgNGD0LfQuNC90YHQutC40Lkg0LvQsNGA0LhcIixcclxuICAgICAgICBcImxrclwiOiBcItCo0YDQuC3Qu9Cw0L3QutC40LnRgdC60LDRjyDRgNGD0L/QuNGPXCIsXHJcbiAgICAgICAgXCJ0bmRcIjogXCLQotGD0L3QuNGB0YHQutC40Lkg0LTQuNC90LDRgFwiLFxyXG4gICAgICAgIFwiaWxzXCI6IFwi0JjQt9GA0LDQuNC70YzRgdC60LjQuSDRiNC10LrQtdC70YxcIixcclxuICAgICAgICBcImpvZFwiOiBcItCY0L7RgNC00LDQvdGB0LrQuNC5INC00LjQvdCw0YBcIixcclxuICAgICAgICBcImJ5blwiOiBcItCR0LXQu9C+0YDRg9GB0YHQutC40Lkg0YDRg9Cx0LvRjFwiLFxyXG4gICAgICAgIFwiZWdwXCI6IFwi0JXQs9C40L/QtdGC0YHQutC40Lkg0YTRg9C90YJcIixcclxuICAgICAgICBcInVhaFwiOiBcItCj0LrRgNCw0LjQvdGB0LrQsNGPINCz0YDQuNCy0L3QsFwiLFxyXG4gICAgICAgIFwiY255XCI6IFwi0JrQuNGC0LDQudGB0LrQuNC5INGO0LDQvdGMXCIsXHJcbiAgICAgICAgXCJ0aGJcIjogXCLQotCw0LjQu9Cw0L3QtNGB0LrQuNC5INCx0LDRglwiLFxyXG4gICAgICAgIFwidm5kXCI6IFwi0JLRjNC10YLQvdCw0LzRgdC60LjQuSDQtNC+0L3Qs1wiLFxyXG4gICAgICAgIFwicGhwXCI6IFwi0KTQuNC70LjQv9C/0LjQvdGB0LrQvtC1INC/0LXRgdC+XCIsXHJcbiAgICAgICAgXCJtYWRcIjogXCLQnNCw0YDQvtC60LrQsNC90YHQutC40Lkg0LTQuNGA0YXQsNC8XCIsXHJcbiAgICAgICAgXCJhdWRcIjogXCLQkNCy0YHRgtGA0LDQu9C40LnRgdC60LjQuSDQtNC+0LvQu9Cw0YBcIixcclxuICAgICAgICBcImFyc1wiOiBcItCQ0YDQs9C10L3RgtC40L3RgdC60L7QtSDQv9C10YHQvlwiLFxyXG4gICAgICAgIFwianB5XCI6IFwi0K/Qv9C+0L3RgdC60LDRjyDQuNC10L3QsFwiLFxyXG4gICAgICAgIFwiaWRyXCI6IFwi0JjQvdC00L7QvdC10LfQuNC50YHQutCw0Y8g0YDRg9C/0LjRj1wiLFxyXG4gICAgICAgIFwiaXNrXCI6IFwi0JjRgdC70LDQvdC00YHQutCw0Y8g0LrRgNC+0L3QsFwiLFxyXG4gICAgICAgIFwiYW1kXCI6IFwi0JDRgNC80Y/QvdGB0LrQuNC5INC00YDQsNC8XCIsXHJcbiAgICAgICAgXCJyb25cIjogXCLQoNGD0LzRi9C90YHQutCw0Y8g0LvQtdGPXCIsXHJcbiAgICAgICAgXCJzZ2RcIjogXCLQodC40L3Qs9Cw0L/Rg9GA0YHQutC40Lkg0LTQvtC70LvQsNGAXCIsXHJcbiAgICAgICAgXCJzYnBcIjogXCLQqNC+0YLQu9Cw0L3QtNGB0LrQuNC5INGE0YPQvdGCXCIsXHJcbiAgICAgICAgXCJjYWRcIjogXCLQmtCw0L3QsNC00YHQutC40Lkg0LTQvtC70LvQsNGAXCIsXHJcbiAgICAgICAgXCJicmxcIjogXCLQkdGA0LDQt9C40LvRjNGB0LrQuNC5INGA0LXQsNC7XCIsXHJcbiAgICAgICAgXCJ6YXJcIjogXCLQrtC20L3QvtCw0YTRgNC40LrQsNC90YHQutC40Lkg0YDRjdC90LRcIixcclxuICAgICAgICBcImluclwiOiBcItCY0L3QtNC40LnRgdC60LDRjyDRgNGD0L/QuNGPXCIsXHJcbiAgICAgICAgXCJyc2RcIjogXCLQodC10YDQsdGB0LrQuNC5INC00LjQvdCw0YBcIixcclxuICAgICAgICBcIm56ZFwiOiBcItCd0L7QstC+0LfQtdC70LDQvdC00YHQutC40Lkg0LTQvtC70LvQsNGAXCIsXHJcbiAgICAgICAgXCJteXJcIjogXCJN0LDQu9Cw0LnQt9C40LnRgdC60LjQuSDRgNC40L3Qs9Cz0LjRglwiLFxyXG4gICAgICAgIFwibXVyXCI6IFwi0JzQsNCy0YDQuNC60LjQudGB0LrQsNGPINGA0YPQv9C40Y9cIixcclxuICAgICAgICBcImhrZFwiOiBcItCT0L7QvdC60L7QvdCz0YHQutC40Lkg0LTQvtC70LvQsNGAXCIsXHJcbiAgICAgICAgXCJrcndcIjogXCLQrtC20L3QvtC60L7RgNC10LnRgdC60LDRjyDQstC+0L3QsFwiLFxyXG4gICAgICAgIFwibXhuXCI6IFwi0JzQtdC60YHQuNC60LDQvdGB0LrQvtC1INC/0LXRgdC+XCIsXHJcbiAgICAgICAgXCJta2RcIjogXCLQnNCw0LrQtdC00L7QvdGB0LrQuNC5INC00LjQvdCw0YBcIixcclxuICAgICAgICBcImRvcFwiOiBcItCU0L7QvNC40L3QuNC60LDQvdGB0LrQvtC1INC/0LXRgdC+XCIsXHJcbiAgICAgICAgXCJrZXNcIjogXCLQmtC10L3QuNC50YHQutC40Lkg0YjQuNC70LvQuNC90LNcIixcclxuICAgICAgICBcImRlbVwiOiBcItCd0LXQvNC10YbQutCw0Y8g0LzQsNGA0LrQsFwiLFxyXG4gICAgICAgIFwiZWVrXCI6IFwi0K3RgdGC0L7QvdGB0LrQsNGPINC60YDQvtC90LBcIixcclxuICAgICAgICBcImx0bFwiOiBcItCb0LjRgtC+0LLRgdC60LjQuSDQu9C40YJcIixcclxuICAgICAgICBcImx2bFwiOiBcItCb0LDRgtCy0LjQudGB0LrQuNC5INC70LDRglwiLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmh1bmRyZWR0aHNSdSA9IHtcclxuICAgICAgICAnZXVyJzogJ9GG0LXQvdGC0L7QsicsXHJcbiAgICAgICAgJ3VzZCc6ICfRhtC10L3RgtC+0LInLFxyXG4gICAgICAgICdnYnAnOiAn0L/QtdC90LgnLFxyXG4gICAgICAgICdydWInOiAn0LrQvtC/0LXQtdC6JyxcclxuICAgICAgICAncGxuJzogJ9Cz0YDQvtGIJyxcclxuICAgICAgICAnbHZsJzogJ9GB0LDQvdGC0LjQvNC+0LInLFxyXG4gICAgICAgICdrenQnOiAn0YLQuNGL0L0nLFxyXG4gICAgICAgICdjaGYnOiAn0YDQsNC/0L/QtdC90L7QsicsXHJcbiAgICAgICAgJ2FlZCc6ICfRhNC40LvRgScsXHJcbiAgICAgICAgJ2Rrayc6ICfRjdGA0LUnLFxyXG4gICAgICAgICdzZWsnOiAn0Y3RgNC1JyxcclxuICAgICAgICAnbm9rJzogJ9GN0YDQtScsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudW5pdE5hbWVzUnUgPSB7XHJcbiAgICAgICAgXCIwXCI6IFwiXCIsXHJcbiAgICAgICAgXCIxXCI6IFwi0L7QtNC40L1cIixcclxuICAgICAgICBcIjJcIjogXCLQtNCy0LBcIixcclxuICAgICAgICBcIjNcIjogXCLRgtGA0LhcIixcclxuICAgICAgICBcIjRcIjogXCLRh9C10YLRi9GA0LVcIixcclxuICAgICAgICBcIjVcIjogXCLQv9GP0YLRjFwiLFxyXG4gICAgICAgIFwiNlwiOiBcItGI0LXRgdGC0YxcIixcclxuICAgICAgICBcIjdcIjogXCLRgdC10LzRjFwiLFxyXG4gICAgICAgIFwiOFwiOiBcItCy0L7RgdC10LzRjFwiLFxyXG4gICAgICAgIFwiOVwiOiBcItC00LXQstGP0YLRjFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGVlbk5hbWVzUnUgPSB7XHJcbiAgICAgICAgXCIxMFwiOiBcItC00LXRgdGP0YLRjFwiLFxyXG4gICAgICAgIFwiMTFcIjogXCLQvtC00LjQvdCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiMTJcIjogXCLQtNCy0LXQvdCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiMTNcIjogXCLRgtGA0LXQvdCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiMTRcIjogXCLRh9C10YLRi9GA0L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjE1XCI6IFwi0L/Rj9GC0L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjE2XCI6IFwi0YjQtdGB0L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjE3XCI6IFwi0YHQtdC80L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjE4XCI6IFwi0LLQvtGB0LXQvNC90LDQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCIxOVwiOiBcItC00LXQstGP0YLQvdCw0LTRhtCw0YLRjFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGVubmVyTmFtZXNSdSA9IHtcclxuICAgICAgICBcIjJcIjogXCLQtNCy0LDQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCIzXCI6IFwi0YLRgNC40LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiNFwiOiBcItGB0L7RgNC+0LpcIixcclxuICAgICAgICBcIjVcIjogXCLQv9GP0YzQtNC10YHRj9GCXCIsXHJcbiAgICAgICAgXCI2XCI6IFwi0YjQtdGB0YLRjNC00LXRgdGP0YJcIixcclxuICAgICAgICBcIjdcIjogXCLRgdC10LzRjNC00LXRgdGP0YJcIixcclxuICAgICAgICBcIjhcIjogXCLQstC+0YHQtdC80YzQtNC10YHRj9GCXCIsXHJcbiAgICAgICAgXCI5XCI6IFwi0LTQtdCy0Y/QvdC+0YHRgtC+XCJcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5odW5kcmVkc05hbWVzUnUgPSB7XHJcbiAgICAgICAgXCJcIjogXCJcIixcclxuICAgICAgICBcIjBcIjogXCJcIixcclxuICAgICAgICBcIjFcIjogXCLRgdGC0L5cIixcclxuICAgICAgICBcIjJcIjogXCLQtNCy0LXRgdGC0LhcIixcclxuICAgICAgICBcIjNcIjogXCLRgtGA0LjRgdGC0LBcIixcclxuICAgICAgICBcIjRcIjogXCLRh9C10YLRi9GA0LXRgdGC0LBcIixcclxuICAgICAgICBcIjVcIjogXCLQv9GP0YLRjNGB0L7RglwiLFxyXG4gICAgICAgIFwiNlwiOiBcItGI0LXRgdGC0YzRgdC+0YJcIixcclxuICAgICAgICBcIjdcIjogXCLRgdC10LzRjNGB0L7RglwiLFxyXG4gICAgICAgIFwiOFwiOiBcItCy0L7RgdC10LzRjNGB0L7RglwiLFxyXG4gICAgICAgIFwiOVwiOiBcItC00LXQstGP0YLRjNGB0L7RglwiXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY3VycmVuY3lFbiA9IHtcclxuICAgICAgICBcImV1clwiOiBcImV1cm9cIixcclxuICAgICAgICBcInVzZFwiOiBcImRvbGxhclwiLFxyXG4gICAgICAgIFwiZ2JwXCI6IFwiYnJpdGlzaCBwb3VuZFwiLFxyXG4gICAgICAgIFwicnViXCI6IFwicnVzc2lhbiBydWJsZVwiLFxyXG4gICAgICAgIFwicGxuXCI6IFwicG9saXNoIHpsb3R5XCIsXHJcbiAgICAgICAgXCJiZ25cIjogXCJidWxnYXJpYW4gbGV2XCIsXHJcbiAgICAgICAgXCJodWZcIjogXCJodW5nYXJpYW4gZm9yaW50XCIsXHJcbiAgICAgICAgXCJ0cnlcIjogXCJ0dXJraXNoIGxpcmFcIixcclxuICAgICAgICBcImhya1wiOiBcImNyb2F0aWFuIGt1bmFcIixcclxuICAgICAgICBcImN6a1wiOiBcImN6ZWNoIGtvcnVuYVwiLFxyXG4gICAgICAgIFwiZ2VsXCI6IFwiZ2VvcmdpYW4gbGFyaVwiLFxyXG4gICAgICAgIFwiYWxsXCI6IFwiYWxiYW5pYW4gbGVrXCIsXHJcbiAgICAgICAgXCJsa3JcIjogXCJzcmkgbGFua2FuIHJ1cGVlXCIsXHJcbiAgICAgICAgXCJzZWtcIjogXCJzd2VkaXNoIGtyb25hXCIsXHJcbiAgICAgICAgXCJ0aGJcIjogXCJ0aGFpIGJhaHRcIixcclxuICAgICAgICBcInRuZFwiOiBcInR1bmlzaWFuIGRpbmFyXCIsXHJcbiAgICAgICAgXCJpbHNcIjogXCJpc3JhZWxpIHNoZXFlbFwiLFxyXG4gICAgICAgIFwiY2hmXCI6IFwic3dpc3MgZnJhbmNcIixcclxuICAgICAgICBcIm5va1wiOiBcIm5vcndlZ2lhbiBrcm9uZVwiLFxyXG4gICAgICAgIFwiZGtrXCI6IFwiZGFuaXNoIGtyb25lXCIsXHJcbiAgICAgICAgXCJhZWRcIjogXCJ1bml0ZWQgYXJhYiBlbWlyYXRlcyBkaXJoYW1cIixcclxuICAgICAgICBcImNhZFwiOiBcImNhbmFkaWFuIGRvbGxhclwiLFxyXG4gICAgICAgIFwiYnluXCI6IFwiYmVsYXJ1c2lhbiBuZXcgcnVibGVcIixcclxuICAgICAgICBcImF1ZFwiOiBcImF1c3RyYWxpYW4gZG9sbGFyXCIsXHJcbiAgICAgICAgXCJqcHlcIjogXCJqYXBhbmVzZSB5ZW5cIixcclxuICAgICAgICBcImNueVwiOiBcImNoaW5lc2UgeXVhblwiLFxyXG4gICAgICAgIFwidWFoXCI6IFwidWtyYWluaWFuIGhyeXZuaWFcIixcclxuICAgICAgICBcImlza1wiOiBcImljZWxhbmQga3JvbmFcIixcclxuICAgICAgICBcIm56ZFwiOiBcIm5ldyB6ZWFsYW5kIGRvbGxhclwiLFxyXG4gICAgICAgIFwia3J3XCI6IFwic291dGgga29yZWFuIHdvblwiLFxyXG4gICAgICAgIFwicm9uXCI6IFwicm9tYW5pYW4gbGV1XCIsXHJcbiAgICAgICAgXCJzZ2RcIjogXCJzaW5nYXBvcmUgZG9sbGFyXCIsXHJcbiAgICAgICAgXCJpZHJcIjogXCJpbmRvbmVzaWFuIHJ1cGlhaFwiLFxyXG4gICAgICAgIFwiaGtkXCI6IFwiaG9uZyBrb25nIGRvbGxhclwiLFxyXG4gICAgICAgIFwic2JwXCI6IFwic2NvdHRpc2ggcG91bmRcIixcclxuICAgICAgICBcInphclwiOiBcInNvdXRoIGFmcmljYW4gcmFuZFwiLFxyXG4gICAgICAgIFwibXhuXCI6IFwibWV4aWNhbiBwZXNvXCIsXHJcbiAgICAgICAgXCJta2RcIjogXCJtYWNlZG9uaWFuIGRpbmFyXCIsXHJcbiAgICAgICAgXCJicmxcIjogXCJicmF6aWxpYW4gcmVhbFwiLFxyXG4gICAgICAgIFwiZWdwXCI6IFwiZWd5cHRpYW4gcG91bmRcIixcclxuICAgICAgICBcImFyc1wiOiBcImFyZ2VudGluZSBwZXNvXCIsXHJcbiAgICAgICAgXCJrZXNcIjogXCJrZW55YSBzaGlsbGluZ1wiLFxyXG4gICAgICAgIFwibXlyXCI6IFwibWFsYXlzaWFuIHJpbmdnaXRcIixcclxuICAgICAgICBcIm11clwiOiBcIm1hdXJpdGlhbiBydXBlZVwiLFxyXG4gICAgICAgIFwicGhwXCI6IFwicGhpbGlwcGluZSBwZXNvXCIsXHJcbiAgICAgICAgXCJpbnJcIjogXCJpbmRpYW4gcnVwZWVcIixcclxuICAgICAgICBcImt6dFwiOiBcImthemFraHN0YW4gdGVuZ2VcIixcclxuICAgICAgICBcImFtZFwiOiBcImFybWVuaWFuIGRyYW1cIixcclxuICAgICAgICBcIm1hZFwiOiBcIm1vcm9jY2FuIGRpcmhhbVwiLFxyXG4gICAgICAgIFwicnNkXCI6IFwic2VyYmlhbiBkaW5hclwiLFxyXG4gICAgICAgIFwidm5kXCI6IFwidmlldG5hbWVzZSBkb25nXCIsXHJcbiAgICAgICAgXCJkb3BcIjogXCJkb21pbmljYW4gcGVzb1wiLFxyXG4gICAgICAgIFwiam9kXCI6IFwiam9yZGFuaWFuIGRpbmFyXCIsXHJcbiAgICAgICAgXCJsdmxcIjogXCJsYXR2aWFuIGxhdHNcIixcclxuICAgICAgICBcImx0bFwiOiBcImxpdGh1YW5pYW4gbGl0YXNcIixcclxuICAgICAgICBcImVla1wiOiBcImVzdG9uaWFuIGtyb29uXCIsXHJcbiAgICAgICAgXCJkZW1cIjogXCJnZXJtYW4gbWFya1wiLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmh1bmRyZWR0aHNFbiA9IHtcclxuICAgICAgICAnZXVyJzogJ2NlbnRzJyxcclxuICAgICAgICAndXNkJzogJ2NlbnRzJyxcclxuICAgICAgICAnZ2JwJzogJ3BlbmNlJyxcclxuICAgICAgICAncnViJzogJ2tvcGVrcycsXHJcbiAgICAgICAgJ3Bsbic6ICdncm9zeicsXHJcbiAgICAgICAgJ2x2bCc6ICdzYW50aW1zJyxcclxuICAgICAgICAna3p0JzogJ3TEsXlucycsXHJcbiAgICAgICAgJ2NoZic6ICdyYXBwZW5zJyxcclxuICAgICAgICAnYWVkJzogJ2ZpbHMnLFxyXG4gICAgICAgICdka2snOiAnb3JlJyxcclxuICAgICAgICAnc2VrJzogJ29yZScsXHJcbiAgICAgICAgJ25vayc6ICdvcmUnLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZFRyYW5zbGF0aW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==