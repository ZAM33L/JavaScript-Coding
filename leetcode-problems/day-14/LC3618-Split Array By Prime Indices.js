/**
 * @param {number[]} nums
 * @return {number}
 */
var splitArray = function (nums) {
    let arrPrime = []
    let arrPrimeNot = []
    let l = nums.length

    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (i = 0; i < l; i++) {
         if (isPrime(i)) {
            arrPrime.push(nums[i]);
        }
        else{
            arrPrimeNot.push(nums[i])
        }
    }

    let sumPrime = arrPrime.reduce((acc,curr) => acc+curr , 0)
    let sumPrimeNot = arrPrimeNot.reduce((acc,curr) => acc+curr , 0)
    let sumDiff = Math.abs(sumPrime - sumPrimeNot)

    return sumDiff
};