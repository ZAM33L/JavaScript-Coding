var hammingDistance = function(x, y) {
    let xorResult = x ^ y;

    let binary = xorResult.toString(2);

    let zeroCount = 0;
    for (let ch of binary) {
        if (ch === '1') oneCount++;
    }

    return oneCount;
};