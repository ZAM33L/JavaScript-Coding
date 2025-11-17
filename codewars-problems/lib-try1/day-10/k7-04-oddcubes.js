function cubeOdd(arr) {
if (!arr.every(x => typeof x === "number")) return undefined;
  
  return arr
    .filter(x => x % 2 !== 0)  
    .map(x => x ** 3)         
    .reduce((a, b) => a + b, 0);
}