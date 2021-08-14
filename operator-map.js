const Operator = {
    MULTIPLY: "\u00d7",
    DIVIDE: "\u00f7",
    ADD: "\u002B",
    SUBTRACT: "\u2212",
}

let operatorMap = new Map(); 

// Maps the unicode characters onto JavaScript operators. 
operatorMap.set(Operator.MULTIPLY, "*");         
operatorMap.set(Operator.DIVIDE, "/");         
operatorMap.set(Operator.ADD, "+");        
operatorMap.set(Operator.SUBTRACT, "-");         
