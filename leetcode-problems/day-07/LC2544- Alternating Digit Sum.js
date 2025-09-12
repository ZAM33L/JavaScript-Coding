var alternateDigitSum = function(n) {
    let nArr = n.toString().split('')
    let sum = 0
    for(i=0;i<nArr.length;i++){
        if(i%2 === 0){
            sum += Number(nArr[i])
        }
        else{
             sum -= Number(nArr[i])
        }
    }
    return sum
};