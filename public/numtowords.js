var translator = new T2W("EN_US");

function units(edenica) {
    var ed = {
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

    return ed[edenica];
}

function padsmit(padsmit) {
    var pad = {
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

    return pad[padsmit];
}
function tenners(des) {
    if (des[0] === "0") {
        return units(des[1]);
    }
    if (des[0] === "1") {
        return padsmit(des);
    }
    var desmi = {
        "2": "divdesmit",
        "3": "trīsdesmit",
        "4": "četrdesmit",
        "5": "piecdesmit",
        "6": "sešdesmit",
        "7": "septiņdesmit",
        "8": "astoņdesmit",
        "9": "deviņdesmit"
    };

    return desmi[des[0]] + " " + units(des[1]);
}

function hundreds(dimts) {
    if (dimts[0] === "0") {
        return tenners(dimts[1] + dimts[2]);
    }
    if (dimts[0] === "1") {
        return 'viens simts' + ' ' + tenners(dimts[1] + dimts[2]);
    }
    return units(dimts[0]) + ' simti ' + tenners(dimts[1] + dimts[2]);
}


function uni(num, len, v1, vm, nfm) {
    var milioni = num.substring(0, 3);
    var thousandsci = num.substring(3, len);

    if (milioni === '000') {
        return nfm(thousandsci);
    }

    var miljWord = vm;
    if (milioni[2] === "1" && milioni[1] !== "1") {
        miljWord = v1
    }

    return hundreds(milioni) + ' '+miljWord+' ' + nfm(thousandsci);
}

function thousands(num) {
    return uni(num, 6, 'tūkstotis', 'tūkstoši', hundreds);
}

function millions(num) {
    return uni(num, 9, 'miljons', 'miljoni', thousands);
}

function billions(num) {
    return uni(num, 12, 'miljards', 'miljardi', millions);
}

function trillions(num) {
    return uni(num, 15, 'triljons', 'triljoni', billions);
}

function quadrillions(num) {
    return uni(num, 18, 'kvadriljons', 'kvadriljoni', trillions);
}


function getResult(num, cent, eur, lang) {
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
            centi1 = centi.substring(0,2);
            centi2 = centi.substring(2,centi.length);
            centi = ' '+un+' '+centi1 + ', ' + comats +', '+ centi2+' ' + cent;
        }
    }

    var orig = num;
    num = num.replace(/[^0-9]/g, "")

    if (lang === 'en') {
        try {
            num = translator.toWords(Number(num));
        } catch(e) {
            num = 'A lot of';
        }
    } else {
        num = '0'.repeat(18 - num.length) + num;
        num = quadrillions(num);
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

function updateAll() {
    var valuta = $("#valuta").val();

    var eden = {
    };
    var sm = {
    };

    if ($('input[name="lang"]:checked').val() === 'en') {
        eden = valsEn;
        sm = smEn;
    } else {
        eden = vals;
        sm = smLv;
    }


    var smres = '(1/100) ' + valuta.toUpperCase();
    if (hasOwnProperty.call(sm, valuta)) {
        smres = sm[valuta];
    }

    var res = getResult($("#c").val(), smres, eden[valuta], $('input[name="lang"]:checked').val());
    res = res.charAt(0).toUpperCase() + res.slice(1);

    $("#res").html(res);
}

function copy() {
    navigator.clipboard.writeText($("#res").html());
    $("#alrt").fadeIn();
    setTimeout(function() {$("#alrt").fadeOut();}, 1000);
}

function showHelp() {
    $("#help").fadeIn();
    $("#help-btn").hide();
}


$("#c").on('keyup', updateAll);
$("#c").on('change', updateAll);
$("#c").on('click', updateAll);
$("#c").on('paste', updateAll);
$("#valuta").on('change', updateAll);
$('input[type=radio][name=lang]').on('change', updateAll);
$("#copy-btn").on('click', copy);
$("#help-btn").on('click', showHelp);


var vals = {
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

var smLv = {
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

var valsEn = {
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

var smEn = {
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

var sel = '';
for (key in vals) {
    vala = vals[key].charAt(0).toUpperCase() + vals[key].slice(1);
    sel = sel + '<option value="'+key+'">'+key.toUpperCase()+' '+vala+'</option>';
};
$("#valuta").html(sel);