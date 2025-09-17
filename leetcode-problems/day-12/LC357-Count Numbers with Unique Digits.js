var countNumbersWithUniqueDigits = function (n) {
    if (n === 0) return 1;
    if (n === 1) return 10;

    let count = 10; // for n=1
    let uniqueDigits = 9;
    let availableNumber = 9;

    for (let i = 2; i <= n && availableNumber > 0; i++) {
        uniqueDigits *= availableNumber;
        count += uniqueDigits;
        availableNumber--;
    }

    return count;
}
//time limit exceeded
// var countNumbersWithUniqueDigits = function (n) {
//     if (n === 0) return 1

//     let count = 0

//     function areDigitsUnique(num) {
//         let str = num.toString();
//         let digitSet = new Set(str);
//         return digitSet.size === str.length;
//     }
//     for (i = 0; i <(10 ** n); i++) {
//         if (areDigitsUnique(i)){
//             count ++
//         }
//     }
//     return count
// };