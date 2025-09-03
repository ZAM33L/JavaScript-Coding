var arrayStringsAreEqual = function(word1, word2) {
    let w1 = word1.join("")
    let w2 = word2.join("")
    return w1 == w2
};
a1 = ["a","bcd"]
a2 = ["ab","cd"]
console.log(arrayStringsAreEqual(a1,a2))