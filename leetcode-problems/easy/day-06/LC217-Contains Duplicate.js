var containsDuplicate = function (nums) {
    let numMap = new Map()
    nums.forEach(num => {
        numMap.set(num, (numMap.get(num) || 0) + 1)
    })
    for(i=0;i<nums.length;i++){
        if(numMap.get(nums[i]) > 1){
            return true
        }
    }
    return false 
};