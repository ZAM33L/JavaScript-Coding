var rob = function(nums) {
    let prev_robbed = 0
    let prev_robbed_not = 0

    for(let num of nums){
        let temp = Math.max(prev_robbed,prev_robbed_not)
        prev_robbed = prev_robbed_not + num
        prev_robbed_not = temp
    }
    return Math.max(prev_robbed,prev_robbed_not)
};