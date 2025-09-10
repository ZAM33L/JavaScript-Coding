var sortedSquares = function(nums) {
    return nums.map(num => Math.abs(num)).sort((a,b) => a-b).map(number => number*number)
};