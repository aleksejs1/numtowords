var WordTranslations = function () {
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

    this.confing = {"eur":{"name":{"lv":"euro","ru":"\u0415\u0432\u0440\u043e","en":"euro"},"hundredths":{"lv":"centi","ru":"\u0446\u0435\u043d\u0442\u043e\u0432","en":"cents"}},"usd":{"name":{"lv":"dol\u0101rs","ru":"\u0414\u043e\u043b\u043b\u0430\u0440","en":"dollar"},"hundredths":{"lv":"centi","ru":"\u0446\u0435\u043d\u0442\u043e\u0432","en":"cents"}},"gbp":{"name":{"lv":"Lielbrit\u0101nijas m\u0101rci\u0146a","ru":"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u0444\u0443\u043d\u0442 \u0441\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u043e\u0432","en":"british pound"},"hundredths":{"lv":"peni","ru":"\u043f\u0435\u043d\u0438","en":"pence"}},"rub":{"name":{"lv":"Krievijas rublis","ru":"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c","en":"russian ruble"},"hundredths":{"lv":"kapeik\u0101s","ru":"\u043a\u043e\u043f\u0435\u0435\u043a","en":"kopeks"}},"pln":{"name":{"lv":"Polijas zlots","ru":"\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u043b\u043e\u0442\u044b\u0439","en":"polish zloty"},"hundredths":{"lv":"gro\u0161i","ru":"\u0433\u0440\u043e\u0448","en":"grosz"}},"kzt":{"name":{"lv":"Kazahst\u0101nas tenge","ru":"\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0442\u0435\u043d\u0433\u0435","en":"kazakhstan tenge"},"hundredths":{"lv":"tij\u012bni","ru":"\u0442\u0438\u044b\u043d","en":"t\u0131yns"}},"chf":{"name":{"lv":"\u0160veices franks","ru":"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043a\u0438\u0439 \u0444\u0440\u0430\u043d\u043a","en":"swiss franc"},"hundredths":{"lv":"rapeni","ru":"\u0440\u0430\u043f\u043f\u0435\u043d\u043e\u0432","en":"rappens"}},"aed":{"name":{"lv":"Apvienoto Ar\u0101bu Emir\u0101tu dirhams","ru":"\u0414\u0438\u0440\u0445\u0430\u043c \u041e\u0410\u042d","en":"united arab emirates dirham"},"hundredths":{"lv":"fili","ru":"\u0444\u0438\u043b\u0441","en":"fils"}},"dkk":{"name":{"lv":"D\u0101nijas krona","ru":"\u0414\u0430\u0442\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"danish krone"},"hundredths":{"lv":"\u0113ri","ru":"\u044d\u0440\u0435","en":"ore"}},"sek":{"name":{"lv":"Zviedrijas krona","ru":"\u0428\u0432\u0435\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"swedish krona"},"hundredths":{"lv":"\u0113ri","ru":"\u044d\u0440\u0435","en":"ore"}},"nok":{"name":{"lv":"Norv\u0113\u0123ijas krona","ru":"\u041d\u043e\u0440\u0432\u0435\u0436\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"norwegian krone"},"hundredths":{"lv":"\u0113ri","ru":"\u044d\u0440\u0435","en":"ore"}},"bgn":{"name":{"lv":"Bulg\u0101rijas leva","ru":"\u0411\u043e\u043b\u0433\u0430\u0440\u0441\u043a\u0438\u0439 \u043b\u0435\u0432","en":"bulgarian lev"}},"huf":{"name":{"lv":"Ung\u0101rijas forints","ru":"\u0432\u0435\u043d\u0433\u0435\u0440\u0441\u043a\u0438\u0439 \u0444\u043e\u0440\u0438\u043d\u0442","en":"hungarian forint"}},"try":{"name":{"lv":"Turcijas lira","ru":"\u0422\u0443\u0440\u0435\u0446\u043a\u0430\u044f \u043b\u0438\u0440\u0430","en":"turkish lira"}},"all":{"name":{"lv":"Alb\u0101nijas leks","ru":"\u0410\u043b\u0431\u0430\u043d\u0441\u043a\u0438\u0439 \u043b\u0435\u043a","en":"albanian lek"}},"hrk":{"name":{"lv":"Horv\u0101tijas kuna","ru":"X\u043e\u0440\u0432\u0430\u0442\u0441\u043a\u0430\u044f \u043a\u0443\u043d\u0430","en":"croatian kuna"}},"czk":{"name":{"lv":"\u010cehijas krona","ru":"\u0427\u0435\u0448\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"czech koruna"}},"gel":{"name":{"lv":"Gruzijas lari","ru":"\u0413\u0440\u0443\u0437\u0438\u043d\u0441\u043a\u0438\u0439 \u043b\u0430\u0440\u0438","en":"georgian lari"}},"lkr":{"name":{"lv":"\u0160rilankas r\u016bpija","ru":"\u0428\u0440\u0438-\u043b\u0430\u043d\u043a\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","en":"sri lankan rupee"}},"tnd":{"name":{"lv":"Tunisijas din\u0101rs","ru":"\u0422\u0443\u043d\u0438\u0441\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440","en":"tunisian dinar"}},"ils":{"name":{"lv":"Izra\u0113las \u0161ekels","ru":"\u0418\u0437\u0440\u0430\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0448\u0435\u043a\u0435\u043b\u044c","en":"israeli sheqel"}},"jod":{"name":{"lv":"Jord\u0101nijas din\u0101rs","ru":"\u0418\u043e\u0440\u0434\u0430\u043d\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440","en":"jordanian dinar"}},"byn":{"name":{"lv":"Baltkrievijas rublis","ru":"\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c","en":"belarusian new ruble"}},"egp":{"name":{"lv":"\u0112\u0123iptes m\u0101rci\u0146a","ru":"\u0415\u0433\u0438\u043f\u0435\u0442\u0441\u043a\u0438\u0439 \u0444\u0443\u043d\u0442","en":"egyptian pound"}},"uah":{"name":{"lv":"Ukrainas grivna","ru":"\u0423\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0430\u044f \u0433\u0440\u0438\u0432\u043d\u0430","en":"ukrainian hryvnia"}},"cny":{"name":{"lv":"\u0136\u012bnas jua\u0146a","ru":"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u044e\u0430\u043d\u044c","en":"chinese yuan"}},"thb":{"name":{"lv":"Taizemes bats","ru":"\u0422\u0430\u0438\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0431\u0430\u0442","en":"thai baht"}},"vnd":{"name":{"lv":"Vjetnamas dongs","ru":"\u0412\u044c\u0435\u0442\u043d\u0430\u043c\u0441\u043a\u0438\u0439 \u0434\u043e\u043d\u0433","en":"vietnamese dong"}},"php":{"name":{"lv":"Filip\u012bnu peso","ru":"\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","en":"philippine peso"}},"mad":{"name":{"lv":"Marokas dirhams","ru":"\u041c\u0430\u0440\u043e\u043a\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0434\u0438\u0440\u0445\u0430\u043c","en":"moroccan dirham"}},"aud":{"name":{"lv":"Austr\u0101lijas dol\u0101rs","ru":"\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","en":"australian dollar"}},"ars":{"name":{"lv":"Argent\u012bnas peso","ru":"\u0410\u0440\u0433\u0435\u043d\u0442\u0438\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","en":"argentine peso"}},"jpy":{"name":{"lv":"Jap\u0101nas j\u0113na","ru":"\u042f\u043f\u043e\u043d\u0441\u043a\u0430\u044f \u0438\u0435\u043d\u0430","en":"japanese yen"}},"idr":{"name":{"lv":"Indon\u0113zijas r\u016bpija","ru":"\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","en":"indonesian rupiah"}},"isk":{"name":{"lv":"Islandes krona","ru":"\u0418\u0441\u043b\u0430\u043d\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"iceland krona"}},"amd":{"name":{"lv":"Arm\u0113nijas drams","ru":"\u0410\u0440\u043c\u044f\u043d\u0441\u043a\u0438\u0439 \u0434\u0440\u0430\u043c","en":"armenian dram"}},"ron":{"name":{"lv":"Rum\u0101nijas leja","ru":"\u0420\u0443\u043c\u044b\u043d\u0441\u043a\u0430\u044f \u043b\u0435\u044f","en":"romanian leu"}},"sgd":{"name":{"lv":"Singap\u016bras dol\u0101rs","ru":"\u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","en":"singapore dollar"}},"sbp":{"name":{"lv":"Skotijas m\u0101rci\u0146a","ru":"\u0428\u043e\u0442\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0444\u0443\u043d\u0442","en":"scottish pound"}},"cad":{"name":{"lv":"Kan\u0101das dol\u0101rs","ru":"\u041a\u0430\u043d\u0430\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","en":"canadian dollar"}},"brl":{"name":{"lv":"Braz\u012blijas re\u0101ls","ru":"\u0411\u0440\u0430\u0437\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0440\u0435\u0430\u043b","en":"brazilian real"}},"zar":{"name":{"lv":"Dienvid\u0101frikas rends","ru":"\u042e\u0436\u043d\u043e\u0430\u0444\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0440\u044d\u043d\u0434","en":"south african rand"}},"inr":{"name":{"lv":"Indijas r\u016bpija","ru":"\u0418\u043d\u0434\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","en":"indian rupee"}},"rsd":{"name":{"lv":"Serbijas din\u0101rs","ru":"\u0421\u0435\u0440\u0431\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440","en":"serbian dinar"}},"nzd":{"name":{"lv":"Jaunz\u0113landes dol\u0101rs","ru":"\u041d\u043e\u0432\u043e\u0437\u0435\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","en":"new zealand dollar"}},"myr":{"name":{"lv":"Malaizijas ringits","ru":"M\u0430\u043b\u0430\u0439\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0438\u043d\u0433\u0433\u0438\u0442","en":"malaysian ringgit"}},"mur":{"name":{"lv":"Maur\u012bcijas salas r\u016bpija","ru":"\u041c\u0430\u0432\u0440\u0438\u043a\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f","en":"mauritian rupee"}},"hkd":{"name":{"lv":"Honkongas dol\u0101rs","ru":"\u0413\u043e\u043d\u043a\u043e\u043d\u0433\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440","en":"hong kong dollar"}},"krw":{"name":{"lv":"Dienvidkorejas vona","ru":"\u042e\u0436\u043d\u043e\u043a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0432\u043e\u043d\u0430","en":"south korean won"}},"mxn":{"name":{"lv":"Meksikas peso","ru":"\u041c\u0435\u043a\u0441\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","en":"mexican peso"}},"mkd":{"name":{"lv":"Ma\u0137edonijas den\u0101rs","ru":"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440","en":"macedonian dinar"}},"dop":{"name":{"lv":"Dominik\u0101nas peso","ru":"\u0414\u043e\u043c\u0438\u043d\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e","en":"dominican peso"}},"kes":{"name":{"lv":"Kenijas \u0161ili\u0146\u0161","ru":"\u041a\u0435\u043d\u0438\u0439\u0441\u043a\u0438\u0439 \u0448\u0438\u043b\u043b\u0438\u043d\u0433","en":"kenya shilling"}},"dem":{"name":{"lv":"V\u0101cijas marka","ru":"\u041d\u0435\u043c\u0435\u0446\u043a\u0430\u044f \u043c\u0430\u0440\u043a\u0430","en":"german mark"}},"eek":{"name":{"lv":"Igaunijas krona","ru":"\u042d\u0441\u0442\u043e\u043d\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430","en":"estonian kroon"}},"ltl":{"name":{"lv":"Lietuvas lits","ru":"\u041b\u0438\u0442\u043e\u0432\u0441\u043a\u0438\u0439 \u043b\u0438\u0442","en":"lithuanian litas"}},"lvl":{"name":{"lv":"Latvijas lats","ru":"\u041b\u0430\u0442\u0432\u0438\u0439\u0441\u043a\u0438\u0439 \u043b\u0430\u0442","en":"latvian lats"},"hundredths":{"lv":"santimi","ru":"\u0441\u0430\u043d\u0442\u0438\u043c\u043e\u0432","en":"santims"}}};

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
}

export default WordTranslations;
