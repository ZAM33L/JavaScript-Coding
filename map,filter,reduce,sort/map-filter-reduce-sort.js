const nums = [4,2,5,1,3]
const doubled = nums.map(num=> num*2)
console.log(doubled)
const even = nums.filter(num=> num%2 ==0)
console.log(even)
const sum = nums.reduce((acc,curr)=>acc+curr,0)
console.log(sum)
const ordered = nums.sort((a,b) => a - b)
console.log(ordered)
const mean = sum / 2
console.log(mean)
const median = nums[Math.floor(nums.length /2)]
console.log(median)

let inputVal = 'George Raymond Richard Martin'
const inputArray = inputVal.split(" ")
const initials = inputArray.map(w=> w[0])
console.log(initials)