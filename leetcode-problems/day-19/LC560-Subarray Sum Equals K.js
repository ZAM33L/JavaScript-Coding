var subarraySum = function(nums, k) {
    let answer = 0;
    let prefix = 0;
    let counts = new Map();
    counts.set(0, 1); // To handle subarrays starting from 0

    for(let num of nums) {
        prefix += num;
        answer += counts.get(prefix - k) || 0;
        counts.set(prefix, (counts.get(prefix) || 0) + 1);
    }
    return answer;
};
