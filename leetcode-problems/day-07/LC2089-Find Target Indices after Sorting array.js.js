var targetIndices = function(nums, target) {
    let newNums = nums.sort((a,b) => a-b)
    let tArr = []
    for(let i=0;i<newNums.length;i++){
        if(newNums[i] === target){
            tArr.push[i]
        }
    }
    return tArr
};