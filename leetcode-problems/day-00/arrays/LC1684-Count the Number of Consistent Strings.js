var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed)
    let count = 0
    for (const word of words){
        if([...word].every(char => allowedSet.has(char) )){
            count +=1
        }
    }
    return count
};

allowed = "bd"
words = ["ad","bd","aaab","baa","badab"]
console.log(countConsistentStrings(allowed,words))