var largestNumber = function(nums) {
    let strs = nums.map(String)
    strs.sort((a,b) => (b+a).localeCompare(a+b))
    let result = strs.join('')
    return result[0] === '0'?'0':result
};