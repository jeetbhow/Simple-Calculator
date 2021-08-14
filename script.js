const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");

display.addEventListener("input", checkInput); 

const SpecialButton = {
    DEL: "DEL",
    EQUAL: "=",
    CLEAR: "CE",
    SIGN: "+/-",
}

// The stack is used to perform the actual calculations. 
let stack = [];

let hasFinishedCalculation = false; 

// Adds event listeners to all of the buttons. 
for (const button of buttons) {
    switch (button.textContent) {
        case SpecialButton.EQUAL:
            button.addEventListener("click", evaluate);
            break; 
        case SpecialButton.DEL:
            button.addEventListener("click", del);
            break; 
        case SpecialButton.CLEAR:
            button.addEventListener("click", clear);
            break; 
        default:
            button.addEventListener("click", () => append(button.textContent));
    }
}

function checkInput() {
    del(); 
}

function append(text) {
    display.value += text;
}

function evaluate() {
    display.value = display.value.replace(Operator.MULTIPLY, "*");
    display.value = display.value.replace(Operator.DIVIDE, "/");
    display.value = display.value.replace(Operator.ADD, "+");
    display.value = display.value.replace(Operator.SUBTRACT, "-");
    display.value = eval(display.value);
}

function del() { 
    display.value = display.value.substring(0, display.value.length - 1);
}

function clear() {
    display.value = '';
}

