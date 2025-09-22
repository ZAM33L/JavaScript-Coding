var pivotIndex = function(nums) {
    let lSum = 0
    let rSum = nums.reduce((a,b) => a+b,0)
    let n = nums.length

    for(i=0;i<n;i++){
        rSum -= nums[i]
        if(lSum === rSum){
            return i
        }
        lSum += nums[i]
    }

    return -1
};