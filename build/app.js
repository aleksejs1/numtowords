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
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.repeat */ "./node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var numbers2words__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! numbers2words */ "./node_modules/numbers2words/build/numbers2words.min.js");
/* harmony import */ var numbers2words__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(numbers2words__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./translations */ "./src/js/translations.js");














var NumToWords = function NumToWords() {
  this.translator = new numbers2words__WEBPACK_IMPORTED_MODULE_11___default.a("EN_US");
  this.translations = new _translations__WEBPACK_IMPORTED_MODULE_12__["default"]();
  this.lang = 'lv';
};

NumToWords.prototype.getVals = function () {
  return this.translations.currencyLv;
};

NumToWords.prototype.units = function (numericUnit) {
  return this.translations.numConf.units[this.lang][numericUnit];
};

NumToWords.prototype.tenners = function (numericTen) {
  if (numericTen[0] === "0") {
    return this.units(numericTen[1]);
  }

  if (numericTen[0] === "1") {
    return this.translations.numConf.teens[this.lang][numericTen];
  }

  return this.translations.numConf.tenners[this.lang][numericTen[0]] + " " + this.units(numericTen[1]);
};

NumToWords.prototype.hundreds = function (numericHundred) {
  if (this.lang === 'ru') {
    return this.translations.numConf.hundreds.ru[numericHundred[0]] + ' ' + this.tenners(numericHundred[1] + numericHundred[2]);
  }

  if (numericHundred[0] === "0") {
    return this.tenners(numericHundred[1] + numericHundred[2]);
  }

  if (numericHundred[0] === "1") {
    return this.translations.oneHundredLv + ' ' + this.tenners(numericHundred[1] + numericHundred[2]);
  }

  return this.units(numericHundred[0]) + ' ' + this.translations.hundrads + ' ' + this.tenners(numericHundred[1] + numericHundred[2]);
};

NumToWords.prototype.genericCaller = function (methodName) {
  var args = [].slice.call(arguments);
  args.shift();
  return this[methodName].apply(this, args);
};

