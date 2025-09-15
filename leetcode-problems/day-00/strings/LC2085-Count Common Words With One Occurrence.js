var countWords = function(words1, words2) {
    const c1 = {}
    const c2 = {}

    for(word of words1){
        c1[word] = (c1[word] || 0) + 1
    }
    for(word of words2){
        c2[word] = (c2[word] || 0) + 1
    }

    let result = 0

    for(let word in c1){
        if(c1[word]==1 && c2[word]==1){
            result +=1
        }
    }
    return result
};

words1 = ["leetcode","is","amazing","as"]
words2 = ["amazing","leetcode","is"]

console.log(countWords(words1,words2))