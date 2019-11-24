// 6_constructor_function_2

var Calculator = function () {
    this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
    var result = num1 + num2;
    this.history.push(`added ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.multiply = function(num1, num2) { 
    var result = num1 * num2;
    this.history.push(`multiplied ${num1} with ${num2} got ${result}`);
    return result;
}

Calculator.prototype.divide = function(num1, num2) { 
    var result = num1 / num2;
    this.history.push(`divided ${num1} by ${num2} got ${result}`);
    return result;
}
Calculator.prototype.substraction = function(num1, num2) { 
    var result = num1 - num2;
    this.history.push(`substracted ${num2} from ${num1} got ${result}`);
    return result;
}

Calculator.prototype.printOperations = function() {
    console.table(this.history);
}

Calculator.prototype.clearOperations = function(){
    this.history = [];
}

var calculator1 = new Calculator();
calculator1.add(5,6);
calculator1.multiply(5,2);
calculator1.divide(20,2);
calculator1.substraction(4,1);
calculator1.printOperations();
calculator1.clearOperations();
calculator1.printOperations();
