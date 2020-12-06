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
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);


var WordTranslations = function WordTranslations() {
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
  this.confing = {
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
  var confNames = {};
  var confHund = {};

  for (var code in this.confing) {
    if (this.confing[code]['name'] !== undefined) {
      for (var lang in this.confing[code]['name']) {
        if (confNames[lang] === undefined) {
          confNames[lang] = {};
        }

        confNames[lang][code] = this.confing[code]['name'][lang];
      }
    }

    if (this.confing[code]['hundredths'] !== undefined) {
      for (lang in this.confing[code]['hundredths']) {
        if (confHund[lang] === undefined) {
          confHund[lang] = {};
        }

        confHund[lang][code] = this.confing[code]['hundredths'][lang];
      }
    }
  }

  this.currencyLv = confNames.lv;
  this.hundredthsLv = confHund.lv;
  this.currencyRu = confNames.ru;
  this.hundredthsRu = confHund.ru;
  this.currencyEn = confNames.en;
  this.hundredthsEn = confHund.en;
};

/* harmony default export */ __webpack_exports__["default"] = (WordTranslations);

/***/ })

},[["./src/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RyYW5zbGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJudW10b3dvcmRzIiwiTnVtVG9Xb3JkcyIsInVwZGF0ZUFsbCIsImN1cnJlbmN5IiwiJCIsInZhbCIsImxhbmciLCJudW0iLCJyZXMiLCJnZXRGdWxsIiwiaHRtbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZmFkZUluIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJzaG93SGVscCIsImhpZGUiLCJvbiIsInNlbCIsInZhbHMiLCJnZXRWYWxzIiwia2V5IiwidmFsYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwibGFuZ1ZhbHMiLCJjaGVja2VkIiwidHJhbnNsYXRvciIsIlQyVyIsInRyYW5zbGF0aW9ucyIsIldvcmRUcmFuc2xhdGlvbnMiLCJwcm90b3R5cGUiLCJjdXJyZW5jeUx2IiwidW5pdHMiLCJudW1lcmljVW5pdCIsInVuaXROYW1lc1J1IiwidW5pdE5hbWVzTHYiLCJ0ZWVucyIsInRlZW5OYW1lc1J1IiwidGVlbk5hbWVzTHYiLCJ0ZW5uZXJzIiwibnVtZXJpY1RlbiIsInRlbm5lck5hbWVzUnUiLCJ0ZW5uZXJOYW1lc0x2IiwiaHVuZHJlZHMiLCJudW1lcmljSHVuZHJlZCIsImh1bmRyZWRzTmFtZXNSdSIsImdlbmVyaWNDYWxsZXIiLCJtZXRob2ROYW1lIiwiYXJncyIsImNhbGwiLCJhcmd1bWVudHMiLCJzaGlmdCIsImFwcGx5IiwidW5pIiwibGVuIiwidjEiLCJ2bSIsIm5mbSIsIm1pbGlvbmkiLCJzdWJzdHJpbmciLCJ0aG91c2FuZHNjaSIsIm1pbGpXb3JkIiwidGhvdXNhbmRzIiwidmwiLCJtaWxsaW9ucyIsImJpbGxpb25zIiwidHJpbGxpb25zIiwicXVhZHJpbGxpb25zIiwidHJpbSIsImdldFJlc3VsdCIsImNlbnQiLCJldXIiLCJwb2ludCIsImxhc3RJbmRleE9mIiwiY29tYSIsInBvaW50Q291bnQiLCJzcGxpdCIsImxlbmd0aCIsImNvbWFDb3VudCIsInNlcCIsInVuIiwiY29tYXRzIiwiY2VudGkiLCJyZXBsYWNlIiwiY2VudGkxIiwiY2VudGkyIiwib3JpZyIsInRvV29yZHMiLCJOdW1iZXIiLCJlIiwicmVwZWF0IiwiZWxlbWVudHMiLCJlbmRpbmdzUnUiLCJ0b0xvd2VyQ2FzZSIsIm51bWJlciIsImVuZGluZ3MiLCJlbmRpbmciLCJ2YWx1dGEiLCJlZGVuIiwic20iLCJjdXJyZW5jeUVuIiwiaHVuZHJlZHRoc0VuIiwiY3VycmVuY3lSdSIsImh1bmRyZWR0aHNSdSIsImh1bmRyZWR0aHNMdiIsInNtcmVzIiwiaGFzT3duUHJvcGVydHkiLCJjb25maW5nIiwiY29uZk5hbWVzIiwiY29uZkh1bmQiLCJjb2RlIiwibHYiLCJydSIsImVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFVBQVUsR0FBRyxJQUFJQyxtREFBSixFQUFqQjs7QUFFQSxTQUFTQyxTQUFULEdBQXFCO0FBQ2pCLE1BQUlDLFFBQVEsR0FBR0MsNkNBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsR0FBYixFQUFmO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRiw2Q0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NDLEdBQWhDLEVBQVg7QUFDQSxNQUFJRSxHQUFHLEdBQUdILDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFDLEdBQVIsRUFBVjtBQUNBLE1BQUlHLEdBQUcsR0FBR1IsVUFBVSxDQUFDUyxPQUFYLENBQW1CTixRQUFuQixFQUE2QkcsSUFBN0IsRUFBbUNDLEdB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S1osWUFBTCxHQUFvQlEsUUFBUSxDQUFDSSxFQUE3QjtBQUNILENBL0dEOztBQWlIZXBGLCtFQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCdcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgTnVtVG9Xb3JkcyBmcm9tIFwiLi9udW10b3dvcmRzXCI7XHJcblxyXG52YXIgbnVtdG93b3JkcyA9IG5ldyBOdW1Ub1dvcmRzKCk7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVBbGwoKSB7XHJcbiAgICB2YXIgY3VycmVuY3kgPSAkKFwiI3ZhbHV0YVwiKS52YWwoKTtcclxuICAgIHZhciBsYW5nID0gJCgnaW5wdXRbbmFtZT1cImxhbmdcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gICAgdmFyIG51bSA9ICQoXCIjY1wiKS52YWwoKTtcclxuICAgIHZhciByZXMgPSBudW10b3dvcmRzLmdldEZ1bGwoY3VycmVuY3ksIGxhbmcsIG51bSk7XHJcbiAgICAkKFwiI3Jlc1wiKS5odG1sKHJlcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29udmVydF9sYW5nJywgbGFuZyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29udmVydF9jdXJyZW5jeScsIGN1cnJlbmN5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weSgpIHtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCQoXCIjcmVzXCIpLmh0bWwoKSk7XHJcbiAgICAkKFwiI2FscnRcIikuZmFkZUluKCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyQoXCIjYWxydFwiKS5mYWRlT3V0KCk7fSwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dIZWxwKCkge1xyXG4gICAgJChcIiNoZWxwXCIpLmZhZGVJbigpO1xyXG4gICAgJChcIiNoZWxwLWJ0blwiKS5oaWRlKCk7XHJcbn1cclxuXHJcbiQoXCIjY1wiKS5vbigna2V5dXAnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY1wiKS5vbignY2xpY2snLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ3Bhc3RlJywgdXBkYXRlQWxsKTtcclxuJChcIiN2YWx1dGFcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9bGFuZ10nKS5vbignY2hhbmdlJywgdXBkYXRlQWxsKTtcclxuJChcIiNjb3B5LWJ0blwiKS5vbignY2xpY2snLCBjb3B5KTtcclxuJChcIiNoZWxwLWJ0blwiKS5vbignY2xpY2snLCBzaG93SGVscCk7XHJcblxyXG52YXIgc2VsID0gJyc7XHJcbnZhciB2YWxzID0gbnVtdG93b3Jkcy5nZXRWYWxzKCk7XHJcbmZvciAodmFyIGtleSBpbiB2YWxzKSB7XHJcbiAgICB2YXIgdmFsYSA9IHZhbHNba2V5XS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHNba2V5XS5zbGljZSgxKTtcclxuICAgIHNlbCA9IHNlbCArICc8b3B0aW9uIHZhbHVlPVwiJytrZXkrJ1wiPicra2V5LnRvVXBwZXJDYXNlKCkrJyAnK3ZhbGErJzwvb3B0aW9uPic7XHJcbn07XHJcbiQoXCIjdmFsdXRhXCIpLmh0bWwoc2VsKTtcclxudmFyIGxhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29udmVydF9sYW5nJyk7XHJcbmlmIChsYW5nICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHZhciBsYW5nVmFscyA9IHtcclxuICAgICAgICAnbHYnOiAwLFxyXG4gICAgICAgICdlbic6IDEsXHJcbiAgICAgICAgJ3J1JzogMlxyXG4gICAgfTtcclxuXHJcbiAgICAkKCdpbnB1dDpyYWRpb1tuYW1lPVwibGFuZ1wiXScpW2xhbmdWYWxzW2xhbmddXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICQoJ2lucHV0W25hbWU9XCJsYW5nXCJdOmNoZWNrZWQnKS52YWwoKTtcclxufVxyXG52YXIgY3VycmVuY3kgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29udmVydF9jdXJyZW5jeScpO1xyXG5pZiAoY3VycmVuY3kgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgJChcIiN2YWx1dGFcIikudmFsKGN1cnJlbmN5KTtcclxufVxyXG4iLCJpbXBvcnQgVDJXIGZyb20gXCJudW1iZXJzMndvcmRzXCI7XHJcbmltcG9ydCBXb3JkVHJhbnNsYXRpb25zIGZyb20gXCIuL3RyYW5zbGF0aW9uc1wiO1xyXG5cclxudmFyIE51bVRvV29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0b3IgPSBuZXcgVDJXKFwiRU5fVVNcIik7XHJcbiAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IG5ldyBXb3JkVHJhbnNsYXRpb25zKCk7XHJcbiAgICB0aGlzLmxhbmcgPSAnbHYnO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRWYWxzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5THY7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnVuaXRzID0gZnVuY3Rpb24gKG51bWVyaWNVbml0KSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLnVuaXROYW1lc1J1W251bWVyaWNVbml0XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMudW5pdE5hbWVzTHZbbnVtZXJpY1VuaXRdO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS50ZWVucyA9IGZ1bmN0aW9uICh0ZWVucykge1xyXG4gICAgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy50ZWVuTmFtZXNSdVt0ZWVuc107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25zLnRlZW5OYW1lc0x2W3RlZW5zXTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudGVubmVycyA9IGZ1bmN0aW9uIChudW1lcmljVGVuKSB7XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bml0cyhudW1lcmljVGVuWzFdKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljVGVuWzBdID09PSBcIjFcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlZW5zKG51bWVyaWNUZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMudGVubmVyTmFtZXNSdVtudW1lcmljVGVuWzBdXSArIFwiIFwiICsgdGhpcy51bml0cyhudW1lcmljVGVuWzFdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMudGVubmVyTmFtZXNMdltudW1lcmljVGVuWzBdXSArIFwiIFwiICsgdGhpcy51bml0cyhudW1lcmljVGVuWzFdKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuaHVuZHJlZHMgPSBmdW5jdGlvbiAobnVtZXJpY0h1bmRyZWQpIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHNOYW1lc1J1W251bWVyaWNIdW5kcmVkWzBdXSArICcgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljSHVuZHJlZFswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWVyaWNIdW5kcmVkWzBdID09PSBcIjFcIikge1xyXG4gICAgICAgIHJldHVybiAndmllbnMgc2ltdHMnICsgJyAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudW5pdHMobnVtZXJpY0h1bmRyZWRbMF0pICsgJyBzaW10aSAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0pO1xyXG59XHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdlbmVyaWNDYWxsZXIgPSBmdW5jdGlvbihtZXRob2ROYW1lKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTsgIC8vY29udmVydHMgYXJndW1lbnRzIHRvIGFuIGFycmF5XHJcbiAgICBhcmdzLnNoaWZ0KCk7IC8vcmVtb3ZlIHRoZSBtZXRob2QgbmFtZVxyXG4gICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJncyk7ICAvL2NhbGwgeW91ciBtZXRob2Qgd2l0aCB0aGUgY3VycmVudCBzY29wZSBhbmQgcGFzcyB0aGUgYXJndW1lbnRzXHJcbn07XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bmkgPSBmdW5jdGlvbiAobnVtLCBsZW4sIHYxLCB2bSwgbmZtKSB7XHJcbiAgICB2YXIgbWlsaW9uaSA9IG51bS5zdWJzdHJpbmcoMCwgMyk7XHJcbiAgICB2YXIgdGhvdXNhbmRzY2kgPSBudW0uc3Vic3RyaW5nKDMsIGxlbik7XHJcblxyXG4gICAgaWYgKG1pbGlvbmkgPT09ICcwMDAnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJpY0NhbGxlcihuZm0sdGhvdXNhbmRzY2kpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtaWxqV29yZCA9IHZtO1xyXG4gICAgaWYgKG1pbGlvbmlbMl0gPT09IFwiMVwiICYmIG1pbGlvbmlbMV0gIT09IFwiMVwiKSB7XHJcbiAgICAgICAgbWlsaldvcmQgPSB2MVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHVuZHJlZHMobWlsaW9uaSkgKyAnICcrbWlsaldvcmQrJyAnICsgdGhpcy5nZW5lcmljQ2FsbGVyKG5mbSx0aG91c2FuZHNjaSk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnRob3VzYW5kcyA9IGZ1bmN0aW9uIChudW0pIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICB2YXIgdmwgPSAn0YLRi9GB0Y/Rh9CwJztcclxuICAgICAgICB2YXIgdm0gPSAn0YLRi9GB0Y/Rhyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2bCA9ICd0xatrc3RvdGlzJztcclxuICAgICAgICB2YXIgdm0gPSAndMWra3N0b8WhaSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCA2LCB2bCwgdm0sICdodW5kcmVkcycpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5taWxsaW9ucyA9IGZ1bmN0aW9uIChudW0pIHtcclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICB2YXIgdmwgPSAn0LzQuNC70LvQuNC+0L0nO1xyXG4gICAgICAgIHZhciB2bSA9ICfQvNC40LvQu9C40L7QvdC+0LInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdmwgPSAnbWlsam9ucyc7XHJcbiAgICAgICAgdmFyIHZtID0gJ21pbGpvbmknO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudW5pKG51bSwgOSwgdmwsIHZtLCAndGhvdXNhbmRzJylcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuYmlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ9C80LjQu9C70LjQsNGA0LQnO1xyXG4gICAgICAgIHZhciB2bSA9ICfQvNC40LvQu9C40LDRgNC00L7Qsic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2bCA9ICdtaWxqYXJkcyc7XHJcbiAgICAgICAgdmFyIHZtID0gJ21pbGphcmRpJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDEyLCB2bCwgdm0sICdtaWxsaW9ucycpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS50cmlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ9GC0YDQuNC70LvQuNC+0L0nO1xyXG4gICAgICAgIHZhciB2bSA9ICfRgtC+0LjQu9C70LjQvtC90L7Qsic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2bCA9ICd0cmlsam9ucyc7XHJcbiAgICAgICAgdmFyIHZtID0gJ3RyaWxqb25pJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDE1LCB2bCwgdm0sICdiaWxsaW9ucycpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5xdWFkcmlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdmFyIHZsID0gJ9C60LLQsNC00YDQuNC70LvQuNC+0L0nO1xyXG4gICAgICAgIHZhciB2bSA9ICfQutCy0LDQtNGA0LjQu9C70LjQvtC90L7Qsic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2bCA9ICdrdmFkcmlsam9ucyc7XHJcbiAgICAgICAgdmFyIHZtID0gJ2t2YWRyaWxqb25pJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDE4LCB2bCwgdm0sICd0cmlsbGlvbnMnKS50cmltKCk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldFJlc3VsdCA9IGZ1bmN0aW9uIChudW0sIGNlbnQsIGV1cikge1xyXG4gICAgdmFyIHBvaW50ID0gbnVtLmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICB2YXIgY29tYSA9IG51bS5sYXN0SW5kZXhPZignLCcpO1xyXG4gICAgdmFyIHBvaW50Q291bnQgPSAobnVtLnNwbGl0KFwiLlwiKS5sZW5ndGggLSAxKVxyXG4gICAgdmFyIGNvbWFDb3VudCA9IChudW0uc3BsaXQoXCIsXCIpLmxlbmd0aCAtIDEpXHJcbiAgICB2YXIgc2VwID0gLTE7XHJcbiAgICBpZiAocG9pbnQgIT09IC0xICYmIHBvaW50ID4gY29tYSAmJiBwb2ludENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIHNlcCA9IHBvaW50O1xyXG4gICAgfSBlbHNlIGlmIChjb21hICE9PSAtMSAmJiBjb21hID4gcG9pbnQgJiYgY29tYUNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIHNlcCA9IGNvbWE7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxlbmd0aCA9IG51bS5sZW5ndGg7XHJcbiAgICB2YXIgdW4gPSAndW4nXHJcbiAgICB2YXIgY29tYXRzID0gJ2tvbWF0cyc7XHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgdW4gPSAnYW5kJ1xyXG4gICAgICAgIGNvbWF0cyA9ICdjb21hJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgdW4gPSAn0LgnXHJcbiAgICAgICAgY29tYXRzID0gJ9C60L7QvNCwJztcclxuICAgIH1cclxuICAgIHZhciBjZW50aSA9ICcgJyt1bisnIDAwICcgKyBjZW50O1xyXG4gICAgaWYgKHNlcCAhPT0gLTEpIHtcclxuICAgICAgICBjZW50aSA9IG51bS5zdWJzdHJpbmcoc2VwKzEsIGxlbmd0aCk7XHJcbiAgICAgICAgY2VudGkgPSBjZW50aS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIilcclxuICAgICAgICBudW0gPSBudW0uc3Vic3RyaW5nKDAsIHNlcCk7XHJcbiAgICAgICAgaWYgKGNlbnRpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnIDAwICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VudGkubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpKycwICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VudGkubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNlbnRpMSA9IGNlbnRpLnN1YnN0cmluZygwLDIpO1xyXG4gICAgICAgICAgICB2YXIgY2VudGkyID0gY2VudGkuc3Vic3RyaW5nKDIsY2VudGkubGVuZ3RoKTtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAnK2NlbnRpMSArICcsICcgKyBjb21hdHMgKycsICcrIGNlbnRpMisnICcgKyBjZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3JpZyA9IG51bTtcclxuICAgIG51bSA9IG51bS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIilcclxuXHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbnVtID0gdGhpcy50cmFuc2xhdG9yLnRvV29yZHMoTnVtYmVyKG51bSkpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBudW0gPSAnQSBsb3Qgb2YnO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5sYW5nID09PSAncnUnKSB7XHJcbiAgICAgICAgbnVtID0gJzAnLnJlcGVhdCgxOCAtIG51bS5sZW5ndGgpICsgbnVtO1xyXG4gICAgICAgIG51bSA9IHRoaXMucXVhZHJpbGxpb25zKG51bSk7XHJcbiAgICAgICAgaWYgKG51bSA9PT0gJycpIHtcclxuICAgICAgICAgICAgbnVtID0gJ9C90L7Qu9GMJztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG51bSA9ICcwJy5yZXBlYXQoMTggLSBudW0ubGVuZ3RoKSArIG51bTtcclxuICAgICAgICBudW0gPSB0aGlzLnF1YWRyaWxsaW9ucyhudW0pO1xyXG4gICAgICAgIGlmIChudW0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgIG51bSA9ICdudWxsZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmxhbmcgPT09ICdsdicpIHtcclxuICAgICAgICBpZiAoKG9yaWcubGVuZ3RoID4gMSAmJiBvcmlnW29yaWcubGVuZ3RoLTFdID09PSBcIjFcIiAmJiBvcmlnW29yaWcubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgb3JpZyA9PT0gXCIxXCIpIHtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMV0gIT0gXCJvXCIgJiYgZXVyW2V1ci5sZW5ndGgtMV0gIT0gXCJlXCIpIHtcclxuICAgICAgICAgICAgICAgIGV1ciA9IGV1ci5zdWJzdHJpbmcoMCwgZXVyLmxlbmd0aCAtIDEpICsgJ2knO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldXJbZXVyLmxlbmd0aC0yXSA9PT0gXCJpXCIpIHtcclxuICAgICAgICAgICAgICAgIGV1ciA9IGV1ci5zdWJzdHJpbmcoMCwgZXVyLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldXJbZXVyLmxlbmd0aC0xXSA9PT0gXCLRgFwiKSB7XHJcbiAgICAgICAgICAgICAgICBldXIgPSBldXIuc3Vic3RyaW5nKDAsIGV1ci5sZW5ndGggLSAxKSArICfRgNC+0LInO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICB2YXIgZWxlbWVudHMgPSBldXIuc3BsaXQoJyAnKTtcclxuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGV1ciA9IHRoaXMuZW5kaW5nc1J1KG9yaWcsIGV1cik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgZXVyID0gdGhpcy5lbmRpbmdzUnUob3JpZywgZWxlbWVudHNbMF0pICsgJyAnICsgdGhpcy5lbmRpbmdzUnUob3JpZywgZWxlbWVudHNbMV0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgIGV1ciA9IHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzBdKSArICcgJyArIHRoaXMuZW5kaW5nc1J1KG9yaWcsIGVsZW1lbnRzWzFdKSArICcgJyArIGVsZW1lbnRzWzJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVtICsgJyAnICsgZXVyLnRvTG93ZXJDYXNlKCkgKyBjZW50aTtcclxufVxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5lbmRpbmdzUnUgPSBmdW5jdGlvbiAobnVtYmVyLCBjdXJyZW5jeSkge1xyXG4gICAgaWYgKChudW1iZXIubGVuZ3RoID4gMSAmJiBudW1iZXJbbnVtYmVyLmxlbmd0aC0xXSA9PT0gXCIxXCIgJiYgbnVtYmVyW251bWJlci5sZW5ndGgtMl0gIT09IFwiMVwiKSB8fCBudW1iZXIgPT09IFwiMVwiKSB7XHJcbiAgICB9IGVsc2UgaWYgKChudW1iZXIubGVuZ3RoID4gMSAmJiAobnVtYmVyW251bWJlci5sZW5ndGgtMV0gPT09IFwiMlwiIHx8IG51bWJlcltudW1iZXIubGVuZ3RoLTFdID09PSBcIjNcIiB8fCBudW1iZXJbbnVtYmVyLmxlbmd0aC0xXSA9PT0gXCI0XCIpICYmIG51bWJlcltudW1iZXIubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgbnVtYmVyID09PSBcIjFcIikge1xyXG4gICAgICAgIHZhciBlbmRpbmdzID0geydhZGQnOntcItGAXCI6IFwi0LBcIiwgXCLRglwiOiBcItCwXCIsIFwi0LpcIjogXCLQsFwiLCBcItCw0LxcIjogXCLQsFwifSwgJ3JlcGxhY2UnOiB7XCLQuNGA0LBcIjogXCLQuNGA0YtcIiwgXCLRjFwiOiBcItGPXCIsIFwi0YHQutC40LlcIjpcItGB0LrQuNC1XCIsIFwi0LjQuVwiOiBcItC40YVcIiwgXCLRi9C5XCI6IFwi0LBcIiwgXCLQsNGPXCI6IFwi0LjQtVwiLCBcItGEXCI6IFwi0YtcIiwgXCLQvdCwXCI6IFwi0L3Ri1wifX07XHJcbiAgICAgICAgZm9yICh2YXIgZW5kaW5nIGluIGVuZGluZ3NbJ2FkZCddKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5zdWJzdHJpbmcoY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgPT09IGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5ICsgZW5kaW5nc1snYWRkJ11bZW5kaW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGVuZGluZyBpbiBlbmRpbmdzWydyZXBsYWNlJ10pIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LnN1YnN0cmluZyhjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSA9PT0gZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuc3Vic3RyaW5nKDAsIGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpICsgZW5kaW5nc1sncmVwbGFjZSddW2VuZGluZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBlbmRpbmdzID0geydhZGQnOntcItGAXCI6IFwi0L7QslwiLCBcItGCXCI6IFwi0L7QslwiLCBcItC6XCI6IFwi0L7QslwifSwgJ3JlcGxhY2UnOiB7XCLRjFwiOiBcItC10LlcIiwgXCLQuNC5XCI6IFwi0LjRhVwiLCBcItGL0LlcIjogXCLRi9GFXCIsIFwi0LDRj1wiOiBcItC40YVcIiwgXCLQsFwiOiBcIlwifX07XHJcbiAgICAgICAgZm9yICh2YXIgZW5kaW5nIGluIGVuZGluZ3NbJ2FkZCddKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeS5zdWJzdHJpbmcoY3VycmVuY3kubGVuZ3RoIC0gZW5kaW5nLmxlbmd0aCkgPT09IGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5ICsgZW5kaW5nc1snYWRkJ11bZW5kaW5nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGVuZGluZyBpbiBlbmRpbmdzWydyZXBsYWNlJ10pIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LnN1YnN0cmluZyhjdXJyZW5jeS5sZW5ndGggLSBlbmRpbmcubGVuZ3RoKSA9PT0gZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kuc3Vic3RyaW5nKDAsIGN1cnJlbmN5Lmxlbmd0aCAtIGVuZGluZy5sZW5ndGgpICsgZW5kaW5nc1sncmVwbGFjZSddW2VuZGluZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbmN5O1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRGdWxsID0gZnVuY3Rpb24gKHZhbHV0YSwgbGFuZywgbnVtKSB7XHJcbiAgICB0aGlzLmxhbmcgPSBsYW5nO1xyXG4gICAgdmFyIGVkZW4gPSB7XHJcbiAgICB9O1xyXG4gICAgdmFyIHNtID0ge1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5sYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgZWRlbiA9IHRoaXMudHJhbnNsYXRpb25zLmN1cnJlbmN5RW47XHJcbiAgICAgICAgc20gPSB0aGlzLnRyYW5zbGF0aW9ucy5odW5kcmVkdGhzRW47XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gJ3J1Jykge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnRyYW5zbGF0aW9ucy5jdXJyZW5jeVJ1O1xyXG4gICAgICAgIHNtID0gdGhpcy50cmFuc2xhdGlvbnMuaHVuZHJlZHRoc1J1O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlZGVuID0gdGhpcy50cmFuc2xhdGlvbnMuY3VycmVuY3lMdjtcclxuICAgICAgICBzbSA9IHRoaXMudHJhbnNsYXRpb25zLmh1bmRyZWR0aHNMdjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIHNtcmVzID0gJygxLzEwMCkgJyArIHZhbHV0YS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc20sIHZhbHV0YSkpIHtcclxuICAgICAgICBzbXJlcyA9IHNtW3ZhbHV0YV07XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzID0gdGhpcy5nZXRSZXN1bHQobnVtLCBzbXJlcywgZWRlblt2YWx1dGFdKTtcclxuICAgIHJlcyA9IHJlcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlcy5zbGljZSgxKTtcclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdW1Ub1dvcmRzO1xyXG4iLCJ2YXIgV29yZFRyYW5zbGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudW5pdE5hbWVzTHYgPSB7XHJcbiAgICAgICAgXCIwXCI6IFwiXCIsXHJcbiAgICAgICAgXCIxXCI6IFwidmllbnNcIixcclxuICAgICAgICBcIjJcIjogXCJkaXZpXCIsXHJcbiAgICAgICAgXCIzXCI6IFwidHLEq3NcIixcclxuICAgICAgICBcIjRcIjogXCLEjWV0cmlcIixcclxuICAgICAgICBcIjVcIjogXCJwaWVjaVwiLFxyXG4gICAgICAgIFwiNlwiOiBcInNlxaFpXCIsXHJcbiAgICAgICAgXCI3XCI6IFwic2VwdGnFhmlcIixcclxuICAgICAgICBcIjhcIjogXCJhc3RvxYZpXCIsXHJcbiAgICAgICAgXCI5XCI6IFwiZGV2acWGaVwiXHJcbiAgICB9O1xyXG4gICAgdGhpcy50ZWVuTmFtZXNMdiA9IHtcclxuICAgICAgICBcIjEwXCI6IFwiZGVzbWl0XCIsXHJcbiAgICAgICAgXCIxMVwiOiBcInZpZW5wYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxMlwiOiBcImRpdnBhZHNtaXRcIixcclxuICAgICAgICBcIjEzXCI6IFwidHLEq3NwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxNFwiOiBcIsSNZXRycGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTVcIjogXCJwaWVjcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTZcIjogXCJzZcWhcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTdcIjogXCJzZXB0acWGcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMThcIjogXCJhc3RvxYZwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxOVwiOiBcImRldmnFhnBhZHNtaXRcIlxyXG4gICAgfTtcclxuICAgIHRoaXMudGVubmVyTmFtZXNMdiA9IHtcclxuICAgICAgICBcIjJcIjogXCJkaXZkZXNtaXRcIixcclxuICAgICAgICBcIjNcIjogXCJ0csSrc2Rlc21pdFwiLFxyXG4gICAgICAgIFwiNFwiOiBcIsSNZXRyZGVzbWl0XCIsXHJcbiAgICAgICAgXCI1XCI6IFwicGllY2Rlc21pdFwiLFxyXG4gICAgICAgIFwiNlwiOiBcInNlxaFkZXNtaXRcIixcclxuICAgICAgICBcIjdcIjogXCJzZXB0acWGZGVzbWl0XCIsXHJcbiAgICAgICAgXCI4XCI6IFwiYXN0b8WGZGVzbWl0XCIsXHJcbiAgICAgICAgXCI5XCI6IFwiZGV2acWGZGVzbWl0XCJcclxuICAgIH07XHJcbiAgICB0aGlzLnVuaXROYW1lc1J1ID0ge1xyXG4gICAgICAgIFwiMFwiOiBcIlwiLFxyXG4gICAgICAgIFwiMVwiOiBcItC+0LTQuNC9XCIsXHJcbiAgICAgICAgXCIyXCI6IFwi0LTQstCwXCIsXHJcbiAgICAgICAgXCIzXCI6IFwi0YLRgNC4XCIsXHJcbiAgICAgICAgXCI0XCI6IFwi0YfQtdGC0YvRgNC1XCIsXHJcbiAgICAgICAgXCI1XCI6IFwi0L/Rj9GC0YxcIixcclxuICAgICAgICBcIjZcIjogXCLRiNC10YHRgtGMXCIsXHJcbiAgICAgICAgXCI3XCI6IFwi0YHQtdC80YxcIixcclxuICAgICAgICBcIjhcIjogXCLQstC+0YHQtdC80YxcIixcclxuICAgICAgICBcIjlcIjogXCLQtNC10LLRj9GC0YxcIlxyXG4gICAgfTtcclxuICAgIHRoaXMudGVlbk5hbWVzUnUgPSB7XHJcbiAgICAgICAgXCIxMFwiOiBcItC00LXRgdGP0YLRjFwiLFxyXG4gICAgICAgIFwiMTFcIjogXCLQvtC00LjQvdCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiMTJcIjogXCLQtNCy0LXQvdCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiMTNcIjogXCLRgtGA0LXQvdCw0LTRhtCw0YLRjFwiLFxyXG4gICAgICAgIFwiMTRcIjogXCLRh9C10YLRi9GA0L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjE1XCI6IFwi0L/Rj9GC0L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjE2XCI6IFwi0YjQtdGB0L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjE3XCI6IFwi0YHQtdC80L3QsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjE4XCI6IFwi0LLQvtGB0LXQvNC90LDQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCIxOVwiOiBcItC00LXQstGP0YLQvdCw0LTRhtCw0YLRjFwiXHJcbiAgICB9O1xyXG4gICAgdGhpcy50ZW5uZXJOYW1lc1J1ID0ge1xyXG4gICAgICAgIFwiMlwiOiBcItC00LLQsNC00YbQsNGC0YxcIixcclxuICAgICAgICBcIjNcIjogXCLRgtGA0LjQtNGG0LDRgtGMXCIsXHJcbiAgICAgICAgXCI0XCI6IFwi0YHQvtGA0L7QulwiLFxyXG4gICAgICAgIFwiNVwiOiBcItC/0Y/RjNC00LXRgdGP0YJcIixcclxuICAgICAgICBcIjZcIjogXCLRiNC10YHRgtGM0LTQtdGB0Y/RglwiLFxyXG4gICAgICAgIFwiN1wiOiBcItGB0LXQvNGM0LTQtdGB0Y/RglwiLFxyXG4gICAgICAgIFwiOFwiOiBcItCy0L7RgdC10LzRjNC00LXRgdGP0YJcIixcclxuICAgICAgICBcIjlcIjogXCLQtNC10LLRj9C90L7RgdGC0L5cIlxyXG4gICAgfTtcclxuICAgIHRoaXMuaHVuZHJlZHNOYW1lc1J1ID0ge1xyXG4gICAgICAgIFwiXCI6IFwiXCIsXHJcbiAgICAgICAgXCIwXCI6IFwiXCIsXHJcbiAgICAgICAgXCIxXCI6IFwi0YHRgtC+XCIsXHJcbiAgICAgICAgXCIyXCI6IFwi0LTQstC10YHRgtC4XCIsXHJcbiAgICAgICAgXCIzXCI6IFwi0YLRgNC40YHRgtCwXCIsXHJcbiAgICAgICAgXCI0XCI6IFwi0YfQtdGC0YvRgNC10YHRgtCwXCIsXHJcbiAgICAgICAgXCI1XCI6IFwi0L/Rj9GC0YzRgdC+0YJcIixcclxuICAgICAgICBcIjZcIjogXCLRiNC10YHRgtGM0YHQvtGCXCIsXHJcbiAgICAgICAgXCI3XCI6IFwi0YHQtdC80YzRgdC+0YJcIixcclxuICAgICAgICBcIjhcIjogXCLQstC+0YHQtdC80YzRgdC+0YJcIixcclxuICAgICAgICBcIjlcIjogXCLQtNC10LLRj9GC0YzRgdC+0YJcIlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNvbmZpbmcgPSB7XCJldXJcIjp7XCJuYW1lXCI6e1wibHZcIjpcImV1cm9cIixcInJ1XCI6XCJcXHUwNDE1XFx1MDQzMlxcdTA0NDBcXHUwNDNlXCIsXCJlblwiOlwiZXVyb1wifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiY2VudGlcIixcInJ1XCI6XCJcXHUwNDQ2XFx1MDQzNVxcdTA0M2RcXHUwNDQyXFx1MDQzZVxcdTA0MzJcIixcImVuXCI6XCJjZW50c1wifX0sXCJ1c2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcImRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MTRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImRvbGxhclwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiY2VudGlcIixcInJ1XCI6XCJcXHUwNDQ2XFx1MDQzNVxcdTA0M2RcXHUwNDQyXFx1MDQzZVxcdTA0MzJcIixcImVuXCI6XCJjZW50c1wifX0sXCJnYnBcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkxpZWxicml0XFx1MDEwMW5pamFzIG1cXHUwMTAxcmNpXFx1MDE0NmFcIixcInJ1XCI6XCJcXHUwNDEwXFx1MDQzZFxcdTA0MzNcXHUwNDNiXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDQzXFx1MDQzZFxcdTA0NDIgXFx1MDQ0MVxcdTA0NDJcXHUwNDM1XFx1MDQ0MFxcdTA0M2JcXHUwNDM4XFx1MDQzZFxcdTA0MzNcXHUwNDNlXFx1MDQzMlwiLFwiZW5cIjpcImJyaXRpc2ggcG91bmRcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcInBlbmlcIixcInJ1XCI6XCJcXHUwNDNmXFx1MDQzNVxcdTA0M2RcXHUwNDM4XCIsXCJlblwiOlwicGVuY2VcIn19LFwicnViXCI6e1wibmFtZVwiOntcImx2XCI6XCJLcmlldmlqYXMgcnVibGlzXCIsXCJydVwiOlwiXFx1MDQyMFxcdTA0M2VcXHUwNDQxXFx1MDQ0MVxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQ0M1xcdTA0MzFcXHUwNDNiXFx1MDQ0Y1wiLFwiZW5cIjpcInJ1c3NpYW4gcnVibGVcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcImthcGVpa1xcdTAxMDFzXCIsXCJydVwiOlwiXFx1MDQzYVxcdTA0M2VcXHUwNDNmXFx1MDQzNVxcdTA0MzVcXHUwNDNhXCIsXCJlblwiOlwia29wZWtzXCJ9fSxcInBsblwiOntcIm5hbWVcIjp7XCJsdlwiOlwiUG9saWphcyB6bG90c1wiLFwicnVcIjpcIlxcdTA0MWZcXHUwNDNlXFx1MDQzYlxcdTA0NGNcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzdcXHUwNDNiXFx1MDQzZVxcdTA0NDJcXHUwNDRiXFx1MDQzOVwiLFwiZW5cIjpcInBvbGlzaCB6bG90eVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiZ3JvXFx1MDE2MWlcIixcInJ1XCI6XCJcXHUwNDMzXFx1MDQ0MFxcdTA0M2VcXHUwNDQ4XCIsXCJlblwiOlwiZ3Jvc3pcIn19LFwia3p0XCI6e1wibmFtZVwiOntcImx2XCI6XCJLYXphaHN0XFx1MDEwMW5hcyB0ZW5nZVwiLFwicnVcIjpcIlxcdTA0MWFcXHUwNDMwXFx1MDQzN1xcdTA0MzBcXHUwNDQ1XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MlxcdTA0MzVcXHUwNDNkXFx1MDQzM1xcdTA0MzVcIixcImVuXCI6XCJrYXpha2hzdGFuIHRlbmdlXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJ0aWpcXHUwMTJibmlcIixcInJ1XCI6XCJcXHUwNDQyXFx1MDQzOFxcdTA0NGJcXHUwNDNkXCIsXCJlblwiOlwidFxcdTAxMzF5bnNcIn19LFwiY2hmXCI6e1wibmFtZVwiOntcImx2XCI6XCJcXHUwMTYwdmVpY2VzIGZyYW5rc1wiLFwicnVcIjpcIlxcdTA0MjhcXHUwNDMyXFx1MDQzNVxcdTA0MzlcXHUwNDQ2XFx1MDQzMFxcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NDRcXHUwNDQwXFx1MDQzMFxcdTA0M2RcXHUwNDNhXCIsXCJlblwiOlwic3dpc3MgZnJhbmNcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcInJhcGVuaVwiLFwicnVcIjpcIlxcdTA0NDBcXHUwNDMwXFx1MDQzZlxcdTA0M2ZcXHUwNDM1XFx1MDQzZFxcdTA0M2VcXHUwNDMyXCIsXCJlblwiOlwicmFwcGVuc1wifX0sXCJhZWRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkFwdmllbm90byBBclxcdTAxMDFidSBFbWlyXFx1MDEwMXR1IGRpcmhhbXNcIixcInJ1XCI6XCJcXHUwNDE0XFx1MDQzOFxcdTA0NDBcXHUwNDQ1XFx1MDQzMFxcdTA0M2MgXFx1MDQxZVxcdTA0MTBcXHUwNDJkXCIsXCJlblwiOlwidW5pdGVkIGFyYWIgZW1pcmF0ZXMgZGlyaGFtXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJmaWxpXCIsXCJydVwiOlwiXFx1MDQ0NFxcdTA0MzhcXHUwNDNiXFx1MDQ0MVwiLFwiZW5cIjpcImZpbHNcIn19LFwiZGtrXCI6e1wibmFtZVwiOntcImx2XCI6XCJEXFx1MDEwMW5pamFzIGtyb25hXCIsXCJydVwiOlwiXFx1MDQxNFxcdTA0MzBcXHUwNDQyXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0MFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcImRhbmlzaCBrcm9uZVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiXFx1MDExM3JpXCIsXCJydVwiOlwiXFx1MDQ0ZFxcdTA0NDBcXHUwNDM1XCIsXCJlblwiOlwib3JlXCJ9fSxcInNla1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiWnZpZWRyaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MjhcXHUwNDMyXFx1MDQzNVxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQwXFx1MDQzZVxcdTA0M2RcXHUwNDMwXCIsXCJlblwiOlwic3dlZGlzaCBrcm9uYVwifSxcImh1bmRyZWR0aHNcIjp7XCJsdlwiOlwiXFx1MDExM3JpXCIsXCJydVwiOlwiXFx1MDQ0ZFxcdTA0NDBcXHUwNDM1XCIsXCJlblwiOlwib3JlXCJ9fSxcIm5va1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiTm9ydlxcdTAxMTNcXHUwMTIzaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MWRcXHUwNDNlXFx1MDQ0MFxcdTA0MzJcXHUwNDM1XFx1MDQzNlxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJub3J3ZWdpYW4ga3JvbmVcIn0sXCJodW5kcmVkdGhzXCI6e1wibHZcIjpcIlxcdTAxMTNyaVwiLFwicnVcIjpcIlxcdTA0NGRcXHUwNDQwXFx1MDQzNVwiLFwiZW5cIjpcIm9yZVwifX0sXCJiZ25cIjp7XCJuYW1lXCI6e1wibHZcIjpcIkJ1bGdcXHUwMTAxcmlqYXMgbGV2YVwiLFwicnVcIjpcIlxcdTA0MTFcXHUwNDNlXFx1MDQzYlxcdTA0MzNcXHUwNDMwXFx1MDQ0MFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzVcXHUwNDMyXCIsXCJlblwiOlwiYnVsZ2FyaWFuIGxldlwifX0sXCJodWZcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlVuZ1xcdTAxMDFyaWphcyBmb3JpbnRzXCIsXCJydVwiOlwiXFx1MDQzMlxcdTA0MzVcXHUwNDNkXFx1MDQzM1xcdTA0MzVcXHUwNDQwXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ0XFx1MDQzZVxcdTA0NDBcXHUwNDM4XFx1MDQzZFxcdTA0NDJcIixcImVuXCI6XCJodW5nYXJpYW4gZm9yaW50XCJ9fSxcInRyeVwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVHVyY2lqYXMgbGlyYVwiLFwicnVcIjpcIlxcdTA0MjJcXHUwNDQzXFx1MDQ0MFxcdTA0MzVcXHUwNDQ2XFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2JcXHUwNDM4XFx1MDQ0MFxcdTA0MzBcIixcImVuXCI6XCJ0dXJraXNoIGxpcmFcIn19LFwiYWxsXCI6e1wibmFtZVwiOntcImx2XCI6XCJBbGJcXHUwMTAxbmlqYXMgbGVrc1wiLFwicnVcIjpcIlxcdTA0MTBcXHUwNDNiXFx1MDQzMVxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDNiXFx1MDQzNVxcdTA0M2FcIixcImVuXCI6XCJhbGJhbmlhbiBsZWtcIn19LFwiaHJrXCI6e1wibmFtZVwiOntcImx2XCI6XCJIb3J2XFx1MDEwMXRpamFzIGt1bmFcIixcInJ1XCI6XCJYXFx1MDQzZVxcdTA0NDBcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0M2FcXHUwNDQzXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJjcm9hdGlhbiBrdW5hXCJ9fSxcImN6a1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiXFx1MDEwY2VoaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MjdcXHUwNDM1XFx1MDQ0OFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJjemVjaCBrb3J1bmFcIn19LFwiZ2VsXCI6e1wibmFtZVwiOntcImx2XCI6XCJHcnV6aWphcyBsYXJpXCIsXCJydVwiOlwiXFx1MDQxM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0MzhcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDNiXFx1MDQzMFxcdTA0NDBcXHUwNDM4XCIsXCJlblwiOlwiZ2VvcmdpYW4gbGFyaVwifX0sXCJsa3JcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxNjByaWxhbmthcyByXFx1MDE2YnBpamFcIixcInJ1XCI6XCJcXHUwNDI4XFx1MDQ0MFxcdTA0MzgtXFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzYVxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDQwXFx1MDQ0M1xcdTA0M2ZcXHUwNDM4XFx1MDQ0ZlwiLFwiZW5cIjpcInNyaSBsYW5rYW4gcnVwZWVcIn19LFwidG5kXCI6e1wibmFtZVwiOntcImx2XCI6XCJUdW5pc2lqYXMgZGluXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQyMlxcdTA0NDNcXHUwNDNkXFx1MDQzOFxcdTA0NDFcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDM4XFx1MDQzZFxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwidHVuaXNpYW4gZGluYXJcIn19LFwiaWxzXCI6e1wibmFtZVwiOntcImx2XCI6XCJJenJhXFx1MDExM2xhcyBcXHUwMTYxZWtlbHNcIixcInJ1XCI6XCJcXHUwNDE4XFx1MDQzN1xcdTA0NDBcXHUwNDMwXFx1MDQzOFxcdTA0M2JcXHUwNDRjXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ4XFx1MDQzNVxcdTA0M2FcXHUwNDM1XFx1MDQzYlxcdTA0NGNcIixcImVuXCI6XCJpc3JhZWxpIHNoZXFlbFwifX0sXCJqb2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkpvcmRcXHUwMTAxbmlqYXMgZGluXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQxOFxcdTA0M2VcXHUwNDQwXFx1MDQzNFxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzOFxcdTA0M2RcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImpvcmRhbmlhbiBkaW5hclwifX0sXCJieW5cIjp7XCJuYW1lXCI6e1wibHZcIjpcIkJhbHRrcmlldmlqYXMgcnVibGlzXCIsXCJydVwiOlwiXFx1MDQxMVxcdTA0MzVcXHUwNDNiXFx1MDQzZVxcdTA0NDBcXHUwNDQzXFx1MDQ0MVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0NDNcXHUwNDMxXFx1MDQzYlxcdTA0NGNcIixcImVuXCI6XCJiZWxhcnVzaWFuIG5ldyBydWJsZVwifX0sXCJlZ3BcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxMTJcXHUwMTIzaXB0ZXMgbVxcdTAxMDFyY2lcXHUwMTQ2YVwiLFwicnVcIjpcIlxcdTA0MTVcXHUwNDMzXFx1MDQzOFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MlxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0NFxcdTA0NDNcXHUwNDNkXFx1MDQ0MlwiLFwiZW5cIjpcImVneXB0aWFuIHBvdW5kXCJ9fSxcInVhaFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVWtyYWluYXMgZ3Jpdm5hXCIsXCJydVwiOlwiXFx1MDQyM1xcdTA0M2FcXHUwNDQwXFx1MDQzMFxcdTA0MzhcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDMzXFx1MDQ0MFxcdTA0MzhcXHUwNDMyXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJ1a3JhaW5pYW4gaHJ5dm5pYVwifX0sXCJjbnlcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlxcdTAxMzZcXHUwMTJibmFzIGp1YVxcdTAxNDZhXCIsXCJydVwiOlwiXFx1MDQxYVxcdTA0MzhcXHUwNDQyXFx1MDQzMFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0NGVcXHUwNDMwXFx1MDQzZFxcdTA0NGNcIixcImVuXCI6XCJjaGluZXNlIHl1YW5cIn19LFwidGhiXCI6e1wibmFtZVwiOntcImx2XCI6XCJUYWl6ZW1lcyBiYXRzXCIsXCJydVwiOlwiXFx1MDQyMlxcdTA0MzBcXHUwNDM4XFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzMVxcdTA0MzBcXHUwNDQyXCIsXCJlblwiOlwidGhhaSBiYWh0XCJ9fSxcInZuZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiVmpldG5hbWFzIGRvbmdzXCIsXCJydVwiOlwiXFx1MDQxMlxcdTA0NGNcXHUwNDM1XFx1MDQ0MlxcdTA0M2RcXHUwNDMwXFx1MDQzY1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNkXFx1MDQzM1wiLFwiZW5cIjpcInZpZXRuYW1lc2UgZG9uZ1wifX0sXCJwaHBcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkZpbGlwXFx1MDEyYm51IHBlc29cIixcInJ1XCI6XCJcXHUwNDI0XFx1MDQzOFxcdTA0M2JcXHUwNDM4XFx1MDQzZlxcdTA0M2ZcXHUwNDM4XFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzZVxcdTA0MzUgXFx1MDQzZlxcdTA0MzVcXHUwNDQxXFx1MDQzZVwiLFwiZW5cIjpcInBoaWxpcHBpbmUgcGVzb1wifX0sXCJtYWRcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1hcm9rYXMgZGlyaGFtc1wiLFwicnVcIjpcIlxcdTA0MWNcXHUwNDMwXFx1MDQ0MFxcdTA0M2VcXHUwNDNhXFx1MDQzYVxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzOFxcdTA0NDBcXHUwNDQ1XFx1MDQzMFxcdTA0M2NcIixcImVuXCI6XCJtb3JvY2NhbiBkaXJoYW1cIn19LFwiYXVkXCI6e1wibmFtZVwiOntcImx2XCI6XCJBdXN0clxcdTAxMDFsaWphcyBkb2xcXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDEwXFx1MDQzMlxcdTA0NDFcXHUwNDQyXFx1MDQ0MFxcdTA0MzBcXHUwNDNiXFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcImF1c3RyYWxpYW4gZG9sbGFyXCJ9fSxcImFyc1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiQXJnZW50XFx1MDEyYm5hcyBwZXNvXCIsXCJydVwiOlwiXFx1MDQxMFxcdTA0NDBcXHUwNDMzXFx1MDQzNVxcdTA0M2RcXHUwNDQyXFx1MDQzOFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcImVuXCI6XCJhcmdlbnRpbmUgcGVzb1wifX0sXCJqcHlcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkphcFxcdTAxMDFuYXMgalxcdTAxMTNuYVwiLFwicnVcIjpcIlxcdTA0MmZcXHUwNDNmXFx1MDQzZVxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0MzhcXHUwNDM1XFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJqYXBhbmVzZSB5ZW5cIn19LFwiaWRyXCI6e1wibmFtZVwiOntcImx2XCI6XCJJbmRvblxcdTAxMTN6aWphcyByXFx1MDE2YnBpamFcIixcInJ1XCI6XCJcXHUwNDE4XFx1MDQzZFxcdTA0MzRcXHUwNDNlXFx1MDQzZFxcdTA0MzVcXHUwNDM3XFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0NDBcXHUwNDQzXFx1MDQzZlxcdTA0MzhcXHUwNDRmXCIsXCJlblwiOlwiaW5kb25lc2lhbiBydXBpYWhcIn19LFwiaXNrXCI6e1wibmFtZVwiOntcImx2XCI6XCJJc2xhbmRlcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MThcXHUwNDQxXFx1MDQzYlxcdTA0MzBcXHUwNDNkXFx1MDQzNFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYVxcdTA0NDBcXHUwNDNlXFx1MDQzZFxcdTA0MzBcIixcImVuXCI6XCJpY2VsYW5kIGtyb25hXCJ9fSxcImFtZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiQXJtXFx1MDExM25pamFzIGRyYW1zXCIsXCJydVwiOlwiXFx1MDQxMFxcdTA0NDBcXHUwNDNjXFx1MDQ0ZlxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDQwXFx1MDQzMFxcdTA0M2NcIixcImVuXCI6XCJhcm1lbmlhbiBkcmFtXCJ9fSxcInJvblwiOntcIm5hbWVcIjp7XCJsdlwiOlwiUnVtXFx1MDEwMW5pamFzIGxlamFcIixcInJ1XCI6XCJcXHUwNDIwXFx1MDQ0M1xcdTA0M2NcXHUwNDRiXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzYlxcdTA0MzVcXHUwNDRmXCIsXCJlblwiOlwicm9tYW5pYW4gbGV1XCJ9fSxcInNnZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiU2luZ2FwXFx1MDE2YnJhcyBkb2xcXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDIxXFx1MDQzOFxcdTA0M2RcXHUwNDMzXFx1MDQzMFxcdTA0M2ZcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0M2VcXHUwNDNiXFx1MDQzYlxcdTA0MzBcXHUwNDQwXCIsXCJlblwiOlwic2luZ2Fwb3JlIGRvbGxhclwifX0sXCJzYnBcIjp7XCJuYW1lXCI6e1wibHZcIjpcIlNrb3RpamFzIG1cXHUwMTAxcmNpXFx1MDE0NmFcIixcInJ1XCI6XCJcXHUwNDI4XFx1MDQzZVxcdTA0NDJcXHUwNDNiXFx1MDQzMFxcdTA0M2RcXHUwNDM0XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ0XFx1MDQ0M1xcdTA0M2RcXHUwNDQyXCIsXCJlblwiOlwic2NvdHRpc2ggcG91bmRcIn19LFwiY2FkXCI6e1wibmFtZVwiOntcImx2XCI6XCJLYW5cXHUwMTAxZGFzIGRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MWFcXHUwNDMwXFx1MDQzZFxcdTA0MzBcXHUwNDM0XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJjYW5hZGlhbiBkb2xsYXJcIn19LFwiYnJsXCI6e1wibmFtZVwiOntcImx2XCI6XCJCcmF6XFx1MDEyYmxpamFzIHJlXFx1MDEwMWxzXCIsXCJydVwiOlwiXFx1MDQxMVxcdTA0NDBcXHUwNDMwXFx1MDQzN1xcdTA0MzhcXHUwNDNiXFx1MDQ0Y1xcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0MzVcXHUwNDMwXFx1MDQzYlwiLFwiZW5cIjpcImJyYXppbGlhbiByZWFsXCJ9fSxcInphclwiOntcIm5hbWVcIjp7XCJsdlwiOlwiRGllbnZpZFxcdTAxMDFmcmlrYXMgcmVuZHNcIixcInJ1XCI6XCJcXHUwNDJlXFx1MDQzNlxcdTA0M2RcXHUwNDNlXFx1MDQzMFxcdTA0NDRcXHUwNDQwXFx1MDQzOFxcdTA0M2FcXHUwNDMwXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQ0MFxcdTA0NGRcXHUwNDNkXFx1MDQzNFwiLFwiZW5cIjpcInNvdXRoIGFmcmljYW4gcmFuZFwifX0sXCJpbnJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkluZGlqYXMgclxcdTAxNmJwaWphXCIsXCJydVwiOlwiXFx1MDQxOFxcdTA0M2RcXHUwNDM0XFx1MDQzOFxcdTA0MzlcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmIFxcdTA0NDBcXHUwNDQzXFx1MDQzZlxcdTA0MzhcXHUwNDRmXCIsXCJlblwiOlwiaW5kaWFuIHJ1cGVlXCJ9fSxcInJzZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiU2VyYmlqYXMgZGluXFx1MDEwMXJzXCIsXCJydVwiOlwiXFx1MDQyMVxcdTA0MzVcXHUwNDQwXFx1MDQzMVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzNFxcdTA0MzhcXHUwNDNkXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJzZXJiaWFuIGRpbmFyXCJ9fSxcIm56ZFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiSmF1bnpcXHUwMTEzbGFuZGVzIGRvbFxcdTAxMDFyc1wiLFwicnVcIjpcIlxcdTA0MWRcXHUwNDNlXFx1MDQzMlxcdTA0M2VcXHUwNDM3XFx1MDQzNVxcdTA0M2JcXHUwNDMwXFx1MDQzZFxcdTA0MzRcXHUwNDQxXFx1MDQzYVxcdTA0MzhcXHUwNDM5IFxcdTA0MzRcXHUwNDNlXFx1MDQzYlxcdTA0M2JcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcIm5ldyB6ZWFsYW5kIGRvbGxhclwifX0sXCJteXJcIjp7XCJuYW1lXCI6e1wibHZcIjpcIk1hbGFpemlqYXMgcmluZ2l0c1wiLFwicnVcIjpcIk1cXHUwNDMwXFx1MDQzYlxcdTA0MzBcXHUwNDM5XFx1MDQzN1xcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQwXFx1MDQzOFxcdTA0M2RcXHUwNDMzXFx1MDQzM1xcdTA0MzhcXHUwNDQyXCIsXCJlblwiOlwibWFsYXlzaWFuIHJpbmdnaXRcIn19LFwibXVyXCI6e1wibmFtZVwiOntcImx2XCI6XCJNYXVyXFx1MDEyYmNpamFzIHNhbGFzIHJcXHUwMTZicGlqYVwiLFwicnVcIjpcIlxcdTA0MWNcXHUwNDMwXFx1MDQzMlxcdTA0NDBcXHUwNDM4XFx1MDQzYVxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDQwXFx1MDQ0M1xcdTA0M2ZcXHUwNDM4XFx1MDQ0ZlwiLFwiZW5cIjpcIm1hdXJpdGlhbiBydXBlZVwifX0sXCJoa2RcIjp7XCJuYW1lXCI6e1wibHZcIjpcIkhvbmtvbmdhcyBkb2xcXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDEzXFx1MDQzZVxcdTA0M2RcXHUwNDNhXFx1MDQzZVxcdTA0M2RcXHUwNDMzXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzZVxcdTA0M2JcXHUwNDNiXFx1MDQzMFxcdTA0NDBcIixcImVuXCI6XCJob25nIGtvbmcgZG9sbGFyXCJ9fSxcImtyd1wiOntcIm5hbWVcIjp7XCJsdlwiOlwiRGllbnZpZGtvcmVqYXMgdm9uYVwiLFwicnVcIjpcIlxcdTA0MmVcXHUwNDM2XFx1MDQzZFxcdTA0M2VcXHUwNDNhXFx1MDQzZVxcdTA0NDBcXHUwNDM1XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzMlxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcInNvdXRoIGtvcmVhbiB3b25cIn19LFwibXhuXCI6e1wibmFtZVwiOntcImx2XCI6XCJNZWtzaWthcyBwZXNvXCIsXCJydVwiOlwiXFx1MDQxY1xcdTA0MzVcXHUwNDNhXFx1MDQ0MVxcdTA0MzhcXHUwNDNhXFx1MDQzMFxcdTA0M2RcXHUwNDQxXFx1MDQzYVxcdTA0M2VcXHUwNDM1IFxcdTA0M2ZcXHUwNDM1XFx1MDQ0MVxcdTA0M2VcIixcImVuXCI6XCJtZXhpY2FuIHBlc29cIn19LFwibWtkXCI6e1wibmFtZVwiOntcImx2XCI6XCJNYVxcdTAxMzdlZG9uaWphcyBkZW5cXHUwMTAxcnNcIixcInJ1XCI6XCJcXHUwNDFjXFx1MDQzMFxcdTA0M2FcXHUwNDM1XFx1MDQzNFxcdTA0M2VcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDM0XFx1MDQzOFxcdTA0M2RcXHUwNDMwXFx1MDQ0MFwiLFwiZW5cIjpcIm1hY2Vkb25pYW4gZGluYXJcIn19LFwiZG9wXCI6e1wibmFtZVwiOntcImx2XCI6XCJEb21pbmlrXFx1MDEwMW5hcyBwZXNvXCIsXCJydVwiOlwiXFx1MDQxNFxcdTA0M2VcXHUwNDNjXFx1MDQzOFxcdTA0M2RcXHUwNDM4XFx1MDQzYVxcdTA0MzBcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDNlXFx1MDQzNSBcXHUwNDNmXFx1MDQzNVxcdTA0NDFcXHUwNDNlXCIsXCJlblwiOlwiZG9taW5pY2FuIHBlc29cIn19LFwia2VzXCI6e1wibmFtZVwiOntcImx2XCI6XCJLZW5pamFzIFxcdTAxNjFpbGlcXHUwMTQ2XFx1MDE2MVwiLFwicnVcIjpcIlxcdTA0MWFcXHUwNDM1XFx1MDQzZFxcdTA0MzhcXHUwNDM5XFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDQ4XFx1MDQzOFxcdTA0M2JcXHUwNDNiXFx1MDQzOFxcdTA0M2RcXHUwNDMzXCIsXCJlblwiOlwia2VueWEgc2hpbGxpbmdcIn19LFwiZGVtXCI6e1wibmFtZVwiOntcImx2XCI6XCJWXFx1MDEwMWNpamFzIG1hcmthXCIsXCJydVwiOlwiXFx1MDQxZFxcdTA0MzVcXHUwNDNjXFx1MDQzNVxcdTA0NDZcXHUwNDNhXFx1MDQzMFxcdTA0NGYgXFx1MDQzY1xcdTA0MzBcXHUwNDQwXFx1MDQzYVxcdTA0MzBcIixcImVuXCI6XCJnZXJtYW4gbWFya1wifX0sXCJlZWtcIjp7XCJuYW1lXCI6e1wibHZcIjpcIklnYXVuaWphcyBrcm9uYVwiLFwicnVcIjpcIlxcdTA0MmRcXHUwNDQxXFx1MDQ0MlxcdTA0M2VcXHUwNDNkXFx1MDQ0MVxcdTA0M2FcXHUwNDMwXFx1MDQ0ZiBcXHUwNDNhXFx1MDQ0MFxcdTA0M2VcXHUwNDNkXFx1MDQzMFwiLFwiZW5cIjpcImVzdG9uaWFuIGtyb29uXCJ9fSxcImx0bFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiTGlldHV2YXMgbGl0c1wiLFwicnVcIjpcIlxcdTA0MWJcXHUwNDM4XFx1MDQ0MlxcdTA0M2VcXHUwNDMyXFx1MDQ0MVxcdTA0M2FcXHUwNDM4XFx1MDQzOSBcXHUwNDNiXFx1MDQzOFxcdTA0NDJcIixcImVuXCI6XCJsaXRodWFuaWFuIGxpdGFzXCJ9fSxcImx2bFwiOntcIm5hbWVcIjp7XCJsdlwiOlwiTGF0dmlqYXMgbGF0c1wiLFwicnVcIjpcIlxcdTA0MWJcXHUwNDMwXFx1MDQ0MlxcdTA0MzJcXHUwNDM4XFx1MDQzOVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzkgXFx1MDQzYlxcdTA0MzBcXHUwNDQyXCIsXCJlblwiOlwibGF0dmlhbiBsYXRzXCJ9LFwiaHVuZHJlZHRoc1wiOntcImx2XCI6XCJzYW50aW1pXCIsXCJydVwiOlwiXFx1MDQ0MVxcdTA0MzBcXHUwNDNkXFx1MDQ0MlxcdTA0MzhcXHUwNDNjXFx1MDQzZVxcdTA0MzJcIixcImVuXCI6XCJzYW50aW1zXCJ9fX07XHJcblxyXG4gICAgdmFyIGNvbmZOYW1lcyA9IHt9O1xyXG4gICAgdmFyIGNvbmZIdW5kID0ge307XHJcbiAgICBmb3IgKHZhciBjb2RlIGluIHRoaXMuY29uZmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpbmdbY29kZV1bJ25hbWUnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGxhbmcgaW4gdGhpcy5jb25maW5nW2NvZGVdWyduYW1lJ10pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25mTmFtZXNbbGFuZ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZOYW1lc1tsYW5nXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uZk5hbWVzW2xhbmddW2NvZGVdID0gdGhpcy5jb25maW5nW2NvZGVdWyduYW1lJ11bbGFuZ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmluZ1tjb2RlXVsnaHVuZHJlZHRocyddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yIChsYW5nIGluIHRoaXMuY29uZmluZ1tjb2RlXVsnaHVuZHJlZHRocyddKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZkh1bmRbbGFuZ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZIdW5kW2xhbmddID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25mSHVuZFtsYW5nXVtjb2RlXSA9IHRoaXMuY29uZmluZ1tjb2RlXVsnaHVuZHJlZHRocyddW2xhbmddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW5jeUx2ID0gY29uZk5hbWVzLmx2O1xyXG4gICAgdGhpcy5odW5kcmVkdGhzTHYgPSBjb25mSHVuZC5sdjtcclxuICAgIHRoaXMuY3VycmVuY3lSdSA9IGNvbmZOYW1lcy5ydTtcclxuICAgIHRoaXMuaHVuZHJlZHRoc1J1ID0gY29uZkh1bmQucnU7XHJcbiAgICB0aGlzLmN1cnJlbmN5RW4gPSBjb25mTmFtZXMuZW47XHJcbiAgICB0aGlzLmh1bmRyZWR0aHNFbiA9IGNvbmZIdW5kLmVuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JkVHJhbnNsYXRpb25zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9