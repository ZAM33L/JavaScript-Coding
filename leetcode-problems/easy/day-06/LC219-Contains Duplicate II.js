var containsNearbyDuplicate = function(nums, k) {
    let indxMp = new Map()
    for(let i=0;i<nums.length;i++){
        if(indxMp.has(nums[i]) && i - indxMp.get(nums[i]) <= k){
            return true
        }
        indxMp.set(nums[i],i)
    }
    return false
};
// var containsNearbyDuplicate = function(nums, k) {
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i] === nums[j] && Math.abs(i-j)<=k){
//                 return true
//             }
//         }
//     }
//     return false
// };