let a = Number(5)
let b = Number(3)
console.log(a)
console.log(b)

const fn = (a, b) => {
    if (a > 0 && b < 0) {
        return "a is positive and b is negative"
    }
    else if (a < 0 && b > 0) {
        return "a is positive and b is negative"
    }
    else if(a<0 && b<0){
        return "a and b are negative"
    }
    else{
        return "a and b are positive"
    }
}
console.log(fn(a,b))