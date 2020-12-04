import T2W from "numbers2words";

var NumToWords = function () {
    this.translator = new T2W("EN_US");

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
        "lvl": "Latvijas lats",
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
        'nok': 'ēri',
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
        "dem": "german mark",
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
        'nok': 'ore',
    };
}

NumToWords.prototype.getVals = function () {
    return this.vals;
}

NumToWords.prototype.units = function (numericUnit) {
    const unitNames = {
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
}

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
}

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
}

export default NumToWords;
