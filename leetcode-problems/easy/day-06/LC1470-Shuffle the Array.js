var shuffle = function(nums, n) {
    let l = nums.length
    let new1 = nums.slice(0,n)
    let new2 = nums.slice(n,l)
    let new12 = []
    for(i=0;i<n;i++){
        new12.push(new1[i])
        new12.push(new2[i])
    }
    return new12
};