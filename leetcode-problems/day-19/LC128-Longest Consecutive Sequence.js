var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    let seen = new Set(nums);
    let longest = 0;
    for (let s of seen) {
        if (!seen.has(s - 1)) {
            let long = 1;
            let current = s;
            while (seen.has(current + 1)) {
                current += 1;
                long += 1;
            }
            longest = Math.max(longest, long);
        }
    }
    return longest;
};
