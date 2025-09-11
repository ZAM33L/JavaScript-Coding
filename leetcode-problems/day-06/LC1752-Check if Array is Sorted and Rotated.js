var check = function(nums) {
    let combined = nums.concat(nums)
    let goal = [...nums].sort((a,b)=>a-b)
    let combinedStr = combined.join(',')
    let goalStr = combined.join(',')
    return combinedStr.includes(goalStr)
};