var truncateSentence = function(s, k) {
    const words = s.split(" ")
    const first_k_words = words.slice(0,k)
    const truncated_sentence = first_k_words.join(" ")
    return truncated_sentence
};

s = "Hello how are you Contestant"
k = 4
console.log(truncateSentence(s,k))