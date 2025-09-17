var maximumGap = function (nums) {
    if (nums.length < 2) return 0;

    let sortedNums = nums.sort((a, b) => a - b);

    let maxDiff = 0;
    for (let i = 0; i < sortedNums.length - 1; i++) {
        let diff = sortedNums[i + 1] - sortedNums[i];
        maxDiff = Math.max(maxDiff, diff);
    }

    return maxDiff;
};