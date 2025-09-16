var isThree = function(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
            if (count > 3) return false;  // If more than 3 divisors, return false early
        }
    }
    
    return count === 3;
};
