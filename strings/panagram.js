var checkIfPangram = function(sentence) {
    return new Set(sentence).size === 26
};

sentence = "thequickbrownfoxjumpsoverthelazydog"
console.log(checkIfPangram(sentence))