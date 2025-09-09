var thirdMax = function(nums) {
    let distinctNums = [...new Set(nums)];

    distinctNums.sort((a, b) => b - a);

    return distinctNums.length >= 3 ? distinctNums[2] : distinctNums[0];
};
// var thirdMax = function(nums) {
//     if (nums.length < 3) return Math.max(...nums);

//     let first = -Infinity, second = -Infinity, third = -Infinity;

//     for (let num of nums) {
//         if (num === first || num === second || num === third) continue; // skip duplicates

//         if (num > first) {
//             third = second;
//             second = first;
//             first = num;
//         } else if (num > second) {
//             third = second;
//             second = num;
//         } else if (num > third) {
//             third = num;
//         }
//     }

//     return third === -Infinity ? first : third;
// };

