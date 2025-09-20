//optimal one
function isPalindrome(x) {
    let s = x.toString();
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

var superpalindromesInRange = function(left, right) {
    const L = BigInt(left);
    const R = BigInt(right);
    let count = 0;

    // Generate palindromes up to 10^5 (since (10^5)^2 = 10^10, max range 10^18)
    for (let k = 1; k < 100000; k++) {
        // Odd length palindrome
        let s = k.toString();
        let rev = s.split('').reverse().join('').slice(1); // remove last digit
        let palindromeStr = s + rev;
        let palindrome = BigInt(palindromeStr);

        let square = palindrome * palindrome;
        if (square > R) break;
        if (square >= L && isPalindrome(square)) {
            count++;
        }

        // Even length palindrome
        palindromeStr = s + s.split('').reverse().join('');
        palindrome = BigInt(palindromeStr);
        square = palindrome * palindrome;
        if (square > R) continue;
        if (square >= L && isPalindrome(square)) {
            count++;
        }
    }

    return count;
};

// Example call:
console.log(superpalindromesInRange("4", "1000")); // Output: 4 (4, 9, 121, 484)


// //not optimal
// var superpalindromesInRange = function(left, right) {
//     function isPalindrome(x) {
//         let s = x.toString();
//         let left = 0, right = s.length - 1;
//         while (left < right) {
//             if (s[left] !== s[right]) return false;
//             left++;
//             right--;
//         }
//         return true;
//     }
    
//     let count = 0;
//     const L = BigInt(left);
//     const R = BigInt(right);

//     for (let i = L; i <= R; i = i + 1n) {
//         const sqrt = sqrtBigInt(i);
//         if (sqrt * sqrt === i && isPalindrome(i.toString()) && isPalindrome(sqrt.toString())) {
//             count++;
//         }
//     }
//     return count;
// };


// function sqrtBigInt(n) {
//     if (n < 0n) throw 'Negative square root not supported';
//     if (n < 2n) return n;
//     let small = 1n, large = n;
//     while (small <= large) {
//         const mid = (small + large) >> 1n;
//         const sq = mid * mid;
//         if (sq === n) return mid;
//         else if (sq < n) small = mid + 1n;
//         else large = mid - 1n;
//     }
//     return large;
// }