
var commonFactors = function(a, b) {
   let n = Math.min(a, b);
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (a % i === 0 && b % i === 0) {
            count++;
        }
    }
    return count;
};