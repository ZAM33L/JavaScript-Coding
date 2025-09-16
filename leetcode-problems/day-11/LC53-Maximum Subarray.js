var maxSubArray = function(nums) {
    let cSum =nums[0]
    let maxSum = nums[0]
    for(i=1;i<nums.length;i++){
        cSum = Math.max(nums[i],cSum+nums[i])
        maxSum = Math.max(maxSum,cSum)
    }
    return maxSum
};