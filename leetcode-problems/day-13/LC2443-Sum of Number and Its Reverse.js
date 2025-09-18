var sumOfNumberAndReverse = function(num) {
    for (let i = 0; i <= num; i++) {
        let diff = num - i;
        let revDiff = parseInt(diff.toString().split('').reverse().join(''), 10);
        let sum = diff + revDiff;

        if (sum === num) {
            return true;
        }
    }
    return false;
};