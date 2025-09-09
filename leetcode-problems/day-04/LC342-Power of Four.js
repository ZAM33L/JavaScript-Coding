var isPowerOfFour = function(n) {
    if(n<1) return false
    while(n%4 === 0){
        n /= 4
    }
    return n === 1
};

// or use power of two and an additional condition
//return ((n & (n -1)) === 0 && && (n & 0x55555555) !== 0)