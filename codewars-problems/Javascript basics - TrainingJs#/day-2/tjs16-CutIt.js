function cutIt(arr){
  let cutVal = Math.min(...arr.map(str => str.length));
  return arr.map(str => str.slice(0, cutVal));
}