var isPalindrome = function(s) {
    let t = s.replace(/[^a-z0-9]/gi,'').toLowerCase()
    let r = t.split(' ').reverse().join(" ")
    return t === r
    //return str === str.split('').reverse().join('') this is the reverse logic for strings
};