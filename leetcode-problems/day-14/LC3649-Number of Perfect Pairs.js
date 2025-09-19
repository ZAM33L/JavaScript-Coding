function perfectPairs(nums) {
    nums = nums.map(Math.abs).sort((a, b) => a - b);
    let n = nums.length, count = 0;
    for (let i = 0, j = 0; i < n; i++) {
        while (j < n && nums[j] <= 2 * nums[i]) j++;
        count += j - i - 1; // exclude itself
    }
    return count;
}

// //not optimal time limit exceeds
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var perfectPairs = function (nums) {
//     let l = nums.length
//     let count = 0
//     for (i = 0; i < l; i++) {
//         for (j = 0; j < l; j++) {
//             if (i === j) continue

//             if (i < j) {
//                 let a = nums[i]
//                 let b = nums[j]

//                 let o1 = Math.min(Math.abs(a - b), Math.abs(a + b))
//                 let r1 = Math.min(Math.abs(a), Math.abs(b))
//                 let o2 = Math.max(Math.abs(a - b), Math.abs(a + b))
//                 let r2 = Math.max(Math.abs(a), Math.abs(b))

//                 if(o1 <= r1 && o2>=r1){
//                     count +=1
//                 } 
//             }

//         }
//     }
//     return count
// };