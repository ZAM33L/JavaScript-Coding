var maximumSwap = function (num) {
  let unsortedDigits = Array.from(String(num), Number);
  let l = unsortedDigits.length;
  let sortedDigits = [...unsortedDigits].sort((a, b) => b - a);

  for (let i = 0; i < l; i++) { // added let before i
    if (unsortedDigits[i] !== sortedDigits[i]) {
      let swapIndex = unsortedDigits.lastIndexOf(sortedDigits[i]);
      ([unsortedDigits[i], unsortedDigits[swapIndex]] = [unsortedDigits[swapIndex], unsortedDigits[i]]); 
      break;
    }
  }

  return parseInt(unsortedDigits.join(''));
};
