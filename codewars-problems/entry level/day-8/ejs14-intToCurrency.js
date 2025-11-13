function toCurrency(n) {
  let s = n.toString();
  let result = "";

  while (s.length > 3) {
    result = "," + s.slice(-3) + result;
    s = s.slice(0, -3);
  }

  return s + result;
}