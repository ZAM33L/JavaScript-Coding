
var findMaxConsecutiveOnes = function (nums) {
    let count = 0
    let maxCount = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count += 1
            maxCount = Math.max(maxCount, count)
        }
        else {
            count = 0
        }

    }
    return maxCount
};