var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        // left neighbor greater
        if (m > 0 && nums[m] < nums[m - 1]) {
            r = m - 1;
        }
        // right neighbor greater
        else if (m < r && nums[m] < nums[m + 1]) {
            l = m + 1;
        }
        else {
            return m;
        }
    }
};