var sortSentence = function(s) {
    let ws = s.split(" ")
    let ans = []
    for(w of ws){
        let l = w.length
        let position = parseInt(w.charAt(l-1))
        ans[position-1] = w.slice(0, l-1)
    }
    return ans.join(" ")
};

s = "is2 sentence4 This1 a3"
console.log(sortSentence(s))