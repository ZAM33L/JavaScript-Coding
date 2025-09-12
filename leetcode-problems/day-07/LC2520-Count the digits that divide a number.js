var countDigits = function(num) {
    let count = 0
    let numArr = num.toString().split('')
    for(i=0;i<numArr.length;i++){
        if(num % numArr[i] === 0){
            count += 1
        }
    }
    return count
};