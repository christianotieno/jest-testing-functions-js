const ceasar = require('../functions/caesarCipher');

test('It should return an encrypted string', () => {
  const result = ceasar('Hello', 5);
  expect(result).toBe('Mjqqt');
});

test('It should return the decrypted string', () => {
  const result = ceasar('Mjqqt', -5);
  expect(result).toBe('Hello');
});

test('It should return the encrypted string with spaces between words', () => {
  const result = ceasar('Hello World', 5);
  expect(result).toBe('Mjqqt Btwqi');
});

test('Wrapping from z to a', () => {
  const result = ceasar('zzz', 1);
  expect(result).toBe('aaa');
});

test('Keeps the same case', () => {
  const result = ceasar('HELLO', 5);
  expect(result).toBe('MJQQT');
});

test('Keeps the same punctuation', () => {
  const result = ceasar('Hello World! Our first tests.', 15);
  expect(result).toBe('Wtaad Ldgas! Djg uxghi ithih.');
});