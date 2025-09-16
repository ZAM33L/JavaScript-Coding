var twoSum = function(nums, target) {
     const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement) + 1, i + 1]; // return 1-based indices
                    //complement's index     //i's index
        }
        map.set(nums[i], i);
    }
    return [];
};