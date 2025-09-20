//not optimal
// var countBinaryPalindromes = function(n) {
//     function isPalindrome(s) {
//         let left = 0, right = s.length - 1;
//         while (left < right) {
//             if (s[left] !== s[right]) return false;
//             left++;
//             right--;
//         }
//         return true;
//     }
    
//     let count = 0;
//     for (let i = 0; i <= n; i++) {
//         let iBase2 = i.toString(2);
//         if (isPalindrome(iBase2)) {
//             count++;
//         }
//     }
//     return count;
// };

