var maxProduct = function(nums) {
    let newNums = nums.sort((a,b)=> b-a)
    let i =0
    return (newNums[i]-1)*(newNums[i+1]-1)
};