function tailAndHead(arr){
  //coding here...
  let pairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let tail = arr[i] % 10;                    
    let head = Number(String(arr[i + 1])[0]);   
    pairs.push(tail + head);
  }

  return pairs.reduce((prod, num) => prod * num, 1);
}