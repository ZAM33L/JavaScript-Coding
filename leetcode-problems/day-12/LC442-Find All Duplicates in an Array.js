var findDuplicates = function(nums) {
    let dupes = []
    let seen = new Set()
    
    for (let num of nums) {
        if (seen.has(num)) {
            dupes.push(num);
        } else {
            seen.add(num);
        }
    }
    return dupes
};