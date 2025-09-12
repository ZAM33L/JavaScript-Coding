var findGCD = function(nums) {
    let l = nums.length
    let sortedNums = nums.sort((a,b) => a-b)
    let minNum = sortedNums[0]
    let maxNum = sortedNums[l-1]

    function gcd(a,b){
        while(b != 0){
            let temp = b
            b =a%b
            a = temp
        }
        return a
    }

    return gcd(minNum,maxNum)
};