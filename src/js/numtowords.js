import T2W from "numbers2words";
import WordTranslations from "./translations";

var NumToWords = function () {
    this.translator = new T2W("EN_US");
    this.translations = new WordTranslations();
    this.lang = 'lv';
}

NumToWords.prototype.getVals = function () {
    return this.translations.currencyLv;
}

NumToWords.prototype.units = function (numericUnit) {
    if (this.lang === 'ru') {
        return this.translations.unitNamesRu[numericUnit];
    }

    return this.translations.unitNamesLv[numericUnit];
}

NumToWords.prototype.teens = function (teens) {
    if (this.lang === 'ru') {
        return this.translations.teenNamesRu[teens];
    }

    return this.translations.teenNamesLv[teens];
}

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
}

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
}
NumToWords.prototype.genericCaller = function(methodName) {
    var args = [].slice.call(arguments);  //converts arguments to an array
    args.shift(); //remove the method name
    return this[methodName].apply(this, args);  //call your method with the current scope and pass the arguments
};

NumToWords.prototype.uni = function (num, len, v1, vm, nfm) {
    var milioni = num.substring(0, 3);
    var thousandsci = num.substring(3, len);

    if (milioni === '000') {
        return this.genericCaller(nfm,thousandsci);
    }

    var miljWord = vm;
    if (milioni[2] === "1" && milioni[1] !== "1") {
        miljWord = v1
    }
    return this.hundreds(milioni) + ' '+miljWord+' ' + this.genericCaller(nfm,thousandsci);
}

NumToWords.prototype.thousands = function (num) {
    if (this.lang === 'ru') {
        var vl = 'тысяча';
        var vm = 'тысяч';
    } else {
        var vl = 'tūkstotis';
        var vm = 'tūkstoši';
    }
    return this.uni(num, 6, vl, vm, 'hundreds');
}

NumToWords.prototype.millions = function (num) {
    if (this.lang === 'ru') {
        var vl = 'миллион';
        var vm = 'миллионов';
    } else {
        var vl = 'miljons';
        var vm = 'miljoni';
    }
    return this.uni(num, 9, vl, vm, 'thousands')
}

NumToWords.prototype.billions = function (num) {
    if (this.lang === 'ru') {
        var vl = 'миллиард';
        var vm = 'миллиардов';
    } else {
        var vl = 'miljards';
        var vm = 'miljardi';
    }
    return this.uni(num, 12, vl, vm, 'millions');
}

NumToWords.prototype.trillions = function (num) {
    if (this.lang === 'ru') {
        var vl = 'триллион';
        var vm = 'тоиллионов';
    } else {
        var vl = 'triljons';
        var vm = 'triljoni';
    }
    return this.uni(num, 15, vl, vm, 'billions');
}

NumToWords.prototype.quadrillions = function (num) {
    if (this.lang === 'ru') {
        var vl = 'квадриллион';
        var vm = 'квадриллионов';
    } else {
        var vl = 'kvadriljons';
        var vm = 'kvadriljoni';
    }
    return this.uni(num, 18, vl, vm, 'trillions').trim();
}

