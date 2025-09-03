
var countKDifference = function (nums, k) {
    let n = nums.length
    let count = 0
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i != j && Math.abs(nums[i] - nums[j]) == k) {
                count += 1
            }
        }

    }
    return count / 2
};

nums = [1, 2, 2, 1]
k = 2

console.log(countKDifference(nums, k))