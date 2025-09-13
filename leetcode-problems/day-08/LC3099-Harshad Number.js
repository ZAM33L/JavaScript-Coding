var sumOfTheDigitsOfHarshadNumber = function(x) {
    let nums = x.toString().split('').map(n => Number(n));
    let sum = nums.reduce((acc, val) => acc + val, 0);
    if(x % sum === 0){
        return sum
    }
    return -1
};