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

NumToWords.prototype.units = function (numericUnit, plural = 0) {
    if (Array.isArray(this.translations.numConf.units[this.lang][numericUnit])) {
        return this.translations.numConf.units[this.lang][numericUnit][plural]
    }
    return this.translations.numConf.units[this.lang][numericUnit]
}

NumToWords.prototype.tenners = function (numericTen, sex = true) {
    var plural = 1;
    if (sex) {
        plural = 0;
    }
    if (numericTen[0] === "0") {
        return this.units(numericTen[1], plural);
    }
    if (numericTen[0] === "1") {
        return this.translations.numConf.teens[this.lang][numericTen]
    }

    return this.translations.numConf.tenners[this.lang][numericTen[0]] + " " + this.units(numericTen[1], plural)
}

NumToWords.prototype.hundreds = function (numericHundred, sex = true) {
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
}
NumToWords.prototype.genericCaller = function(methodName) {
    var args = [].slice.call(arguments);
    args.shift();
    return this[methodName].apply(this, args);
};

NumToWords.prototype.uni = function (num, len, sex = 'he') {
    if (len === 3) {
        return this.genericCaller('hundreds', num, sex === 'he');
    }
    var milioni = num.substring(0, 3);
    var thousandsci = num.substring(3, len);

    if (milioni === '000') {
        return this.genericCaller('uni', thousandsci, len-3, sex);
    }

    var miljWord = this.translations.bigNums[(len - 3).toString()][this.lang][1];
    if (milioni[2] === "1" && milioni[1] !== "1") {
        miljWord = this.translations.bigNums[(len - 3).toString()][this.lang][0]
    }
    if (this.lang === 'ru' && milioni[1] !== "1" && (milioni[2] === "2" || milioni[2] === "3" || milioni[2] === "4")) {
        miljWord = this.translations.bigNums[(len - 3).toString()][this.lang][2]
    }
    return this.hundreds(milioni, !(len >= 6 && len < 9)) + ' '+miljWord+' ' + this.genericCaller('uni', thousandsci, len-3, sex);
}

NumToWords.prototype.getResult = function (num, cent, eur, sex = 'he') {
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
    var un = this.translations.ands[this.lang];
    var comats = this.translations.comats[this.lang];
    if (Array.isArray(cent)) {
        var centi = ' '+un+' 00 ' + cent[0];
    } else {
        var centi = ' '+un+' 00 ' + cent;
    }
    if (sep !== -1) {

        centi = num.substring(sep+1, length);
        centi = centi.replace(/[^0-9]/g, "")
        num = num.substring(0, sep);
        var centi1 = '';
        if (centi.length === 0) {
            centi1 = '00';
        } else if (centi.length === 1) {
            centi1 = centi+'0';
        } else if (centi.length === 2) {
            centi1 = centi;
        } else {
            centi1 = centi.substring(0,2);
        }

        if (Array.isArray(cent)) {
            if (centi1[centi1.length-1] === "1" && centi1[centi1.length-2] !== "1") {
                cent = cent[1];
            } else if ((centi1[centi1.length-2] !== "1") && (centi1[centi1.length-1] === "2" || centi1[centi1.length-1] === "3" || centi1[centi1.length-1] === "4" )) {
                cent = cent[2];
            } else {
                cent = cent[0];
            }
        }

        num = num.substring(0, sep);
        if (centi.length === 0) {
            centi = ' '+un+' '+centi1+' ' + cent;
        } else if (centi.length == 1) {
            centi = ' '+un+' '+centi1+' ' + cent;
        } else if (centi.length == 2) {
            centi = ' '+un+' '+centi1+' ' + cent;
        } else {
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
    } else {
        num = '0'.repeat(18 - num.length) + num;
        num = this.uni(num, 18, sex).trim();
        if (num === '') {
            num = this.translations.nulle[this.lang];
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
}
NumToWords.prototype.endingsRu = function (number, currency) {
    if ((number.length > 1 && number[number.length-1] === "1" && number[number.length-2] !== "1") || number === "1") {
    } else if ((number.length > 1 && (number[number.length-1] === "2" || number[number.length-1] === "3" || number[number.length-1] === "4") && number[number.length-2] !== "1") || number === "1") {
        var endings = {'add':{"р": "а", "т": "а", "к": "а", "ам": "а"}, 'replace': {"ира": "иры", "ь": "я", "ский":"ских", "ий": "их", "ый": "а", "ая": "ие", "ф": "ы", "на": "ны"}};
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
        var endings = {'add':{"р": "ов", "т": "ов", "к": "ов"}, 'replace': {"ь": "ей", "ий": "их", "ый": "ых", "ая": "их", "а": ""}};
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
}

NumToWords.prototype.getFull = function (valuta, lang, num) {
    this.lang = lang;
    var eden = {
    };
    var sm = {
    };

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
}

export default NumToWords;
