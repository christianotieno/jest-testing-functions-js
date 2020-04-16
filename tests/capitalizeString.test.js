const capitalizeString = require('../functions/capitalizeString');

test('string should be capitalized', () => {
  expect(capitalizeString('hello')).toBe('Hello');
});

test('Should return the same string example 1', () => {
  expect(capitalizeString('Hello')).toBe('Hello');
});

test('Should return the same string example 2', () => {
  expect(capitalizeString('HELLO')).toBe('HELLO');
});