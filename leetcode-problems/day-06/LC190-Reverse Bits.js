var reverseBits = function(n) {
    let binD = n.toString(2).padStart(32,'0')
    let revBinD = binD.split('').reverse().join('')
    let revD = parseInt(revBinD,2)
    return revD
};