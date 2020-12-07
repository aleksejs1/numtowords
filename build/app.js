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

  console.log(sex);
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
        "ru": "\u0446\u0435\u043D\u0442\u043E\u0432",
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
        "ru": "\u0446\u0435\u043D\u0442\u043E\u0432",
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
        "ru": "\u043A\u043E\u043F\u0435\u0435\u043A",
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
        "ru": "\u0440\u0430\u043F\u043F\u0435\u043D\u043E\u0432",
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
        "ru": "\u043A\u043E\u043F\u0435\u0435\u043A",
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
        "ru": "\u0441\u0430\u043D\u0442\u0438\u043C\u043E\u0432",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJudW10b3dvcmRzIiwiTnVtVG9Xb3JkcyIsInVwZGF0ZUFsbCIsImN1cnJlbmN5IiwiJCIsInZhbCIsImxhbmciLCJudW0iLCJyZXMiLCJnZXRGdWxsIiwiaHRtbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZmFkZUluIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJzaG93SGVscCIsImhpZGUiLCJvbiIsInNlbCIsInZhbHMiLCJnZXRWYWxzIiwia2V5IiwidmFsYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwibGFuZ1ZhbHMiLCJjaGVja2VkIiwidHJhbnNsYXRvciIsIlQyVyIsInRyYW5zbGF0aW9ucyIsIldvcmRUcmFuc2xhdGlvbnMiLCJwcm90b3R5cGUiLCJjdXJyZW5jeUx2IiwidW5pdHMiLCJudW1lcmljVW5pdCIsInBsdXJhbCIsIkFycmF5IiwiaXNBcnJheSIsIm51bUNvbmYiLCJ0ZW5uZXJzIiwibnVtZXJpY1RlbiIsInNleCIsInRlZW5zIiwiaHVuZHJlZHMiLCJudW1lcmljSHVuZHJlZCIsInJ1Iiwib25lSHVuZHJlZEx2IiwiaHVuZHJhZHMiLCJnZW5lcmljQ2FsbGVyIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJjYWxsIiwiYXJndW1lbnRzIiwic2hpZnQiLCJhcHBseSIsInVuaSIsImxlbiIsIm1pbGlvbmkiLCJzdWJzdHJpbmciLCJ0aG91c2FuZHNjaSIsIm1pbGpXb3JkIiwiYmlnTnVtcyIsInRvU3RyaW5nIiwiZ2V0UmVzdWx0IiwiY2VudCIsImV1ciIsInBvaW50IiwibGFzdEluZGV4T2YiLCJjb21hIiwicG9pbnRDb3VudCIsInNwbGl0IiwibGVuZ3RoIiwiY29tYUNvdW50Iiwic2VwIiwidW4iLCJhbmRzIiwiY29tYXRzIiwiY2VudGkiLCJyZXBsYWNlIiwiY2VudGkxIiwiY2VudGkyIiwib3JpZyIsInRvV29yZHMiLCJOdW1iZXIiLCJlIiwicmVwZWF0IiwidHJpbSIsIm51bGxlIiwiZWxlbWVudHMiLCJlbmRpbmdzUnUiLCJ0b0xvd2VyQ2FzZSIsIm51bWJlciIsImVuZGluZ3MiLCJlbmRpbmciLCJ2YWx1dGEiLCJlZGVuIiwic20iLCJjdXJyZW5jeUVuIiwiaHVuZHJlZHRoc0VuIiwiY3VycmVuY3lSdSIsImh1bmRyZWR0aHNSdSIsImN1ckNvbmYiLCJodW5kcmVkdGhzTHYiLCJjb25zb2xlIiwibG9nIiwic21yZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbmZOYW1lcyIsImNvbmZIdW5kIiwiY29kZSIsImx2IiwiZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsVUFBVSxHQUFHLElBQUlDLG1EQUFKLEVBQWpCOztBQUVBLFNBQVNDLFNBQVQsR0FBcUI7QUFDakIsTUFBSUMsUUFBUSxHQUFHQyw2Q0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxHQUFiLEVBQWY7QUFDQSxNQUFJQyxJQUFJLEdBQUdGLDZDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ0MsR0FBaEMsRUFBWDtBQUNBLE1BQUlFLEdBQUcsR0FBR0gsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUMsR0FBUixFQUFWO0FBQ0EsTUFBSUcsR0FBRyxHQUFHUixVQUFVLENBQUNTLE9BQVgsQ0FBbUJOLFFBQW5CLEVBQTZCRyxJQUE3QixFQUFtQ0MsR0FBbkMsQ0FBVjtBQUNBSCwrQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVTSxJQUFWLENBQWVGLEdBQWY7QUFDQUcsY0FB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QTNCLENBREo7QUFFRixZQUFNLENBQUMsVUFBRCxFQUFhLFVBQWI7QUFGSixLQWJLO0FBaUJYLFVBQU07QUFDRixZQUFNLENBQUMsYUFBRCxFQUFnQixlQUFoQixFQUFpQyxjQUFqQyxDQURKO0FBRUYsWUFBTSxDQUFDLGFBQUQsRUFBZ0IsYUFBaEI7QUFGSjtBQWpCSyxHQUFmO0FBc0JILENBakVEOztBQW1FZS9CLCtFQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCdcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgTnVtVG9Xb3JkcyBmcm9tIFwiLi9udW10b3dvcmRzXCI7XHJcblxyXG52YXIgbnVtdG93b3JkcyA9IG5ldyBOdW1Ub1dvcmRzKCk7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVBbGwoKSB7XHJcbiAgICB2YXIgY3VycmVuY3kgPSAkKFwiI3ZhbHV0YVwiKS52YWwoKTtcclxuICAgIHZhciBsYW5nID0gJCgnaW5wdXRbbmFtZT1cImxhbmdcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gICAgdmFyIG51bSA9ICQoXCIjY1wiKS52YWwoKTtcclxuICAgIHZhciByZXMgPSBudW10b3dvcmRzLmdldEZ1bGwoY3VycmVuY3ksIGxhbmcsIG51bSk7XHJcbiAgICAkKFwiI3Jlc1wiKS5odG1sKHJlcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29udmVydF9sYW5nJywgbGFuZyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29udmVydF9jdXJyZW5jeScsIGN1cnJlbmN5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weSgpIHtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCQoXCIjcmVzXCIpLmh0bWwoKSk7XHJcbiAgICAkKFwiI2FscnRcIikuZmFkZUluKCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyQoXCIjYWxydFwiKS5mYWRlT3V0KCk7fSwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dIZWxwKCkge1xyXG4gICAgJChcIiNoZWxwXCIpLmZhZGVJbigpO1xyXG4gICAgJChcIiNoZWxwLWJ0blwiKS5oaWRlKCk7XHJcbn1cclxuXHJcbiQoXCIjY1wiKS5vbigna2V5dXAnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY1wiKS5vbignY2xpY2snLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ3Bhc3RlJywgdXBkYXRlQWxsKTtcclxuJChcIiN2YWx1dGFcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9bGFuZ10nKS5vbignY2hhbmdlJywgdXBkYXRlQWxsKTtcclxuJChcIiNjb3B5LWJ0blwiKS5vbignY2xpY2snLCBjb3B5KTtcclxuJChcIiNoZWxwLWJ0blwiKS5vbignY2xpY2snLCBzaG93SGVscCk7XHJcblxyXG52YXIgc2VsID0gJyc7XHJcbnZhciB2YWxzID0gbnVtdG93b3Jkcy5nZXRWYWxzKCk7XHJcbmZvciAodmFyIGtleSBpbiB2YWxzKSB7XHJcbiAgICB2YXIgdmFsYSA9IHZhbHNba2V5XS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHNba2V5XS5zbGljZSgxKTtcclxuICAgIHNlbCA9IHNlbCArICc8b3B0aW9uIHZhbHVlPVwiJytrZXkrJ1wiPicra2V5LnRvVXBwZXJDYXNlKCkrJyAnK3ZhbGErJzwvb3B0aW9uPic7XHJcbn07XHJcbiQoXCIjdmFsdXRhXCIpLmh0bWwoc2VsKTtcclxudmFyIGxhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29udmVydF9sYW5nJyk7XHJcbmlmIChsYW5nICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHZhciBsYW5nVmFscyA9IHtcclxuICAgICAgICAnbHYnOiAwLFxyXG4gICAgICAgICdlbic6IDEsXHJcbiAgICAgICAgJ3J1JzogMlxyXG4gICAgfTtcclxuXHJcbiAgICAkKCdpbnB1dDpyYWRpb1tuYW1lPVwibGFuZ1wiXScpW2xhbmdWYWxzW2xhbmddXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICQoJ2lucHV0W25hbWU9XCJsYW5nXCJdOmNoZWNrZWQnKS52YWwoKTtcclxufVxyXG52YXIgY3VycmVuY3kgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29udmVydF9jdXJyZW5jeScpO1xyXG5pZiAoY3VycmVuY3kgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgJChcIiN2YWx1dGFcIikudmFsKGN1cnJlbmN5KTtcclxufVxyXG4iLCJpbXBvcnQgVDJXIGZyb20gXCJudW1iZXJzMndvcmRzXCI7XHJcbmltcG9ydCBXb3JkVHJhbnNsYXRpb25zIGZyb20gXCIuL3RyYW5zbGF0aW9uc1wiO1xyXG5cclxudmFyIE51bVRvV29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0b3IgPSBuZXcgVDJXKFwiRU5fVVNcIik7XHJcbiAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IG5ldyBXb3JkVHJhbnNsYXRpb25zKCk7XHJcbiAgICB0aGlzLmxhbmcgPSAnbHYnO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRWYWxzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5THY7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnVuaXRzID0gZnVuY3Rpb24gKG51bWVyaWNVbml0LCBwbHVyYWwgPSAwKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnVuaXRzW3RoaXMubGFuZ11bbnVtZXJpY1VuaXRdKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnVuaXRzW3RoaXMubGFuZ11bbnVtZXJpY1VuaXRdW3BsdXJhbF1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnVuaXRzW3RoaXMubGFuZ11bbnVtZXJpY1VuaXRdXHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnRlbm5lcnMgPSBmdW5jdGlvbiAobnVtZXJpY1Rlbiwgc2V4ID0gdHJ1ZSkge1xyXG4gICAgdmFyIHBsdXJhbCA9IDE7XHJcbiAgICBpZiAoc2V4KSB7XHJcbiAgICAgICAgcGx1cmFsID0gMDtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljVGVuWzBdID09PSBcIjBcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVuaXRzKG51bWVyaWNUZW5bMV0sIHBsdXJhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIxXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi50ZWVuc1t0aGlzLmxhbmddW251bWVyaWNUZW5dXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLm51bUNvbmYudGVubmVyc1t0aGlzLmxhbmddW251bWVyaWNUZW5bMF1dICsgXCIgXCIgKyB0aGlzLnVuaXRzKG51bWVyaWNUZW5bMV0sIHBsdXJhbClcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuaHVuZHJlZHMgPSBmdW5jdGlvbiAobnVtZXJpY0h1bmRyZWQsIHNleCA9IHRydWUpIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi5odW5kcmVkcy5ydVtudW1lcmljSHVuZHJlZFswXV0gKyAnICcgKyB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSwgc2V4KTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljSHVuZHJlZFswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0sIHNleCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY0h1bmRyZWRbMF0gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLm9uZUh1bmRyZWRMdiArICcgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaXRzKG51bWVyaWNIdW5kcmVkWzBdKSArICcgJyArIHRoaXMudHJhbnNsYXRpb25zLmh1bmRyYWRzICsgJyAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0sIHNleCk7XHJcbn1cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2VuZXJpY0NhbGxlciA9IGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcclxuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgYXJncy5zaGlmdCgpO1xyXG4gICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJncyk7XHJcbn07XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bmkgPSBmdW5jdGlvbiAobnVtLCBsZW4sIHNleCA9ICdoZScpIHtcclxuICAgIGlmIChsZW4gPT09IDMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmljQ2FsbGVyKCdodW5kcmVkcycsIG51bSwgc2V4ID09PSAnaGUnKTtcclxuICAgIH1cclxuICAgIHZhciBtaWxpb25pID0gbnVtLnN1YnN0cmluZygwLCAzKTtcclxuICAgIHZhciB0aG91c2FuZHNjaSA9IG51bS5zdWJzdHJpbmcoMywgbGVuKTtcclxuXHJcbiAgICBpZiAobWlsaW9uaSA9PT0gJzAwMCcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmljQ2FsbGVyKCd1bmknLCB0aG91c2FuZHNjaSwgbGVuLTMsIHNleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1pbGpXb3JkID0gdGhpcy50cmFuc2xhdGlvbnMuYmlnTnVtc1sobGVuIC0gMykudG9TdHJpbmcoKV1bdGhpcy5sYW5nXVsxXTtcclxuICAgIGlmIChtaWxpb25pWzJdID09PSBcIjFcIiAmJiBtaWxpb25pWzFdICE9PSBcIjFcIikge1xyXG4gICAgICAgIG1pbGpXb3JkID0gdGhpcy50cmFuc2xhdGlvbnMuYmlnTnVtc1sobGVuIC0gMykudG9TdHJpbmcoKV1bdGhpcy5sYW5nXVswXVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1JyAmJiBtaWxpb25pWzFdICE9PSBcIjFcIiAmJiAobWlsaW9uaVsyXSA9PT0gXCIyXCIgfHwgbWlsaW9uaVsyXSA9PT0gXCIzXCIgfHwgbWlsaW9uaVsyXSA9PT0gXCI0XCIpKSB7XHJcbiAgICAgICAgbWlsaldvcmQgPSB0aGlzLnRyYW5zbGF0aW9ucy5iaWdOdW1zWyhsZW4gLSAzKS50b1N0cmluZygpXVt0aGlzLmxhbmddWzJdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odW5kcmVkcyhtaWxpb25pLCAhKGxlbiA+PSA2ICYmIGxlbiA8IDkpKSArICcgJyttaWxqV29yZCsnICcgKyB0aGlzLmdlbmVyaWNDYWxsZXIoJ3VuaScsIHRob3VzYW5kc2NpLCBsZW4tMywgc2V4KTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0UmVzdWx0ID0gZnVuY3Rpb24gKG51bSwgY2VudCwgZXVyLCBzZXggPSAnaGUnKSB7XHJcbiAgICB2YXIgcG9pbnQgPSBudW0ubGFzdEluZGV4T2YoJy4nKTtcclxuICAgIHZhciBjb21hID0gbnVtLmxhc3RJbmRleE9mKCcsJyk7XHJcbiAgICB2YXIgcG9pbnRDb3VudCA9IChudW0uc3BsaXQoXCIuXCIpLmxlbmd0aCAtIDEpXHJcbiAgICB2YXIgY29tYUNvdW50ID0gKG51bS5zcGxpdChcIixcIikubGVuZ3RoIC0gMSlcclxuICAgIHZhciBzZXAgPSAtMTtcclxuICAgIGlmIChwb2ludCAhPT0gLTEgJiYgcG9pbnQgPiBjb21hICYmIHBvaW50Q291bnQgPT09IDEpIHtcclxuICAgICAgICB2YXIgc2VwID0gcG9pbnQ7XHJcbiAgICB9IGVsc2UgaWYgKGNvbWEgIT09IC0xICYmIGNvbWEgPiBwb2ludCAmJiBjb21hQ291bnQgPT09IDEpIHtcclxuICAgICAgICB2YXIgc2VwID0gY29tYTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbGVuZ3RoID0gbnVtLmxlbmd0aDtcclxuICAgIHZhciB1biA9IHRoaXMudHJhbnNsYXRpb25zLmFuZHNbdGhpcy5sYW5nXTtcclxuICAgIHZhciBjb21hdHMgPSB0aGlzLnRyYW5zbGF0aW9ucy5jb21hdHNbdGhpcy5sYW5nXTtcclxuICAgIHZhciBjZW50aSA9ICcgJyt1bisnIDAwICcgKyBjZW50O1xyXG4gICAgaWYgKHNlcCAhPT0gLTEpIHtcclxuICAgICAgICBjZW50aSA9IG51bS5zdWJzdHJpbmcoc2VwKzEsIGxlbmd0aCk7XHJcbiAgICAgICAgY2VudGkgPSBjZW50aS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIilcclxuICAgICAgICBudW0gPSBudW0uc3Vic3RyaW5nKDAsIHNlcCk7XHJcbiAgICAgICAgaWYgKGNlbnRpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnIDAwICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VudGkubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpKycwICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VudGkubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNlbnRpMSA9IGNlbnRpLnN1YnN0cmluZygwLDIpO1xyXG4gICAgICAgICAgICB2YXIgY2VudGkyID0gY2VudGkuc3Vic3RyaW5nKDIsY2VudGkubGVuZ3RoKTtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpMSArICcsICcgKyBjb21hdHMgKycsICcrIGNlbnRpMisnICcgKyBjZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3JpZyA9IG51bTtcclxuICAgIG51bSA9IG51bS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIilcclxuXHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbnVtID0gdGhpcy50cmFuc2xhdG9yLnRvV29yZHMoTnVtYmVyKG51bSkpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBudW0gPSAnQSBsb3Qgb2YnO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbnVtID0gJzAnLnJlcGVhdCgxOCAtIG51bS5sZW5ndGgpICsgbnVtO1xyXG4gICAgICAgIG51bSA9IHRoaXMudW5pKG51bSwgMTgsIHNleCkudHJpbSgpO1xyXG4gICAgICAgIGlmIChudW0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgIG51bSA9IHRoaXMudHJhbnNsYXRpb25zLm51bGxlW3RoaXMubGFuZ107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdsdicpIHtcclxuICAgICAgICBpZiAoKG9yaWcubGVuZ3RoID4gMSAmJiBvcmlnW29yaWcubGVuZ3RoLTFdID09PSBcIjFcIiAmJiBvcmlnW29yaWcubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgb3JpZyA9PT0gXCIxXCIpIHtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMV0gIT0gXCJvXCIgJiYgZXVyW2V1ci5sZW5ndGgtMV0gIT0gXCJlXCIpIHtcclxuICAgICAgICAgICAgICAgIGV1ciA9IGV1ci5zdWJzdHJpbmcoMCwgZXVyLmxlbmd0aCAtIDEpICsgJ2knO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldXJbZXVyLmxlbmd0aC0yXSA9PT0gXCJpXCIpIHtcclxuICAgICAgICAgICAgICAgIGV1ciA9IGV1ci5zdWJzdHJpbmcoMCwgZXVyLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICB2YXIgZWxlbWVudHMgPSBldXIuc3BsaXQoJyAnKTtcclxuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGV1ciA9IHRoaXMuZW5kaW5nc1J1KG9yaWcsIGV1cik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgZXVyID0gdGhpcy5lbmRpbmdzUnUob3JpZywgZWxlbWVudHNbMF0pICsgJyAnICsgdGhpcy5lbmRpbmdzUnUob3JpZywgZWxlbWVudHNbMV0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgIGV1ciA9IHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzBdKSArICcgJyArIHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzFdKSArICcgJyArIGVsZW1lbnRzWzJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtICsgJyAnICsgZXVyLnRvTG93ZXJDYXNlKCkgKyBjZW50aTtcclxufVxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5lbmRpbmdzUnUgPSBmdW5jdGlvbiAobnVtYmVyLCBjdXJyZW5jeSkge1xyXG4gICAgaWYgKChudW1iZXIubGVuZ3RoID4gMSAmJiBudW1iZXJbbnVtYmVyLmxlbmd0aC0xXSA9PT0gXCIxXCIgJiYgbnVtYmVyW251bWJlci5sZW5ndGgtMl0gIT09IFwiMVwiKSB8fCBudW1iZXIgPT09IFwiMVwiKSB7XHJcbiAgICB9IGVsc2UgaWYgKChudW1iZXIubGVuZ3RoID4gMSAmJiAobnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiMlwiIHx8IG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjNcIiB8fCBudW1iZXJbbnVtYmVyLmxlbmd0aC0xXSA9PT0gXCI0XCIpICYmIG51bWJlcltudW1iZXIubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgbnVtYmVyID09PSBcIjFcIikge1xyXG4gICAgICAgIHZhciBlbmRpbmdzID0geydhZGQnOntcItGAXCI6IFwi0LBcIiwgXCLRglwiOiBcItCwXCIsIFwi0LpcIjogXCLQsFwiLCBcItCw0LxcIjogXCLQsFwifSwgJ3JlcGxhY2UnOiB7XCLQuNGA0LBcIjogXCLQuNGA0YtcIiwgXCLRjFwiOiBcItGPXCIsIFwi0YHQutC40LlcIjpcItGB0LrQuNGFXCIsIFwi0LjQuVwiOiBcItC40YVcIiwgXCLRi9C5XCI6IFwi0LBcIiwgXCLQsNGPXCI6IFwi0LjQtVwiLCBcItGEXCI6IFwi0YtcIiwgXCLQvdCwXCI6IFwi0L3Ri1wifX07XHJcbiAgICAgICAgZm9yICh2YXIgZW5kaW5nIGluIGVuZGluZ3NbJ2FkZCddKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5zdWJzdHJpbmcoY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgPT09IGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5ICsgZW5kaW5nc1snYWRkJ11bZW5kaW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGVuZGluZyBpbiBlbmRpbmdzWydyZXBsYWNlJ10pIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LnN1YnN0cmluZyhjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSA9PT0gZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuc3Vic3RyaW5nKDAsIGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpICsgZW5kaW5nc1sncmVwbGFjZSddW2VuZGluZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBlbmRpbmdzID0geydhZGQnOntcItGAXCI6IFwi0L7QslwiLCBcItGCXCI6IFwi0L7QslwiLCBcItC6XCI6IFwi0L7QslwifSwgJ3JlcGxhY2UnOiB7XCLRjFwiOiBcItC10LlcIiwgXCLQuNC5XCI6IFwi0LjRhVwiLCBcItGL0LlcIjogXCLRi9GFXCIsIFwi0LDRj1wiOiBcItC40YVcIiwgXCLQsFwiOiBcIlwifX07XHJcbiAgICAgICAgZm9yICh2YXIgZW5kaW5nIGluIGVuZGluZ3NbJ2FkZCddKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5zdWJzdHJpbmcoY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgPT09IGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5ICsgZW5kaW5nc1snYWRkJ11bZW5kaW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGVuZGluZyBpbiBlbmRpbmdzWydyZXBsYWNlJ10pIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LnN1YnN0cmluZyhjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSA9PT0gZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuc3Vic3RyaW5nKDAsIGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpICsgZW5kaW5nc1sncmVwbGFjZSddW2VuZGluZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbmN5O1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRGdWxsID0gZnVuY3Rpb24gKHZhbHV0YSwgbGFuZywgbnVtKSB7XHJcbiAgICB0aGlzLmxhbmcgPSBsYW5nO1xyXG4gICAgdmFyIGVkZW4gPSB7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNtID0ge1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2V4ID0gJ2hlJztcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdlbicpIHtcclxuICAgICAgICBlZGVuID0gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lFbjtcclxuICAgICAgICBzbSA9IHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWR0aHNFbjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgZWRlbiA9IHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5UnU7XHJcbiAgICAgICAgc20gPSB0aGlzLnRyYW5zbGF0aW9ucy5odW5kcmVkdGhzUnU7XHJcbiAgICAgICAgc2V4ID0gdGhpcy50cmFuc2xhdGlvbnMuY3VyQ29uZlt2YWx1dGFdWydzZXgnXVsncnUnXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWRlbiA9IHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5THY7XHJcbiAgICAgICAgc20gPSB0aGlzLnRyYW5zbGF0aW9ucy5odW5kcmVkdGhzTHY7XHJcbiAgICB9XHJcblxyXG5jb25zb2xlLmxvZyhzZXgpO1xyXG4gICAgdmFyIHNtcmVzID0gJygxLzEwMCkgJyArIHZhbHV0YS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc20sIHZhbHV0YSkpIHtcclxuICAgICAgICBzbXJlcyA9IHNtW3ZhbHV0YV07XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzID0gdGhpcy5nZXRSZXN1bHQobnVtLCBzbXJlcywgZWRlblt2YWx1dGFdLCBzZXgpO1xyXG4gICAgcmVzID0gcmVzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzLnNsaWNlKDEpO1xyXG5cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51bVRvV29yZHM7XHJcbiIsImltcG9ydCBOdW1Ub1dvcmRzIGZyb20gXCIuL251bXRvd29yZHNcIjtcclxuXHJcbnZhciBXb3JkVHJhbnNsYXRpb25zID0gZnVuY3Rpb24gKGN1ckNvbmYgPSBudWxsLCBudW1Db25mID0gbnVsbCkge1xyXG4gICAgdGhpcy5jdXJDb25mID0ge1wiZXVyXCI6e1wibmFtZVwiOntcImx2XCI6XCJldXJvXCIsXCJydVwiOlwiXFx1MDQxNVxcdTA0MzJcXHUwNDQwXFx1MDQzZVwiLFwiZW5cIjpcImV1cm9cIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcImNlbnRpXCIsXCJydVwiOlwiXFx1MDQ0NlxcdTA0MzVcXHUwNDNkXFx1MDQ0MlxcdTA0M2VcXHUwNDMyXCIsXCJlblwiOlwiY2VudHNcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwidXNkXCI6e1wibmFtZVwiOntcImx2XCI6XCJkb2xcXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDE0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJkb2xsYXJcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcImNlbnRpXCIsXCJydVwiOlwiXFx1MDQ0NlxcdTA0MzVcXHUwNDNkXFx1MDQ0MlxcdTA0M2VcXHUwNDMyXCIsXCJlblwiOlwiY2VudHNcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiZ2JwXCI6e1wibmFtZVwiOntcImx2XCI6XCJMaWVsYnJpdFxcdTAxMDFuaWphcyBtXFx1MDEwMXJjaVxcdTAxNDZhXCIsXCJydVwiOlwiXFx1MDQxMFxcdTA0M2RcXHUwNDMzXFx1MDQzYlxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ0XFx1MDQ0M1xcdTA0M2RcXHUwNDQyIFxcdTA0NDFcXHUwNDQyXFx1MDQzNVxcdTA0NDBcXHUwNDNiXFx1MDQzOFxcdTA0M2RcXHUwNDMzXFx1MDQzZVxcdTA0MzJcIixcImVuXCI6XCJicml0aXNoIHBvdW5kXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJwZW5pXCIsXCJydVwiOlwiXFx1MDQzZlxcdTA0MzVcXHUwNDNkXFx1MDQzOFwiLFwiZW5cIjpcInBlbmNlXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInJ1YlwiOntcIm5hbWVcIjp7XCJsdlwiOlwiS3JpZXZpamFzIHJ1Ymxpc1wiLFwicnVcIjpcIlxcdTA0MjBcXHUwNDNlXFx1MDQ0MVxcdTA0NDFcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0NDNcXHUwNDMxXFx1MDQzYlxcdTA0NGNcIixcImVuXCI6XCJydXNzaWFuIHJ1YmxlXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJrYXBlaWtcXHUwMTAxc1wiLFwicnVcIjpcIlxcdTA0M2FcXHUwNDNlXFx1MDQzZlxcdTA0MzVcXHUwNDM1XFx1MDQzYVwiLFwiZW5cIjpcImtvcGVrc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJwbG5cIjp7XCJuYW1lXCI6e1wibHZcIjpcIlBvbGlqYXMgemxvdHNcIixcInJ1XCI6XCJcXHUwNDFmXFx1MDQzZVxcdTA0M2JcXHUwNDRjXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM3XFx1MDQzYlxcdTA0M2VcXHUwNDQyXFx1MDQ0YlxcdTA0MzlcIixcImVuXCI6XCJwb2xpc2ggemxvdHlcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcImdyb1xcdTAxNjFpXCIsXCJydVwiOlwiXFx1MDQzM1xcdTA0NDBcXHUwNDNlXFx1MDQ0OFwiLFwiZW5cIjpcImdyb3N6XCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImt6dFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiS2F6YWhzdFxcdTAxMDFuYXMgdGVuZ2VcIixcInJ1XCI6XCJcXHUwNDFhXFx1MDQzMFxcdTA0MzdcXHUwNDMwXFx1MDQ0NVxcdTA0NDFcXHUwNDQyXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDJcXHUwNDM1XFx1MDQzZFxcdTA0MzNcXHUwNDM1XCIsXCJlblwiOlwia2F6YWtoc3RhbiB0ZW5nZVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwidGlqXFx1MDEyYm5pXCIsXCJydVwiOlwiXFx1MDQ0MlxcdTA0MzhcXHUwNDRiXFx1MDQzZFwiLFwiZW5cIjpcInRcXHUwMTMxeW5zXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImNoZlwiOntcIm5hbWVcIjp7XCJsdlwiOlwiXFx1MDE2MHZlaWNlcyBmcmFua3NcIixcInJ1XCI6XCJcXHUwNDI4XFx1MDQzMlxcdTA0MzVcXHUwNDM5XFx1MDQ0NlxcdTA0MzBcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ0XFx1MDQ0MFxcdTA0MzBcXHUwNDNkXFx1MDQzYVwiLFwiZW5cIjpcInN3aXNzIGZyYW5jXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJyYXBlbmlcIixcInJ1XCI6XCJcXHUwNDQwXFx1MDQzMFxcdTA0M2ZcXHUwNDNmXFx1MDQzNVxcdTA0M2RcXHUwNDNlXFx1MDQzMlwiLFwiZW5cIjpcInJhcHBlbnNcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiYWVkXCI6e1wibmFtZVwiOntcImx2XCI6XCJBcHZpZW5vdG8gQXJcXHUwMTAxYnUgRW1pclxcdTAxMDF0dSBkaXJoYW1zXCIsXCJydVwiOlwiXFx1MDQxNFxcdTA0MzhcXHUwNDQwXFx1MDQ0NVxcdTA0MzBcXHUwNDNjIFxcdTA0MWVcXHUwNDEwXFx1MDQyZFwiLFwiZW5cIjpcInVuaXRlZCBhcmFiIGVtaXJhdGVzIGRpcmhhbVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiZmlsaVwiLFwicnVcIjpcIlxcdTA0NDRcXHUwNDM4XFx1MDQzYlxcdTA0NDFcIixcImVuXCI6XCJmaWxzXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImRra1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiRFxcdTAxMDFuaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MTRcXHUwNDMwXFx1MDQ0MlxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJkYW5pc2gga3JvbmVcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcIlxcdTAxMTNyaVwiLFwicnVcIjpcIlxcdTA0NGRcXHUwNDQwXFx1MDQzNVwiLFwiZW5cIjpcIm9yZVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwic2VrXCI6e1wibmFtZVwiOntcImx2XCI6XCJadmllZHJpamFzIGtyb25hXCIsXCJydVwiOlwiXFx1MDQyOFxcdTA0MzJcXHUwNDM1XFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJzd2VkaXNoIGtyb25hXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJcXHUwMTEzcmlcIixcInJ1XCI6XCJcXHUwNDRkXFx1MDQ0MFxcdTA0MzVcIixcImVuXCI6XCJvcmVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcIm5va1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiTm9ydlxcdTAxMTNcXHUwMTIzaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MWRcXHUwNDNlXFx1MDQ0MFxcdTA0MzJcXHUwNDM1XFx1MDQzNlxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJub3J3ZWdpYW4ga3JvbmVcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcIlxcdTAxMTNyaVwiLFwicnVcIjpcIlxcdTA0NGRcXHUwNDQwXFx1MDQzNVwiLFwiZW5cIjpcIm9yZVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiYmduXCI6e1wibmFtZVwiOntcImx2XCI6XCJCdWxnXFx1MDEwMXJpamFzIGxldmFcIixcInJ1XCI6XCJcXHUwNDExXFx1MDQzZVxcdTA0M2JcXHUwNDMzXFx1MDQzMFxcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDM1XFx1MDQzMlwiLFwiZW5cIjpcImJ1bGdhcmlhbiBsZXZcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiaHVmXCI6e1wibmFtZVwiOntcImx2XCI6XCJVbmdcXHUwMTAxcmlqYXMgZm9yaW50c1wiLFwicnVcIjpcIlxcdTA0MzJcXHUwNDM1XFx1MDQzZFxcdTA0MzNcXHUwNDM1XFx1MDQ0MFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0M2VcXHUwNDQwXFx1MDQzOFxcdTA0M2RcXHUwNDQyXCIsXCJlblwiOlwiaHVuZ2FyaWFuIGZvcmludFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJ0cnlcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlR1cmNpamFzIGxpcmFcIixcInJ1XCI6XCJcXHUwNDIyXFx1MDQ0M1xcdTA0NDBcXHUwNDM1XFx1MDQ0NlxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNiXFx1MDQzOFxcdTA0NDBcXHUwNDMwXCIsXCJlblwiOlwidHVya2lzaCBsaXJhXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJhbGxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkFsYlxcdTAxMDFuaWphcyBsZWtzXCIsXCJydVwiOlwiXFx1MDQxMFxcdTA0M2JcXHUwNDMxXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDM1XFx1MDQzYVwiLFwiZW5cIjpcImFsYmFuaWFuIGxla1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJocmtcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkhvcnZcXHUwMTAxdGlqYXMga3VuYVwiLFwicnVcIjpcIlhcXHUwNDNlXFx1MDQ0MFxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDNcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcImNyb2F0aWFuIGt1bmFcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImN6a1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiXFx1MDEwY2VoaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MjdcXHUwNDM1XFx1MDQ0OFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJjemVjaCBrb3J1bmFcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImdlbFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiR3J1emlqYXMgbGFyaVwiLFwicnVcIjpcIlxcdTA0MTNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDM4XFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzBcXHUwNDQwXFx1MDQzOFwiLFwiZW5cIjpcImdlb3JnaWFuIGxhcmlcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibGtyXCI6e1wibmFtZVwiOntcImx2XCI6XCJcXHUwMTYwcmlsYW5rYXMgclxcdTAxNmJwaWphXCIsXCJydVwiOlwiXFx1MDQyOFxcdTA0NDBcXHUwNDM4LVxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0M2FcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQ0MFxcdTA0NDNcXHUwNDNmXFx1MDQzOFxcdTA0NGZcIixcImVuXCI6XCJzcmkgbGFua2FuIHJ1cGVlXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJ0bmRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlR1bmlzaWphcyBkaW5cXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDIyXFx1MDQ0M1xcdTA0M2RcXHUwNDM4XFx1MDQ0MVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJ0dW5pc2lhbiBkaW5hclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJpbHNcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkl6cmFcXHUwMTEzbGFzIFxcdTAxNjFla2Vsc1wiLFwicnVcIjpcIlxcdTA0MThcXHUwNDM3XFx1MDQ0MFxcdTA0MzBcXHUwNDM4XFx1MDQzYlxcdTA0NGNcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDhcXHUwNDM1XFx1MDQzYVxcdTA0MzVcXHUwNDNiXFx1MDQ0Y1wiLFwiZW5cIjpcImlzcmFlbGkgc2hlcWVsXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImpvZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSm9yZFxcdTAxMDFuaWphcyBkaW5cXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDE4XFx1MDQzZVxcdTA0NDBcXHUwNDM0XFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwiam9yZGFuaWFuIGRpbmFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImJ5blwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQmFsdGtyaWV2aWphcyBydWJsaXNcIixcInJ1XCI6XCJcXHUwNDExXFx1MDQzNVxcdTA0M2JcXHUwNDNlXFx1MDQ0MFxcdTA0NDNcXHUwNDQxXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQ0M1xcdTA0MzFcXHUwNDNiXFx1MDQ0Y1wiLFwiZW5cIjpcImJlbGFydXNpYW4gbmV3IHJ1YmxlXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJrYXBlaWtcXHUwMTAxc1wiLFwicnVcIjpcIlxcdTA0M2FcXHUwNDNlXFx1MDQzZlxcdTA0MzVcXHUwNDM1XFx1MDQzYVwiLFwiZW5cIjpcImtvcGVrc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJlZ3BcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxMTJcXHUwMTIzaXB0ZXMgbVxcdTAxMDFyY2lcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MTVcXHUwNDMzXFx1MDQzOFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MlxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0NDNcXHUwNDNkXFx1MDQ0MlwiLFwiZW5cIjpcImVneXB0aWFuIHBvdW5kXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInVhaFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVWtyYWluYXMgZ3Jpdm5hXCIsXCJydVwiOlwiXFx1MDQyM1xcdTA0M2FcXHUwNDQwXFx1MDQzMFxcdTA0MzhcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDMzXFx1MDQ0MFxcdTA0MzhcXHUwNDMyXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJ1a3JhaW5pYW4gaHJ5dm5pYVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiY255XCI6e1wibmFtZVwiOntcImx2XCI6XCJcXHUwMTM2XFx1MDEyYm5hcyBqdWFcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MWFcXHUwNDM4XFx1MDQ0MlxcdTA0MzBcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDRlXFx1MDQzMFxcdTA0M2RcXHUwNDRjXCIsXCJlblwiOlwiY2hpbmVzZSB5dWFuXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInRoYlwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVGFpemVtZXMgYmF0c1wiLFwicnVcIjpcIlxcdTA0MjJcXHUwNDMwXFx1MDQzOFxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzFcXHUwNDMwXFx1MDQ0MlwiLFwiZW5cIjpcInRoYWkgYmFodFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJ2bmRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlZqZXRuYW1hcyBkb25nc1wiLFwicnVcIjpcIlxcdTA0MTJcXHUwNDRjXFx1MDQzNVxcdTA0NDJcXHUwNDNkXFx1MDQzMFxcdTA0M2NcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzZFxcdTA0MzNcIixcImVuXCI6XCJ2aWV0bmFtZXNlIGRvbmdcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwicGhwXCI6e1wibmFtZVwiOntcImx2XCI6XCJGaWxpcFxcdTAxMmJudSBwZXNvXCIsXCJydVwiOlwiXFx1MDQyNFxcdTA0MzhcXHUwNDNiXFx1MDQzOFxcdTA0M2ZcXHUwNDNmXFx1MDQzOFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcImVuXCI6XCJwaGlsaXBwaW5lIHBlc29cIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibWFkXCI6e1wibmFtZVwiOntcImx2XCI6XCJNYXJva2FzIGRpcmhhbXNcIixcInJ1XCI6XCJcXHUwNDFjXFx1MDQzMFxcdTA0NDBcXHUwNDNlXFx1MDQzYVxcdTA0M2FcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDQwXFx1MDQ0NVxcdTA0MzBcXHUwNDNjXCIsXCJlblwiOlwibW9yb2NjYW4gZGlyaGFtXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImF1ZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQXVzdHJcXHUwMTAxbGlqYXMgZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxMFxcdTA0MzJcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDMwXFx1MDQzYlxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJhdXN0cmFsaWFuIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJhcnNcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkFyZ2VudFxcdTAxMmJuYXMgcGVzb1wiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDQwXFx1MDQzM1xcdTA0MzVcXHUwNDNkXFx1MDQ0MlxcdTA0MzhcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDNlXFx1MDQzNSBcXHUwNDNmXFx1MDQzNVxcdTA0NDFcXHUwNDNlXCIsXCJlblwiOlwiYXJnZW50aW5lIHBlc29cIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwianB5XCI6e1wibmFtZVwiOntcImx2XCI6XCJKYXBcXHUwMTAxbmFzIGpcXHUwMTEzbmFcIixcInJ1XCI6XCJcXHUwNDJmXFx1MDQzZlxcdTA0M2VcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDM4XFx1MDQzNVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwiamFwYW5lc2UgeWVuXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJpZHJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkluZG9uXFx1MDExM3ppamFzIHJcXHUwMTZicGlqYVwiLFwicnVcIjpcIlxcdTA0MThcXHUwNDNkXFx1MDQzNFxcdTA0M2VcXHUwNDNkXFx1MDQzNVxcdTA0MzdcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQ0MFxcdTA0NDNcXHUwNDNmXFx1MDQzOFxcdTA0NGZcIixcImVuXCI6XCJpbmRvbmVzaWFuIHJ1cGlhaFwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiaXNrXCI6e1wibmFtZVwiOntcImx2XCI6XCJJc2xhbmRlcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MThcXHUwNDQxXFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJpY2VsYW5kIGtyb25hXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJhbWRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkFybVxcdTAxMTNuaWphcyBkcmFtc1wiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDQwXFx1MDQzY1xcdTA0NGZcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQ0MFxcdTA0MzBcXHUwNDNjXCIsXCJlblwiOlwiYXJtZW5pYW4gZHJhbVwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJyb25cIjp7XCJuYW1lXCI6e1wibHZcIjpcIlJ1bVxcdTAxMDFuaWphcyBsZWphXCIsXCJydVwiOlwiXFx1MDQyMFxcdTA0NDNcXHUwNDNjXFx1MDQ0YlxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2JcXHUwNDM1XFx1MDQ0ZlwiLFwiZW5cIjpcInJvbWFuaWFuIGxldVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwic2dkXCI6e1wibmFtZVwiOntcImx2XCI6XCJTaW5nYXBcXHUwMTZicmFzIGRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MjFcXHUwNDM4XFx1MDQzZFxcdTA0MzNcXHUwNDMwXFx1MDQzZlxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJzaW5nYXBvcmUgZG9sbGFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInNicFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiU2tvdGlqYXMgbVxcdTAxMDFyY2lcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MjhcXHUwNDNlXFx1MDQ0MlxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDQzXFx1MDQzZFxcdTA0NDJcIixcImVuXCI6XCJzY290dGlzaCBwb3VuZFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJjYWRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkthblxcdTAxMDFkYXMgZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxYVxcdTA0MzBcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImNhbmFkaWFuIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJicmxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkJyYXpcXHUwMTJibGlqYXMgcmVcXHUwMTAxbHNcIixcInJ1XCI6XCJcXHUwNDExXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQzOFxcdTA0M2JcXHUwNDRjXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQzNVxcdTA0MzBcXHUwNDNiXCIsXCJlblwiOlwiYnJhemlsaWFuIHJlYWxcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiemFyXCI6e1wibmFtZVwiOntcImx2XCI6XCJEaWVudmlkXFx1MDEwMWZyaWthcyByZW5kc1wiLFwicnVcIjpcIlxcdTA0MmVcXHUwNDM2XFx1MDQzZFxcdTA0M2VcXHUwNDMwXFx1MDQ0NFxcdTA0NDBcXHUwNDM4XFx1MDQzYVxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQ0ZFxcdTA0M2RcXHUwNDM0XCIsXCJlblwiOlwic291dGggYWZyaWNhbiByYW5kXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImluclwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSW5kaWphcyByXFx1MDE2YnBpamFcIixcInJ1XCI6XCJcXHUwNDE4XFx1MDQzZFxcdTA0MzRcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQ0MFxcdTA0NDNcXHUwNDNmXFx1MDQzOFxcdTA0NGZcIixcImVuXCI6XCJpbmRpYW4gcnVwZWVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcInJzZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiU2VyYmlqYXMgZGluXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQyMVxcdTA0MzVcXHUwNDQwXFx1MDQzMVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJzZXJiaWFuIGRpbmFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcIm56ZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSmF1bnpcXHUwMTEzbGFuZGVzIGRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MWRcXHUwNDNlXFx1MDQzMlxcdTA0M2VcXHUwNDM3XFx1MDQzNVxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcIm5ldyB6ZWFsYW5kIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJteXJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1hbGFpemlqYXMgcmluZ2l0c1wiLFwicnVcIjpcIk1cXHUwNDMwXFx1MDQzYlxcdTA0MzBcXHUwNDM5XFx1MDQzN1xcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQzOFxcdTA0M2RcXHUwNDMzXFx1MDQzM1xcdTA0MzhcXHUwNDQyXCIsXCJlblwiOlwibWFsYXlzaWFuIHJpbmdnaXRcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibXVyXCI6e1wibmFtZVwiOntcImx2XCI6XCJNYXVyXFx1MDEyYmNpamFzIHNhbGFzIHJcXHUwMTZicGlqYVwiLFwicnVcIjpcIlxcdTA0MWNcXHUwNDMwXFx1MDQzMlxcdTA0NDBcXHUwNDM4XFx1MDQzYVxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDQwXFx1MDQ0M1xcdTA0M2ZcXHUwNDM4XFx1MDQ0ZlwiLFwiZW5cIjpcIm1hdXJpdGlhbiBydXBlZVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiaGtkXCI6e1wibmFtZVwiOntcImx2XCI6XCJIb25rb25nYXMgZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxM1xcdTA0M2VcXHUwNDNkXFx1MDQzYVxcdTA0M2VcXHUwNDNkXFx1MDQzM1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwiaG9uZyBrb25nIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJrcndcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkRpZW52aWRrb3JlamFzIHZvbmFcIixcInJ1XCI6XCJcXHUwNDJlXFx1MDQzNlxcdTA0M2RcXHUwNDNlXFx1MDQzYVxcdTA0M2VcXHUwNDQwXFx1MDQzNVxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0MzJcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJzb3V0aCBrb3JlYW4gd29uXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJteG5cIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1la3Npa2FzIHBlc29cIixcInJ1XCI6XCJcXHUwNDFjXFx1MDQzNVxcdTA0M2FcXHUwNDQxXFx1MDQzOFxcdTA0M2FcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzZVxcdTA0MzUgXFx1MDQzZlxcdTA0MzVcXHUwNDQxXFx1MDQzZVwiLFwiZW5cIjpcIm1leGljYW4gcGVzb1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJta2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1hXFx1MDEzN2Vkb25pamFzIGRlblxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MWNcXHUwNDMwXFx1MDQzYVxcdTA0MzVcXHUwNDM0XFx1MDQzZVxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwibWFjZWRvbmlhbiBkaW5hclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJkb3BcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkRvbWluaWtcXHUwMTAxbmFzIHBlc29cIixcInJ1XCI6XCJcXHUwNDE0XFx1MDQzZVxcdTA0M2NcXHUwNDM4XFx1MDQzZFxcdTA0MzhcXHUwNDNhXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcImVuXCI6XCJkb21pbmljYW4gcGVzb1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJrZXNcIjp7XCJuYW1lXCI6e1wibHZcIjpcIktlbmlqYXMgXFx1MDE2MWlsaVxcdTAxNDZcXHUwMTYxXCIsXCJydVwiOlwiXFx1MDQxYVxcdTA0MzVcXHUwNDNkXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDhcXHUwNDM4XFx1MDQzYlxcdTA0M2JcXHUwNDM4XFx1MDQzZFxcdTA0MzNcIixcImVuXCI6XCJrZW55YSBzaGlsbGluZ1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJkZW1cIjp7XCJuYW1lXCI6e1wibHZcIjpcIlZcXHUwMTAxY2lqYXMgbWFya2FcIixcInJ1XCI6XCJcXHUwNDFkXFx1MDQzNVxcdTA0M2NcXHUwNDM1XFx1MDQ0NlxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNjXFx1MDQzMFxcdTA0NDBcXHUwNDNhXFx1MDQzMFwiLFwiZW5cIjpcImdlcm1hbiBtYXJrXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJlZWtcIjp7XCJuYW1lXCI6e1wibHZcIjpcIklnYXVuaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MmRcXHUwNDQxXFx1MDQ0MlxcdTA0M2VcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0MFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcImVzdG9uaWFuIGtyb29uXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJsdGxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkxpZXR1dmFzIGxpdHNcIixcInJ1XCI6XCJcXHUwNDFiXFx1MDQzOFxcdTA0NDJcXHUwNDNlXFx1MDQzMlxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzhcXHUwNDQyXCIsXCJlblwiOlwibGl0aHVhbmlhbiBsaXRhc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJsdmxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkxhdHZpamFzIGxhdHNcIixcInJ1XCI6XCJcXHUwNDFiXFx1MDQzMFxcdTA0NDJcXHUwNDMyXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDMwXFx1MDQ0MlwiLFwiZW5cIjpcImxhdHZpYW4gbGF0c1wifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwic2FudGltaVwiLFwicnVcIjpcIlxcdTA0NDFcXHUwNDMwXFx1MDQzZFxcdTA0NDJcXHUwNDM4XFx1MDQzY1xcdTA0M2VcXHUwNDMyXCIsXCJlblwiOlwic2FudGltc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX19O1xyXG4gICAgdGhpcy5udW1Db25mID0ge1widW5pdHNcIjp7XCJsdlwiOltcIlwiLFwidmllbnNcIixcImRpdmlcIixcInRyXFx1MDEyYnNcIixcIlxcdTAxMGRldHJpXCIsXCJwaWVjaVwiLFwic2VcXHUwMTYxaVwiLFwic2VwdGlcXHUwMTQ2aVwiLFwiYXN0b1xcdTAxNDZpXCIsXCJkZXZpXFx1MDE0NmlcIl0sXCJydVwiOltcIlwiLFtcIlxcdTA0M2VcXHUwNDM0XFx1MDQzOFxcdTA0M2RcIixcIlxcdTA0M2VcXHUwNDM0XFx1MDQzZFxcdTA0MzBcIl0sW1wiXFx1MDQzNFxcdTA0MzJcXHUwNDMwXCIsXCJcXHUwNDM0XFx1MDQzMlxcdTA0MzVcIl0sXCJcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcIixcIlxcdTA0NDdcXHUwNDM1XFx1MDQ0MlxcdTA0NGJcXHUwNDQwXFx1MDQzNVwiLFwiXFx1MDQzZlxcdTA0NGZcXHUwNDQyXFx1MDQ0Y1wiLFwiXFx1MDQ0OFxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0NGNcIixcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcIixcIlxcdTA0MzJcXHUwNDNlXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQ0Y1wiLFwiXFx1MDQzNFxcdTA0MzVcXHUwNDMyXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXCJdfSxcInRlZW5zXCI6e1wibHZcIjp7XCIxMFwiOlwiZGVzbWl0XCIsXCIxMVwiOlwidmllbnBhZHNtaXRcIixcIjEyXCI6XCJkaXZwYWRzbWl0XCIsXCIxM1wiOlwidHJcXHUwMTJic3BhZHNtaXRcIixcIjE0XCI6XCJcXHUwMTBkZXRycGFkc21pdFwiLFwiMTVcIjpcInBpZWNwYWRzbWl0XCIsXCIxNlwiOlwic2VcXHUwMTYxcGFkc21pdFwiLFwiMTdcIjpcInNlcHRpXFx1MDE0NnBhZHNtaXRcIixcIjE4XCI6XCJhc3RvXFx1MDE0NnBhZHNtaXRcIixcIjE5XCI6XCJkZXZpXFx1MDE0NnBhZHNtaXRcIn0sXCJydVwiOntcIjEwXCI6XCJcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlxcdTA0NGNcIixcIjExXCI6XCJcXHUwNDNlXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMTJcIjpcIlxcdTA0MzRcXHUwNDMyXFx1MDQzNVxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjEzXCI6XCJcXHUwNDQyXFx1MDQ0MFxcdTA0MzVcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxNFwiOlwiXFx1MDQ0N1xcdTA0MzVcXHUwNDQyXFx1MDQ0YlxcdTA0NDBcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxNVwiOlwiXFx1MDQzZlxcdTA0NGZcXHUwNDQyXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMTZcIjpcIlxcdTA0NDhcXHUwNDM1XFx1MDQ0MVxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjE3XCI6XCJcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxOFwiOlwiXFx1MDQzMlxcdTA0M2VcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxOVwiOlwiXFx1MDQzNFxcdTA0MzVcXHUwNDMyXFx1MDQ0ZlxcdTA0NDJcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCJ9fSxcInRlbm5lcnNcIjp7XCJsdlwiOntcIjJcIjpcImRpdmRlc21pdFwiLFwiM1wiOlwidHJcXHUwMTJic2Rlc21pdFwiLFwiNFwiOlwiXFx1MDEwZGV0cmRlc21pdFwiLFwiNVwiOlwicGllY2Rlc21pdFwiLFwiNlwiOlwic2VcXHUwMTYxZGVzbWl0XCIsXCI3XCI6XCJzZXB0aVxcdTAxNDZkZXNtaXRcIixcIjhcIjpcImFzdG9cXHUwMTQ2ZGVzbWl0XCIsXCI5XCI6XCJkZXZpXFx1MDE0NmRlc21pdFwifSxcInJ1XCI6e1wiMlwiOlwiXFx1MDQzNFxcdTA0MzJcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjNcIjpcIlxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCI0XCI6XCJcXHUwNDQxXFx1MDQzZVxcdTA0NDBcXHUwNDNlXFx1MDQzYVwiLFwiNVwiOlwiXFx1MDQzZlxcdTA0NGZcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcIjZcIjpcIlxcdTA0NDhcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcIjdcIjpcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlwiLFwiOFwiOlwiXFx1MDQzMlxcdTA0M2VcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcIjlcIjpcIlxcdTA0MzRcXHUwNDM1XFx1MDQzMlxcdTA0NGZcXHUwNDNkXFx1MDQzZVxcdTA0NDFcXHUwNDQyXFx1MDQzZVwifX0sXCJodW5kcmVkc1wiOntcInJ1XCI6e1wiXCI6XCJcIixcIjBcIjpcIlwiLFwiMVwiOlwiXFx1MDQ0MVxcdTA0NDJcXHUwNDNlXCIsXCIyXCI6XCJcXHUwNDM0XFx1MDQzMlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzhcIixcIjNcIjpcIlxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQzMFwiLFwiNFwiOlwiXFx1MDQ0N1xcdTA0MzVcXHUwNDQyXFx1MDQ0YlxcdTA0NDBcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXCIsXCI1XCI6XCJcXHUwNDNmXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXFx1MDQ0MVxcdTA0M2VcXHUwNDQyXCIsXCI2XCI6XCJcXHUwNDQ4XFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQ0Y1xcdTA0NDFcXHUwNDNlXFx1MDQ0MlwiLFwiN1wiOlwiXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQ0Y1xcdTA0NDFcXHUwNDNlXFx1MDQ0MlwiLFwiOFwiOlwiXFx1MDQzMlxcdTA0M2VcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXFx1MDQ0MVxcdTA0M2VcXHUwNDQyXCIsXCI5XCI6XCJcXHUwNDM0XFx1MDQzNVxcdTA0MzJcXHUwNDRmXFx1MDQ0MlxcdTA0NGNcXHUwNDQxXFx1MDQzZVxcdTA0NDJcIn19fTtcclxuICAgIGlmIChjdXJDb25mKSB7XHJcbiAgICAgICAgdGhpcy5jdXJDb25mID0gY3VyQ29uZjtcclxuICAgIH1cclxuICAgIGlmIChudW1Db25mKSB7XHJcbiAgICAgICAgdGhpcy5jdXJDb25mID0gbnVtQ29uZjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29uZk5hbWVzID0ge307XHJcbiAgICB2YXIgY29uZkh1bmQgPSB7fTtcclxuICAgIGZvciAodmFyIGNvZGUgaW4gdGhpcy5jdXJDb25mKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyQ29uZltjb2RlXVsnbmFtZSddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbGFuZyBpbiB0aGlzLmN1ckNvbmZbY29kZV1bJ25hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZOYW1lc1tsYW5nXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZk5hbWVzW2xhbmddID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25mTmFtZXNbbGFuZ11bY29kZV0gPSB0aGlzLmN1ckNvbmZbY29kZV1bJ25hbWUnXVtsYW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXJDb25mW2NvZGVdWydodW5kcmVkdGhzJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxhbmcgaW4gdGhpcy5jdXJDb25mW2NvZGVdWydodW5kcmVkdGhzJ10pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25mSHVuZFtsYW5nXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZkh1bmRbbGFuZ10gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbmZIdW5kW2xhbmddW2NvZGVdID0gdGhpcy5jdXJDb25mW2NvZGVdWydodW5kcmVkdGhzJ11bbGFuZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbmN5THYgPSBjb25mTmFtZXMubHY7XHJcbiAgICB0aGlzLmh1bmRyZWR0aHNMdiA9IGNvbmZIdW5kLmx2O1xyXG4gICAgdGhpcy5jdXJyZW5jeVJ1ID0gY29uZk5hbWVzLnJ1O1xyXG4gICAgdGhpcy5odW5kcmVkdGhzUnUgPSBjb25mSHVuZC5ydTtcclxuICAgIHRoaXMuY3VycmVuY3lFbiA9IGNvbmZOYW1lcy5lbjtcclxuICAgIHRoaXMuaHVuZHJlZHRoc0VuID0gY29uZkh1bmQuZW47XHJcblxyXG4gICAgdGhpcy5vbmVIdW5kcmVkTHYgPSAndmllbnMgc2ltdHMnO1xyXG4gICAgdGhpcy5odW5kcmFkcyA9ICdzaW10aSc7XHJcbiAgICB0aGlzLmFuZHMgPSB7J2x2JzogJ3VuJywgJ2VuJzonYW5kJywgJ3J1Jzon0LgnfTtcclxuICAgIHRoaXMuY29tYXRzID0geydsdic6ICdrb21hdHMnLCAnZW4nOidjb21hJywgJ3J1Jzon0LrQvtC80LAnfTtcclxuICAgIHRoaXMubnVsbGUgPSB7J2x2JzogJ251bGxlJywgJ3J1Jzon0L3QvtC70YwnfTtcclxuXHJcbiAgICB0aGlzLmJpZ051bXMgPSB7XHJcbiAgICAgICAgJzMnOiB7XHJcbiAgICAgICAgICAgICdydSc6IFsn0YLRi9GB0Y/Rh9CwJywgJ9GC0YvRgdGP0YcnLCAn0YLRi9GB0Y/Rh9C4J10sXHJcbiAgICAgICAgICAgICdsdic6IFsndMWra3N0b3RpcycsICd0xatrc3RvxaFpJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICc2Jzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9C80LjQu9C70LjQvtC9JywgJ9C80LjQu9C70LjQvtC90L7QsicsICfQvNC40LvQu9C40L7QvdCwJ10sXHJcbiAgICAgICAgICAgICdsdic6IFsnbWlsam9ucycsICdtaWxqb25pJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICc5Jzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9C80LjQu9C70LjQsNGA0LQnLCAn0LzQuNC70LvQuNC+0L3QvtCyJywgJ9C80LjQu9C70LjQsNGA0LTQsCddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ21pbGphcmRzJywgJ21pbGphcmRpJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICcxMic6IHtcclxuICAgICAgICAgICAgJ3J1JzogWyfRgtGA0LjQu9C70LjQvtC9JywgJ9GC0YDQuNC70LvQuNC+0L3QvtCyJywgJ9GC0YDQuNC70LvQuNC+0L3QsCddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ3RyaWxqb25zJywgJ3RyaWxqb25pJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICcxNSc6IHtcclxuICAgICAgICAgICAgJ3J1JzogWyfQutCy0LDQtNGA0LjQu9C70LjQvtC9JywgJ9C60LLQsNC00YDQuNC70LvQuNC+0L3QvtCyJywgJ9C60LLQsNC00YDQuNC70LvQuNC+0L3QsCddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ2t2YWRyaWxqb25zJywgJ2t2YWRyaWxqb25pJ11cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmRUcmFuc2xhdGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=