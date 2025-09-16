var lengthOfLastWord = function(s) {
    let sArr = s.trim().split(" ")
    let sLen = sArr.length
    return sArr[sLen-1].length
};

s = "Hello World"
console.log(lengthOfLastWord(s))