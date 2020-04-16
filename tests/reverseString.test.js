const reverseString = require('../functions/reverseString');

test('returns the reverse of string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('returns the reverse of capitalized string', () => {
  expect(reverseString('Hello')).toBe('olleH');
});