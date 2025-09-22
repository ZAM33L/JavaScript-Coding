function productExceptSelf(nums) {
  const n = nums.length;
  const prefix = Array(n).fill(1);
  const suffix = Array(n).fill(1);
  const result = Array(n);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i-1] * nums[i-1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i+1] * nums[i+1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
}

// not optimal
// var productExceptSelf = function(nums) {
//     let result = []
//     for(i=0;i<nums.length;i++){
//         let prod = 1
//         for(j=0;j<nums.length;j++){
//             if(j !== i){
//                 prod *= nums[j]
//             }
//         }
//         result.push(prod)
//     }
//     return result
// };