import '../css/app.scss';
import 'bootstrap'
import $ from "jquery";
import NumToWords from "./numtowords";

var numtowords = new NumToWords();

function updateAll() {
    var currency = $("#valuta").val();
    var lang = $('input[name="lang"]:checked').val();
    var num = $("#c").val();
    var res = numtowords.getFull(currency, lang, num);
    $("#res").html(res);
    localStorage.setItem('convert_lang', lang);
    localStorage.setItem('convert_currency', currency);
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

var sel = '';
var vals = numtowords.getVals();
for (var key in vals) {
    var vala = vals[key].charAt(0).toUpperCase() + vals[key].slice(1);
    sel = sel + '<option value="'+key+'">'+key.toUpperCase()+' '+vala+'</option>';
};
$("#valuta").html(sel);
var lang = localStorage.getItem('convert_lang');
if (lang !== undefined) {
    var langVals = {
        'lv': 0,
        'en': 1,
        'ru': 2
    };

    $('input:radio[name="lang"]')[langVals[lang]].checked = true;
    $('input[name="lang"]:checked').val();
}
var currency = localStorage.getItem('convert_currency');
if (currency !== undefined) {
    $("#valuta").val(currency);
}
