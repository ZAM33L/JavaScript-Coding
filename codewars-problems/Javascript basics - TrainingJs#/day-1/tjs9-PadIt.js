function padIt(str, n) {
  let i = 1;
  while (i <= n) {
    if (i % 2 === 1) {
      str = "*" + str; 
      
    } else {
      str = str + "*"; 
    }
    i++;
  }
  return str;
}