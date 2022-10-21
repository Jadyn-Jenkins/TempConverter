let cInput, fInput;
const convertedField = document.getElementById('convertOut');

const c_fBtn = document.getElementById('cToFBtn');
if (c_fBtn != null) { c_fBtn.addEventListener('click', convertCtoF); }

const f_cBtn = document.getElementById('fToCBtn');
if (f_cBtn != null) { f_cBtn.addEventListener('click', convertFtoC); }

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', resetAll);

window.onload = init();

function init() {
    // convertCtoF();
    // convertFtoC();
    // resetAll();
}

function convertCtoF() {
    cInput = Number(document.getElementById('tempInput').value);

    if (isNaN(cInput)) {
        alert('ERROR: INPUT MUST BE JUST NUMBERS (1,22,358)');
    } else {
        convertedField.innerText = (cInput * (9 / 5)) + 32;
    }
}

function convertFtoC() {
    fInput = Number(document.getElementById('tempInput').value)

    if (isNaN(fInput)) {
        alert('ERROR: INPUT MUST BE JUST NUMBERS (1,22,358)');
    } else {
        convertedField.innerText = (fInput - 32) * (5 / 9);
    }
}

function resetAll() {
    convertedField.innerText = 0;
}