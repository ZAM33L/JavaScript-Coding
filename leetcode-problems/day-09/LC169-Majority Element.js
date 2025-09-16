var majorityElement = function(nums) {
    const freqMap = new Map();
    
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    let n = nums.length;
    
    for (let [num, count] of freqMap.entries()) {
        if (count > Math.floor(n / 2)) {
            return num;
        }
    }
};