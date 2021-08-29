/* Data */
const Button = {
    DEL: "DEL",
    EQUAL: "=",
    CLEAR: "C",
}

const Symbol = {
    CROSS: "\u00d7",
    DIVISION: "\u00f7",
    PLUS: "\u002B",
    SUBTRACTION: "\u2212",
}

const State = {
    ACTIVE: 1,
    INVALID_INPUT: 2,
}

/* Maps the unicode symbols on the calculator to JavaScript operators. 
   When evaluate() is called, the symbols on the display will be replaced
   by actual JavaScript operators so that the expression can be evaluated. */  

const symbolMap = new Map(); 
symbolMap.set(Symbol.CROSS, "*");         
symbolMap.set(Symbol.DIVISION, "/");         
symbolMap.set(Symbol.PLUS, "+");        
symbolMap.set(Symbol.SUBTRACTION, "-");    

const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");
const invalidInputField = document.querySelector("#invalid-input-message");

let currentState = State.ACTIVE;
let hasFinishedCalculation = false;  


display.addEventListener("input", processKeyboardInput); 

for (const button of buttons) {
    switch (button.textContent) {
        case Button.EQUAL:
            button.addEventListener("click", evaluate);
            break; 
        case Button.DEL:
            button.addEventListener("click", del);
            break; 
        case Button.CLEAR:
            button.addEventListener("click", clear);
            break; 
        default:
            button.addEventListener("click", () => append(button.textContent));
    }
}

function processKeyboardInput() {
    // No support for this yet. 
    del(); 
}

function append(char) {

    if (hasFinishedCalculation) {
        if (char <= 9 && char >= 0) {
            display.value = "";
        }
        hasFinishedCalculation = false;
    }

    if (currentState === State.ACTIVE) {
        display.value += char;
    } else {
        return; 
    }
}

function evaluate() {
    replace();

    try {
        display.value = eval(display.value); 
        if (display.value === 'undefined') {
            displayInvalidInputError(); 
            currentState = State.INVALID_INPUT;
        }
    } catch {
        displayInvalidInputError(); 
        currentState = State.INVALID_INPUT; 
    }

    hasFinishedCalculation = true; 
}

function replace() {
    for (const [symbol, target] of symbolMap) {
        display.value = display.value.replaceAll(symbol, target);
    }
}

function displayInvalidInputError() {
    display.value = "Invalid input";
    display.style.backgroundColor = "red";
    display.style.color = "white";
    invalidInputField.classList.remove("hide");
    invalidInputField.classList.add("fade-in-and-out");
}

function del() { 
    if (currentState === State.ACTIVE) {
        display.value = display.value.substring(0, display.value.length - 1);
    } else {
        return; 
    }
}

function clear() {
    display.value = '';

    if (currentState === State.INVALID_INPUT) {
        display.style.backgroundColor = "#2c8f2c";
        display.style.color = "#91f2b2";
        currentState = State.ACTIVE;
        invalidInputField.classList.add("hide");
        invalidInputField.classList.remove("fade-in-and-out"); 
    }
}

