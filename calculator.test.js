const  Calculator = require('./calculator')

let myCalculator = new Calculator(); 
test("all functions in the calculator should work", () =>{
  expect(myCalculator.add(1,2)).toEqual(3);
  expect(myCalculator.subtract(2,1)).toEqual(1);
  expect(myCalculator.divide(4,2)).toEqual(2);
  expect(myCalculator.multiply(2,4)).toEqual(8);
})