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

  if (Array.isArray(cent)) {
    var centi = ' ' + un + ' 00 ' + cent[0];
  } else {
    var centi = ' ' + un + ' 00 ' + cent;
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJudW10b3dvcmRzIiwiTnVtVG9Xb3JkcyIsInVwZGF0ZUFsbCIsImN1cnJlbmN5IiwiJCIsInZhbCIsImxhbmciLCJudW0iLCJyZXMiLCJnZXRGdWxsIiwiaHRtbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZmFkZUluIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJzaG93SGVscCIsImhpZGUiLCJvbiIsInNlbCIsInZhbHMiLCJnZXRWYWxzIiwia2V5IiwidmFsYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwibGFuZ1ZhbHMiLCJjaGVja2VkIiwidHJhbnNsYXRvciIsIlQyVyIsInRyYW5zbGF0aW9ucyIsIldvcmRUcmFuc2xhdGlvbnMiLCJwcm90b3R5cGUiLCJjdXJyZW5jeUx2IiwidW5pdHMiLCJudW1lcmljVW5pdCIsInBsdXJhbCIsIkFycmF5IiwiaXNBcnJheSIsIm51bUNvbmYiLCJ0ZW5uZXJzIiwibnVtZXJpY1RlbiIsInNleCIsInRlZW5zIiwiaHVuZHJlZHMiLCJudW1lcmljSHVuZHJlZCIsInJ1Iiwib25lSHVuZHJlZEx2IiwiaHVuZHJhZHMiLCJnZW5lcmljQ2FsbGVyIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJjYWxsIiwiYXJndW1lbnRzIiwic2hpZnQiLCJhcHBseSIsInVuaSIsImxlbiIsIm1pbGlvbmkiLCJzdWJzdHJpbmciLCJ0aG91c2FuZHNjaSIsIm1pbGpXb3JkIiwiYmlnTnVtcyIsInRvU3RyaW5nIiwiZ2V0UmVzdWx0IiwiY2VudCIsImV1ciIsInBvaW50IiwibGFzdEluZGV4T2YiLCJjb21hIiwicG9pbnRDb3VudCIsInNwbGl0IiwibGVuZ3RoIiwiY29tYUNvdW50Iiwic2VwIiwidW4iLCJhbmRzIiwiY29tYXRzIiwiY2VudGkiLCJyZXBsYWNlIiwiY2VudGkxIiwiY2VudGkyIiwib3JpZyIsInRvV29yZHMiLCJOdW1iZXIiLCJlIiwicmVwZWF0IiwidHJpbSIsIm51bGxlIiwiZWxlbWVudHMiLCJlbmRpbmdzUnUiLCJ0b0xvd2VyQ2FzZSIsIm51bWJlciIsImVuZGluZ3MiLCJlbmRpbmciLCJ2YWx1dGEiLCJlZGVuIiwic20iLCJjdXJyZW5jeUVuIiwiaHVuZHJlZHRoc0VuIiwiY3VycmVuY3lSdSIsImh1bmRyZWR0aHNSdSIsImN1ckNvbmYiLCJodW5kcmVkdGhzTHYiLCJzbXJlcyIsImhhc093blByb3BlcnR5IiwiY29uZk5hbWVzIiwiY29uZkh1bmQiLCJjb2RlIiwibHYiLCJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxVQUFVLEdBQUcsSUFBSUMsbURBQUosRUFBakI7O0FBRUEsU0FBU0MsU0FBVCxHQUFxQjtBQUNqQixNQUFJQyxRQUFRLEdBQUdDLDZDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEdBQWIsRUFBZjtBQUNBLE1BQUlDLElBQUksR0FBR0YsNkNBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDQyxHQUFoQyxFQUFYO0FBQ0EsTUFBSUUsR0FBRyxHQUFHSCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRQyxHQUFSLEVBQVY7QUFDQSxNQUFJRyxHQUFHLEdBQUdSLFVBQVUsQ0FBQ1MsT0FBWCxDQUFtQk4sUUFBbkIsRUFBNkJHLElBQTdCLEVBQW1DQyxHQUFuQyxDQUFWO0FBQ0FILCtDQUFDLENBQUMsTUFBRCxDQUFELENBQVVNLElBQVYsQ0FBZUYsR0FBZjtBQUNBRyxjQUFZLENBQUNDLE9BQWIsQ0FB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QUssS0FBbEI7QUFBeUIsVUFBSztBQUE5QixHQUFaO0FBQ0EsT0FBS0MsTUFBTCxHQUFjO0FBQUMsVUFBTSxRQUFQO0FBQWlCLFVBQUssTUFBdEI7QUFBOEIsVUFBSztBQUFuQyxHQUFkO0FBQ0EsT0FBS1csS0FBTCxHQUFhO0FBQUMsVUFBTSxPQUFQO0FBQWdCLFVBQUs7QUFBckIsR0FBYjtBQUVBLE9BQUsxQixPQUFMLEdBQWU7QUFDWCxTQUFLO0FBQ0QsWUFBTSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLFFBQXBCLENBREw7QUFFRCxZQUFNLENBQUMsV0FBRCxFQUFjLFVBQWQ7QUFGTCxLQURNO0FBS1gsU0FBSztBQUNELFlBQU0sQ0FBQyxTQUFELEVBQVksV0FBWixFQUF5QixVQUF6QixDQURMO0FBRUQsWUFBTSxDQUFDLFNBQUQsRUFBWSxTQUFaO0FBRkwsS0FMTTtBQVNYLFNBQUs7QUFDRCxZQUFNLENBQUMsVUFBRCxFQUFhLFdBQWIsRUFBMEIsV0FBMUIsQ0FETDtBQUVELFlBQU0sQ0FBQyxVQUFELEVBQWEsVUFBYjtBQUZMLEtBVE07QUFhWCxVQUFNO0FBQ0YsWUFBTSxDQUFDLFVBQUQsRUFBYSxZQUFiLEVBQTJCLFdBQTNCLENBREo7QUFFRixZQUFNLENBQUMsVUFBRCxFQUFhLFVBQWI7QUFGSixLQWJLO0FBaUJYLFVBQU07QUFDRixZQUFNLENBQUMsYUFBRCxFQUFnQixlQUFoQixFQUFpQyxjQUFqQyxDQURKO0FBRUYsWUFBTSxDQUFDLGFBQUQsRUFBZ0IsYUFBaEI7QUFGSjtBQWpCSyxHQUFmO0FBc0JILENBakVEOztBQW1FZS9CLCtFQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCdcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgTnVtVG9Xb3JkcyBmcm9tIFwiLi9udW10b3dvcmRzXCI7XHJcblxyXG52YXIgbnVtdG93b3JkcyA9IG5ldyBOdW1Ub1dvcmRzKCk7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVBbGwoKSB7XHJcbiAgICB2YXIgY3VycmVuY3kgPSAkKFwiI3ZhbHV0YVwiKS52YWwoKTtcclxuICAgIHZhciBsYW5nID0gJCgnaW5wdXRbbmFtZT1cImxhbmdcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gICAgdmFyIG51bSA9ICQoXCIjY1wiKS52YWwoKTtcclxuICAgIHZhciByZXMgPSBudW10b3dvcmRzLmdldEZ1bGwoY3VycmVuY3ksIGxhbmcsIG51bSk7XHJcbiAgICAkKFwiI3Jlc1wiKS5odG1sKHJlcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29udmVydF9sYW5nJywgbGFuZyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29udmVydF9jdXJyZW5jeScsIGN1cnJlbmN5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weSgpIHtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCQoXCIjcmVzXCIpLmh0bWwoKSk7XHJcbiAgICAkKFwiI2FscnRcIikuZmFkZUluKCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyQoXCIjYWxydFwiKS5mYWRlT3V0KCk7fSwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dIZWxwKCkge1xyXG4gICAgJChcIiNoZWxwXCIpLmZhZGVJbigpO1xyXG4gICAgJChcIiNoZWxwLWJ0blwiKS5oaWRlKCk7XHJcbn1cclxuXHJcbiQoXCIjY1wiKS5vbigna2V5dXAnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY1wiKS5vbignY2xpY2snLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ3Bhc3RlJywgdXBkYXRlQWxsKTtcclxuJChcIiN2YWx1dGFcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9bGFuZ10nKS5vbignY2hhbmdlJywgdXBkYXRlQWxsKTtcclxuJChcIiNjb3B5LWJ0blwiKS5vbignY2xpY2snLCBjb3B5KTtcclxuJChcIiNoZWxwLWJ0blwiKS5vbignY2xpY2snLCBzaG93SGVscCk7XHJcblxyXG52YXIgc2VsID0gJyc7XHJcbnZhciB2YWxzID0gbnVtdG93b3Jkcy5nZXRWYWxzKCk7XHJcbmZvciAodmFyIGtleSBpbiB2YWxzKSB7XHJcbiAgICB2YXIgdmFsYSA9IHZhbHNba2V5XS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHNba2V5XS5zbGljZSgxKTtcclxuICAgIHNlbCA9IHNlbCArICc8b3B0aW9uIHZhbHVlPVwiJytrZXkrJ1wiPicra2V5LnRvVXBwZXJDYXNlKCkrJyAnK3ZhbGErJzwvb3B0aW9uPic7XHJcbn07XHJcbiQoXCIjdmFsdXRhXCIpLmh0bWwoc2VsKTtcclxudmFyIGxhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29udmVydF9sYW5nJyk7XHJcbmlmIChsYW5nICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHZhciBsYW5nVmFscyA9IHtcclxuICAgICAgICAnbHYnOiAwLFxyXG4gICAgICAgICdlbic6IDEsXHJcbiAgICAgICAgJ3J1JzogMlxyXG4gICAgfTtcclxuXHJcbiAgICAkKCdpbnB1dDpyYWRpb1tuYW1lPVwibGFuZ1wiXScpW2xhbmdWYWxzW2xhbmddXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICQoJ2lucHV0W25hbWU9XCJsYW5nXCJdOmNoZWNrZWQnKS52YWwoKTtcclxufVxyXG52YXIgY3VycmVuY3kgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29udmVydF9jdXJyZW5jeScpO1xyXG5pZiAoY3VycmVuY3kgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgJChcIiN2YWx1dGFcIikudmFsKGN1cnJlbmN5KTtcclxufVxyXG4iLCJpbXBvcnQgVDJXIGZyb20gXCJudW1iZXJzMndvcmRzXCI7XHJcbmltcG9ydCBXb3JkVHJhbnNsYXRpb25zIGZyb20gXCIuL3RyYW5zbGF0aW9uc1wiO1xyXG5cclxudmFyIE51bVRvV29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0b3IgPSBuZXcgVDJXKFwiRU5fVVNcIik7XHJcbiAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IG5ldyBXb3JkVHJhbnNsYXRpb25zKCk7XHJcbiAgICB0aGlzLmxhbmcgPSAnbHYnO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRWYWxzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5THY7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnVuaXRzID0gZnVuY3Rpb24gKG51bWVyaWNVbml0LCBwbHVyYWwgPSAwKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnVuaXRzW3RoaXMubGFuZ11bbnVtZXJpY1VuaXRdKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnVuaXRzW3RoaXMubGFuZ11bbnVtZXJpY1VuaXRdW3BsdXJhbF1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnVuaXRzW3RoaXMubGFuZ11bbnVtZXJpY1VuaXRdXHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnRlbm5lcnMgPSBmdW5jdGlvbiAobnVtZXJpY1Rlbiwgc2V4ID0gdHJ1ZSkge1xyXG4gICAgdmFyIHBsdXJhbCA9IDE7XHJcbiAgICBpZiAoc2V4KSB7XHJcbiAgICAgICAgcGx1cmFsID0gMDtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljVGVuWzBdID09PSBcIjBcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVuaXRzKG51bWVyaWNUZW5bMV0sIHBsdXJhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIxXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi50ZWVuc1t0aGlzLmxhbmddW251bWVyaWNUZW5dXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLm51bUNvbmYudGVubmVyc1t0aGlzLmxhbmddW251bWVyaWNUZW5bMF1dICsgXCIgXCIgKyB0aGlzLnVuaXRzKG51bWVyaWNUZW5bMV0sIHBsdXJhbClcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuaHVuZHJlZHMgPSBmdW5jdGlvbiAobnVtZXJpY0h1bmRyZWQsIHNleCA9IHRydWUpIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi5odW5kcmVkcy5ydVtudW1lcmljSHVuZHJlZFswXV0gKyAnICcgKyB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSwgc2V4KTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljSHVuZHJlZFswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0sIHNleCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY0h1bmRyZWRbMF0gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLm9uZUh1bmRyZWRMdiArICcgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaXRzKG51bWVyaWNIdW5kcmVkWzBdKSArICcgJyArIHRoaXMudHJhbnNsYXRpb25zLmh1bmRyYWRzICsgJyAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0sIHNleCk7XHJcbn1cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2VuZXJpY0NhbGxlciA9IGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcclxuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgYXJncy5zaGlmdCgpO1xyXG4gICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJncyk7XHJcbn07XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bmkgPSBmdW5jdGlvbiAobnVtLCBsZW4sIHNleCA9ICdoZScpIHtcclxuICAgIGlmIChsZW4gPT09IDMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmljQ2FsbGVyKCdodW5kcmVkcycsIG51bSwgc2V4ID09PSAnaGUnKTtcclxuICAgIH1cclxuICAgIHZhciBtaWxpb25pID0gbnVtLnN1YnN0cmluZygwLCAzKTtcclxuICAgIHZhciB0aG91c2FuZHNjaSA9IG51bS5zdWJzdHJpbmcoMywgbGVuKTtcclxuXHJcbiAgICBpZiAobWlsaW9uaSA9PT0gJzAwMCcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmljQ2FsbGVyKCd1bmknLCB0aG91c2FuZHNjaSwgbGVuLTMsIHNleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1pbGpXb3JkID0gdGhpcy50cmFuc2xhdGlvbnMuYmlnTnVtc1sobGVuIC0gMykudG9TdHJpbmcoKV1bdGhpcy5sYW5nXVsxXTtcclxuICAgIGlmIChtaWxpb25pWzJdID09PSBcIjFcIiAmJiBtaWxpb25pWzFdICE9PSBcIjFcIikge1xyXG4gICAgICAgIG1pbGpXb3JkID0gdGhpcy50cmFuc2xhdGlvbnMuYmlnTnVtc1sobGVuIC0gMykudG9TdHJpbmcoKV1bdGhpcy5sYW5nXVswXVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1JyAmJiBtaWxpb25pWzFdICE9PSBcIjFcIiAmJiAobWlsaW9uaVsyXSA9PT0gXCIyXCIgfHwgbWlsaW9uaVsyXSA9PT0gXCIzXCIgfHwgbWlsaW9uaVsyXSA9PT0gXCI0XCIpKSB7XHJcbiAgICAgICAgbWlsaldvcmQgPSB0aGlzLnRyYW5zbGF0aW9ucy5iaWdOdW1zWyhsZW4gLSAzKS50b1N0cmluZygpXVt0aGlzLmxhbmddWzJdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odW5kcmVkcyhtaWxpb25pLCAhKGxlbiA+PSA2ICYmIGxlbiA8IDkpKSArICcgJyttaWxqV29yZCsnICcgKyB0aGlzLmdlbmVyaWNDYWxsZXIoJ3VuaScsIHRob3VzYW5kc2NpLCBsZW4tMywgc2V4KTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0UmVzdWx0ID0gZnVuY3Rpb24gKG51bSwgY2VudCwgZXVyLCBzZXggPSAnaGUnKSB7XHJcbiAgICB2YXIgcG9pbnQgPSBudW0ubGFzdEluZGV4T2YoJy4nKTtcclxuICAgIHZhciBjb21hID0gbnVtLmxhc3RJbmRleE9mKCcsJyk7XHJcbiAgICB2YXIgcG9pbnRDb3VudCA9IChudW0uc3BsaXQoXCIuXCIpLmxlbmd0aCAtIDEpXHJcbiAgICB2YXIgY29tYUNvdW50ID0gKG51bS5zcGxpdChcIixcIikubGVuZ3RoIC0gMSlcclxuICAgIHZhciBzZXAgPSAtMTtcclxuICAgIGlmIChwb2ludCAhPT0gLTEgJiYgcG9pbnQgPiBjb21hICYmIHBvaW50Q291bnQgPT09IDEpIHtcclxuICAgICAgICB2YXIgc2VwID0gcG9pbnQ7XHJcbiAgICB9IGVsc2UgaWYgKGNvbWEgIT09IC0xICYmIGNvbWEgPiBwb2ludCAmJiBjb21hQ291bnQgPT09IDEpIHtcclxuICAgICAgICB2YXIgc2VwID0gY29tYTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbGVuZ3RoID0gbnVtLmxlbmd0aDtcclxuICAgIHZhciB1biA9IHRoaXMudHJhbnNsYXRpb25zLmFuZHNbdGhpcy5sYW5nXTtcclxuICAgIHZhciBjb21hdHMgPSB0aGlzLnRyYW5zbGF0aW9ucy5jb21hdHNbdGhpcy5sYW5nXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNlbnQpKSB7XHJcbiAgICAgICAgdmFyIGNlbnRpID0gJyAnK3VuKycgMDAgJyArIGNlbnRbMF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBjZW50aSA9ICcgJyt1bisnIDAwICcgKyBjZW50O1xyXG4gICAgfVxyXG4gICAgaWYgKHNlcCAhPT0gLTEpIHtcclxuXHJcbiAgICAgICAgY2VudGkgPSBudW0uc3Vic3RyaW5nKHNlcCsxLCBsZW5ndGgpO1xyXG4gICAgICAgIGNlbnRpID0gY2VudGkucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcbiAgICAgICAgbnVtID0gbnVtLnN1YnN0cmluZygwLCBzZXApO1xyXG4gICAgICAgIHZhciBjZW50aTEgPSAnJztcclxuICAgICAgICBpZiAoY2VudGkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNlbnRpMSA9ICcwMCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZW50aS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY2VudGkxID0gY2VudGkrJzAnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VudGkubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNlbnRpMSA9IGNlbnRpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNlbnRpMSA9IGNlbnRpLnN1YnN0cmluZygwLDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2VudCkpIHtcclxuICAgICAgICAgICAgaWYgKGNlbnRpMVtjZW50aTEubGVuZ3RoLTFdID09PSBcIjFcIiAmJiBjZW50aTFbY2VudGkxLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgIGNlbnQgPSBjZW50WzFdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChjZW50aTFbY2VudGkxLmxlbmd0aC0yXSAhPT0gXCIxXCIpICYmIChjZW50aTFbY2VudGkxLmxlbmd0aC0xXSA9PT0gXCIyXCIgfHwgY2VudGkxW2NlbnRpMS5sZW5ndGgtMV0gPT09IFwiM1wiIHx8IGNlbnRpMVtjZW50aTEubGVuZ3RoLTFdID09PSBcIjRcIiApKSB7XHJcbiAgICAgICAgICAgICAgICBjZW50ID0gY2VudFsyXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNlbnQgPSBjZW50WzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBudW0gPSBudW0uc3Vic3RyaW5nKDAsIHNlcCk7XHJcbiAgICAgICAgaWYgKGNlbnRpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnICcrY2VudGkxKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZW50aS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnICcrY2VudGkxKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZW50aS5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnICcrY2VudGkxKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNlbnRpMiA9IGNlbnRpLnN1YnN0cmluZygyLGNlbnRpLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnICcrY2VudGkxICsgJywgJyArIGNvbWF0cyArJywgJysgY2VudGkyKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBvcmlnID0gbnVtO1xyXG4gICAgbnVtID0gbnVtLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKVxyXG5cclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdlbicpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBudW0gPSB0aGlzLnRyYW5zbGF0b3IudG9Xb3JkcyhOdW1iZXIobnVtKSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIG51bSA9ICdBIGxvdCBvZic7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBudW0gPSAnMCcucmVwZWF0KDE4IC0gbnVtLmxlbmd0aCkgKyBudW07XHJcbiAgICAgICAgbnVtID0gdGhpcy51bmkobnVtLCAxOCwgc2V4KS50cmltKCk7XHJcbiAgICAgICAgaWYgKG51bSA9PT0gJycpIHtcclxuICAgICAgICAgICAgbnVtID0gdGhpcy50cmFuc2xhdGlvbnMubnVsbGVbdGhpcy5sYW5nXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2x2Jykge1xyXG4gICAgICAgIGlmICgob3JpZy5sZW5ndGggPiAxICYmIG9yaWdbb3JpZy5sZW5ndGgtMV0gPT09IFwiMVwiICYmIG9yaWdbb3JpZy5sZW5ndGgtMl0gIT09IFwiMVwiKSB8fCBvcmlnID09PSBcIjFcIikge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChldXJbZXVyLmxlbmd0aC0xXSAhPSBcIm9cIiAmJiBldXJbZXVyLmxlbmd0aC0xXSAhPSBcImVcIikge1xyXG4gICAgICAgICAgICAgICAgZXVyID0gZXVyLnN1YnN0cmluZygwLCBldXIubGVuZ3RoIC0gMSkgKyAnaSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV1cltldXIubGVuZ3RoLTJdID09PSBcImlcIikge1xyXG4gICAgICAgICAgICAgICAgZXVyID0gZXVyLnN1YnN0cmluZygwLCBldXIubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGV1ci5zcGxpdCgnICcpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgZXVyID0gdGhpcy5lbmRpbmdzUnUob3JpZywgZXVyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBldXIgPSB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1swXSkgKyAnICcgKyB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1sxXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgZXVyID0gdGhpcy5lbmRpbmdzUnUob3JpZywgZWxlbWVudHNbMF0pICsgJyAnICsgdGhpcy5lbmRpbmdzUnUob3JpZywgZWxlbWVudHNbMV0pICsgJyAnICsgZWxlbWVudHNbMl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW0gKyAnICcgKyBldXIudG9Mb3dlckNhc2UoKSArIGNlbnRpO1xyXG59XHJcbk51bVRvV29yZHMucHJvdG90eXBlLmVuZGluZ3NSdSA9IGZ1bmN0aW9uIChudW1iZXIsIGN1cnJlbmN5KSB7XHJcbiAgICBpZiAoKG51bWJlci5sZW5ndGggPiAxICYmIG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjFcIiAmJiBudW1iZXJbbnVtYmVyLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG51bWJlciA9PT0gXCIxXCIpIHtcclxuICAgIH0gZWxzZSBpZiAoKG51bWJlci5sZW5ndGggPiAxICYmIChudW1iZXJbbnVtYmVyLmxlbmd0aC0xXSA9PT0gXCIyXCIgfHwgbnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiM1wiIHx8IG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjRcIikgJiYgbnVtYmVyW251bWJlci5sZW5ndGgtMl0gIT09IFwiMVwiKSB8fCBudW1iZXIgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgdmFyIGVuZGluZ3MgPSB7J2FkZCc6e1wi0YBcIjogXCLQsFwiLCBcItGCXCI6IFwi0LBcIiwgXCLQulwiOiBcItCwXCIsIFwi0LDQvFwiOiBcItCwXCJ9LCAncmVwbGFjZSc6IHtcItC40YDQsFwiOiBcItC40YDRi1wiLCBcItGMXCI6IFwi0Y9cIiwgXCLRgdC60LjQuVwiOlwi0YHQutC40YVcIiwgXCLQuNC5XCI6IFwi0LjRhVwiLCBcItGL0LlcIjogXCLQsFwiLCBcItCw0Y9cIjogXCLQuNC1XCIsIFwi0YRcIjogXCLRi1wiLCBcItC90LBcIjogXCLQvdGLXCJ9fTtcclxuICAgICAgICBmb3IgKHZhciBlbmRpbmcgaW4gZW5kaW5nc1snYWRkJ10pIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LnN1YnN0cmluZyhjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSA9PT0gZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kgKyBlbmRpbmdzWydhZGQnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoZW5kaW5nIGluIGVuZGluZ3NbJ3JlcGxhY2UnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5zdWJzdHJpbmcoMCwgY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgKyBlbmRpbmdzWydyZXBsYWNlJ11bZW5kaW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGVuZGluZ3MgPSB7J2FkZCc6e1wi0YBcIjogXCLQvtCyXCIsIFwi0YJcIjogXCLQvtCyXCIsIFwi0LpcIjogXCLQvtCyXCJ9LCAncmVwbGFjZSc6IHtcItGMXCI6IFwi0LXQuVwiLCBcItC40LlcIjogXCLQuNGFXCIsIFwi0YvQuVwiOiBcItGL0YVcIiwgXCLQsNGPXCI6IFwi0LjRhVwiLCBcItCwXCI6IFwiXCJ9fTtcclxuICAgICAgICBmb3IgKHZhciBlbmRpbmcgaW4gZW5kaW5nc1snYWRkJ10pIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LnN1YnN0cmluZyhjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSA9PT0gZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kgKyBlbmRpbmdzWydhZGQnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoZW5kaW5nIGluIGVuZGluZ3NbJ3JlcGxhY2UnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5zdWJzdHJpbmcoMCwgY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgKyBlbmRpbmdzWydyZXBsYWNlJ11bZW5kaW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3VycmVuY3k7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldEZ1bGwgPSBmdW5jdGlvbiAodmFsdXRhLCBsYW5nLCBudW0pIHtcclxuICAgIHRoaXMubGFuZyA9IGxhbmc7XHJcbiAgICB2YXIgZWRlbiA9IHtcclxuICAgIH07XHJcbiAgICB2YXIgc20gPSB7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzZXggPSAnaGUnO1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUVuO1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc0VuO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICBlZGVuID0gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lSdTtcclxuICAgICAgICBzbSA9IHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWR0aHNSdTtcclxuICAgICAgICBzZXggPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJDb25mW3ZhbHV0YV1bJ3NleCddWydydSddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlZGVuID0gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lMdjtcclxuICAgICAgICBzbSA9IHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWR0aHNMdjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc21yZXMgPSAnKDEvMTAwKSAnICsgdmFsdXRhLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzbSwgdmFsdXRhKSkge1xyXG4gICAgICAgIHNtcmVzID0gc21bdmFsdXRhXTtcclxuICAgIH1cclxuICAgIHZhciByZXMgPSB0aGlzLmdldFJlc3VsdChudW0sIHNtcmVzLCBlZGVuW3ZhbHV0YV0sIHNleCk7XHJcbiAgICByZXMgPSByZXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXMuc2xpY2UoMSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtVG9Xb3JkcztcclxuIiwiaW1wb3J0IE51bVRvV29yZHMgZnJvbSBcIi4vbnVtdG93b3Jkc1wiO1xyXG5cclxudmFyIFdvcmRUcmFuc2xhdGlvbnMgPSBmdW5jdGlvbiAoY3VyQ29uZiA9IG51bGwsIG51bUNvbmYgPSBudWxsKSB7XHJcbiAgICB0aGlzLmN1ckNvbmYgPSB7XCJldXJcIjp7XCJuYW1lXCI6e1wibHZcIjpcImV1cm9cIixcInJ1XCI6XCJcXHUwNDE1XFx1MDQzMlxcdTA0NDBcXHUwNDNlXCIsXCJlblwiOlwiZXVyb1wifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOltcImNlbnRpXCIsXCJjZW50c1wiLFwiY2VudGlcIl0sXCJydVwiOltcIlxcdTA0NDZcXHUwNDM1XFx1MDQzZFxcdTA0NDJcXHUwNDNlXFx1MDQzMlwiLFwiXFx1MDQ0NlxcdTA0MzVcXHUwNDNkXFx1MDQ0MlwiLFwiXFx1MDQ0NlxcdTA0MzVcXHUwNDNkXFx1MDQ0MlxcdTA0MzBcIl0sXCJlblwiOlwiY2VudHNcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwidXNkXCI6e1wibmFtZVwiOntcImx2XCI6XCJkb2xcXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDE0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJkb2xsYXJcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpbXCJjZW50aVwiLFwiY2VudHNcIixcImNlbnRpXCJdLFwicnVcIjpbXCJcXHUwNDQ2XFx1MDQzNVxcdTA0M2RcXHUwNDQyXFx1MDQzZVxcdTA0MzJcIixcIlxcdTA0NDZcXHUwNDM1XFx1MDQzZFxcdTA0NDJcIixcIlxcdTA0NDZcXHUwNDM1XFx1MDQzZFxcdTA0NDJcXHUwNDMwXCJdLFwiZW5cIjpcImNlbnRzXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImdicFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiTGllbGJyaXRcXHUwMTAxbmlqYXMgbVxcdTAxMDFyY2lcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDNkXFx1MDQzM1xcdTA0M2JcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0NDNcXHUwNDNkXFx1MDQ0MiBcXHUwNDQxXFx1MDQ0MlxcdTA0MzVcXHUwNDQwXFx1MDQzYlxcdTA0MzhcXHUwNDNkXFx1MDQzM1xcdTA0M2VcXHUwNDMyXCIsXCJlblwiOlwiYnJpdGlzaCBwb3VuZFwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwicGVuaVwiLFwicnVcIjpcIlxcdTA0M2ZcXHUwNDM1XFx1MDQzZFxcdTA0MzhcIixcImVuXCI6XCJwZW5jZVwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJydWJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIktyaWV2aWphcyBydWJsaXNcIixcInJ1XCI6XCJcXHUwNDIwXFx1MDQzZVxcdTA0NDFcXHUwNDQxXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDBcXHUwNDQzXFx1MDQzMVxcdTA0M2JcXHUwNDRjXCIsXCJlblwiOlwicnVzc2lhbiBydWJsZVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOltcImthcGVpa2FzXCIsXCJrYXBlaWthXCIsXCJrYXBlaWthc1wiXSxcInJ1XCI6W1wiXFx1MDQzYVxcdTA0M2VcXHUwNDNmXFx1MDQzNVxcdTA0MzVcXHUwNDNhXCIsXCJcXHUwNDNhXFx1MDQzZVxcdTA0M2ZcXHUwNDM1XFx1MDQzOVxcdTA0M2FcXHUwNDMwXCIsXCJcXHUwNDNhXFx1MDQzZVxcdTA0M2ZcXHUwNDM1XFx1MDQzOVxcdTA0M2FcXHUwNDM4XCJdLFwiZW5cIjpcImtvcGVrc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJwbG5cIjp7XCJuYW1lXCI6e1wibHZcIjpcIlBvbGlqYXMgemxvdHNcIixcInJ1XCI6XCJcXHUwNDFmXFx1MDQzZVxcdTA0M2JcXHUwNDRjXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM3XFx1MDQzYlxcdTA0M2VcXHUwNDQyXFx1MDQ0YlxcdTA0MzlcIixcImVuXCI6XCJwb2xpc2ggemxvdHlcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcImdyb1xcdTAxNjFpXCIsXCJydVwiOlwiXFx1MDQzM1xcdTA0NDBcXHUwNDNlXFx1MDQ0OFwiLFwiZW5cIjpcImdyb3N6XCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImt6dFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiS2F6YWhzdFxcdTAxMDFuYXMgdGVuZ2VcIixcInJ1XCI6XCJcXHUwNDFhXFx1MDQzMFxcdTA0MzdcXHUwNDMwXFx1MDQ0NVxcdTA0NDFcXHUwNDQyXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDJcXHUwNDM1XFx1MDQzZFxcdTA0MzNcXHUwNDM1XCIsXCJlblwiOlwia2F6YWtoc3RhbiB0ZW5nZVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwidGlqXFx1MDEyYm5pXCIsXCJydVwiOlwiXFx1MDQ0MlxcdTA0MzhcXHUwNDRiXFx1MDQzZFwiLFwiZW5cIjpcInRcXHUwMTMxeW5zXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImNoZlwiOntcIm5hbWVcIjp7XCJsdlwiOlwiXFx1MDE2MHZlaWNlcyBmcmFua3NcIixcInJ1XCI6XCJcXHUwNDI4XFx1MDQzMlxcdTA0MzVcXHUwNDM5XFx1MDQ0NlxcdTA0MzBcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ0XFx1MDQ0MFxcdTA0MzBcXHUwNDNkXFx1MDQzYVwiLFwiZW5cIjpcInN3aXNzIGZyYW5jXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJyYXBlbmlcIixcInJ1XCI6W1wiXFx1MDQ0MFxcdTA0MzBcXHUwNDNmXFx1MDQzZlxcdTA0MzVcXHUwNDNkXFx1MDQzZVxcdTA0MzJcIixcIlxcdTA0NDBcXHUwNDMwXFx1MDQzZlxcdTA0M2ZcXHUwNDM1XFx1MDQzZFwiLFwiXFx1MDQ0MFxcdTA0MzBcXHUwNDNmXFx1MDQzZlxcdTA0MzVcXHUwNDNkXFx1MDQzMFwiXSxcImVuXCI6XCJyYXBwZW5zXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImFlZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQXB2aWVub3RvIEFyXFx1MDEwMWJ1IEVtaXJcXHUwMTAxdHUgZGlyaGFtc1wiLFwicnVcIjpcIlxcdTA0MTRcXHUwNDM4XFx1MDQ0MFxcdTA0NDVcXHUwNDMwXFx1MDQzYyBcXHUwNDFlXFx1MDQxMFxcdTA0MmRcIixcImVuXCI6XCJ1bml0ZWQgYXJhYiBlbWlyYXRlcyBkaXJoYW1cIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcImZpbGlcIixcInJ1XCI6XCJcXHUwNDQ0XFx1MDQzOFxcdTA0M2JcXHUwNDQxXCIsXCJlblwiOlwiZmlsc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJka2tcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkRcXHUwMTAxbmlqYXMga3JvbmFcIixcInJ1XCI6XCJcXHUwNDE0XFx1MDQzMFxcdTA0NDJcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwiZGFuaXNoIGtyb25lXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJcXHUwMTEzcmlcIixcInJ1XCI6XCJcXHUwNDRkXFx1MDQ0MFxcdTA0MzVcIixcImVuXCI6XCJvcmVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcInNla1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiWnZpZWRyaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MjhcXHUwNDMyXFx1MDQzNVxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwic3dlZGlzaCBrcm9uYVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiXFx1MDExM3JpXCIsXCJydVwiOlwiXFx1MDQ0ZFxcdTA0NDBcXHUwNDM1XCIsXCJlblwiOlwib3JlXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJub2tcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk5vcnZcXHUwMTEzXFx1MDEyM2lqYXMga3JvbmFcIixcInJ1XCI6XCJcXHUwNDFkXFx1MDQzZVxcdTA0NDBcXHUwNDMyXFx1MDQzNVxcdTA0MzZcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwibm9yd2VnaWFuIGtyb25lXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJcXHUwMTEzcmlcIixcInJ1XCI6XCJcXHUwNDRkXFx1MDQ0MFxcdTA0MzVcIixcImVuXCI6XCJvcmVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImJnblwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQnVsZ1xcdTAxMDFyaWphcyBsZXZhXCIsXCJydVwiOlwiXFx1MDQxMVxcdTA0M2VcXHUwNDNiXFx1MDQzM1xcdTA0MzBcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDNiXFx1MDQzNVxcdTA0MzJcIixcImVuXCI6XCJidWxnYXJpYW4gbGV2XCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImh1ZlwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVW5nXFx1MDEwMXJpamFzIGZvcmludHNcIixcInJ1XCI6XCJcXHUwNDMyXFx1MDQzNVxcdTA0M2RcXHUwNDMzXFx1MDQzNVxcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDNlXFx1MDQ0MFxcdTA0MzhcXHUwNDNkXFx1MDQ0MlwiLFwiZW5cIjpcImh1bmdhcmlhbiBmb3JpbnRcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwidHJ5XCI6e1wibmFtZVwiOntcImx2XCI6XCJUdXJjaWphcyBsaXJhXCIsXCJydVwiOlwiXFx1MDQyMlxcdTA0NDNcXHUwNDQwXFx1MDQzNVxcdTA0NDZcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYlxcdTA0MzhcXHUwNDQwXFx1MDQzMFwiLFwiZW5cIjpcInR1cmtpc2ggbGlyYVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiYWxsXCI6e1wibmFtZVwiOntcImx2XCI6XCJBbGJcXHUwMTAxbmlqYXMgbGVrc1wiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDNiXFx1MDQzMVxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDNiXFx1MDQzNVxcdTA0M2FcIixcImVuXCI6XCJhbGJhbmlhbiBsZWtcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiaHJrXCI6e1wibmFtZVwiOntcImx2XCI6XCJIb3J2XFx1MDEwMXRpamFzIGt1bmFcIixcInJ1XCI6XCJYXFx1MDQzZVxcdTA0NDBcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQzXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJjcm9hdGlhbiBrdW5hXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJjemtcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxMGNlaGlqYXMga3JvbmFcIixcInJ1XCI6XCJcXHUwNDI3XFx1MDQzNVxcdTA0NDhcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwiY3plY2gga29ydW5hXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJnZWxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkdydXppamFzIGxhcmlcIixcInJ1XCI6XCJcXHUwNDEzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzOFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcIixcImVuXCI6XCJnZW9yZ2lhbiBsYXJpXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImxrclwiOntcIm5hbWVcIjp7XCJsdlwiOlwiXFx1MDE2MHJpbGFua2FzIHJcXHUwMTZicGlqYVwiLFwicnVcIjpcIlxcdTA0MjhcXHUwNDQwXFx1MDQzOC1cXHUwNDNiXFx1MDQzMFxcdTA0M2RcXHUwNDNhXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0NDBcXHUwNDQzXFx1MDQzZlxcdTA0MzhcXHUwNDRmXCIsXCJlblwiOlwic3JpIGxhbmthbiBydXBlZVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwidG5kXCI6e1wibmFtZVwiOntcImx2XCI6XCJUdW5pc2lqYXMgZGluXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQyMlxcdTA0NDNcXHUwNDNkXFx1MDQzOFxcdTA0NDFcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwidHVuaXNpYW4gZGluYXJcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiaWxzXCI6e1wibmFtZVwiOntcImx2XCI6XCJJenJhXFx1MDExM2xhcyBcXHUwMTYxZWtlbHNcIixcInJ1XCI6XCJcXHUwNDE4XFx1MDQzN1xcdTA0NDBcXHUwNDMwXFx1MDQzOFxcdTA0M2JcXHUwNDRjXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ4XFx1MDQzNVxcdTA0M2FcXHUwNDM1XFx1MDQzYlxcdTA0NGNcIixcImVuXCI6XCJpc3JhZWxpIHNoZXFlbFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJqb2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkpvcmRcXHUwMTAxbmlqYXMgZGluXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxOFxcdTA0M2VcXHUwNDQwXFx1MDQzNFxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzOFxcdTA0M2RcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImpvcmRhbmlhbiBkaW5hclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJieW5cIjp7XCJuYW1lXCI6e1wibHZcIjpcIkJhbHRrcmlldmlqYXMgcnVibGlzXCIsXCJydVwiOlwiXFx1MDQxMVxcdTA0MzVcXHUwNDNiXFx1MDQzZVxcdTA0NDBcXHUwNDQzXFx1MDQ0MVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0NDNcXHUwNDMxXFx1MDQzYlxcdTA0NGNcIixcImVuXCI6XCJiZWxhcnVzaWFuIG5ldyBydWJsZVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOltcImthcGVpa2FzXCIsXCJrYXBlaWthXCIsXCJrYXBlaWthc1wiXSxcInJ1XCI6W1wiXFx1MDQzYVxcdTA0M2VcXHUwNDNmXFx1MDQzNVxcdTA0MzVcXHUwNDNhXCIsXCJcXHUwNDNhXFx1MDQzZVxcdTA0M2ZcXHUwNDM1XFx1MDQzOVxcdTA0M2FcXHUwNDMwXCIsXCJcXHUwNDNhXFx1MDQzZVxcdTA0M2ZcXHUwNDM1XFx1MDQzOVxcdTA0M2FcXHUwNDM4XCJdLFwiZW5cIjpcImtvcGVrc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJlZ3BcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxMTJcXHUwMTIzaXB0ZXMgbVxcdTAxMDFyY2lcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MTVcXHUwNDMzXFx1MDQzOFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MlxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0NDNcXHUwNDNkXFx1MDQ0MlwiLFwiZW5cIjpcImVneXB0aWFuIHBvdW5kXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInVhaFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVWtyYWluYXMgZ3Jpdm5hXCIsXCJydVwiOlwiXFx1MDQyM1xcdTA0M2FcXHUwNDQwXFx1MDQzMFxcdTA0MzhcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDMzXFx1MDQ0MFxcdTA0MzhcXHUwNDMyXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJ1a3JhaW5pYW4gaHJ5dm5pYVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiY255XCI6e1wibmFtZVwiOntcImx2XCI6XCJcXHUwMTM2XFx1MDEyYm5hcyBqdWFcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MWFcXHUwNDM4XFx1MDQ0MlxcdTA0MzBcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDRlXFx1MDQzMFxcdTA0M2RcXHUwNDRjXCIsXCJlblwiOlwiY2hpbmVzZSB5dWFuXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInRoYlwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVGFpemVtZXMgYmF0c1wiLFwicnVcIjpcIlxcdTA0MjJcXHUwNDMwXFx1MDQzOFxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzFcXHUwNDMwXFx1MDQ0MlwiLFwiZW5cIjpcInRoYWkgYmFodFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJ2bmRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlZqZXRuYW1hcyBkb25nc1wiLFwicnVcIjpcIlxcdTA0MTJcXHUwNDRjXFx1MDQzNVxcdTA0NDJcXHUwNDNkXFx1MDQzMFxcdTA0M2NcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzZFxcdTA0MzNcIixcImVuXCI6XCJ2aWV0bmFtZXNlIGRvbmdcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwicGhwXCI6e1wibmFtZVwiOntcImx2XCI6XCJGaWxpcFxcdTAxMmJudSBwZXNvXCIsXCJydVwiOlwiXFx1MDQyNFxcdTA0MzhcXHUwNDNiXFx1MDQzOFxcdTA0M2ZcXHUwNDNmXFx1MDQzOFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcImVuXCI6XCJwaGlsaXBwaW5lIHBlc29cIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibWFkXCI6e1wibmFtZVwiOntcImx2XCI6XCJNYXJva2FzIGRpcmhhbXNcIixcInJ1XCI6XCJcXHUwNDFjXFx1MDQzMFxcdTA0NDBcXHUwNDNlXFx1MDQzYVxcdTA0M2FcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDQwXFx1MDQ0NVxcdTA0MzBcXHUwNDNjXCIsXCJlblwiOlwibW9yb2NjYW4gZGlyaGFtXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImF1ZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQXVzdHJcXHUwMTAxbGlqYXMgZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxMFxcdTA0MzJcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDMwXFx1MDQzYlxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJhdXN0cmFsaWFuIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJhcnNcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkFyZ2VudFxcdTAxMmJuYXMgcGVzb1wiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDQwXFx1MDQzM1xcdTA0MzVcXHUwNDNkXFx1MDQ0MlxcdTA0MzhcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDNlXFx1MDQzNSBcXHUwNDNmXFx1MDQzNVxcdTA0NDFcXHUwNDNlXCIsXCJlblwiOlwiYXJnZW50aW5lIHBlc29cIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwianB5XCI6e1wibmFtZVwiOntcImx2XCI6XCJKYXBcXHUwMTAxbmFzIGpcXHUwMTEzbmFcIixcInJ1XCI6XCJcXHUwNDJmXFx1MDQzZlxcdTA0M2VcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDM4XFx1MDQzNVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwiamFwYW5lc2UgeWVuXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJpZHJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkluZG9uXFx1MDExM3ppamFzIHJcXHUwMTZicGlqYVwiLFwicnVcIjpcIlxcdTA0MThcXHUwNDNkXFx1MDQzNFxcdTA0M2VcXHUwNDNkXFx1MDQzNVxcdTA0MzdcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQ0MFxcdTA0NDNcXHUwNDNmXFx1MDQzOFxcdTA0NGZcIixcImVuXCI6XCJpbmRvbmVzaWFuIHJ1cGlhaFwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiaXNrXCI6e1wibmFtZVwiOntcImx2XCI6XCJJc2xhbmRlcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MThcXHUwNDQxXFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJpY2VsYW5kIGtyb25hXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJhbWRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkFybVxcdTAxMTNuaWphcyBkcmFtc1wiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDQwXFx1MDQzY1xcdTA0NGZcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQ0MFxcdTA0MzBcXHUwNDNjXCIsXCJlblwiOlwiYXJtZW5pYW4gZHJhbVwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJyb25cIjp7XCJuYW1lXCI6e1wibHZcIjpcIlJ1bVxcdTAxMDFuaWphcyBsZWphXCIsXCJydVwiOlwiXFx1MDQyMFxcdTA0NDNcXHUwNDNjXFx1MDQ0YlxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2JcXHUwNDM1XFx1MDQ0ZlwiLFwiZW5cIjpcInJvbWFuaWFuIGxldVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwic2dkXCI6e1wibmFtZVwiOntcImx2XCI6XCJTaW5nYXBcXHUwMTZicmFzIGRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MjFcXHUwNDM4XFx1MDQzZFxcdTA0MzNcXHUwNDMwXFx1MDQzZlxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJzaW5nYXBvcmUgZG9sbGFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInNicFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiU2tvdGlqYXMgbVxcdTAxMDFyY2lcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MjhcXHUwNDNlXFx1MDQ0MlxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDQzXFx1MDQzZFxcdTA0NDJcIixcImVuXCI6XCJzY290dGlzaCBwb3VuZFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJjYWRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkthblxcdTAxMDFkYXMgZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxYVxcdTA0MzBcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImNhbmFkaWFuIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJicmxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkJyYXpcXHUwMTJibGlqYXMgcmVcXHUwMTAxbHNcIixcInJ1XCI6XCJcXHUwNDExXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQzOFxcdTA0M2JcXHUwNDRjXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQzNVxcdTA0MzBcXHUwNDNiXCIsXCJlblwiOlwiYnJhemlsaWFuIHJlYWxcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiemFyXCI6e1wibmFtZVwiOntcImx2XCI6XCJEaWVudmlkXFx1MDEwMWZyaWthcyByZW5kc1wiLFwicnVcIjpcIlxcdTA0MmVcXHUwNDM2XFx1MDQzZFxcdTA0M2VcXHUwNDMwXFx1MDQ0NFxcdTA0NDBcXHUwNDM4XFx1MDQzYVxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQ0ZFxcdTA0M2RcXHUwNDM0XCIsXCJlblwiOlwic291dGggYWZyaWNhbiByYW5kXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImluclwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSW5kaWphcyByXFx1MDE2YnBpamFcIixcInJ1XCI6XCJcXHUwNDE4XFx1MDQzZFxcdTA0MzRcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQ0MFxcdTA0NDNcXHUwNDNmXFx1MDQzOFxcdTA0NGZcIixcImVuXCI6XCJpbmRpYW4gcnVwZWVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcInJzZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiU2VyYmlqYXMgZGluXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQyMVxcdTA0MzVcXHUwNDQwXFx1MDQzMVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJzZXJiaWFuIGRpbmFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcIm56ZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSmF1bnpcXHUwMTEzbGFuZGVzIGRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MWRcXHUwNDNlXFx1MDQzMlxcdTA0M2VcXHUwNDM3XFx1MDQzNVxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcIm5ldyB6ZWFsYW5kIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJteXJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1hbGFpemlqYXMgcmluZ2l0c1wiLFwicnVcIjpcIk1cXHUwNDMwXFx1MDQzYlxcdTA0MzBcXHUwNDM5XFx1MDQzN1xcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQzOFxcdTA0M2RcXHUwNDMzXFx1MDQzM1xcdTA0MzhcXHUwNDQyXCIsXCJlblwiOlwibWFsYXlzaWFuIHJpbmdnaXRcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibXVyXCI6e1wibmFtZVwiOntcImx2XCI6XCJNYXVyXFx1MDEyYmNpamFzIHNhbGFzIHJcXHUwMTZicGlqYVwiLFwicnVcIjpcIlxcdTA0MWNcXHUwNDMwXFx1MDQzMlxcdTA0NDBcXHUwNDM4XFx1MDQzYVxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDQwXFx1MDQ0M1xcdTA0M2ZcXHUwNDM4XFx1MDQ0ZlwiLFwiZW5cIjpcIm1hdXJpdGlhbiBydXBlZVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiaGtkXCI6e1wibmFtZVwiOntcImx2XCI6XCJIb25rb25nYXMgZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxM1xcdTA0M2VcXHUwNDNkXFx1MDQzYVxcdTA0M2VcXHUwNDNkXFx1MDQzM1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwiaG9uZyBrb25nIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJrcndcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkRpZW52aWRrb3JlamFzIHZvbmFcIixcInJ1XCI6XCJcXHUwNDJlXFx1MDQzNlxcdTA0M2RcXHUwNDNlXFx1MDQzYVxcdTA0M2VcXHUwNDQwXFx1MDQzNVxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0MzJcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJzb3V0aCBrb3JlYW4gd29uXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJteG5cIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1la3Npa2FzIHBlc29cIixcInJ1XCI6XCJcXHUwNDFjXFx1MDQzNVxcdTA0M2FcXHUwNDQxXFx1MDQzOFxcdTA0M2FcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzZVxcdTA0MzUgXFx1MDQzZlxcdTA0MzVcXHUwNDQxXFx1MDQzZVwiLFwiZW5cIjpcIm1leGljYW4gcGVzb1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJta2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1hXFx1MDEzN2Vkb25pamFzIGRlblxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MWNcXHUwNDMwXFx1MDQzYVxcdTA0MzVcXHUwNDM0XFx1MDQzZVxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwibWFjZWRvbmlhbiBkaW5hclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJkb3BcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkRvbWluaWtcXHUwMTAxbmFzIHBlc29cIixcInJ1XCI6XCJcXHUwNDE0XFx1MDQzZVxcdTA0M2NcXHUwNDM4XFx1MDQzZFxcdTA0MzhcXHUwNDNhXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcImVuXCI6XCJkb21pbmljYW4gcGVzb1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJrZXNcIjp7XCJuYW1lXCI6e1wibHZcIjpcIktlbmlqYXMgXFx1MDE2MWlsaVxcdTAxNDZcXHUwMTYxXCIsXCJydVwiOlwiXFx1MDQxYVxcdTA0MzVcXHUwNDNkXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDhcXHUwNDM4XFx1MDQzYlxcdTA0M2JcXHUwNDM4XFx1MDQzZFxcdTA0MzNcIixcImVuXCI6XCJrZW55YSBzaGlsbGluZ1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJkZW1cIjp7XCJuYW1lXCI6e1wibHZcIjpcIlZcXHUwMTAxY2lqYXMgbWFya2FcIixcInJ1XCI6XCJcXHUwNDFkXFx1MDQzNVxcdTA0M2NcXHUwNDM1XFx1MDQ0NlxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNjXFx1MDQzMFxcdTA0NDBcXHUwNDNhXFx1MDQzMFwiLFwiZW5cIjpcImdlcm1hbiBtYXJrXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJlZWtcIjp7XCJuYW1lXCI6e1wibHZcIjpcIklnYXVuaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MmRcXHUwNDQxXFx1MDQ0MlxcdTA0M2VcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0MFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcImVzdG9uaWFuIGtyb29uXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJsdGxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkxpZXR1dmFzIGxpdHNcIixcInJ1XCI6XCJcXHUwNDFiXFx1MDQzOFxcdTA0NDJcXHUwNDNlXFx1MDQzMlxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzhcXHUwNDQyXCIsXCJlblwiOlwibGl0aHVhbmlhbiBsaXRhc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJsdmxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkxhdHZpamFzIGxhdHNcIixcInJ1XCI6XCJcXHUwNDFiXFx1MDQzMFxcdTA0NDJcXHUwNDMyXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDMwXFx1MDQ0MlwiLFwiZW5cIjpcImxhdHZpYW4gbGF0c1wifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOltcInNhbnRpbWlcIixcInNhbnRpbXNcIixcInNhbnRpbWlcIl0sXCJydVwiOltcIlxcdTA0NDFcXHUwNDMwXFx1MDQzZFxcdTA0NDJcXHUwNDM4XFx1MDQzY1xcdTA0M2VcXHUwNDMyXCIsXCJcXHUwNDQxXFx1MDQzMFxcdTA0M2RcXHUwNDQyXFx1MDQzOFxcdTA0M2NcIixcIlxcdTA0NDFcXHUwNDMwXFx1MDQzZFxcdTA0NDJcXHUwNDM4XFx1MDQzY1xcdTA0M2VcXHUwNDMyXCJdLFwiZW5cIjpcInNhbnRpbXNcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19fTtcclxuICAgIHRoaXMubnVtQ29uZiA9IHtcInVuaXRzXCI6e1wibHZcIjpbXCJcIixcInZpZW5zXCIsXCJkaXZpXCIsXCJ0clxcdTAxMmJzXCIsXCJcXHUwMTBkZXRyaVwiLFwicGllY2lcIixcInNlXFx1MDE2MWlcIixcInNlcHRpXFx1MDE0NmlcIixcImFzdG9cXHUwMTQ2aVwiLFwiZGV2aVxcdTAxNDZpXCJdLFwicnVcIjpbXCJcIixbXCJcXHUwNDNlXFx1MDQzNFxcdTA0MzhcXHUwNDNkXCIsXCJcXHUwNDNlXFx1MDQzNFxcdTA0M2RcXHUwNDMwXCJdLFtcIlxcdTA0MzRcXHUwNDMyXFx1MDQzMFwiLFwiXFx1MDQzNFxcdTA0MzJcXHUwNDM1XCJdLFwiXFx1MDQ0MlxcdTA0NDBcXHUwNDM4XCIsXCJcXHUwNDQ3XFx1MDQzNVxcdTA0NDJcXHUwNDRiXFx1MDQ0MFxcdTA0MzVcIixcIlxcdTA0M2ZcXHUwNDRmXFx1MDQ0MlxcdTA0NGNcIixcIlxcdTA0NDhcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDRjXCIsXCJcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXCIsXCJcXHUwNDMyXFx1MDQzZVxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcIixcIlxcdTA0MzRcXHUwNDM1XFx1MDQzMlxcdTA0NGZcXHUwNDQyXFx1MDQ0Y1wiXX0sXCJ0ZWVuc1wiOntcImx2XCI6e1wiMTBcIjpcImRlc21pdFwiLFwiMTFcIjpcInZpZW5wYWRzbWl0XCIsXCIxMlwiOlwiZGl2cGFkc21pdFwiLFwiMTNcIjpcInRyXFx1MDEyYnNwYWRzbWl0XCIsXCIxNFwiOlwiXFx1MDEwZGV0cnBhZHNtaXRcIixcIjE1XCI6XCJwaWVjcGFkc21pdFwiLFwiMTZcIjpcInNlXFx1MDE2MXBhZHNtaXRcIixcIjE3XCI6XCJzZXB0aVxcdTAxNDZwYWRzbWl0XCIsXCIxOFwiOlwiYXN0b1xcdTAxNDZwYWRzbWl0XCIsXCIxOVwiOlwiZGV2aVxcdTAxNDZwYWRzbWl0XCJ9LFwicnVcIjp7XCIxMFwiOlwiXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXCIsXCIxMVwiOlwiXFx1MDQzZVxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjEyXCI6XCJcXHUwNDM0XFx1MDQzMlxcdTA0MzVcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxM1wiOlwiXFx1MDQ0MlxcdTA0NDBcXHUwNDM1XFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMTRcIjpcIlxcdTA0NDdcXHUwNDM1XFx1MDQ0MlxcdTA0NGJcXHUwNDQwXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMTVcIjpcIlxcdTA0M2ZcXHUwNDRmXFx1MDQ0MlxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjE2XCI6XCJcXHUwNDQ4XFx1MDQzNVxcdTA0NDFcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxN1wiOlwiXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMThcIjpcIlxcdTA0MzJcXHUwNDNlXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMTlcIjpcIlxcdTA0MzRcXHUwNDM1XFx1MDQzMlxcdTA0NGZcXHUwNDQyXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wifX0sXCJ0ZW5uZXJzXCI6e1wibHZcIjp7XCIyXCI6XCJkaXZkZXNtaXRcIixcIjNcIjpcInRyXFx1MDEyYnNkZXNtaXRcIixcIjRcIjpcIlxcdTAxMGRldHJkZXNtaXRcIixcIjVcIjpcInBpZWNkZXNtaXRcIixcIjZcIjpcInNlXFx1MDE2MWRlc21pdFwiLFwiN1wiOlwic2VwdGlcXHUwMTQ2ZGVzbWl0XCIsXCI4XCI6XCJhc3RvXFx1MDE0NmRlc21pdFwiLFwiOVwiOlwiZGV2aVxcdTAxNDZkZXNtaXRcIn0sXCJydVwiOntcIjJcIjpcIlxcdTA0MzRcXHUwNDMyXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIzXCI6XCJcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiNFwiOlwiXFx1MDQ0MVxcdTA0M2VcXHUwNDQwXFx1MDQzZVxcdTA0M2FcIixcIjVcIjpcIlxcdTA0M2ZcXHUwNDRmXFx1MDQ0Y1xcdTA0MzRcXHUwNDM1XFx1MDQ0MVxcdTA0NGZcXHUwNDQyXCIsXCI2XCI6XCJcXHUwNDQ4XFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQ0Y1xcdTA0MzRcXHUwNDM1XFx1MDQ0MVxcdTA0NGZcXHUwNDQyXCIsXCI3XCI6XCJcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcIjhcIjpcIlxcdTA0MzJcXHUwNDNlXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQ0Y1xcdTA0MzRcXHUwNDM1XFx1MDQ0MVxcdTA0NGZcXHUwNDQyXCIsXCI5XCI6XCJcXHUwNDM0XFx1MDQzNVxcdTA0MzJcXHUwNDRmXFx1MDQzZFxcdTA0M2VcXHUwNDQxXFx1MDQ0MlxcdTA0M2VcIn19LFwiaHVuZHJlZHNcIjp7XCJydVwiOntcIlwiOlwiXCIsXCIwXCI6XCJcIixcIjFcIjpcIlxcdTA0NDFcXHUwNDQyXFx1MDQzZVwiLFwiMlwiOlwiXFx1MDQzNFxcdTA0MzJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDM4XCIsXCIzXCI6XCJcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcIixcIjRcIjpcIlxcdTA0NDdcXHUwNDM1XFx1MDQ0MlxcdTA0NGJcXHUwNDQwXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzMFwiLFwiNVwiOlwiXFx1MDQzZlxcdTA0NGZcXHUwNDQyXFx1MDQ0Y1xcdTA0NDFcXHUwNDNlXFx1MDQ0MlwiLFwiNlwiOlwiXFx1MDQ0OFxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0NGNcXHUwNDQxXFx1MDQzZVxcdTA0NDJcIixcIjdcIjpcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcXHUwNDQxXFx1MDQzZVxcdTA0NDJcIixcIjhcIjpcIlxcdTA0MzJcXHUwNDNlXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQ0Y1xcdTA0NDFcXHUwNDNlXFx1MDQ0MlwiLFwiOVwiOlwiXFx1MDQzNFxcdTA0MzVcXHUwNDMyXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXFx1MDQ0MVxcdTA0M2VcXHUwNDQyXCJ9fX07XHJcbiAgICBpZiAoY3VyQ29uZikge1xyXG4gICAgICAgIHRoaXMuY3VyQ29uZiA9IGN1ckNvbmY7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtQ29uZikge1xyXG4gICAgICAgIHRoaXMuY3VyQ29uZiA9IG51bUNvbmY7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbmZOYW1lcyA9IHt9O1xyXG4gICAgdmFyIGNvbmZIdW5kID0ge307XHJcbiAgICBmb3IgKHZhciBjb2RlIGluIHRoaXMuY3VyQ29uZikge1xyXG4gICAgICAgIGlmICh0aGlzLmN1ckNvbmZbY29kZV1bJ25hbWUnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGxhbmcgaW4gdGhpcy5jdXJDb25mW2NvZGVdWyduYW1lJ10pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25mTmFtZXNbbGFuZ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZOYW1lc1tsYW5nXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uZk5hbWVzW2xhbmddW2NvZGVdID0gdGhpcy5jdXJDb25mW2NvZGVdWyduYW1lJ11bbGFuZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyQ29uZltjb2RlXVsnaHVuZHJlZHRocyddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yIChsYW5nIGluIHRoaXMuY3VyQ29uZltjb2RlXVsnaHVuZHJlZHRocyddKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZkh1bmRbbGFuZ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZIdW5kW2xhbmddID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25mSHVuZFtsYW5nXVtjb2RlXSA9IHRoaXMuY3VyQ29uZltjb2RlXVsnaHVuZHJlZHRocyddW2xhbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW5jeUx2ID0gY29uZk5hbWVzLmx2O1xyXG4gICAgdGhpcy5odW5kcmVkdGhzTHYgPSBjb25mSHVuZC5sdjtcclxuICAgIHRoaXMuY3VycmVuY3lSdSA9IGNvbmZOYW1lcy5ydTtcclxuICAgIHRoaXMuaHVuZHJlZHRoc1J1ID0gY29uZkh1bmQucnU7XHJcbiAgICB0aGlzLmN1cnJlbmN5RW4gPSBjb25mTmFtZXMuZW47XHJcbiAgICB0aGlzLmh1bmRyZWR0aHNFbiA9IGNvbmZIdW5kLmVuO1xyXG5cclxuICAgIHRoaXMub25lSHVuZHJlZEx2ID0gJ3ZpZW5zIHNpbXRzJztcclxuICAgIHRoaXMuaHVuZHJhZHMgPSAnc2ltdGknO1xyXG4gICAgdGhpcy5hbmRzID0geydsdic6ICd1bicsICdlbic6J2FuZCcsICdydSc6J9C4J307XHJcbiAgICB0aGlzLmNvbWF0cyA9IHsnbHYnOiAna29tYXRzJywgJ2VuJzonY29tYScsICdydSc6J9C60L7QvNCwJ307XHJcbiAgICB0aGlzLm51bGxlID0geydsdic6ICdudWxsZScsICdydSc6J9C90L7Qu9GMJ307XHJcblxyXG4gICAgdGhpcy5iaWdOdW1zID0ge1xyXG4gICAgICAgICczJzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9GC0YvRgdGP0YfQsCcsICfRgtGL0YHRj9GHJywgJ9GC0YvRgdGP0YfQuCddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ3TFq2tzdG90aXMnLCAndMWra3N0b8WhaSddXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnNic6IHtcclxuICAgICAgICAgICAgJ3J1JzogWyfQvNC40LvQu9C40L7QvScsICfQvNC40LvQu9C40L7QvdC+0LInLCAn0LzQuNC70LvQuNC+0L3QsCddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ21pbGpvbnMnLCAnbWlsam9uaSddXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnOSc6IHtcclxuICAgICAgICAgICAgJ3J1JzogWyfQvNC40LvQu9C40LDRgNC0JywgJ9C80LjQu9C70LjQvtC90L7QsicsICfQvNC40LvQu9C40LDRgNC00LAnXSxcclxuICAgICAgICAgICAgJ2x2JzogWydtaWxqYXJkcycsICdtaWxqYXJkaSddXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnMTInOiB7XHJcbiAgICAgICAgICAgICdydSc6IFsn0YLRgNC40LvQu9C40L7QvScsICfRgtGA0LjQu9C70LjQvtC90L7QsicsICfRgtGA0LjQu9C70LjQvtC90LAnXSxcclxuICAgICAgICAgICAgJ2x2JzogWyd0cmlsam9ucycsICd0cmlsam9uaSddXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnMTUnOiB7XHJcbiAgICAgICAgICAgICdydSc6IFsn0LrQstCw0LTRgNC40LvQu9C40L7QvScsICfQutCy0LDQtNGA0LjQu9C70LjQvtC90L7QsicsICfQutCy0LDQtNGA0LjQu9C70LjQvtC90LAnXSxcclxuICAgICAgICAgICAgJ2x2JzogWydrdmFkcmlsam9ucycsICdrdmFkcmlsam9uaSddXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkVHJhbnNsYXRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9