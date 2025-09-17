var superPow = function(a, b) {
    const MOD = 1337;

    function modPow(base, exp, mod) {
        let result = 1;
        base = base % mod;

        while (exp > 0) {
            if (exp & 1) {
                result = (result * base) % mod;
            }
            base = (base * base) % mod;
            exp = exp >> 1;
        }

        return result;
    }

    let ans = 1;

    for (let digit of b) {
        ans = (modPow(ans, 10, MOD) * modPow(a, digit, MOD)) % MOD;
    }

    return ans;
};


// not efficient
// var superPow = function(a, b) {
//     let bNum = Number(b.join(''));
//     return a ** bNum ;
// };