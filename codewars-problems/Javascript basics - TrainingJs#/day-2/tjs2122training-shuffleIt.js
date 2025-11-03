function shuffleIt(arr,...swaps){
  //coding here...
  for (let [i, j] of swaps) {
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  }
  return arr;
}