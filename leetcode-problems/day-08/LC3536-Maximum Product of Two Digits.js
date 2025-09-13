var maxProduct = function(n) {
    const digits = n.toString().split('').map(ch => Number(ch));
    let maxProd = 0;
    const len = digits.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const prod = digits[i] * digits[j];
            if (prod > maxProd) {
                maxProd = prod;
            }
        }
    }

    return maxProd;
};