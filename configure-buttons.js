const buttons = document.querySelectorAll("button");

const SpecialButton = {
    DEL: "DEL",
    EQUAL: "=",
    CLEAR: "CE",
    SIGN: "+/-",
}

// Adds event listeners to all of the button. 
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