var countOperationsToEmptyArray = function(nums) {
    const n = nums.length;
    let ans = n;
    const numToIndex = new Map();

    nums.forEach((num, i) => {
        numToIndex.set(num, i);
    });

    const sortedNums = [...nums].sort((a, b) => a - b);

    for (let i = 1; i < n; i++) {
        // If the current element has a smaller original index than the previous element,
        // this means we have to rotate the remaining array (n - i) times.
        if (numToIndex.get(sortedNums[i]) < numToIndex.get(sortedNums[i - 1])) {
            ans += n - i;
        }
    }

    return ans;
};

// not optimal
// var countOperationsToEmptyArray = function(nums) {
//     let count = 0;

//     while (nums.length > 0) {
//         if (nums[0] === Math.min(...nums)) {
//             nums.shift();
//             count++;
//         } else {

//             let first = nums.shift();
//             nums.push(first);
//             count++;
//         }
//     }

//     return count;
// };
