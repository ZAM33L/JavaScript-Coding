var moveZeroes = function(nums) {
    let l=0
    for(r=0;r<nums.length;r++){
        if(nums[r] !== 0){
            [nums[l],nums[r]] = [nums[r],nums[l]]
            l++
        }
    }
    return nums
};