var longestOnes = function(nums, k) {
    let mxWidth = 0
    let zeroes = 0
    let l = 0

    for(r=0;r<nums.length;r++){
        if(nums[r]===0){
            zeroes ++
        }
        while(zeroes>k){
            if(nums[l]===0){
                zeroes --
            }
            l++
        }
        let width = r-l+1
        mxWidth = Math.max(mxWidth,width)
    }
    return mxWidth
};