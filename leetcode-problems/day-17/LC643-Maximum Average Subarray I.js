var findMaxAverage = function(nums, k) {
    let n = nums.length
    let curr_sum = 0

    for(let i =0;i<k;i++){
        curr_sum += nums[i]
    }

    let max_avg = curr_sum / k

    for(i=k;i<n;i++){
        curr_sum += nums[i]
        curr_sum -= nums[i-k]

        avg = curr_sum / k
        max_avg = Math.max(max_avg,avg)
    }

    return max_avg

};