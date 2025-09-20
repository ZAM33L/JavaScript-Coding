var kMirror = function(k, n) {
    function isPalindrome(s) {
        let left = 0, right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    function baseKPalindrome(num, base) {
        let digits = [];
        while (num > 0) {
            digits.push(num % base);
            num = Math.floor(num / base);
        }
        for (let i = 0, j = digits.length - 1; i < j; i++, j--) {
            if (digits[i] !== digits[j]) return false;
        }
        return true;
    }

    let count = 0;
    let sum = 0;

    for (let length = 1; ; length++) {
        let start = Math.pow(10, Math.floor((length - 1) / 2));
        let end = Math.pow(10, Math.floor((length + 1) / 2));

        for (let half = start; half < end; half++) {
            // Build palindrome
            let s = half.toString();
            // For odd length, discard last digit to avoid duplication in mirrored part
            let reversedPart = s.split('').reverse().join('');
            let palindromeStr = (length % 2 === 0) ? s + reversedPart : s + reversedPart.slice(1);
            let palindromeNum = parseInt(palindromeStr);

            if (baseKPalindrome(palindromeNum, k)) {
                sum += palindromeNum;
                count++;
                if (count === n) return sum;
            }
        }
    }
};


// //not optimal
// var kMirror = function(k, n) {
//     function isPalindrome(s) {
//         let left = 0, right = s.length - 1;
//         while (left < right) {
//             if (s[left] !== s[right]) return false;
//             left++;
//             right--;
//         }
//         return true;
//     }

//     let sum = 0;
//     let count = 0;
//     let i = 1;

//     while (count < n) {
//         let baseKStr = i.toString(k);
//         let base10Str = i.toString(10);

//         if (isPalindrome(base10Str) && isPalindrome(baseKStr)) {
//             sum += i;
//             count++;
//         }

//         i++;
//     }
//     return sum;
// };
