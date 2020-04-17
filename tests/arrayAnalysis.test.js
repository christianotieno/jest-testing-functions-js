const analyze = require('../functions/arrayAnalysis');

const arr = [1, 8, 3, 4, 2, 6];
const result = analyze(arr);

test('It should return an object', () => {
  expect(result).toBeInstanceOf(Object);
});

test('It should return an object containing the average value', () => {
  expect(result.average).toEqual(4);
});

test('It should return an object containing the minimum value', () => {
  expect(result.min).toEqual(1);
});

test('It should return an object containing the maximum value', () => {
  expect(result.max).toEqual(8);
});

test('It should return an object containing the length of the array input', () => {
  expect(result.length).toEqual(6);
});