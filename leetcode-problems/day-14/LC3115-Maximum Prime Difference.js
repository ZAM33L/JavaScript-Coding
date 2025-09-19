var maximumPrimeDifference = function(nums) {
    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    let primeIndices = [];
    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i])) {
            primeIndices.push(i);
        }
    }

    if (primeIndices.length < 2) return 0;  

    return primeIndices[primeIndices.length - 1] - primeIndices[0];
};
