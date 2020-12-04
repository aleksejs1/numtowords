import T2W from "numbers2words";
import WordTranslations from "./translations";

var NumToWords = function () {
    this.translator = new T2W("EN_US");
    this.translations = new WordTranslations();
}

NumToWords.prototype.getVals = function () {
    return this.translations.currencyLv;
}

NumToWords.prototype.units = function (numericUnit) {
    return this.translations.unitNamesLv[numericUnit];
}

NumToWords.prototype.teens = function (teens) {
    return this.translations.teenNamesLv[teens];
}

NumToWords.prototype.tenners = function (numericTen) {
    if (numericTen[0] === "0") {
        return this.units(numericTen[1]);
    }
    if (numericTen[0] === "1") {
        return this.teens(numericTen);
    }

    return this.translations.tennerNamesLv[numericTen[0]] + " " + this.units(numericTen[1]);
}

NumToWords.prototype.hundreds = function (numericHundred) {
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
    return this.uni(num, 6, 'tūkstotis', 'tūkstoši', 'hundreds');
}

NumToWords.prototype.millions = function (num) {
    return this.uni(num, 9, 'miljons', 'miljoni', 'thousands')
}

NumToWords.prototype.billions = function (num) {
    return this.uni(num, 12, 'miljards', 'miljardi', 'millions');
}

NumToWords.prototype.trillions = function (num) {
    return this.uni(num, 15, 'triljons', 'triljoni', 'billions');
}

NumToWords.prototype.quadrillions = function (num) {
    return this.uni(num, 18, 'kvadriljons', 'kvadriljoni', 'trillions');
}

NumToWords.prototype.getResult = function (num, cent, eur, lang) {
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
    if (lang === 'en') {
        un = 'and'
        comats = 'coma';
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

    if (lang === 'en') {
        try {
            num = this.translator.toWords(Number(num));
        } catch(e) {
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
        if ((orig.length > 1 && orig[orig.length-1] === "1" && orig[orig.length-2] !== "1") || orig === "1") {
        } else {
            if (eur[eur.length-1] != "o" && eur[eur.length-1] != "e") {
                eur = eur.substring(0, eur.length - 1) + 'i';
            }
            if (eur[eur.length-2] === "i") {
                eur = eur.substring(0, eur.length - 1);
            }
        }
    }

    return num + ' ' + eur.toLowerCase() + centi;
}

NumToWords.prototype.getFull = function (valuta, lang, num) {
    var eden = {
    };
    var sm = {
    };

    if (lang === 'en') {
        eden = this.translations.currencyEn;
        sm = this.translations.hundredthsEn;
    } else {
        eden = this.translations.currencyLv;
        sm = this.translations.hundredthsLv;
    }


    var smres = '(1/100) ' + valuta.toUpperCase();
    if (hasOwnProperty.call(sm, valuta)) {
        smres = sm[valuta];
    }

    var res = this.getResult(num, smres, eden[valuta], lang);
    res = res.charAt(0).toUpperCase() + res.slice(1);

    return res;
}

export default NumToWords;
