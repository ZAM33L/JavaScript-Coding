function maxMin(arr1,arr2){
  const diffs = arr1.map((x, i) => Math.abs(x - arr2[i]));
  return [Math.max(...diffs), Math.min(...diffs)]; 
}