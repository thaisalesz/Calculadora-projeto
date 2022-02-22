var display = document.querySelector("#display");

function showDisplay(value) {
    if (value == ".") {
        display.value = "0";
    }
    display.value += value;
}

function limpaTela() {
    display.value = "";
}

function resultado() {
    let y = eval(display.value);
    display.value = y;

    if (display.value == "undefined") {
        display.value = "";
    }
}