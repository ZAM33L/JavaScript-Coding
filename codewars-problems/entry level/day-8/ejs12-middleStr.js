function getMiddle(s) {
  let x = '';
  
  if (s.length % 2 === 0) {
    x = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    x = s[Math.floor(s.length / 2)];
  }

  return x;
}
