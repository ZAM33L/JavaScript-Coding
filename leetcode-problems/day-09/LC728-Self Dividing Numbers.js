var selfDividingNumbers = function(left, right) {
    let result = [];

    for (let num = left; num <= right; num++) {
        let digits = num.toString().split('');
        let isSelfDividing = true;

        for (let d of digits) {
            let digit = Number(d);
            if (digit === 0 || num % digit !== 0) {
                isSelfDividing = false;
                break;
            }
        }

        if (isSelfDividing) {
            result.push(num);
        }
    }

    return result;
};