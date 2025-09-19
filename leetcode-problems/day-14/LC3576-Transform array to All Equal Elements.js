var canMakeEqual = function(nums, k) {
    function check(target) {
        let operations = 0;
        let currentSign = 1;
        for (let i = 0; i < nums.length - 1; i++) {
            let value = nums[i] * currentSign;
            if (value === target) {
                currentSign = 1;
            } else {
                currentSign = -1;
                operations++;
            }
        }
        return operations <= k && nums[nums.length - 1] * currentSign === target;
    }
    
    return check(1) || check(-1);
};

// //not optimal
// // var canMakeEqual = function(nums, k) {
// //     let l = nums.length

// //     while(k>0){
// //         for(i=0;i<l-1;i++){
// //              nums[i] = nums[i] * -1
// //              nums[i+1] = nums[i+1] * -1
// //         }
// //         k--
// //     }
// //     const allEqual = nums.every(val => val === nums[0]);

// //     return allEqual
// // };