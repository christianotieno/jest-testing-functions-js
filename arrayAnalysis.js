const analyze = (array) => {
  let sum = 0;
  array.map(n => { sum += n});
  const average = sum / array.length;

  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length
  }
}

module.exports = analyze;