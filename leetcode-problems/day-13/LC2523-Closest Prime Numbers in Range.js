var closestPrimes = function(left, right) {
    let primeArr = [];

    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for(let i = 3; i * i <= num; i += 2) {
            if(num % i === 0) return false;
        }
        return true;
    }

    for(let num = left; num <= right; num++) {
        if(isPrime(num)) {
            primeArr.push(num);
        }
    }
    
    if(primeArr.length < 2) return [-1, -1];
    
    let minDiff = Infinity;
    let closestPair = [-1, -1];

    for(let i = 1; i < primeArr.length; i++) {
        let diff = primeArr[i] - primeArr[i - 1];
        if(diff < minDiff) {
            minDiff = diff;
            closestPair = [primeArr[i - 1], primeArr[i]];
        }
    }
    
    return closestPair;
};
