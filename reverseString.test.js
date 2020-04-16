let reverseString = require('./reverseString');

test('returns the reverse of string', () =>{
  expect(reverseString('hello')).toBe('olleh');
});