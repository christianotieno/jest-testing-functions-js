function capitalizeString(str){
  const split = str.split('');
  let capitalized = split[0].toUpperCase();
  capitalized += split.splice(1).join('');
  return capitalized;
}

module.exports = capitalizeString;