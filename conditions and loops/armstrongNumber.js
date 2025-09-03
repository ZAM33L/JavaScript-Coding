const armNum = (num)=>{
let og = num
let res = 0
let d =0
let r = 0
while (num>0){
    d = num%10
    res += Math.pow(d,3)
    num = Math.floor(num/10)
}
return res == og
}

console.log(armNum(153))
console.log(armNum(370))
console.log(armNum(999))
console.log(armNum(371))
console.log(armNum(407))