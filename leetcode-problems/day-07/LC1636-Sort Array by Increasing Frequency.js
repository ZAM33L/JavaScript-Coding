var frequencySort = function(nums) {
   
    let freqMap = new Map();
    nums.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });
        nums.sort((a, b) => {
        let freqDiff = freqMap.get(a) - freqMap.get(b);
        if (freqDiff !== 0) return freqDiff;
        return b - a; 
    });
    return nums;
};