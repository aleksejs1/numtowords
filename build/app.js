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
        "11": "\u043E\u0434\u0438\u043D\u0430\u0434\u0446\u0430\u0442\u044C",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJudW10b3dvcmRzIiwiTnVtVG9Xb3JkcyIsInVwZGF0ZUFsbCIsImN1cnJlbmN5IiwiJCIsInZhbCIsImxhbmciLCJudW0iLCJyZXMiLCJnZXRGdWxsIiwiaHRtbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZmFkZUluIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJzaG93SGVscCIsImhpZGUiLCJvbiIsInNlbCIsInZhbHMiLCJnZXRWYWxzIiwia2V5IiwidmFsYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwibGFuZ1ZhbHMiLCJjaGVja2VkIiwidHJhbnNsYXRvciIsIlQyVyIsInRyYW5zbGF0aW9ucyIsIldvcmRUcmFuc2xhdGlvbnMiLCJwcm90b3R5cGUiLCJjdXJyZW5jeUx2IiwidW5pdHMiLCJudW1lcmljVW5pdCIsInBsdXJhbCIsIkFycmF5IiwiaXNBcnJheSIsIm51bUNvbmYiLCJ0ZW5uZXJzIiwibnVtZXJpY1RlbiIsInNleCIsInRlZW5zIiwiaHVuZHJlZHMiLCJudW1lcmljSHVuZHJlZCIsInJ1Iiwib25lSHVuZHJlZEx2IiwiaHVuZHJhZHMiLCJnZW5lcmljQ2FsbGVyIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJjYWxsIiwiYXJndW1lbnRzIiwic2hpZnQiLCJhcHBseSIsInVuaSIsImxlbiIsIm1pbGlvbmkiLCJzdWJzdHJpbmciLCJ0aG91c2FuZHNjaSIsIm1pbGpXb3JkIiwiYmlnTnVtcyIsInRvU3RyaW5nIiwiZ2V0UmVzdWx0IiwiY2VudCIsImV1ciIsInBvaW50IiwibGFzdEluZGV4T2YiLCJjb21hIiwicG9pbnRDb3VudCIsInNwbGl0IiwibGVuZ3RoIiwiY29tYUNvdW50Iiwic2VwIiwidW4iLCJhbmRzIiwiY29tYXRzIiwiY2VudGkiLCJyZXBsYWNlIiwiY2VudGkxIiwiY2VudGkyIiwib3JpZyIsInRvV29yZHMiLCJOdW1iZXIiLCJlIiwicmVwZWF0IiwidHJpbSIsIm51bGxlIiwiZWxlbWVudHMiLCJlbmRpbmdzUnUiLCJ0b0xvd2VyQ2FzZSIsIm51bWJlciIsImVuZGluZ3MiLCJlbmRpbmciLCJ2YWx1dGEiLCJlZGVuIiwic20iLCJjdXJyZW5jeUVuIiwiaHVuZHJlZHRoc0VuIiwiY3VycmVuY3lSdSIsImh1bmRyZWR0aHNSdSIsImN1ckNvbmYiLCJodW5kcmVkdGhzTHYiLCJjb25zb2xlIiwibG9nIiwic21yZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbmZOYW1lcyIsImNvbmZIdW5kIiwiY29kZSIsImx2IiwiZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsVUFBVSxHQUFHLElBQUlDLG1EQUFKLEVBQWpCOztBQUVBLFNBQVNDLFNBQVQsR0FBcUI7QUFDakIsTUFBSUMsUUFBUSxHQUFHQyw2Q0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxHQUFiLEVBQWY7QUFDQSxNQUFJQyxJQUFJLEdBQUdGLDZDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ0MsR0FBaEMsRUFBWDtBQUNBLE1BQUlFLEdBQUcsR0FBR0gsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUMsR0FBUixFQUFWO0FBQ0EsTUFBSUcsR0FBRyxHQUFHUixVQUFVLENBQUNTLE9BQVgsQ0FBbUJOLFFBQW5CLEVBQTZCRyxJQUE3QixFQUFtQ0MsR0FBbkMsQ0FBVjtBQUNBSCwrQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVTSxJQUFWLENBQWVGLEdBQWY7QUFDQUcsY0FB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TSxDQUFDLGFBQUQsRUFBZ0IsZUFBaEIsRUFBaUMsY0FBakMsQ0FESjtBQUVGLFlBQU0sQ0FBQyxhQUFELEVBQWdCLGFBQWhCO0FBRko7QUFqQkssR0FBZjtBQXNCSCxDQWpFRDs7QUFtRWUvQiwrRUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAnXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IE51bVRvV29yZHMgZnJvbSBcIi4vbnVtdG93b3Jkc1wiO1xyXG5cclxudmFyIG51bXRvd29yZHMgPSBuZXcgTnVtVG9Xb3JkcygpO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQWxsKCkge1xyXG4gICAgdmFyIGN1cnJlbmN5ID0gJChcIiN2YWx1dGFcIikudmFsKCk7XHJcbiAgICB2YXIgbGFuZyA9ICQoJ2lucHV0W25hbWU9XCJsYW5nXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgIHZhciBudW0gPSAkKFwiI2NcIikudmFsKCk7XHJcbiAgICB2YXIgcmVzID0gbnVtdG93b3Jkcy5nZXRGdWxsKGN1cnJlbmN5LCBsYW5nLCBudW0pO1xyXG4gICAgJChcIiNyZXNcIikuaHRtbChyZXMpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnZlcnRfbGFuZycsIGxhbmcpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnZlcnRfY3VycmVuY3knLCBjdXJyZW5jeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHkoKSB7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCgkKFwiI3Jlc1wiKS5odG1sKCkpO1xyXG4gICAgJChcIiNhbHJ0XCIpLmZhZGVJbigpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHskKFwiI2FscnRcIikuZmFkZU91dCgpO30sIDEwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SGVscCgpIHtcclxuICAgICQoXCIjaGVscFwiKS5mYWRlSW4oKTtcclxuICAgICQoXCIjaGVscC1idG5cIikuaGlkZSgpO1xyXG59XHJcblxyXG4kKFwiI2NcIikub24oJ2tleXVwJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ2NsaWNrJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdwYXN0ZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjdmFsdXRhXCIpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPWxhbmddJykub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY29weS1idG5cIikub24oJ2NsaWNrJywgY29weSk7XHJcbiQoXCIjaGVscC1idG5cIikub24oJ2NsaWNrJywgc2hvd0hlbHApO1xyXG5cclxudmFyIHNlbCA9ICcnO1xyXG52YXIgdmFscyA9IG51bXRvd29yZHMuZ2V0VmFscygpO1xyXG5mb3IgKHZhciBrZXkgaW4gdmFscykge1xyXG4gICAgdmFyIHZhbGEgPSB2YWxzW2tleV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWxzW2tleV0uc2xpY2UoMSk7XHJcbiAgICBzZWwgPSBzZWwgKyAnPG9wdGlvbiB2YWx1ZT1cIicra2V5KydcIj4nK2tleS50b1VwcGVyQ2FzZSgpKycgJyt2YWxhKyc8L29wdGlvbj4nO1xyXG59O1xyXG4kKFwiI3ZhbHV0YVwiKS5odG1sKHNlbCk7XHJcbnZhciBsYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnZlcnRfbGFuZycpO1xyXG5pZiAobGFuZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICB2YXIgbGFuZ1ZhbHMgPSB7XHJcbiAgICAgICAgJ2x2JzogMCxcclxuICAgICAgICAnZW4nOiAxLFxyXG4gICAgICAgICdydSc6IDJcclxuICAgIH07XHJcblxyXG4gICAgJCgnaW5wdXQ6cmFkaW9bbmFtZT1cImxhbmdcIl0nKVtsYW5nVmFsc1tsYW5nXV0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAkKCdpbnB1dFtuYW1lPVwibGFuZ1wiXTpjaGVja2VkJykudmFsKCk7XHJcbn1cclxudmFyIGN1cnJlbmN5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnZlcnRfY3VycmVuY3knKTtcclxuaWYgKGN1cnJlbmN5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICQoXCIjdmFsdXRhXCIpLnZhbChjdXJyZW5jeSk7XHJcbn1cclxuIiwiaW1wb3J0IFQyVyBmcm9tIFwibnVtYmVyczJ3b3Jkc1wiO1xyXG5pbXBvcnQgV29yZFRyYW5zbGF0aW9ucyBmcm9tIFwiLi90cmFuc2xhdGlvbnNcIjtcclxuXHJcbnZhciBOdW1Ub1dvcmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy50cmFuc2xhdG9yID0gbmV3IFQyVyhcIkVOX1VTXCIpO1xyXG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSBuZXcgV29yZFRyYW5zbGF0aW9ucygpO1xyXG4gICAgdGhpcy5sYW5nID0gJ2x2JztcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0VmFscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUx2O1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bml0cyA9IGZ1bmN0aW9uIChudW1lcmljVW5pdCwgcGx1cmFsID0gMCkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi51bml0c1t0aGlzLmxhbmddW251bWVyaWNVbml0XSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi51bml0c1t0aGlzLmxhbmddW251bWVyaWNVbml0XVtwbHVyYWxdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi51bml0c1t0aGlzLmxhbmddW251bWVyaWNVbml0XVxyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS50ZW5uZXJzID0gZnVuY3Rpb24gKG51bWVyaWNUZW4sIHNleCA9IHRydWUpIHtcclxuICAgIHZhciBwbHVyYWwgPSAxO1xyXG4gICAgaWYgKHNleCkge1xyXG4gICAgICAgIHBsdXJhbCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bml0cyhudW1lcmljVGVuWzFdLCBwbHVyYWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWVyaWNUZW5bMF0gPT09IFwiMVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLm51bUNvbmYudGVlbnNbdGhpcy5sYW5nXVtudW1lcmljVGVuXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnRlbm5lcnNbdGhpcy5sYW5nXVtudW1lcmljVGVuWzBdXSArIFwiIFwiICsgdGhpcy51bml0cyhudW1lcmljVGVuWzFdLCBwbHVyYWwpXHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmh1bmRyZWRzID0gZnVuY3Rpb24gKG51bWVyaWNIdW5kcmVkLCBzZXggPSB0cnVlKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLm51bUNvbmYuaHVuZHJlZHMucnVbbnVtZXJpY0h1bmRyZWRbMF1dICsgJyAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0sIHNleCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY0h1bmRyZWRbMF0gPT09IFwiMFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdLCBzZXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWVyaWNIdW5kcmVkWzBdID09PSBcIjFcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5vbmVIdW5kcmVkTHYgKyAnICcgKyB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51bml0cyhudW1lcmljSHVuZHJlZFswXSkgKyAnICcgKyB0aGlzLnRyYW5zbGF0aW9ucy5odW5kcmFkcyArICcgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdLCBzZXgpO1xyXG59XHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdlbmVyaWNDYWxsZXIgPSBmdW5jdGlvbihtZXRob2ROYW1lKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgIGFyZ3Muc2hpZnQoKTtcclxuICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG59O1xyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudW5pID0gZnVuY3Rpb24gKG51bSwgbGVuLCBzZXggPSAnaGUnKSB7XHJcbiAgICBpZiAobGVuID09PSAzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJpY0NhbGxlcignaHVuZHJlZHMnLCBudW0sIHNleCA9PT0gJ2hlJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgbWlsaW9uaSA9IG51bS5zdWJzdHJpbmcoMCwgMyk7XHJcbiAgICB2YXIgdGhvdXNhbmRzY2kgPSBudW0uc3Vic3RyaW5nKDMsIGxlbik7XHJcblxyXG4gICAgaWYgKG1pbGlvbmkgPT09ICcwMDAnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJpY0NhbGxlcigndW5pJywgdGhvdXNhbmRzY2ksIGxlbi0zLCBzZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtaWxqV29yZCA9IHRoaXMudHJhbnNsYXRpb25zLmJpZ051bXNbKGxlbiAtIDMpLnRvU3RyaW5nKCldW3RoaXMubGFuZ11bMV07XHJcbiAgICBpZiAobWlsaW9uaVsyXSA9PT0gXCIxXCIgJiYgbWlsaW9uaVsxXSAhPT0gXCIxXCIpIHtcclxuICAgICAgICBtaWxqV29yZCA9IHRoaXMudHJhbnNsYXRpb25zLmJpZ051bXNbKGxlbiAtIDMpLnRvU3RyaW5nKCldW3RoaXMubGFuZ11bMF1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScgJiYgbWlsaW9uaVsxXSAhPT0gXCIxXCIgJiYgKG1pbGlvbmlbMl0gPT09IFwiMlwiIHx8IG1pbGlvbmlbMl0gPT09IFwiM1wiIHx8IG1pbGlvbmlbMl0gPT09IFwiNFwiKSkge1xyXG4gICAgICAgIG1pbGpXb3JkID0gdGhpcy50cmFuc2xhdGlvbnMuYmlnTnVtc1sobGVuIC0gMykudG9TdHJpbmcoKV1bdGhpcy5sYW5nXVsyXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHVuZHJlZHMobWlsaW9uaSwgIShsZW4gPj0gNiAmJiBsZW4gPCA5KSkgKyAnICcrbWlsaldvcmQrJyAnICsgdGhpcy5nZW5lcmljQ2FsbGVyKCd1bmknLCB0aG91c2FuZHNjaSwgbGVuLTMsIHNleCk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldFJlc3VsdCA9IGZ1bmN0aW9uIChudW0sIGNlbnQsIGV1ciwgc2V4ID0gJ2hlJykge1xyXG4gICAgdmFyIHBvaW50ID0gbnVtLmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICB2YXIgY29tYSA9IG51bS5sYXN0SW5kZXhPZignLCcpO1xyXG4gICAgdmFyIHBvaW50Q291bnQgPSAobnVtLnNwbGl0KFwiLlwiKS5sZW5ndGggLSAxKVxyXG4gICAgdmFyIGNvbWFDb3VudCA9IChudW0uc3BsaXQoXCIsXCIpLmxlbmd0aCAtIDEpXHJcbiAgICB2YXIgc2VwID0gLTE7XHJcbiAgICBpZiAocG9pbnQgIT09IC0xICYmIHBvaW50ID4gY29tYSAmJiBwb2ludENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIHNlcCA9IHBvaW50O1xyXG4gICAgfSBlbHNlIGlmIChjb21hICE9PSAtMSAmJiBjb21hID4gcG9pbnQgJiYgY29tYUNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIHNlcCA9IGNvbWE7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxlbmd0aCA9IG51bS5sZW5ndGg7XHJcbiAgICB2YXIgdW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5hbmRzW3RoaXMubGFuZ107XHJcbiAgICB2YXIgY29tYXRzID0gdGhpcy50cmFuc2xhdGlvbnMuY29tYXRzW3RoaXMubGFuZ107XHJcbiAgICB2YXIgY2VudGkgPSAnICcrdW4rJyAwMCAnICsgY2VudDtcclxuICAgIGlmIChzZXAgIT09IC0xKSB7XHJcbiAgICAgICAgY2VudGkgPSBudW0uc3Vic3RyaW5nKHNlcCsxLCBsZW5ndGgpO1xyXG4gICAgICAgIGNlbnRpID0gY2VudGkucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcbiAgICAgICAgbnVtID0gbnVtLnN1YnN0cmluZygwLCBzZXApO1xyXG4gICAgICAgIGlmIChjZW50aS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAwMCAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aSsnMCAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aSsnICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjZW50aTEgPSBjZW50aS5zdWJzdHJpbmcoMCwyKTtcclxuICAgICAgICAgICAgdmFyIGNlbnRpMiA9IGNlbnRpLnN1YnN0cmluZygyLGNlbnRpLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aTEgKyAnLCAnICsgY29tYXRzICsnLCAnKyBjZW50aTIrJyAnICsgY2VudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9yaWcgPSBudW07XHJcbiAgICBudW0gPSBudW0ucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcblxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG51bSA9IHRoaXMudHJhbnNsYXRvci50b1dvcmRzKE51bWJlcihudW0pKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgbnVtID0gJ0EgbG90IG9mJztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG51bSA9ICcwJy5yZXBlYXQoMTggLSBudW0ubGVuZ3RoKSArIG51bTtcclxuICAgICAgICBudW0gPSB0aGlzLnVuaShudW0sIDE4LCBzZXgpLnRyaW0oKTtcclxuICAgICAgICBpZiAobnVtID09PSAnJykge1xyXG4gICAgICAgICAgICBudW0gPSB0aGlzLnRyYW5zbGF0aW9ucy5udWxsZVt0aGlzLmxhbmddO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnbHYnKSB7XHJcbiAgICAgICAgaWYgKChvcmlnLmxlbmd0aCA+IDEgJiYgb3JpZ1tvcmlnLmxlbmd0aC0xXSA9PT0gXCIxXCIgJiYgb3JpZ1tvcmlnLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG9yaWcgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGV1cltldXIubGVuZ3RoLTFdICE9IFwib1wiICYmIGV1cltldXIubGVuZ3RoLTFdICE9IFwiZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKSArICdpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMl0gPT09IFwiaVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZXVyLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBldXIgPSB0aGlzLmVuZGluZ3NSdShvcmlnLCBldXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGV1ciA9IHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzBdKSArICcgJyArIHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzFdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICBldXIgPSB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1swXSkgKyAnICcgKyB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1sxXSkgKyAnICcgKyBlbGVtZW50c1syXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bSArICcgJyArIGV1ci50b0xvd2VyQ2FzZSgpICsgY2VudGk7XHJcbn1cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZW5kaW5nc1J1ID0gZnVuY3Rpb24gKG51bWJlciwgY3VycmVuY3kpIHtcclxuICAgIGlmICgobnVtYmVyLmxlbmd0aCA+IDEgJiYgbnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiMVwiICYmIG51bWJlcltudW1iZXIubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgbnVtYmVyID09PSBcIjFcIikge1xyXG4gICAgfSBlbHNlIGlmICgobnVtYmVyLmxlbmd0aCA+IDEgJiYgKG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjJcIiB8fCBudW1iZXJbbnVtYmVyLmxlbmd0aC0xXSA9PT0gXCIzXCIgfHwgbnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiNFwiKSAmJiBudW1iZXJbbnVtYmVyLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG51bWJlciA9PT0gXCIxXCIpIHtcclxuICAgICAgICB2YXIgZW5kaW5ncyA9IHsnYWRkJzp7XCLRgFwiOiBcItCwXCIsIFwi0YJcIjogXCLQsFwiLCBcItC6XCI6IFwi0LBcIiwgXCLQsNC8XCI6IFwi0LBcIn0sICdyZXBsYWNlJzoge1wi0LjRgNCwXCI6IFwi0LjRgNGLXCIsIFwi0YxcIjogXCLRj1wiLCBcItGB0LrQuNC5XCI6XCLRgdC60LjRhVwiLCBcItC40LlcIjogXCLQuNGFXCIsIFwi0YvQuVwiOiBcItCwXCIsIFwi0LDRj1wiOiBcItC40LVcIiwgXCLRhFwiOiBcItGLXCIsIFwi0L3QsFwiOiBcItC90YtcIn19O1xyXG4gICAgICAgIGZvciAodmFyIGVuZGluZyBpbiBlbmRpbmdzWydhZGQnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeSArIGVuZGluZ3NbJ2FkZCddW2VuZGluZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChlbmRpbmcgaW4gZW5kaW5nc1sncmVwbGFjZSddKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5zdWJzdHJpbmcoY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgPT09IGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LnN1YnN0cmluZygwLCBjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSArIGVuZGluZ3NbJ3JlcGxhY2UnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgZW5kaW5ncyA9IHsnYWRkJzp7XCLRgFwiOiBcItC+0LJcIiwgXCLRglwiOiBcItC+0LJcIiwgXCLQulwiOiBcItC+0LJcIn0sICdyZXBsYWNlJzoge1wi0YxcIjogXCLQtdC5XCIsIFwi0LjQuVwiOiBcItC40YVcIiwgXCLRi9C5XCI6IFwi0YvRhVwiLCBcItCw0Y9cIjogXCLQuNGFXCIsIFwi0LBcIjogXCJcIn19O1xyXG4gICAgICAgIGZvciAodmFyIGVuZGluZyBpbiBlbmRpbmdzWydhZGQnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeSArIGVuZGluZ3NbJ2FkZCddW2VuZGluZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChlbmRpbmcgaW4gZW5kaW5nc1sncmVwbGFjZSddKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5zdWJzdHJpbmcoY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgPT09IGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5LnN1YnN0cmluZygwLCBjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSArIGVuZGluZ3NbJ3JlcGxhY2UnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyZW5jeTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0RnVsbCA9IGZ1bmN0aW9uICh2YWx1dGEsIGxhbmcsIG51bSkge1xyXG4gICAgdGhpcy5sYW5nID0gbGFuZztcclxuICAgIHZhciBlZGVuID0ge1xyXG4gICAgfTtcclxuICAgIHZhciBzbSA9IHtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNleCA9ICdoZSc7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgZWRlbiA9IHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5RW47XHJcbiAgICAgICAgc20gPSB0aGlzLnRyYW5zbGF0aW9ucy5odW5kcmVkdGhzRW47XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeVJ1O1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc1J1O1xyXG4gICAgICAgIHNleCA9IHRoaXMudHJhbnNsYXRpb25zLmN1ckNvbmZbdmFsdXRhXVsnc2V4J11bJ3J1J107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUx2O1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc0x2O1xyXG4gICAgfVxyXG5cclxuY29uc29sZS5sb2coc2V4KTtcclxuICAgIHZhciBzbXJlcyA9ICcoMS8xMDApICcgKyB2YWx1dGEudG9VcHBlckNhc2UoKTtcclxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNtLCB2YWx1dGEpKSB7XHJcbiAgICAgICAgc21yZXMgPSBzbVt2YWx1dGFdO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcyA9IHRoaXMuZ2V0UmVzdWx0KG51bSwgc21yZXMsIGVkZW5bdmFsdXRhXSwgc2V4KTtcclxuICAgIHJlcyA9IHJlcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlcy5zbGljZSgxKTtcclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdW1Ub1dvcmRzO1xyXG4iLCJpbXBvcnQgTnVtVG9Xb3JkcyBmcm9tIFwiLi9udW10b3dvcmRzXCI7XHJcblxyXG52YXIgV29yZFRyYW5zbGF0aW9ucyA9IGZ1bmN0aW9uIChjdXJDb25mID0gbnVsbCwgbnVtQ29uZiA9IG51bGwpIHtcclxuICAgIHRoaXMuY3VyQ29uZiA9IHtcImV1clwiOntcIm5hbWVcIjp7XCJsdlwiOlwiZXVyb1wiLFwicnVcIjpcIlxcdTA0MTVcXHUwNDMyXFx1MDQ0MFxcdTA0M2VcIixcImVuXCI6XCJldXJvXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJjZW50aVwiLFwicnVcIjpcIlxcdTA0NDZcXHUwNDM1XFx1MDQzZFxcdTA0NDJcXHUwNDNlXFx1MDQzMlwiLFwiZW5cIjpcImNlbnRzXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInVzZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwiZG9sbGFyXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJjZW50aVwiLFwicnVcIjpcIlxcdTA0NDZcXHUwNDM1XFx1MDQzZFxcdTA0NDJcXHUwNDNlXFx1MDQzMlwiLFwiZW5cIjpcImNlbnRzXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImdicFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiTGllbGJyaXRcXHUwMTAxbmlqYXMgbVxcdTAxMDFyY2lcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDNkXFx1MDQzM1xcdTA0M2JcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0NDNcXHUwNDNkXFx1MDQ0MiBcXHUwNDQxXFx1MDQ0MlxcdTA0MzVcXHUwNDQwXFx1MDQzYlxcdTA0MzhcXHUwNDNkXFx1MDQzM1xcdTA0M2VcXHUwNDMyXCIsXCJlblwiOlwiYnJpdGlzaCBwb3VuZFwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwicGVuaVwiLFwicnVcIjpcIlxcdTA0M2ZcXHUwNDM1XFx1MDQzZFxcdTA0MzhcIixcImVuXCI6XCJwZW5jZVwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJydWJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIktyaWV2aWphcyBydWJsaXNcIixcInJ1XCI6XCJcXHUwNDIwXFx1MDQzZVxcdTA0NDFcXHUwNDQxXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDBcXHUwNDQzXFx1MDQzMVxcdTA0M2JcXHUwNDRjXCIsXCJlblwiOlwicnVzc2lhbiBydWJsZVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwia2FwZWlrXFx1MDEwMXNcIixcInJ1XCI6XCJcXHUwNDNhXFx1MDQzZVxcdTA0M2ZcXHUwNDM1XFx1MDQzNVxcdTA0M2FcIixcImVuXCI6XCJrb3Bla3NcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwicGxuXCI6e1wibmFtZVwiOntcImx2XCI6XCJQb2xpamFzIHpsb3RzXCIsXCJydVwiOlwiXFx1MDQxZlxcdTA0M2VcXHUwNDNiXFx1MDQ0Y1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzN1xcdTA0M2JcXHUwNDNlXFx1MDQ0MlxcdTA0NGJcXHUwNDM5XCIsXCJlblwiOlwicG9saXNoIHpsb3R5XCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJncm9cXHUwMTYxaVwiLFwicnVcIjpcIlxcdTA0MzNcXHUwNDQwXFx1MDQzZVxcdTA0NDhcIixcImVuXCI6XCJncm9zelwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJrenRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkthemFoc3RcXHUwMTAxbmFzIHRlbmdlXCIsXCJydVwiOlwiXFx1MDQxYVxcdTA0MzBcXHUwNDM3XFx1MDQzMFxcdTA0NDVcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQyXFx1MDQzNVxcdTA0M2RcXHUwNDMzXFx1MDQzNVwiLFwiZW5cIjpcImthemFraHN0YW4gdGVuZ2VcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcInRpalxcdTAxMmJuaVwiLFwicnVcIjpcIlxcdTA0NDJcXHUwNDM4XFx1MDQ0YlxcdTA0M2RcIixcImVuXCI6XCJ0XFx1MDEzMXluc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJjaGZcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxNjB2ZWljZXMgZnJhbmtzXCIsXCJydVwiOlwiXFx1MDQyOFxcdTA0MzJcXHUwNDM1XFx1MDQzOVxcdTA0NDZcXHUwNDMwXFx1MDQ0MFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0NDBcXHUwNDMwXFx1MDQzZFxcdTA0M2FcIixcImVuXCI6XCJzd2lzcyBmcmFuY1wifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwicmFwZW5pXCIsXCJydVwiOlwiXFx1MDQ0MFxcdTA0MzBcXHUwNDNmXFx1MDQzZlxcdTA0MzVcXHUwNDNkXFx1MDQzZVxcdTA0MzJcIixcImVuXCI6XCJyYXBwZW5zXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImFlZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQXB2aWVub3RvIEFyXFx1MDEwMWJ1IEVtaXJcXHUwMTAxdHUgZGlyaGFtc1wiLFwicnVcIjpcIlxcdTA0MTRcXHUwNDM4XFx1MDQ0MFxcdTA0NDVcXHUwNDMwXFx1MDQzYyBcXHUwNDFlXFx1MDQxMFxcdTA0MmRcIixcImVuXCI6XCJ1bml0ZWQgYXJhYiBlbWlyYXRlcyBkaXJoYW1cIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcImZpbGlcIixcInJ1XCI6XCJcXHUwNDQ0XFx1MDQzOFxcdTA0M2JcXHUwNDQxXCIsXCJlblwiOlwiZmlsc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJka2tcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkRcXHUwMTAxbmlqYXMga3JvbmFcIixcInJ1XCI6XCJcXHUwNDE0XFx1MDQzMFxcdTA0NDJcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwiZGFuaXNoIGtyb25lXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJcXHUwMTEzcmlcIixcInJ1XCI6XCJcXHUwNDRkXFx1MDQ0MFxcdTA0MzVcIixcImVuXCI6XCJvcmVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcInNla1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiWnZpZWRyaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MjhcXHUwNDMyXFx1MDQzNVxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwic3dlZGlzaCBrcm9uYVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiXFx1MDExM3JpXCIsXCJydVwiOlwiXFx1MDQ0ZFxcdTA0NDBcXHUwNDM1XCIsXCJlblwiOlwib3JlXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJub2tcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk5vcnZcXHUwMTEzXFx1MDEyM2lqYXMga3JvbmFcIixcInJ1XCI6XCJcXHUwNDFkXFx1MDQzZVxcdTA0NDBcXHUwNDMyXFx1MDQzNVxcdTA0MzZcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwibm9yd2VnaWFuIGtyb25lXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJcXHUwMTEzcmlcIixcInJ1XCI6XCJcXHUwNDRkXFx1MDQ0MFxcdTA0MzVcIixcImVuXCI6XCJvcmVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcImJnblwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQnVsZ1xcdTAxMDFyaWphcyBsZXZhXCIsXCJydVwiOlwiXFx1MDQxMVxcdTA0M2VcXHUwNDNiXFx1MDQzM1xcdTA0MzBcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDNiXFx1MDQzNVxcdTA0MzJcIixcImVuXCI6XCJidWxnYXJpYW4gbGV2XCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImh1ZlwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVW5nXFx1MDEwMXJpamFzIGZvcmludHNcIixcInJ1XCI6XCJcXHUwNDMyXFx1MDQzNVxcdTA0M2RcXHUwNDMzXFx1MDQzNVxcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDNlXFx1MDQ0MFxcdTA0MzhcXHUwNDNkXFx1MDQ0MlwiLFwiZW5cIjpcImh1bmdhcmlhbiBmb3JpbnRcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwidHJ5XCI6e1wibmFtZVwiOntcImx2XCI6XCJUdXJjaWphcyBsaXJhXCIsXCJydVwiOlwiXFx1MDQyMlxcdTA0NDNcXHUwNDQwXFx1MDQzNVxcdTA0NDZcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYlxcdTA0MzhcXHUwNDQwXFx1MDQzMFwiLFwiZW5cIjpcInR1cmtpc2ggbGlyYVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiYWxsXCI6e1wibmFtZVwiOntcImx2XCI6XCJBbGJcXHUwMTAxbmlqYXMgbGVrc1wiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDNiXFx1MDQzMVxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDNiXFx1MDQzNVxcdTA0M2FcIixcImVuXCI6XCJhbGJhbmlhbiBsZWtcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiaHJrXCI6e1wibmFtZVwiOntcImx2XCI6XCJIb3J2XFx1MDEwMXRpamFzIGt1bmFcIixcInJ1XCI6XCJYXFx1MDQzZVxcdTA0NDBcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQzXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJjcm9hdGlhbiBrdW5hXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJjemtcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxMGNlaGlqYXMga3JvbmFcIixcInJ1XCI6XCJcXHUwNDI3XFx1MDQzNVxcdTA0NDhcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwiY3plY2gga29ydW5hXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJnZWxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkdydXppamFzIGxhcmlcIixcInJ1XCI6XCJcXHUwNDEzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzOFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcIixcImVuXCI6XCJnZW9yZ2lhbiBsYXJpXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImxrclwiOntcIm5hbWVcIjp7XCJsdlwiOlwiXFx1MDE2MHJpbGFua2FzIHJcXHUwMTZicGlqYVwiLFwicnVcIjpcIlxcdTA0MjhcXHUwNDQwXFx1MDQzOC1cXHUwNDNiXFx1MDQzMFxcdTA0M2RcXHUwNDNhXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0NDBcXHUwNDQzXFx1MDQzZlxcdTA0MzhcXHUwNDRmXCIsXCJlblwiOlwic3JpIGxhbmthbiBydXBlZVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwidG5kXCI6e1wibmFtZVwiOntcImx2XCI6XCJUdW5pc2lqYXMgZGluXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQyMlxcdTA0NDNcXHUwNDNkXFx1MDQzOFxcdTA0NDFcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwidHVuaXNpYW4gZGluYXJcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiaWxzXCI6e1wibmFtZVwiOntcImx2XCI6XCJJenJhXFx1MDExM2xhcyBcXHUwMTYxZWtlbHNcIixcInJ1XCI6XCJcXHUwNDE4XFx1MDQzN1xcdTA0NDBcXHUwNDMwXFx1MDQzOFxcdTA0M2JcXHUwNDRjXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ4XFx1MDQzNVxcdTA0M2FcXHUwNDM1XFx1MDQzYlxcdTA0NGNcIixcImVuXCI6XCJpc3JhZWxpIHNoZXFlbFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJqb2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkpvcmRcXHUwMTAxbmlqYXMgZGluXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxOFxcdTA0M2VcXHUwNDQwXFx1MDQzNFxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzOFxcdTA0M2RcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImpvcmRhbmlhbiBkaW5hclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJieW5cIjp7XCJuYW1lXCI6e1wibHZcIjpcIkJhbHRrcmlldmlqYXMgcnVibGlzXCIsXCJydVwiOlwiXFx1MDQxMVxcdTA0MzVcXHUwNDNiXFx1MDQzZVxcdTA0NDBcXHUwNDQzXFx1MDQ0MVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0NDNcXHUwNDMxXFx1MDQzYlxcdTA0NGNcIixcImVuXCI6XCJiZWxhcnVzaWFuIG5ldyBydWJsZVwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJlZ3BcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxMTJcXHUwMTIzaXB0ZXMgbVxcdTAxMDFyY2lcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MTVcXHUwNDMzXFx1MDQzOFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MlxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0NDNcXHUwNDNkXFx1MDQ0MlwiLFwiZW5cIjpcImVneXB0aWFuIHBvdW5kXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInVhaFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVWtyYWluYXMgZ3Jpdm5hXCIsXCJydVwiOlwiXFx1MDQyM1xcdTA0M2FcXHUwNDQwXFx1MDQzMFxcdTA0MzhcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDMzXFx1MDQ0MFxcdTA0MzhcXHUwNDMyXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJ1a3JhaW5pYW4gaHJ5dm5pYVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiY255XCI6e1wibmFtZVwiOntcImx2XCI6XCJcXHUwMTM2XFx1MDEyYm5hcyBqdWFcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MWFcXHUwNDM4XFx1MDQ0MlxcdTA0MzBcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDRlXFx1MDQzMFxcdTA0M2RcXHUwNDRjXCIsXCJlblwiOlwiY2hpbmVzZSB5dWFuXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInRoYlwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVGFpemVtZXMgYmF0c1wiLFwicnVcIjpcIlxcdTA0MjJcXHUwNDMwXFx1MDQzOFxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzFcXHUwNDMwXFx1MDQ0MlwiLFwiZW5cIjpcInRoYWkgYmFodFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJ2bmRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlZqZXRuYW1hcyBkb25nc1wiLFwicnVcIjpcIlxcdTA0MTJcXHUwNDRjXFx1MDQzNVxcdTA0NDJcXHUwNDNkXFx1MDQzMFxcdTA0M2NcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzZFxcdTA0MzNcIixcImVuXCI6XCJ2aWV0bmFtZXNlIGRvbmdcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwicGhwXCI6e1wibmFtZVwiOntcImx2XCI6XCJGaWxpcFxcdTAxMmJudSBwZXNvXCIsXCJydVwiOlwiXFx1MDQyNFxcdTA0MzhcXHUwNDNiXFx1MDQzOFxcdTA0M2ZcXHUwNDNmXFx1MDQzOFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcImVuXCI6XCJwaGlsaXBwaW5lIHBlc29cIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibWFkXCI6e1wibmFtZVwiOntcImx2XCI6XCJNYXJva2FzIGRpcmhhbXNcIixcInJ1XCI6XCJcXHUwNDFjXFx1MDQzMFxcdTA0NDBcXHUwNDNlXFx1MDQzYVxcdTA0M2FcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDQwXFx1MDQ0NVxcdTA0MzBcXHUwNDNjXCIsXCJlblwiOlwibW9yb2NjYW4gZGlyaGFtXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImF1ZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQXVzdHJcXHUwMTAxbGlqYXMgZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxMFxcdTA0MzJcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDMwXFx1MDQzYlxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJhdXN0cmFsaWFuIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJhcnNcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkFyZ2VudFxcdTAxMmJuYXMgcGVzb1wiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDQwXFx1MDQzM1xcdTA0MzVcXHUwNDNkXFx1MDQ0MlxcdTA0MzhcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDNlXFx1MDQzNSBcXHUwNDNmXFx1MDQzNVxcdTA0NDFcXHUwNDNlXCIsXCJlblwiOlwiYXJnZW50aW5lIHBlc29cIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwianB5XCI6e1wibmFtZVwiOntcImx2XCI6XCJKYXBcXHUwMTAxbmFzIGpcXHUwMTEzbmFcIixcInJ1XCI6XCJcXHUwNDJmXFx1MDQzZlxcdTA0M2VcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDM4XFx1MDQzNVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwiamFwYW5lc2UgeWVuXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJpZHJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkluZG9uXFx1MDExM3ppamFzIHJcXHUwMTZicGlqYVwiLFwicnVcIjpcIlxcdTA0MThcXHUwNDNkXFx1MDQzNFxcdTA0M2VcXHUwNDNkXFx1MDQzNVxcdTA0MzdcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQ0MFxcdTA0NDNcXHUwNDNmXFx1MDQzOFxcdTA0NGZcIixcImVuXCI6XCJpbmRvbmVzaWFuIHJ1cGlhaFwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiaXNrXCI6e1wibmFtZVwiOntcImx2XCI6XCJJc2xhbmRlcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MThcXHUwNDQxXFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJpY2VsYW5kIGtyb25hXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJhbWRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkFybVxcdTAxMTNuaWphcyBkcmFtc1wiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDQwXFx1MDQzY1xcdTA0NGZcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQ0MFxcdTA0MzBcXHUwNDNjXCIsXCJlblwiOlwiYXJtZW5pYW4gZHJhbVwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJyb25cIjp7XCJuYW1lXCI6e1wibHZcIjpcIlJ1bVxcdTAxMDFuaWphcyBsZWphXCIsXCJydVwiOlwiXFx1MDQyMFxcdTA0NDNcXHUwNDNjXFx1MDQ0YlxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2JcXHUwNDM1XFx1MDQ0ZlwiLFwiZW5cIjpcInJvbWFuaWFuIGxldVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwic2dkXCI6e1wibmFtZVwiOntcImx2XCI6XCJTaW5nYXBcXHUwMTZicmFzIGRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MjFcXHUwNDM4XFx1MDQzZFxcdTA0MzNcXHUwNDMwXFx1MDQzZlxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJzaW5nYXBvcmUgZG9sbGFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcInNicFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiU2tvdGlqYXMgbVxcdTAxMDFyY2lcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MjhcXHUwNDNlXFx1MDQ0MlxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDQzXFx1MDQzZFxcdTA0NDJcIixcImVuXCI6XCJzY290dGlzaCBwb3VuZFwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJjYWRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkthblxcdTAxMDFkYXMgZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxYVxcdTA0MzBcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImNhbmFkaWFuIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJicmxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkJyYXpcXHUwMTJibGlqYXMgcmVcXHUwMTAxbHNcIixcInJ1XCI6XCJcXHUwNDExXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQzOFxcdTA0M2JcXHUwNDRjXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQzNVxcdTA0MzBcXHUwNDNiXCIsXCJlblwiOlwiYnJhemlsaWFuIHJlYWxcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwiemFyXCI6e1wibmFtZVwiOntcImx2XCI6XCJEaWVudmlkXFx1MDEwMWZyaWthcyByZW5kc1wiLFwicnVcIjpcIlxcdTA0MmVcXHUwNDM2XFx1MDQzZFxcdTA0M2VcXHUwNDMwXFx1MDQ0NFxcdTA0NDBcXHUwNDM4XFx1MDQzYVxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQ0ZFxcdTA0M2RcXHUwNDM0XCIsXCJlblwiOlwic291dGggYWZyaWNhbiByYW5kXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcImluclwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSW5kaWphcyByXFx1MDE2YnBpamFcIixcInJ1XCI6XCJcXHUwNDE4XFx1MDQzZFxcdTA0MzRcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQ0MFxcdTA0NDNcXHUwNDNmXFx1MDQzOFxcdTA0NGZcIixcImVuXCI6XCJpbmRpYW4gcnVwZWVcIn0sXCJzZXhcIjp7XCJydVwiOlwic2hlXCJ9fSxcInJzZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiU2VyYmlqYXMgZGluXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQyMVxcdTA0MzVcXHUwNDQwXFx1MDQzMVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJzZXJiaWFuIGRpbmFyXCJ9LFwic2V4XCI6e1wicnVcIjpcImhlXCJ9fSxcIm56ZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSmF1bnpcXHUwMTEzbGFuZGVzIGRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MWRcXHUwNDNlXFx1MDQzMlxcdTA0M2VcXHUwNDM3XFx1MDQzNVxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcIm5ldyB6ZWFsYW5kIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJteXJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1hbGFpemlqYXMgcmluZ2l0c1wiLFwicnVcIjpcIk1cXHUwNDMwXFx1MDQzYlxcdTA0MzBcXHUwNDM5XFx1MDQzN1xcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQzOFxcdTA0M2RcXHUwNDMzXFx1MDQzM1xcdTA0MzhcXHUwNDQyXCIsXCJlblwiOlwibWFsYXlzaWFuIHJpbmdnaXRcIn0sXCJzZXhcIjp7XCJydVwiOlwiaGVcIn19LFwibXVyXCI6e1wibmFtZVwiOntcImx2XCI6XCJNYXVyXFx1MDEyYmNpamFzIHNhbGFzIHJcXHUwMTZicGlqYVwiLFwicnVcIjpcIlxcdTA0MWNcXHUwNDMwXFx1MDQzMlxcdTA0NDBcXHUwNDM4XFx1MDQzYVxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDQwXFx1MDQ0M1xcdTA0M2ZcXHUwNDM4XFx1MDQ0ZlwiLFwiZW5cIjpcIm1hdXJpdGlhbiBydXBlZVwifSxcInNleFwiOntcInJ1XCI6XCJzaGVcIn19LFwiaGtkXCI6e1wibmFtZVwiOntcImx2XCI6XCJIb25rb25nYXMgZG9sXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxM1xcdTA0M2VcXHUwNDNkXFx1MDQzYVxcdTA0M2VcXHUwNDNkXFx1MDQzM1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwiaG9uZyBrb25nIGRvbGxhclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJrcndcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkRpZW52aWRrb3JlamFzIHZvbmFcIixcInJ1XCI6XCJcXHUwNDJlXFx1MDQzNlxcdTA0M2RcXHUwNDNlXFx1MDQzYVxcdTA0M2VcXHUwNDQwXFx1MDQzNVxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0MzJcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJzb3V0aCBrb3JlYW4gd29uXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJteG5cIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1la3Npa2FzIHBlc29cIixcInJ1XCI6XCJcXHUwNDFjXFx1MDQzNVxcdTA0M2FcXHUwNDQxXFx1MDQzOFxcdTA0M2FcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzZVxcdTA0MzUgXFx1MDQzZlxcdTA0MzVcXHUwNDQxXFx1MDQzZVwiLFwiZW5cIjpcIm1leGljYW4gcGVzb1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJta2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1hXFx1MDEzN2Vkb25pamFzIGRlblxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MWNcXHUwNDMwXFx1MDQzYVxcdTA0MzVcXHUwNDM0XFx1MDQzZVxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwibWFjZWRvbmlhbiBkaW5hclwifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJkb3BcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkRvbWluaWtcXHUwMTAxbmFzIHBlc29cIixcInJ1XCI6XCJcXHUwNDE0XFx1MDQzZVxcdTA0M2NcXHUwNDM4XFx1MDQzZFxcdTA0MzhcXHUwNDNhXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcImVuXCI6XCJkb21pbmljYW4gcGVzb1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJrZXNcIjp7XCJuYW1lXCI6e1wibHZcIjpcIktlbmlqYXMgXFx1MDE2MWlsaVxcdTAxNDZcXHUwMTYxXCIsXCJydVwiOlwiXFx1MDQxYVxcdTA0MzVcXHUwNDNkXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDhcXHUwNDM4XFx1MDQzYlxcdTA0M2JcXHUwNDM4XFx1MDQzZFxcdTA0MzNcIixcImVuXCI6XCJrZW55YSBzaGlsbGluZ1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJkZW1cIjp7XCJuYW1lXCI6e1wibHZcIjpcIlZcXHUwMTAxY2lqYXMgbWFya2FcIixcInJ1XCI6XCJcXHUwNDFkXFx1MDQzNVxcdTA0M2NcXHUwNDM1XFx1MDQ0NlxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNjXFx1MDQzMFxcdTA0NDBcXHUwNDNhXFx1MDQzMFwiLFwiZW5cIjpcImdlcm1hbiBtYXJrXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJlZWtcIjp7XCJuYW1lXCI6e1wibHZcIjpcIklnYXVuaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MmRcXHUwNDQxXFx1MDQ0MlxcdTA0M2VcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0MFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcImVzdG9uaWFuIGtyb29uXCJ9LFwic2V4XCI6e1wicnVcIjpcInNoZVwifX0sXCJsdGxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkxpZXR1dmFzIGxpdHNcIixcInJ1XCI6XCJcXHUwNDFiXFx1MDQzOFxcdTA0NDJcXHUwNDNlXFx1MDQzMlxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzhcXHUwNDQyXCIsXCJlblwiOlwibGl0aHVhbmlhbiBsaXRhc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX0sXCJsdmxcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkxhdHZpamFzIGxhdHNcIixcInJ1XCI6XCJcXHUwNDFiXFx1MDQzMFxcdTA0NDJcXHUwNDMyXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDMwXFx1MDQ0MlwiLFwiZW5cIjpcImxhdHZpYW4gbGF0c1wifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwic2FudGltaVwiLFwicnVcIjpcIlxcdTA0NDFcXHUwNDMwXFx1MDQzZFxcdTA0NDJcXHUwNDM4XFx1MDQzY1xcdTA0M2VcXHUwNDMyXCIsXCJlblwiOlwic2FudGltc1wifSxcInNleFwiOntcInJ1XCI6XCJoZVwifX19O1xyXG4gICAgdGhpcy5udW1Db25mID0ge1widW5pdHNcIjp7XCJsdlwiOltcIlwiLFwidmllbnNcIixcImRpdmlcIixcInRyXFx1MDEyYnNcIixcIlxcdTAxMGRldHJpXCIsXCJwaWVjaVwiLFwic2VcXHUwMTYxaVwiLFwic2VwdGlcXHUwMTQ2aVwiLFwiYXN0b1xcdTAxNDZpXCIsXCJkZXZpXFx1MDE0NmlcIl0sXCJydVwiOltcIlwiLFtcIlxcdTA0M2VcXHUwNDM0XFx1MDQzOFxcdTA0M2RcIixcIlxcdTA0M2VcXHUwNDM0XFx1MDQzZFxcdTA0MzBcIl0sW1wiXFx1MDQzNFxcdTA0MzJcXHUwNDMwXCIsXCJcXHUwNDM0XFx1MDQzMlxcdTA0MzVcIl0sXCJcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcIixcIlxcdTA0NDdcXHUwNDM1XFx1MDQ0MlxcdTA0NGJcXHUwNDQwXFx1MDQzNVwiLFwiXFx1MDQzZlxcdTA0NGZcXHUwNDQyXFx1MDQ0Y1wiLFwiXFx1MDQ0OFxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0NGNcIixcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcIixcIlxcdTA0MzJcXHUwNDNlXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQ0Y1wiLFwiXFx1MDQzNFxcdTA0MzVcXHUwNDMyXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXCJdfSxcInRlZW5zXCI6e1wibHZcIjp7XCIxMFwiOlwiZGVzbWl0XCIsXCIxMVwiOlwidmllbnBhZHNtaXRcIixcIjEyXCI6XCJkaXZwYWRzbWl0XCIsXCIxM1wiOlwidHJcXHUwMTJic3BhZHNtaXRcIixcIjE0XCI6XCJcXHUwMTBkZXRycGFkc21pdFwiLFwiMTVcIjpcInBpZWNwYWRzbWl0XCIsXCIxNlwiOlwic2VcXHUwMTYxcGFkc21pdFwiLFwiMTdcIjpcInNlcHRpXFx1MDE0NnBhZHNtaXRcIixcIjE4XCI6XCJhc3RvXFx1MDE0NnBhZHNtaXRcIixcIjE5XCI6XCJkZXZpXFx1MDE0NnBhZHNtaXRcIn0sXCJydVwiOntcIjEwXCI6XCJcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlxcdTA0NGNcIixcIjExXCI6XCJcXHUwNDNlXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxMlwiOlwiXFx1MDQzNFxcdTA0MzJcXHUwNDM1XFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMTNcIjpcIlxcdTA0NDJcXHUwNDQwXFx1MDQzNVxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjE0XCI6XCJcXHUwNDQ3XFx1MDQzNVxcdTA0NDJcXHUwNDRiXFx1MDQ0MFxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjE1XCI6XCJcXHUwNDNmXFx1MDQ0ZlxcdTA0NDJcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXCIxNlwiOlwiXFx1MDQ0OFxcdTA0MzVcXHUwNDQxXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiMTdcIjpcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjE4XCI6XCJcXHUwNDMyXFx1MDQzZVxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjE5XCI6XCJcXHUwNDM0XFx1MDQzNVxcdTA0MzJcXHUwNDRmXFx1MDQ0MlxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIn19LFwidGVubmVyc1wiOntcImx2XCI6e1wiMlwiOlwiZGl2ZGVzbWl0XCIsXCIzXCI6XCJ0clxcdTAxMmJzZGVzbWl0XCIsXCI0XCI6XCJcXHUwMTBkZXRyZGVzbWl0XCIsXCI1XCI6XCJwaWVjZGVzbWl0XCIsXCI2XCI6XCJzZVxcdTAxNjFkZXNtaXRcIixcIjdcIjpcInNlcHRpXFx1MDE0NmRlc21pdFwiLFwiOFwiOlwiYXN0b1xcdTAxNDZkZXNtaXRcIixcIjlcIjpcImRldmlcXHUwMTQ2ZGVzbWl0XCJ9LFwicnVcIjp7XCIyXCI6XCJcXHUwNDM0XFx1MDQzMlxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFwiM1wiOlwiXFx1MDQ0MlxcdTA0NDBcXHUwNDM4XFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcIjRcIjpcIlxcdTA0NDFcXHUwNDNlXFx1MDQ0MFxcdTA0M2VcXHUwNDNhXCIsXCI1XCI6XCJcXHUwNDNmXFx1MDQ0ZlxcdTA0NGNcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlwiLFwiNlwiOlwiXFx1MDQ0OFxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0NGNcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlwiLFwiN1wiOlwiXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQ0Y1xcdTA0MzRcXHUwNDM1XFx1MDQ0MVxcdTA0NGZcXHUwNDQyXCIsXCI4XCI6XCJcXHUwNDMyXFx1MDQzZVxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlwiLFwiOVwiOlwiXFx1MDQzNFxcdTA0MzVcXHUwNDMyXFx1MDQ0ZlxcdTA0M2RcXHUwNDNlXFx1MDQ0MVxcdTA0NDJcXHUwNDNlXCJ9fSxcImh1bmRyZWRzXCI6e1wicnVcIjp7XCJcIjpcIlwiLFwiMFwiOlwiXCIsXCIxXCI6XCJcXHUwNDQxXFx1MDQ0MlxcdTA0M2VcIixcIjJcIjpcIlxcdTA0MzRcXHUwNDMyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzOFwiLFwiM1wiOlwiXFx1MDQ0MlxcdTA0NDBcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXCIsXCI0XCI6XCJcXHUwNDQ3XFx1MDQzNVxcdTA0NDJcXHUwNDRiXFx1MDQ0MFxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcIixcIjVcIjpcIlxcdTA0M2ZcXHUwNDRmXFx1MDQ0MlxcdTA0NGNcXHUwNDQxXFx1MDQzZVxcdTA0NDJcIixcIjZcIjpcIlxcdTA0NDhcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDRjXFx1MDQ0MVxcdTA0M2VcXHUwNDQyXCIsXCI3XCI6XCJcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXFx1MDQ0MVxcdTA0M2VcXHUwNDQyXCIsXCI4XCI6XCJcXHUwNDMyXFx1MDQzZVxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcXHUwNDQxXFx1MDQzZVxcdTA0NDJcIixcIjlcIjpcIlxcdTA0MzRcXHUwNDM1XFx1MDQzMlxcdTA0NGZcXHUwNDQyXFx1MDQ0Y1xcdTA0NDFcXHUwNDNlXFx1MDQ0MlwifX19O1xyXG4gICAgaWYgKGN1ckNvbmYpIHtcclxuICAgICAgICB0aGlzLmN1ckNvbmYgPSBjdXJDb25mO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bUNvbmYpIHtcclxuICAgICAgICB0aGlzLmN1ckNvbmYgPSBudW1Db25mO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb25mTmFtZXMgPSB7fTtcclxuICAgIHZhciBjb25mSHVuZCA9IHt9O1xyXG4gICAgZm9yICh2YXIgY29kZSBpbiB0aGlzLmN1ckNvbmYpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJDb25mW2NvZGVdWyduYW1lJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBsYW5nIGluIHRoaXMuY3VyQ29uZltjb2RlXVsnbmFtZSddKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZk5hbWVzW2xhbmddID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25mTmFtZXNbbGFuZ10gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbmZOYW1lc1tsYW5nXVtjb2RlXSA9IHRoaXMuY3VyQ29uZltjb2RlXVsnbmFtZSddW2xhbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1ckNvbmZbY29kZV1bJ2h1bmRyZWR0aHMnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAobGFuZyBpbiB0aGlzLmN1ckNvbmZbY29kZV1bJ2h1bmRyZWR0aHMnXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZIdW5kW2xhbmddID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25mSHVuZFtsYW5nXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uZkh1bmRbbGFuZ11bY29kZV0gPSB0aGlzLmN1ckNvbmZbY29kZV1bJ2h1bmRyZWR0aHMnXVtsYW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY3VycmVuY3lMdiA9IGNvbmZOYW1lcy5sdjtcclxuICAgIHRoaXMuaHVuZHJlZHRoc0x2ID0gY29uZkh1bmQubHY7XHJcbiAgICB0aGlzLmN1cnJlbmN5UnUgPSBjb25mTmFtZXMucnU7XHJcbiAgICB0aGlzLmh1bmRyZWR0aHNSdSA9IGNvbmZIdW5kLnJ1O1xyXG4gICAgdGhpcy5jdXJyZW5jeUVuID0gY29uZk5hbWVzLmVuO1xyXG4gICAgdGhpcy5odW5kcmVkdGhzRW4gPSBjb25mSHVuZC5lbjtcclxuXHJcbiAgICB0aGlzLm9uZUh1bmRyZWRMdiA9ICd2aWVucyBzaW10cyc7XHJcbiAgICB0aGlzLmh1bmRyYWRzID0gJ3NpbXRpJztcclxuICAgIHRoaXMuYW5kcyA9IHsnbHYnOiAndW4nLCAnZW4nOidhbmQnLCAncnUnOifQuCd9O1xyXG4gICAgdGhpcy5jb21hdHMgPSB7J2x2JzogJ2tvbWF0cycsICdlbic6J2NvbWEnLCAncnUnOifQutC+0LzQsCd9O1xyXG4gICAgdGhpcy5udWxsZSA9IHsnbHYnOiAnbnVsbGUnLCAncnUnOifQvdC+0LvRjCd9O1xyXG5cclxuICAgIHRoaXMuYmlnTnVtcyA9IHtcclxuICAgICAgICAnMyc6IHtcclxuICAgICAgICAgICAgJ3J1JzogWyfRgtGL0YHRj9GH0LAnLCAn0YLRi9GB0Y/RhycsICfRgtGL0YHRj9GH0LgnXSxcclxuICAgICAgICAgICAgJ2x2JzogWyd0xatrc3RvdGlzJywgJ3TFq2tzdG/FoWknXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzYnOiB7XHJcbiAgICAgICAgICAgICdydSc6IFsn0LzQuNC70LvQuNC+0L0nLCAn0LzQuNC70LvQuNC+0L3QvtCyJywgJ9C80LjQu9C70LjQvtC90LAnXSxcclxuICAgICAgICAgICAgJ2x2JzogWydtaWxqb25zJywgJ21pbGpvbmknXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzknOiB7XHJcbiAgICAgICAgICAgICdydSc6IFsn0LzQuNC70LvQuNCw0YDQtCcsICfQvNC40LvQu9C40L7QvdC+0LInLCAn0LzQuNC70LvQuNCw0YDQtNCwJ10sXHJcbiAgICAgICAgICAgICdsdic6IFsnbWlsamFyZHMnLCAnbWlsamFyZGknXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzEyJzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9GC0YDQuNC70LvQuNC+0L0nLCAn0YLRgNC40LvQu9C40L7QvdC+0LInLCAn0YLRgNC40LvQu9C40L7QvdCwJ10sXHJcbiAgICAgICAgICAgICdsdic6IFsndHJpbGpvbnMnLCAndHJpbGpvbmknXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzE1Jzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9C60LLQsNC00YDQuNC70LvQuNC+0L0nLCAn0LrQstCw0LTRgNC40LvQu9C40L7QvdC+0LInLCAn0LrQstCw0LTRgNC40LvQu9C40L7QvdCwJ10sXHJcbiAgICAgICAgICAgICdsdic6IFsna3ZhZHJpbGpvbnMnLCAna3ZhZHJpbGpvbmknXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29yZFRyYW5zbGF0aW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==