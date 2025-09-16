// var removeElements = function(nums,k) { 
//     if(nums.length === 0) return 0
//     nums = nums.filter(item => item !=k)
//     return nums.length
// };

var removeElement = function(nums, k) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== k) {
            nums[i] = nums[j]; 
            i++;
        }
    }
    
    return i; 
};


nums = [1,1,2]
k = 1
console.log(removeElement(nums,k))