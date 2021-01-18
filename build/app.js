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
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.repeat */ "./node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var numbers2words__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! numbers2words */ "./node_modules/numbers2words/build/numbers2words.min.js");
/* harmony import */ var numbers2words__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(numbers2words__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./translations */ "./src/js/translations.js");















var NumToWords = function NumToWords() {
  this.translator = new numbers2words__WEBPACK_IMPORTED_MODULE_12___default.a("EN_US");
  this.translations = new _translations__WEBPACK_IMPORTED_MODULE_13__["default"]();
  this.lang = 'lv';
};

NumToWords.prototype.getVals = function () {
  return this.translations.currencyLv;
};

NumToWords.prototype.units = function (numericUnit) {
  var plural = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (Array.isArray(this.translations.numConf.units[this.lang][numericUnit])) {
    return this.translations.numConf.units[this.lang][numericUnit][plural];
  }

  return this.translations.numConf.units[this.lang][numericUnit];
};

NumToWords.prototype.tenners = function (numericTen) {
  var sex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var plural = 1;

  if (sex) {
    plural = 0;
  }

  if (numericTen[0] === "0") {
    return this.units(numericTen[1], plural);
  }

  if (numericTen[0] === "1") {
    return this.translations.numConf.teens[this.lang][numericTen];
  }

  return this.translations.numConf.tenners[this.lang][numericTen[0]] + " " + this.units(numericTen[1], plural);
};

NumToWords.prototype.hundreds = function (numericHundred) {
  var sex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (this.lang === 'ru') {
    return this.translations.numConf.hundreds.ru[numericHundred[0]] + ' ' + this.tenners(numericHundred[1] + numericHundred[2], sex);
  }

  if (numericHundred[0] === "0") {
    return this.tenners(numericHundred[1] + numericHundred[2], sex);
  }

  if (numericHundred[0] === "1") {
    return this.translations.oneHundredLv + ' ' + this.tenners(numericHundred[1] + numericHundred[2]);
  }

  return this.units(numericHundred[0]) + ' ' + this.translations.hundrads + ' ' + this.tenners(numericHundred[1] + numericHundred[2], sex);
};

NumToWords.prototype.genericCaller = function (methodName) {
  var args = [].slice.call(arguments);
  args.shift();
  return this[methodName].apply(this, args);
};

NumToWords.prototype.uni = function (num, len) {
  var sex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'he';

  if (len === 3) {
    return this.genericCaller('hundreds', num, sex === 'he');
  }

  var milioni = num.substring(0, 3);
  var thousandsci = num.substring(3, len);

  if (milioni === '000') {
    return this.genericCaller('uni', thousandsci, len - 3, sex);
  }

  var miljWord = this.translations.bigNums[(len - 3).toString()][this.lang][1];

  if (milioni[2] === "1" && milioni[1] !== "1") {
    miljWord = this.translations.bigNums[(len - 3).toString()][this.lang][0];
  }

  if (this.lang === 'ru' && milioni[1] !== "1" && (milioni[2] === "2" || milioni[2] === "3" || milioni[2] === "4")) {
    miljWord = this.translations.bigNums[(len - 3).toString()][this.lang][2];
  }

  return this.hundreds(milioni, !(len >= 6 && len < 9)) + ' ' + miljWord + ' ' + this.genericCaller('uni', thousandsci, len - 3, sex);
};

