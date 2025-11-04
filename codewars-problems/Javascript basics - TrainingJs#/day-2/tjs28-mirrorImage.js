function mirrorImage(arr) {
  let result = [-1, -1];
  
  arr.some((a, i) => {
    const b = arr[i + 1];
    const reversedB = Number(String(b).split("").reverse().join(""));

    if (a === reversedB) {
      result = [a, b];
      return true;
    }
  });

  return result;
}