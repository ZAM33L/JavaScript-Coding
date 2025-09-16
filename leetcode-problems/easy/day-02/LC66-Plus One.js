/*
var plusOne = function(digits) {
    let num = Number(digits.join("")) +1
    let arr = num.toString().split("").map(Number)
    return arr
};
*/

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;       
            return digits;
        }
        digits[i] = 0;       
    }
    
    digits.unshift(1);
    return digits;
};

digits = [1,2,3]
console.log(plusOne(digits))