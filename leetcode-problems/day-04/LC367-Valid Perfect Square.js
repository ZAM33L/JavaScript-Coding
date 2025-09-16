var isPerfectSquare = function(num) {
    if (num < 0) return false;
    let sqroot = Math.sqrt(num)
    return Number.isInteger(sqroot)
};

// let sqroot = Math.sqrt(num);
// let rounded = Math.round(sqroot);
// return rounded * rounded === num;