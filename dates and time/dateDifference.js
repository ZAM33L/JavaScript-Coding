const d1 = new Date('2020-01-05')
const d2 = new Date('2020-01-01')

const dateDiffMs = d1 - d2 //in milliseconds
const dateDiffSec = dateDiffMs / 1000 //seconds
const dateDiffMin = dateDiffSec / 60 //minutes
const dateDiffHr = dateDiffMin /60 //hours
const dateDiffDy = dateDiffHr/24 //days

console.log(dateDiffMs)
console.log(dateDiffSec)
console.log(dateDiffMin)
console.log(dateDiffHr)
console.log(dateDiffDy)