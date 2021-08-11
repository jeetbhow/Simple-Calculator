const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");

const Button = {
    DEL: "DEL",
    EQUAL: "=",
    CLEAR: "CE",
    SIGN: "+/-",
}

display.addEventListener("input", checkInput); 

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

function checkInput() {
    // No direct input support as of now. 
    del(); 
}

function append(number) {
    display.value += number; 
}

function evaluate() {
    display.value = eval(display.value);
}

function del() { 
    display.value = display.value.substring(0, display.value.length - 1);
}

function clear() {
    display.value = '';
}
