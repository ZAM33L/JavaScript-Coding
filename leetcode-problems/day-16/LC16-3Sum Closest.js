var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let w = nums.length;
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < w; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let l = i + 1;
        let r = w - 1;

        while (l < r) {
            let threeSum = nums[i] + nums[l] + nums[r];
            if (Math.abs(threeSum - target) < Math.abs(closestSum - target)) {
                closestSum = threeSum;
            }
            if (threeSum > target) {
                r--;
            } else if (threeSum < target) {
                l++;
            } else {
                return threeSum; 
            }
        }
    }
    return closestSum;
}