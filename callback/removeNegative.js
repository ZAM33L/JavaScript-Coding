const nums = [-1,2,-3,4,-5,6]
console.log(nums)

const isPositive = (num) => (num) >= 0

const positiveNums = nums.filter(isPositive)
console.log(positiveNums)