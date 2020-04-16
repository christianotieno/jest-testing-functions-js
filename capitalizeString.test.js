const capitalizeString = require('./capitalizeString');

test('string should be capitalized', () =>{
  expect(capitalizeString('hello')).toBe('HELLO');
})