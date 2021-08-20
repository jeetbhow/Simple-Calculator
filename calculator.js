class Calculator {

    constructor(display, buttons, symbolMap) {
        this.display = display;
        this.buttons = buttons;
        this.symbolMap = symbolMap; 

        for (const button of buttons) {
            switch (button.textContent) {
                case "=":
                    button.addEventListener("click", this.evaluate);
                    break; 
                case "DEL":
                    button.addEventListener("click", this.del);
                    break; 
                case "CE":
                    button.addEventListener("click", this.clear);
                    break; 
                default:
                    button.addEventListener("click", () => this.append(button.textContent));
            }
        }
    }

    append(char) {
        display.value += char; 
    }

    evaluate() {
        if (display.value === "") {
            return; 
        }

        // Replaces calculator symbols with JavaScript operators. 
        for (const [symbol, target] of symbolMap) {
            let replacement = display.value.replace(symbol, target);
            display.value = replacement; 
        }
    
        display.value = eval(display.value);
    }

    del() {
        display.value = display.value.substring(0, display.value.length - 1);
    }

    clear() {
        display.value = '';
    }
}
