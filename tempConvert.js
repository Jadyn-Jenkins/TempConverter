let cInput, fInput;
const convertedField = document.getElementById('convertOut');

const c_fBtn = document.getElementById('cToFBtn');
if (c_fBtn != null){c_fBtn.addEventListener('click', convertCtoF);}

const f_cBtn = document.getElementById('fToCBtn');
if (f_cBtn != null){f_cBtn.addEventListener('click', convertFtoC);}

window.onload = init();

function init() {
}

function convertCtoF() {
    cInput = Number(document.getElementById('tempInput').value)

    convertedField.innerText = (cInput * (9/5))+32;
}

function convertFtoC() {
    fInput = Number(document.getElementById('tempInput').value)

    
    convertedField.innerText = (fInput-32)*(5/9);
}