NumToWords.prototype.uni = function (num, len) {
  if (len === 3) {
    return this.genericCaller('hundreds', num);
  }

  var v1 = this.translations.bigNums[(len - 3).toString()][this.lang][0];
  var vm = this.translations.bigNums[(len - 3).toString()][this.lang][1];
  var milioni = num.substring(0, 3);
  var thousandsci = num.substring(3, len);

  if (milioni === '000') {
    return this.genericCaller('uni', thousandsci, len - 3);
  }

  var miljWord = vm;

  if (milioni[2] === "1" && milioni[1] !== "1") {
    miljWord = v1;
  }

  return this.hundreds(milioni) + ' ' + miljWord + ' ' + this.genericCaller('uni', thousandsci, len - 3);
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
    num = this.uni(num, 18).trim();

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
      }
    },
    "bgn": {
      "name": {
        "lv": "Bulg\u0101rijas leva",
        "ru": "\u0411\u043E\u043B\u0433\u0430\u0440\u0441\u043A\u0438\u0439 \u043B\u0435\u0432",
        "en": "bulgarian lev"
      }
    },
    "huf": {
      "name": {
        "lv": "Ung\u0101rijas forints",
        "ru": "\u0432\u0435\u043D\u0433\u0435\u0440\u0441\u043A\u0438\u0439 \u0444\u043E\u0440\u0438\u043D\u0442",
        "en": "hungarian forint"
      }
    },
    "try": {
      "name": {
        "lv": "Turcijas lira",
        "ru": "\u0422\u0443\u0440\u0435\u0446\u043A\u0430\u044F \u043B\u0438\u0440\u0430",
        "en": "turkish lira"
      }
    },
    "all": {
      "name": {
        "lv": "Alb\u0101nijas leks",
        "ru": "\u0410\u043B\u0431\u0430\u043D\u0441\u043A\u0438\u0439 \u043B\u0435\u043A",
        "en": "albanian lek"
      }
    },
    "hrk": {
      "name": {
        "lv": "Horv\u0101tijas kuna",
        "ru": "X\u043E\u0440\u0432\u0430\u0442\u0441\u043A\u0430\u044F \u043A\u0443\u043D\u0430",
        "en": "croatian kuna"
      }
    },
    "czk": {
      "name": {
        "lv": "\u010Cehijas krona",
        "ru": "\u0427\u0435\u0448\u0441\u043A\u0430\u044F \u043A\u0440\u043E\u043D\u0430",
        "en": "czech koruna"
      }
    },
    "gel": {
      "name": {
        "lv": "Gruzijas lari",
        "ru": "\u0413\u0440\u0443\u0437\u0438\u043D\u0441\u043A\u0438\u0439 \u043B\u0430\u0440\u0438",
        "en": "georgian lari"
      }
    },
    "lkr": {
      "name": {
        "lv": "\u0160rilankas r\u016Bpija",
        "ru": "\u0428\u0440\u0438-\u043B\u0430\u043D\u043A\u0438\u0439\u0441\u043A\u0430\u044F \u0440\u0443\u043F\u0438\u044F",
        "en": "sri lankan rupee"
      }
    },
    "tnd": {
      "name": {
        "lv": "Tunisijas din\u0101rs",
        "ru": "\u0422\u0443\u043D\u0438\u0441\u0441\u043A\u0438\u0439 \u0434\u0438\u043D\u0430\u0440",
        "en": "tunisian dinar"
      }
    },
    "ils": {
      "name": {
        "lv": "Izra\u0113las \u0161ekels",
        "ru": "\u0418\u0437\u0440\u0430\u0438\u043B\u044C\u0441\u043A\u0438\u0439 \u0448\u0435\u043A\u0435\u043B\u044C",
        "en": "israeli sheqel"
      }
    },
    "jod": {
      "name": {
        "lv": "Jord\u0101nijas din\u0101rs",
        "ru": "\u0418\u043E\u0440\u0434\u0430\u043D\u0441\u043A\u0438\u0439 \u0434\u0438\u043D\u0430\u0440",
        "en": "jordanian dinar"
      }
    },
    "byn": {
      "name": {
        "lv": "Baltkrievijas rublis",
        "ru": "\u0411\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u0440\u0443\u0431\u043B\u044C",
        "en": "belarusian new ruble"
      }
    },
    "egp": {
      "name": {
        "lv": "\u0112\u0123iptes m\u0101rci\u0146a",
        "ru": "\u0415\u0433\u0438\u043F\u0435\u0442\u0441\u043A\u0438\u0439 \u0444\u0443\u043D\u0442",
        "en": "egyptian pound"
      }
    },
    "uah": {
      "name": {
        "lv": "Ukrainas grivna",
        "ru": "\u0423\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0430\u044F \u0433\u0440\u0438\u0432\u043D\u0430",
        "en": "ukrainian hryvnia"
      }
    },
    "cny": {
      "name": {
        "lv": "\u0136\u012Bnas jua\u0146a",
        "ru": "\u041A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0439 \u044E\u0430\u043D\u044C",
        "en": "chinese yuan"
      }
    },
    "thb": {
      "name": {
        "lv": "Taizemes bats",
        "ru": "\u0422\u0430\u0438\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0439 \u0431\u0430\u0442",
        "en": "thai baht"
      }
    },
    "vnd": {
      "name": {
        "lv": "Vjetnamas dongs",
        "ru": "\u0412\u044C\u0435\u0442\u043D\u0430\u043C\u0441\u043A\u0438\u0439 \u0434\u043E\u043D\u0433",
        "en": "vietnamese dong"
      }
    },
    "php": {
      "name": {
        "lv": "Filip\u012Bnu peso",
        "ru": "\u0424\u0438\u043B\u0438\u043F\u043F\u0438\u043D\u0441\u043A\u043E\u0435 \u043F\u0435\u0441\u043E",
        "en": "philippine peso"
      }
    },
    "mad": {
      "name": {
        "lv": "Marokas dirhams",
        "ru": "\u041C\u0430\u0440\u043E\u043A\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0434\u0438\u0440\u0445\u0430\u043C",
        "en": "moroccan dirham"
      }
    },
    "aud": {
      "name": {
        "lv": "Austr\u0101lijas dol\u0101rs",
        "ru": "\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u0434\u043E\u043B\u043B\u0430\u0440",
        "en": "australian dollar"
      }
    },
    "ars": {
      "name": {
        "lv": "Argent\u012Bnas peso",
        "ru": "\u0410\u0440\u0433\u0435\u043D\u0442\u0438\u043D\u0441\u043A\u043E\u0435 \u043F\u0435\u0441\u043E",
        "en": "argentine peso"
      }
    },
    "jpy": {
      "name": {
        "lv": "Jap\u0101nas j\u0113na",
        "ru": "\u042F\u043F\u043E\u043D\u0441\u043A\u0430\u044F \u0438\u0435\u043D\u0430",
        "en": "japanese yen"
      }
    },
    "idr": {
      "name": {
        "lv": "Indon\u0113zijas r\u016Bpija",
        "ru": "\u0418\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u0439\u0441\u043A\u0430\u044F \u0440\u0443\u043F\u0438\u044F",
        "en": "indonesian rupiah"
      }
    },
    "isk": {
      "name": {
        "lv": "Islandes krona",
        "ru": "\u0418\u0441\u043B\u0430\u043D\u0434\u0441\u043A\u0430\u044F \u043A\u0440\u043E\u043D\u0430",
        "en": "iceland krona"
      }
    },
    "amd": {
      "name": {
        "lv": "Arm\u0113nijas drams",
        "ru": "\u0410\u0440\u043C\u044F\u043D\u0441\u043A\u0438\u0439 \u0434\u0440\u0430\u043C",
        "en": "armenian dram"
      }
    },
    "ron": {
      "name": {
        "lv": "Rum\u0101nijas leja",
        "ru": "\u0420\u0443\u043C\u044B\u043D\u0441\u043A\u0430\u044F \u043B\u0435\u044F",
        "en": "romanian leu"
      }
    },
    "sgd": {
      "name": {
        "lv": "Singap\u016Bras dol\u0101rs",
        "ru": "\u0421\u0438\u043D\u0433\u0430\u043F\u0443\u0440\u0441\u043A\u0438\u0439 \u0434\u043E\u043B\u043B\u0430\u0440",
        "en": "singapore dollar"
      }
    },
    "sbp": {
      "name": {
        "lv": "Skotijas m\u0101rci\u0146a",
        "ru": "\u0428\u043E\u0442\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0439 \u0444\u0443\u043D\u0442",
        "en": "scottish pound"
      }
    },
    "cad": {
      "name": {
        "lv": "Kan\u0101das dol\u0101rs",
        "ru": "\u041A\u0430\u043D\u0430\u0434\u0441\u043A\u0438\u0439 \u0434\u043E\u043B\u043B\u0430\u0440",
        "en": "canadian dollar"
      }
    },
    "brl": {
      "name": {
        "lv": "Braz\u012Blijas re\u0101ls",
        "ru": "\u0411\u0440\u0430\u0437\u0438\u043B\u044C\u0441\u043A\u0438\u0439 \u0440\u0435\u0430\u043B",
        "en": "brazilian real"
      }
    },
    "zar": {
      "name": {
        "lv": "Dienvid\u0101frikas rends",
        "ru": "\u042E\u0436\u043D\u043E\u0430\u0444\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0440\u044D\u043D\u0434",
        "en": "south african rand"
      }
    },
    "inr": {
      "name": {
        "lv": "Indijas r\u016Bpija",
        "ru": "\u0418\u043D\u0434\u0438\u0439\u0441\u043A\u0430\u044F \u0440\u0443\u043F\u0438\u044F",
        "en": "indian rupee"
      }
    },
    "rsd": {
      "name": {
        "lv": "Serbijas din\u0101rs",
        "ru": "\u0421\u0435\u0440\u0431\u0441\u043A\u0438\u0439 \u0434\u0438\u043D\u0430\u0440",
        "en": "serbian dinar"
      }
    },
    "nzd": {
      "name": {
        "lv": "Jaunz\u0113landes dol\u0101rs",
        "ru": "\u041D\u043E\u0432\u043E\u0437\u0435\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0439 \u0434\u043E\u043B\u043B\u0430\u0440",
        "en": "new zealand dollar"
      }
    },
    "myr": {
      "name": {
        "lv": "Malaizijas ringits",
        "ru": "M\u0430\u043B\u0430\u0439\u0437\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0438\u043D\u0433\u0433\u0438\u0442",
        "en": "malaysian ringgit"
      }
    },
    "mur": {
      "name": {
        "lv": "Maur\u012Bcijas salas r\u016Bpija",
        "ru": "\u041C\u0430\u0432\u0440\u0438\u043A\u0438\u0439\u0441\u043A\u0430\u044F \u0440\u0443\u043F\u0438\u044F",
        "en": "mauritian rupee"
      }
    },
    "hkd": {
      "name": {
        "lv": "Honkongas dol\u0101rs",
        "ru": "\u0413\u043E\u043D\u043A\u043E\u043D\u0433\u0441\u043A\u0438\u0439 \u0434\u043E\u043B\u043B\u0430\u0440",
        "en": "hong kong dollar"
      }
    },
    "krw": {
      "name": {
        "lv": "Dienvidkorejas vona",
        "ru": "\u042E\u0436\u043D\u043E\u043A\u043E\u0440\u0435\u0439\u0441\u043A\u0430\u044F \u0432\u043E\u043D\u0430",
        "en": "south korean won"
      }
    },
    "mxn": {
      "name": {
        "lv": "Meksikas peso",
        "ru": "\u041C\u0435\u043A\u0441\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0435 \u043F\u0435\u0441\u043E",
        "en": "mexican peso"
      }
    },
    "mkd": {
      "name": {
        "lv": "Ma\u0137edonijas den\u0101rs",
        "ru": "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438\u0439 \u0434\u0438\u043D\u0430\u0440",
        "en": "macedonian dinar"
      }
    },
    "dop": {
      "name": {
        "lv": "Dominik\u0101nas peso",
        "ru": "\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0435 \u043F\u0435\u0441\u043E",
        "en": "dominican peso"
      }
    },
    "kes": {
      "name": {
        "lv": "Kenijas \u0161ili\u0146\u0161",
        "ru": "\u041A\u0435\u043D\u0438\u0439\u0441\u043A\u0438\u0439 \u0448\u0438\u043B\u043B\u0438\u043D\u0433",
        "en": "kenya shilling"
      }
    },
    "dem": {
      "name": {
        "lv": "V\u0101cijas marka",
        "ru": "\u041D\u0435\u043C\u0435\u0446\u043A\u0430\u044F \u043C\u0430\u0440\u043A\u0430",
        "en": "german mark"
      }
    },
    "eek": {
      "name": {
        "lv": "Igaunijas krona",
        "ru": "\u042D\u0441\u0442\u043E\u043D\u0441\u043A\u0430\u044F \u043A\u0440\u043E\u043D\u0430",
        "en": "estonian kroon"
      }
    },
    "ltl": {
      "name": {
        "lv": "Lietuvas lits",
        "ru": "\u041B\u0438\u0442\u043E\u0432\u0441\u043A\u0438\u0439 \u043B\u0438\u0442",
        "en": "lithuanian litas"
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
      }
    }
  };
  this.numConf = {
    "units": {
      "lv": ["", "viens", "divi", "tr\u012Bs", "\u010Detri", "pieci", "se\u0161i", "septi\u0146i", "asto\u0146i", "devi\u0146i"],
      "ru": ["", "\u043E\u0434\u0438\u043D", "\u0434\u0432\u0430", "\u0442\u0440\u0438", "\u0447\u0435\u0442\u044B\u0440\u0435", "\u043F\u044F\u0442\u044C", "\u0448\u0435\u0441\u0442\u044C", "\u0441\u0435\u043C\u044C", "\u0432\u043E\u0441\u0435\u043C\u044C", "\u0434\u0435\u0432\u044F\u0442\u044C"]
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
      'ru': ['тысяча', 'тысяч'],
      'lv': ['tūkstotis', 'tūkstoši']
    },
    '6': {
      'ru': ['миллион', 'миллионов'],
      'lv': ['miljons', 'miljoni']
    },
    '9': {
      'ru': ['миллиард', 'миллионов'],
      'lv': ['miljards', 'miljardi']
    },
    '12': {
      'ru': ['триллион', 'тоиллионов'],
      'lv': ['triljons', 'triljoni']
    },
    '15': {
      'ru': ['квадриллион', 'квадриллионов'],
      'lv': ['kvadriljons', 'kvadriljoni']
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (WordTranslations);

/***/ })

},[["./src/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJudW10b3dvcmRzIiwiTnVtVG9Xb3JkcyIsInVwZGF0ZUFsbCIsImN1cnJlbmN5IiwiJCIsInZhbCIsImxhbmciLCJudW0iLCJyZXMiLCJnZXRGdWxsIiwiaHRtbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZmFkZUluIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJzaG93SGVscCIsImhpZGUiLCJvbiIsInNlbCIsInZhbHMiLCJnZXRWYWxzIiwia2V5IiwidmFsYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwibGFuZ1ZhbHMiLCJjaGVja2VkIiwidHJhbnNsYXRvciIsIlQyVyIsInRyYW5zbGF0aW9ucyIsIldvcmRUcmFuc2xhdGlvbnMiLCJwcm90b3R5cGUiLCJjdXJyZW5jeUx2IiwidW5pdHMiLCJudW1lcmljVW5pdCIsIm51bUNvbmYiLCJ0ZW5uZXJzIiwibnVtZXJpY1RlbiIsInRlZW5zIiwiaHVuZHJlZHMiLCJudW1lcmljSHVuZHJlZCIsInJ1Iiwib25lSHVuZHJlZEx2IiwiaHVuZHJhZHMiLCJnZW5lcmljQ2FsbGVyIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJjYWxsIiwiYXJndW1lbnRzIiwic2hpZnQiLCJhcHBseSIsInVuaSIsImxlbiIsInYxIiwiYmlnTnVtcyIsInRvU3RyaW5nIiwidm0iLCJtaWxpb25pIiwic3Vic3RyaW5nIiwidGhvdXNhbmRzY2kiLCJtaWxqV29yZCIsImdldFJlc3VsdCIsImNlbnQiLCJldXIiLCJwb2ludCIsImxhc3RJbmRleE9mIiwiY29tYSIsInBvaW50Q291bnQiLCJzcGxpdCIsImxlbmd0aCIsImNvbWFDb3VudCIsInNlcCIsInVuIiwiYW5kcyIsImNvbWF0cyIsImNlbnRpIiwicmVwbGFjZSIsImNlbnRpMSIsImNlbnRpMiIsIm9yaWciLCJ0b1dvcmRzIiwiTnVtYmVyIiwiZSIsInJlcGVhdCIsInRyaW0iLCJudWxsZSIsImVsZW1lbnRzIiwiZW5kaW5nc1J1IiwidG9Mb3dlckNhc2UiLCJudW1iZXIiLCJlbmRpbmdzIiwiZW5kaW5nIiwidmFsdXRhIiwiZWRlbiIsInNtIiwiY3VycmVuY3lFbiIsImh1bmRyZWR0aHNFbiIsImN1cnJlbmN5UnUiLCJodW5kcmVkdGhzUnUiLCJodW5kcmVkdGhzTHYiLCJzbXJlcyIsImhhc093blByb3BlcnR5IiwiY3VyQ29uZiIsImNvbmZOYW1lcyIsImNvbmZIdW5kIiwiY29kZSIsImx2IiwiZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsVUFBVSxHQUFHLElBQUlDLG1EQUFKLEVBQWpCOztBQUVBLFNBQVNDLFNBQVQsR0FBcUI7QUFDakIsTUFBSUMsUUFBUSxHQUFHQyw2Q0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxHQUFiLEVBQWY7QUFDQSxNQUFJQyxJQUFJLEdBQUdGLDZDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ0MsR0FBaEMsRUFBWDtBQUNBLE1BQUlFLEdBQUcsR0FBR0gsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUMsR0FBUixFQUFWO0FBQ0EsTUFBSUcsR0FBRyxHQUFHUixVQUFVLENBQUNTLE9BQVgsQ0FBbUJOLFFBQW5CLEVBQTZCRyxJQUE3QixFQUFtQ0MsR0FBbkMsQ0FBVjtBQUNBSCwrQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVTSxJQUFWLENBQWVGLEdBQWY7QUFDQUcsY0FBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLEVBQXFDTixJQUFyQztB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QU0sQ0FBQyxXQUFELEVBQWMsVUFBZDtBQUZMLEtBRE07QUFLWCxTQUFLO0FBQ0QsWUFBTSxDQUFDLFNBQUQsRUFBWSxXQUFaLENBREw7QUFFRCxZQUFNLENBQUMsU0FBRCxFQUFZLFNBQVo7QUFGTCxLQUxNO0FBU1gsU0FBSztBQUNELFlBQU0sQ0FBQyxVQUFELEVBQWEsV0FBYixDQURMO0FBRUQsWUFBTSxDQUFDLFVBQUQsRUFBYSxVQUFiO0FBRkwsS0FUTTtBQWFYLFVBQU07QUFDRixZQUFNLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FESjtBQUVGLFlBQU0sQ0FBQyxVQUFELEVBQWEsVUFBYjtBQUZKLEtBYks7QUFpQlgsVUFBTTtBQUNGLFlBQU0sQ0FBQyxhQUFELEVBQWdCLGVBQWhCLENBREo7QUFFRixZQUFNLENBQUMsYUFBRCxFQUFnQixhQUFoQjtBQUZKO0FBakJLLEdBQWY7QUFzQkgsQ0FoaEJEOztBQWtoQmV4QiwrRUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAnXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IE51bVRvV29yZHMgZnJvbSBcIi4vbnVtdG93b3Jkc1wiO1xyXG5cclxudmFyIG51bXRvd29yZHMgPSBuZXcgTnVtVG9Xb3JkcygpO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQWxsKCkge1xyXG4gICAgdmFyIGN1cnJlbmN5ID0gJChcIiN2YWx1dGFcIikudmFsKCk7XHJcbiAgICB2YXIgbGFuZyA9ICQoJ2lucHV0W25hbWU9XCJsYW5nXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgIHZhciBudW0gPSAkKFwiI2NcIikudmFsKCk7XHJcbiAgICB2YXIgcmVzID0gbnVtdG93b3Jkcy5nZXRGdWxsKGN1cnJlbmN5LCBsYW5nLCBudW0pO1xyXG4gICAgJChcIiNyZXNcIikuaHRtbChyZXMpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnZlcnRfbGFuZycsIGxhbmcpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnZlcnRfY3VycmVuY3knLCBjdXJyZW5jeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHkoKSB7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCgkKFwiI3Jlc1wiKS5odG1sKCkpO1xyXG4gICAgJChcIiNhbHJ0XCIpLmZhZGVJbigpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHskKFwiI2FscnRcIikuZmFkZU91dCgpO30sIDEwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SGVscCgpIHtcclxuICAgICQoXCIjaGVscFwiKS5mYWRlSW4oKTtcclxuICAgICQoXCIjaGVscC1idG5cIikuaGlkZSgpO1xyXG59XHJcblxyXG4kKFwiI2NcIikub24oJ2tleXVwJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ2NsaWNrJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdwYXN0ZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjdmFsdXRhXCIpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPWxhbmddJykub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY29weS1idG5cIikub24oJ2NsaWNrJywgY29weSk7XHJcbiQoXCIjaGVscC1idG5cIikub24oJ2NsaWNrJywgc2hvd0hlbHApO1xyXG5cclxudmFyIHNlbCA9ICcnO1xyXG52YXIgdmFscyA9IG51bXRvd29yZHMuZ2V0VmFscygpO1xyXG5mb3IgKHZhciBrZXkgaW4gdmFscykge1xyXG4gICAgdmFyIHZhbGEgPSB2YWxzW2tleV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWxzW2tleV0uc2xpY2UoMSk7XHJcbiAgICBzZWwgPSBzZWwgKyAnPG9wdGlvbiB2YWx1ZT1cIicra2V5KydcIj4nK2tleS50b1VwcGVyQ2FzZSgpKycgJyt2YWxhKyc8L29wdGlvbj4nO1xyXG59O1xyXG4kKFwiI3ZhbHV0YVwiKS5odG1sKHNlbCk7XHJcbnZhciBsYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnZlcnRfbGFuZycpO1xyXG5pZiAobGFuZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICB2YXIgbGFuZ1ZhbHMgPSB7XHJcbiAgICAgICAgJ2x2JzogMCxcclxuICAgICAgICAnZW4nOiAxLFxyXG4gICAgICAgICdydSc6IDJcclxuICAgIH07XHJcblxyXG4gICAgJCgnaW5wdXQ6cmFkaW9bbmFtZT1cImxhbmdcIl0nKVtsYW5nVmFsc1tsYW5nXV0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAkKCdpbnB1dFtuYW1lPVwibGFuZ1wiXTpjaGVja2VkJykudmFsKCk7XHJcbn1cclxudmFyIGN1cnJlbmN5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnZlcnRfY3VycmVuY3knKTtcclxuaWYgKGN1cnJlbmN5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICQoXCIjdmFsdXRhXCIpLnZhbChjdXJyZW5jeSk7XHJcbn1cclxuIiwiaW1wb3J0IFQyVyBmcm9tIFwibnVtYmVyczJ3b3Jkc1wiO1xyXG5pbXBvcnQgV29yZFRyYW5zbGF0aW9ucyBmcm9tIFwiLi90cmFuc2xhdGlvbnNcIjtcclxuXHJcbnZhciBOdW1Ub1dvcmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy50cmFuc2xhdG9yID0gbmV3IFQyVyhcIkVOX1VTXCIpO1xyXG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSBuZXcgV29yZFRyYW5zbGF0aW9ucygpO1xyXG4gICAgdGhpcy5sYW5nID0gJ2x2JztcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0VmFscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUx2O1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bml0cyA9IGZ1bmN0aW9uIChudW1lcmljVW5pdCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLm51bUNvbmYudW5pdHNbdGhpcy5sYW5nXVtudW1lcmljVW5pdF1cclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudGVubmVycyA9IGZ1bmN0aW9uIChudW1lcmljVGVuKSB7XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bml0cyhudW1lcmljVGVuWzFdKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljVGVuWzBdID09PSBcIjFcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5udW1Db25mLnRlZW5zW3RoaXMubGFuZ11bbnVtZXJpY1Rlbl1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi50ZW5uZXJzW3RoaXMubGFuZ11bbnVtZXJpY1RlblswXV0gKyBcIiBcIiArIHRoaXMudW5pdHMobnVtZXJpY1RlblsxXSlcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuaHVuZHJlZHMgPSBmdW5jdGlvbiAobnVtZXJpY0h1bmRyZWQpIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMubnVtQ29uZi5odW5kcmVkcy5ydVtudW1lcmljSHVuZHJlZFswXV0gKyAnICcgKyB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY0h1bmRyZWRbMF0gPT09IFwiMFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljSHVuZHJlZFswXSA9PT0gXCIxXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMub25lSHVuZHJlZEx2ICsgJyAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudW5pdHMobnVtZXJpY0h1bmRyZWRbMF0pICsgJyAnICsgdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJhZHMgKyAnICcgKyB0aGlzLnRlbm5lcnMobnVtZXJpY0h1bmRyZWRbMV0gKyBudW1lcmljSHVuZHJlZFsyXSk7XHJcbn1cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2VuZXJpY0NhbGxlciA9IGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcclxuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gICAgYXJncy5zaGlmdCgpO1xyXG4gICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJncyk7XHJcbn07XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bmkgPSBmdW5jdGlvbiAobnVtLCBsZW4pIHtcclxuICAgIGlmIChsZW4gPT09IDMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmljQ2FsbGVyKCdodW5kcmVkcycsIG51bSk7XHJcbiAgICB9XHJcbiAgICB2YXIgdjEgPSB0aGlzLnRyYW5zbGF0aW9ucy5iaWdOdW1zWyhsZW4gLSAzKS50b1N0cmluZygpXVt0aGlzLmxhbmddWzBdXHJcbiAgICB2YXIgdm0gPSB0aGlzLnRyYW5zbGF0aW9ucy5iaWdOdW1zWyhsZW4gLSAzKS50b1N0cmluZygpXVt0aGlzLmxhbmddWzFdXHJcblxyXG4gICAgdmFyIG1pbGlvbmkgPSBudW0uc3Vic3RyaW5nKDAsIDMpO1xyXG4gICAgdmFyIHRob3VzYW5kc2NpID0gbnVtLnN1YnN0cmluZygzLCBsZW4pO1xyXG5cclxuICAgIGlmIChtaWxpb25pID09PSAnMDAwJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyaWNDYWxsZXIoJ3VuaScsIHRob3VzYW5kc2NpLCBsZW4tMyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1pbGpXb3JkID0gdm07XHJcbiAgICBpZiAobWlsaW9uaVsyXSA9PT0gXCIxXCIgJiYgbWlsaW9uaVsxXSAhPT0gXCIxXCIpIHtcclxuICAgICAgICBtaWxqV29yZCA9IHYxXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odW5kcmVkcyhtaWxpb25pKSArICcgJyttaWxqV29yZCsnICcgKyB0aGlzLmdlbmVyaWNDYWxsZXIoJ3VuaScsIHRob3VzYW5kc2NpLCBsZW4tMyk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldFJlc3VsdCA9IGZ1bmN0aW9uIChudW0sIGNlbnQsIGV1cikge1xyXG4gICAgdmFyIHBvaW50ID0gbnVtLmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICB2YXIgY29tYSA9IG51bS5sYXN0SW5kZXhPZignLCcpO1xyXG4gICAgdmFyIHBvaW50Q291bnQgPSAobnVtLnNwbGl0KFwiLlwiKS5sZW5ndGggLSAxKVxyXG4gICAgdmFyIGNvbWFDb3VudCA9IChudW0uc3BsaXQoXCIsXCIpLmxlbmd0aCAtIDEpXHJcbiAgICB2YXIgc2VwID0gLTE7XHJcbiAgICBpZiAocG9pbnQgIT09IC0xICYmIHBvaW50ID4gY29tYSAmJiBwb2ludENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIHNlcCA9IHBvaW50O1xyXG4gICAgfSBlbHNlIGlmIChjb21hICE9PSAtMSAmJiBjb21hID4gcG9pbnQgJiYgY29tYUNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIHNlcCA9IGNvbWE7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxlbmd0aCA9IG51bS5sZW5ndGg7XHJcbiAgICB2YXIgdW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5hbmRzW3RoaXMubGFuZ107XHJcbiAgICB2YXIgY29tYXRzID0gdGhpcy50cmFuc2xhdGlvbnMuY29tYXRzW3RoaXMubGFuZ107XHJcbiAgICB2YXIgY2VudGkgPSAnICcrdW4rJyAwMCAnICsgY2VudDtcclxuICAgIGlmIChzZXAgIT09IC0xKSB7XHJcbiAgICAgICAgY2VudGkgPSBudW0uc3Vic3RyaW5nKHNlcCsxLCBsZW5ndGgpO1xyXG4gICAgICAgIGNlbnRpID0gY2VudGkucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcbiAgICAgICAgbnVtID0gbnVtLnN1YnN0cmluZygwLCBzZXApO1xyXG4gICAgICAgIGlmIChjZW50aS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAwMCAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aSsnMCAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aSsnICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjZW50aTEgPSBjZW50aS5zdWJzdHJpbmcoMCwyKTtcclxuICAgICAgICAgICAgdmFyIGNlbnRpMiA9IGNlbnRpLnN1YnN0cmluZygyLGNlbnRpLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aTEgKyAnLCAnICsgY29tYXRzICsnLCAnKyBjZW50aTIrJyAnICsgY2VudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9yaWcgPSBudW07XHJcbiAgICBudW0gPSBudW0ucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcblxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG51bSA9IHRoaXMudHJhbnNsYXRvci50b1dvcmRzKE51bWJlcihudW0pKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgbnVtID0gJ0EgbG90IG9mJztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG51bSA9ICcwJy5yZXBlYXQoMTggLSBudW0ubGVuZ3RoKSArIG51bTtcclxuICAgICAgICBudW0gPSB0aGlzLnVuaShudW0sIDE4KS50cmltKCk7XHJcbiAgICAgICAgaWYgKG51bSA9PT0gJycpIHtcclxuICAgICAgICAgICAgbnVtID0gdGhpcy50cmFuc2xhdGlvbnMubnVsbGVbdGhpcy5sYW5nXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ2x2Jykge1xyXG4gICAgICAgIGlmICgob3JpZy5sZW5ndGggPiAxICYmIG9yaWdbb3JpZy5sZW5ndGgtMV0gPT09IFwiMVwiICYmIG9yaWdbb3JpZy5sZW5ndGgtMl0gIT09IFwiMVwiKSB8fCBvcmlnID09PSBcIjFcIikge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChldXJbZXVyLmxlbmd0aC0xXSAhPSBcIm9cIiAmJiBldXJbZXVyLmxlbmd0aC0xXSAhPSBcImVcIikge1xyXG4gICAgICAgICAgICAgICAgZXVyID0gZXVyLnN1YnN0cmluZygwLCBldXIubGVuZ3RoIC0gMSkgKyAnaSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV1cltldXIubGVuZ3RoLTJdID09PSBcImlcIikge1xyXG4gICAgICAgICAgICAgICAgZXVyID0gZXVyLnN1YnN0cmluZygwLCBldXIubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV1cltldXIubGVuZ3RoLTFdID09PSBcItGAXCIpIHtcclxuICAgICAgICAgICAgICAgIGV1ciA9IGV1ci5zdWJzdHJpbmcoMCwgZXVyLmxlbmd0aCAtIDEpICsgJ9GA0L7Qsic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGV1ci5zcGxpdCgnICcpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgZXVyID0gdGhpcy5lbmRpbmdzUnUob3JpZywgZXVyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBldXIgPSB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1swXSkgKyAnICcgKyB0aGlzLmVuZGluZ3NSdShvcmlnLCBlbGVtZW50c1sxXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgZXVyID0gdGhpcy5lbmRpbmdzUnUob3JpZywgZWxlbWVudHNbMF0pICsgJyAnICsgdGhpcy5lbmRpbmdzUnUob3JpZywgZWxlbWVudHNbMV0pICsgJyAnICsgZWxlbWVudHNbMl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW0gKyAnICcgKyBldXIudG9Mb3dlckNhc2UoKSArIGNlbnRpO1xyXG59XHJcbk51bVRvV29yZHMucHJvdG90eXBlLmVuZGluZ3NSdSA9IGZ1bmN0aW9uIChudW1iZXIsIGN1cnJlbmN5KSB7XHJcbiAgICBpZiAoKG51bWJlci5sZW5ndGggPiAxICYmIG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjFcIiAmJiBudW1iZXJbbnVtYmVyLmxlbmd0aC0yXSAhPT0gXCIxXCIpIHx8IG51bWJlciA9PT0gXCIxXCIpIHtcclxuICAgIH0gZWxzZSBpZiAoKG51bWJlci5sZW5ndGggPiAxICYmIChudW1iZXJbbnVtYmVyLmxlbmd0aC0xXSA9PT0gXCIyXCIgfHwgbnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiM1wiIHx8IG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjRcIikgJiYgbnVtYmVyW251bWJlci5sZW5ndGgtMl0gIT09IFwiMVwiKSB8fCBudW1iZXIgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgdmFyIGVuZGluZ3MgPSB7J2FkZCc6e1wi0YBcIjogXCLQsFwiLCBcItGCXCI6IFwi0LBcIiwgXCLQulwiOiBcItCwXCIsIFwi0LDQvFwiOiBcItCwXCJ9LCAncmVwbGFjZSc6IHtcItC40YDQsFwiOiBcItC40YDRi1wiLCBcItGMXCI6IFwi0Y9cIiwgXCLRgdC60LjQuVwiOlwi0YHQutC40LVcIiwgXCLQuNC5XCI6IFwi0LjRhVwiLCBcItGL0LlcIjogXCLQsFwiLCBcItCw0Y9cIjogXCLQuNC1XCIsIFwi0YRcIjogXCLRi1wiLCBcItC90LBcIjogXCLQvdGLXCJ9fTtcclxuICAgICAgICBmb3IgKHZhciBlbmRpbmcgaW4gZW5kaW5nc1snYWRkJ10pIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LnN1YnN0cmluZyhjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSA9PT0gZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kgKyBlbmRpbmdzWydhZGQnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoZW5kaW5nIGluIGVuZGluZ3NbJ3JlcGxhY2UnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5zdWJzdHJpbmcoMCwgY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgKyBlbmRpbmdzWydyZXBsYWNlJ11bZW5kaW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGVuZGluZ3MgPSB7J2FkZCc6e1wi0YBcIjogXCLQvtCyXCIsIFwi0YJcIjogXCLQvtCyXCIsIFwi0LpcIjogXCLQvtCyXCJ9LCAncmVwbGFjZSc6IHtcItGMXCI6IFwi0LXQuVwiLCBcItC40LlcIjogXCLQuNGFXCIsIFwi0YvQuVwiOiBcItGL0YVcIiwgXCLQsNGPXCI6IFwi0LjRhVwiLCBcItCwXCI6IFwiXCJ9fTtcclxuICAgICAgICBmb3IgKHZhciBlbmRpbmcgaW4gZW5kaW5nc1snYWRkJ10pIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LnN1YnN0cmluZyhjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSA9PT0gZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kgKyBlbmRpbmdzWydhZGQnXVtlbmRpbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoZW5kaW5nIGluIGVuZGluZ3NbJ3JlcGxhY2UnXSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3kuc3Vic3RyaW5nKGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpID09PSBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5zdWJzdHJpbmcoMCwgY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgKyBlbmRpbmdzWydyZXBsYWNlJ11bZW5kaW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3VycmVuY3k7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldEZ1bGwgPSBmdW5jdGlvbiAodmFsdXRhLCBsYW5nLCBudW0pIHtcclxuICAgIHRoaXMubGFuZyA9IGxhbmc7XHJcbiAgICB2YXIgZWRlbiA9IHtcclxuICAgIH07XHJcbiAgICB2YXIgc20gPSB7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdlbicpIHtcclxuICAgICAgICBlZGVuID0gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lFbjtcclxuICAgICAgICBzbSA9IHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWR0aHNFbjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgZWRlbiA9IHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5UnU7XHJcbiAgICAgICAgc20gPSB0aGlzLnRyYW5zbGF0aW9ucy5odW5kcmVkdGhzUnU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeUx2O1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc0x2O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgc21yZXMgPSAnKDEvMTAwKSAnICsgdmFsdXRhLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzbSwgdmFsdXRhKSkge1xyXG4gICAgICAgIHNtcmVzID0gc21bdmFsdXRhXTtcclxuICAgIH1cclxuICAgIHZhciByZXMgPSB0aGlzLmdldFJlc3VsdChudW0sIHNtcmVzLCBlZGVuW3ZhbHV0YV0pO1xyXG4gICAgcmVzID0gcmVzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzLnNsaWNlKDEpO1xyXG5cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51bVRvV29yZHM7XHJcbiIsImltcG9ydCBOdW1Ub1dvcmRzIGZyb20gXCIuL251bXRvd29yZHNcIjtcclxuXHJcbnZhciBXb3JkVHJhbnNsYXRpb25zID0gZnVuY3Rpb24gKGN1ckNvbmYgPSBudWxsLCBudW1Db25mID0gbnVsbCkge1xyXG4gICAgdGhpcy5jdXJDb25mID0ge1xyXG4gICAgICAgIFwiZXVyXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcImx2XCI6IFwiZXVyb1wiLCBcInJ1XCI6IFwiXFx1MDQxNVxcdTA0MzJcXHUwNDQwXFx1MDQzZVwiLCBcImVuXCI6IFwiZXVyb1wifSxcclxuICAgICAgICAgICAgXCJodW5kcmVkdGhzXCI6IHtcImx2XCI6IFwiY2VudGlcIiwgXCJydVwiOiBcIlxcdTA0NDZcXHUwNDM1XFx1MDQzZFxcdTA0NDJcXHUwNDNlXFx1MDQzMlwiLCBcImVuXCI6IFwiY2VudHNcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidXNkXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcImx2XCI6IFwiZG9sXFx1MDEwMXJzXCIsIFwicnVcIjogXCJcXHUwNDE0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIiwgXCJlblwiOiBcImRvbGxhclwifSxcclxuICAgICAgICAgICAgXCJodW5kcmVkdGhzXCI6IHtcImx2XCI6IFwiY2VudGlcIiwgXCJydVwiOiBcIlxcdTA0NDZcXHUwNDM1XFx1MDQzZFxcdTA0NDJcXHUwNDNlXFx1MDQzMlwiLCBcImVuXCI6IFwiY2VudHNcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2JwXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJMaWVsYnJpdFxcdTAxMDFuaWphcyBtXFx1MDEwMXJjaVxcdTAxNDZhXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxMFxcdTA0M2RcXHUwNDMzXFx1MDQzYlxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ0XFx1MDQ0M1xcdTA0M2RcXHUwNDQyIFxcdTA0NDFcXHUwNDQyXFx1MDQzNVxcdTA0NDBcXHUwNDNiXFx1MDQzOFxcdTA0M2RcXHUwNDMzXFx1MDQzZVxcdTA0MzJcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJicml0aXNoIHBvdW5kXCJcclxuICAgICAgICAgICAgfSwgXCJodW5kcmVkdGhzXCI6IHtcImx2XCI6IFwicGVuaVwiLCBcInJ1XCI6IFwiXFx1MDQzZlxcdTA0MzVcXHUwNDNkXFx1MDQzOFwiLCBcImVuXCI6IFwicGVuY2VcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicnViXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJLcmlldmlqYXMgcnVibGlzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQyMFxcdTA0M2VcXHUwNDQxXFx1MDQ0MVxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQ0M1xcdTA0MzFcXHUwNDNiXFx1MDQ0Y1wiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcInJ1c3NpYW4gcnVibGVcIlxyXG4gICAgICAgICAgICB9LCBcImh1bmRyZWR0aHNcIjoge1wibHZcIjogXCJrYXBlaWtcXHUwMTAxc1wiLCBcInJ1XCI6IFwiXFx1MDQzYVxcdTA0M2VcXHUwNDNmXFx1MDQzNVxcdTA0MzVcXHUwNDNhXCIsIFwiZW5cIjogXCJrb3Bla3NcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicGxuXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJQb2xpamFzIHpsb3RzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxZlxcdTA0M2VcXHUwNDNiXFx1MDQ0Y1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzN1xcdTA0M2JcXHUwNDNlXFx1MDQ0MlxcdTA0NGJcXHUwNDM5XCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwicG9saXNoIHpsb3R5XCJcclxuICAgICAgICAgICAgfSwgXCJodW5kcmVkdGhzXCI6IHtcImx2XCI6IFwiZ3JvXFx1MDE2MWlcIiwgXCJydVwiOiBcIlxcdTA0MzNcXHUwNDQwXFx1MDQzZVxcdTA0NDhcIiwgXCJlblwiOiBcImdyb3N6XCJ9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImt6dFwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiS2F6YWhzdFxcdTAxMDFuYXMgdGVuZ2VcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDFhXFx1MDQzMFxcdTA0MzdcXHUwNDMwXFx1MDQ0NVxcdTA0NDFcXHUwNDQyXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDJcXHUwNDM1XFx1MDQzZFxcdTA0MzNcXHUwNDM1XCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwia2F6YWtoc3RhbiB0ZW5nZVwiXHJcbiAgICAgICAgICAgIH0sIFwiaHVuZHJlZHRoc1wiOiB7XCJsdlwiOiBcInRpalxcdTAxMmJuaVwiLCBcInJ1XCI6IFwiXFx1MDQ0MlxcdTA0MzhcXHUwNDRiXFx1MDQzZFwiLCBcImVuXCI6IFwidFxcdTAxMzF5bnNcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY2hmXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJcXHUwMTYwdmVpY2VzIGZyYW5rc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MjhcXHUwNDMyXFx1MDQzNVxcdTA0MzlcXHUwNDQ2XFx1MDQzMFxcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDQwXFx1MDQzMFxcdTA0M2RcXHUwNDNhXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwic3dpc3MgZnJhbmNcIlxyXG4gICAgICAgICAgICB9LCBcImh1bmRyZWR0aHNcIjoge1wibHZcIjogXCJyYXBlbmlcIiwgXCJydVwiOiBcIlxcdTA0NDBcXHUwNDMwXFx1MDQzZlxcdTA0M2ZcXHUwNDM1XFx1MDQzZFxcdTA0M2VcXHUwNDMyXCIsIFwiZW5cIjogXCJyYXBwZW5zXCJ9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFlZFwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiQXB2aWVub3RvIEFyXFx1MDEwMWJ1IEVtaXJcXHUwMTAxdHUgZGlyaGFtc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MTRcXHUwNDM4XFx1MDQ0MFxcdTA0NDVcXHUwNDMwXFx1MDQzYyBcXHUwNDFlXFx1MDQxMFxcdTA0MmRcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJ1bml0ZWQgYXJhYiBlbWlyYXRlcyBkaXJoYW1cIlxyXG4gICAgICAgICAgICB9LCBcImh1bmRyZWR0aHNcIjoge1wibHZcIjogXCJmaWxpXCIsIFwicnVcIjogXCJcXHUwNDQ0XFx1MDQzOFxcdTA0M2JcXHUwNDQxXCIsIFwiZW5cIjogXCJmaWxzXCJ9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRra1wiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiRFxcdTAxMDFuaWphcyBrcm9uYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MTRcXHUwNDMwXFx1MDQ0MlxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJkYW5pc2gga3JvbmVcIlxyXG4gICAgICAgICAgICB9LCBcImh1bmRyZWR0aHNcIjoge1wibHZcIjogXCJcXHUwMTEzcmlcIiwgXCJydVwiOiBcIlxcdTA0NGRcXHUwNDQwXFx1MDQzNVwiLCBcImVuXCI6IFwib3JlXCJ9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNla1wiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiWnZpZWRyaWphcyBrcm9uYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MjhcXHUwNDMyXFx1MDQzNVxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwic3dlZGlzaCBrcm9uYVwiXHJcbiAgICAgICAgICAgIH0sIFwiaHVuZHJlZHRoc1wiOiB7XCJsdlwiOiBcIlxcdTAxMTNyaVwiLCBcInJ1XCI6IFwiXFx1MDQ0ZFxcdTA0NDBcXHUwNDM1XCIsIFwiZW5cIjogXCJvcmVcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibm9rXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJOb3J2XFx1MDExM1xcdTAxMjNpamFzIGtyb25hXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxZFxcdTA0M2VcXHUwNDQwXFx1MDQzMlxcdTA0MzVcXHUwNDM2XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0MFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcIm5vcndlZ2lhbiBrcm9uZVwiXHJcbiAgICAgICAgICAgIH0sIFwiaHVuZHJlZHRoc1wiOiB7XCJsdlwiOiBcIlxcdTAxMTNyaVwiLCBcInJ1XCI6IFwiXFx1MDQ0ZFxcdTA0NDBcXHUwNDM1XCIsIFwiZW5cIjogXCJvcmVcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYmduXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJCdWxnXFx1MDEwMXJpamFzIGxldmFcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDExXFx1MDQzZVxcdTA0M2JcXHUwNDMzXFx1MDQzMFxcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDM1XFx1MDQzMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcImJ1bGdhcmlhbiBsZXZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImh1ZlwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiVW5nXFx1MDEwMXJpamFzIGZvcmludHNcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDMyXFx1MDQzNVxcdTA0M2RcXHUwNDMzXFx1MDQzNVxcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDNlXFx1MDQ0MFxcdTA0MzhcXHUwNDNkXFx1MDQ0MlwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcImh1bmdhcmlhbiBmb3JpbnRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRyeVwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiVHVyY2lqYXMgbGlyYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MjJcXHUwNDQzXFx1MDQ0MFxcdTA0MzVcXHUwNDQ2XFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2JcXHUwNDM4XFx1MDQ0MFxcdTA0MzBcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJ0dXJraXNoIGxpcmFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFsbFwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiQWxiXFx1MDEwMW5pamFzIGxla3NcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDEwXFx1MDQzYlxcdTA0MzFcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzVcXHUwNDNhXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwiYWxiYW5pYW4gbGVrXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJocmtcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIkhvcnZcXHUwMTAxdGlqYXMga3VuYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlhcXHUwNDNlXFx1MDQ0MFxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDNcXHUwNDNkXFx1MDQzMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcImNyb2F0aWFuIGt1bmFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImN6a1wiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiXFx1MDEwY2VoaWphcyBrcm9uYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MjdcXHUwNDM1XFx1MDQ0OFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJjemVjaCBrb3J1bmFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdlbFwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiR3J1emlqYXMgbGFyaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MTNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDM4XFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzBcXHUwNDQwXFx1MDQzOFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcImdlb3JnaWFuIGxhcmlcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxrclwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiXFx1MDE2MHJpbGFua2FzIHJcXHUwMTZicGlqYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MjhcXHUwNDQwXFx1MDQzOC1cXHUwNDNiXFx1MDQzMFxcdTA0M2RcXHUwNDNhXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0NDBcXHUwNDQzXFx1MDQzZlxcdTA0MzhcXHUwNDRmXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwic3JpIGxhbmthbiBydXBlZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG5kXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJUdW5pc2lqYXMgZGluXFx1MDEwMXJzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQyMlxcdTA0NDNcXHUwNDNkXFx1MDQzOFxcdTA0NDFcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0MzBcXHUwNDQwXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwidHVuaXNpYW4gZGluYXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImlsc1wiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiSXpyYVxcdTAxMTNsYXMgXFx1MDE2MWVrZWxzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxOFxcdTA0MzdcXHUwNDQwXFx1MDQzMFxcdTA0MzhcXHUwNDNiXFx1MDQ0Y1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0OFxcdTA0MzVcXHUwNDNhXFx1MDQzNVxcdTA0M2JcXHUwNDRjXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwiaXNyYWVsaSBzaGVxZWxcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImpvZFwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiSm9yZFxcdTAxMDFuaWphcyBkaW5cXHUwMTAxcnNcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDE4XFx1MDQzZVxcdTA0NDBcXHUwNDM0XFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0MzBcXHUwNDQwXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwiam9yZGFuaWFuIGRpbmFyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJieW5cIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIkJhbHRrcmlldmlqYXMgcnVibGlzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxMVxcdTA0MzVcXHUwNDNiXFx1MDQzZVxcdTA0NDBcXHUwNDQzXFx1MDQ0MVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0NDNcXHUwNDMxXFx1MDQzYlxcdTA0NGNcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJiZWxhcnVzaWFuIG5ldyBydWJsZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZWdwXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJcXHUwMTEyXFx1MDEyM2lwdGVzIG1cXHUwMTAxcmNpXFx1MDE0NmFcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDE1XFx1MDQzM1xcdTA0MzhcXHUwNDNmXFx1MDQzNVxcdTA0NDJcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDQzXFx1MDQzZFxcdTA0NDJcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJlZ3lwdGlhbiBwb3VuZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidWFoXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJVa3JhaW5hcyBncml2bmFcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDIzXFx1MDQzYVxcdTA0NDBcXHUwNDMwXFx1MDQzOFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0MzNcXHUwNDQwXFx1MDQzOFxcdTA0MzJcXHUwNDNkXFx1MDQzMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcInVrcmFpbmlhbiBocnl2bmlhXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjbnlcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIlxcdTAxMzZcXHUwMTJibmFzIGp1YVxcdTAxNDZhXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxYVxcdTA0MzhcXHUwNDQyXFx1MDQzMFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NGVcXHUwNDMwXFx1MDQzZFxcdTA0NGNcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJjaGluZXNlIHl1YW5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRoYlwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiVGFpemVtZXMgYmF0c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MjJcXHUwNDMwXFx1MDQzOFxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzFcXHUwNDMwXFx1MDQ0MlwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcInRoYWkgYmFodFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidm5kXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJWamV0bmFtYXMgZG9uZ3NcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDEyXFx1MDQ0Y1xcdTA0MzVcXHUwNDQyXFx1MDQzZFxcdTA0MzBcXHUwNDNjXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2RcXHUwNDMzXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwidmlldG5hbWVzZSBkb25nXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwaHBcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIkZpbGlwXFx1MDEyYm51IHBlc29cIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDI0XFx1MDQzOFxcdTA0M2JcXHUwNDM4XFx1MDQzZlxcdTA0M2ZcXHUwNDM4XFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzZVxcdTA0MzUgXFx1MDQzZlxcdTA0MzVcXHUwNDQxXFx1MDQzZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcInBoaWxpcHBpbmUgcGVzb1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWFkXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJNYXJva2FzIGRpcmhhbXNcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDFjXFx1MDQzMFxcdTA0NDBcXHUwNDNlXFx1MDQzYVxcdTA0M2FcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDQwXFx1MDQ0NVxcdTA0MzBcXHUwNDNjXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwibW9yb2NjYW4gZGlyaGFtXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhdWRcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIkF1c3RyXFx1MDEwMWxpamFzIGRvbFxcdTAxMDFyc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MTBcXHUwNDMyXFx1MDQ0MVxcdTA0NDJcXHUwNDQwXFx1MDQzMFxcdTA0M2JcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwiYXVzdHJhbGlhbiBkb2xsYXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFyc1wiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiQXJnZW50XFx1MDEyYm5hcyBwZXNvXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxMFxcdTA0NDBcXHUwNDMzXFx1MDQzNVxcdTA0M2RcXHUwNDQyXFx1MDQzOFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJhcmdlbnRpbmUgcGVzb1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwianB5XCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJKYXBcXHUwMTAxbmFzIGpcXHUwMTEzbmFcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDJmXFx1MDQzZlxcdTA0M2VcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDM4XFx1MDQzNVxcdTA0M2RcXHUwNDMwXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwiamFwYW5lc2UgeWVuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpZHJcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIkluZG9uXFx1MDExM3ppamFzIHJcXHUwMTZicGlqYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MThcXHUwNDNkXFx1MDQzNFxcdTA0M2VcXHUwNDNkXFx1MDQzNVxcdTA0MzdcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQ0MFxcdTA0NDNcXHUwNDNmXFx1MDQzOFxcdTA0NGZcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJpbmRvbmVzaWFuIHJ1cGlhaFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaXNrXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJJc2xhbmRlcyBrcm9uYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MThcXHUwNDQxXFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJpY2VsYW5kIGtyb25hXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhbWRcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIkFybVxcdTAxMTNuaWphcyBkcmFtc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MTBcXHUwNDQwXFx1MDQzY1xcdTA0NGZcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQ0MFxcdTA0MzBcXHUwNDNjXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwiYXJtZW5pYW4gZHJhbVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicm9uXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJSdW1cXHUwMTAxbmlqYXMgbGVqYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MjBcXHUwNDQzXFx1MDQzY1xcdTA0NGJcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNiXFx1MDQzNVxcdTA0NGZcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJyb21hbmlhbiBsZXVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNnZFwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiU2luZ2FwXFx1MDE2YnJhcyBkb2xcXHUwMTAxcnNcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDIxXFx1MDQzOFxcdTA0M2RcXHUwNDMzXFx1MDQzMFxcdTA0M2ZcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwic2luZ2Fwb3JlIGRvbGxhclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2JwXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJTa290aWphcyBtXFx1MDEwMXJjaVxcdTAxNDZhXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQyOFxcdTA0M2VcXHUwNDQyXFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0NDNcXHUwNDNkXFx1MDQ0MlwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcInNjb3R0aXNoIHBvdW5kXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjYWRcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIkthblxcdTAxMDFkYXMgZG9sXFx1MDEwMXJzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxYVxcdTA0MzBcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcImNhbmFkaWFuIGRvbGxhclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYnJsXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJCcmF6XFx1MDEyYmxpamFzIHJlXFx1MDEwMWxzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxMVxcdTA0NDBcXHUwNDMwXFx1MDQzN1xcdTA0MzhcXHUwNDNiXFx1MDQ0Y1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0MzVcXHUwNDMwXFx1MDQzYlwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcImJyYXppbGlhbiByZWFsXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ6YXJcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIkRpZW52aWRcXHUwMTAxZnJpa2FzIHJlbmRzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQyZVxcdTA0MzZcXHUwNDNkXFx1MDQzZVxcdTA0MzBcXHUwNDQ0XFx1MDQ0MFxcdTA0MzhcXHUwNDNhXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDBcXHUwNDRkXFx1MDQzZFxcdTA0MzRcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJzb3V0aCBhZnJpY2FuIHJhbmRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImluclwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiSW5kaWphcyByXFx1MDE2YnBpamFcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDE4XFx1MDQzZFxcdTA0MzRcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQ0MFxcdTA0NDNcXHUwNDNmXFx1MDQzOFxcdTA0NGZcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJpbmRpYW4gcnVwZWVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJzZFwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiU2VyYmlqYXMgZGluXFx1MDEwMXJzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQyMVxcdTA0MzVcXHUwNDQwXFx1MDQzMVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0NDBcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJzZXJiaWFuIGRpbmFyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJuemRcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIkphdW56XFx1MDExM2xhbmRlcyBkb2xcXHUwMTAxcnNcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDFkXFx1MDQzZVxcdTA0MzJcXHUwNDNlXFx1MDQzN1xcdTA0MzVcXHUwNDNiXFx1MDQzMFxcdTA0M2RcXHUwNDM0XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJuZXcgemVhbGFuZCBkb2xsYXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm15clwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiTWFsYWl6aWphcyByaW5naXRzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiTVxcdTA0MzBcXHUwNDNiXFx1MDQzMFxcdTA0MzlcXHUwNDM3XFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDBcXHUwNDM4XFx1MDQzZFxcdTA0MzNcXHUwNDMzXFx1MDQzOFxcdTA0NDJcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJtYWxheXNpYW4gcmluZ2dpdFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibXVyXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJNYXVyXFx1MDEyYmNpamFzIHNhbGFzIHJcXHUwMTZicGlqYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MWNcXHUwNDMwXFx1MDQzMlxcdTA0NDBcXHUwNDM4XFx1MDQzYVxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDQwXFx1MDQ0M1xcdTA0M2ZcXHUwNDM4XFx1MDQ0ZlwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcIm1hdXJpdGlhbiBydXBlZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaGtkXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJIb25rb25nYXMgZG9sXFx1MDEwMXJzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxM1xcdTA0M2VcXHUwNDNkXFx1MDQzYVxcdTA0M2VcXHUwNDNkXFx1MDQzM1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwiaG9uZyBrb25nIGRvbGxhclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwia3J3XCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJEaWVudmlka29yZWphcyB2b25hXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQyZVxcdTA0MzZcXHUwNDNkXFx1MDQzZVxcdTA0M2FcXHUwNDNlXFx1MDQ0MFxcdTA0MzVcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDMyXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwic291dGgga29yZWFuIHdvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibXhuXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJNZWtzaWthcyBwZXNvXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxY1xcdTA0MzVcXHUwNDNhXFx1MDQ0MVxcdTA0MzhcXHUwNDNhXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJtZXhpY2FuIHBlc29cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1rZFwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiTWFcXHUwMTM3ZWRvbmlqYXMgZGVuXFx1MDEwMXJzXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQxY1xcdTA0MzBcXHUwNDNhXFx1MDQzNVxcdTA0MzRcXHUwNDNlXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0NDBcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJtYWNlZG9uaWFuIGRpbmFyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkb3BcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIkRvbWluaWtcXHUwMTAxbmFzIHBlc29cIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDE0XFx1MDQzZVxcdTA0M2NcXHUwNDM4XFx1MDQzZFxcdTA0MzhcXHUwNDNhXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJkb21pbmljYW4gcGVzb1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwia2VzXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibHZcIjogXCJLZW5pamFzIFxcdTAxNjFpbGlcXHUwMTQ2XFx1MDE2MVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MWFcXHUwNDM1XFx1MDQzZFxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ4XFx1MDQzOFxcdTA0M2JcXHUwNDNiXFx1MDQzOFxcdTA0M2RcXHUwNDMzXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwia2VueWEgc2hpbGxpbmdcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlbVwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiVlxcdTAxMDFjaWphcyBtYXJrYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MWRcXHUwNDM1XFx1MDQzY1xcdTA0MzVcXHUwNDQ2XFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2NcXHUwNDMwXFx1MDQ0MFxcdTA0M2FcXHUwNDMwXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwiZ2VybWFuIG1hcmtcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImVla1wiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiSWdhdW5pamFzIGtyb25hXCIsXHJcbiAgICAgICAgICAgICAgICBcInJ1XCI6IFwiXFx1MDQyZFxcdTA0NDFcXHUwNDQyXFx1MDQzZVxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuXCI6IFwiZXN0b25pYW4ga3Jvb25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImx0bFwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImx2XCI6IFwiTGlldHV2YXMgbGl0c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJydVwiOiBcIlxcdTA0MWJcXHUwNDM4XFx1MDQ0MlxcdTA0M2VcXHUwNDMyXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDNiXFx1MDQzOFxcdTA0NDJcIixcclxuICAgICAgICAgICAgICAgIFwiZW5cIjogXCJsaXRodWFuaWFuIGxpdGFzXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsdmxcIjoge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsdlwiOiBcIkxhdHZpamFzIGxhdHNcIixcclxuICAgICAgICAgICAgICAgIFwicnVcIjogXCJcXHUwNDFiXFx1MDQzMFxcdTA0NDJcXHUwNDMyXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0M2JcXHUwNDMwXFx1MDQ0MlwiLFxyXG4gICAgICAgICAgICAgICAgXCJlblwiOiBcImxhdHZpYW4gbGF0c1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaHVuZHJlZHRoc1wiOiB7XCJsdlwiOiBcInNhbnRpbWlcIiwgXCJydVwiOiBcIlxcdTA0NDFcXHUwNDMwXFx1MDQzZFxcdTA0NDJcXHUwNDM4XFx1MDQzY1xcdTA0M2VcXHUwNDMyXCIsIFwiZW5cIjogXCJzYW50aW1zXCJ9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMubnVtQ29uZiA9IHtcclxuICAgICAgICBcInVuaXRzXCI6IHtcclxuICAgICAgICAgICAgXCJsdlwiOiBbXCJcIiwgXCJ2aWVuc1wiLCBcImRpdmlcIiwgXCJ0clxcdTAxMmJzXCIsIFwiXFx1MDEwZGV0cmlcIiwgXCJwaWVjaVwiLCBcInNlXFx1MDE2MWlcIiwgXCJzZXB0aVxcdTAxNDZpXCIsIFwiYXN0b1xcdTAxNDZpXCIsIFwiZGV2aVxcdTAxNDZpXCJdLFxyXG4gICAgICAgICAgICBcInJ1XCI6IFtcIlwiLCBcIlxcdTA0M2VcXHUwNDM0XFx1MDQzOFxcdTA0M2RcIiwgXCJcXHUwNDM0XFx1MDQzMlxcdTA0MzBcIiwgXCJcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcIiwgXCJcXHUwNDQ3XFx1MDQzNVxcdTA0NDJcXHUwNDRiXFx1MDQ0MFxcdTA0MzVcIiwgXCJcXHUwNDNmXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXCIsIFwiXFx1MDQ0OFxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0NGNcIiwgXCJcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXCIsIFwiXFx1MDQzMlxcdTA0M2VcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXCIsIFwiXFx1MDQzNFxcdTA0MzVcXHUwNDMyXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRlZW5zXCI6IHtcclxuICAgICAgICAgICAgXCJsdlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIjEwXCI6IFwiZGVzbWl0XCIsXHJcbiAgICAgICAgICAgICAgICBcIjExXCI6IFwidmllbnBhZHNtaXRcIixcclxuICAgICAgICAgICAgICAgIFwiMTJcIjogXCJkaXZwYWRzbWl0XCIsXHJcbiAgICAgICAgICAgICAgICBcIjEzXCI6IFwidHJcXHUwMTJic3BhZHNtaXRcIixcclxuICAgICAgICAgICAgICAgIFwiMTRcIjogXCJcXHUwMTBkZXRycGFkc21pdFwiLFxyXG4gICAgICAgICAgICAgICAgXCIxNVwiOiBcInBpZWNwYWRzbWl0XCIsXHJcbiAgICAgICAgICAgICAgICBcIjE2XCI6IFwic2VcXHUwMTYxcGFkc21pdFwiLFxyXG4gICAgICAgICAgICAgICAgXCIxN1wiOiBcInNlcHRpXFx1MDE0NnBhZHNtaXRcIixcclxuICAgICAgICAgICAgICAgIFwiMThcIjogXCJhc3RvXFx1MDE0NnBhZHNtaXRcIixcclxuICAgICAgICAgICAgICAgIFwiMTlcIjogXCJkZXZpXFx1MDE0NnBhZHNtaXRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInJ1XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiMTBcIjogXCJcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlxcdTA0NGNcIixcclxuICAgICAgICAgICAgICAgIFwiMTFcIjogXCJcXHUwNDNlXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXHJcbiAgICAgICAgICAgICAgICBcIjEyXCI6IFwiXFx1MDQzNFxcdTA0MzJcXHUwNDM1XFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFxyXG4gICAgICAgICAgICAgICAgXCIxM1wiOiBcIlxcdTA0NDJcXHUwNDQwXFx1MDQzNVxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcclxuICAgICAgICAgICAgICAgIFwiMTRcIjogXCJcXHUwNDQ3XFx1MDQzNVxcdTA0NDJcXHUwNDRiXFx1MDQ0MFxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcclxuICAgICAgICAgICAgICAgIFwiMTVcIjogXCJcXHUwNDNmXFx1MDQ0ZlxcdTA0NDJcXHUwNDNkXFx1MDQzMFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXHJcbiAgICAgICAgICAgICAgICBcIjE2XCI6IFwiXFx1MDQ0OFxcdTA0MzVcXHUwNDQxXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0NlxcdTA0MzBcXHUwNDQyXFx1MDQ0Y1wiLFxyXG4gICAgICAgICAgICAgICAgXCIxN1wiOiBcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcclxuICAgICAgICAgICAgICAgIFwiMThcIjogXCJcXHUwNDMyXFx1MDQzZVxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcclxuICAgICAgICAgICAgICAgIFwiMTlcIjogXCJcXHUwNDM0XFx1MDQzNVxcdTA0MzJcXHUwNDRmXFx1MDQ0MlxcdTA0M2RcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRlbm5lcnNcIjoge1xyXG4gICAgICAgICAgICBcImx2XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiMlwiOiBcImRpdmRlc21pdFwiLFxyXG4gICAgICAgICAgICAgICAgXCIzXCI6IFwidHJcXHUwMTJic2Rlc21pdFwiLFxyXG4gICAgICAgICAgICAgICAgXCI0XCI6IFwiXFx1MDEwZGV0cmRlc21pdFwiLFxyXG4gICAgICAgICAgICAgICAgXCI1XCI6IFwicGllY2Rlc21pdFwiLFxyXG4gICAgICAgICAgICAgICAgXCI2XCI6IFwic2VcXHUwMTYxZGVzbWl0XCIsXHJcbiAgICAgICAgICAgICAgICBcIjdcIjogXCJzZXB0aVxcdTAxNDZkZXNtaXRcIixcclxuICAgICAgICAgICAgICAgIFwiOFwiOiBcImFzdG9cXHUwMTQ2ZGVzbWl0XCIsXHJcbiAgICAgICAgICAgICAgICBcIjlcIjogXCJkZXZpXFx1MDE0NmRlc21pdFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicnVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCIyXCI6IFwiXFx1MDQzNFxcdTA0MzJcXHUwNDMwXFx1MDQzNFxcdTA0NDZcXHUwNDMwXFx1MDQ0MlxcdTA0NGNcIixcclxuICAgICAgICAgICAgICAgIFwiM1wiOiBcIlxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0MzRcXHUwNDQ2XFx1MDQzMFxcdTA0NDJcXHUwNDRjXCIsXHJcbiAgICAgICAgICAgICAgICBcIjRcIjogXCJcXHUwNDQxXFx1MDQzZVxcdTA0NDBcXHUwNDNlXFx1MDQzYVwiLFxyXG4gICAgICAgICAgICAgICAgXCI1XCI6IFwiXFx1MDQzZlxcdTA0NGZcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcclxuICAgICAgICAgICAgICAgIFwiNlwiOiBcIlxcdTA0NDhcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcclxuICAgICAgICAgICAgICAgIFwiN1wiOiBcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcXHUwNDM0XFx1MDQzNVxcdTA0NDFcXHUwNDRmXFx1MDQ0MlwiLFxyXG4gICAgICAgICAgICAgICAgXCI4XCI6IFwiXFx1MDQzMlxcdTA0M2VcXHUwNDQxXFx1MDQzNVxcdTA0M2NcXHUwNDRjXFx1MDQzNFxcdTA0MzVcXHUwNDQxXFx1MDQ0ZlxcdTA0NDJcIixcclxuICAgICAgICAgICAgICAgIFwiOVwiOiBcIlxcdTA0MzRcXHUwNDM1XFx1MDQzMlxcdTA0NGZcXHUwNDNkXFx1MDQzZVxcdTA0NDFcXHUwNDQyXFx1MDQzZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaHVuZHJlZHNcIjoge1xyXG4gICAgICAgICAgICBcInJ1XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcIjBcIjogXCJcIixcclxuICAgICAgICAgICAgICAgIFwiMVwiOiBcIlxcdTA0NDFcXHUwNDQyXFx1MDQzZVwiLFxyXG4gICAgICAgICAgICAgICAgXCIyXCI6IFwiXFx1MDQzNFxcdTA0MzJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDM4XCIsXHJcbiAgICAgICAgICAgICAgICBcIjNcIjogXCJcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcIixcclxuICAgICAgICAgICAgICAgIFwiNFwiOiBcIlxcdTA0NDdcXHUwNDM1XFx1MDQ0MlxcdTA0NGJcXHUwNDQwXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzMFwiLFxyXG4gICAgICAgICAgICAgICAgXCI1XCI6IFwiXFx1MDQzZlxcdTA0NGZcXHUwNDQyXFx1MDQ0Y1xcdTA0NDFcXHUwNDNlXFx1MDQ0MlwiLFxyXG4gICAgICAgICAgICAgICAgXCI2XCI6IFwiXFx1MDQ0OFxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0NGNcXHUwNDQxXFx1MDQzZVxcdTA0NDJcIixcclxuICAgICAgICAgICAgICAgIFwiN1wiOiBcIlxcdTA0NDFcXHUwNDM1XFx1MDQzY1xcdTA0NGNcXHUwNDQxXFx1MDQzZVxcdTA0NDJcIixcclxuICAgICAgICAgICAgICAgIFwiOFwiOiBcIlxcdTA0MzJcXHUwNDNlXFx1MDQ0MVxcdTA0MzVcXHUwNDNjXFx1MDQ0Y1xcdTA0NDFcXHUwNDNlXFx1MDQ0MlwiLFxyXG4gICAgICAgICAgICAgICAgXCI5XCI6IFwiXFx1MDQzNFxcdTA0MzVcXHUwNDMyXFx1MDQ0ZlxcdTA0NDJcXHUwNDRjXFx1MDQ0MVxcdTA0M2VcXHUwNDQyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBpZiAoY3VyQ29uZikge1xyXG4gICAgICAgIHRoaXMuY3VyQ29uZiA9IGN1ckNvbmY7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtQ29uZikge1xyXG4gICAgICAgIHRoaXMuY3VyQ29uZiA9IG51bUNvbmY7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbmZOYW1lcyA9IHt9O1xyXG4gICAgdmFyIGNvbmZIdW5kID0ge307XHJcbiAgICBmb3IgKHZhciBjb2RlIGluIHRoaXMuY3VyQ29uZikge1xyXG4gICAgICAgIGlmICh0aGlzLmN1ckNvbmZbY29kZV1bJ25hbWUnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGxhbmcgaW4gdGhpcy5jdXJDb25mW2NvZGVdWyduYW1lJ10pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25mTmFtZXNbbGFuZ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZOYW1lc1tsYW5nXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uZk5hbWVzW2xhbmddW2NvZGVdID0gdGhpcy5jdXJDb25mW2NvZGVdWyduYW1lJ11bbGFuZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyQ29uZltjb2RlXVsnaHVuZHJlZHRocyddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yIChsYW5nIGluIHRoaXMuY3VyQ29uZltjb2RlXVsnaHVuZHJlZHRocyddKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZkh1bmRbbGFuZ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZIdW5kW2xhbmddID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25mSHVuZFtsYW5nXVtjb2RlXSA9IHRoaXMuY3VyQ29uZltjb2RlXVsnaHVuZHJlZHRocyddW2xhbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW5jeUx2ID0gY29uZk5hbWVzLmx2O1xyXG4gICAgdGhpcy5odW5kcmVkdGhzTHYgPSBjb25mSHVuZC5sdjtcclxuICAgIHRoaXMuY3VycmVuY3lSdSA9IGNvbmZOYW1lcy5ydTtcclxuICAgIHRoaXMuaHVuZHJlZHRoc1J1ID0gY29uZkh1bmQucnU7XHJcbiAgICB0aGlzLmN1cnJlbmN5RW4gPSBjb25mTmFtZXMuZW47XHJcbiAgICB0aGlzLmh1bmRyZWR0aHNFbiA9IGNvbmZIdW5kLmVuO1xyXG5cclxuICAgIHRoaXMub25lSHVuZHJlZEx2ID0gJ3ZpZW5zIHNpbXRzJztcclxuICAgIHRoaXMuaHVuZHJhZHMgPSAnc2ltdGknO1xyXG4gICAgdGhpcy5hbmRzID0geydsdic6ICd1bicsICdlbic6J2FuZCcsICdydSc6J9C4J307XHJcbiAgICB0aGlzLmNvbWF0cyA9IHsnbHYnOiAna29tYXRzJywgJ2VuJzonY29tYScsICdydSc6J9C60L7QvNCwJ307XHJcbiAgICB0aGlzLm51bGxlID0geydsdic6ICdudWxsZScsICdydSc6J9C90L7Qu9GMJ307XHJcblxyXG4gICAgdGhpcy5iaWdOdW1zID0ge1xyXG4gICAgICAgICczJzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9GC0YvRgdGP0YfQsCcsICfRgtGL0YHRj9GHJ10sXHJcbiAgICAgICAgICAgICdsdic6IFsndMWra3N0b3RpcycsICd0xatrc3RvxaFpJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICc2Jzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9C80LjQu9C70LjQvtC9JywgJ9C80LjQu9C70LjQvtC90L7QsiddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ21pbGpvbnMnLCAnbWlsam9uaSddXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnOSc6IHtcclxuICAgICAgICAgICAgJ3J1JzogWyfQvNC40LvQu9C40LDRgNC0JywgJ9C80LjQu9C70LjQvtC90L7QsiddLFxyXG4gICAgICAgICAgICAnbHYnOiBbJ21pbGphcmRzJywgJ21pbGphcmRpJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgICcxMic6IHtcclxuICAgICAgICAgICAgJ3J1JzogWyfRgtGA0LjQu9C70LjQvtC9JywgJ9GC0L7QuNC70LvQuNC+0L3QvtCyJ10sXHJcbiAgICAgICAgICAgICdsdic6IFsndHJpbGpvbnMnLCAndHJpbGpvbmknXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzE1Jzoge1xyXG4gICAgICAgICAgICAncnUnOiBbJ9C60LLQsNC00YDQuNC70LvQuNC+0L0nLCAn0LrQstCw0LTRgNC40LvQu9C40L7QvdC+0LInXSxcclxuICAgICAgICAgICAgJ2x2JzogWydrdmFkcmlsam9ucycsICdrdmFkcmlsam9uaSddXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkVHJhbnNsYXRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9