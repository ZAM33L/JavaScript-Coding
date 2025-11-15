const findSquares = num => {
  let max = (num + 1) / 2;
  let min = (num - 1) / 2;
  return `${max*max}-${min*min}`
};