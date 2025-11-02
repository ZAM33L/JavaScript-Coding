function isPangram(str){
  //...
  const letters = new Set(str.toLowerCase().replace(/[^a-z]/g,''))
  return letters.size === 26
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); 