NumToWords.prototype.getResult = function (num, cent, eur) {
    var point = num.lastIndexOf('.');
    var coma = num.lastIndexOf(',');
    var pointCount = (num.split(".").length - 1)
    var comaCount = (num.split(",").length - 1)
    var sep = -1;
    if (point !== -1 && point > coma && pointCount === 1) {
        var sep = point;
    } else if (coma !== -1 && coma > point && comaCount === 1) {
        var sep = coma;
    }

    var length = num.length;
    var un = 'un'
    var comats = 'komats';
    if (this.lang === 'en') {
        un = 'and'
        comats = 'coma';
    } else if (this.lang === 'ru') {
        un = 'и'
        comats = 'кома';
    }
    var centi = ' '+un+' 00 ' + cent;
    if (sep !== -1) {
        centi = num.substring(sep+1, length);
        centi = centi.replace(/[^0-9]/g, "")
        num = num.substring(0, sep);
        if (centi.length === 0) {
            centi = ' '+un+' 00 ' + cent;
        } else if (centi.length == 1) {
            centi = ' '+un+' '+centi+'0 ' + cent;
        } else if (centi.length == 2) {
            centi = ' '+un+' '+centi+' ' + cent;
        } else {
            var centi1 = centi.substring(0,2);
            var centi2 = centi.substring(2,centi.length);
            centi = ' '+un+' '+centi1 + ', ' + comats +', '+ centi2+' ' + cent;
        }
    }

    var orig = num;
    num = num.replace(/[^0-9]/g, "")

    if (this.lang === 'en') {
        try {
            num = this.translator.toWords(Number(num));
        } catch(e) {
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
        if ((orig.length > 1 && orig[orig.length-1] === "1" && orig[orig.length-2] !== "1") || orig === "1") {
        } else {
            if (eur[eur.length-1] != "o" && eur[eur.length-1] != "e") {
                eur = eur.substring(0, eur.length - 1) + 'i';
            }
            if (eur[eur.length-2] === "i") {
                eur = eur.substring(0, eur.length - 1);
            }
            if (eur[eur.length-1] === "р") {
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
            eur = this.endingsRu(orig, elements[0]) + ' ' + elements[1] + ' ' + this.endingsRu(orig, elements[2]);
        }
    }

    return num + ' ' + eur.toLowerCase() + centi;
}
NumToWords.prototype.endingsRu = function (number, currency) {
    if ((number.length > 1 && number[number.length-1] === "1" && number[number.length-2] !== "1") || number === "1") {
    } else if ((number.length > 1 && (number[number.length-1] === "2" || number[number.length-1] === "3" || number[number.length-1] === "4") && number[number.length-2] !== "1") || number === "1") {
        if (currency[currency.length-1] === "р" || currency[currency.length-1] === "т" || currency[currency.length-1] === "к") {
            currency = currency + 'а';
        } else
        if (currency[currency.length-1] === "ь") {
            currency = currency.substring(0, currency.length - 1) + 'я';
        } else
        if (currency[currency.length-1] === "й" && currency[currency.length-2] === "и") {
            currency = currency.substring(0, currency.length - 2) + 'их';
        } else
        if (currency[currency.length-1] === "й" && currency[currency.length-2] === "ы") {
            currency = currency.substring(0, currency.length - 2) + 'ых';
        } else
        if (currency[currency.length-1] === "я" && currency[currency.length-2] === "а") {
            currency = currency.substring(0, currency.length - 2) + 'ие';
        } else
        if (currency[currency.length-1] === "а") {
            currency = currency.substring(0, currency.length - 1) + 'ы';
        }
    } else {
        if (currency[currency.length-1] === "р" || currency[currency.length-1] === "т" || currency[currency.length-1] === "к") {
            currency = currency + 'ов';
        } else
        if (currency[currency.length-1] === "ь") {
            currency = currency + 'ей';
        } else
        if (currency[currency.length-1] === "й" && currency[currency.length-2] === "и") {
            currency = currency.substring(0, currency.length - 2) + 'их';
        } else
        if (currency[currency.length-1] === "й" && currency[currency.length-2] === "ы") {
            currency = currency.substring(0, currency.length - 2) + 'ых';
        } else
        if (currency[currency.length-1] === "я" && currency[currency.length-2] === "а") {
            currency = currency.substring(0, currency.length - 2) + 'их';
        } else
        if (currency[currency.length-1] === "а") {
            currency = currency.substring(0, currency.length - 1);
        }
    }

    return currency;
}

NumToWords.prototype.getFull = function (valuta, lang, num) {
    this.lang = lang;
    var eden = {
    };
    var sm = {
    };

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
}

export default NumToWords;
