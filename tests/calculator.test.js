const Calculator = require('../functions/calculator');

const myCalculator = new Calculator();
test('Add 1 + 2 should be 3', () => {
  expect(myCalculator.add(1, 2)).toEqual(3);
});

test('Subtract 2 - 1 should be 1', () => {
  expect(myCalculator.subtract(2, 1)).toEqual(1);
});

test('Divide 4 / 2 should be 2', () => {
  expect(myCalculator.divide(4, 2)).toEqual(2);
});

test('Divide 4 / 0 should retrun Infinity', () => {
  expect(myCalculator.divide(4, 0)).toEqual(Infinity);
});

test('Multiply 2 * 4 should retrun 8', () => {
  expect(myCalculator.multiply(2, 4)).toEqual(8);
});