function sortIt(arr) {
  const freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  const sortedByCount = [...arr].sort((a, b) => freq[a] - freq[b] || b - a );
  
  return sortedByCount;
}
