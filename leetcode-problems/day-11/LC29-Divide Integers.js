var divide = function(dividend, divisor) {
    let result = dividend/divisor
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;
    
    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;
    return Math.trunc(result);
};