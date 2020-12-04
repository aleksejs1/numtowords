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
/* harmony import */ var numbers2words__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! numbers2words */ "./node_modules/numbers2words/build/numbers2words.min.js");
/* harmony import */ var numbers2words__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(numbers2words__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./translations */ "./src/js/translations.js");










var NumToWords = function NumToWords() {
  this.translator = new numbers2words__WEBPACK_IMPORTED_MODULE_7___default.a("EN_US");
  this.translations = new _translations__WEBPACK_IMPORTED_MODULE_8__["default"]();
};

NumToWords.prototype.getVals = function () {
  return this.translations.currencyLv;
};

NumToWords.prototype.units = function (numericUnit) {
  return this.translations.unitNamesLv[numericUnit];
};

NumToWords.prototype.teens = function (teens) {
  return this.translations.teenNamesLv[teens];
};

NumToWords.prototype.tenners = function (numericTen) {
  if (numericTen[0] === "0") {
    return this.units(numericTen[1]);
  }

  if (numericTen[0] === "1") {
    return this.teens(numericTen);
  }

  return this.translations.tennerNamesLv[numericTen[0]] + " " + this.units(numericTen[1]);
};

NumToWords.prototype.hundreds = function (numericHundred) {
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
  return this.uni(num, 6, 'tūkstotis', 'tūkstoši', 'hundreds');
};

NumToWords.prototype.millions = function (num) {
  return this.uni(num, 9, 'miljons', 'miljoni', 'thousands');
};

NumToWords.prototype.billions = function (num) {
  return this.uni(num, 12, 'miljards', 'miljardi', 'millions');
};

NumToWords.prototype.trillions = function (num) {
  return this.uni(num, 15, 'triljons', 'triljoni', 'billions');
};

NumToWords.prototype.quadrillions = function (num) {
  return this.uni(num, 18, 'kvadriljons', 'kvadriljoni', 'trillions');
};

