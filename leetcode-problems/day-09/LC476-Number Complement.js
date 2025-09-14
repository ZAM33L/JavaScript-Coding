var findComplement = function(num) {
    let binNum = num.toString(2)
    let binLength = binNum.length
    let ones = "1".repeat(binLength);
    let onesNum = parseInt(ones,2)
    let nC = num ^onesNum
    return nC
};