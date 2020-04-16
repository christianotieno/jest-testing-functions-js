const analyze = (array) => {
  let sum = 0;
  array.map(n => { sum += n; });
  const average = sum / array.length;

  const min = Math.min(...array);
  const max = Math.max(...array);
  const { length } = array;

  return {
    average,
    min,
    max,
    length,
  };
};

module.exports = analyze;