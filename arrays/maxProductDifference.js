var maxProductDifference = function(nums) {
    nums.sort((a,b)=> a-b)
    n = nums.length
    max_pr = nums[n-1] * nums[n-2]
    min_pr = nums[0] * nums[1]
    return max_pr - min_pr
};

console.log(maxProductDifference([9,1,5,4,8]))