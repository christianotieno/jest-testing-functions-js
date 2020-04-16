function reverseString(str){
  return str.split('').reverse().join('');
}

module.exports = reverseString;
console.log(reverseString('hello'));