NumToWords.prototype.getResult = function (num, cent, eur) {
  var sex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'he';
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
  var un = this.translations.ands[this.lang];
  var comats = this.translations.comats[this.lang];
  var centi = ' ' + un + ' 00 ' + cent;

  if (sep !== -1) {
    centi = num.substring(sep + 1, length);
    centi = centi.replace(/[^0-9]/g, "");
    num = num.substring(0, sep);
    var centi1 = '';

    if (centi.length === 0) {
      centi1 = '00';
    } else if (centi.length === 1) {
      centi1 = centi + '0';
    } else if (centi.length === 2) {
      centi1 = centi;
    } else {
      centi1 = centi.substring(0, 2);
    }

    if (Array.isArray(cent)) {
      if (centi1[centi1.length - 1] === "1" && centi1[centi1.length - 2] !== "1") {
        cent = cent[1];
      } else if (centi1[centi1.length - 2] !== "1" && (centi1[centi1.length - 1] === "2" || centi1[centi1.length - 1] === "3" || centi1[centi1.length - 1] === "4")) {
        cent = cent[2];
      } else {
        cent = cent[0];
      }
    }

    num = num.substring(0, sep);

    if (centi.length === 0) {
      centi = ' ' + un + ' ' + centi1 + ' ' + cent;
    } else if (centi.length == 1) {
      centi = ' ' + un + ' ' + centi1 + ' ' + cent;
    } else if (centi.length == 2) {
      centi = ' ' + un + ' ' + centi1 + ' ' + cent;
    } else {
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
  } else {
    num = '0'.repeat(18 - num.length) + num;
    num = this.uni(num, 18, sex).trim();

    if (num === '') {
      num = this.translations.nulle[this.lang];
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
        "ский": "ских",
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
  var sex = 'he';

  if (this.lang === 'en') {
    eden = this.translations.currencyEn;
    sm = this.translations.hundredthsEn;
  } else if (this.lang === 'ru') {
    eden = this.translations.currencyRu;
    sm = this.translations.hundredthsRu;
    sex = this.translations.curConf[valuta]['sex']['ru'];
  } else {
    eden = this.translations.currencyLv;
    sm = this.translations.hundredthsLv;
  }

  var smres = '(1/100) ' + valuta.toUpperCase();

  if (hasOwnProperty.call(sm, valuta)) {
    smres = sm[valuta];
  }

  var res = this.getResult(num, smres, eden[valuta], sex);
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
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _numtowords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numtowords */ "./src/js/numtowords.js");



var WordTranslations = function WordTranslations() {
  var curConf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var numConf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  this.curConf = {
    "eur": {
      "name": {
        "lv": "euro",
        "ru": "\u0415\u0432\u0440\u043E",
        "en": "euro"
      },
      "hundredths": {
        "lv": ["centi", "cents", "centi"],
        "ru": ["\u0446\u0435\u043D\u0442\u043E\u0432", "\u0446\u0435\u043D\u0442", "\u0446\u0435\u043D\u0442\u0430"],
        "en": "cents"
      },
      "sex": {
        "ru": "he"
      }
    },
    "usd": {
      "name": {
        "lv": "dol\u0101rs",
        "ru": "\u0414\u043E\u043B\u043B\u0430\u0440",
        "en": "dollar"
      },
      "hundredths": {
        "lv": ["centi", "cents", "centi"],
        "ru": ["\u0446\u0435\u043D\u0442\u043E\u0432", "\u0446\u0435\u043D\u0442", "\u0446\u0435\u043D\u0442\u0430"],
        "en": "cents"
      },
      "sex": {
        "ru": "he"
      }
    },
    "gbp": {
      "name": {
        "lv": "Lielbrit\u0101nijas m\u0101rci\u0146a",
        "ru": "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u0444\u0443\u043D\u0442 \u0441\u0442\u0435\u0440\u043B\u0438\u043D\u0433\u043E\u0432",
        "en": "british pound"
      },
      "hundredths": {
        "lv": "peni",
        "ru": "\u043F\u0435\u043D\u0438",
        "en": "pence"
      },
      "sex": {
        "ru": "he"
      }
    },
    "rub": {
      "name": {
        "lv": "Krievijas rublis",
        "ru": "\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0443\u0431\u043B\u044C",
        "en": "russian ruble"
      },
      "hundredths": {
        "lv": ["kapeikas", "kapeika", "kapeikas"],
        "ru": ["\u043A\u043E\u043F\u0435\u0435\u043A", "\u043A\u043E\u043F\u0435\u0439\u043A\u0430", "\u043A\u043E\u043F\u0435\u0439\u043A\u0438"],
        "en": "kopeks"
      },
      "sex": {
        "ru": "he"
      }
    },
    "pln": {
      "name": {
        "lv": "Polijas zlots",
        "ru": "\u041F\u043E\u043B\u044C\u0441\u043A\u0438\u0439 \u0437\u043B\u043E\u0442\u044B\u0439",
        "en": "polish zloty"
      },
      "hundredths": {
        "lv": "gro\u0161i",
        "ru": "\u0433\u0440\u043E\u0448",
        "en": "grosz"
      },
      "sex": {
        "ru": "he"
      }
    },
    "kzt": {
      "name": {
        "lv": "Kazahst\u0101nas tenge",
        "ru": "\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0441\u043A\u0438\u0439 \u0442\u0435\u043D\u0433\u0435",
        "en": "kazakhstan tenge"
      },
      "hundredths": {
        "lv": "tij\u012Bni",
        "ru": "\u0442\u0438\u044B\u043D",
        "en": "t\u0131yns"
      },
      "sex": {
        "ru": "he"
      }
    },
    "chf": {
      "name": {
        "lv": "\u0160veices franks",
        "ru": "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043A\u0438\u0439 \u0444\u0440\u0430\u043D\u043A",
        "en": "swiss franc"
      },
      "hundredths": {
        "lv": "rapeni",
        "ru": ["\u0440\u0430\u043F\u043F\u0435\u043D\u043E\u0432", "\u0440\u0430\u043F\u043F\u0435\u043D", "\u0440\u0430\u043F\u043F\u0435\u043D\u0430"],
        "en": "rappens"
      },
      "sex": {
        "ru": "he"
      }
    },
    "aed": {
      "name": {
        "lv": "Apvienoto Ar\u0101bu Emir\u0101tu dirhams",
        "ru": "\u0414\u0438\u0440\u0445\u0430\u043C \u041E\u0410\u042D",
        "en": "united arab emirates dirham"
      },
      "hundredths": {
        "lv": "fili",
        "ru": "\u0444\u0438\u043B\u0441",
        "en": "fils"
      },
      "sex": {
        "ru": "he"
      }
    },
    "dkk": {
      "name": {
        "lv": "D\u0101nijas krona",
        "ru": "\u0414\u0430\u0442\u0441\u043A\u0430\u044F \u043A\u0440\u043E\u043D\u0430",
        "en": "danish krone"
      },
      "hundredths": {
        "lv": "\u0113ri",
        "ru": "\u044D\u0440\u0435",
        "en": "ore"
      },
      "sex": {
        "ru": "she"
      }
    },
    "sek": {
      "name": {
        "lv": "Zviedrijas krona",
        "ru": "\u0428\u0432\u0435\u0434\u0441\u043A\u0430\u044F \u043A\u0440\u043E\u043D\u0430",
        "en": "swedish krona"
      },
      "hundredths": {
        "lv": "\u0113ri",
        "ru": "\u044D\u0440\u0435",
        "en": "ore"
      },
      "sex": {
        "ru": "she"
      }
    },
    "nok": {
      "name": {
        "lv": "Norv\u0113\u0123ijas krona",
        "ru": "\u041D\u043E\u0440\u0432\u0435\u0436\u0441\u043A\u0430\u044F \u043A\u0440\u043E\u043D\u0430",
        "en": "norwegian krone"
      },
      "hundredths": {
        "lv": "\u0113ri",
        "ru": "\u044D\u0440\u0435",
        "en": "ore"
      },
      "sex": {
        "ru": "she"
      }
    },
    "bgn": {
      "name": {
        "lv": "Bulg\u0101rijas leva",
        "ru": "\u0411\u043E\u043B\u0433\u0430\u0440\u0441\u043A\u0438\u0439 \u043B\u0435\u0432",
        "en": "bulgarian lev"
      },
      "sex": {
        "ru": "he"
      }
    },
    "huf": {
      "name": {
        "lv": "Ung\u0101rijas forints",
        "ru": "\u0432\u0435\u043D\u0433\u0435\u0440\u0441\u043A\u0438\u0439 \u0444\u043E\u0440\u0438\u043D\u0442",
        "en": "hungarian forint"
      },
      "sex": {
        "ru": "he"
      }
    },
    "try": {
      "name": {
        "lv": "Turcijas lira",
        "ru": "\u0422\u0443\u0440\u0435\u0446\u043A\u0430\u044F \u043B\u0438\u0440\u0430",
        "en": "turkish lira"
      },
      "sex": {
        "ru": "she"
      }
    },
    "all": {
      "name": {
        "lv": "Alb\u0101nijas leks",
        "ru": "\u0410\u043B\u0431\u0430\u043D\u0441\u043A\u0438\u0439 \u043B\u0435\u043A",
        "en": "albanian lek"
      },
      "sex": {
        "ru": "he"
      }
    },
    "hrk": {
      "name": {
        "lv": "Horv\u0101tijas kuna",
        "ru": "X\u043E\u0440\u0432\u0430\u0442\u0441\u043A\u0430\u044F \u043A\u0443\u043D\u0430",
        "en": "croatian kuna"
      },
      "sex": {
        "ru": "she"
      }
    },
    "czk": {
      "name": {
        "lv": "\u010Cehijas krona",
        "ru": "\u0427\u0435\u0448\u0441\u043A\u0430\u044F \u043A\u0440\u043E\u043D\u0430",
        "en": "czech koruna"
      },
      "sex": {
        "ru": "she"
      }
    },
    "gel": {
      "name": {
        "lv": "Gruzijas lari",
        "ru": "\u0413\u0440\u0443\u0437\u0438\u043D\u0441\u043A\u0438\u0439 \u043B\u0430\u0440\u0438",
        "en": "georgian lari"
      },
      "sex": {
        "ru": "he"
      }
    },
    "lkr": {
      "name": {
        "lv": "\u0160rilankas r\u016Bpija",
        "ru": "\u0428\u0440\u0438-\u043B\u0430\u043D\u043A\u0438\u0439\u0441\u043A\u0430\u044F \u0440\u0443\u043F\u0438\u044F",
        "en": "sri lankan rupee"
      },
      "sex": {
        "ru": "she"
      }
    },
    "tnd": {
      "name": {
        "lv": "Tunisijas din\u0101rs",
        "ru": "\u0422\u0443\u043D\u0438\u0441\u0441\u043A\u0438\u0439 \u0434\u0438\u043D\u0430\u0440",
        "en": "tunisian dinar"
      },
      "sex": {
        "ru": "he"
      }
    },
    "ils": {
      "name": {
        "lv": "Izra\u0113las \u0161ekels",
        "ru": "\u0418\u0437\u0440\u0430\u0438\u043B\u044C\u0441\u043A\u0438\u0439 \u0448\u0435\u043A\u0435\u043B\u044C",
        "en": "israeli sheqel"
      },
      "sex": {
        "ru": "he"
      }
    },
    "jod": {
      "name": {
        "lv": "Jord\u0101nijas din\u0101rs",
        "ru": "\u0418\u043E\u0440\u0434\u0430\u043D\u0441\u043A\u0438\u0439 \u0434\u0438\u043D\u0430\u0440",
        "en": "jordanian dinar"
      },
      "sex": {
        "ru": "he"
      }
    },
    "byn": {
      "name": {
        "lv": "Baltkrievijas rublis",
        "ru": "\u0411\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u0440\u0443\u0431\u043B\u044C",
        "en": "belarusian new ruble"
      },
      "hundredths": {
        "lv": ["kapeikas", "kapeika", "kapeikas"],
        "ru": ["\u043A\u043E\u043F\u0435\u0435\u043A", "\u043A\u043E\u043F\u0435\u0439\u043A\u0430", "\u043A\u043E\u043F\u0435\u0439\u043A\u0438"],
        "en": "kopeks"
      },
      "sex": {
        "ru": "he"
      }
    },
    "egp": {
      "name": {
        "lv": "\u0112\u0123iptes m\u0101rci\u0146a",
        "ru": "\u0415\u0433\u0438\u043F\u0435\u0442\u0441\u043A\u0438\u0439 \u0444\u0443\u043D\u0442",
        "en": "egyptian pound"
      },
      "sex": {
        "ru": "he"
      }
    },
    "uah": {
      "name": {
        "lv": "Ukrainas grivna",
        "ru": "\u0423\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0430\u044F \u0433\u0440\u0438\u0432\u043D\u0430",
        "en": "ukrainian hryvnia"
      },
      "sex": {
        "ru": "she"
      }
    },
    "cny": {
      "name": {
        "lv": "\u0136\u012Bnas jua\u0146a",
        "ru": "\u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0439 \u044E\u0430\u043D\u044C",
        "en": "chinese yuan"
      },
      "sex": {
        "ru": "he"
      }
    },
    "thb": {
      "name": {
        "lv": "Taizemes bats",
        "ru": "\u0422\u0430\u0438\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0439 \u0431\u0430\u0442",
        "en": "thai baht"
      },
      "sex": {
        "ru": "he"
      }
    },
    "vnd": {
      "name": {
        "lv": "Vjetnamas dongs",
        "ru": "\u0412\u044C\u0435\u0442\u043D\u0430\u043C\u0441\u043A\u0438\u0439 \u0434\u043E\u043D\u0433",
        "en": "vietnamese dong"
      },
      "sex": {
        "ru": "he"
      }
    },
    "php": {
      "name": {
        "lv": "Filip\u012Bnu peso",
        "ru": "\u0424\u0438\u043B\u0438\u043F\u043F\u0438\u043D\u0441\u043A\u043E\u0435 \u043F\u0435\u0441\u043E",
        "en": "philippine peso"
      },
      "sex": {
        "ru": "he"
      }
    },
    "mad": {
      "name": {
        "lv": "Marokas dirhams",
        "ru": "\u041C\u0430\u0440\u043E\u043A\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0434\u0438\u0440\u0445\u0430\u043C",
        "en": "moroccan dirham"
      },
      "sex": {
        "ru": "he"
      }
    },
    "aud": {
      "name": {
        "lv": "Austr\u0101lijas dol\u0101rs",
        "ru": "\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u0434\u043E\u043B\u043B\u0430\u0440",
        "en": "australian dollar"
      },
      "sex": {
        "ru": "he"
      }
    },
    "ars": {
      "name": {
        "lv": "Argent\u012Bnas peso",
        "ru": "\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0441\u043A\u043E\u0435 \u043F\u0435\u0441\u043E",
        "en": "argentine peso"
      },
      "sex": {
        "ru": "he"
      }
    },
    "jpy": {
      "name": {
        "lv": "Jap\u0101nas j\u0113na",
        "ru": "\u042F\u043F\u043E\u043D\u0441\u043A\u0430\u044F \u0438\u0435\u043D\u0430",
        "en": "japanese yen"
      },
      "sex": {
        "ru": "she"
      }
    },
    "idr": {
      "name": {
        "lv": "Indon\u0113zijas r\u016Bpija",
        "ru": "\u0418\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u0439\u0441\u043A\u0430\u044F \u0440\u0443\u043F\u0438\u044F",
        "en": "indonesian rupiah"
      },
      "sex": {
        "ru": "she"
      }
    },
    "isk": {
      "name": {
        "lv": "Islandes krona",
        "ru": "\u0418\u0441\u043B\u0430\u043D\u0434\u0441\u043A\u0430\u044F \u043A\u0440\u043E\u043D\u0430",
        "en": "iceland krona"
      },
      "sex": {
        "ru": "she"
      }
    },
    "amd": {
      "name": {
        "lv": "Arm\u0113nijas drams",
        "ru": "\u0410\u0440\u043C\u044F\u043D\u0441\u043A\u0438\u0439 \u0434\u0440\u0430\u043C",
        "en": "armenian dram"
      },
      "sex": {
        "ru": "he"
      }
    },
    "ron": {
      "name": {
        "lv": "Rum\u0101nijas leja",
        "ru": "\u0420\u0443\u043C\u044B\u043D\u0441\u043A\u0430\u044F \u043B\u0435\u044F",
        "en": "romanian leu"
      },
      "sex": {
        "ru": "she"
      }
    },
    "sgd": {
      "name": {
        "lv": "Singap\u016Bras dol\u0101rs",
        "ru": "\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440\u0441\u043A\u0438\u0439 \u0434\u043E\u043B\u043B\u0430\u0440",
        "en": "singapore dollar"
      },
      "sex": {
        "ru": "he"
      }
    },
    "sbp": {
      "name": {
        "lv": "Skotijas m\u0101rci\u0146a",
        "ru": "\u0428\u043E\u0442\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0439 \u0444\u0443\u043D\u0442",
        "en": "scottish pound"
      },
      "sex": {
        "ru": "he"
      }
    },
    "cad": {
      "name": {
        "lv": "Kan\u0101das dol\u0101rs",
        "ru": "\u041A\u0430\u043D\u0430\u0434\u0441\u043A\u0438\u0439 \u0434\u043E\u043B\u043B\u0430\u0440",
        "en": "canadian dollar"
      },
      "sex": {
        "ru": "he"
      }
    },
    "brl": {
      "name": {
        "lv": "Braz\u012Blijas re\u0101ls",
        "ru": "\u0411\u0440\u0430\u0437\u0438\u043B\u044C\u0441\u043A\u0438\u0439 \u0440\u0435\u0430\u043B",
        "en": "brazilian real"
      },
      "sex": {
        "ru": "he"
      }
    },
    "zar": {
      "name": {
        "lv": "Dienvid\u0101frikas rends",
        "ru": "\u042E\u0436\u043D\u043E\u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0440\u044D\u043D\u0434",
        "en": "south african rand"
      },
      "sex": {
        "ru": "he"
      }
    },
    "inr": {
      "name": {
        "lv": "Indijas r\u016Bpija",
        "ru": "\u0418\u043D\u0434\u0438\u0439\u0441\u043A\u0430\u044F \u0440\u0443\u043F\u0438\u044F",
        "en": "indian rupee"
      },
      "sex": {
        "ru": "she"
      }
    },
    "rsd": {
      "name": {
        "lv": "Serbijas din\u0101rs",
        "ru": "\u0421\u0435\u0440\u0431\u0441\u043A\u0438\u0439 \u0434\u0438\u043D\u0430\u0440",
        "en": "serbian dinar"
      },
      "sex": {
        "ru": "he"
      }
    },
    "nzd": {
      "name": {
        "lv": "Jaunz\u0113landes dol\u0101rs",
        "ru": "\u041D\u043E\u0432\u043E\u0437\u0435\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0439 \u0434\u043E\u043B\u043B\u0430\u0440",
        "en": "new zealand dollar"
      },
      "sex": {
        "ru": "he"
      }
    },
    "myr": {
      "name": {
        "lv": "Malaizijas ringits",
        "ru": "M\u0430\u043B\u0430\u0439\u0437\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0438\u043D\u0433\u0433\u0438\u0442",
        "en": "malaysian ringgit"
      },
      "sex": {
        "ru": "he"
      }
    },
    "mur": {
      "name": {
        "lv": "Maur\u012Bcijas salas r\u016Bpija",
        "ru": "\u041C\u0430\u0432\u0440\u0438\u043A\u0438\u0439\u0441\u043A\u0430\u044F \u0440\u0443\u043F\u0438\u044F",
        "en": "mauritian rupee"
      },
      "sex": {
        "ru": "she"
      }
    },
    "hkd": {
      "name": {
        "lv": "Honkongas dol\u0101rs",
        "ru": "\u0413\u043E\u043D\u043A\u043E\u043D\u0433\u0441\u043A\u0438\u0439 \u0434\u043E\u043B\u043B\u0430\u0440",
        "en": "hong kong dollar"
      },
      "sex": {
        "ru": "he"
      }
    },
    "krw": {
      "name": {
        "lv": "Dienvidkorejas vona",
        "ru": "\u042E\u0436\u043D\u043E\u043A\u043E\u0440\u0435\u0439\u0441\u043A\u0430\u044F \u0432\u043E\u043D\u0430",
        "en": "south korean won"
      },
      "sex": {
        "ru": "she"
      }
    },
    "mxn": {
      "name": {
        "lv": "Meksikas peso",
        "ru": "\u041C\u0435\u043A\u0441\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0435 \u043F\u0435\u0441\u043E",
        "en": "mexican peso"
      },
      "sex": {
        "ru": "he"
      }
    },
    "mkd": {
      "name": {
        "lv": "Ma\u0137edonijas den\u0101rs",
        "ru": "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438\u0439 \u0434\u0438\u043D\u0430\u0440",
        "en": "macedonian dinar"
      },
      "sex": {
        "ru": "he"
      }
    },
    "dop": {
      "name": {
        "lv": "Dominik\u0101nas peso",
        "ru": "\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0435 \u043F\u0435\u0441\u043E",
        "en": "dominican peso"
      },
      "sex": {
        "ru": "he"
      }
    },
    "kes": {
      "name": {
        "lv": "Kenijas \u0161ili\u0146\u0161",
        "ru": "\u041A\u0435\u043D\u0438\u0439\u0441\u043A\u0438\u0439 \u0448\u0438\u043B\u043B\u0438\u043D\u0433",
        "en": "kenya shilling"
      },
      "sex": {
        "ru": "he"
      }
    },
    "dem": {
      "name": {
        "lv": "V\u0101cijas marka",
        "ru": "\u041D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u043C\u0430\u0440\u043A\u0430",
        "en": "german mark"
      },
      "sex": {
        "ru": "she"
      }
    },
    "eek": {
      "name": {
        "lv": "Igaunijas krona",
        "ru": "\u042D\u0441\u0442\u043E\u043D\u0441\u043A\u0430\u044F \u043A\u0440\u043E\u043D\u0430",
        "en": "estonian kroon"
      },
      "sex": {
        "ru": "she"
      }
    },
    "ltl": {
      "name": {
        "lv": "Lietuvas lits",
        "ru": "\u041B\u0438\u0442\u043E\u0432\u0441\u043A\u0438\u0439 \u043B\u0438\u0442",
        "en": "lithuanian litas"
      },
      "sex": {
        "ru": "he"
      }
    },
    "lvl": {
      "name": {
        "lv": "Latvijas lats",
        "ru": "\u041B\u0430\u0442\u0432\u0438\u0439\u0441\u043A\u0438\u0439 \u043B\u0430\u0442",
        "en": "latvian lats"
      },
      "hundredths": {
        "lv": ["santimi", "santims", "santimi"],
        "ru": ["\u0441\u0430\u043D\u0442\u0438\u043C\u043E\u0432", "\u0441\u0430\u043D\u0442\u0438\u043C", "\u0441\u0430\u043D\u0442\u0438\u043C\u043E\u0432"],
        "en": "santims"
      },
      "sex": {
        "ru": "he"
      }
    }
  };
  this.numConf = {
    "units": {
      "lv": ["", "viens", "divi", "tr\u012Bs", "\u010Detri", "pieci", "se\u0161i", "septi\u0146i", "asto\u0146i", "devi\u0146i"],
      "ru": ["", ["\u043E\u0434\u0438\u043D", "\u043E\u0434\u043D\u0430"], ["\u0434\u0432\u0430", "\u0434\u0432\u0435"], "\u0442\u0440\u0438", "\u0447\u0435\u0442\u044B\u0440\u0435", "\u043F\u044F\u0442\u044C", "\u0448\u0435\u0441\u0442\u044C", "\u0441\u0435\u043C\u044C", "\u0432\u043E\u0441\u0435\u043C\u044C", "\u0434\u0435\u0432\u044F\u0442\u044C"]
    },
    "teens": {
      "lv": {
        "10": "desmit",
        "11": "vienpadsmit",
        "12": "divpadsmit",
        "13": "tr\u012Bspadsmit",
        "14": "\u010Detrpadsmit",
        "15": "piecpadsmit",
        "16": "se\u0161padsmit",
        "17": "septi\u0146padsmit",
        "18": "asto\u0146padsmit",
        "19": "devi\u0146padsmit"
      },
      "ru": {
        "10": "\u0434\u0435\u0441\u044F\u0442\u044C",
        "11": "\u043E\u0434\u0438\u043D\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "12": "\u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "13": "\u0442\u0440\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "14": "\u0447\u0435\u0442\u044B\u0440\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "15": "\u043F\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "16": "\u0448\u0435\u0441\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "17": "\u0441\u0435\u043C\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "18": "\u0432\u043E\u0441\u0435\u043C\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
        "19": "\u0434\u0435\u0432\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u044C"
      }
    },
    "tenners": {
      "lv": {
        "2": "divdesmit",
        "3": "tr\u012Bsdesmit",
        "4": "\u010Detrdesmit",
        "5": "piecdesmit",
        "6": "se\u0161desmit",
        "7": "septi\u0146desmit",
        "8": "asto\u0146desmit",
        "9": "devi\u0146desmit"
      },
      "ru": {
        "2": "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C",
        "3": "\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044C",
        "4": "\u0441\u043E\u0440\u043E\u043A",
        "5": "\u043F\u044F\u044C\u0434\u0435\u0441\u044F\u0442",
        "6": "\u0448\u0435\u0441\u0442\u044C\u0434\u0435\u0441\u044F\u0442",
        "7": "\u0441\u0435\u043C\u044C\u0434\u0435\u0441\u044F\u0442",
        "8": "\u0432\u043E\u0441\u0435\u043C\u044C\u0434\u0435\u0441\u044F\u0442",
        "9": "\u0434\u0435\u0432\u044F\u043D\u043E\u0441\u0442\u043E"
      }
    },
    "hundreds": {
      "ru": {
        "": "",
        "0": "",
        "1": "\u0441\u0442\u043E",
        "2": "\u0434\u0432\u0435\u0441\u0442\u0438",
        "3": "\u0442\u0440\u0438\u0441\u0442\u0430",
        "4": "\u0447\u0435\u0442\u044B\u0440\u0435\u0441\u0442\u0430",
        "5": "\u043F\u044F\u0442\u044C\u0441\u043E\u0442",
        "6": "\u0448\u0435\u0441\u0442\u044C\u0441\u043E\u0442",
        "7": "\u0441\u0435\u043C\u044C\u0441\u043E\u0442",
        "8": "\u0432\u043E\u0441\u0435\u043C\u044C\u0441\u043E\u0442",
        "9": "\u0434\u0435\u0432\u044F\u0442\u044C\u0441\u043E\u0442"
      }
    }
  };

  if (curConf) {
    this.curConf = curConf;
  }

  if (numConf) {
    this.curConf = numConf;
  }

  var confNames = {};
  var confHund = {};

  for (var code in this.curConf) {
    if (this.curConf[code]['name'] !== undefined) {
      for (var lang in this.curConf[code]['name']) {
        if (confNames[lang] === undefined) {
          confNames[lang] = {};
        }

        confNames[lang][code] = this.curConf[code]['name'][lang];
      }
    }

    if (this.curConf[code]['hundredths'] !== undefined) {
      for (lang in this.curConf[code]['hundredths']) {
        if (confHund[lang] === undefined) {
          confHund[lang] = {};
        }

        confHund[lang][code] = this.curConf[code]['hundredths'][lang];
      }
    }
  }

  this.currencyLv = confNames.lv;
  this.hundredthsLv = confHund.lv;
  this.currencyRu = confNames.ru;
  this.hundredthsRu = confHund.ru;
  this.currencyEn = confNames.en;
  this.hundredthsEn = confHund.en;
  this.oneHundredLv = 'viens simts';
  this.hundrads = 'simti';
  this.ands = {
    'lv': 'un',
    'en': 'and',
    'ru': 'и'
  };
  this.comats = {
    'lv': 'komats',
    'en': 'coma',
    'ru': 'кома'
  };
  this.nulle = {
    'lv': 'nulle',
    'ru': 'ноль'
  };
  this.bigNums = {
    '3': {
      'ru': ['тысяча', 'тысяч', 'тысячи'],
      'lv': ['tūkstotis', 'tūkstoši']
    },
    '6': {
      'ru': ['миллион', 'миллионов', 'миллиона'],
      'lv': ['miljons', 'miljoni']
    },
    '9': {
      'ru': ['миллиард', 'миллионов', 'миллиарда'],
      'lv': ['miljards', 'miljardi']
    },
    '12': {
      'ru': ['триллион', 'триллионов', 'триллиона'],
      'lv': ['triljons', 'triljoni']
    },
    '15': {
      'ru': ['квадриллион', 'квадриллионов', 'квадриллиона'],
      'lv': ['kvadriljons', 'kvadriljoni']
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (WordTranslations);

/***/ })

},[["./src/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJudW10b3dvcmRzIiwiTnVtVG9Xb3JkcyIsInVwZGF0ZUFsbCIsImN1cnJlbmN5IiwiJCIsInZhbCIsImxhbmciLCJudW0iLCJyZXMiLCJnZXRGdWxsIiwiaHRtbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZmFkZUluIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJzaG93SGVscCIsImhpZGUiLCJvbiIsInNlbCIsInZhbHMiLCJnZXRWYWxzIiwia2V5IiwidmFsYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwibGFuZ1ZhbHMiLCJjaGVja2VkIiwidHJhbnNsYXRvciIsIlQyVyIsInRyYW5zbGF0aW9ucyIsIldvcmRUcmFuc2xhdGlvbnMiLCJwcm90b3R5cGUiLCJjdXJyZW5jeUx2IiwidW5pdHMiLCJudW1lcmljVW5pdCIsInBsdXJhbCIsIkFycmF5IiwiaXNBcnJheSIsIm51bUNvbmYiLCJ0ZW5uZXJzIiwibnVtZXJpY1RlbiIsInNleCIsInRlZW5zIiwiaHVuZHJlZHMiLCJudW1lcmljSHVuZHJlZCIsInJ1Iiwib25lSHVuZHJlZEx2IiwiaHVuZHJhZHMiLCJnZW5lcmljQ2FsbGVyIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJjYWxsIiwiYXJndW1lbnRzIiwic2hpZnQiLCJhcHBseSIsInVuaSIsImxlbiIsIm1pbGlvbmkiLCJzdWJzdHJpbmciLCJ0aG91c2FuZHNjaSIsIm1pbGpXb3JkIiwiYmlnTnVtcyIsInRvU3RyaW5nIiwiZ2V0UmVzdWx0IiwiY2VudCIsImV1ciIsInBvaW50IiwibGFzdEluZGV4T2YiLCJjb21hIiwicG9pbnRDb3VudCIsInNwbGl0IiwibGVuZ3RoIiwiY29tYUNvdW50Iiwic2VwIiwidW4iLCJhbmRzIiwiY29tYXRzIiwiY2VudGkiLCJyZXBsYWNlIiwiY2VudGkxIiwiY2VudGkyIiwib3JpZyIsInRvV29yZHMiLCJOdW1iZXIiLCJlIiwicmVwZWF0IiwidHJpbSIsIm51bGxlIiwiZWxlbWVudHMiLCJlbmRpbmdzUnUiLCJ0b0xvd2VyQ2FzZSIsIm51bWJlciIsImVuZGluZ3MiLCJlbmRpbmciLCJ2YWx1dGEiLCJlZGVuIiwic20iLCJjdXJyZW5jeUVuIiwiaHVuZHJlZHRoc0VuIiwiY3VycmVuY3lSdSIsImh1bmRyZWR0aHNSdSIsImN1ckNvbmYiLCJodW5kcmVkdGhzTHYiLCJzbXJlcyIsImhhc093blByb3BlcnR5IiwiY29uZk5hbWVzIiwiY29uZkh1bmQiLCJjb2RlIiwibHYiLCJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxVQUFVLEdBQUcsSUFBSUMsbURBQUosRUFBakI7O0FBRUEsU0FBU0MsU0FBVCxHQUFxQjtBQUNqQixNQUFJQyxRQUFRLEdBQUdDLDZDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEdBQWIsRUFBZjtBQUNBLE1BQUlDLElBQUksR0FBR0YsNkNBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDQyxHQUFoQyxFQUFYO0FBQ0EsTUFBSUUsR0FBRyxHQUFHSCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRQyxHQUFSLEVBQVY7QUFDQSxNQUFJRyxHQUFHLEdBQUdSLFVBQVUsQ0FBQ1MsT0FBWCxDQUFtQk4sUUFBbkIsRUFBNkJHLElBQTdCLEVBQW1DQyxHQUFuQyxDQUFWO0FBQ0FILCtDQUFDLENBQUMsTUFBRCxDQUFELENBQVVNLElBQVYsQ0FBZUYsR0FBZjtBQUNBRyxjQUFZLENBQUNDLE9BQWIsQ0FB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QUFBZ0IsVUFBSztBQUFyQixHQUFiO0FBRUEsT0FBSzFCLE9BQUwsR0FBZTtBQUNYLFNBQUs7QUFDRCxZQUFNLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsUUFBcEIsQ0FETDtBQUVELFlBQU0sQ0FBQyxXQUFELEVBQWMsVUFBZDtBQUZMLEtBRE07QUFLWCxTQUFLO0FBQ0QsWUFBTSxDQUFDLFNBQUQsRUFBWSxXQUFaLEVBQXlCLFVBQXpCLENBREw7QUFFRCxZQUFNLENBQUMsU0FBRCxFQUFZLFNBQVo7QUFGTCxLQUxNO0FBU1gsU0FBSztBQUNELFlBQU0sQ0FBQyxVQUFELEVBQWEsV0FBYixFQUEwQixXQUExQixDQURMO0FBRUQsWUFBTSxDQUFDLFVBQUQsRUFBYSxVQUFiO0FBRkwsS0FUTTtBQWFYLFVBQU07QUFDRixZQUFNLENBQUMsVUFBRCxFQUFhLFlBQWIsRUFBMkIsV0FBM0IsQ0FESjtBQUVGLFlBQU0sQ0FBQyxVQUFELEVBQWEsVUFBYjtBQUZKLEtBYks7QUFpQlgsVUFBTTtBQUNGLFlBQU0sQ0FBQyxhQUFELEVBQWdCLGVBQWhCLEVBQWlDLGNBQWpDLENBREo7QUFFRixZQUFNLENBQUMsYUFBRCxFQUFnQixhQUFoQjtBQUZKO0FBakJLLEdBQWY7QUFzQkgsQ0FqRUQ7O0FBbUVlL0IsK0VBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwJ1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBOdW1Ub1dvcmRzIGZyb20gXCIuL251bXRvd29yZHNcIjtcclxuXHJcbnZhciBudW10b3dvcmRzID0gbmV3IE51bVRvV29yZHMoKTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUFsbCgpIHtcclxuICAgIHZhciBjdXJyZW5jeSA9ICQoXCIjdmFsdXRhXCIpLnZhbCgpO1xyXG4gICAgdmFyIGxhbmcgPSAkKCdpbnB1dFtuYW1lPVwibGFuZ1wiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICB2YXIgbnVtID0gJChcIiNjXCIpLnZhbCgpO1xyXG4gICAgdmFyIHJlcyA9IG51bXRvd29yZHMuZ2V0RnVsbChjdXJyZW5jeSwgbGFuZywgbnVtKTtcclxuICAgICQoXCIjcmVzXCIpLmh0bWwocmVzKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb252ZXJ0X2xhbmcnLCBsYW5nKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb252ZXJ0X2N1cnJlbmN5JywgY3VycmVuY3kpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5KCkge1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoJChcIiNyZXNcIikuaHRtbCgpKTtcclxuICAgICQoXCIjYWxydFwiKS5mYWRlSW4oKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7JChcIiNhbHJ0XCIpLmZhZGVPdXQoKTt9LCAxMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0hlbHAoKSB7XHJcbiAgICAkKFwiI2hlbHBcIikuZmFkZUluKCk7XHJcbiAgICAkKFwiI2hlbHAtYnRuXCIpLmhpZGUoKTtcclxufVxyXG5cclxuJChcIiNjXCIpLm9uKCdrZXl1cCcsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY1wiKS5vbignY2hhbmdlJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdjbGljaycsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY1wiKS5vbigncGFzdGUnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI3ZhbHV0YVwiKS5vbignY2hhbmdlJywgdXBkYXRlQWxsKTtcclxuJCgnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1sYW5nXScpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NvcHktYnRuXCIpLm9uKCdjbGljaycsIGNvcHkpO1xyXG4kKFwiI2hlbHAtYnRuXCIpLm9uKCdjbGljaycsIHNob3dIZWxwKTtcclxuXHJcbnZhciBzZWwgPSAnJztcclxudmFyIHZhbHMgPSBudW10b3dvcmRzLmdldFZhbHMoKTtcclxuZm9yICh2YXIga2V5IGluIHZhbHMpIHtcclxuICAgIHZhciB2YWxhID0gdmFsc1trZXldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsc1trZXldLnNsaWNlKDEpO1xyXG4gICAgc2VsID0gc2VsICsgJzxvcHRpb24gdmFsdWU9XCInK2tleSsnXCI+JytrZXkudG9VcHBlckNhc2UoKSsnICcrdmFsYSsnPC9vcHRpb24+JztcclxufTtcclxuJChcIiN2YWx1dGFcIikuaHRtbChzZWwpO1xyXG52YXIgbGFuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb252ZXJ0X2xhbmcnKTtcclxuaWYgKGxhbmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgdmFyIGxhbmdWYWxzID0ge1xyXG4gICAgICAgICdsdic6IDAsXHJcbiAgICAgICAgJ2VuJzogMSxcclxuICAgICAgICAncnUnOiAyXHJcbiAgICB9O1xyXG5cclxuICAgICQoJ2lucHV0OnJhZGlvW25hbWU9XCJsYW5nXCJdJylbbGFuZ1ZhbHNbbGFuZ11dLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgJCgnaW5wdXRbbmFtZT1cImxhbmdcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG59XHJcbnZhciBjdXJyZW5jeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb252ZXJ0X2N1cnJlbmN5Jyk7XHJcbmlmIChjdXJyZW5jeSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAkKFwiI3ZhbHV0YVwiKS52YWwoY3VycmVuY3kpO1xyXG59XHJcbiIsImltcG9ydCBUMlcgZnJvbSBcIm51bWJlcnMyd29yZHNcIjtcclxuaW1wb3J0IFdvcmRUcmFuc2xhdGlvbnMgZnJvbSBcIi4vdHJhbnNsYXRpb25zXCI7XHJcblxyXG52YXIgTnVtVG9Xb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudHJhbnNsYXRvciA9IG5ldyBUMlcoXCJFTl9VU1wiKTtcclxuICAgIHRoaXMudHJhbnNsYXRpb25zID0gbmV3IFdvcmRUcmFuc2xhdGlvbnMoKTtcclxuICAgIHRoaXMubGFuZyA9ICdsdic7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldFZhbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lMdjtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudW5pdHMgPSBmdW5jdGlvbiAobnVtZXJpY1VuaXQsIHBsdXJhbCA9IDApIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudHJhbnNsYXRpb25zLm51bUNvbmYudW5pdHNbdGhpcy5sYW5nXVtudW1lcmljVW5pdF0pKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLm51bUNvbmYudW5pdHNbdGhpcy5sYW5nXVtudW1lcmljVW5pdF1bcGx1cmFsXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLm51bUNvbmYudW5pdHNbdGhpcy5sYW5nXVtudW1lcmljVW5pdF1cclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudGVubmVycyA9IGZ1bmN0aW9uIChudW1lcmljVGVuLCBzZXggPSB0cnVlKSB7XHJcbiAgICB2YXIgcGx1cmFsID0gMTtcclxuICAgIGlmIChzZXgpIHtcclxuICAgICAgICBwbHVyYWwgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWVyaWNUZW5bMF0gPT09IFwiMFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5pdHMobnVtZXJpY1RlblsxXSwgcGx1cmFsKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljVGVuWzBdID09PSBcIjFcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnRlZW5zW3RoaXMubGFuZ11bbnVtZXJpY1Rlbl1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi50ZW5uZXJzW3RoaXMubGFuZ11bbnVtZXJpY1RlblswXV0gKyBcIiBcIiArIHRoaXMudW5pdHMobnVtZXJpY1RlblsxXSwgcGx1cmFsKVxyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5odW5kcmVkcyA9IGZ1bmN0aW9uIChudW1lcmljSHVuZHJlZCwgc2V4ID0gdHJ1ZSkge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLmh1bmRyZWRzLnJ1W251bWVyaWNIdW5kcmVkWzBdXSArICcgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdLCBzZXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWVyaWNIdW5kcmVkWzBdID09PSBcIjBcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSwgc2V4KTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljSHVuZHJlZFswXSA9PT0gXCIxXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMub25lSHVuZHJlZEx2ICsgJyAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudW5pdHMobnVtZXJpY0h1bmRyZWRbMF0pICsgJyAnICsgdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJhZHMgKyAnICcgKyB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSwgc2V4KTtcclxufVxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZW5lcmljQ2FsbGVyID0gZnVuY3Rpb24obWV0aG9kTmFtZSkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICBhcmdzLnNoaWZ0KCk7XHJcbiAgICByZXR1cm4gdGhpc1ttZXRob2ROYW1lXS5hcHBseSh0aGlzLCBhcmdzKTtcclxufTtcclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnVuaSA9IGZ1bmN0aW9uIChudW0sIGxlbiwgc2V4ID0gJ2hlJykge1xyXG4gICAgaWYgKGxlbiA9PT0gMykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyaWNDYWxsZXIoJ2h1bmRyZWRzJywgbnVtLCBzZXggPT09ICdoZScpO1xyXG4gICAgfVxyXG4gICAgdmFyIG1pbGlvbmkgPSBudW0uc3Vic3RyaW5nKDAsIDMpO1xyXG4gICAgdmFyIHRob3VzYW5kc2NpID0gbnVtLnN1YnN0cmluZygzLCBsZW4pO1xyXG5cclxuICAgIGlmIChtaWxpb25pID09PSAnMDAwJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyaWNDYWxsZXIoJ3VuaScsIHRob3VzYW5kc2NpLCBsZW4tMywgc2V4KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWlsaldvcmQgPSB0aGlzLnRyYW5zbGF0aW9ucy5iaWdOdW1zWyhsZW4gLSAzKS50b1N0cmluZygpXVt0aGlzLmxhbmddWzFdO1xyXG4gICAgaWYgKG1pbGlvbmlbMl0gPT09IFwiMVwiICYmIG1pbGlvbmlbMV0gIT09IFwiMVwiKSB7XHJcbiAgICAgICAgbWlsaldvcmQgPSB0aGlzLnRyYW5zbGF0aW9ucy5iaWdOdW1zWyhsZW4gLSAzKS50b1N0cmluZygpXVt0aGlzLmxhbmddWzBdXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnICYmIG1pbGlvbmlbMV0gIT09IFwiMVwiICYmIChtaWxpb25pWzJdID09PSBcIjJcIiB8fCBtaWxpb25pWzJdID09PSBcIjNcIiB8fCBtaWxpb25pWzJdID09PSBcIjRcIikpIHtcclxuICAgICAgICBtaWxqV29yZCA9IHRoaXMudHJhbnNsYXRpb25zLmJpZ051bXNbKGxlbiAtIDMpLnRvU3RyaW5nKCldW3RoaXMubGFuZ11bMl1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh1bmRyZWRzKG1pbGlvbmksICEobGVuID49IDYgJiYgbGVuIDwgOSkpICsgJyAnK21pbGpXb3JkKycgJyArIHRoaXMuZ2VuZXJpY0NhbGxlcigndW5pJywgdGhvdXNhbmRzY2ksIGxlbi0zLCBzZXgpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRSZXN1bHQgPSBmdW5jdGlvbiAobnVtLCBjZW50LCBldXIsIHNleCA9ICdoZScpIHtcclxuICAgIHZhciBwb2ludCA9IG51bS5sYXN0SW5kZXhPZignLicpO1xyXG4gICAgdmFyIGNvbWEgPSBudW0ubGFzdEluZGV4T2YoJywnKTtcclxuICAgIHZhciBwb2ludENvdW50ID0gKG51bS5zcGxpdChcIi5cIikubGVuZ3RoIC0gMSlcclxuICAgIHZhciBjb21hQ291bnQgPSAobnVtLnNwbGl0KFwiLFwiKS5sZW5ndGggLSAxKVxyXG4gICAgdmFyIHNlcCA9IC0xO1xyXG4gICAgaWYgKHBvaW50ICE9PSAtMSAmJiBwb2ludCA+IGNvbWEgJiYgcG9pbnRDb3VudCA9PT0gMSkge1xyXG4gICAgICAgIHZhciBzZXAgPSBwb2ludDtcclxuICAgIH0gZWxzZSBpZiAoY29tYSAhPT0gLTEgJiYgY29tYSA+IHBvaW50ICYmIGNvbWFDb3VudCA9PT0gMSkge1xyXG4gICAgICAgIHZhciBzZXAgPSBjb21hO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsZW5ndGggPSBudW0ubGVuZ3RoO1xyXG4gICAgdmFyIHVuID0gdGhpcy50cmFuc2xhdGlvbnMuYW5kc1t0aGlzLmxhbmddO1xyXG4gICAgdmFyIGNvbWF0cyA9IHRoaXMudHJhbnNsYXRpb25zLmNvbWF0c1t0aGlzLmxhbmddO1xyXG4gICAgdmFyIGNlbnRpID0gJyAnK3VuKycgMDAgJyArIGNlbnQ7XHJcbiAgICBpZiAoc2VwICE9PSAtMSkge1xyXG5cclxuICAgICAgICBjZW50aSA9IG51bS5zdWJzdHJpbmcoc2VwKzEsIGxlbmd0aCk7XHJcbiAgICAgICAgY2VudGkgPSBjZW50aS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIilcclxuICAgICAgICBudW0gPSBudW0uc3Vic3RyaW5nKDAsIHNlcCk7XHJcbiAgICAgICAgdmFyIGNlbnRpMSA9ICcnO1xyXG4gICAgICAgIGlmIChjZW50aS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2VudGkxID0gJzAwJztcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjZW50aTEgPSBjZW50aSsnMCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZW50aS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgY2VudGkxID0gY2VudGk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2VudGkxID0gY2VudGkuc3Vic3RyaW5nKDAsMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjZW50KSkge1xyXG4gICAgICAgICAgICBpZiAoY2VudGkxW2NlbnRpMS5sZW5ndGgtMV0gPT09IFwiMVwiICYmIGNlbnRpMVtjZW50aTEubGVuZ3RoLTJdICE9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgY2VudCA9IGNlbnRbMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGNlbnRpMVtjZW50aTEubGVuZ3RoLTJdICE9PSBcIjFcIikgJiYgKGNlbnRpMVtjZW50aTEubGVuZ3RoLTFdID09PSBcIjJcIiB8fCBjZW50aTFbY2VudGkxLmxlbmd0aC0xXSA9PT0gXCIzXCIgfHwgY2VudGkxW2NlbnRpMS5sZW5ndGgtMV0gPT09IFwiNFwiICkpIHtcclxuICAgICAgICAgICAgICAgIGNlbnQgPSBjZW50WzJdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2VudCA9IGNlbnRbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG51bSA9IG51bS5zdWJzdHJpbmcoMCwgc2VwKTtcclxuICAgICAgICBpZiAoY2VudGkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aTErJyAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aTErJyAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aTErJyAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgY2VudGkyID0gY2VudGkuc3Vic3RyaW5nKDIsY2VudGkubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aTEgKyAnLCAnICsgY29tYXRzICsnLCAnKyBjZW50aTIrJyAnICsgY2VudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9yaWcgPSBudW07XHJcbiAgICBudW0gPSBudW0ucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcblxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG51bSA9IHRoaXMudHJhbnNsYXRvci50b1dvcmRzKE51bWJlcihudW0pKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgbnVtID0gJ0EgbG90IG9mJztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG51bSA9ICcwJy5yZXBlYXQoMTggLSBudW0ubGVuZ3RoKSArIG51bTtcclxuICAgICAgICBudW0gPSB0aGlzLnVuaShudW0sIDE4LCBzZXgpLnRyaW0oKTtcclxuICAgICAgICBpZiAobnVtID09PSAnJykge1xyXG4gICAgICAgICAgICBudW0gPSB0aGlzLnRyYW5zbGF0aW9ucy5udWxsZVt0aGlzLmxhbmddO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnbHYnKSB7XHJcbiAgICAgICAgaWYgKChvcmlnLmxlbmd0aCA+IDEgJiYgb3JpZ1tvcmlnLmxlbmd0aC0xXSA9PT0gXCIxXCIgJiYgb3JpZ1tvcmlnLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG9yaWcgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGV1cltldXIubGVuZ3RoLTFdICE9IFwib1wiICYmIGV1cltldXIubGVuZ3RoLTFdICE9IFwiZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKSArICdpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMl0gPT09IFwiaVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZXVyLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBldXIgPSB0aGlzLmVuZGluZ3NSdShvcmlnLCBldXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGV1ciA9IHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzBdKSArICcgJyArIHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzFdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICBldXIgPSB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1swXSkgKyAnICcgKyB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1sxXSkgKyAnICcgKyBlbGVtZW50c1syXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bSArICcgJyArIGV1ci50b0xvd2VyQ2FzZSgpICsgY2VudGk7XHJcbn1cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZW5kaW5nc1J1ID0gZnVuY3Rpb24gKG51bWJlciwgY3VycmVuY3kpIHtcclxuICAgIGlmICgobnVtYmVyLmxlbmd0aCA+IDEgJiYgbnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiMVwiICYmIG51bWJlcltudW1iZXIubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgbnVtYmVyID09PSBcIjFcIikge1xyXG4gICAgfSBlbHNlIGlmICgobnVtYmVyLmxlbmd0aCA+IDEgJiYgKG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjJcIiB8fCBudW1iZXJbbnVtYmVyLmxlbmd0aC0xXSA9PT0gXCIzXCIgfHwgbnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiNFwiKSAmJiBudW1iZXJbbnVtYmVyLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG51bWJlciA9PT0gXCIxXCIpIHtcclxuICAgICAgICB2YXIgZW5kaW5ncyA9IHsnYWRkJzp7XCLRgFwiOiBcItCwXCIsIFwi0YJcIjogXCLQsFwiLCBcItC6XCI6IFwi0LBcIiwgXCLQsNC8XCI6IFwi0LBcIn0sICdyZXBsYWNlJzoge1wi0LjRgNCwXCI6IFwi0LjRgNGLXCIsIFwi0YxcIjogXCLRj1wiLCBcItGB0LrQuNC5XCI6XCLRgdC60LjRhVwiLCBcItC40LlcIjogXCLQuNGFXCIsIFwi0YvQuVwiOiBcItCwXCIsIFwi0LDRj1wiOiBcItC40LVcIiwgXCLRhFwiOiBcItGLXCIsIFwi0L3QsFwiOiBcItC90YtcIn19O1xyXG4gICAgICAgIGZvciAodmFyIGVuZGluZyBpbiBlbmRpbmdzWydhZGQnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeSArIGVuZGluZ3NbJ2FkZCddW2VuZGluZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChlbmRpbmcgaW4gZW5kaW5nc1sncmVwbGFjZSddKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5zdWJzdHJpbmcoY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgPT09IGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LnN1YnN0cmluZygwLCBjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSArIGVuZGluZ3NbJ3JlcGxhY2UnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgZW5kaW5ncyA9IHsnYWRkJzp7XCLRgFwiOiBcItC+0LJcIiwgXCLRglwiOiBcItC+0LJcIiwgXCLQulwiOiBcItC+0LJcIn0sICdyZXBsYWNlJzoge1wi0YxcIjogXCLQtdC5XCIsIFwi0LjQuVwiOiBcItC40YVcIiwgXCLRi9C5XCI6IFwi0YvRhVwiLCBcItCw0Y9cIjogXCLQuNGFXCIsIFwi0LBcIjogXCJcIn19O1xyXG4gICAgICAgIGZvciAodmFyIGVuZGluZyBpbiBlbmRpbmdzWydhZGQnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeSArIGVuZGluZ3NbJ2FkZCddW2VuZGluZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChlbmRpbmcgaW4gZW5kaW5nc1sncmVwbGFjZSddKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5zdWJzdHJpbmcoY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgPT09IGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LnN1YnN0cmluZygwLCBjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSArIGVuZGluZ3NbJ3JlcGxhY2UnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyZW5jeTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0RnVsbCA9IGZ1bmN0aW9uICh2YWx1dGEsIGxhbmcsIG51bSkge1xyXG4gICAgdGhpcy5sYW5nID0gbGFuZztcclxuICAgIHZhciBlZGVuID0ge1xyXG4gICAgfTtcclxuICAgIHZhciBzbSA9IHtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNleCA9ICdoZSc7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgZWRlbiA9IHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5RW47XHJcbiAgICAgICAgc20gPSB0aGlzLnRyYW5zbGF0aW9ucy5odW5kcmVkdGhzRW47XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeVJ1O1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc1J1O1xyXG4gICAgICAgIHNleCA9IHRoaXMudHJhbnNsYXRpb25zLmN1ckNvbmZbdmFsdXRhXVsnc2V4J11bJ3J1J107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUx2O1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc0x2O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzbXJlcyA9ICcoMS8xMDApICcgKyB2YWx1dGEudG9VcHBlckNhc2UoKTtcclxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNtLCB2YWx1dGEpKSB7XHJcbiAgICAgICAgc21yZXMgPSBzbVt2YWx1dGFdO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcyA9IHRoaXMuZ2V0UmVzdWx0KG51bSwgc21yZXMsIGVkZW5bdmFsdXRhXSwgc2V4KTtcclxuICAgIHJlcyA9IHJlcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlcy5zbGljZSgxKTtcclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdW1Ub1dvcmRzO1xyXG4iLCJpbXBvcnQgTnVtVG9Xb3JkcyBmcm9tIFwiLi9udW10b3dvcmRzXCI7XHJcblxyXG52YXIgV29yZFRyYW5zbGF0aW9ucyA9IGZ1bmN0aW9uIChjdXJDb25mID0gbnVsbCwgbnVtQ29uZiA9IG51bGwpIHtcclxuICAgIHRoaXMuY3VyQ29uZiA9IHtcImV1clwiOntcIm5hbWVcIjp7XCJsdlwiOlwiZXVyb1wiLFwicnVcIjpcIlxcdTA0MTVcXHUwNDMyXFx1MDQ0MFxcdTA0M2VcIixcImVuXCI6XCJldXJvXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6W1wiY2VudGlcIixcImNlbnRzXCIsXCJjZW50aVwiXSxcInJ1XCI6W1wiXFx1MDQ0NlxcdTA0MzVcXHUwNDNkXFx1MDQ0MlxcdTA0M2VcXHUwNDMyXCIsXCJcXHUwNDQ2XFx1MDQzNVxcdTA0M2RcXHUwNDQyXCIsXCJcXHUwNDQ2XFx1MDQzNVxcdTA0M2RcXHUwNDQyXFx1MDQzMFwiXSxcImVuXCI6XCJjZW50c1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJ1c2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcImRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MTRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImRvbGxhclwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOltcImNlbnRpXCIsXCJjZW50c1wiLFwiY2VudGlcIl0sXCJydVwiOltcIlxcdTA0NDZcXHUwNDM1XFx1MDQzZFxcdTA0NDJcXHUwNDNlXFx1MDQzMlwiLFwiXFx1MDQ0NlxcdTA0MzVcXHUwNDNkXFx1MDQ0MlwiLFwiXFx1MDQ0NlxcdTA0MzVcXHUwNDNkXFx1MDQ0MlxcdTA0MzBcIl0sXCJlblwiOlwiY2VudHNcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiZ2JwXCI6e1wibmFtZVwiOntcImx2XCI6XCJMaWVsYnJpdFxcdTAxMDFuaWphcyBtXFx1MDEwMXJjaVxcdTAxNDZhXCIsXCJydVwiOlwiXFx1MDQxMFxcdTA0M2RcXHUwNDMzXFx1MDQzYlxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ0XFx1MDQ0M1xcdTA0M2RcXHUwNDQyIFxcdTA0NDFcXHUwNDQyXFx1MDQzNVxcdTA0NDBcXHUwNDNiXFx1MDQzOFxcdTA0M2RcXHUwNDMzXFx1MDQzZVxcdTA0MzJcIixcImVuXCI6XCJicml0aXNoIHBvdW5kXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJwZW5pXCIsXCJydVwiOlwiXFx1MDQzZlxcdTA0MzVcXHUwNDNkXFx1MDQzOFwiLFwiZW5cIjpcInBlbmNlXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInJ1YlwiOntcIm5hbWVcIjp7XCJsdlwiOlwiS3JpZXZpamFzIHJ1Ymxpc1wiLFwicnVcIjpcIlxcdTA0MjBcXHUwNDNlXFx1MDQ0MVxcdTA0NDFcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0NDNcXHUwNDMxXFx1MDQzYlxcdTA0NGNcIixcImVuXCI6XCJydXNzaWFuIHJ1YmxlXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6W1wia2FwZWlrYXNcIixcImthcGVpa2FcIixcImthcGVpa2FzXCJdLFwicnVcIjpbXCJcXHUwNDNhXFx1MDQzZVxcdTA0M2ZcXHUwNDM1XFx1MDQzNVxcdTA0M2FcIixcIlxcdTA0M2FcXHUwNDNlXFx1MDQzZlxcdTA0MzVcXHUwNDM5XFx1MDQzYVxcdTA0MzBcIixcIlxcdTA0M2FcXHUwNDNlXFx1MDQzZlxcdTA0MzVcXHUwNDM5XFx1MDQzYVxcdTA0MzhcIl0sXCJlblwiOlwia29wZWtzXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInBsblwiOntcIm5hbWVcIjp7XCJsdlwiOlwiUG9saWphcyB6bG90c1wiLFwicnVcIjpcIlxcdTA0MWZcXHUwNDNlXFx1MDQzYlxcdTA0NGNcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzdcXHUwNDNiXFx1MDQzZVxcdTA0NDJcXHUwNDRiXFx1MDQzOVwiLFwiZW5cIjpcInBvbGlzaCB6bG90eVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiZ3JvXFx1MDE2MWlcIixcInJ1XCI6XCJcXHUwNDMzXFx1MDQ0MFxcdTA0M2VcXHUwNDQ4XCIsXCJlblwiOlwiZ3Jvc3pcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwia3p0XCI6e1wibmFtZVwiOntcImx2XCI6XCJLYXphaHN0XFx1MDEwMW5hcyB0ZW5nZVwiLFwicnVcIjpcIlxcdTA0MWFcXHUwNDMwXFx1MDQzN1xcdTA0MzBcXHUwNDQ1XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MlxcdTA0MzVcXHUwNDNkXFx1MDQzM1xcdTA0MzVcIixcImVuXCI6XCJrYXpha2hzdGFuIHRlbmdlXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJ0aWpcXHUwMTJibmlcIixcInJ1XCI6XCJcXHUwNDQyXFx1MDQzOFxcdTA0NGJcXHUwNDNkXCIsXCJlblwiOlwidFxcdTAxMzF5bnNcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiY2hmXCI6e1wibmFtZVwiOntcImx2XCI6XCJcXHUwMTYwdmVpY2VzIGZyYW5rc1wiLFwicnVcIjpcIlxcdTA0MjhcXHUwNDMyXFx1MDQzNVxcdTA0MzlcXHUwNDQ2XFx1MDQzMFxcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDQwXFx1MDQzMFxcdTA0M2RcXHUwNDNhXCIsXCJlblwiOlwic3dpc3MgZnJhbmNcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcInJhcGVuaVwiLFwicnVcIjpbXCJcXHUwNDQwXFx1MDQzMFxcdTA0M2ZcXHUwNDNmXFx1MDQzNVxcdTA0M2RcXHUwNDNlXFx1MDQzMlwiLFwiXFx1MDQ0MFxcdTA0MzBcXHUwNDNmXFx1MDQzZlxcdTA0MzVcXHUwNDNkXCIsXCJcXHUwNDQwXFx1MDQzMFxcdTA0M2ZcXHUwNDNmXFx1MDQzNVxcdTA0M2RcXHUwNDMwXCJdLFwiZW5cIjpcInJhcHBlbnNcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiYWVkXCI6e1wibmFtZVwiOntcImx2XCI6XCJBcHZpZW5vdG8gQXJcXHUwMTAxYnUgRW1pclxcdTAxMDF0dSBkaXJoYW1zXCIsXCJydVwiOlwiXFx1MDQxNFxcdTA0MzhcXHUwNDQwXFx1MDQ0NVxcdTA0MzBcXHUwNDNjIFxcdTA0MWVcXHUwNDEwXFx1MDQyZFwiLFwiZW5cIjpcInVuaXRlZCBhcmFiIGVtaXJhdGVzIGRpcmhhbVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiZmlsaVwiLFwicnVcIjpcIlxcdTA0NDRcXHUwNDM4XFx1MDQzYlxcdTA0NDFcIixcImVuXCI6XCJmaWxzXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImRra1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiRFxcdTAxMDFuaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MTRcXHUwNDMwXFx1MDQ0MlxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJkYW5pc2gga3JvbmVcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcIlxcdTAxMTNyaVwiLFwicnVcIjpcIlxcdTA0NGRcXHUwNDQwXFx1MDQzNVwiLFwiZW5cIjpcIm9yZVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwic2VrXCI6e1wibmFtZVwiOntcImx2XCI6XCJadmllZHJpamFzIGtyb25hXCIsXCJydVwiOlwiXFx1MDQyOFxcdTA0MzJcXHUwNDM1XFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJzd2VkaXNoIGtyb25hXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJcXHUwMTEzcmlcIixcInJ1XCI6XCJcXHUwNDRkXFx1MDQ0MFxcdTA0MzVcIixcImVuXCI6XCJvcmVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcIm5va1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiTm9ydlxcdTAxMTNcXHUwMTIzaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MWRcXHUwNDNlXFx1MDQ0MFxcdTA0MzJcXHUwNDM1XFx1MDQzNlxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJub3J3ZWdpYW4ga3JvbmVcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcIlxcdTAxMTNyaVwiLFwicnVcIjpcIlxcdTA0NGRcXHUwNDQwXFx1MDQzNVwiLFwiZW5cIjpcIm9yZVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiYmduXCI6e1wibmFtZVwiOntcImx2XCI6XCJCdWxnXFx1MDEwMXJpamFzIGxldmFcIixcInJ1XCI6XCJcXHUwNDExXFx1MDQzZVxcdTA0M2JcXHUwNDMzXFx1MDQzMFxcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDM1XFx1MDQzMlwiLFwiZW5cIjpcImJ1bGdhcmlhbiBsZXZcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiaHVmXCI6e1wibmFtZVwiOntcImx2XCI6XCJVbmdcXHUwMTAxcmlqYXMgZm9yaW50c1wiLFwicnVcIjpcIlxcdTA0MzJcXHUwNDM1XFx1MDQzZFxcdTA0MzNcXHUwNDM1XFx1MDQ0MFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0M2VcXHUwNDQwXFx1MDQzOFxcdTA0M2RcXHUwNDQyXCIsXCJlblwiOlwiaHVuZ2FyaWFuIGZvcmludFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJ0cnlcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlR1cmNpamFzIGxpcmFcIixcInJ1XCI6XCJcXHUwNDIyXFx1MDQ0M1xcdTA0NDBcXHUwNDM1XFx1MDQ0NlxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNiXFx1MDQzOFxcdTA0NDBcXHUwNDMwXCIsXCJlblwiOlwidHVya2lzaCBsaXJhXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJhbGxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkFsYlxcdTAxMDFuaWphcyBsZWtzXCIsXCJydVwiOlwiXFx1MDQxMFxcdTA0M2JcXHUwNDMxXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDM1XFx1MDQzYVwiLFwiZW5cIjpcImFsYmFuaWFuIGxla1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJocmtcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkhvcnZcXHUwMTAxdGlqYXMga3VuYVwiLFwicnVcIjpcIlhcXHUwNDNlXFx1MDQ0MFxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDNcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcImNyb2F0aWFuIGt1bmFcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImN6a1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiXFx1MDEwY2VoaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MjdcXHUwNDM1XFx1MDQ0OFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJjemVjaCBrb3J1bmFcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImdlbFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiR3J1emlqYXMgbGFyaVwiLFwicnVcIjpcIlxcdTA0MTNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDM4XFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzBcXHUwNDQwXFx1MDQzOFwiLFwiZW5cIjpcImdlb3JnaWFuIGxhcmlcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibGtyXCI6e1wibmFtZVwiOntcImx2XCI6XCJcXHUwMTYwcmlsYW5rYXMgclxcdTAxNmJwaWphXCIsXCJydVwiOlwiXFx1MDQyOFxcdTA0NDBcXHUwNDM4LVxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0M2FcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQ0MFxcdTA0NDNcXHUwNDNmXFx1MDQzOFxcdTA0NGZcIixcImVuXCI6XCJzcmkgbGFua2FuIHJ1cGVlXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJ0bmRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlR1bmlzaWphcyBkaW5cXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDIyXFx1MDQ0M1xcdTA0M2RcXHUwNDM4XFx1MDQ0MVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJ0dW5pc2lhbiBkaW5hclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJpbHNcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkl6cmFcXHUwMTEzbGFzIFxcdTAxNjFla2Vsc1wiLFwicnVcIjpcIlxcdTA0MThcXHUwNDM3XFx1MDQ0MFxcdTA0MzBcXHUwNDM4XFx1MDQzYlxcdTA0NGNcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDhcXHUwNDM1XFx1MDQzYVxcdTA0MzVcXHUwNDNiXFx1MDQ0Y1wiLFwiZW5cIjpcImlzcmFlbGkgc2hlcWVsXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImpvZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSm9yZFxcdTAxMDFuaWphcyBkaW5cXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDE4XFx1MDQzZVxcdTA0NDBcXHUwNDM0XFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwiam9yZGFuaWFuIGRpbmFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImJ5blwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQmFsdGtyaWV2aWphcyBydWJsaXNcIixcInJ1XCI6XCJcXHUwNDExXFx1MDQzNVxcdTA0M2JcXHUwNDNlXFx1MDQ0MFxcdTA0NDNcXHUwNDQxXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQ0M1xcdTA0MzFcXHUwNDNiXFx1MDQ0Y1wiLFwiZW5cIjpcImJlbGFydXNpYW4gbmV3IHJ1YmxlXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6W1wia2FwZWlrYXNcIixcImthcGVpa2FcIixcImthcGVpa2FzXCJdLFwicnVcIjpbXCJcXHUwNDNhXFx1MDQzZVxcdTA0M2ZcXHUwNDM1XFx1MDQzNVxcdTA0M2FcIixcIlxcdTA0M2FcXHUwNDNlXFx1MDQzZlxcdTA0MzVcXHUwNDM5XFx1MDQzYVxcdTA0MzBcIixcIlxcdTA0M2FcXHUwNDNlXFx1MDQzZlxcdTA0MzVcXHUwNDM5XFx1MDQzYVxcdTA0MzhcIl0sXCJlblwiOlwia29wZWtzXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImVncFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiXFx1MDExMlxcdTAxMjNpcHRlcyBtXFx1MDEwMXJjaVxcdTAxNDZhXCIsXCJydVwiOlwiXFx1MDQxNVxcdTA0MzNcXHUwNDM4XFx1MDQzZlxcdTA0MzVcXHUwNDQyXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ0XFx1MDQ0M1xcdTA0M2RcXHUwNDQyXCIsXCJlblwiOlwiZWd5cHRpYW4gcG91bmRcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwidWFoXCI6e1wibmFtZVwiOntcImx2XCI6XCJVa3JhaW5hcyBncml2bmFcIixcInJ1XCI6XCJcXHUwNDIzXFx1MDQzYVxcdTA0NDBcXHUwNDMwXFx1MDQzOFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0MzNcXHUwNDQwXFx1MDQzOFxcdTA0MzJcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcInVrcmFpbmlhbiBocnl2bmlhXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJjbnlcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxMzZcXHUwMTJibmFzIGp1YVxcdTAxNDZhXCIsXCJydVwiOlwiXFx1MDQxYVxcdTA0MzhcXHUwNDQyXFx1MDQzMFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NGVcXHUwNDMwXFx1MDQzZFxcdTA0NGNcIixcImVuXCI6XCJjaGluZXNlIHl1YW5cIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwidGhiXCI6e1wibmFtZVwiOntcImx2XCI6XCJUYWl6ZW1lcyBiYXRzXCIsXCJydVwiOlwiXFx1MDQyMlxcdTA0MzBcXHUwNDM4XFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzMVxcdTA0MzBcXHUwNDQyXCIsXCJlblwiOlwidGhhaSBiYWh0XCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInZuZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVmpldG5hbWFzIGRvbmdzXCIsXCJydVwiOlwiXFx1MDQxMlxcdTA0NGNcXHUwNDM1XFx1MDQ0MlxcdTA0M2RcXHUwNDMwXFx1MDQzY1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNkXFx1MDQzM1wiLFwiZW5cIjpcInZpZXRuYW1lc2UgZG9uZ1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJwaHBcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkZpbGlwXFx1MDEyYm51IHBlc29cIixcInJ1XCI6XCJcXHUwNDI0XFx1MDQzOFxcdTA0M2JcXHUwNDM4XFx1MDQzZlxcdTA0M2ZcXHUwNDM4XFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzZVxcdTA0MzUgXFx1MDQzZlxcdTA0MzVcXHUwNDQxXFx1MDQzZVwiLFwiZW5cIjpcInBoaWxpcHBpbmUgcGVzb1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJtYWRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1hcm9rYXMgZGlyaGFtc1wiLFwicnVcIjpcIlxcdTA0MWNcXHUwNDMwXFx1MDQ0MFxcdTA0M2VcXHUwNDNhXFx1MDQzYVxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzOFxcdTA0NDBcXHUwNDQ1XFx1MDQzMFxcdTA0M2NcIixcImVuXCI6XCJtb3JvY2NhbiBkaXJoYW1cIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiYXVkXCI6e1wibmFtZVwiOntcImx2XCI6XCJBdXN0clxcdTAxMDFsaWphcyBkb2xcXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDEwXFx1MDQzMlxcdTA0NDFcXHUwNDQyXFx1MDQ0MFxcdTA0MzBcXHUwNDNiXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImF1c3RyYWxpYW4gZG9sbGFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImFyc1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiQXJnZW50XFx1MDEyYm5hcyBwZXNvXCIsXCJydVwiOlwiXFx1MDQxMFxcdTA0NDBcXHUwNDMzXFx1MDQzNVxcdTA0M2RcXHUwNDQyXFx1MDQzOFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcImVuXCI6XCJhcmdlbnRpbmUgcGVzb1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJqcHlcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkphcFxcdTAxMDFuYXMgalxcdTAxMTNuYVwiLFwicnVcIjpcIlxcdTA0MmZcXHUwNDNmXFx1MDQzZVxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0MzhcXHUwNDM1XFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJqYXBhbmVzZSB5ZW5cIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImlkclwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSW5kb25cXHUwMTEzemlqYXMgclxcdTAxNmJwaWphXCIsXCJydVwiOlwiXFx1MDQxOFxcdTA0M2RcXHUwNDM0XFx1MDQzZVxcdTA0M2RcXHUwNDM1XFx1MDQzN1xcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDQwXFx1MDQ0M1xcdTA0M2ZcXHUwNDM4XFx1MDQ0ZlwiLFwiZW5cIjpcImluZG9uZXNpYW4gcnVwaWFoXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJpc2tcIjp7XCJuYW1lXCI6e1wibHZcIjpcIklzbGFuZGVzIGtyb25hXCIsXCJydVwiOlwiXFx1MDQxOFxcdTA0NDFcXHUwNDNiXFx1MDQzMFxcdTA0M2RcXHUwNDM0XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0MFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcImljZWxhbmQga3JvbmFcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImFtZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQXJtXFx1MDExM25pamFzIGRyYW1zXCIsXCJydVwiOlwiXFx1MDQxMFxcdTA0NDBcXHUwNDNjXFx1MDQ0ZlxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDQwXFx1MDQzMFxcdTA0M2NcIixcImVuXCI6XCJhcm1lbmlhbiBkcmFtXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInJvblwiOntcIm5hbWVcIjp7XCJsdlwiOlwiUnVtXFx1MDEwMW5pamFzIGxlamFcIixcInJ1XCI6XCJcXHUwNDIwXFx1MDQ0M1xcdTA0M2NcXHUwNDRiXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYlxcdTA0MzVcXHUwNDRmXCIsXCJlblwiOlwicm9tYW5pYW4gbGV1XCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJzZ2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlNpbmdhcFxcdTAxNmJyYXMgZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQyMVxcdTA0MzhcXHUwNDNkXFx1MDQzM1xcdTA0MzBcXHUwNDNmXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcInNpbmdhcG9yZSBkb2xsYXJcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwic2JwXCI6e1wibmFtZVwiOntcImx2XCI6XCJTa290aWphcyBtXFx1MDEwMXJjaVxcdTAxNDZhXCIsXCJydVwiOlwiXFx1MDQyOFxcdTA0M2VcXHUwNDQyXFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0NDNcXHUwNDNkXFx1MDQ0MlwiLFwiZW5cIjpcInNjb3R0aXNoIHBvdW5kXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImNhZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiS2FuXFx1MDEwMWRhcyBkb2xcXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDFhXFx1MDQzMFxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwiY2FuYWRpYW4gZG9sbGFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImJybFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQnJhelxcdTAxMmJsaWphcyByZVxcdTAxMDFsc1wiLFwicnVcIjpcIlxcdTA0MTFcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM4XFx1MDQzYlxcdTA0NGNcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDBcXHUwNDM1XFx1MDQzMFxcdTA0M2JcIixcImVuXCI6XCJicmF6aWxpYW4gcmVhbFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJ6YXJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkRpZW52aWRcXHUwMTAxZnJpa2FzIHJlbmRzXCIsXCJydVwiOlwiXFx1MDQyZVxcdTA0MzZcXHUwNDNkXFx1MDQzZVxcdTA0MzBcXHUwNDQ0XFx1MDQ0MFxcdTA0MzhcXHUwNDNhXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDBcXHUwNDRkXFx1MDQzZFxcdTA0MzRcIixcImVuXCI6XCJzb3V0aCBhZnJpY2FuIHJhbmRcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiaW5yXCI6e1wibmFtZVwiOntcImx2XCI6XCJJbmRpamFzIHJcXHUwMTZicGlqYVwiLFwicnVcIjpcIlxcdTA0MThcXHUwNDNkXFx1MDQzNFxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDQwXFx1MDQ0M1xcdTA0M2ZcXHUwNDM4XFx1MDQ0ZlwiLFwiZW5cIjpcImluZGlhbiBydXBlZVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwicnNkXCI6e1wibmFtZVwiOntcImx2XCI6XCJTZXJiaWphcyBkaW5cXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDIxXFx1MDQzNVxcdTA0NDBcXHUwNDMxXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzOFxcdTA0M2RcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcInNlcmJpYW4gZGluYXJcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibnpkXCI6e1wibmFtZVwiOntcImx2XCI6XCJKYXVuelxcdTAxMTNsYW5kZXMgZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxZFxcdTA0M2VcXHUwNDMyXFx1MDQzZVxcdTA0MzdcXHUwNDM1XFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwibmV3IHplYWxhbmQgZG9sbGFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcIm15clwiOntcIm5hbWVcIjp7XCJsdlwiOlwiTWFsYWl6aWphcyByaW5naXRzXCIsXCJydVwiOlwiTVxcdTA0MzBcXHUwNDNiXFx1MDQzMFxcdTA0MzlcXHUwNDM3XFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDBcXHUwNDM4XFx1MDQzZFxcdTA0MzNcXHUwNDMzXFx1MDQzOFxcdTA0NDJcIixcImVuXCI6XCJtYWxheXNpYW4gcmluZ2dpdFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJtdXJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1hdXJcXHUwMTJiY2lqYXMgc2FsYXMgclxcdTAxNmJwaWphXCIsXCJydVwiOlwiXFx1MDQxY1xcdTA0MzBcXHUwNDMyXFx1MDQ0MFxcdTA0MzhcXHUwNDNhXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0NDBcXHUwNDQzXFx1MDQzZlxcdTA0MzhcXHUwNDRmXCIsXCJlblwiOlwibWF1cml0aWFuIHJ1cGVlXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJoa2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkhvbmtvbmdhcyBkb2xcXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDEzXFx1MDQzZVxcdTA0M2RcXHUwNDNhXFx1MDQzZVxcdTA0M2RcXHUwNDMzXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJob25nIGtvbmcgZG9sbGFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImtyd1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiRGllbnZpZGtvcmVqYXMgdm9uYVwiLFwicnVcIjpcIlxcdTA0MmVcXHUwNDM2XFx1MDQzZFxcdTA0M2VcXHUwNDNhXFx1MDQzZVxcdTA0NDBcXHUwNDM1XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzMlxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcInNvdXRoIGtvcmVhbiB3b25cIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcIm14blwiOntcIm5hbWVcIjp7XCJsdlwiOlwiTWVrc2lrYXMgcGVzb1wiLFwicnVcIjpcIlxcdTA0MWNcXHUwNDM1XFx1MDQzYVxcdTA0NDFcXHUwNDM4XFx1MDQzYVxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDNlXFx1MDQzNSBcXHUwNDNmXFx1MDQzNVxcdTA0NDFcXHUwNDNlXCIsXCJlblwiOlwibWV4aWNhbiBwZXNvXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcIm1rZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiTWFcXHUwMTM3ZWRvbmlqYXMgZGVuXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxY1xcdTA0MzBcXHUwNDNhXFx1MDQzNVxcdTA0MzRcXHUwNDNlXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJtYWNlZG9uaWFuIGRpbmFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImRvcFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiRG9taW5pa1xcdTAxMDFuYXMgcGVzb1wiLFwicnVcIjpcIlxcdTA0MTRcXHUwNDNlXFx1MDQzY1xcdTA0MzhcXHUwNDNkXFx1MDQzOFxcdTA0M2FcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzZVxcdTA0MzUgXFx1MDQzZlxcdTA0MzVcXHUwNDQxXFx1MDQzZVwiLFwiZW5cIjpcImRvbWluaWNhbiBwZXNvXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImtlc1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiS2VuaWphcyBcXHUwMTYxaWxpXFx1MDE0NlxcdTAxNjFcIixcInJ1XCI6XCJcXHUwNDFhXFx1MDQzNVxcdTA0M2RcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0OFxcdTA0MzhcXHUwNDNiXFx1MDQzYlxcdTA0MzhcXHUwNDNkXFx1MDQzM1wiLFwiZW5cIjpcImtlbnlhIHNoaWxsaW5nXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImRlbVwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVlxcdTAxMDFjaWphcyBtYXJrYVwiLFwicnVcIjpcIlxcdTA0MWRcXHUwNDM1XFx1MDQzY1xcdTA0MzVcXHUwNDQ2XFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2NcXHUwNDMwXFx1MDQ0MFxcdTA0M2FcXHUwNDMwXCIsXCJlblwiOlwiZ2VybWFuIG1hcmtcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImVla1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiSWdhdW5pamFzIGtyb25hXCIsXCJydVwiOlwiXFx1MDQyZFxcdTA0NDFcXHUwNDQyXFx1MDQzZVxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwiZXN0b25pYW4ga3Jvb25cIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImx0bFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiTGlldHV2YXMgbGl0c1wiLFwicnVcIjpcIlxcdTA0MWJcXHUwNDM4XFx1MDQ0MlxcdTA0M2VcXHUwNDMyXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDNiXFx1MDQzOFxcdTA0NDJcIixcImVuXCI6XCJsaXRodWFuaWFuIGxpdGFzXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImx2bFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiTGF0dmlqYXMgbGF0c1wiLFwicnVcIjpcIlxcdTA0MWJcXHUwNDMwXFx1MDQ0MlxcdTA0MzJcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzBcXHUwNDQyXCIsXCJlblwiOlwibGF0dmlhbiBsYXRzXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6W1wic2FudGltaVwiLFwic2FudGltc1wiLFwic2FudGltaVwiXSxcInJ1XCI6W1wiXFx1MDQ0MVxcdTA0MzBcXHUwNDNkXFx1MDQ0MlxcdTA0MzhcXHUwNDNjXFx1MDQzZVxcdTA0MzJcIixcIlxcdTA0NDFcXHUwNDMwXFx1MDQzZFxcdTA0NDJcXHUwNDM4XFx1MDQzY1wiLFwiXFx1MDQ0MVxcdTA0MzBcXHUwNDNkXFx1MDQ0MlxcdTA0MzhcXHUwNDNjXFx1MDQzZVxcdTA0MzJcIl0sXCJlblwiOlwic2FudGltc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX19O1xyXG4gICAgdGhpcy5udW1Db25mID0ge1widW5pdHNcIjp7XCJsdlwiOltcIlwiLFwidmllbnNcIixcImRpdmlcIixcInRyXFx1MDEyYnNcIixcIlxcdTAxMGRldHJpXCIsXCJwaWVjaVwiLFwic2VcXHUwMTYxaVwiLFwic2VwdGlcXHUwMTQ2aVwiLFwiYXN0b1xcdTAxNDZpXCIsXCJkZXZpXFx1MDE0NmlcIl0sXCJydVwiOltcIlwiLFtcIlxcdTA0M2VcXHUwNDM0XFx1MDQzOFxcdTA0M2RcIixcIlxcdTA0M2VcXHUwNDM0XFx1MDQzZFxcdTA0MzBcIl0sW1wiXFx1MDQzNFxcdTA0MzJcXHUwNDMwXCIsXCJcXHUwNDM0XFx1MDQzMlxcdTA0MzVcIl0sXCJcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcIixcIlxcdTA0NDdcXHUwNDM1XFx1MDQ0MlxcdTA0NGJcXHUwNDQwXFx1MDQzNVwiLFwiXFx1MDQzZlxcdTA0NGZcXHUwNDQyXFx1MDQ0Y1wiLFwiXFx1MDQ0OFxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0NGNcIixcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcIixcIlxcdTA0MzJcXHUwNDNlXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQ0Y1wiLFwiXFx1MDQzNFxcdTA0MzVcXHUwNDMyXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXCJdfSxcInRlZW5zXCI6e1wibHZcIjp7XCIxMFwiOlwiZGVzbWl0XCIsXCIxMVwiOlwidmllbnBhZHNtaXRcIixcIjEyXCI6XCJkaXZwYWRzbWl0XCIsXCIxM1wiOlwidHJcXHUwMTJic3BhZHNtaXRcIixcIjE0XCI6XCJcXHUwMTBkZXRycGFkc21pdFwiLFwiMTVcIjpcInBpZWNwYWRzbWl0XCIsXCIxNlwiOlwic2VcXHUwMTYxcGFkc21pdFwiLFwiMTdcIjpcInNlcHRpXFx1MDE0NnBhZHNtaXRcIixcIjE4XCI6XCJhc3RvXFx1MDE0NnBhZHNtaXRcIixcIjE5XCI6XCJkZXZpXFx1MDE0NnBhZHNtaXRcIn0sXCJydVwiOntcIjEwXCI6XCJcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlxcdTA0NGNcIixcIjExXCI6XCJcXHUwNDNlXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMTJcIjpcIlxcdTA0MzRcXHUwNDMyXFx1MDQzNVxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjEzXCI6XCJcXHUwNDQyXFx1MDQ0MFxcdTA0MzVcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxNFwiOlwiXFx1MDQ0N1xcdTA0MzVcXHUwNDQyXFx1MDQ0YlxcdTA0NDBcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxNVwiOlwiXFx1MDQzZlxcdTA0NGZcXHUwNDQyXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMTZcIjpcIlxcdTA0NDhcXHUwNDM1XFx1MDQ0MVxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjE3XCI6XCJcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxOFwiOlwiXFx1MDQzMlxcdTA0M2VcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxOVwiOlwiXFx1MDQzNFxcdTA0MzVcXHUwNDMyXFx1MDQ0ZlxcdTA0NDJcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCJ9fSxcInRlbm5lcnNcIjp7XCJsdlwiOntcIjJcIjpcImRpdmRlc21pdFwiLFwiM1wiOlwidHJcXHUwMTJic2Rlc21pdFwiLFwiNFwiOlwiXFx1MDEwZGV0cmRlc21pdFwiLFwiNVwiOlwicGllY2Rlc21pdFwiLFwiNlwiOlwic2VcXHUwMTYxZGVzbWl0XCIsXCI3XCI6XCJzZXB0aVxcdTAxNDZkZXNtaXRcIixcIjhcIjpcImFzdG9cXHUwMTQ2ZGVzbWl0XCIsXCI5XCI6XCJkZXZpXFx1MDE0NmRlc21pdFwifSxcInJ1XCI6e1wiMlwiOlwiXFx1MDQzNFxcdTA0MzJcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjNcIjpcIlxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCI0XCI6XCJcXHUwNDQxXFx1MDQzZVxcdTA0NDBcXHUwNDNlXFx1MDQzYVwiLFwiNVwiOlwiXFx1MDQzZlxcdTA0NGZcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcIjZcIjpcIlxcdTA0NDhcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcIjdcIjpcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlwiLFwiOFwiOlwiXFx1MDQzMlxcdTA0M2VcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcIjlcIjpcIlxcdTA0MzRcXHUwNDM1XFx1MDQzMlxcdTA0NGZcXHUwNDNkXFx1MDQzZVxcdTA0NDFcXHUwNDQyXFx1MDQzZVwifX0sXCJodW5kcmVkc1wiOntcInJ1XCI6e1wiXCI6XCJcIixcIjBcIjpcIlwiLFwiMVwiOlwiXFx1MDQ0MVxcdTA0NDJcXHUwNDNlXCIsXCIyXCI6XCJcXHUwNDM0XFx1MDQzMlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcIixcIjNcIjpcIlxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQzMFwiLFwiNFwiOlwiXFx1MDQ0N1xcdTA0MzVcXHUwNDQyXFx1MDQ0YlxcdTA0NDBcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXCIsXCI1XCI6XCJcXHUwNDNmXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXFx1MDQ0MVxcdTA0M2VcXHUwNDQyXCIsXCI2XCI6XCJcXHUwNDQ4XFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQ0Y1xcdTA0NDFcXHUwNDNlXFx1MDQ0MlwiLFwiN1wiOlwiXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQ0Y1xcdTA0NDFcXHUwNDNlXFx1MDQ0MlwiLFwiOFwiOlwiXFx1MDQzMlxcdTA0M2VcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXFx1MDQ0MVxcdTA0M2VcXHUwNDQyXCIsXCI5XCI6XCJcXHUwNDM0XFx1MDQzNVxcdTA0MzJcXHUwNDRmXFx1MDQ0MlxcdTA0NGNcXHUwNDQxXFx1MDQzZVxcdTA0NDJcIn19fTtcclxuICAgIGlmIChjdXJDb25mKSB7XHJcbiAgICAgICAgdGhpcy5jdXJDb25mID0gY3VyQ29uZjtcclxuICAgIH1cclxuICAgIGlmIChudW1Db25mKSB7XHJcbiAgICAgICAgdGhpcy5jdXJDb25mID0gbnVtQ29uZjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29uZk5hbWVzID0ge307XHJcbiAgICB2YXIgY29uZkh1bmQgPSB7fTtcclxuICAgIGZvciAodmFyIGNvZGUgaW4gdGhpcy5jdXJDb25mKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyQ29uZltjb2RlXVsnbmFtZSddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbGFuZyBpbiB0aGlzLmN1ckNvbmZbY29kZV1bJ25hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZOYW1lc1tsYW5nXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZk5hbWVzW2xhbmddID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25mTmFtZXNbbGFuZ11bY29kZV0gPSB0aGlzLmN1ckNvbmZbY29kZV1bJ25hbWUnXVtsYW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXJDb25mW2NvZGVdWydodW5kcmVkdGhzJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxhbmcgaW4gdGhpcy5jdXJDb25mW2NvZGVdWydodW5kcmVkdGhzJ10pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25mSHVuZFtsYW5nXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZkh1bmRbbGFuZ10gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbmZIdW5kW2xhbmddW2NvZGVdID0gdGhpcy5jdXJDb25mW2NvZGVdWydodW5kcmVkdGhzJ11bbGFuZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbmN5THYgPSBjb25mTmFtZXMubHY7XHJcbiAgICB0aGlzLmh1bmRyZWR0aHNMdiA9IGNvbmZIdW5kLmx2O1xyXG4gICAgdGhpcy5jdXJyZW5jeVJ1ID0gY29uZk5hbWVzLnJ1O1xyXG4gICAgdGhpcy5odW5kcmVkdGhzUnUgPSBjb25mSHVuZC5ydTtcclxuICAgIHRoaXMuY3VycmVuY3lFbiA9IGNvbmZOYW1lcy5lbjtcclxuICAgIHRoaXMuaHVuZHJlZHRoc0VuID0gY29uZkh1bmQuZW47XHJcblxyXG4gICAgdGhpcy5vbmVIdW5kcmVkTHYgPSAndmllbnMgc2ltdHMnO1xyXG4gICAgdGhpcy5odW5kcmFkcyA9ICdzaW10aSc7XHJcbiAgICB0aGlzLmFuZHMgPSB7J2x2JzogJ3VuJywgJ2VuJzonYW5kJywgJ3J1Jzon0LgnfTtcclxuICAgIHRoaXMuY29tYXRzID0geydsdic6ICdrb21hdHMnLCAnZW4nOidjb21hJywgJ3J1Jzon0LrQvtC80LAnfTtcclxuICAgIHRoaXMubnVsbGUgPSB7J2x2JzogJ251bGxlJywgJ3J1Jzon0L3QvtC70YwnfTtcclxuXHJcbiAgICB0aGlzLmJpZ051bXMgPSB7XHJcbiAgICAgICAgJzMnOiB7XHJcbiAgICAgICAgICAgICdydSc6IFsn0YLRi9GB0Y/Rh9CwJywgJ9GC0YvRgdGP0YcnLCAn0YLRi9GB0Y/Rh9C4J10sXHJcbiAgICAgICAgICAgICdsdic6IFsndMWra3N0b3RpcycsICd0xatrc3RvxaFpJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICc2Jzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9C80LjQu9C70LjQvtC9JywgJ9C80LjQu9C70LjQvtC90L7QsicsICfQvNC40LvQu9C40L7QvdCwJ10sXHJcbiAgICAgICAgICAgICdsdic6IFsnbWlsam9ucycsICdtaWxqb25pJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICc5Jzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9C80LjQu9C70LjQsNGA0LQnLCAn0LzQuNC70LvQuNC+0L3QvtCyJywgJ9C80LjQu9C70LjQsNGA0LTQsCddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ21pbGphcmRzJywgJ21pbGphcmRpJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICcxMic6IHtcclxuICAgICAgICAgICAgJ3J1JzogWyfRgtGA0LjQu9C70LjQvtC9JywgJ9GC0YDQuNC70LvQuNC+0L3QvtCyJywgJ9GC0YDQuNC70LvQuNC+0L3QsCddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ3RyaWxqb25zJywgJ3RyaWxqb25pJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICcxNSc6IHtcclxuICAgICAgICAgICAgJ3J1JzogWyfQutCy0LDQtNGA0LjQu9C70LjQvtC9JywgJ9C60LLQsNC00YDQuNC70LvQuNC+0L3QvtCyJywgJ9C60LLQsNC00YDQuNC70LvQuNC+0L3QsCddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ2t2YWRyaWxqb25zJywgJ2t2YWRyaWxqb25pJ11cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRUcmFuc2xhdGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=