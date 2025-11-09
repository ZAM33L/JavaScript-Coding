function threeInOne(arr){
  const result = [];
  
  for (let i = 0; i < arr.length; i += 3) {
    let sum = arr[i] + arr[i + 1] + arr[i + 2];
    result.push(sum);
    //result.push(arr.slice(i, i + 3).reduce((a, b) => a + b, 0));
  }
  
  return result;
}