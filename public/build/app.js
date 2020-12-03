(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _numtowords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numtowords */ "./assets/js/numtowords.js");




var numtowords = new _numtowords__WEBPACK_IMPORTED_MODULE_3__["default"]();

function updateAll() {
  var currency = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#valuta").val();
  var lang = jquery__WEBPACK_IMPORTED_MODULE_2___default()('input[name="lang"]:checked').val();
  var num = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#c").val();
  var res = numtowords.getFull(currency, lang, num);
  jquery__WEBPACK_IMPORTED_MODULE_2___default()("#res").html(res);
}

function copy() {
  navigator.clipboard.writeText(jquery__WEBPACK_IMPORTED_MODULE_2___default()("#res").html());
  jquery__WEBPACK_IMPORTED_MODULE_2___default()("#alrt").fadeIn();
  setTimeout(function () {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()("#alrt").fadeOut();
  }, 1000);
}

function showHelp() {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()("#help").fadeIn();
  jquery__WEBPACK_IMPORTED_MODULE_2___default()("#help-btn").hide();
}

jquery__WEBPACK_IMPORTED_MODULE_2___default()("#c").on('keyup', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_2___default()("#c").on('change', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_2___default()("#c").on('click', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_2___default()("#c").on('paste', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_2___default()("#valuta").on('change', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_2___default()('input[type=radio][name=lang]').on('change', updateAll);
jquery__WEBPACK_IMPORTED_MODULE_2___default()("#copy-btn").on('click', copy);
jquery__WEBPACK_IMPORTED_MODULE_2___default()("#help-btn").on('click', showHelp);
var sel = '';
var vals = numtowords.getVals();

for (var key in vals) {
  var vala = vals[key].charAt(0).toUpperCase() + vals[key].slice(1);
  sel = sel + '<option value="' + key + '">' + key.toUpperCase() + ' ' + vala + '</option>';
}

;
jquery__WEBPACK_IMPORTED_MODULE_2___default()("#valuta").html(sel);

/***/ }),

/***/ "./assets/js/numtowords.js":
/*!*********************************!*\
  !*** ./assets/js/numtowords.js ***!
  \*********************************/
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

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9udW10b3dvcmRzLmpzIl0sIm5hbWVzIjpbIm51bXRvd29yZHMiLCJOdW1Ub1dvcmRzIiwidXBkYXRlQWxsIiwiY3VycmVuY3kiLCIkIiwidmFsIiwibGFuZyIsIm51bSIsInJlcyIsImdldEZ1bGwiLCJodG1sIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImZhZGVJbiIsInNldFRpbWVvdXQiLCJmYWRlT3V0Iiwic2hvd0hlbHAiLCJoaWRlIiwib24iLCJzZWwiLCJ2YWxzIiwiZ2V0VmFscyIsImtleSIsInZhbGEiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidHJhbnNsYXRvciIsIlQyVyIsInNtTHYiLCJ2YWxzRW4iLCJzbUVuIiwicHJvdG90eXBlIiwidW5pdHMiLCJudW1lcmljVW5pdCIsInVuaXROYW1lcyIsInRlZW5zIiwidGVlbk5hbWVzIiwidGVubmVycyIsIm51bWVyaWNUZW4iLCJ0ZW5uZXJOYW1lcyIsImh1bmRyZWRzIiwibnVtZXJpY0h1bmRyZWQiLCJnZW5lcmljQ2FsbGVyIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJjYWxsIiwiYXJndW1lbnRzIiwic2hpZnQiLCJhcHBseSIsInVuaSIsImxlbiIsInYxIiwidm0iLCJuZm0iLCJtaWxpb25pIiwic3Vic3RyaW5nIiwidGhvdXNhbmRzY2kiLCJtaWxqV29yZCIsInRob3VzYW5kcyIsIm1pbGxpb25zIiwiYmlsbGlvbnMiLCJ0cmlsbGlvbnMiLCJxdWFkcmlsbGlvbnMiLCJnZXRSZXN1bHQiLCJjZW50IiwiZXVyIiwicG9pbnQiLCJsYXN0SW5kZXhPZiIsImNvbWEiLCJwb2ludENvdW50Iiwic3BsaXQiLCJsZW5ndGgiLCJjb21hQ291bnQiLCJzZXAiLCJ1biIsImNvbWF0cyIsImNlbnRpIiwicmVwbGFjZSIsImNlbnRpMSIsImNlbnRpMiIsIm9yaWciLCJ0b1dvcmRzIiwiTnVtYmVyIiwiZSIsInJlcGVhdCIsInRvTG93ZXJDYXNlIiwidmFsdXRhIiwiZWRlbiIsInNtIiwic21yZXMiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsVUFBVSxHQUFHLElBQUlDLG1EQUFKLEVBQWpCOztBQUVBLFNBQVNDLFNBQVQsR0FBcUI7QUFDakIsTUFBSUMsUUFBUSxHQUFHQyw2Q0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxHQUFiLEVBQWY7QUFDQSxNQUFJQyxJQUFJLEdBQUdGLDZDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ0MsR0FBaEMsRUFBWDtBQUNBLE1BQUlFLEdBQUcsR0FBR0gsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUMsR0FBUixFQUFWO0FBQ0EsTUFBSUcsR0FBRyxHQUFHUixVQUFVLENBQUNTLE9BQVgsQ0FBbUJOLFFBQW5CLEVBQTZCRyxJQUE3QixFQUFtQ0MsR0FBbkMsQ0FBVjtBQUNBSCwrQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVTSxJQUFWLENBQWVGLEdBQWY7QUFDSDs7QUFFRCxTQUFTRyxJQUFULEdBQWdCO0FBQ1pDLFdBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJWLDZDQUFDLENBQUMsTUFBRCxDQUFELENBQVVNLElBQVYsRUFBOUI7QUFDQU4sK0NBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV1csTUFBWDtBQUNBQyxZQUFVLENBQUMsWUFBVztBQUFDWixpREFBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXYSxPQUFYO0FBQXNCLEdBQW5DLEVBQXFDLElBQXJDLENBQVY7QUFDSDs7QUFFRCxTQUFTQyxRQUFULEdBQW9CO0FBQ2hCZCwrQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXVyxNQUFYO0FBQ0FYLCtDQUFDLENBQUMsV0FBRCxDQUFELENBQWVlLElBQWY7QUFDSDs7QUFFRGYsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdCLEVBQVIsQ0FB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LE1BQUlyRixJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNmb0YsUUFBSSxHQUFHLEtBQUsxRCxNQUFaO0FBQ0EyRCxNQUFFLEdBQUcsS0FBSzFELElBQVY7QUFDSCxHQUhELE1BR087QUFDSHlELFFBQUksR0FBRyxLQUFLcEUsSUFBWjtBQUNBcUUsTUFBRSxHQUFHLEtBQUs1RCxJQUFWO0FBQ0g7O0FBR0QsTUFBSTZELEtBQUssR0FBRyxhQUFhSCxNQUFNLENBQUM5RCxXQUFQLEVBQXpCOztBQUNBLE1BQUlrRSxjQUFjLENBQUM3QyxJQUFmLENBQW9CMkMsRUFBcEIsRUFBd0JGLE1BQXhCLENBQUosRUFBcUM7QUFDakNHLFNBQUssR0FBR0QsRUFBRSxDQUFDRixNQUFELENBQVY7QUFDSDs7QUFFRCxNQUFJakYsR0FBRyxHQUFHLEtBQUswRCxTQUFMLENBQWUzRCxHQUFmLEVBQW9CcUYsS0FBcEIsRUFBMkJGLElBQUksQ0FBQ0QsTUFBRCxDQUEvQixFQUF5Q25GLElBQXpDLENBQVY7QUFDQUUsS0FBRyxHQUFHQSxHQUFHLENBQUNrQixNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEtBQThCbkIsR0FBRyxDQUFDb0IsS0FBSixDQUFVLENBQVYsQ0FBcEM7QUFFQSxTQUFPcEIsR0FBUDtBQUNILENBeEJEOztBQTBCZVAseUVBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBOdW1Ub1dvcmRzIGZyb20gXCIuL251bXRvd29yZHNcIjtcclxuXHJcbnZhciBudW10b3dvcmRzID0gbmV3IE51bVRvV29yZHMoKTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUFsbCgpIHtcclxuICAgIHZhciBjdXJyZW5jeSA9ICQoXCIjdmFsdXRhXCIpLnZhbCgpO1xyXG4gICAgdmFyIGxhbmcgPSAkKCdpbnB1dFtuYW1lPVwibGFuZ1wiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICB2YXIgbnVtID0gJChcIiNjXCIpLnZhbCgpO1xyXG4gICAgdmFyIHJlcyA9IG51bXRvd29yZHMuZ2V0RnVsbChjdXJyZW5jeSwgbGFuZywgbnVtKTtcclxuICAgICQoXCIjcmVzXCIpLmh0bWwocmVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weSgpIHtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCQoXCIjcmVzXCIpLmh0bWwoKSk7XHJcbiAgICAkKFwiI2FscnRcIikuZmFkZUluKCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyQoXCIjYWxydFwiKS5mYWRlT3V0KCk7fSwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dIZWxwKCkge1xyXG4gICAgJChcIiNoZWxwXCIpLmZhZGVJbigpO1xyXG4gICAgJChcIiNoZWxwLWJ0blwiKS5oaWRlKCk7XHJcbn1cclxuXHJcbiQoXCIjY1wiKS5vbigna2V5dXAnLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoXCIjY1wiKS5vbignY2xpY2snLCB1cGRhdGVBbGwpO1xyXG4kKFwiI2NcIikub24oJ3Bhc3RlJywgdXBkYXRlQWxsKTtcclxuJChcIiN2YWx1dGFcIikub24oJ2NoYW5nZScsIHVwZGF0ZUFsbCk7XHJcbiQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9bGFuZ10nKS5vbignY2hhbmdlJywgdXBkYXRlQWxsKTtcclxuJChcIiNjb3B5LWJ0blwiKS5vbignY2xpY2snLCBjb3B5KTtcclxuJChcIiNoZWxwLWJ0blwiKS5vbignY2xpY2snLCBzaG93SGVscCk7XHJcblxyXG52YXIgc2VsID0gJyc7XHJcbnZhciB2YWxzID0gbnVtdG93b3Jkcy5nZXRWYWxzKCk7XHJcbmZvciAodmFyIGtleSBpbiB2YWxzKSB7XHJcbiAgICB2YXIgdmFsYSA9IHZhbHNba2V5XS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHNba2V5XS5zbGljZSgxKTtcclxuICAgIHNlbCA9IHNlbCArICc8b3B0aW9uIHZhbHVlPVwiJytrZXkrJ1wiPicra2V5LnRvVXBwZXJDYXNlKCkrJyAnK3ZhbGErJzwvb3B0aW9uPic7XHJcbn07XHJcbiQoXCIjdmFsdXRhXCIpLmh0bWwoc2VsKTtcclxuIiwiaW1wb3J0IFQyVyBmcm9tIFwibnVtYmVyczJ3b3Jkc1wiO1xyXG5cclxudmFyIE51bVRvV29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0b3IgPSBuZXcgVDJXKFwiRU5fVVNcIik7XHJcblxyXG4gICAgdGhpcy52YWxzID0ge1xyXG4gICAgICAgIFwiZXVyXCI6IFwiZXVyb1wiLFxyXG4gICAgICAgIFwidXNkXCI6IFwiZG9sxIFyc1wiLFxyXG4gICAgICAgIFwiZ2JwXCI6IFwiTGllbGJyaXTEgW5pamFzIG3EgXJjacWGYVwiLFxyXG4gICAgICAgIFwicnViXCI6IFwiS3JpZXZpamFzIHJ1Ymxpc1wiLFxyXG4gICAgICAgIFwicGxuXCI6IFwiUG9saWphcyB6bG90c1wiLFxyXG4gICAgICAgIFwia3p0XCI6IFwiS2F6YWhzdMSBbmFzIHRlbmdlXCIsXHJcbiAgICAgICAgXCJjaGZcIjogXCLFoHZlaWNlcyBmcmFua3NcIixcclxuICAgICAgICBcImFlZFwiOiBcIkFwdmllbm90byBBcsSBYnUgRW1pcsSBdHUgZGlyaGFtc1wiLFxyXG4gICAgICAgIFwiZGtrXCI6IFwiRMSBbmlqYXMga3JvbmFcIixcclxuICAgICAgICBcInNla1wiOiBcIlp2aWVkcmlqYXMga3JvbmFcIixcclxuICAgICAgICBcIm5va1wiOiBcIk5vcnbEk8SjaWphcyBrcm9uYVwiLFxyXG4gICAgICAgIFwiYmduXCI6IFwiQnVsZ8SBcmlqYXMgbGV2YVwiLFxyXG4gICAgICAgIFwiaHVmXCI6IFwiVW5nxIFyaWphcyBmb3JpbnRzXCIsXHJcbiAgICAgICAgXCJ0cnlcIjogXCJUdXJjaWphcyBsaXJhXCIsXHJcbiAgICAgICAgXCJhbGxcIjogXCJBbGLEgW5pamFzIGxla3NcIixcclxuICAgICAgICBcImhya1wiOiBcIkhvcnbEgXRpamFzIGt1bmFcIixcclxuICAgICAgICBcImN6a1wiOiBcIsSMZWhpamFzIGtyb25hXCIsXHJcbiAgICAgICAgXCJnZWxcIjogXCJHcnV6aWphcyBsYXJpXCIsXHJcbiAgICAgICAgXCJsa3JcIjogXCLFoHJpbGFua2FzIHLFq3BpamFcIixcclxuICAgICAgICBcInRuZFwiOiBcIlR1bmlzaWphcyBkaW7EgXJzXCIsXHJcbiAgICAgICAgXCJpbHNcIjogXCJJenJhxJNsYXMgxaFla2Vsc1wiLFxyXG4gICAgICAgIFwiam9kXCI6IFwiSm9yZMSBbmlqYXMgZGluxIFyc1wiLFxyXG4gICAgICAgIFwiYnluXCI6IFwiQmFsdGtyaWV2aWphcyBydWJsaXNcIixcclxuICAgICAgICBcImVncFwiOiBcIsSSxKNpcHRlcyBtxIFyY2nFhmFcIixcclxuICAgICAgICBcInVhaFwiOiBcIlVrcmFpbmFzIGdyaXZuYVwiLFxyXG4gICAgICAgIFwiY255XCI6IFwixLbEq25hcyBqdWHFhmFcIixcclxuICAgICAgICBcInRoYlwiOiBcIlRhaXplbWVzIGJhdHNcIixcclxuICAgICAgICBcInZuZFwiOiBcIlZqZXRuYW1hcyBkb25nc1wiLFxyXG4gICAgICAgIFwicGhwXCI6IFwiRmlsaXDEq251IHBlc29cIixcclxuICAgICAgICBcIm1hZFwiOiBcIk1hcm9rYXMgZGlyaGFtc1wiLFxyXG4gICAgICAgIFwiYXVkXCI6IFwiQXVzdHLEgWxpamFzIGRvbMSBcnNcIixcclxuICAgICAgICBcImFyc1wiOiBcIkFyZ2VudMSrbmFzIHBlc29cIixcclxuICAgICAgICBcImpweVwiOiBcIkphcMSBbmFzIGrEk25hXCIsXHJcbiAgICAgICAgXCJpZHJcIjogXCJJbmRvbsSTemlqYXMgcsWrcGlqYVwiLFxyXG4gICAgICAgIFwiaXNrXCI6IFwiSXNsYW5kZXMga3JvbmFcIixcclxuICAgICAgICBcImFtZFwiOiBcIkFybcSTbmlqYXMgZHJhbXNcIixcclxuICAgICAgICBcInJvblwiOiBcIlJ1bcSBbmlqYXMgbGVqYVwiLFxyXG4gICAgICAgIFwic2dkXCI6IFwiU2luZ2FwxatyYXMgZG9sxIFyc1wiLFxyXG4gICAgICAgIFwic2JwXCI6IFwiU2tvdGlqYXMgbcSBcmNpxYZhXCIsXHJcbiAgICAgICAgXCJjYWRcIjogXCJLYW7EgWRhcyBkb2zEgXJzXCIsXHJcbiAgICAgICAgXCJicmxcIjogXCJCcmF6xKtsaWphcyByZcSBbHNcIixcclxuICAgICAgICBcInphclwiOiBcIkRpZW52aWTEgWZyaWthcyByZW5kc1wiLFxyXG4gICAgICAgIFwiaW5yXCI6IFwiSW5kaWphcyByxatwaWphXCIsXHJcbiAgICAgICAgXCJyc2RcIjogXCJTZXJiaWphcyBkaW7EgXJzXCIsXHJcbiAgICAgICAgXCJuemRcIjogXCJKYXVuesSTbGFuZGVzIGRvbMSBcnNcIixcclxuICAgICAgICBcIm15clwiOiBcIk1hbGFpemlqYXMgcmluZ2l0c1wiLFxyXG4gICAgICAgIFwibXVyXCI6IFwiTWF1csSrY2lqYXMgc2FsYXMgcsWrcGlqYVwiLFxyXG4gICAgICAgIFwiaGtkXCI6IFwiSG9ua29uZ2FzIGRvbMSBcnNcIixcclxuICAgICAgICBcImtyd1wiOiBcIkRpZW52aWRrb3JlamFzIHZvbmFcIixcclxuICAgICAgICBcIm14blwiOiBcIk1la3Npa2FzIHBlc29cIixcclxuICAgICAgICBcIm1rZFwiOiBcIk1hxLdlZG9uaWphcyBkZW7EgXJzXCIsXHJcbiAgICAgICAgXCJkb3BcIjogXCJEb21pbmlrxIFuYXMgcGVzb1wiLFxyXG4gICAgICAgIFwia2VzXCI6IFwiS2VuaWphcyDFoWlsacWGxaFcIixcclxuICAgICAgICBcImRlbVwiOiBcIlbEgWNpamFzIG1hcmthXCIsXHJcbiAgICAgICAgXCJlZWtcIjogXCJJZ2F1bmlqYXMga3JvbmFcIixcclxuICAgICAgICBcImx0bFwiOiBcIkxpZXR1dmFzIGxpdHNcIixcclxuICAgICAgICBcImx2bFwiOiBcIkxhdHZpamFzIGxhdHNcIixcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zbUx2ID0ge1xyXG4gICAgICAgICdldXInOiAnY2VudGknLFxyXG4gICAgICAgICd1c2QnOiAnY2VudGknLFxyXG4gICAgICAgICdnYnAnOiAncGVuaScsXHJcbiAgICAgICAgJ3J1Yic6ICdrYXBlaWvEgXMnLFxyXG4gICAgICAgICdwbG4nOiAnZ3JvxaFpJyxcclxuICAgICAgICAnbHZsJzogJ3NhbnRpbWknLFxyXG4gICAgICAgICdrenQnOiAndGlqxKtuaScsXHJcbiAgICAgICAgJ2NoZic6ICdyYXBlbmknLFxyXG4gICAgICAgICdhZWQnOiAnZmlsaScsXHJcbiAgICAgICAgJ2Rrayc6ICfEk3JpJyxcclxuICAgICAgICAnc2VrJzogJ8STcmknLFxyXG4gICAgICAgICdub2snOiAnxJNyaScsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudmFsc0VuID0ge1xyXG4gICAgICAgIFwiZXVyXCI6IFwiZXVyb1wiLFxyXG4gICAgICAgIFwidXNkXCI6IFwiZG9sbGFyXCIsXHJcbiAgICAgICAgXCJnYnBcIjogXCJicml0aXNoIHBvdW5kXCIsXHJcbiAgICAgICAgXCJydWJcIjogXCJydXNzaWFuIHJ1YmxlXCIsXHJcbiAgICAgICAgXCJwbG5cIjogXCJwb2xpc2ggemxvdHlcIixcclxuICAgICAgICBcImJnblwiOiBcImJ1bGdhcmlhbiBsZXZcIixcclxuICAgICAgICBcImh1ZlwiOiBcImh1bmdhcmlhbiBmb3JpbnRcIixcclxuICAgICAgICBcInRyeVwiOiBcInR1cmtpc2ggbGlyYVwiLFxyXG4gICAgICAgIFwiaHJrXCI6IFwiY3JvYXRpYW4ga3VuYVwiLFxyXG4gICAgICAgIFwiY3prXCI6IFwiY3plY2gga29ydW5hXCIsXHJcbiAgICAgICAgXCJnZWxcIjogXCJnZW9yZ2lhbiBsYXJpXCIsXHJcbiAgICAgICAgXCJhbGxcIjogXCJhbGJhbmlhbiBsZWtcIixcclxuICAgICAgICBcImxrclwiOiBcInNyaSBsYW5rYW4gcnVwZWVcIixcclxuICAgICAgICBcInNla1wiOiBcInN3ZWRpc2gga3JvbmFcIixcclxuICAgICAgICBcInRoYlwiOiBcInRoYWkgYmFodFwiLFxyXG4gICAgICAgIFwidG5kXCI6IFwidHVuaXNpYW4gZGluYXJcIixcclxuICAgICAgICBcImlsc1wiOiBcImlzcmFlbGkgc2hlcWVsXCIsXHJcbiAgICAgICAgXCJjaGZcIjogXCJzd2lzcyBmcmFuY1wiLFxyXG4gICAgICAgIFwibm9rXCI6IFwibm9yd2VnaWFuIGtyb25lXCIsXHJcbiAgICAgICAgXCJka2tcIjogXCJkYW5pc2gga3JvbmVcIixcclxuICAgICAgICBcImFlZFwiOiBcInVuaXRlZCBhcmFiIGVtaXJhdGVzIGRpcmhhbVwiLFxyXG4gICAgICAgIFwiY2FkXCI6IFwiY2FuYWRpYW4gZG9sbGFyXCIsXHJcbiAgICAgICAgXCJieW5cIjogXCJiZWxhcnVzaWFuIG5ldyBydWJsZVwiLFxyXG4gICAgICAgIFwiYXVkXCI6IFwiYXVzdHJhbGlhbiBkb2xsYXJcIixcclxuICAgICAgICBcImpweVwiOiBcImphcGFuZXNlIHllblwiLFxyXG4gICAgICAgIFwiY255XCI6IFwiY2hpbmVzZSB5dWFuXCIsXHJcbiAgICAgICAgXCJ1YWhcIjogXCJ1a3JhaW5pYW4gaHJ5dm5pYVwiLFxyXG4gICAgICAgIFwiaXNrXCI6IFwiaWNlbGFuZCBrcm9uYVwiLFxyXG4gICAgICAgIFwibnpkXCI6IFwibmV3IHplYWxhbmQgZG9sbGFyXCIsXHJcbiAgICAgICAgXCJrcndcIjogXCJzb3V0aCBrb3JlYW4gd29uXCIsXHJcbiAgICAgICAgXCJyb25cIjogXCJyb21hbmlhbiBsZXVcIixcclxuICAgICAgICBcInNnZFwiOiBcInNpbmdhcG9yZSBkb2xsYXJcIixcclxuICAgICAgICBcImlkclwiOiBcImluZG9uZXNpYW4gcnVwaWFoXCIsXHJcbiAgICAgICAgXCJoa2RcIjogXCJob25nIGtvbmcgZG9sbGFyXCIsXHJcbiAgICAgICAgXCJzYnBcIjogXCJzY290dGlzaCBwb3VuZFwiLFxyXG4gICAgICAgIFwiemFyXCI6IFwic291dGggYWZyaWNhbiByYW5kXCIsXHJcbiAgICAgICAgXCJteG5cIjogXCJtZXhpY2FuIHBlc29cIixcclxuICAgICAgICBcIm1rZFwiOiBcIm1hY2Vkb25pYW4gZGluYXJcIixcclxuICAgICAgICBcImJybFwiOiBcImJyYXppbGlhbiByZWFsXCIsXHJcbiAgICAgICAgXCJlZ3BcIjogXCJlZ3lwdGlhbiBwb3VuZFwiLFxyXG4gICAgICAgIFwiYXJzXCI6IFwiYXJnZW50aW5lIHBlc29cIixcclxuICAgICAgICBcImtlc1wiOiBcImtlbnlhIHNoaWxsaW5nXCIsXHJcbiAgICAgICAgXCJteXJcIjogXCJtYWxheXNpYW4gcmluZ2dpdFwiLFxyXG4gICAgICAgIFwibXVyXCI6IFwibWF1cml0aWFuIHJ1cGVlXCIsXHJcbiAgICAgICAgXCJwaHBcIjogXCJwaGlsaXBwaW5lIHBlc29cIixcclxuICAgICAgICBcImluclwiOiBcImluZGlhbiBydXBlZVwiLFxyXG4gICAgICAgIFwia3p0XCI6IFwia2F6YWtoc3RhbiB0ZW5nZVwiLFxyXG4gICAgICAgIFwiYW1kXCI6IFwiYXJtZW5pYW4gZHJhbVwiLFxyXG4gICAgICAgIFwibWFkXCI6IFwibW9yb2NjYW4gZGlyaGFtXCIsXHJcbiAgICAgICAgXCJyc2RcIjogXCJzZXJiaWFuIGRpbmFyXCIsXHJcbiAgICAgICAgXCJ2bmRcIjogXCJ2aWV0bmFtZXNlIGRvbmdcIixcclxuICAgICAgICBcImRvcFwiOiBcImRvbWluaWNhbiBwZXNvXCIsXHJcbiAgICAgICAgXCJqb2RcIjogXCJqb3JkYW5pYW4gZGluYXJcIixcclxuICAgICAgICBcImx2bFwiOiBcImxhdHZpYW4gbGF0c1wiLFxyXG4gICAgICAgIFwibHRsXCI6IFwibGl0aHVhbmlhbiBsaXRhc1wiLFxyXG4gICAgICAgIFwiZWVrXCI6IFwiZXN0b25pYW4ga3Jvb25cIixcclxuICAgICAgICBcImRlbVwiOiBcImdlcm1hbiBtYXJrXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc21FbiA9IHtcclxuICAgICAgICAnZXVyJzogJ2NlbnRzJyxcclxuICAgICAgICAndXNkJzogJ2NlbnRzJyxcclxuICAgICAgICAnZ2JwJzogJ3BlbmNlJyxcclxuICAgICAgICAncnViJzogJ2tvcGVrcycsXHJcbiAgICAgICAgJ3Bsbic6ICdncm9zeicsXHJcbiAgICAgICAgJ2x2bCc6ICdzYW50aW1zJyxcclxuICAgICAgICAna3p0JzogJ3TEsXlucycsXHJcbiAgICAgICAgJ2NoZic6ICdyYXBwZW5zJyxcclxuICAgICAgICAnYWVkJzogJ2ZpbHMnLFxyXG4gICAgICAgICdka2snOiAnb3JlJyxcclxuICAgICAgICAnc2VrJzogJ29yZScsXHJcbiAgICAgICAgJ25vayc6ICdvcmUnLFxyXG4gICAgfTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuZ2V0VmFscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHM7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnVuaXRzID0gZnVuY3Rpb24gKG51bWVyaWNVbml0KSB7XHJcbiAgICBjb25zdCB1bml0TmFtZXMgPSB7XHJcbiAgICAgICAgXCIwXCI6IFwiXCIsXHJcbiAgICAgICAgXCIxXCI6IFwidmllbnNcIixcclxuICAgICAgICBcIjJcIjogXCJkaXZpXCIsXHJcbiAgICAgICAgXCIzXCI6IFwidHLEq3NcIixcclxuICAgICAgICBcIjRcIjogXCLEjWV0cmlcIixcclxuICAgICAgICBcIjVcIjogXCJwaWVjaVwiLFxyXG4gICAgICAgIFwiNlwiOiBcInNlxaFpXCIsXHJcbiAgICAgICAgXCI3XCI6IFwic2VwdGnFhmlcIixcclxuICAgICAgICBcIjhcIjogXCJhc3RvxYZpXCIsXHJcbiAgICAgICAgXCI5XCI6IFwiZGV2acWGaVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB1bml0TmFtZXNbbnVtZXJpY1VuaXRdO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS50ZWVucyA9IGZ1bmN0aW9uICh0ZWVucykge1xyXG4gICAgdmFyIHRlZW5OYW1lcyA9IHtcclxuICAgICAgICBcIjEwXCI6IFwiZGVzbWl0XCIsXHJcbiAgICAgICAgXCIxMVwiOiBcInZpZW5wYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxMlwiOiBcImRpdnBhZHNtaXRcIixcclxuICAgICAgICBcIjEzXCI6IFwidHLEq3NwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxNFwiOiBcIsSNZXRycGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTVcIjogXCJwaWVjcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTZcIjogXCJzZcWhcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMTdcIjogXCJzZXB0acWGcGFkc21pdFwiLFxyXG4gICAgICAgIFwiMThcIjogXCJhc3RvxYZwYWRzbWl0XCIsXHJcbiAgICAgICAgXCIxOVwiOiBcImRldmnFhnBhZHNtaXRcIlxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGVlbk5hbWVzW3RlZW5zXTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUudGVubmVycyA9IGZ1bmN0aW9uIChudW1lcmljVGVuKSB7XHJcbiAgICBpZiAobnVtZXJpY1RlblswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51bml0cyhudW1lcmljVGVuWzFdKTtcclxuICAgIH1cclxuICAgIGlmIChudW1lcmljVGVuWzBdID09PSBcIjFcIikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlZW5zKG51bWVyaWNUZW4pO1xyXG4gICAgfVxyXG4gICAgdmFyIHRlbm5lck5hbWVzID0ge1xyXG4gICAgICAgIFwiMlwiOiBcImRpdmRlc21pdFwiLFxyXG4gICAgICAgIFwiM1wiOiBcInRyxKtzZGVzbWl0XCIsXHJcbiAgICAgICAgXCI0XCI6IFwixI1ldHJkZXNtaXRcIixcclxuICAgICAgICBcIjVcIjogXCJwaWVjZGVzbWl0XCIsXHJcbiAgICAgICAgXCI2XCI6IFwic2XFoWRlc21pdFwiLFxyXG4gICAgICAgIFwiN1wiOiBcInNlcHRpxYZkZXNtaXRcIixcclxuICAgICAgICBcIjhcIjogXCJhc3RvxYZkZXNtaXRcIixcclxuICAgICAgICBcIjlcIjogXCJkZXZpxYZkZXNtaXRcIlxyXG4gICAgfTtcclxuICAgIHJldHVybiB0ZW5uZXJOYW1lc1tudW1lcmljVGVuWzBdXSArIFwiIFwiICsgdGhpcy51bml0cyhudW1lcmljVGVuWzFdKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUuaHVuZHJlZHMgPSBmdW5jdGlvbiAobnVtZXJpY0h1bmRyZWQpIHtcclxuICAgIGlmIChudW1lcmljSHVuZHJlZFswXSA9PT0gXCIwXCIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWVyaWNIdW5kcmVkWzBdID09PSBcIjFcIikge1xyXG4gICAgICAgIHJldHVybiAndmllbnMgc2ltdHMnICsgJyAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudW5pdHMobnVtZXJpY0h1bmRyZWRbMF0pICsgJyBzaW10aSAnICsgdGhpcy50ZW5uZXJzKG51bWVyaWNIdW5kcmVkWzFdICsgbnVtZXJpY0h1bmRyZWRbMl0pO1xyXG59XHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdlbmVyaWNDYWxsZXIgPSBmdW5jdGlvbihtZXRob2ROYW1lKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTsgIC8vY29udmVydHMgYXJndW1lbnRzIHRvIGFuIGFycmF5XHJcbiAgICBhcmdzLnNoaWZ0KCk7IC8vcmVtb3ZlIHRoZSBtZXRob2QgbmFtZVxyXG4gICAgcmV0dXJuIHRoaXNbbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJncyk7ICAvL2NhbGwgeW91ciBtZXRob2Qgd2l0aCB0aGUgY3VycmVudCBzY29wZSBhbmQgcGFzcyB0aGUgYXJndW1lbnRzXHJcbn07XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS51bmkgPSBmdW5jdGlvbiAobnVtLCBsZW4sIHYxLCB2bSwgbmZtKSB7XHJcbiAgICB2YXIgbWlsaW9uaSA9IG51bS5zdWJzdHJpbmcoMCwgMyk7XHJcbiAgICB2YXIgdGhvdXNhbmRzY2kgPSBudW0uc3Vic3RyaW5nKDMsIGxlbik7XHJcblxyXG4gICAgaWYgKG1pbGlvbmkgPT09ICcwMDAnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJpY0NhbGxlcihuZm0sdGhvdXNhbmRzY2kpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtaWxqV29yZCA9IHZtO1xyXG4gICAgaWYgKG1pbGlvbmlbMl0gPT09IFwiMVwiICYmIG1pbGlvbmlbMV0gIT09IFwiMVwiKSB7XHJcbiAgICAgICAgbWlsaldvcmQgPSB2MVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHVuZHJlZHMobWlsaW9uaSkgKyAnICcrbWlsaldvcmQrJyAnICsgdGhpcy5nZW5lcmljQ2FsbGVyKG5mbSx0aG91c2FuZHNjaSk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnRob3VzYW5kcyA9IGZ1bmN0aW9uIChudW0pIHtcclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDYsICd0xatrc3RvdGlzJywgJ3TFq2tzdG/FoWknLCAnaHVuZHJlZHMnKTtcclxufVxyXG5cclxuTnVtVG9Xb3Jkcy5wcm90b3R5cGUubWlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCA5LCAnbWlsam9ucycsICdtaWxqb25pJywgJ3Rob3VzYW5kcycpXHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmJpbGxpb25zID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgcmV0dXJuIHRoaXMudW5pKG51bSwgMTIsICdtaWxqYXJkcycsICdtaWxqYXJkaScsICdtaWxsaW9ucycpO1xyXG59XHJcblxyXG5OdW1Ub1dvcmRzLnByb3RvdHlwZS50cmlsbGlvbnMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICByZXR1cm4gdGhpcy51bmkobnVtLCAxNSwgJ3RyaWxqb25zJywgJ3RyaWxqb25pJywgJ2JpbGxpb25zJyk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLnF1YWRyaWxsaW9ucyA9IGZ1bmN0aW9uIChudW0pIHtcclxuICAgIHJldHVybiB0aGlzLnVuaShudW0sIDE4LCAna3ZhZHJpbGpvbnMnLCAna3ZhZHJpbGpvbmknLCAndHJpbGxpb25zJyk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldFJlc3VsdCA9IGZ1bmN0aW9uIChudW0sIGNlbnQsIGV1ciwgbGFuZykge1xyXG4gICAgdmFyIHBvaW50ID0gbnVtLmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICB2YXIgY29tYSA9IG51bS5sYXN0SW5kZXhPZignLCcpO1xyXG4gICAgdmFyIHBvaW50Q291bnQgPSAobnVtLnNwbGl0KFwiLlwiKS5sZW5ndGggLSAxKVxyXG4gICAgdmFyIGNvbWFDb3VudCA9IChudW0uc3BsaXQoXCIsXCIpLmxlbmd0aCAtIDEpXHJcbiAgICB2YXIgc2VwID0gLTE7XHJcbiAgICBpZiAocG9pbnQgIT09IC0xICYmIHBvaW50ID4gY29tYSAmJiBwb2ludENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIHNlcCA9IHBvaW50O1xyXG4gICAgfSBlbHNlIGlmIChjb21hICE9PSAtMSAmJiBjb21hID4gcG9pbnQgJiYgY29tYUNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIHNlcCA9IGNvbWE7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxlbmd0aCA9IG51bS5sZW5ndGg7XHJcbiAgICB2YXIgdW4gPSAndW4nXHJcbiAgICB2YXIgY29tYXRzID0gJ2tvbWF0cyc7XHJcbiAgICBpZiAobGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIHVuID0gJ2FuZCdcclxuICAgICAgICBjb21hdHMgPSAnY29tYSc7XHJcbiAgICB9XHJcbiAgICB2YXIgY2VudGkgPSAnICcrdW4rJyAwMCAnICsgY2VudDtcclxuICAgIGlmIChzZXAgIT09IC0xKSB7XHJcbiAgICAgICAgY2VudGkgPSBudW0uc3Vic3RyaW5nKHNlcCsxLCBsZW5ndGgpO1xyXG4gICAgICAgIGNlbnRpID0gY2VudGkucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcbiAgICAgICAgbnVtID0gbnVtLnN1YnN0cmluZygwLCBzZXApO1xyXG4gICAgICAgIGlmIChjZW50aS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2VudGkgPSAnICcrdW4rJyAwMCAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aSsnMCAnICsgY2VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlbnRpLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aSsnICcgKyBjZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjZW50aTEgPSBjZW50aS5zdWJzdHJpbmcoMCwyKTtcclxuICAgICAgICAgICAgdmFyIGNlbnRpMiA9IGNlbnRpLnN1YnN0cmluZygyLGNlbnRpLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNlbnRpID0gJyAnK3VuKycgJytjZW50aTEgKyAnLCAnICsgY29tYXRzICsnLCAnKyBjZW50aTIrJyAnICsgY2VudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9yaWcgPSBudW07XHJcbiAgICBudW0gPSBudW0ucmVwbGFjZSgvW14wLTldL2csIFwiXCIpXHJcblxyXG4gICAgaWYgKGxhbmcgPT09ICdlbicpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBudW0gPSB0aGlzLnRyYW5zbGF0b3IudG9Xb3JkcyhOdW1iZXIobnVtKSk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIG51bSA9ICdBIGxvdCBvZic7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBudW0gPSAnMCcucmVwZWF0KDE4IC0gbnVtLmxlbmd0aCkgKyBudW07XHJcbiAgICAgICAgbnVtID0gdGhpcy5xdWFkcmlsbGlvbnMobnVtKTtcclxuICAgICAgICBpZiAobnVtID09PSAnJykge1xyXG4gICAgICAgICAgICBudW0gPSAnbnVsbGUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobGFuZyA9PT0gJ2x2Jykge1xyXG4gICAgICAgIGlmICgob3JpZy5sZW5ndGggPiAxICYmIG9yaWdbb3JpZy5sZW5ndGgtMV0gPT09IFwiMVwiICYmIG9yaWdbb3JpZy5sZW5ndGgtMl0gIT09IFwiMVwiKSB8fCBvcmlnID09PSBcIjFcIikge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChldXJbZXVyLmxlbmd0aC0xXSAhPSBcIm9cIiAmJiBldXJbZXVyLmxlbmd0aC0xXSAhPSBcImVcIikge1xyXG4gICAgICAgICAgICAgICAgZXVyID0gZXVyLnN1YnN0cmluZygwLCBldXIubGVuZ3RoIC0gMSkgKyAnaSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV1cltldXIubGVuZ3RoLTJdID09PSBcImlcIikge1xyXG4gICAgICAgICAgICAgICAgZXVyID0gZXVyLnN1YnN0cmluZygwLCBldXIubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bSArICcgJyArIGV1ci50b0xvd2VyQ2FzZSgpICsgY2VudGk7XHJcbn1cclxuXHJcbk51bVRvV29yZHMucHJvdG90eXBlLmdldEZ1bGwgPSBmdW5jdGlvbiAodmFsdXRhLCBsYW5nLCBudW0pIHtcclxuICAgIHZhciBlZGVuID0ge1xyXG4gICAgfTtcclxuICAgIHZhciBzbSA9IHtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGxhbmcgPT09ICdlbicpIHtcclxuICAgICAgICBlZGVuID0gdGhpcy52YWxzRW47XHJcbiAgICAgICAgc20gPSB0aGlzLnNtRW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVkZW4gPSB0aGlzLnZhbHM7XHJcbiAgICAgICAgc20gPSB0aGlzLnNtTHY7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBzbXJlcyA9ICcoMS8xMDApICcgKyB2YWx1dGEudG9VcHBlckNhc2UoKTtcclxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNtLCB2YWx1dGEpKSB7XHJcbiAgICAgICAgc21yZXMgPSBzbVt2YWx1dGFdO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZXMgPSB0aGlzLmdldFJlc3VsdChudW0sIHNtcmVzLCBlZGVuW3ZhbHV0YV0sIGxhbmcpO1xyXG4gICAgcmVzID0gcmVzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzLnNsaWNlKDEpO1xyXG5cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51bVRvV29yZHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=