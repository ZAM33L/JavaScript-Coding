var sumOfGoodNumbers = function(nums, k) {
    let sum = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (i - k >= 0 && nums[i] <= nums[i - k]) {
            continue;
        }
        if (i + k < n && nums[i] <= nums[i + k]) {
            continue;
        }
        sum += nums[i];
    }
    return sum;
};