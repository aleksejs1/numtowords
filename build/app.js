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
        "lv": "centi",
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
        "lv": "centi",
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
        "lv": "kapeik\u0101s",
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
        "lv": "kapeik\u0101s",
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
        "lv": "santimi",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJudW10b3dvcmRzIiwiTnVtVG9Xb3JkcyIsInVwZGF0ZUFsbCIsImN1cnJlbmN5IiwiJCIsInZhbCIsImxhbmciLCJudW0iLCJyZXMiLCJnZXRGdWxsIiwiaHRtbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZmFkZUluIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJzaG93SGVscCIsImhpZGUiLCJvbiIsInNlbCIsInZhbHMiLCJnZXRWYWxzIiwia2V5IiwidmFsYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwibGFuZ1ZhbHMiLCJjaGVja2VkIiwidHJhbnNsYXRvciIsIlQyVyIsInRyYW5zbGF0aW9ucyIsIldvcmRUcmFuc2xhdGlvbnMiLCJwcm90b3R5cGUiLCJjdXJyZW5jeUx2IiwidW5pdHMiLCJudW1lcmljVW5pdCIsInBsdXJhbCIsIkFycmF5IiwiaXNBcnJheSIsIm51bUNvbmYiLCJ0ZW5uZXJzIiwibnVtZXJpY1RlbiIsInNleCIsInRlZW5zIiwiaHVuZHJlZHMiLCJudW1lcmljSHVuZHJlZCIsInJ1Iiwib25lSHVuZHJlZEx2IiwiaHVuZHJhZHMiLCJnZW5lcmljQ2FsbGVyIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJjYWxsIiwiYXJndW1lbnRzIiwic2hpZnQiLCJhcHBseSIsInVuaSIsImxlbiIsIm1pbGlvbmkiLCJzdWJzdHJpbmciLCJ0aG91c2FuZHNjaSIsIm1pbGpXb3JkIiwiYmlnTnVtcyIsInRvU3RyaW5nIiwiZ2V0UmVzdWx0IiwiY2VudCIsImV1ciIsInBvaW50IiwibGFzdEluZGV4T2YiLCJjb21hIiwicG9pbnRDb3VudCIsInNwbGl0IiwibGVuZ3RoIiwiY29tYUNvdW50Iiwic2VwIiwidW4iLCJhbmRzIiwiY29tYXRzIiwiY2VudGkiLCJyZXBsYWNlIiwiY2VudGkxIiwiY2VudGkyIiwib3JpZyIsInRvV29yZHMiLCJOdW1iZXIiLCJlIiwicmVwZWF0IiwidHJpbSIsIm51bGxlIiwiZWxlbWVudHMiLCJlbmRpbmdzUnUiLCJ0b0xvd2VyQ2FzZSIsIm51bWJlciIsImVuZGluZ3MiLCJlbmRpbmciLCJ2YWx1dGEiLCJlZGVuIiwic20iLCJjdXJyZW5jeUVuIiwiaHVuZHJlZHRoc0VuIiwiY3VycmVuY3lSdSIsImh1bmRyZWR0aHNSdSIsImN1ckNvbmYiLCJodW5kcmVkdGhzTHYiLCJzbXJlcyIsImhhc093blByb3BlcnR5IiwiY29uZk5hbWVzIiwiY29uZkh1bmQiLCJjb2RlIiwibHYiLCJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxVQUFVLEdBQUcsSUFBSUMsbURBQUosRUFBakI7O0FBRUEsU0FBU0MsU0FBVCxHQUFxQjtBQUNqQixNQUFJQyxRQUFRLEdBQUdDLDZDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEdBQWIsRUFBZjtBQUNBLE1BQUlDLElBQUksR0FBR0YsNkNBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDQyxHQUFoQyxFQUFYO0FBQ0EsTUFBSUUsR0FBRyxHQUFHSCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRQyxHQUFSLEVBQVY7QUFDQSxNQUFJRyxHQUFHLEdBQUdSLFVBQVUsQ0FBQ1MsT0FBWCxDQUFtQk4sUUFBbkIsRUFBNkJHLElBQTdCLEVBQW1DQyxHQUFuQyxDQUFWO0FBQ0FILCtDQUFDLENBQUMsTUFBRCxDQUFELENBQVVNLElBQVYsQ0FBZUYsR0FBZjtBQUNBRyxjQUFZLENBQUNDLE9BQWIsQ0FB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QyxTQUFELEVBQVksV0FBWixFQUF5QixVQUF6QixDQURMO0FBRUQsWUFBTSxDQUFDLFNBQUQsRUFBWSxTQUFaO0FBRkwsS0FMTTtBQVNYLFNBQUs7QUFDRCxZQUFNLENBQUMsVUFBRCxFQUFhLFdBQWIsRUFBMEIsV0FBMUIsQ0FETDtBQUVELFlBQU0sQ0FBQyxVQUFELEVBQWEsVUFBYjtBQUZMLEtBVE07QUFhWCxVQUFNO0FBQ0YsWUFBTSxDQUFDLFVBQUQsRUFBYSxZQUFiLEVBQTJCLFdBQTNCLENBREo7QUFFRixZQUFNLENBQUMsVUFBRCxFQUFhLFVBQWI7QUFGSixLQWJLO0FBaUJYLFVBQU07QUFDRixZQUFNLENBQUMsYUFBRCxFQUFnQixlQUFoQixFQUFpQyxjQUFqQyxDQURKO0FBRUYsWUFBTSxDQUFDLGFBQUQsRUFBZ0IsYUFBaEI7QUFGSjtBQWpCSyxHQUFmO0FBc0JILENBakVEOztBQW1FZS9CLCtFQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCdcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgTnVtVG9Xb3JkcyBmcm9tIFwiLi9udW10b3dvcmRzXCI7XHJcblxyXG52YXIgbnVtdG93b3JkcyA9IG5ldyBOdW1Ub1dvcmRzKCk7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVBbGwoKSB7XHJcbiAgICB2YXIgY3VycmVuY3kgPSAkKFwiI3ZhbHV0YVwiKS52YWwoKTtcclxuICAgIHZhciBsYW5nID0gJCgnaW5wdXRbbmFtZT1cImxhbmdcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gICAgdmFyIG51bSA9ICQoXCIjY1wiKS52YWwoKTtcclxuICAgIHZhciByZXMgPSBudW10b3dvcmRzLmdldEZ1bGwoY3VycmVuY3ksIGxhbmcsIG51bSk7XHJcbiAgICAkKFwiI3Jlc1wiKS5odG1sKHJlcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29udmVydF9sYW5nJywgbGFuZyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29udmVydF9jdXJyZW5jeScsIGN1cnJlbmN5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weSgpIHtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCQoXCIjcmVzXCIpLmh0bWwoKSk7XHJcbiAgICAkKFwiI2FscnRcIikuZmFkZUluKCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyQoXCIjYWxydFwiKS5mYWRlT3V0KCk7fSwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dIZWxwKCkge1xyXG4gICAgJChcIiNoZWxwXCIpLmZhZGVJbigpO1xyXG4gICAgJChcIiNoZWxwLWJ0blwiKS5oaWRlKCk7XHJcbn1cclxuXHJcbiQoXCIjY1wiKS5vbigna2V5dXAnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY1wiKS5vbignY2xpY2snLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ3Bhc3RlJywgdXBkYXRlQWxsKTtcclxuJChcIiN2YWx1dGFcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9bGFuZ10nKS5vbignY2hhbmdlJywgdXBkYXRlQWxsKTtcclxuJChcIiNjb3B5LWJ0blwiKS5vbignY2xpY2snLCBjb3B5KTtcclxuJChcIiNoZWxwLWJ0blwiKS5vbignY2xpY2snLCBzaG93SGVscCk7XHJcblxyXG52YXIgc2VsID0gJyc7XHJcbnZhciB2YWxzID0gbnVtdG93b3Jkcy5nZXRWYWxzKCk7XHJcbmZvciAodmFyIGtleSBpbiB2YWxzKSB7XHJcbiAgICB2YXIgdmFsYSA9IHZhbHNba2V5XS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHNba2V5XS5zbGljZSgxKTtcclxuICAgIHNlbCA9IHNlbCArICc8b3B0aW9uIHZhbHVlPVwiJytrZXkrJ1wiPicra2V5LnRvVXBwZXJDYXNlKCkrJyAnK3ZhbGErJzwvb3B0aW9uPic7XHJcbn07XHJcbiQoXCIjdmFsdXRhXCIpLmh0bWwoc2VsKTtcclxudmFyIGxhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29udmVydF9sYW5nJyk7XHJcbmlmIChsYW5nICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHZhciBsYW5nVmFscyA9IHtcclxuICAgICAgICAnbHYnOiAwLFxyXG4gICAgICAgICdlbic6IDEsXHJcbiAgICAgICAgJ3J1JzogMlxyXG4gICAgfTtcclxuXHJcbiAgICAkKCdpbnB1dDpyYWRpb1tuYW1lPVwibGFuZ1wiXScpW2xhbmdWYWxzW2xhbmddXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICQoJ2lucHV0W25hbWU9XCJsYW5nXCJdOmNoZWNrZWQnKS52YWwoKTtcclxufVxyXG52YXIgY3VycmVuY3kgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29udmVydF9jdXJyZW5jeScpO1xyXG5pZiAoY3VycmVuY3kgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgJChcIiN2YWx1dGFcIikudmFsKGN1cnJlbmN5KTtcclxufVxyXG4iLCJpbXBvcnQgVDJXIGZyb20gXCJudW1iZXJzMndvcmRzXCI7XHJcbmltcG9ydCBXb3JkVHJhbnNsYXRpb25zIGZyb20gXCIuL3RyYW5zbGF0aW9uc1wiO1xyXG5cclxudmFyIE51bVRvV29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0b3IgPSBuZXcgVDJXKFwiRU5fVVNcIik7XHJcbiAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IG5ldyBXb3JkVHJhbnNsYXRpb25zKCk7XHJcbiAgICB0aGlzLmxhbmcgPSAnbHYnO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRWYWxzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5THY7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnVuaXRzID0gZnVuY3Rpb24gKG51bWVyaWNVbml0LCBwbHVyYWwgPSAwKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnVuaXRzW3RoaXMubGFuZ11bbnVtZXJpY1VuaXRdKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnVuaXRzW3RoaXMubGFuZ11bbnVtZXJpY1VuaXRdW3BsdXJhbF1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnVuaXRzW3RoaXMubGFuZ11bbnVtZXJpY1VuaXRdXHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnRlbm5lcnMgPSBmdW5jdGlvbiAobnVtZXJpY1Rlbiwgc2V4ID0gdHJ1ZSkge1xyXG4gICAgdmFyIHBsdXJhbCA9IDE7XHJcbiAgICBpZiAoc2V4KSB7XHJcbiAgICAgICAgcGx1cmFsID0gMDtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljVGVuWzBdID09PSBcIjBcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVuaXRzKG51bWVyaWNUZW5bMV0sIHBsdXJhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIxXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi50ZWVuc1t0aGlzLmxhbmddW251bWVyaWNUZW5dXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLm51bUNvbmYudGVubmVyc1t0aGlzLmxhbmddW251bWVyaWNUZW5bMF1dICsgXCIgXCIgKyB0aGlzLnVuaXRzKG51bWVyaWNUZW5bMV0sIHBsdXJhbClcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuaHVuZHJlZHMgPSBmdW5jdGlvbiAobnVtZXJpY0h1bmRyZWQsIHNleCA9IHRydWUpIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi5odW5kcmVkcy5ydVtudW1lcmljSHVuZHJlZFswXV0gKyAnICcgKyB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSwgc2V4KTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljSHVuZHJlZFswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0sIHNleCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY0h1bmRyZWRbMF0gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLm9uZUh1bmRyZWRMdiArICcgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaXRzKG51bWVyaWNIdW5kcmVkWzBdKSArICcgJyArIHRoaXMudHJhbnNsYXRpb25zLmh1bmRyYWRzICsgJyAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0sIHNleCk7XHJcbn1cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2VuZXJpY0NhbGxlciA9IGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcclxuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgYXJncy5zaGlmdCgpO1xyXG4gICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJncyk7XHJcbn07XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bmkgPSBmdW5jdGlvbiAobnVtLCBsZW4sIHNleCA9ICdoZScpIHtcclxuICAgIGlmIChsZW4gPT09IDMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmljQ2FsbGVyKCdodW5kcmVkcycsIG51bSwgc2V4ID09PSAnaGUnKTtcclxuICAgIH1cclxuICAgIHZhciBtaWxpb25pID0gbnVtLnN1YnN0cmluZygwLCAzKTtcclxuICAgIHZhciB0aG91c2FuZHNjaSA9IG51bS5zdWJzdHJpbmcoMywgbGVuKTtcclxuXHJcbiAgICBpZiAobWlsaW9uaSA9PT0gJzAwMCcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmljQ2FsbGVyKCd1bmknLCB0aG91c2FuZHNjaSwgbGVuLTMsIHNleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1pbGpXb3JkID0gdGhpcy50cmFuc2xhdGlvbnMuYmlnTnVtc1sobGVuIC0gMykudG9TdHJpbmcoKV1bdGhpcy5sYW5nXVsxXTtcclxuICAgIGlmIChtaWxpb25pWzJdID09PSBcIjFcIiAmJiBtaWxpb25pWzFdICE9PSBcIjFcIikge1xyXG4gICAgICAgIG1pbGpXb3JkID0gdGhpcy50cmFuc2xhdGlvbnMuYmlnTnVtc1sobGVuIC0gMykudG9TdHJpbmcoKV1bdGhpcy5sYW5nXVswXVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1JyAmJiBtaWxpb25pWzFdICE9PSBcIjFcIiAmJiAobWlsaW9uaVsyXSA9PT0gXCIyXCIgfHwgbWlsaW9uaVsyXSA9PT0gXCIzXCIgfHwgbWlsaW9uaVsyXSA9PT0gXCI0XCIpKSB7XHJcbiAgICAgICAgbWlsaldvcmQgPSB0aGlzLnRyYW5zbGF0aW9ucy5iaWdOdW1zWyhsZW4gLSAzKS50b1N0cmluZygpXVt0aGlzLmxhbmddWzJdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odW5kcmVkcyhtaWxpb25pLCAhKGxlbiA+PSA2ICYmIGxlbiA8IDkpKSArICcgJyttaWxqV29yZCsnICcgKyB0aGlzLmdlbmVyaWNDYWxsZXIoJ3VuaScsIHRob3VzYW5kc2NpLCBsZW4tMywgc2V4KTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0UmVzdWx0ID0gZnVuY3Rpb24gKG51bSwgY2VudCwgZXVyLCBzZXggPSAnaGUnKSB7XHJcbiAgICB2YXIgcG9pbnQgPSBudW0ubGFzdEluZGV4T2YoJy4nKTtcclxuICAgIHZhciBjb21hID0gbnVtLmxhc3RJbmRleE9mKCcsJyk7XHJcbiAgICB2YXIgcG9pbnRDb3VudCA9IChudW0uc3BsaXQoXCIuXCIpLmxlbmd0aCAtIDEpXHJcbiAgICB2YXIgY29tYUNvdW50ID0gKG51bS5zcGxpdChcIixcIikubGVuZ3RoIC0gMSlcclxuICAgIHZhciBzZXAgPSAtMTtcclxuICAgIGlmIChwb2ludCAhPT0gLTEgJiYgcG9pbnQgPiBjb21hICYmIHBvaW50Q291bnQgPT09IDEpIHtcclxuICAgICAgICB2YXIgc2VwID0gcG9pbnQ7XHJcbiAgICB9IGVsc2UgaWYgKGNvbWEgIT09IC0xICYmIGNvbWEgPiBwb2ludCAmJiBjb21hQ291bnQgPT09IDEpIHtcclxuICAgICAgICB2YXIgc2VwID0gY29tYTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbGVuZ3RoID0gbnVtLmxlbmd0aDtcclxuICAgIHZhciB1biA9IHRoaXMudHJhbnNsYXRpb25zLmFuZHNbdGhpcy5sYW5nXTtcclxuICAgIHZhciBjb21hdHMgPSB0aGlzLnRyYW5zbGF0aW9ucy5jb21hdHNbdGhpcy5sYW5nXTtcclxuICAgIHZhciBjZW50aSA9ICcgJyt1bisnIDAwICcgKyBjZW50O1xyXG4gICAgaWYgKHNlcCAhPT0gLTEpIHtcclxuXHJcbiAgICAgICAgY2VudGkgPSBudW0uc3Vic3RyaW5nKHNlcCsxLCBsZW5ndGgpO1xyXG4gICAgICAgIGNlbnRpID0gY2VudGkucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcbiAgICAgICAgbnVtID0gbnVtLnN1YnN0cmluZygwLCBzZXApO1xyXG4gICAgICAgIHZhciBjZW50aTEgPSAnJztcclxuICAgICAgICBpZiAoY2VudGkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNlbnRpMSA9ICcwMCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZW50aS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY2VudGkxID0gY2VudGkrJzAnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VudGkubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNlbnRpMSA9IGNlbnRpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNlbnRpMSA9IGNlbnRpLnN1YnN0cmluZygwLDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2VudCkpIHtcclxuICAgICAgICAgICAgaWYgKGNlbnRpMVtjZW50aTEubGVuZ3RoLTFdID09PSBcIjFcIiAmJiBjZW50aTFbY2VudGkxLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgIGNlbnQgPSBjZW50WzFdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChjZW50aTFbY2VudGkxLmxlbmd0aC0yXSAhPT0gXCIxXCIpICYmIChjZW50aTFbY2VudGkxLmxlbmd0aC0xXSA9PT0gXCIyXCIgfHwgY2VudGkxW2NlbnRpMS5sZW5ndGgtMV0gPT09IFwiM1wiIHx8IGNlbnRpMVtjZW50aTEubGVuZ3RoLTFdID09PSBcIjRcIiApKSB7XHJcbiAgICAgICAgICAgICAgICBjZW50ID0gY2VudFsyXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNlbnQgPSBjZW50WzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBudW0gPSBudW0uc3Vic3RyaW5nKDAsIHNlcCk7XHJcbiAgICAgICAgaWYgKGNlbnRpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnICcrY2VudGkxKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZW50aS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnICcrY2VudGkxKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZW50aS5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnICcrY2VudGkxKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNlbnRpMiA9IGNlbnRpLnN1YnN0cmluZygyLGNlbnRpLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnICcrY2VudGkxICsgJywgJyArIGNvbWF0cyArJywgJysgY2VudGkyKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBvcmlnID0gbnVtO1xyXG4gICAgbnVtID0gbnVtLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKVxyXG5cclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdlbicpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBudW0gPSB0aGlzLnRyYW5zbGF0b3IudG9Xb3JkcyhOdW1iZXIobnVtKSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIG51bSA9ICdBIGxvdCBvZic7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBudW0gPSAnMCcucmVwZWF0KDE4IC0gbnVtLmxlbmd0aCkgKyBudW07XHJcbiAgICAgICAgbnVtID0gdGhpcy51bmkobnVtLCAxOCwgc2V4KS50cmltKCk7XHJcbiAgICAgICAgaWYgKG51bSA9PT0gJycpIHtcclxuICAgICAgICAgICAgbnVtID0gdGhpcy50cmFuc2xhdGlvbnMubnVsbGVbdGhpcy5sYW5nXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2x2Jykge1xyXG4gICAgICAgIGlmICgob3JpZy5sZW5ndGggPiAxICYmIG9yaWdbb3JpZy5sZW5ndGgtMV0gPT09IFwiMVwiICYmIG9yaWdbb3JpZy5sZW5ndGgtMl0gIT09IFwiMVwiKSB8fCBvcmlnID09PSBcIjFcIikge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChldXJbZXVyLmxlbmd0aC0xXSAhPSBcIm9cIiAmJiBldXJbZXVyLmxlbmd0aC0xXSAhPSBcImVcIikge1xyXG4gICAgICAgICAgICAgICAgZXVyID0gZXVyLnN1YnN0cmluZygwLCBldXIubGVuZ3RoIC0gMSkgKyAnaSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV1cltldXIubGVuZ3RoLTJdID09PSBcImlcIikge1xyXG4gICAgICAgICAgICAgICAgZXVyID0gZXVyLnN1YnN0cmluZygwLCBldXIubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGV1ci5zcGxpdCgnICcpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgZXVyID0gdGhpcy5lbmRpbmdzUnUob3JpZywgZXVyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBldXIgPSB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1swXSkgKyAnICcgKyB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1sxXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgZXVyID0gdGhpcy5lbmRpbmdzUnUob3JpZywgZWxlbWVudHNbMF0pICsgJyAnICsgdGhpcy5lbmRpbmdzUnUob3JpZywgZWxlbWVudHNbMV0pICsgJyAnICsgZWxlbWVudHNbMl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW0gKyAnICcgKyBldXIudG9Mb3dlckNhc2UoKSArIGNlbnRpO1xyXG59XHJcbk51bVRvV29yZHMucHJvdG90eXBlLmVuZGluZ3NSdSA9IGZ1bmN0aW9uIChudW1iZXIsIGN1cnJlbmN5KSB7XHJcbiAgICBpZiAoKG51bWJlci5sZW5ndGggPiAxICYmIG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjFcIiAmJiBudW1iZXJbbnVtYmVyLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG51bWJlciA9PT0gXCIxXCIpIHtcclxuICAgIH0gZWxzZSBpZiAoKG51bWJlci5sZW5ndGggPiAxICYmIChudW1iZXJbbnVtYmVyLmxlbmd0aC0xXSA9PT0gXCIyXCIgfHwgbnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiM1wiIHx8IG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjRcIikgJiYgbnVtYmVyW251bWJlci5sZW5ndGgtMl0gIT09IFwiMVwiKSB8fCBudW1iZXIgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgdmFyIGVuZGluZ3MgPSB7J2FkZCc6e1wi0YBcIjogXCLQsFwiLCBcItGCXCI6IFwi0LBcIiwgXCLQulwiOiBcItCwXCIsIFwi0LDQvFwiOiBcItCwXCJ9LCAncmVwbGFjZSc6IHtcItC40YDQsFwiOiBcItC40YDRi1wiLCBcItGMXCI6IFwi0Y9cIiwgXCLRgdC60LjQuVwiOlwi0YHQutC40YVcIiwgXCLQuNC5XCI6IFwi0LjRhVwiLCBcItGL0LlcIjogXCLQsFwiLCBcItCw0Y9cIjogXCLQuNC1XCIsIFwi0YRcIjogXCLRi1wiLCBcItC90LBcIjogXCLQvdGLXCJ9fTtcclxuICAgICAgICBmb3IgKHZhciBlbmRpbmcgaW4gZW5kaW5nc1snYWRkJ10pIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LnN1YnN0cmluZyhjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSA9PT0gZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kgKyBlbmRpbmdzWydhZGQnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoZW5kaW5nIGluIGVuZGluZ3NbJ3JlcGxhY2UnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5zdWJzdHJpbmcoMCwgY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgKyBlbmRpbmdzWydyZXBsYWNlJ11bZW5kaW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGVuZGluZ3MgPSB7J2FkZCc6e1wi0YBcIjogXCLQvtCyXCIsIFwi0YJcIjogXCLQvtCyXCIsIFwi0LpcIjogXCLQvtCyXCJ9LCAncmVwbGFjZSc6IHtcItGMXCI6IFwi0LXQuVwiLCBcItC40LlcIjogXCLQuNGFXCIsIFwi0YvQuVwiOiBcItGL0YVcIiwgXCLQsNGPXCI6IFwi0LjRhVwiLCBcItCwXCI6IFwiXCJ9fTtcclxuICAgICAgICBmb3IgKHZhciBlbmRpbmcgaW4gZW5kaW5nc1snYWRkJ10pIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LnN1YnN0cmluZyhjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSA9PT0gZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kgKyBlbmRpbmdzWydhZGQnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoZW5kaW5nIGluIGVuZGluZ3NbJ3JlcGxhY2UnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5zdWJzdHJpbmcoMCwgY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgKyBlbmRpbmdzWydyZXBsYWNlJ11bZW5kaW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3VycmVuY3k7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldEZ1bGwgPSBmdW5jdGlvbiAodmFsdXRhLCBsYW5nLCBudW0pIHtcclxuICAgIHRoaXMubGFuZyA9IGxhbmc7XHJcbiAgICB2YXIgZWRlbiA9IHtcclxuICAgIH07XHJcbiAgICB2YXIgc20gPSB7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzZXggPSAnaGUnO1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUVuO1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc0VuO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICBlZGVuID0gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lSdTtcclxuICAgICAgICBzbSA9IHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWR0aHNSdTtcclxuICAgICAgICBzZXggPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJDb25mW3ZhbHV0YV1bJ3NleCddWydydSddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlZGVuID0gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lMdjtcclxuICAgICAgICBzbSA9IHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWR0aHNMdjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc21yZXMgPSAnKDEvMTAwKSAnICsgdmFsdXRhLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzbSwgdmFsdXRhKSkge1xyXG4gICAgICAgIHNtcmVzID0gc21bdmFsdXRhXTtcclxuICAgIH1cclxuICAgIHZhciByZXMgPSB0aGlzLmdldFJlc3VsdChudW0sIHNtcmVzLCBlZGVuW3ZhbHV0YV0sIHNleCk7XHJcbiAgICByZXMgPSByZXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXMuc2xpY2UoMSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtVG9Xb3JkcztcclxuIiwiaW1wb3J0IE51bVRvV29yZHMgZnJvbSBcIi4vbnVtdG93b3Jkc1wiO1xyXG5cclxudmFyIFdvcmRUcmFuc2xhdGlvbnMgPSBmdW5jdGlvbiAoY3VyQ29uZiA9IG51bGwsIG51bUNvbmYgPSBudWxsKSB7XHJcbiAgICB0aGlzLmN1ckNvbmYgPSB7XCJldXJcIjp7XCJuYW1lXCI6e1wibHZcIjpcImV1cm9cIixcInJ1XCI6XCJcXHUwNDE1XFx1MDQzMlxcdTA0NDBcXHUwNDNlXCIsXCJlblwiOlwiZXVyb1wifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiY2VudGlcIixcInJ1XCI6W1wiXFx1MDQ0NlxcdTA0MzVcXHUwNDNkXFx1MDQ0MlxcdTA0M2VcXHUwNDMyXCIsXCJcXHUwNDQ2XFx1MDQzNVxcdTA0M2RcXHUwNDQyXCIsXCJcXHUwNDQ2XFx1MDQzNVxcdTA0M2RcXHUwNDQyXFx1MDQzMFwiXSxcImVuXCI6XCJjZW50c1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJ1c2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcImRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MTRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImRvbGxhclwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiY2VudGlcIixcInJ1XCI6W1wiXFx1MDQ0NlxcdTA0MzVcXHUwNDNkXFx1MDQ0MlxcdTA0M2VcXHUwNDMyXCIsXCJcXHUwNDQ2XFx1MDQzNVxcdTA0M2RcXHUwNDQyXCIsXCJcXHUwNDQ2XFx1MDQzNVxcdTA0M2RcXHUwNDQyXFx1MDQzMFwiXSxcImVuXCI6XCJjZW50c1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJnYnBcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkxpZWxicml0XFx1MDEwMW5pamFzIG1cXHUwMTAxcmNpXFx1MDE0NmFcIixcInJ1XCI6XCJcXHUwNDEwXFx1MDQzZFxcdTA0MzNcXHUwNDNiXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDQzXFx1MDQzZFxcdTA0NDIgXFx1MDQ0MVxcdTA0NDJcXHUwNDM1XFx1MDQ0MFxcdTA0M2JcXHUwNDM4XFx1MDQzZFxcdTA0MzNcXHUwNDNlXFx1MDQzMlwiLFwiZW5cIjpcImJyaXRpc2ggcG91bmRcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcInBlbmlcIixcInJ1XCI6XCJcXHUwNDNmXFx1MDQzNVxcdTA0M2RcXHUwNDM4XCIsXCJlblwiOlwicGVuY2VcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwicnViXCI6e1wibmFtZVwiOntcImx2XCI6XCJLcmlldmlqYXMgcnVibGlzXCIsXCJydVwiOlwiXFx1MDQyMFxcdTA0M2VcXHUwNDQxXFx1MDQ0MVxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQ0M1xcdTA0MzFcXHUwNDNiXFx1MDQ0Y1wiLFwiZW5cIjpcInJ1c3NpYW4gcnVibGVcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcImthcGVpa1xcdTAxMDFzXCIsXCJydVwiOltcIlxcdTA0M2FcXHUwNDNlXFx1MDQzZlxcdTA0MzVcXHUwNDM1XFx1MDQzYVwiLFwiXFx1MDQzYVxcdTA0M2VcXHUwNDNmXFx1MDQzNVxcdTA0MzlcXHUwNDNhXFx1MDQzMFwiLFwiXFx1MDQzYVxcdTA0M2VcXHUwNDNmXFx1MDQzNVxcdTA0MzlcXHUwNDNhXFx1MDQzOFwiXSxcImVuXCI6XCJrb3Bla3NcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwicGxuXCI6e1wibmFtZVwiOntcImx2XCI6XCJQb2xpamFzIHpsb3RzXCIsXCJydVwiOlwiXFx1MDQxZlxcdTA0M2VcXHUwNDNiXFx1MDQ0Y1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzN1xcdTA0M2JcXHUwNDNlXFx1MDQ0MlxcdTA0NGJcXHUwNDM5XCIsXCJlblwiOlwicG9saXNoIHpsb3R5XCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJncm9cXHUwMTYxaVwiLFwicnVcIjpcIlxcdTA0MzNcXHUwNDQwXFx1MDQzZVxcdTA0NDhcIixcImVuXCI6XCJncm9zelwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJrenRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkthemFoc3RcXHUwMTAxbmFzIHRlbmdlXCIsXCJydVwiOlwiXFx1MDQxYVxcdTA0MzBcXHUwNDM3XFx1MDQzMFxcdTA0NDVcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQyXFx1MDQzNVxcdTA0M2RcXHUwNDMzXFx1MDQzNVwiLFwiZW5cIjpcImthemFraHN0YW4gdGVuZ2VcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcInRpalxcdTAxMmJuaVwiLFwicnVcIjpcIlxcdTA0NDJcXHUwNDM4XFx1MDQ0YlxcdTA0M2RcIixcImVuXCI6XCJ0XFx1MDEzMXluc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJjaGZcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxNjB2ZWljZXMgZnJhbmtzXCIsXCJydVwiOlwiXFx1MDQyOFxcdTA0MzJcXHUwNDM1XFx1MDQzOVxcdTA0NDZcXHUwNDMwXFx1MDQ0MFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0NDBcXHUwNDMwXFx1MDQzZFxcdTA0M2FcIixcImVuXCI6XCJzd2lzcyBmcmFuY1wifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwicmFwZW5pXCIsXCJydVwiOltcIlxcdTA0NDBcXHUwNDMwXFx1MDQzZlxcdTA0M2ZcXHUwNDM1XFx1MDQzZFxcdTA0M2VcXHUwNDMyXCIsXCJcXHUwNDQwXFx1MDQzMFxcdTA0M2ZcXHUwNDNmXFx1MDQzNVxcdTA0M2RcIixcIlxcdTA0NDBcXHUwNDMwXFx1MDQzZlxcdTA0M2ZcXHUwNDM1XFx1MDQzZFxcdTA0MzBcIl0sXCJlblwiOlwicmFwcGVuc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJhZWRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkFwdmllbm90byBBclxcdTAxMDFidSBFbWlyXFx1MDEwMXR1IGRpcmhhbXNcIixcInJ1XCI6XCJcXHUwNDE0XFx1MDQzOFxcdTA0NDBcXHUwNDQ1XFx1MDQzMFxcdTA0M2MgXFx1MDQxZVxcdTA0MTBcXHUwNDJkXCIsXCJlblwiOlwidW5pdGVkIGFyYWIgZW1pcmF0ZXMgZGlyaGFtXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJmaWxpXCIsXCJydVwiOlwiXFx1MDQ0NFxcdTA0MzhcXHUwNDNiXFx1MDQ0MVwiLFwiZW5cIjpcImZpbHNcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiZGtrXCI6e1wibmFtZVwiOntcImx2XCI6XCJEXFx1MDEwMW5pamFzIGtyb25hXCIsXCJydVwiOlwiXFx1MDQxNFxcdTA0MzBcXHUwNDQyXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0MFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcImRhbmlzaCBrcm9uZVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiXFx1MDExM3JpXCIsXCJydVwiOlwiXFx1MDQ0ZFxcdTA0NDBcXHUwNDM1XCIsXCJlblwiOlwib3JlXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJzZWtcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlp2aWVkcmlqYXMga3JvbmFcIixcInJ1XCI6XCJcXHUwNDI4XFx1MDQzMlxcdTA0MzVcXHUwNDM0XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0MFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcInN3ZWRpc2gga3JvbmFcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcIlxcdTAxMTNyaVwiLFwicnVcIjpcIlxcdTA0NGRcXHUwNDQwXFx1MDQzNVwiLFwiZW5cIjpcIm9yZVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwibm9rXCI6e1wibmFtZVwiOntcImx2XCI6XCJOb3J2XFx1MDExM1xcdTAxMjNpamFzIGtyb25hXCIsXCJydVwiOlwiXFx1MDQxZFxcdTA0M2VcXHUwNDQwXFx1MDQzMlxcdTA0MzVcXHUwNDM2XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0MFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcIm5vcndlZ2lhbiBrcm9uZVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiXFx1MDExM3JpXCIsXCJydVwiOlwiXFx1MDQ0ZFxcdTA0NDBcXHUwNDM1XCIsXCJlblwiOlwib3JlXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJiZ25cIjp7XCJuYW1lXCI6e1wibHZcIjpcIkJ1bGdcXHUwMTAxcmlqYXMgbGV2YVwiLFwicnVcIjpcIlxcdTA0MTFcXHUwNDNlXFx1MDQzYlxcdTA0MzNcXHUwNDMwXFx1MDQ0MFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzVcXHUwNDMyXCIsXCJlblwiOlwiYnVsZ2FyaWFuIGxldlwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJodWZcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlVuZ1xcdTAxMDFyaWphcyBmb3JpbnRzXCIsXCJydVwiOlwiXFx1MDQzMlxcdTA0MzVcXHUwNDNkXFx1MDQzM1xcdTA0MzVcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ0XFx1MDQzZVxcdTA0NDBcXHUwNDM4XFx1MDQzZFxcdTA0NDJcIixcImVuXCI6XCJodW5nYXJpYW4gZm9yaW50XCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInRyeVwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVHVyY2lqYXMgbGlyYVwiLFwicnVcIjpcIlxcdTA0MjJcXHUwNDQzXFx1MDQ0MFxcdTA0MzVcXHUwNDQ2XFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2JcXHUwNDM4XFx1MDQ0MFxcdTA0MzBcIixcImVuXCI6XCJ0dXJraXNoIGxpcmFcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImFsbFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQWxiXFx1MDEwMW5pamFzIGxla3NcIixcInJ1XCI6XCJcXHUwNDEwXFx1MDQzYlxcdTA0MzFcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzVcXHUwNDNhXCIsXCJlblwiOlwiYWxiYW5pYW4gbGVrXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImhya1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiSG9ydlxcdTAxMDF0aWphcyBrdW5hXCIsXCJydVwiOlwiWFxcdTA0M2VcXHUwNDQwXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0M1xcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwiY3JvYXRpYW4ga3VuYVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiY3prXCI6e1wibmFtZVwiOntcImx2XCI6XCJcXHUwMTBjZWhpamFzIGtyb25hXCIsXCJydVwiOlwiXFx1MDQyN1xcdTA0MzVcXHUwNDQ4XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0MFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcImN6ZWNoIGtvcnVuYVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiZ2VsXCI6e1wibmFtZVwiOntcImx2XCI6XCJHcnV6aWphcyBsYXJpXCIsXCJydVwiOlwiXFx1MDQxM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0MzhcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDNiXFx1MDQzMFxcdTA0NDBcXHUwNDM4XCIsXCJlblwiOlwiZ2VvcmdpYW4gbGFyaVwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJsa3JcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxNjByaWxhbmthcyByXFx1MDE2YnBpamFcIixcInJ1XCI6XCJcXHUwNDI4XFx1MDQ0MFxcdTA0MzgtXFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzYVxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDQwXFx1MDQ0M1xcdTA0M2ZcXHUwNDM4XFx1MDQ0ZlwiLFwiZW5cIjpcInNyaSBsYW5rYW4gcnVwZWVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcInRuZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVHVuaXNpamFzIGRpblxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MjJcXHUwNDQzXFx1MDQzZFxcdTA0MzhcXHUwNDQxXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzOFxcdTA0M2RcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcInR1bmlzaWFuIGRpbmFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImlsc1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiSXpyYVxcdTAxMTNsYXMgXFx1MDE2MWVrZWxzXCIsXCJydVwiOlwiXFx1MDQxOFxcdTA0MzdcXHUwNDQwXFx1MDQzMFxcdTA0MzhcXHUwNDNiXFx1MDQ0Y1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0OFxcdTA0MzVcXHUwNDNhXFx1MDQzNVxcdTA0M2JcXHUwNDRjXCIsXCJlblwiOlwiaXNyYWVsaSBzaGVxZWxcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiam9kXCI6e1wibmFtZVwiOntcImx2XCI6XCJKb3JkXFx1MDEwMW5pamFzIGRpblxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MThcXHUwNDNlXFx1MDQ0MFxcdTA0MzRcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJqb3JkYW5pYW4gZGluYXJcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiYnluXCI6e1wibmFtZVwiOntcImx2XCI6XCJCYWx0a3JpZXZpamFzIHJ1Ymxpc1wiLFwicnVcIjpcIlxcdTA0MTFcXHUwNDM1XFx1MDQzYlxcdTA0M2VcXHUwNDQwXFx1MDQ0M1xcdTA0NDFcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDBcXHUwNDQzXFx1MDQzMVxcdTA0M2JcXHUwNDRjXCIsXCJlblwiOlwiYmVsYXJ1c2lhbiBuZXcgcnVibGVcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcImthcGVpa1xcdTAxMDFzXCIsXCJydVwiOltcIlxcdTA0M2FcXHUwNDNlXFx1MDQzZlxcdTA0MzVcXHUwNDM1XFx1MDQzYVwiLFwiXFx1MDQzYVxcdTA0M2VcXHUwNDNmXFx1MDQzNVxcdTA0MzlcXHUwNDNhXFx1MDQzMFwiLFwiXFx1MDQzYVxcdTA0M2VcXHUwNDNmXFx1MDQzNVxcdTA0MzlcXHUwNDNhXFx1MDQzOFwiXSxcImVuXCI6XCJrb3Bla3NcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiZWdwXCI6e1wibmFtZVwiOntcImx2XCI6XCJcXHUwMTEyXFx1MDEyM2lwdGVzIG1cXHUwMTAxcmNpXFx1MDE0NmFcIixcInJ1XCI6XCJcXHUwNDE1XFx1MDQzM1xcdTA0MzhcXHUwNDNmXFx1MDQzNVxcdTA0NDJcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDQzXFx1MDQzZFxcdTA0NDJcIixcImVuXCI6XCJlZ3lwdGlhbiBwb3VuZFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJ1YWhcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlVrcmFpbmFzIGdyaXZuYVwiLFwicnVcIjpcIlxcdTA0MjNcXHUwNDNhXFx1MDQ0MFxcdTA0MzBcXHUwNDM4XFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzM1xcdTA0NDBcXHUwNDM4XFx1MDQzMlxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwidWtyYWluaWFuIGhyeXZuaWFcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImNueVwiOntcIm5hbWVcIjp7XCJsdlwiOlwiXFx1MDEzNlxcdTAxMmJuYXMganVhXFx1MDE0NmFcIixcInJ1XCI6XCJcXHUwNDFhXFx1MDQzOFxcdTA0NDJcXHUwNDMwXFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0ZVxcdTA0MzBcXHUwNDNkXFx1MDQ0Y1wiLFwiZW5cIjpcImNoaW5lc2UgeXVhblwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJ0aGJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlRhaXplbWVzIGJhdHNcIixcInJ1XCI6XCJcXHUwNDIyXFx1MDQzMFxcdTA0MzhcXHUwNDNiXFx1MDQzMFxcdTA0M2RcXHUwNDM0XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDMxXFx1MDQzMFxcdTA0NDJcIixcImVuXCI6XCJ0aGFpIGJhaHRcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwidm5kXCI6e1wibmFtZVwiOntcImx2XCI6XCJWamV0bmFtYXMgZG9uZ3NcIixcInJ1XCI6XCJcXHUwNDEyXFx1MDQ0Y1xcdTA0MzVcXHUwNDQyXFx1MDQzZFxcdTA0MzBcXHUwNDNjXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2RcXHUwNDMzXCIsXCJlblwiOlwidmlldG5hbWVzZSBkb25nXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInBocFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiRmlsaXBcXHUwMTJibnUgcGVzb1wiLFwicnVcIjpcIlxcdTA0MjRcXHUwNDM4XFx1MDQzYlxcdTA0MzhcXHUwNDNmXFx1MDQzZlxcdTA0MzhcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDNlXFx1MDQzNSBcXHUwNDNmXFx1MDQzNVxcdTA0NDFcXHUwNDNlXCIsXCJlblwiOlwicGhpbGlwcGluZSBwZXNvXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcIm1hZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiTWFyb2thcyBkaXJoYW1zXCIsXCJydVwiOlwiXFx1MDQxY1xcdTA0MzBcXHUwNDQwXFx1MDQzZVxcdTA0M2FcXHUwNDNhXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQ0MFxcdTA0NDVcXHUwNDMwXFx1MDQzY1wiLFwiZW5cIjpcIm1vcm9jY2FuIGRpcmhhbVwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJhdWRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkF1c3RyXFx1MDEwMWxpamFzIGRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDMyXFx1MDQ0MVxcdTA0NDJcXHUwNDQwXFx1MDQzMFxcdTA0M2JcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwiYXVzdHJhbGlhbiBkb2xsYXJcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiYXJzXCI6e1wibmFtZVwiOntcImx2XCI6XCJBcmdlbnRcXHUwMTJibmFzIHBlc29cIixcInJ1XCI6XCJcXHUwNDEwXFx1MDQ0MFxcdTA0MzNcXHUwNDM1XFx1MDQzZFxcdTA0NDJcXHUwNDM4XFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzZVxcdTA0MzUgXFx1MDQzZlxcdTA0MzVcXHUwNDQxXFx1MDQzZVwiLFwiZW5cIjpcImFyZ2VudGluZSBwZXNvXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImpweVwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSmFwXFx1MDEwMW5hcyBqXFx1MDExM25hXCIsXCJydVwiOlwiXFx1MDQyZlxcdTA0M2ZcXHUwNDNlXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzOFxcdTA0MzVcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcImphcGFuZXNlIHllblwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiaWRyXCI6e1wibmFtZVwiOntcImx2XCI6XCJJbmRvblxcdTAxMTN6aWphcyByXFx1MDE2YnBpamFcIixcInJ1XCI6XCJcXHUwNDE4XFx1MDQzZFxcdTA0MzRcXHUwNDNlXFx1MDQzZFxcdTA0MzVcXHUwNDM3XFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0NDBcXHUwNDQzXFx1MDQzZlxcdTA0MzhcXHUwNDRmXCIsXCJlblwiOlwiaW5kb25lc2lhbiBydXBpYWhcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImlza1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiSXNsYW5kZXMga3JvbmFcIixcInJ1XCI6XCJcXHUwNDE4XFx1MDQ0MVxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwiaWNlbGFuZCBrcm9uYVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiYW1kXCI6e1wibmFtZVwiOntcImx2XCI6XCJBcm1cXHUwMTEzbmlqYXMgZHJhbXNcIixcInJ1XCI6XCJcXHUwNDEwXFx1MDQ0MFxcdTA0M2NcXHUwNDRmXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0NDBcXHUwNDMwXFx1MDQzY1wiLFwiZW5cIjpcImFybWVuaWFuIGRyYW1cIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwicm9uXCI6e1wibmFtZVwiOntcImx2XCI6XCJSdW1cXHUwMTAxbmlqYXMgbGVqYVwiLFwicnVcIjpcIlxcdTA0MjBcXHUwNDQzXFx1MDQzY1xcdTA0NGJcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNiXFx1MDQzNVxcdTA0NGZcIixcImVuXCI6XCJyb21hbmlhbiBsZXVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcInNnZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiU2luZ2FwXFx1MDE2YnJhcyBkb2xcXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDIxXFx1MDQzOFxcdTA0M2RcXHUwNDMzXFx1MDQzMFxcdTA0M2ZcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwic2luZ2Fwb3JlIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJzYnBcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlNrb3RpamFzIG1cXHUwMTAxcmNpXFx1MDE0NmFcIixcInJ1XCI6XCJcXHUwNDI4XFx1MDQzZVxcdTA0NDJcXHUwNDNiXFx1MDQzMFxcdTA0M2RcXHUwNDM0XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ0XFx1MDQ0M1xcdTA0M2RcXHUwNDQyXCIsXCJlblwiOlwic2NvdHRpc2ggcG91bmRcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiY2FkXCI6e1wibmFtZVwiOntcImx2XCI6XCJLYW5cXHUwMTAxZGFzIGRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MWFcXHUwNDMwXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJjYW5hZGlhbiBkb2xsYXJcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiYnJsXCI6e1wibmFtZVwiOntcImx2XCI6XCJCcmF6XFx1MDEyYmxpamFzIHJlXFx1MDEwMWxzXCIsXCJydVwiOlwiXFx1MDQxMVxcdTA0NDBcXHUwNDMwXFx1MDQzN1xcdTA0MzhcXHUwNDNiXFx1MDQ0Y1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0MzVcXHUwNDMwXFx1MDQzYlwiLFwiZW5cIjpcImJyYXppbGlhbiByZWFsXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInphclwiOntcIm5hbWVcIjp7XCJsdlwiOlwiRGllbnZpZFxcdTAxMDFmcmlrYXMgcmVuZHNcIixcInJ1XCI6XCJcXHUwNDJlXFx1MDQzNlxcdTA0M2RcXHUwNDNlXFx1MDQzMFxcdTA0NDRcXHUwNDQwXFx1MDQzOFxcdTA0M2FcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0NGRcXHUwNDNkXFx1MDQzNFwiLFwiZW5cIjpcInNvdXRoIGFmcmljYW4gcmFuZFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJpbnJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkluZGlqYXMgclxcdTAxNmJwaWphXCIsXCJydVwiOlwiXFx1MDQxOFxcdTA0M2RcXHUwNDM0XFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0NDBcXHUwNDQzXFx1MDQzZlxcdTA0MzhcXHUwNDRmXCIsXCJlblwiOlwiaW5kaWFuIHJ1cGVlXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJyc2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlNlcmJpamFzIGRpblxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MjFcXHUwNDM1XFx1MDQ0MFxcdTA0MzFcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwic2VyYmlhbiBkaW5hclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJuemRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkphdW56XFx1MDExM2xhbmRlcyBkb2xcXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDFkXFx1MDQzZVxcdTA0MzJcXHUwNDNlXFx1MDQzN1xcdTA0MzVcXHUwNDNiXFx1MDQzMFxcdTA0M2RcXHUwNDM0XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJuZXcgemVhbGFuZCBkb2xsYXJcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibXlyXCI6e1wibmFtZVwiOntcImx2XCI6XCJNYWxhaXppamFzIHJpbmdpdHNcIixcInJ1XCI6XCJNXFx1MDQzMFxcdTA0M2JcXHUwNDMwXFx1MDQzOVxcdTA0MzdcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0MzhcXHUwNDNkXFx1MDQzM1xcdTA0MzNcXHUwNDM4XFx1MDQ0MlwiLFwiZW5cIjpcIm1hbGF5c2lhbiByaW5nZ2l0XCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcIm11clwiOntcIm5hbWVcIjp7XCJsdlwiOlwiTWF1clxcdTAxMmJjaWphcyBzYWxhcyByXFx1MDE2YnBpamFcIixcInJ1XCI6XCJcXHUwNDFjXFx1MDQzMFxcdTA0MzJcXHUwNDQwXFx1MDQzOFxcdTA0M2FcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQ0MFxcdTA0NDNcXHUwNDNmXFx1MDQzOFxcdTA0NGZcIixcImVuXCI6XCJtYXVyaXRpYW4gcnVwZWVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImhrZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSG9ua29uZ2FzIGRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MTNcXHUwNDNlXFx1MDQzZFxcdTA0M2FcXHUwNDNlXFx1MDQzZFxcdTA0MzNcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImhvbmcga29uZyBkb2xsYXJcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwia3J3XCI6e1wibmFtZVwiOntcImx2XCI6XCJEaWVudmlka29yZWphcyB2b25hXCIsXCJydVwiOlwiXFx1MDQyZVxcdTA0MzZcXHUwNDNkXFx1MDQzZVxcdTA0M2FcXHUwNDNlXFx1MDQ0MFxcdTA0MzVcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDMyXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwic291dGgga29yZWFuIHdvblwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwibXhuXCI6e1wibmFtZVwiOntcImx2XCI6XCJNZWtzaWthcyBwZXNvXCIsXCJydVwiOlwiXFx1MDQxY1xcdTA0MzVcXHUwNDNhXFx1MDQ0MVxcdTA0MzhcXHUwNDNhXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcImVuXCI6XCJtZXhpY2FuIHBlc29cIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibWtkXCI6e1wibmFtZVwiOntcImx2XCI6XCJNYVxcdTAxMzdlZG9uaWphcyBkZW5cXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDFjXFx1MDQzMFxcdTA0M2FcXHUwNDM1XFx1MDQzNFxcdTA0M2VcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzOFxcdTA0M2RcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcIm1hY2Vkb25pYW4gZGluYXJcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiZG9wXCI6e1wibmFtZVwiOntcImx2XCI6XCJEb21pbmlrXFx1MDEwMW5hcyBwZXNvXCIsXCJydVwiOlwiXFx1MDQxNFxcdTA0M2VcXHUwNDNjXFx1MDQzOFxcdTA0M2RcXHUwNDM4XFx1MDQzYVxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDNlXFx1MDQzNSBcXHUwNDNmXFx1MDQzNVxcdTA0NDFcXHUwNDNlXCIsXCJlblwiOlwiZG9taW5pY2FuIHBlc29cIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwia2VzXCI6e1wibmFtZVwiOntcImx2XCI6XCJLZW5pamFzIFxcdTAxNjFpbGlcXHUwMTQ2XFx1MDE2MVwiLFwicnVcIjpcIlxcdTA0MWFcXHUwNDM1XFx1MDQzZFxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ4XFx1MDQzOFxcdTA0M2JcXHUwNDNiXFx1MDQzOFxcdTA0M2RcXHUwNDMzXCIsXCJlblwiOlwia2VueWEgc2hpbGxpbmdcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiZGVtXCI6e1wibmFtZVwiOntcImx2XCI6XCJWXFx1MDEwMWNpamFzIG1hcmthXCIsXCJydVwiOlwiXFx1MDQxZFxcdTA0MzVcXHUwNDNjXFx1MDQzNVxcdTA0NDZcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzY1xcdTA0MzBcXHUwNDQwXFx1MDQzYVxcdTA0MzBcIixcImVuXCI6XCJnZXJtYW4gbWFya1wifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiZWVrXCI6e1wibmFtZVwiOntcImx2XCI6XCJJZ2F1bmlqYXMga3JvbmFcIixcInJ1XCI6XCJcXHUwNDJkXFx1MDQ0MVxcdTA0NDJcXHUwNDNlXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJlc3RvbmlhbiBrcm9vblwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwibHRsXCI6e1wibmFtZVwiOntcImx2XCI6XCJMaWV0dXZhcyBsaXRzXCIsXCJydVwiOlwiXFx1MDQxYlxcdTA0MzhcXHUwNDQyXFx1MDQzZVxcdTA0MzJcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDM4XFx1MDQ0MlwiLFwiZW5cIjpcImxpdGh1YW5pYW4gbGl0YXNcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibHZsXCI6e1wibmFtZVwiOntcImx2XCI6XCJMYXR2aWphcyBsYXRzXCIsXCJydVwiOlwiXFx1MDQxYlxcdTA0MzBcXHUwNDQyXFx1MDQzMlxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDNiXFx1MDQzMFxcdTA0NDJcIixcImVuXCI6XCJsYXR2aWFuIGxhdHNcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcInNhbnRpbWlcIixcInJ1XCI6W1wiXFx1MDQ0MVxcdTA0MzBcXHUwNDNkXFx1MDQ0MlxcdTA0MzhcXHUwNDNjXFx1MDQzZVxcdTA0MzJcIixcIlxcdTA0NDFcXHUwNDMwXFx1MDQzZFxcdTA0NDJcXHUwNDM4XFx1MDQzY1wiLFwiXFx1MDQ0MVxcdTA0MzBcXHUwNDNkXFx1MDQ0MlxcdTA0MzhcXHUwNDNjXFx1MDQzZVxcdTA0MzJcIl0sXCJlblwiOlwic2FudGltc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX19O1xyXG4gICAgdGhpcy5udW1Db25mID0ge1widW5pdHNcIjp7XCJsdlwiOltcIlwiLFwidmllbnNcIixcImRpdmlcIixcInRyXFx1MDEyYnNcIixcIlxcdTAxMGRldHJpXCIsXCJwaWVjaVwiLFwic2VcXHUwMTYxaVwiLFwic2VwdGlcXHUwMTQ2aVwiLFwiYXN0b1xcdTAxNDZpXCIsXCJkZXZpXFx1MDE0NmlcIl0sXCJydVwiOltcIlwiLFtcIlxcdTA0M2VcXHUwNDM0XFx1MDQzOFxcdTA0M2RcIixcIlxcdTA0M2VcXHUwNDM0XFx1MDQzZFxcdTA0MzBcIl0sW1wiXFx1MDQzNFxcdTA0MzJcXHUwNDMwXCIsXCJcXHUwNDM0XFx1MDQzMlxcdTA0MzVcIl0sXCJcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcIixcIlxcdTA0NDdcXHUwNDM1XFx1MDQ0MlxcdTA0NGJcXHUwNDQwXFx1MDQzNVwiLFwiXFx1MDQzZlxcdTA0NGZcXHUwNDQyXFx1MDQ0Y1wiLFwiXFx1MDQ0OFxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0NGNcIixcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcIixcIlxcdTA0MzJcXHUwNDNlXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQ0Y1wiLFwiXFx1MDQzNFxcdTA0MzVcXHUwNDMyXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXCJdfSxcInRlZW5zXCI6e1wibHZcIjp7XCIxMFwiOlwiZGVzbWl0XCIsXCIxMVwiOlwidmllbnBhZHNtaXRcIixcIjEyXCI6XCJkaXZwYWRzbWl0XCIsXCIxM1wiOlwidHJcXHUwMTJic3BhZHNtaXRcIixcIjE0XCI6XCJcXHUwMTBkZXRycGFkc21pdFwiLFwiMTVcIjpcInBpZWNwYWRzbWl0XCIsXCIxNlwiOlwic2VcXHUwMTYxcGFkc21pdFwiLFwiMTdcIjpcInNlcHRpXFx1MDE0NnBhZHNtaXRcIixcIjE4XCI6XCJhc3RvXFx1MDE0NnBhZHNtaXRcIixcIjE5XCI6XCJkZXZpXFx1MDE0NnBhZHNtaXRcIn0sXCJydVwiOntcIjEwXCI6XCJcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlxcdTA0NGNcIixcIjExXCI6XCJcXHUwNDNlXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMTJcIjpcIlxcdTA0MzRcXHUwNDMyXFx1MDQzNVxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjEzXCI6XCJcXHUwNDQyXFx1MDQ0MFxcdTA0MzVcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxNFwiOlwiXFx1MDQ0N1xcdTA0MzVcXHUwNDQyXFx1MDQ0YlxcdTA0NDBcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxNVwiOlwiXFx1MDQzZlxcdTA0NGZcXHUwNDQyXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMTZcIjpcIlxcdTA0NDhcXHUwNDM1XFx1MDQ0MVxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjE3XCI6XCJcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxOFwiOlwiXFx1MDQzMlxcdTA0M2VcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxOVwiOlwiXFx1MDQzNFxcdTA0MzVcXHUwNDMyXFx1MDQ0ZlxcdTA0NDJcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCJ9fSxcInRlbm5lcnNcIjp7XCJsdlwiOntcIjJcIjpcImRpdmRlc21pdFwiLFwiM1wiOlwidHJcXHUwMTJic2Rlc21pdFwiLFwiNFwiOlwiXFx1MDEwZGV0cmRlc21pdFwiLFwiNVwiOlwicGllY2Rlc21pdFwiLFwiNlwiOlwic2VcXHUwMTYxZGVzbWl0XCIsXCI3XCI6XCJzZXB0aVxcdTAxNDZkZXNtaXRcIixcIjhcIjpcImFzdG9cXHUwMTQ2ZGVzbWl0XCIsXCI5XCI6XCJkZXZpXFx1MDE0NmRlc21pdFwifSxcInJ1XCI6e1wiMlwiOlwiXFx1MDQzNFxcdTA0MzJcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjNcIjpcIlxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCI0XCI6XCJcXHUwNDQxXFx1MDQzZVxcdTA0NDBcXHUwNDNlXFx1MDQzYVwiLFwiNVwiOlwiXFx1MDQzZlxcdTA0NGZcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcIjZcIjpcIlxcdTA0NDhcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcIjdcIjpcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlwiLFwiOFwiOlwiXFx1MDQzMlxcdTA0M2VcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcIjlcIjpcIlxcdTA0MzRcXHUwNDM1XFx1MDQzMlxcdTA0NGZcXHUwNDNkXFx1MDQzZVxcdTA0NDFcXHUwNDQyXFx1MDQzZVwifX0sXCJodW5kcmVkc1wiOntcInJ1XCI6e1wiXCI6XCJcIixcIjBcIjpcIlwiLFwiMVwiOlwiXFx1MDQ0MVxcdTA0NDJcXHUwNDNlXCIsXCIyXCI6XCJcXHUwNDM0XFx1MDQzMlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcIixcIjNcIjpcIlxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQzMFwiLFwiNFwiOlwiXFx1MDQ0N1xcdTA0MzVcXHUwNDQyXFx1MDQ0YlxcdTA0NDBcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXCIsXCI1XCI6XCJcXHUwNDNmXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXFx1MDQ0MVxcdTA0M2VcXHUwNDQyXCIsXCI2XCI6XCJcXHUwNDQ4XFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQ0Y1xcdTA0NDFcXHUwNDNlXFx1MDQ0MlwiLFwiN1wiOlwiXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQ0Y1xcdTA0NDFcXHUwNDNlXFx1MDQ0MlwiLFwiOFwiOlwiXFx1MDQzMlxcdTA0M2VcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXFx1MDQ0MVxcdTA0M2VcXHUwNDQyXCIsXCI5XCI6XCJcXHUwNDM0XFx1MDQzNVxcdTA0MzJcXHUwNDRmXFx1MDQ0MlxcdTA0NGNcXHUwNDQxXFx1MDQzZVxcdTA0NDJcIn19fTtcclxuICAgIGlmIChjdXJDb25mKSB7XHJcbiAgICAgICAgdGhpcy5jdXJDb25mID0gY3VyQ29uZjtcclxuICAgIH1cclxuICAgIGlmIChudW1Db25mKSB7XHJcbiAgICAgICAgdGhpcy5jdXJDb25mID0gbnVtQ29uZjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29uZk5hbWVzID0ge307XHJcbiAgICB2YXIgY29uZkh1bmQgPSB7fTtcclxuICAgIGZvciAodmFyIGNvZGUgaW4gdGhpcy5jdXJDb25mKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyQ29uZltjb2RlXVsnbmFtZSddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbGFuZyBpbiB0aGlzLmN1ckNvbmZbY29kZV1bJ25hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZOYW1lc1tsYW5nXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZk5hbWVzW2xhbmddID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25mTmFtZXNbbGFuZ11bY29kZV0gPSB0aGlzLmN1ckNvbmZbY29kZV1bJ25hbWUnXVtsYW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXJDb25mW2NvZGVdWydodW5kcmVkdGhzJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxhbmcgaW4gdGhpcy5jdXJDb25mW2NvZGVdWydodW5kcmVkdGhzJ10pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25mSHVuZFtsYW5nXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZkh1bmRbbGFuZ10gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbmZIdW5kW2xhbmddW2NvZGVdID0gdGhpcy5jdXJDb25mW2NvZGVdWydodW5kcmVkdGhzJ11bbGFuZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbmN5THYgPSBjb25mTmFtZXMubHY7XHJcbiAgICB0aGlzLmh1bmRyZWR0aHNMdiA9IGNvbmZIdW5kLmx2O1xyXG4gICAgdGhpcy5jdXJyZW5jeVJ1ID0gY29uZk5hbWVzLnJ1O1xyXG4gICAgdGhpcy5odW5kcmVkdGhzUnUgPSBjb25mSHVuZC5ydTtcclxuICAgIHRoaXMuY3VycmVuY3lFbiA9IGNvbmZOYW1lcy5lbjtcclxuICAgIHRoaXMuaHVuZHJlZHRoc0VuID0gY29uZkh1bmQuZW47XHJcblxyXG4gICAgdGhpcy5vbmVIdW5kcmVkTHYgPSAndmllbnMgc2ltdHMnO1xyXG4gICAgdGhpcy5odW5kcmFkcyA9ICdzaW10aSc7XHJcbiAgICB0aGlzLmFuZHMgPSB7J2x2JzogJ3VuJywgJ2VuJzonYW5kJywgJ3J1Jzon0LgnfTtcclxuICAgIHRoaXMuY29tYXRzID0geydsdic6ICdrb21hdHMnLCAnZW4nOidjb21hJywgJ3J1Jzon0LrQvtC80LAnfTtcclxuICAgIHRoaXMubnVsbGUgPSB7J2x2JzogJ251bGxlJywgJ3J1Jzon0L3QvtC70YwnfTtcclxuXHJcbiAgICB0aGlzLmJpZ051bXMgPSB7XHJcbiAgICAgICAgJzMnOiB7XHJcbiAgICAgICAgICAgICdydSc6IFsn0YLRi9GB0Y/Rh9CwJywgJ9GC0YvRgdGP0YcnLCAn0YLRi9GB0Y/Rh9C4J10sXHJcbiAgICAgICAgICAgICdsdic6IFsndMWra3N0b3RpcycsICd0xatrc3RvxaFpJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICc2Jzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9C80LjQu9C70LjQvtC9JywgJ9C80LjQu9C70LjQvtC90L7QsicsICfQvNC40LvQu9C40L7QvdCwJ10sXHJcbiAgICAgICAgICAgICdsdic6IFsnbWlsam9ucycsICdtaWxqb25pJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICc5Jzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9C80LjQu9C70LjQsNGA0LQnLCAn0LzQuNC70LvQuNC+0L3QvtCyJywgJ9C80LjQu9C70LjQsNGA0LTQsCddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ21pbGphcmRzJywgJ21pbGphcmRpJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICcxMic6IHtcclxuICAgICAgICAgICAgJ3J1JzogWyfRgtGA0LjQu9C70LjQvtC9JywgJ9GC0YDQuNC70LvQuNC+0L3QvtCyJywgJ9GC0YDQuNC70LvQuNC+0L3QsCddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ3RyaWxqb25zJywgJ3RyaWxqb25pJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICcxNSc6IHtcclxuICAgICAgICAgICAgJ3J1JzogWyfQutCy0LDQtNGA0LjQu9C70LjQvtC9JywgJ9C60LLQsNC00YDQuNC70LvQuNC+0L3QvtCyJywgJ9C60LLQsNC00YDQuNC70LvQuNC+0L3QsCddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ2t2YWRyaWxqb25zJywgJ2t2YWRyaWxqb25pJ11cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRUcmFuc2xhdGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=