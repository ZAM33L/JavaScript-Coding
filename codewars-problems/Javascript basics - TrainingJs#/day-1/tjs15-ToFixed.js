function howManySmaller(arr,n){
  //coding here..
  let count = 0
  for(i=0;i<arr.length;i++){
    if(arr[i].toFixed(2) < n){
      count ++;
    }
  }
  return count;
}