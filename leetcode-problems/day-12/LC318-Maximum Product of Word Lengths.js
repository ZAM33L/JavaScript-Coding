var maxProduct = function(words) {
    let wordLenProd = 0
    let wordMaxLenProd = 0

    const masks = words.map(word => {
        let mask = 0;
        for (let char of word) {
            mask |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
        }
        return mask;
    });

    for(i=0;i<words.length;i++){
        for(j=0;j<words.length;j++){
            if ((masks[i] & masks[j]) === 0)
            {
            wordLenProd = words[i].length * words[j].length
            wordMaxLenProd = Math.max(wordMaxLenProd,wordLenProd)
            }
        }
    }
    return wordMaxLenProd
};