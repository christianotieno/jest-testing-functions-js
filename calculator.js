function Calculator(add, subtract, divide, multiply) {
  this.add = function(a, b) {return a + b;};
  this.subtract = function(a, b){return a - b;};
  this.divide =   function(a ,b) {return a / b;};
  this.multiply = function(a, b) {return a * b;};
}

module.exports = Calculator;

let myCalculator = new Calculator(); 


console.log(myCalculator.add(1, 2));
console.log(myCalculator.subtract(2 , 1));
console.log(myCalculator.divide(4, 2));
console.log(myCalculator.multiply(2, 4));
