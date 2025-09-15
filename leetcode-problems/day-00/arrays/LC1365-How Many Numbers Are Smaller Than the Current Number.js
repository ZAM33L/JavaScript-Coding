var smallerNumbersThanCurrent = function(nums) {
    let n = nums.length
    
    let countArray = []
    for(i=0;i<n;i++){
        let count = 0
        for(j=0;j<n;j++){
            if(nums[i]>nums[j]){
                count += 1
            }
        }
        countArray.push(count)
    }
    return countArray
};

console.log(smallerNumbersThanCurrent([8,7,6]))