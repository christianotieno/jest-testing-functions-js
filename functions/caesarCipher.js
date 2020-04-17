const ceasar = (str, num) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const fullAlphabet = alphabet + alphabet + alphabet;
  let response = '';

  for (let i = 0; i < str.length; i += 1) {
    let letter = str[i];
    const upper = (letter === letter.toUpperCase());
    letter = letter.toLowerCase();

    let index = alphabet.indexOf(letter);
    if (index === -1) {
      response += letter;
    } else {
      index = (index + num + 26);
      let nextLetter = fullAlphabet[index];
      if (upper) nextLetter = nextLetter.toUpperCase();
      response += nextLetter;
    }
  }

  return response;
};

module.exports = ceasar;