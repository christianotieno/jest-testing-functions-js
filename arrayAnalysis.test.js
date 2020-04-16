const analyze = require('./arrayAnalysis');

const arr = [1,8,3,4,2,6];

test("It should return an object", () =>{
  const result = analyze(arr);
  expect(result).toBeInstanceOf(Object);
})

test("It should return an object containing the average value", () =>{
  const result = analyze(arr);
  expect(result.average).toEqual(4);
})

test("It should return an object containing the minimum value", () =>{
  const result = analyze(arr);
  expect(result.min).toEqual(1);
})

test("It should return an object containing the maximum value", () =>{
  const result = analyze(arr);
  expect(result.max).toEqual(8);
})

test("It should return an object containing the length of the array input", () =>{
  const result = analyze(arr);
  expect(result.length).toEqual(6);
})