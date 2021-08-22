class Calculator {
    constructor(display, buttons, symbolMap) {
        this.display = display;
        this.buttons = buttons;
        this.symbolMap = symbolMap; 

        this.display.addEventListener('input', this.processKeyboard);

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

    // Add something to the end of the display.
    append(char) {
        if (currentState === State.INACTIVE) {
            return; 
        }

        if (char === ".") {
            if (display.value.includes(".")) {
                return; 
            }
        }

        if (hasFinishedCalculation) {
            if (char >= 0 && char <= 9) {
                display.value = "";
            }
        }

        if (display.value === "" && symbolMap.get(char)) {
            display.value = "0";
        }

        hasFinishedCalculation = false; 
        display.value += char;
    }

    // Process they keyboard input.
    processKeyboard() {
        // No suppport for this yet. For now, delete the input. 
        display.value = display.value.substring(0, display.value.length - 1);
    }

    // Evaluate the expression that is currently on the display. 
    evaluate() {
        if (display.value === "" || currentState === State.INACTIVE) {
            return; 
        } 
 
        for (const [symbol, target] of symbolMap) {
            // A copy of the display with calculator symbols replaced by JavaScript operators. 
            let replacementString = display.value.replaceAll(symbol, target); 
            display.value = replacementString; 
        }
        
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
            display.style.backgroundColor = "red";
            display.style.color = "white";
            currentState = State.INACTIVE; 
        }

        hasFinishedCalculation = true; 
    }

    // Remove the character at the end of the display. 
    del() {
        if (currentState === State.ACTIVE) {
            display.value = display.value.substring(0, display.value.length - 1);
        } else {
            return; 
        }
    }

    // Remove everything on the display. 
    clear() {
        display.value = '';

        if (currentState === State.INACTIVE) {
            display.style.backgroundColor = "#2c8f2c";
            display.style.color = "#91f2b2";
            currentState = State.ACTIVE; 
        }
    }
}
