function validParentheses(parenStr) {
  let count = 0;

  for (let ch of parenStr) {
    if (ch === '(') count++;
    else if (ch === ')') count--;

    if (count < 0) return false; 
  }

  return count === 0;
  
}