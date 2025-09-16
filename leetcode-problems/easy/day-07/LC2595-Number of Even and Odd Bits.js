var evenOddBit = function(n) {
    let binOfn = n.toString(2).split('').reverse()
    let binArr = []
    let binEvenArr =0
    let binOddArr = 0
    for(i=0;i<binOfn.length;i++){
        if(binOfn[i] === '1' && i%2 === 0){
            binEvenArr += 1
        }
        else if(binOfn[i] === '1' && i%2 === 1){
            binOddArr += 1
        }
    }
    binArr.push(binEvenArr)
    binArr.push(binOddArr)
    return binArr
};