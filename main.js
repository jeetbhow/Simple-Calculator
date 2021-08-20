const symbolMap = new Map(); 

symbolMap.set(Symbol.MULTIPLY, "*");         
symbolMap.set(Symbol.DIVIDE, "/");         
symbolMap.set(Symbol.ADD, "+");        
symbolMap.set(Symbol.SUBTRACT, "-");  

const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");
let calculator = new Calculator(display, buttons, symbolMap);
