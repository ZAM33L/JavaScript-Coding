var longestSubarray = function(nums) {
    let l = 0;
    let zeroes = 0;
    let maxLength = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 0) zeroes++;

        while (zeroes > 1) {
            if (nums[l] === 0) zeroes--;
            l++;
        }
        
        maxLength = Math.max(maxLength, r - l);
    }

    return maxLength;
};