NumToWords.prototype.getResult = function (num, cent, eur, lang) {
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

  if (lang === 'en') {
    un = 'and';
    comats = 'coma';
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

  if (lang === 'en') {
    try {
      num = this.translator.toWords(Number(num));
    } catch (e) {
      num = 'A lot of';
    }
  } else {
    num = '0'.repeat(18 - num.length) + num;
    num = this.quadrillions(num);

    if (num === '') {
      num = 'nulle';
    }
  }

  if (lang === 'lv') {
    if (orig.length > 1 && orig[orig.length - 1] === "1" && orig[orig.length - 2] !== "1" || orig === "1") {} else {
      if (eur[eur.length - 1] != "o" && eur[eur.length - 1] != "e") {
        eur = eur.substring(0, eur.length - 1) + 'i';
      }

      if (eur[eur.length - 2] === "i") {
        eur = eur.substring(0, eur.length - 1);
      }
    }
  }

  return num + ' ' + eur.toLowerCase() + centi;
};

NumToWords.prototype.getFull = function (valuta, lang, num) {
  var eden = {};
  var sm = {};

  if (lang === 'en') {
    eden = this.translations.currencyEn;
    sm = this.translations.hundredthsEn;
  } else {
    eden = this.translations.currencyLv;
    sm = this.translations.hundredthsLv;
  }

  var smres = '(1/100) ' + valuta.toUpperCase();

  if (hasOwnProperty.call(sm, valuta)) {
    smres = sm[valuta];
  }

  var res = this.getResult(num, smres, eden[valuta], lang);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJudW10b3dvcmRzIiwiTnVtVG9Xb3JkcyIsInVwZGF0ZUFsbCIsImN1cnJlbmN5IiwiJCIsInZhbCIsImxhbmciLCJudW0iLCJyZXMiLCJnZXRGdWxsIiwiaHRtbCIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJmYWRlSW4iLCJzZXRUaW1lb3V0IiwiZmFkZU91dCIsInNob3dIZWxwIiwiaGlkZSIsIm9uIiwic2VsIiwidmFscyIsImdldFZhbHMiLCJrZXkiLCJ2YWxhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRyYW5zbGF0b3IiLCJUMlciLCJ0cmFuc2xhdGlvbnMiLCJXb3JkVHJhbnNsYXRpb25zIiwicHJvdG90eXBlIiwiY3VycmVuY3lMdiIsInVuaXRzIiwibnVtZXJpY1VuaXQiLCJ1bml0TmFtZXNMdiIsInRlZW5zIiwidGVlbk5hbWVzTHYiLCJ0ZW5uZXJzIiwibnVtZXJpY1RlbiIsInRlbm5lck5hbWVzTHYiLCJodW5kcmVkcyIsIm51bWVyaWNIdW5kcmVkIiwiZ2VuZXJpY0NhbGxlciIsIm1ldGhvZE5hbWUiLCJhcmdzIiwiY2FsbCIsImFyZ3VtZW50cyIsInNoaWZ0IiwiYXBwbHkiLCJ1bmkiLCJsZW4iLCJ2MSIsInZtIiwibmZtIiwibWlsaW9uaSIsInN1YnN0cmluZyIsInRob3VzYW5kc2NpIiwibWlsaldvcmQiLCJ0aG91c2FuZHMiLCJtaWxsaW9ucyIsImJpbGxpb25zIiwidHJpbGxpb25zIiwicXVhZHJpbGxpb25zIiwiZ2V0UmVzdWx0IiwiY2VudCIsImV1ciIsInBvaW50IiwibGFzdEluZGV4T2YiLCJjb21hIiwicG9pbnRDb3VudCIsInNwbGl0IiwibGVuZ3RoIiwiY29tYUNvdW50Iiwic2VwIiwidW4iLCJjb21hdHMiLCJjZW50aSIsInJlcGxhY2UiLCJjZW50aTEiLCJjZW50aTIiLCJvcmlnIiwidG9Xb3JkcyIsIk51bWJlciIsImUiLCJyZXBlYXQiLCJ0b0xvd2VyQ2FzZSIsInZhbHV0YSIsImVkZW4iLCJzbSIsImN1cnJlbmN5RW4iLCJodW5kcmVkdGhzRW4iLCJodW5kcmVkdGhzTHYiLCJzbXJlcyIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFVBQVUsR0FBRyxJQUFJQyxtREFBSixFQUFqQjs7QUFFQSxTQUFTQyxTQUFULEdBQXFCO0FBQ2pCLE1BQUlDLFFBQVEsR0FBR0MsNkNBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsR0FBYixFQUFmO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRiw2Q0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NDLEdBQWhDLEVBQVg7QUFDQSxNQUFJRSxHQUFHLEdBQUdILDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFDLEdBQVIsRUFBVjtBQUNBLE1BQUlHLEdBQUcsR0FBR1IsVUFBVSxDQUFDUyxPQUFYLENBQW1CTixRQUFuQixFQUE2QkcsSUFBN0IsRUFBbUNDLEdBQW5DLENBQVY7QUFDQUgsK0NBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVU0sSUFBVixDQUFlRixHQUFmO0FBQ0g7O0FBRUQsU0FBU0csSUFBVCxHQUFnQjtBQUNaQyxXQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCViw2Q0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVTSxJQUFWLEVBQTlCO0FBQ0FOLCtDQUFDLENBQUMsT0FBRCxDQUFELENBQVdXLE1BQVg7QUFDQUMsWUFBVSxDQUFDLFlBQVc7QUFBQ1osaURBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2EsT0FBWDtBQUFzQixHQUFuQyxF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V0FBTyxTQU5TO0FBT2hCLFdBQU8sT0FQUztBQVFoQixXQUFPLFNBUlM7QUFTaEIsV0FBTyxNQVRTO0FBVWhCLFdBQU8sS0FWUztBQVdoQixXQUFPLEtBWFM7QUFZaEIsV0FBTztBQVpTLEdBQXBCO0FBY0gsQ0EzTEQ7O0FBNkxlN0QsK0VBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwJ1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBOdW1Ub1dvcmRzIGZyb20gXCIuL251bXRvd29yZHNcIjtcclxuXHJcbnZhciBudW10b3dvcmRzID0gbmV3IE51bVRvV29yZHMoKTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUFsbCgpIHtcclxuICAgIHZhciBjdXJyZW5jeSA9ICQoXCIjdmFsdXRhXCIpLnZhbCgpO1xyXG4gICAgdmFyIGxhbmcgPSAkKCdpbnB1dFtuYW1lPVwibGFuZ1wiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICB2YXIgbnVtID0gJChcIiNjXCIpLnZhbCgpO1xyXG4gICAgdmFyIHJlcyA9IG51bXRvd29yZHMuZ2V0RnVsbChjdXJyZW5jeSwgbGFuZywgbnVtKTtcclxuICAgICQoXCIjcmVzXCIpLmh0bWwocmVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weSgpIHtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCQoXCIjcmVzXCIpLmh0bWwoKSk7XHJcbiAgICAkKFwiI2FscnRcIikuZmFkZUluKCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyQoXCIjYWxydFwiKS5mYWRlT3V0KCk7fSwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dIZWxwKCkge1xyXG4gICAgJChcIiNoZWxwXCIpLmZhZGVJbigpO1xyXG4gICAgJChcIiNoZWxwLWJ0blwiKS5oaWRlKCk7XHJcbn1cclxuXHJcbiQoXCIjY1wiKS5vbigna2V5dXAnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY1wiKS5vbignY2xpY2snLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ3Bhc3RlJywgdXBkYXRlQWxsKTtcclxuJChcIiN2YWx1dGFcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9bGFuZ10nKS5vbignY2hhbmdlJywgdXBkYXRlQWxsKTtcclxuJChcIiNjb3B5LWJ0blwiKS5vbignY2xpY2snLCBjb3B5KTtcclxuJChcIiNoZWxwLWJ0blwiKS5vbignY2xpY2snLCBzaG93SGVscCk7XHJcblxyXG52YXIgc2VsID0gJyc7XHJcbnZhciB2YWxzID0gbnVtdG93b3Jkcy5nZXRWYWxzKCk7XHJcbmZvciAodmFyIGtleSBpbiB2YWxzKSB7XHJcbiAgICB2YXIgdmFsYSA9IHZhbHNba2V5XS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHNba2V5XS5zbGljZSgxKTtcclxuICAgIHNlbCA9IHNlbCArICc8b3B0aW9uIHZhbHVlPVwiJytrZXkrJ1wiPicra2V5LnRvVXBwZXJDYXNlKCkrJyAnK3ZhbGErJzwvb3B0aW9uPic7XHJcbn07XHJcbiQoXCIjdmFsdXRhXCIpLmh0bWwoc2VsKTtcclxuIiwiaW1wb3J0IFQyVyBmcm9tIFwibnVtYmVyczJ3b3Jkc1wiO1xyXG5pbXBvcnQgV29yZFRyYW5zbGF0aW9ucyBmcm9tIFwiLi90cmFuc2xhdGlvbnNcIjtcclxuXHJcbnZhciBOdW1Ub1dvcmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy50cmFuc2xhdG9yID0gbmV3IFQyVyhcIkVOX1VTXCIpO1xyXG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSBuZXcgV29yZFRyYW5zbGF0aW9ucygpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRWYWxzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5THY7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnVuaXRzID0gZnVuY3Rpb24gKG51bWVyaWNVbml0KSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMudW5pdE5hbWVzTHZbbnVtZXJpY1VuaXRdO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS50ZWVucyA9IGZ1bmN0aW9uICh0ZWVucykge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLnRlZW5OYW1lc0x2W3RlZW5zXTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudGVubmVycyA9IGZ1bmN0aW9uIChudW1lcmljVGVuKSB7XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bml0cyhudW1lcmljVGVuWzFdKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljVGVuWzBdID09PSBcIjFcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlZW5zKG51bWVyaWNUZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy50ZW5uZXJOYW1lc0x2W251bWVyaWNUZW5bMF1dICsgXCIgXCIgKyB0aGlzLnVuaXRzKG51bWVyaWNUZW5bMV0pO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5odW5kcmVkcyA9IGZ1bmN0aW9uIChudW1lcmljSHVuZHJlZCkge1xyXG4gICAgaWYgKG51bWVyaWNIdW5kcmVkWzBdID09PSBcIjBcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY0h1bmRyZWRbMF0gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgcmV0dXJuICd2aWVucyBzaW10cycgKyAnICcgKyB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51bml0cyhudW1lcmljSHVuZHJlZFswXSkgKyAnIHNpbXRpICcgKyB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSk7XHJcbn1cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2VuZXJpY0NhbGxlciA9IGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcclxuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpOyAgLy9jb252ZXJ0cyBhcmd1bWVudHMgdG8gYW4gYXJyYXlcclxuICAgIGFyZ3Muc2hpZnQoKTsgLy9yZW1vdmUgdGhlIG1ldGhvZCBuYW1lXHJcbiAgICByZXR1cm4gdGhpc1ttZXRob2ROYW1lXS5hcHBseSh0aGlzLCBhcmdzKTsgIC8vY2FsbCB5b3VyIG1ldGhvZCB3aXRoIHRoZSBjdXJyZW50IHNjb3BlIGFuZCBwYXNzIHRoZSBhcmd1bWVudHNcclxufTtcclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnVuaSA9IGZ1bmN0aW9uIChudW0sIGxlbiwgdjEsIHZtLCBuZm0pIHtcclxuICAgIHZhciBtaWxpb25pID0gbnVtLnN1YnN0cmluZygwLCAzKTtcclxuICAgIHZhciB0aG91c2FuZHNjaSA9IG51bS5zdWJzdHJpbmcoMywgbGVuKTtcclxuXHJcbiAgICBpZiAobWlsaW9uaSA9PT0gJzAwMCcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmljQ2FsbGVyKG5mbSx0aG91c2FuZHNjaSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1pbGpXb3JkID0gdm07XHJcbiAgICBpZiAobWlsaW9uaVsyXSA9PT0gXCIxXCIgJiYgbWlsaW9uaVsxXSAhPT0gXCIxXCIpIHtcclxuICAgICAgICBtaWxqV29yZCA9IHYxXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odW5kcmVkcyhtaWxpb25pKSArICcgJyttaWxqV29yZCsnICcgKyB0aGlzLmdlbmVyaWNDYWxsZXIobmZtLHRob3VzYW5kc2NpKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudGhvdXNhbmRzID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgcmV0dXJuIHRoaXMudW5pKG51bSwgNiwgJ3TFq2tzdG90aXMnLCAndMWra3N0b8WhaScsICdodW5kcmVkcycpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5taWxsaW9ucyA9IGZ1bmN0aW9uIChudW0pIHtcclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDksICdtaWxqb25zJywgJ21pbGpvbmknLCAndGhvdXNhbmRzJylcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuYmlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCAxMiwgJ21pbGphcmRzJywgJ21pbGphcmRpJywgJ21pbGxpb25zJyk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnRyaWxsaW9ucyA9IGZ1bmN0aW9uIChudW0pIHtcclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDE1LCAndHJpbGpvbnMnLCAndHJpbGpvbmknLCAnYmlsbGlvbnMnKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUucXVhZHJpbGxpb25zID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgcmV0dXJuIHRoaXMudW5pKG51bSwgMTgsICdrdmFkcmlsam9ucycsICdrdmFkcmlsam9uaScsICd0cmlsbGlvbnMnKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0UmVzdWx0ID0gZnVuY3Rpb24gKG51bSwgY2VudCwgZXVyLCBsYW5nKSB7XHJcbiAgICB2YXIgcG9pbnQgPSBudW0ubGFzdEluZGV4T2YoJy4nKTtcclxuICAgIHZhciBjb21hID0gbnVtLmxhc3RJbmRleE9mKCcsJyk7XHJcbiAgICB2YXIgcG9pbnRDb3VudCA9IChudW0uc3BsaXQoXCIuXCIpLmxlbmd0aCAtIDEpXHJcbiAgICB2YXIgY29tYUNvdW50ID0gKG51bS5zcGxpdChcIixcIikubGVuZ3RoIC0gMSlcclxuICAgIHZhciBzZXAgPSAtMTtcclxuICAgIGlmIChwb2ludCAhPT0gLTEgJiYgcG9pbnQgPiBjb21hICYmIHBvaW50Q291bnQgPT09IDEpIHtcclxuICAgICAgICB2YXIgc2VwID0gcG9pbnQ7XHJcbiAgICB9IGVsc2UgaWYgKGNvbWEgIT09IC0xICYmIGNvbWEgPiBwb2ludCAmJiBjb21hQ291bnQgPT09IDEpIHtcclxuICAgICAgICB2YXIgc2VwID0gY29tYTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbGVuZ3RoID0gbnVtLmxlbmd0aDtcclxuICAgIHZhciB1biA9ICd1bidcclxuICAgIHZhciBjb21hdHMgPSAna29tYXRzJztcclxuICAgIGlmIChsYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgdW4gPSAnYW5kJ1xyXG4gICAgICAgIGNvbWF0cyA9ICdjb21hJztcclxuICAgIH1cclxuICAgIHZhciBjZW50aSA9ICcgJyt1bisnIDAwICcgKyBjZW50O1xyXG4gICAgaWYgKHNlcCAhPT0gLTEpIHtcclxuICAgICAgICBjZW50aSA9IG51bS5zdWJzdHJpbmcoc2VwKzEsIGxlbmd0aCk7XHJcbiAgICAgICAgY2VudGkgPSBjZW50aS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIilcclxuICAgICAgICBudW0gPSBudW0uc3Vic3RyaW5nKDAsIHNlcCk7XHJcbiAgICAgICAgaWYgKGNlbnRpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnIDAwICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VudGkubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpKycwICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VudGkubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNlbnRpMSA9IGNlbnRpLnN1YnN0cmluZygwLDIpO1xyXG4gICAgICAgICAgICB2YXIgY2VudGkyID0gY2VudGkuc3Vic3RyaW5nKDIsY2VudGkubGVuZ3RoKTtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpMSArICcsICcgKyBjb21hdHMgKycsICcrIGNlbnRpMisnICcgKyBjZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3JpZyA9IG51bTtcclxuICAgIG51bSA9IG51bS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIilcclxuXHJcbiAgICBpZiAobGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG51bSA9IHRoaXMudHJhbnNsYXRvci50b1dvcmRzKE51bWJlcihudW0pKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgbnVtID0gJ0EgbG90IG9mJztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG51bSA9ICcwJy5yZXBlYXQoMTggLSBudW0ubGVuZ3RoKSArIG51bTtcclxuICAgICAgICBudW0gPSB0aGlzLnF1YWRyaWxsaW9ucyhudW0pO1xyXG4gICAgICAgIGlmIChudW0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgIG51bSA9ICdudWxsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChsYW5nID09PSAnbHYnKSB7XHJcbiAgICAgICAgaWYgKChvcmlnLmxlbmd0aCA+IDEgJiYgb3JpZ1tvcmlnLmxlbmd0aC0xXSA9PT0gXCIxXCIgJiYgb3JpZ1tvcmlnLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG9yaWcgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGV1cltldXIubGVuZ3RoLTFdICE9IFwib1wiICYmIGV1cltldXIubGVuZ3RoLTFdICE9IFwiZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKSArICdpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMl0gPT09IFwiaVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtICsgJyAnICsgZXVyLnRvTG93ZXJDYXNlKCkgKyBjZW50aTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0RnVsbCA9IGZ1bmN0aW9uICh2YWx1dGEsIGxhbmcsIG51bSkge1xyXG4gICAgdmFyIGVkZW4gPSB7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNtID0ge1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUVuO1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc0VuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlZGVuID0gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lMdjtcclxuICAgICAgICBzbSA9IHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWR0aHNMdjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIHNtcmVzID0gJygxLzEwMCkgJyArIHZhbHV0YS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc20sIHZhbHV0YSkpIHtcclxuICAgICAgICBzbXJlcyA9IHNtW3ZhbHV0YV07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlcyA9IHRoaXMuZ2V0UmVzdWx0KG51bSwgc21yZXMsIGVkZW5bdmFsdXRhXSwgbGFuZyk7XHJcbiAgICByZXMgPSByZXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXMuc2xpY2UoMSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtVG9Xb3JkcztcclxuIiwidmFyIFdvcmRUcmFuc2xhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmN1cnJlbmN5THYgPSB7XHJcbiAgICAgICAgXCJldXJcIjogXCJldXJvXCIsXHJcbiAgICAgICAgXCJ1c2RcIjogXCJkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJnYnBcIjogXCJMaWVsYnJpdMSBbmlqYXMgbcSBcmNpxYZhXCIsXHJcbiAgICAgICAgXCJydWJcIjogXCJLcmlldmlqYXMgcnVibGlzXCIsXHJcbiAgICAgICAgXCJwbG5cIjogXCJQb2xpamFzIHpsb3RzXCIsXHJcbiAgICAgICAgXCJrenRcIjogXCJLYXphaHN0xIFuYXMgdGVuZ2VcIixcclxuICAgICAgICBcImNoZlwiOiBcIsWgdmVpY2VzIGZyYW5rc1wiLFxyXG4gICAgICAgIFwiYWVkXCI6IFwiQXB2aWVub3RvIEFyxIFidSBFbWlyxIF0dSBkaXJoYW1zXCIsXHJcbiAgICAgICAgXCJka2tcIjogXCJExIFuaWphcyBrcm9uYVwiLFxyXG4gICAgICAgIFwic2VrXCI6IFwiWnZpZWRyaWphcyBrcm9uYVwiLFxyXG4gICAgICAgIFwibm9rXCI6IFwiTm9ydsSTxKNpamFzIGtyb25hXCIsXHJcbiAgICAgICAgXCJiZ25cIjogXCJCdWxnxIFyaWphcyBsZXZhXCIsXHJcbiAgICAgICAgXCJodWZcIjogXCJVbmfEgXJpamFzIGZvcmludHNcIixcclxuICAgICAgICBcInRyeVwiOiBcIlR1cmNpamFzIGxpcmFcIixcclxuICAgICAgICBcImFsbFwiOiBcIkFsYsSBbmlqYXMgbGVrc1wiLFxyXG4gICAgICAgIFwiaHJrXCI6IFwiSG9ydsSBdGlqYXMga3VuYVwiLFxyXG4gICAgICAgIFwiY3prXCI6IFwixIxlaGlqYXMga3JvbmFcIixcclxuICAgICAgICBcImdlbFwiOiBcIkdydXppamFzIGxhcmlcIixcclxuICAgICAgICBcImxrclwiOiBcIsWgcmlsYW5rYXMgcsWrcGlqYVwiLFxyXG4gICAgICAgIFwidG5kXCI6IFwiVHVuaXNpamFzIGRpbsSBcnNcIixcclxuICAgICAgICBcImlsc1wiOiBcIkl6cmHEk2xhcyDFoWVrZWxzXCIsXHJcbiAgICAgICAgXCJqb2RcIjogXCJKb3JkxIFuaWphcyBkaW7EgXJzXCIsXHJcbiAgICAgICAgXCJieW5cIjogXCJCYWx0a3JpZXZpamFzIHJ1Ymxpc1wiLFxyXG4gICAgICAgIFwiZWdwXCI6IFwixJLEo2lwdGVzIG3EgXJjacWGYVwiLFxyXG4gICAgICAgIFwidWFoXCI6IFwiVWtyYWluYXMgZ3Jpdm5hXCIsXHJcbiAgICAgICAgXCJjbnlcIjogXCLEtsSrbmFzIGp1YcWGYVwiLFxyXG4gICAgICAgIFwidGhiXCI6IFwiVGFpemVtZXMgYmF0c1wiLFxyXG4gICAgICAgIFwidm5kXCI6IFwiVmpldG5hbWFzIGRvbmdzXCIsXHJcbiAgICAgICAgXCJwaHBcIjogXCJGaWxpcMSrbnUgcGVzb1wiLFxyXG4gICAgICAgIFwibWFkXCI6IFwiTWFyb2thcyBkaXJoYW1zXCIsXHJcbiAgICAgICAgXCJhdWRcIjogXCJBdXN0csSBbGlqYXMgZG9sxIFyc1wiLFxyXG4gICAgICAgIFwiYXJzXCI6IFwiQXJnZW50xKtuYXMgcGVzb1wiLFxyXG4gICAgICAgIFwianB5XCI6IFwiSmFwxIFuYXMgasSTbmFcIixcclxuICAgICAgICBcImlkclwiOiBcIkluZG9uxJN6aWphcyByxatwaWphXCIsXHJcbiAgICAgICAgXCJpc2tcIjogXCJJc2xhbmRlcyBrcm9uYVwiLFxyXG4gICAgICAgIFwiYW1kXCI6IFwiQXJtxJNuaWphcyBkcmFtc1wiLFxyXG4gICAgICAgIFwicm9uXCI6IFwiUnVtxIFuaWphcyBsZWphXCIsXHJcbiAgICAgICAgXCJzZ2RcIjogXCJTaW5nYXDFq3JhcyBkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJzYnBcIjogXCJTa290aWphcyBtxIFyY2nFhmFcIixcclxuICAgICAgICBcImNhZFwiOiBcIkthbsSBZGFzIGRvbMSBcnNcIixcclxuICAgICAgICBcImJybFwiOiBcIkJyYXrEq2xpamFzIHJlxIFsc1wiLFxyXG4gICAgICAgIFwiemFyXCI6IFwiRGllbnZpZMSBZnJpa2FzIHJlbmRzXCIsXHJcbiAgICAgICAgXCJpbnJcIjogXCJJbmRpamFzIHLFq3BpamFcIixcclxuICAgICAgICBcInJzZFwiOiBcIlNlcmJpamFzIGRpbsSBcnNcIixcclxuICAgICAgICBcIm56ZFwiOiBcIkphdW56xJNsYW5kZXMgZG9sxIFyc1wiLFxyXG4gICAgICAgIFwibXlyXCI6IFwiTWFsYWl6aWphcyByaW5naXRzXCIsXHJcbiAgICAgICAgXCJtdXJcIjogXCJNYXVyxKtjaWphcyBzYWxhcyByxatwaWphXCIsXHJcbiAgICAgICAgXCJoa2RcIjogXCJIb25rb25nYXMgZG9sxIFyc1wiLFxyXG4gICAgICAgIFwia3J3XCI6IFwiRGllbnZpZGtvcmVqYXMgdm9uYVwiLFxyXG4gICAgICAgIFwibXhuXCI6IFwiTWVrc2lrYXMgcGVzb1wiLFxyXG4gICAgICAgIFwibWtkXCI6IFwiTWHEt2Vkb25pamFzIGRlbsSBcnNcIixcclxuICAgICAgICBcImRvcFwiOiBcIkRvbWluaWvEgW5hcyBwZXNvXCIsXHJcbiAgICAgICAgXCJrZXNcIjogXCJLZW5pamFzIMWhaWxpxYbFoVwiLFxyXG4gICAgICAgIFwiZGVtXCI6IFwiVsSBY2lqYXMgbWFya2FcIixcclxuICAgICAgICBcImVla1wiOiBcIklnYXVuaWphcyBrcm9uYVwiLFxyXG4gICAgICAgIFwibHRsXCI6IFwiTGlldHV2YXMgbGl0c1wiLFxyXG4gICAgICAgIFwibHZsXCI6IFwiTGF0dmlqYXMgbGF0c1wiLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmh1bmRyZWR0aHNMdiA9IHtcclxuICAgICAgICAnZXVyJzogJ2NlbnRpJyxcclxuICAgICAgICAndXNkJzogJ2NlbnRpJyxcclxuICAgICAgICAnZ2JwJzogJ3BlbmknLFxyXG4gICAgICAgICdydWInOiAna2FwZWlrxIFzJyxcclxuICAgICAgICAncGxuJzogJ2dyb8WhaScsXHJcbiAgICAgICAgJ2x2bCc6ICdzYW50aW1pJyxcclxuICAgICAgICAna3p0JzogJ3RpasSrbmknLFxyXG4gICAgICAgICdjaGYnOiAncmFwZW5pJyxcclxuICAgICAgICAnYWVkJzogJ2ZpbGknLFxyXG4gICAgICAgICdka2snOiAnxJNyaScsXHJcbiAgICAgICAgJ3Nlayc6ICfEk3JpJyxcclxuICAgICAgICAnbm9rJzogJ8STcmknLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnVuaXROYW1lc0x2ID0ge1xyXG4gICAgICAgIFwiMFwiOiBcIlwiLFxyXG4gICAgICAgIFwiMVwiOiBcInZpZW5zXCIsXHJcbiAgICAgICAgXCIyXCI6IFwiZGl2aVwiLFxyXG4gICAgICAgIFwiM1wiOiBcInRyxKtzXCIsXHJcbiAgICAgICAgXCI0XCI6IFwixI1ldHJpXCIsXHJcbiAgICAgICAgXCI1XCI6IFwicGllY2lcIixcclxuICAgICAgICBcIjZcIjogXCJzZcWhaVwiLFxyXG4gICAgICAgIFwiN1wiOiBcInNlcHRpxYZpXCIsXHJcbiAgICAgICAgXCI4XCI6IFwiYXN0b8WGaVwiLFxyXG4gICAgICAgIFwiOVwiOiBcImRldmnFhmlcIlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRlZW5OYW1lc0x2ID0ge1xyXG4gICAgICAgIFwiMTBcIjogXCJkZXNtaXRcIixcclxuICAgICAgICBcIjExXCI6IFwidmllbnBhZHNtaXRcIixcclxuICAgICAgICBcIjEyXCI6IFwiZGl2cGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTNcIjogXCJ0csSrc3BhZHNtaXRcIixcclxuICAgICAgICBcIjE0XCI6IFwixI1ldHJwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxNVwiOiBcInBpZWNwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxNlwiOiBcInNlxaFwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxN1wiOiBcInNlcHRpxYZwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxOFwiOiBcImFzdG/FhnBhZHNtaXRcIixcclxuICAgICAgICBcIjE5XCI6IFwiZGV2acWGcGFkc21pdFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudGVubmVyTmFtZXNMdiA9IHtcclxuICAgICAgICBcIjJcIjogXCJkaXZkZXNtaXRcIixcclxuICAgICAgICBcIjNcIjogXCJ0csSrc2Rlc21pdFwiLFxyXG4gICAgICAgIFwiNFwiOiBcIsSNZXRyZGVzbWl0XCIsXHJcbiAgICAgICAgXCI1XCI6IFwicGllY2Rlc21pdFwiLFxyXG4gICAgICAgIFwiNlwiOiBcInNlxaFkZXNtaXRcIixcclxuICAgICAgICBcIjdcIjogXCJzZXB0acWGZGVzbWl0XCIsXHJcbiAgICAgICAgXCI4XCI6IFwiYXN0b8WGZGVzbWl0XCIsXHJcbiAgICAgICAgXCI5XCI6IFwiZGV2acWGZGVzbWl0XCJcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jdXJyZW5jeUVuID0ge1xyXG4gICAgICAgIFwiZXVyXCI6IFwiZXVyb1wiLFxyXG4gICAgICAgIFwidXNkXCI6IFwiZG9sbGFyXCIsXHJcbiAgICAgICAgXCJnYnBcIjogXCJicml0aXNoIHBvdW5kXCIsXHJcbiAgICAgICAgXCJydWJcIjogXCJydXNzaWFuIHJ1YmxlXCIsXHJcbiAgICAgICAgXCJwbG5cIjogXCJwb2xpc2ggemxvdHlcIixcclxuICAgICAgICBcImJnblwiOiBcImJ1bGdhcmlhbiBsZXZcIixcclxuICAgICAgICBcImh1ZlwiOiBcImh1bmdhcmlhbiBmb3JpbnRcIixcclxuICAgICAgICBcInRyeVwiOiBcInR1cmtpc2ggbGlyYVwiLFxyXG4gICAgICAgIFwiaHJrXCI6IFwiY3JvYXRpYW4ga3VuYVwiLFxyXG4gICAgICAgIFwiY3prXCI6IFwiY3plY2gga29ydW5hXCIsXHJcbiAgICAgICAgXCJnZWxcIjogXCJnZW9yZ2lhbiBsYXJpXCIsXHJcbiAgICAgICAgXCJhbGxcIjogXCJhbGJhbmlhbiBsZWtcIixcclxuICAgICAgICBcImxrclwiOiBcInNyaSBsYW5rYW4gcnVwZWVcIixcclxuICAgICAgICBcInNla1wiOiBcInN3ZWRpc2gga3JvbmFcIixcclxuICAgICAgICBcInRoYlwiOiBcInRoYWkgYmFodFwiLFxyXG4gICAgICAgIFwidG5kXCI6IFwidHVuaXNpYW4gZGluYXJcIixcclxuICAgICAgICBcImlsc1wiOiBcImlzcmFlbGkgc2hlcWVsXCIsXHJcbiAgICAgICAgXCJjaGZcIjogXCJzd2lzcyBmcmFuY1wiLFxyXG4gICAgICAgIFwibm9rXCI6IFwibm9yd2VnaWFuIGtyb25lXCIsXHJcbiAgICAgICAgXCJka2tcIjogXCJkYW5pc2gga3JvbmVcIixcclxuICAgICAgICBcImFlZFwiOiBcInVuaXRlZCBhcmFiIGVtaXJhdGVzIGRpcmhhbVwiLFxyXG4gICAgICAgIFwiY2FkXCI6IFwiY2FuYWRpYW4gZG9sbGFyXCIsXHJcbiAgICAgICAgXCJieW5cIjogXCJiZWxhcnVzaWFuIG5ldyBydWJsZVwiLFxyXG4gICAgICAgIFwiYXVkXCI6IFwiYXVzdHJhbGlhbiBkb2xsYXJcIixcclxuICAgICAgICBcImpweVwiOiBcImphcGFuZXNlIHllblwiLFxyXG4gICAgICAgIFwiY255XCI6IFwiY2hpbmVzZSB5dWFuXCIsXHJcbiAgICAgICAgXCJ1YWhcIjogXCJ1a3JhaW5pYW4gaHJ5dm5pYVwiLFxyXG4gICAgICAgIFwiaXNrXCI6IFwiaWNlbGFuZCBrcm9uYVwiLFxyXG4gICAgICAgIFwibnpkXCI6IFwibmV3IHplYWxhbmQgZG9sbGFyXCIsXHJcbiAgICAgICAgXCJrcndcIjogXCJzb3V0aCBrb3JlYW4gd29uXCIsXHJcbiAgICAgICAgXCJyb25cIjogXCJyb21hbmlhbiBsZXVcIixcclxuICAgICAgICBcInNnZFwiOiBcInNpbmdhcG9yZSBkb2xsYXJcIixcclxuICAgICAgICBcImlkclwiOiBcImluZG9uZXNpYW4gcnVwaWFoXCIsXHJcbiAgICAgICAgXCJoa2RcIjogXCJob25nIGtvbmcgZG9sbGFyXCIsXHJcbiAgICAgICAgXCJzYnBcIjogXCJzY290dGlzaCBwb3VuZFwiLFxyXG4gICAgICAgIFwiemFyXCI6IFwic291dGggYWZyaWNhbiByYW5kXCIsXHJcbiAgICAgICAgXCJteG5cIjogXCJtZXhpY2FuIHBlc29cIixcclxuICAgICAgICBcIm1rZFwiOiBcIm1hY2Vkb25pYW4gZGluYXJcIixcclxuICAgICAgICBcImJybFwiOiBcImJyYXppbGlhbiByZWFsXCIsXHJcbiAgICAgICAgXCJlZ3BcIjogXCJlZ3lwdGlhbiBwb3VuZFwiLFxyXG4gICAgICAgIFwiYXJzXCI6IFwiYXJnZW50aW5lIHBlc29cIixcclxuICAgICAgICBcImtlc1wiOiBcImtlbnlhIHNoaWxsaW5nXCIsXHJcbiAgICAgICAgXCJteXJcIjogXCJtYWxheXNpYW4gcmluZ2dpdFwiLFxyXG4gICAgICAgIFwibXVyXCI6IFwibWF1cml0aWFuIHJ1cGVlXCIsXHJcbiAgICAgICAgXCJwaHBcIjogXCJwaGlsaXBwaW5lIHBlc29cIixcclxuICAgICAgICBcImluclwiOiBcImluZGlhbiBydXBlZVwiLFxyXG4gICAgICAgIFwia3p0XCI6IFwia2F6YWtoc3RhbiB0ZW5nZVwiLFxyXG4gICAgICAgIFwiYW1kXCI6IFwiYXJtZW5pYW4gZHJhbVwiLFxyXG4gICAgICAgIFwibWFkXCI6IFwibW9yb2NjYW4gZGlyaGFtXCIsXHJcbiAgICAgICAgXCJyc2RcIjogXCJzZXJiaWFuIGRpbmFyXCIsXHJcbiAgICAgICAgXCJ2bmRcIjogXCJ2aWV0bmFtZXNlIGRvbmdcIixcclxuICAgICAgICBcImRvcFwiOiBcImRvbWluaWNhbiBwZXNvXCIsXHJcbiAgICAgICAgXCJqb2RcIjogXCJqb3JkYW5pYW4gZGluYXJcIixcclxuICAgICAgICBcImx2bFwiOiBcImxhdHZpYW4gbGF0c1wiLFxyXG4gICAgICAgIFwibHRsXCI6IFwibGl0aHVhbmlhbiBsaXRhc1wiLFxyXG4gICAgICAgIFwiZWVrXCI6IFwiZXN0b25pYW4ga3Jvb25cIixcclxuICAgICAgICBcImRlbVwiOiBcImdlcm1hbiBtYXJrXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaHVuZHJlZHRoc0VuID0ge1xyXG4gICAgICAgICdldXInOiAnY2VudHMnLFxyXG4gICAgICAgICd1c2QnOiAnY2VudHMnLFxyXG4gICAgICAgICdnYnAnOiAncGVuY2UnLFxyXG4gICAgICAgICdydWInOiAna29wZWtzJyxcclxuICAgICAgICAncGxuJzogJ2dyb3N6JyxcclxuICAgICAgICAnbHZsJzogJ3NhbnRpbXMnLFxyXG4gICAgICAgICdrenQnOiAndMSxeW5zJyxcclxuICAgICAgICAnY2hmJzogJ3JhcHBlbnMnLFxyXG4gICAgICAgICdhZWQnOiAnZmlscycsXHJcbiAgICAgICAgJ2Rrayc6ICdvcmUnLFxyXG4gICAgICAgICdzZWsnOiAnb3JlJyxcclxuICAgICAgICAnbm9rJzogJ29yZScsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkVHJhbnNsYXRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9