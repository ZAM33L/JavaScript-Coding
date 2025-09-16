
var firstUniqChar = function(s) {
    let sMap = new Map()

    for(let c of s){
        sMap.set(c,(sMap.get(c)||0)+1 )
    }
    for(i=0;i<s.length;i++){
        if (sMap.get(s[i]) == 1){
            return i
        }
    }
    return -1
};