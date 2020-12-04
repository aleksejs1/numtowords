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









var NumToWords = function NumToWords() {
  this.translator = new numbers2words__WEBPACK_IMPORTED_MODULE_7___default.a("EN_US");
  this.vals = {
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
  this.smLv = {
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
  this.valsEn = {
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
  this.smEn = {
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

NumToWords.prototype.getVals = function () {
  return this.vals;
};

NumToWords.prototype.units = function (numericUnit) {
  var unitNames = {
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
  return unitNames[numericUnit];
};

NumToWords.prototype.teens = function (teens) {
  var teenNames = {
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
  return teenNames[teens];
};

NumToWords.prototype.tenners = function (numericTen) {
  if (numericTen[0] === "0") {
    return this.units(numericTen[1]);
  }

  if (numericTen[0] === "1") {
    return this.teens(numericTen);
  }

  var tennerNames = {
    "2": "divdesmit",
    "3": "trīsdesmit",
    "4": "četrdesmit",
    "5": "piecdesmit",
    "6": "sešdesmit",
    "7": "septiņdesmit",
    "8": "astoņdesmit",
    "9": "deviņdesmit"
  };
  return tennerNames[numericTen[0]] + " " + this.units(numericTen[1]);
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
    eden = this.valsEn;
    sm = this.smEn;
  } else {
    eden = this.vals;
    sm = this.smLv;
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

/***/ })

},[["./src/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL251bXRvd29yZHMuanMiXSwibmFtZXMiOlsibnVtdG93b3JkcyIsIk51bVRvV29yZHMiLCJ1cGRhdGVBbGwiLCJjdXJyZW5jeSIsIiQiLCJ2YWwiLCJsYW5nIiwibnVtIiwicmVzIiwiZ2V0RnVsbCIsImh0bWwiLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZmFkZUluIiwic2V0VGltZW91dCIsImZhZGVPdXQiLCJzaG93SGVscCIsImhpZGUiLCJvbiIsInNlbCIsInZhbHMiLCJnZXRWYWxzIiwia2V5IiwidmFsYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0cmFuc2xhdG9yIiwiVDJXIiwic21MdiIsInZhbHNFbiIsInNtRW4iLCJwcm90b3R5cGUiLCJ1bml0cyIsIm51bWVyaWNVbml0IiwidW5pdE5hbWVzIiwidGVlbnMiLCJ0ZWVuTmFtZXMiLCJ0ZW5uZXJzIiwibnVtZXJpY1RlbiIsInRlbm5lck5hbWVzIiwiaHVuZHJlZHMiLCJudW1lcmljSHVuZHJlZCIsImdlbmVyaWNDYWxsZXIiLCJtZXRob2ROYW1lIiwiYXJncyIsImNhbGwiLCJhcmd1bWVudHMiLCJzaGlmdCIsImFwcGx5IiwidW5pIiwibGVuIiwidjEiLCJ2bSIsIm5mbSIsIm1pbGlvbmkiLCJzdWJzdHJpbmciLCJ0aG91c2FuZHNjaSIsIm1pbGpXb3JkIiwidGhvdXNhbmRzIiwibWlsbGlvbnMiLCJiaWxsaW9ucyIsInRyaWxsaW9ucyIsInF1YWRyaWxsaW9ucyIsImdldFJlc3VsdCIsImNlbnQiLCJldXIiLCJwb2ludCIsImxhc3RJbmRleE9mIiwiY29tYSIsInBvaW50Q291bnQiLCJzcGxpdCIsImxlbmd0aCIsImNvbWFDb3VudCIsInNlcCIsInVuIiwiY29tYXRzIiwiY2VudGkiLCJyZXBsYWNlIiwiY2VudGkxIiwiY2VudGkyIiwib3JpZyIsInRvV29yZHMiLCJOdW1iZXIiLCJlIiwicmVwZWF0IiwidG9Mb3dlckNhc2UiLCJ2YWx1dGEiLCJlZGVuIiwic20iLCJzbXJlcyIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFVBQVUsR0FBRyxJQUFJQyxtREFBSixFQUFqQjs7QUFFQSxTQUFTQyxTQUFULEdBQXFCO0FBQ2pCLE1BQUlDLFFBQVEsR0FBR0MsNkNBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsR0FBYixFQUFmO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRiw2Q0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NDLEdBQWhDLEVBQVg7QUFDQSxNQUFJRSxHQUFHLEdBQUdILDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFDLEdBQVIsRUFBVjtBQUNBLE1BQUlHLEdBQUcsR0FBR1IsVUFBVSxDQUFDUyxPQUFYLENBQW1CTixRQUFuQixFQUE2QkcsSUFBN0IsRUFBbUNDLEdBQW5DLENBQVY7QUFDQUgsK0NBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVU0sSUFBVixDQUFlRixHQUFmO0FBQ0g7O0FBRUQsU0FBU0csSUFBVCxHQUFnQjtBQUNaQyxXQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCViw2Q0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVTSxJQUFWLEVBQTlCO0FBQ0FOLCtDQUFDLENBQUMsT0FBRCxDQUFELENBQVdXLE1BQVg7QUFDQUMsWUFBVSxDQUFDLFlBQVc7QUFBQ1osaURBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2EsT0FBWDtBQUFzQixHQUFuQyxFQUFxQyxJQUFyQyxDQUFWO0FBQ0g7O0FBRUQsU0FBU0MsUUFBVCxHQUFvQjtBQUNoQmQsK0NBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV1csTUFBWDtBQUNBWCwrQ0FBQyxDQUFDLFdBQUQsQ0FBRCxD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QUN4RCxNQUFJbUYsSUFBSSxHQUFHLEVBQVg7QUFFQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFHQSxNQUFJckYsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDZm9GLFFBQUksR0FBRyxLQUFLMUQsTUFBWjtBQUNBMkQsTUFBRSxHQUFHLEtBQUsxRCxJQUFWO0FBQ0gsR0FIRCxNQUdPO0FBQ0h5RCxRQUFJLEdBQUcsS0FBS3BFLElBQVo7QUFDQXFFLE1BQUUsR0FBRyxLQUFLNUQsSUFBVjtBQUNIOztBQUdELE1BQUk2RCxLQUFLLEdBQUcsYUFBYUgsTUFBTSxDQUFDOUQsV0FBUCxFQUF6Qjs7QUFDQSxNQUFJa0UsY0FBYyxDQUFDN0MsSUFBZixDQUFvQjJDLEVBQXBCLEVBQXdCRixNQUF4QixDQUFKLEVBQXFDO0FBQ2pDRyxTQUFLLEdBQUdELEVBQUUsQ0FBQ0YsTUFBRCxDQUFWO0FBQ0g7O0FBRUQsTUFBSWpGLEdBQUcsR0FBRyxLQUFLMEQsU0FBTCxDQUFlM0QsR0FBZixFQUFvQnFGLEtBQXBCLEVBQTJCRixJQUFJLENBQUNELE1BQUQsQ0FBL0IsRUFBeUNuRixJQUF6QyxDQUFWO0FBQ0FFLEtBQUcsR0FBR0EsR0FBRyxDQUFDa0IsTUFBSixDQUFXLENBQVgsRUFBY0MsV0FBZCxLQUE4Qm5CLEdBQUcsQ0FBQ29CLEtBQUosQ0FBVSxDQUFWLENBQXBDO0FBRUEsU0FBT3BCLEdBQVA7QUFDSCxDQXhCRDs7QUEwQmVQLHlFQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCdcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgTnVtVG9Xb3JkcyBmcm9tIFwiLi9udW10b3dvcmRzXCI7XHJcblxyXG52YXIgbnVtdG93b3JkcyA9IG5ldyBOdW1Ub1dvcmRzKCk7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVBbGwoKSB7XHJcbiAgICB2YXIgY3VycmVuY3kgPSAkKFwiI3ZhbHV0YVwiKS52YWwoKTtcclxuICAgIHZhciBsYW5nID0gJCgnaW5wdXRbbmFtZT1cImxhbmdcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gICAgdmFyIG51bSA9ICQoXCIjY1wiKS52YWwoKTtcclxuICAgIHZhciByZXMgPSBudW10b3dvcmRzLmdldEZ1bGwoY3VycmVuY3ksIGxhbmcsIG51bSk7XHJcbiAgICAkKFwiI3Jlc1wiKS5odG1sKHJlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHkoKSB7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCgkKFwiI3Jlc1wiKS5odG1sKCkpO1xyXG4gICAgJChcIiNhbHJ0XCIpLmZhZGVJbigpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHskKFwiI2FscnRcIikuZmFkZU91dCgpO30sIDEwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SGVscCgpIHtcclxuICAgICQoXCIjaGVscFwiKS5mYWRlSW4oKTtcclxuICAgICQoXCIjaGVscC1idG5cIikuaGlkZSgpO1xyXG59XHJcblxyXG4kKFwiI2NcIikub24oJ2tleXVwJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ2NsaWNrJywgdXBkYXRlQWxsKTtcclxuJChcIiNjXCIpLm9uKCdwYXN0ZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjdmFsdXRhXCIpLm9uKCdjaGFuZ2UnLCB1cGRhdGVBbGwpO1xyXG4kKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPWxhbmddJykub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY29weS1idG5cIikub24oJ2NsaWNrJywgY29weSk7XHJcbiQoXCIjaGVscC1idG5cIikub24oJ2NsaWNrJywgc2hvd0hlbHApO1xyXG5cclxudmFyIHNlbCA9ICcnO1xyXG52YXIgdmFscyA9IG51bXRvd29yZHMuZ2V0VmFscygpO1xyXG5mb3IgKHZhciBrZXkgaW4gdmFscykge1xyXG4gICAgdmFyIHZhbGEgPSB2YWxzW2tleV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWxzW2tleV0uc2xpY2UoMSk7XHJcbiAgICBzZWwgPSBzZWwgKyAnPG9wdGlvbiB2YWx1ZT1cIicra2V5KydcIj4nK2tleS50b1VwcGVyQ2FzZSgpKycgJyt2YWxhKyc8L29wdGlvbj4nO1xyXG59O1xyXG4kKFwiI3ZhbHV0YVwiKS5odG1sKHNlbCk7XHJcbiIsImltcG9ydCBUMlcgZnJvbSBcIm51bWJlcnMyd29yZHNcIjtcclxuXHJcbnZhciBOdW1Ub1dvcmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy50cmFuc2xhdG9yID0gbmV3IFQyVyhcIkVOX1VTXCIpO1xyXG5cclxuICAgIHRoaXMudmFscyA9IHtcclxuICAgICAgICBcImV1clwiOiBcImV1cm9cIixcclxuICAgICAgICBcInVzZFwiOiBcImRvbMSBcnNcIixcclxuICAgICAgICBcImdicFwiOiBcIkxpZWxicml0xIFuaWphcyBtxIFyY2nFhmFcIixcclxuICAgICAgICBcInJ1YlwiOiBcIktyaWV2aWphcyBydWJsaXNcIixcclxuICAgICAgICBcInBsblwiOiBcIlBvbGlqYXMgemxvdHNcIixcclxuICAgICAgICBcImt6dFwiOiBcIkthemFoc3TEgW5hcyB0ZW5nZVwiLFxyXG4gICAgICAgIFwiY2hmXCI6IFwixaB2ZWljZXMgZnJhbmtzXCIsXHJcbiAgICAgICAgXCJhZWRcIjogXCJBcHZpZW5vdG8gQXLEgWJ1IEVtaXLEgXR1IGRpcmhhbXNcIixcclxuICAgICAgICBcImRra1wiOiBcIkTEgW5pamFzIGtyb25hXCIsXHJcbiAgICAgICAgXCJzZWtcIjogXCJadmllZHJpamFzIGtyb25hXCIsXHJcbiAgICAgICAgXCJub2tcIjogXCJOb3J2xJPEo2lqYXMga3JvbmFcIixcclxuICAgICAgICBcImJnblwiOiBcIkJ1bGfEgXJpamFzIGxldmFcIixcclxuICAgICAgICBcImh1ZlwiOiBcIlVuZ8SBcmlqYXMgZm9yaW50c1wiLFxyXG4gICAgICAgIFwidHJ5XCI6IFwiVHVyY2lqYXMgbGlyYVwiLFxyXG4gICAgICAgIFwiYWxsXCI6IFwiQWxixIFuaWphcyBsZWtzXCIsXHJcbiAgICAgICAgXCJocmtcIjogXCJIb3J2xIF0aWphcyBrdW5hXCIsXHJcbiAgICAgICAgXCJjemtcIjogXCLEjGVoaWphcyBrcm9uYVwiLFxyXG4gICAgICAgIFwiZ2VsXCI6IFwiR3J1emlqYXMgbGFyaVwiLFxyXG4gICAgICAgIFwibGtyXCI6IFwixaByaWxhbmthcyByxatwaWphXCIsXHJcbiAgICAgICAgXCJ0bmRcIjogXCJUdW5pc2lqYXMgZGluxIFyc1wiLFxyXG4gICAgICAgIFwiaWxzXCI6IFwiSXpyYcSTbGFzIMWhZWtlbHNcIixcclxuICAgICAgICBcImpvZFwiOiBcIkpvcmTEgW5pamFzIGRpbsSBcnNcIixcclxuICAgICAgICBcImJ5blwiOiBcIkJhbHRrcmlldmlqYXMgcnVibGlzXCIsXHJcbiAgICAgICAgXCJlZ3BcIjogXCLEksSjaXB0ZXMgbcSBcmNpxYZhXCIsXHJcbiAgICAgICAgXCJ1YWhcIjogXCJVa3JhaW5hcyBncml2bmFcIixcclxuICAgICAgICBcImNueVwiOiBcIsS2xKtuYXMganVhxYZhXCIsXHJcbiAgICAgICAgXCJ0aGJcIjogXCJUYWl6ZW1lcyBiYXRzXCIsXHJcbiAgICAgICAgXCJ2bmRcIjogXCJWamV0bmFtYXMgZG9uZ3NcIixcclxuICAgICAgICBcInBocFwiOiBcIkZpbGlwxKtudSBwZXNvXCIsXHJcbiAgICAgICAgXCJtYWRcIjogXCJNYXJva2FzIGRpcmhhbXNcIixcclxuICAgICAgICBcImF1ZFwiOiBcIkF1c3RyxIFsaWphcyBkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJhcnNcIjogXCJBcmdlbnTEq25hcyBwZXNvXCIsXHJcbiAgICAgICAgXCJqcHlcIjogXCJKYXDEgW5hcyBqxJNuYVwiLFxyXG4gICAgICAgIFwiaWRyXCI6IFwiSW5kb27Ek3ppamFzIHLFq3BpamFcIixcclxuICAgICAgICBcImlza1wiOiBcIklzbGFuZGVzIGtyb25hXCIsXHJcbiAgICAgICAgXCJhbWRcIjogXCJBcm3Ek25pamFzIGRyYW1zXCIsXHJcbiAgICAgICAgXCJyb25cIjogXCJSdW3EgW5pamFzIGxlamFcIixcclxuICAgICAgICBcInNnZFwiOiBcIlNpbmdhcMWrcmFzIGRvbMSBcnNcIixcclxuICAgICAgICBcInNicFwiOiBcIlNrb3RpamFzIG3EgXJjacWGYVwiLFxyXG4gICAgICAgIFwiY2FkXCI6IFwiS2FuxIFkYXMgZG9sxIFyc1wiLFxyXG4gICAgICAgIFwiYnJsXCI6IFwiQnJhesSrbGlqYXMgcmXEgWxzXCIsXHJcbiAgICAgICAgXCJ6YXJcIjogXCJEaWVudmlkxIFmcmlrYXMgcmVuZHNcIixcclxuICAgICAgICBcImluclwiOiBcIkluZGlqYXMgcsWrcGlqYVwiLFxyXG4gICAgICAgIFwicnNkXCI6IFwiU2VyYmlqYXMgZGluxIFyc1wiLFxyXG4gICAgICAgIFwibnpkXCI6IFwiSmF1bnrEk2xhbmRlcyBkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJteXJcIjogXCJNYWxhaXppamFzIHJpbmdpdHNcIixcclxuICAgICAgICBcIm11clwiOiBcIk1hdXLEq2NpamFzIHNhbGFzIHLFq3BpamFcIixcclxuICAgICAgICBcImhrZFwiOiBcIkhvbmtvbmdhcyBkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJrcndcIjogXCJEaWVudmlka29yZWphcyB2b25hXCIsXHJcbiAgICAgICAgXCJteG5cIjogXCJNZWtzaWthcyBwZXNvXCIsXHJcbiAgICAgICAgXCJta2RcIjogXCJNYcS3ZWRvbmlqYXMgZGVuxIFyc1wiLFxyXG4gICAgICAgIFwiZG9wXCI6IFwiRG9taW5pa8SBbmFzIHBlc29cIixcclxuICAgICAgICBcImtlc1wiOiBcIktlbmlqYXMgxaFpbGnFhsWhXCIsXHJcbiAgICAgICAgXCJkZW1cIjogXCJWxIFjaWphcyBtYXJrYVwiLFxyXG4gICAgICAgIFwiZWVrXCI6IFwiSWdhdW5pamFzIGtyb25hXCIsXHJcbiAgICAgICAgXCJsdGxcIjogXCJMaWV0dXZhcyBsaXRzXCIsXHJcbiAgICAgICAgXCJsdmxcIjogXCJMYXR2aWphcyBsYXRzXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc21MdiA9IHtcclxuICAgICAgICAnZXVyJzogJ2NlbnRpJyxcclxuICAgICAgICAndXNkJzogJ2NlbnRpJyxcclxuICAgICAgICAnZ2JwJzogJ3BlbmknLFxyXG4gICAgICAgICdydWInOiAna2FwZWlrxIFzJyxcclxuICAgICAgICAncGxuJzogJ2dyb8WhaScsXHJcbiAgICAgICAgJ2x2bCc6ICdzYW50aW1pJyxcclxuICAgICAgICAna3p0JzogJ3RpasSrbmknLFxyXG4gICAgICAgICdjaGYnOiAncmFwZW5pJyxcclxuICAgICAgICAnYWVkJzogJ2ZpbGknLFxyXG4gICAgICAgICdka2snOiAnxJNyaScsXHJcbiAgICAgICAgJ3Nlayc6ICfEk3JpJyxcclxuICAgICAgICAnbm9rJzogJ8STcmknLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnZhbHNFbiA9IHtcclxuICAgICAgICBcImV1clwiOiBcImV1cm9cIixcclxuICAgICAgICBcInVzZFwiOiBcImRvbGxhclwiLFxyXG4gICAgICAgIFwiZ2JwXCI6IFwiYnJpdGlzaCBwb3VuZFwiLFxyXG4gICAgICAgIFwicnViXCI6IFwicnVzc2lhbiBydWJsZVwiLFxyXG4gICAgICAgIFwicGxuXCI6IFwicG9saXNoIHpsb3R5XCIsXHJcbiAgICAgICAgXCJiZ25cIjogXCJidWxnYXJpYW4gbGV2XCIsXHJcbiAgICAgICAgXCJodWZcIjogXCJodW5nYXJpYW4gZm9yaW50XCIsXHJcbiAgICAgICAgXCJ0cnlcIjogXCJ0dXJraXNoIGxpcmFcIixcclxuICAgICAgICBcImhya1wiOiBcImNyb2F0aWFuIGt1bmFcIixcclxuICAgICAgICBcImN6a1wiOiBcImN6ZWNoIGtvcnVuYVwiLFxyXG4gICAgICAgIFwiZ2VsXCI6IFwiZ2VvcmdpYW4gbGFyaVwiLFxyXG4gICAgICAgIFwiYWxsXCI6IFwiYWxiYW5pYW4gbGVrXCIsXHJcbiAgICAgICAgXCJsa3JcIjogXCJzcmkgbGFua2FuIHJ1cGVlXCIsXHJcbiAgICAgICAgXCJzZWtcIjogXCJzd2VkaXNoIGtyb25hXCIsXHJcbiAgICAgICAgXCJ0aGJcIjogXCJ0aGFpIGJhaHRcIixcclxuICAgICAgICBcInRuZFwiOiBcInR1bmlzaWFuIGRpbmFyXCIsXHJcbiAgICAgICAgXCJpbHNcIjogXCJpc3JhZWxpIHNoZXFlbFwiLFxyXG4gICAgICAgIFwiY2hmXCI6IFwic3dpc3MgZnJhbmNcIixcclxuICAgICAgICBcIm5va1wiOiBcIm5vcndlZ2lhbiBrcm9uZVwiLFxyXG4gICAgICAgIFwiZGtrXCI6IFwiZGFuaXNoIGtyb25lXCIsXHJcbiAgICAgICAgXCJhZWRcIjogXCJ1bml0ZWQgYXJhYiBlbWlyYXRlcyBkaXJoYW1cIixcclxuICAgICAgICBcImNhZFwiOiBcImNhbmFkaWFuIGRvbGxhclwiLFxyXG4gICAgICAgIFwiYnluXCI6IFwiYmVsYXJ1c2lhbiBuZXcgcnVibGVcIixcclxuICAgICAgICBcImF1ZFwiOiBcImF1c3RyYWxpYW4gZG9sbGFyXCIsXHJcbiAgICAgICAgXCJqcHlcIjogXCJqYXBhbmVzZSB5ZW5cIixcclxuICAgICAgICBcImNueVwiOiBcImNoaW5lc2UgeXVhblwiLFxyXG4gICAgICAgIFwidWFoXCI6IFwidWtyYWluaWFuIGhyeXZuaWFcIixcclxuICAgICAgICBcImlza1wiOiBcImljZWxhbmQga3JvbmFcIixcclxuICAgICAgICBcIm56ZFwiOiBcIm5ldyB6ZWFsYW5kIGRvbGxhclwiLFxyXG4gICAgICAgIFwia3J3XCI6IFwic291dGgga29yZWFuIHdvblwiLFxyXG4gICAgICAgIFwicm9uXCI6IFwicm9tYW5pYW4gbGV1XCIsXHJcbiAgICAgICAgXCJzZ2RcIjogXCJzaW5nYXBvcmUgZG9sbGFyXCIsXHJcbiAgICAgICAgXCJpZHJcIjogXCJpbmRvbmVzaWFuIHJ1cGlhaFwiLFxyXG4gICAgICAgIFwiaGtkXCI6IFwiaG9uZyBrb25nIGRvbGxhclwiLFxyXG4gICAgICAgIFwic2JwXCI6IFwic2NvdHRpc2ggcG91bmRcIixcclxuICAgICAgICBcInphclwiOiBcInNvdXRoIGFmcmljYW4gcmFuZFwiLFxyXG4gICAgICAgIFwibXhuXCI6IFwibWV4aWNhbiBwZXNvXCIsXHJcbiAgICAgICAgXCJta2RcIjogXCJtYWNlZG9uaWFuIGRpbmFyXCIsXHJcbiAgICAgICAgXCJicmxcIjogXCJicmF6aWxpYW4gcmVhbFwiLFxyXG4gICAgICAgIFwiZWdwXCI6IFwiZWd5cHRpYW4gcG91bmRcIixcclxuICAgICAgICBcImFyc1wiOiBcImFyZ2VudGluZSBwZXNvXCIsXHJcbiAgICAgICAgXCJrZXNcIjogXCJrZW55YSBzaGlsbGluZ1wiLFxyXG4gICAgICAgIFwibXlyXCI6IFwibWFsYXlzaWFuIHJpbmdnaXRcIixcclxuICAgICAgICBcIm11clwiOiBcIm1hdXJpdGlhbiBydXBlZVwiLFxyXG4gICAgICAgIFwicGhwXCI6IFwicGhpbGlwcGluZSBwZXNvXCIsXHJcbiAgICAgICAgXCJpbnJcIjogXCJpbmRpYW4gcnVwZWVcIixcclxuICAgICAgICBcImt6dFwiOiBcImthemFraHN0YW4gdGVuZ2VcIixcclxuICAgICAgICBcImFtZFwiOiBcImFybWVuaWFuIGRyYW1cIixcclxuICAgICAgICBcIm1hZFwiOiBcIm1vcm9jY2FuIGRpcmhhbVwiLFxyXG4gICAgICAgIFwicnNkXCI6IFwic2VyYmlhbiBkaW5hclwiLFxyXG4gICAgICAgIFwidm5kXCI6IFwidmlldG5hbWVzZSBkb25nXCIsXHJcbiAgICAgICAgXCJkb3BcIjogXCJkb21pbmljYW4gcGVzb1wiLFxyXG4gICAgICAgIFwiam9kXCI6IFwiam9yZGFuaWFuIGRpbmFyXCIsXHJcbiAgICAgICAgXCJsdmxcIjogXCJsYXR2aWFuIGxhdHNcIixcclxuICAgICAgICBcImx0bFwiOiBcImxpdGh1YW5pYW4gbGl0YXNcIixcclxuICAgICAgICBcImVla1wiOiBcImVzdG9uaWFuIGtyb29uXCIsXHJcbiAgICAgICAgXCJkZW1cIjogXCJnZXJtYW4gbWFya1wiLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNtRW4gPSB7XHJcbiAgICAgICAgJ2V1cic6ICdjZW50cycsXHJcbiAgICAgICAgJ3VzZCc6ICdjZW50cycsXHJcbiAgICAgICAgJ2dicCc6ICdwZW5jZScsXHJcbiAgICAgICAgJ3J1Yic6ICdrb3Bla3MnLFxyXG4gICAgICAgICdwbG4nOiAnZ3Jvc3onLFxyXG4gICAgICAgICdsdmwnOiAnc2FudGltcycsXHJcbiAgICAgICAgJ2t6dCc6ICd0xLF5bnMnLFxyXG4gICAgICAgICdjaGYnOiAncmFwcGVucycsXHJcbiAgICAgICAgJ2FlZCc6ICdmaWxzJyxcclxuICAgICAgICAnZGtrJzogJ29yZScsXHJcbiAgICAgICAgJ3Nlayc6ICdvcmUnLFxyXG4gICAgICAgICdub2snOiAnb3JlJyxcclxuICAgIH07XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldFZhbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWxzO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bml0cyA9IGZ1bmN0aW9uIChudW1lcmljVW5pdCkge1xyXG4gICAgY29uc3QgdW5pdE5hbWVzID0ge1xyXG4gICAgICAgIFwiMFwiOiBcIlwiLFxyXG4gICAgICAgIFwiMVwiOiBcInZpZW5zXCIsXHJcbiAgICAgICAgXCIyXCI6IFwiZGl2aVwiLFxyXG4gICAgICAgIFwiM1wiOiBcInRyxKtzXCIsXHJcbiAgICAgICAgXCI0XCI6IFwixI1ldHJpXCIsXHJcbiAgICAgICAgXCI1XCI6IFwicGllY2lcIixcclxuICAgICAgICBcIjZcIjogXCJzZcWhaVwiLFxyXG4gICAgICAgIFwiN1wiOiBcInNlcHRpxYZpXCIsXHJcbiAgICAgICAgXCI4XCI6IFwiYXN0b8WGaVwiLFxyXG4gICAgICAgIFwiOVwiOiBcImRldmnFhmlcIlxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdW5pdE5hbWVzW251bWVyaWNVbml0XTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudGVlbnMgPSBmdW5jdGlvbiAodGVlbnMpIHtcclxuICAgIHZhciB0ZWVuTmFtZXMgPSB7XHJcbiAgICAgICAgXCIxMFwiOiBcImRlc21pdFwiLFxyXG4gICAgICAgIFwiMTFcIjogXCJ2aWVucGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTJcIjogXCJkaXZwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxM1wiOiBcInRyxKtzcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTRcIjogXCLEjWV0cnBhZHNtaXRcIixcclxuICAgICAgICBcIjE1XCI6IFwicGllY3BhZHNtaXRcIixcclxuICAgICAgICBcIjE2XCI6IFwic2XFoXBhZHNtaXRcIixcclxuICAgICAgICBcIjE3XCI6IFwic2VwdGnFhnBhZHNtaXRcIixcclxuICAgICAgICBcIjE4XCI6IFwiYXN0b8WGcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTlcIjogXCJkZXZpxYZwYWRzbWl0XCJcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRlZW5OYW1lc1t0ZWVuc107XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnRlbm5lcnMgPSBmdW5jdGlvbiAobnVtZXJpY1Rlbikge1xyXG4gICAgaWYgKG51bWVyaWNUZW5bMF0gPT09IFwiMFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudW5pdHMobnVtZXJpY1RlblsxXSk7XHJcbiAgICB9XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIxXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZWVucyhudW1lcmljVGVuKTtcclxuICAgIH1cclxuICAgIHZhciB0ZW5uZXJOYW1lcyA9IHtcclxuICAgICAgICBcIjJcIjogXCJkaXZkZXNtaXRcIixcclxuICAgICAgICBcIjNcIjogXCJ0csSrc2Rlc21pdFwiLFxyXG4gICAgICAgIFwiNFwiOiBcIsSNZXRyZGVzbWl0XCIsXHJcbiAgICAgICAgXCI1XCI6IFwicGllY2Rlc21pdFwiLFxyXG4gICAgICAgIFwiNlwiOiBcInNlxaFkZXNtaXRcIixcclxuICAgICAgICBcIjdcIjogXCJzZXB0acWGZGVzbWl0XCIsXHJcbiAgICAgICAgXCI4XCI6IFwiYXN0b8WGZGVzbWl0XCIsXHJcbiAgICAgICAgXCI5XCI6IFwiZGV2acWGZGVzbWl0XCJcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGVubmVyTmFtZXNbbnVtZXJpY1RlblswXV0gKyBcIiBcIiArIHRoaXMudW5pdHMobnVtZXJpY1RlblsxXSk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmh1bmRyZWRzID0gZnVuY3Rpb24gKG51bWVyaWNIdW5kcmVkKSB7XHJcbiAgICBpZiAobnVtZXJpY0h1bmRyZWRbMF0gPT09IFwiMFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljSHVuZHJlZFswXSA9PT0gXCIxXCIpIHtcclxuICAgICAgICByZXR1cm4gJ3ZpZW5zIHNpbXRzJyArICcgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVuaXRzKG51bWVyaWNIdW5kcmVkWzBdKSArICcgc2ltdGkgJyArIHRoaXMudGVubmVycyhudW1lcmljSHVuZHJlZFsxXSArIG51bWVyaWNIdW5kcmVkWzJdKTtcclxufVxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZW5lcmljQ2FsbGVyID0gZnVuY3Rpb24obWV0aG9kTmFtZSkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7ICAvL2NvbnZlcnRzIGFyZ3VtZW50cyB0byBhbiBhcnJheVxyXG4gICAgYXJncy5zaGlmdCgpOyAvL3JlbW92ZSB0aGUgbWV0aG9kIG5hbWVcclxuICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMsIGFyZ3MpOyAgLy9jYWxsIHlvdXIgbWV0aG9kIHdpdGggdGhlIGN1cnJlbnQgc2NvcGUgYW5kIHBhc3MgdGhlIGFyZ3VtZW50c1xyXG59O1xyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudW5pID0gZnVuY3Rpb24gKG51bSwgbGVuLCB2MSwgdm0sIG5mbSkge1xyXG4gICAgdmFyIG1pbGlvbmkgPSBudW0uc3Vic3RyaW5nKDAsIDMpO1xyXG4gICAgdmFyIHRob3VzYW5kc2NpID0gbnVtLnN1YnN0cmluZygzLCBsZW4pO1xyXG5cclxuICAgIGlmIChtaWxpb25pID09PSAnMDAwJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyaWNDYWxsZXIobmZtLHRob3VzYW5kc2NpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWlsaldvcmQgPSB2bTtcclxuICAgIGlmIChtaWxpb25pWzJdID09PSBcIjFcIiAmJiBtaWxpb25pWzFdICE9PSBcIjFcIikge1xyXG4gICAgICAgIG1pbGpXb3JkID0gdjFcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh1bmRyZWRzKG1pbGlvbmkpICsgJyAnK21pbGpXb3JkKycgJyArIHRoaXMuZ2VuZXJpY0NhbGxlcihuZm0sdGhvdXNhbmRzY2kpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS50aG91c2FuZHMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCA2LCAndMWra3N0b3RpcycsICd0xatrc3RvxaFpJywgJ2h1bmRyZWRzJyk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLm1pbGxpb25zID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgcmV0dXJuIHRoaXMudW5pKG51bSwgOSwgJ21pbGpvbnMnLCAnbWlsam9uaScsICd0aG91c2FuZHMnKVxyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5iaWxsaW9ucyA9IGZ1bmN0aW9uIChudW0pIHtcclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDEyLCAnbWlsamFyZHMnLCAnbWlsamFyZGknLCAnbWlsbGlvbnMnKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudHJpbGxpb25zID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgcmV0dXJuIHRoaXMudW5pKG51bSwgMTUsICd0cmlsam9ucycsICd0cmlsam9uaScsICdiaWxsaW9ucycpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5xdWFkcmlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCAxOCwgJ2t2YWRyaWxqb25zJywgJ2t2YWRyaWxqb25pJywgJ3RyaWxsaW9ucycpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRSZXN1bHQgPSBmdW5jdGlvbiAobnVtLCBjZW50LCBldXIsIGxhbmcpIHtcclxuICAgIHZhciBwb2ludCA9IG51bS5sYXN0SW5kZXhPZignLicpO1xyXG4gICAgdmFyIGNvbWEgPSBudW0ubGFzdEluZGV4T2YoJywnKTtcclxuICAgIHZhciBwb2ludENvdW50ID0gKG51bS5zcGxpdChcIi5cIikubGVuZ3RoIC0gMSlcclxuICAgIHZhciBjb21hQ291bnQgPSAobnVtLnNwbGl0KFwiLFwiKS5sZW5ndGggLSAxKVxyXG4gICAgdmFyIHNlcCA9IC0xO1xyXG4gICAgaWYgKHBvaW50ICE9PSAtMSAmJiBwb2ludCA+IGNvbWEgJiYgcG9pbnRDb3VudCA9PT0gMSkge1xyXG4gICAgICAgIHZhciBzZXAgPSBwb2ludDtcclxuICAgIH0gZWxzZSBpZiAoY29tYSAhPT0gLTEgJiYgY29tYSA+IHBvaW50ICYmIGNvbWFDb3VudCA9PT0gMSkge1xyXG4gICAgICAgIHZhciBzZXAgPSBjb21hO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsZW5ndGggPSBudW0ubGVuZ3RoO1xyXG4gICAgdmFyIHVuID0gJ3VuJ1xyXG4gICAgdmFyIGNvbWF0cyA9ICdrb21hdHMnO1xyXG4gICAgaWYgKGxhbmcgPT09ICdlbicpIHtcclxuICAgICAgICB1biA9ICdhbmQnXHJcbiAgICAgICAgY29tYXRzID0gJ2NvbWEnO1xyXG4gICAgfVxyXG4gICAgdmFyIGNlbnRpID0gJyAnK3VuKycgMDAgJyArIGNlbnQ7XHJcbiAgICBpZiAoc2VwICE9PSAtMSkge1xyXG4gICAgICAgIGNlbnRpID0gbnVtLnN1YnN0cmluZyhzZXArMSwgbGVuZ3RoKTtcclxuICAgICAgICBjZW50aSA9IGNlbnRpLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKVxyXG4gICAgICAgIG51bSA9IG51bS5zdWJzdHJpbmcoMCwgc2VwKTtcclxuICAgICAgICBpZiAoY2VudGkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgMDAgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZW50aS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnICcrY2VudGkrJzAgJyArIGNlbnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZW50aS5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnICcrY2VudGkrJyAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgY2VudGkxID0gY2VudGkuc3Vic3RyaW5nKDAsMik7XHJcbiAgICAgICAgICAgIHZhciBjZW50aTIgPSBjZW50aS5zdWJzdHJpbmcoMixjZW50aS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjZW50aSA9ICcgJyt1bisnICcrY2VudGkxICsgJywgJyArIGNvbWF0cyArJywgJysgY2VudGkyKycgJyArIGNlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBvcmlnID0gbnVtO1xyXG4gICAgbnVtID0gbnVtLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKVxyXG5cclxuICAgIGlmIChsYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbnVtID0gdGhpcy50cmFuc2xhdG9yLnRvV29yZHMoTnVtYmVyKG51bSkpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBudW0gPSAnQSBsb3Qgb2YnO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbnVtID0gJzAnLnJlcGVhdCgxOCAtIG51bS5sZW5ndGgpICsgbnVtO1xyXG4gICAgICAgIG51bSA9IHRoaXMucXVhZHJpbGxpb25zKG51bSk7XHJcbiAgICAgICAgaWYgKG51bSA9PT0gJycpIHtcclxuICAgICAgICAgICAgbnVtID0gJ251bGxlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxhbmcgPT09ICdsdicpIHtcclxuICAgICAgICBpZiAoKG9yaWcubGVuZ3RoID4gMSAmJiBvcmlnW29yaWcubGVuZ3RoLTFdID09PSBcIjFcIiAmJiBvcmlnW29yaWcubGVuZ3RoLTJdICE9PSBcIjFcIikgfHwgb3JpZyA9PT0gXCIxXCIpIHtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZXVyW2V1ci5sZW5ndGgtMV0gIT0gXCJvXCIgJiYgZXVyW2V1ci5sZW5ndGgtMV0gIT0gXCJlXCIpIHtcclxuICAgICAgICAgICAgICAgIGV1ciA9IGV1ci5zdWJzdHJpbmcoMCwgZXVyLmxlbmd0aCAtIDEpICsgJ2knO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldXJbZXVyLmxlbmd0aC0yXSA9PT0gXCJpXCIpIHtcclxuICAgICAgICAgICAgICAgIGV1ciA9IGV1ci5zdWJzdHJpbmcoMCwgZXVyLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudW0gKyAnICcgKyBldXIudG9Mb3dlckNhc2UoKSArIGNlbnRpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS5nZXRGdWxsID0gZnVuY3Rpb24gKHZhbHV0YSwgbGFuZywgbnVtKSB7XHJcbiAgICB2YXIgZWRlbiA9IHtcclxuICAgIH07XHJcbiAgICB2YXIgc20gPSB7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsYW5nID09PSAnZW4nKSB7XHJcbiAgICAgICAgZWRlbiA9IHRoaXMudmFsc0VuO1xyXG4gICAgICAgIHNtID0gdGhpcy5zbUVuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlZGVuID0gdGhpcy52YWxzO1xyXG4gICAgICAgIHNtID0gdGhpcy5zbUx2O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgc21yZXMgPSAnKDEvMTAwKSAnICsgdmFsdXRhLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzbSwgdmFsdXRhKSkge1xyXG4gICAgICAgIHNtcmVzID0gc21bdmFsdXRhXTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVzID0gdGhpcy5nZXRSZXN1bHQobnVtLCBzbXJlcywgZWRlblt2YWx1dGFdLCBsYW5nKTtcclxuICAgIHJlcyA9IHJlcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlcy5zbGljZSgxKTtcclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdW1Ub1dvcmRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9