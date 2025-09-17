var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 0) return 0;

    
    function robLinear(houses) {
        let prev_robbed = 0;
        let prev_robbed_not = 0;

        for (let num of houses) {
            let temp = Math.max(prev_robbed, prev_robbed_not);
            prev_robbed = prev_robbed_not + num;
            prev_robbed_not = temp;
        }
        return Math.max(prev_robbed, prev_robbed_not);
    }


    let robSkipFirst = robLinear(nums.slice(1));     
    let robSkipLast = robLinear(nums.slice(0, -1));  

    return Math.max(robSkipFirst, robSkipLast);
};