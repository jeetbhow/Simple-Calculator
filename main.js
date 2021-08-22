let State = {
    INACTIVE: 0,
    ACTIVE: 1, 
}

let currentState = State.ACTIVE; 
let hasFinishedCalculation = false; 
let hasDecimalPoint = false; 


const symbolMap = new Map(); 

symbolMap.set(Symbol.MULTIPLY, "*");         
symbolMap.set(Symbol.DIVIDE, "/");         
symbolMap.set(Symbol.ADD, "+");        
symbolMap.set(Symbol.SUBTRACT, "-");
symbolMap.set(".", ".");


const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");
let calculator = new Calculator(display, buttons, symbolMap);
