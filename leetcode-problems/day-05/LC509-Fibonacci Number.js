var fib = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return fib(n-1)+fib(n-2)
};

// //iterative
// if (n === 0) return 0; // base case
//     if (n === 1) return 1; // base case

//     let prev2 = 0;  // fib(0)
//     let prev1 = 1;  // fib(1)
//     let current;

//     for (let i = 2; i <= n; i++) {
//         current = prev1 + prev2; // fib(i) = fib(i-1) + fib(i-2)
//         prev2 = prev1;
//         prev1 = current;
//     }

//     return current;