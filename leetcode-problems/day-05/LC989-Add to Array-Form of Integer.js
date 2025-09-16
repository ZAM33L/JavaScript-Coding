// var addToArrayForm = function(num, k) {
//     const arrNum = num.join('')
//     const sum = Number(arrNum)+Number(k)
//     return sum.toString().split('').map(Number)
// };
//same logic as LC415-  Add Strings
var addToArrayForm = function(num, k) {
let i = num.length - 1;
  let carry = 0;
  const result = [];

  while (i >= 0 || k > 0 || carry > 0) {
    const n = i >= 0 ? num[i] : 0;
    const digitK = k > 0 ? k % 10 : 0;

    let sum = n + digitK + carry;
    carry = Math.floor(sum / 10);
    result.push(sum % 10);

    k = Math.floor(k / 10);
    i--;
  }

  result.reverse();
  return result;

};