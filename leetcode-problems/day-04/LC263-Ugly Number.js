
var isUgly = function(n) {
    if (n<=0) return false
    let myArr = [2,3,5]
    let l= myArr.length
    for(i=0;i<l;i++){
        while(n% myArr[i] === 0){
            n /= myArr[i]
        }
    }
    return n === 1
};