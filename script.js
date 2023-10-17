let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = result;
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
