document.getElementById('submit').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {

    var Fah = document.getElementById("Fah").value;
    var Cel = document.getElementById("Cel").value;

    if(Fah != ''){
        Cel=(parseFloat(Fah)-32)/1.8;
    }else{
        Fah = (parseFloat(Cel)+ 1.8)+32;
    }

    document.getElementById('Fah').value = parseFloat(Fah).toFixed(1);
    document.getElementById(Cel).value = parseFloat(Cel).toFixed(1);
}

function clearForm() {
    document.getElementById('Fah').value = '';
    document.getElementById('Cel').value = '';

}