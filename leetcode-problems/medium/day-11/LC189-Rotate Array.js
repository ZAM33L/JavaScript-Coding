//clockwise
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; 
    const rotated = nums.slice(n - k).concat(nums.slice(0, n - k));
    for(let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};

//anti-clockwise
// var rotateLeft = function(nums, k) {
//     const n = nums.length;
//     k = k % n;
//     const rotated = nums.slice(k).concat(nums.slice(0, k));
//     for (let i=0; i<n; i++) {
//         nums[i] = rotated[i];
//     }
// };