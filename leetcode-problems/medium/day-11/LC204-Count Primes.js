//my code
// var countPrimes = function(n) {
//     let count = 0;
//     for (let i = 2; i < n; i++) {   
//         if (isPrime(i)) {
//             count++;
//         }
//     }
//     return count;

//     function isPrime(number) {
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) {  
//                 return false;
//             }
//         }
//         return true;
//     }
// };
var countPrimes = function(n) {
    if (n <= 2) return 0;
    const isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }
    return count;
};