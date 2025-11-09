function rndCode(){
  //coding here...
  const letters = "ABCDEFGHIJKLM";
  const numbers = "0123456789";
  const symbols = "~!@#$%^&*";
  
  const getRandom = (chars, len) =>
    Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  
  const part1 = getRandom(letters, 2);  
  const part2 = getRandom(numbers, 4);  
  const part3 = getRandom(symbols, 2);  
  
  return part1 + part2 + part3;
}