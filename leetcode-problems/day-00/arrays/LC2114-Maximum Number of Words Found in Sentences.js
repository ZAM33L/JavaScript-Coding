var mostWordsFound = function (sentences) {
    let max = 0
    for (sentence of sentences) {
        let noOfWords = sentence.split(" ").length
        if (noOfWords > max) {
            max = noOfWords
        }
    }
    return max
};


sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much","hi i am new to work here"]
console.log(mostWordsFound(sentences))