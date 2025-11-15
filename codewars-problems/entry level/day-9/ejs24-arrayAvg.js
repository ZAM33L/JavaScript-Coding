function sumAverage(arr) {
  return Math.floor(arr
          .map(e => e.reduce(sum) / e.length)
          .reduce(sum));
}

const sum = (a, b) => a + b;