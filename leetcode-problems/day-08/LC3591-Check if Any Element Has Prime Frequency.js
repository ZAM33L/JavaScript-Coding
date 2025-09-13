var checkPrimeFrequency = function (nums) {
    const freqMap = new Map();
    for (let n of nums) {
        freqMap.set(n, (freqMap.get(n) || 0) + 1);
    }

    function isPrime(x) {
        if (x < 2) return false; 
        for (let i = 2; i * i <= x; i++) {
            if (x % i === 0) return false;
        }
        return true;
    }

    for (let count of freqMap.values()) {
        if (isPrime(count)) {
            return true;
        }
    }
    return false;
};