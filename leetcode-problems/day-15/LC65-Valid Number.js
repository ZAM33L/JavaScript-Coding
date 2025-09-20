var isNumber = function(s) {
    s = s.trim();
    if (s.length === 0) return false;

    let seenNum = false;
    let seenDot = false;
    let seenE = false;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (c >= '0' && c <= '9') {
            seenNum = true;
        } 
        else if (c === '.') {
            // Dot only allowed if no dot or no exponent before
            if (seenDot || seenE) {
                return false;
            }
            seenDot = true;
        } 
        else if (c === 'e' || c === 'E') {
            // E only allowed once and only if number appeared before
            if (seenE || !seenNum) {
                return false;
            }
            seenE = true;
            seenNum = false; // reset for checking number after 'e'
        } 
        else if (c === '+' || c === '-') {
            // Sign only allowed at start or immediately after 'e'
            if (i !== 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                return false;
            }
        } 
        else {
            return false;
        }
    }

    return seenNum; // must end with a number
};
