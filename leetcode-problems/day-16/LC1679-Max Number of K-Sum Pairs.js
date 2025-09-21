var maxOperations = function(nums, k) {
    nums.sort((a,b) => a-b)
    let w = nums.length
    let l = 0
    let r = w-1
    let ops_count = 0

    while(l<r){
        sum = nums[l]+nums[r]

        if(sum === k){
            ops_count +=1
            l += 1
            r -= 1
        }
        else if(sum > k){
            r -= 1
        }
        else{
            l += 1
        }
    }
    return ops_count
};