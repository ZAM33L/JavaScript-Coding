function bigToSmall(arr){
  const flat = [].concat(...arr);
  flat.sort((a, b) => b - a);
  return flat.join('>');
  }