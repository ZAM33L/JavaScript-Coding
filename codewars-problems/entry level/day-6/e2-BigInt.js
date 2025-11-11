// function add(a, b) {
//   return (BigInt(a) + BigInt(b)).toString();
// }
function add(a, b) {
  let res = "";
  let carry = 0;

  a = a.split('').reverse();
  b = b.split('').reverse();

  const maxLen = Math.max(a.length, b.length);

  for (let i = 0; i < maxLen; i++) {
    const digitA = +a[i] || 0;
    const digitB = +b[i] || 0;
    const sum = digitA + digitB + carry;

    res = (sum % 10) + res;
    carry = Math.floor(sum / 10);
  }

  if (carry) res = carry + res;
  return res;
}