//let sum = Number(num1)+Number(num2)
// return sum.toString()
//same logic as LC989-  Add to Array-Form of integers

var addStrings = function(num1, num2) {
    // let sum = Number(num1)+Number(num2)
    // return sum.toString()
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0, result = "";
    while (i >= 0 || j >= 0 || carry) {
        let digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        let digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        let sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }
    return result;
};