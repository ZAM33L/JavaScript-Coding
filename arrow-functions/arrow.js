let num1 = 5
let num2 = 3
const square = (num) => num*num
console.log(square(num1))
const sum = (a,b) => a+b
const difference = (a,b) => a-b
console.log(sum(num1,num2))
console.log(difference(num1,num2))

const nums = [4,2,5,1,3]

const total= nums.reduce((acc,curr)=>acc+curr,0)
console.log(total)