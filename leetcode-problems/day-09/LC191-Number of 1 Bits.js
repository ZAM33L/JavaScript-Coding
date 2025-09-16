var hammingWeight = function(n) {
    let binary = n.toString(2);
    let binArr = binary.toString().split('')
    let count = 0
    for(i=0;i<binArr.length;i++){
        if(binArr[i] === '1'){
            count += 1
        }
    }
    return count
};