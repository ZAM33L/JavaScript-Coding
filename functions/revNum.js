

function revNum(n){
    let r = 0
    while(n>0){
        let d = n%10
        r = r*10 + d
        n = Math.floor(n/10)
    }
    return r
}


console.log(revNum(123))