var isRationalEqual = function(s, t) {
    function valueOf(num) {
        if (!num.includes('(')) return parseFloat(num);

        const leftParenIndex = num.indexOf('(');
        const rightParenIndex = num.indexOf(')');
        const dotIndex = num.indexOf('.');

        const integerAndNonRepeat = parseFloat(num.slice(0, leftParenIndex));
        const nonRepeatLen = dotIndex === -1 ? 0 : leftParenIndex - dotIndex - 1;
        const repeating = num.substring(leftParenIndex + 1, rightParenIndex);
        const repeatingLen = repeating.length;

        // Convert repeating string to number
        const repeatingNum = parseInt(repeating);

        const power10NonRepeat = Math.pow(10, nonRepeatLen);
        const power10Repeat = Math.pow(10, repeatingLen);

        // Using the formula for repeating decimals:
        // value = integerAndNonRepeat + repeatingNum / (10^nonRepeatLen * (10^repeatLen - 1))

        return integerAndNonRepeat + (repeatingNum / (power10NonRepeat * (power10Repeat - 1)));
    }

    return Math.abs(valueOf(s) - valueOf(t)) < 1e-9;
};

// Example usage:
console.log(isRationalEqual("0.(52)", "0.5(25)"));  // true
console.log(isRationalEqual("0.1666(6)", "0.166(66)"));  // true


//not optimal
//var isRationalEqual = function (s, t) {

//     function repeatAfterDecimal(str) {

//         let [intPart, decimalPart] = s.split('.');
//         if (!decimalPart) decimalPart = '';

//         let nonRepeat = '';
//         let repeat = '';

//         if (decimalPart.includes('(')) {
//             nonRepeat = decimalPart.split('(')[0];
//             repeat = decimalPart.split('(')[1].slice(0, -1);
//         } else {
//             nonRepeat = decimalPart;
//         }

//         let repeatedPart = repeat.repeat(10);
//         return repeatedPart
//     }

//     let a = repeatAfterDecimal(s)
//     let b = repeatAfterDecimal(s)

//     if (a.includes(b)) {
//         return true
//     }
//     return false
// };