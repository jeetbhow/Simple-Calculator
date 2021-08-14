const display = document.querySelector("input");

display.addEventListener("input", checkInput); 

let hasFinishedCalculation = false; 
let isInvalidInput = false; 

function checkInput() {
    del(); 
}

function append(char) {
    if (!isInvalidInput) display.value += char; 
}

function evaluate() {

    if (display.value === "") {
        display.value = "Invalid Input";
        display.style.backgroundColor = "red";
        display.style.color = "white";
        isInvalidInput = true; 
    }

    display.value = display.value.replace(Operator.MULTIPLY, "*");
    display.value = display.value.replace(Operator.DIVIDE, "/");
    display.value = display.value.replace(Operator.ADD, "+");
    display.value = display.value.replace(Operator.SUBTRACT, "-");

    try {
        display.value = eval(display.value);
    }

    catch (err) {
        display.value = "Invalid Input";
        display.style.backgroundColor = "red";
        display.style.color = "white";
        isInvalidInput = true; 
        
    }

}

function del() { 
    if (!isInvalidInput) 
        display.value = display.value.substring(0, display.value.length - 1);
}

function clear() {
    if (isInvalidInput) isInvalidInput = false;
    display.style.backgroundColor = "#2c8f2c";
    display.style.color = "#91f2b2";
    display.value = '';

}

