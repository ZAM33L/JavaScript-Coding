var threeConsecutiveOdds = function (arr) {
    let count = 0
    let countMax = -1
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            count += 1
            if (count === 3) {
                return true
            }
        }
        else {
            count = 0
        }
    }
    return false
};