var replaceDigits = function(s) {
    let t = []
    let n = s.length
    for(let i=0;i<n;i++){
        if(i%2 == 0){
            t.push(s[i])
        }
        else{
            let digit = Number(s[i])
            let prevCharCode = s[i-1].charCodeAt(0)
            let letter = String.fromCharCode(prevCharCode+digit)
            t.push(letter)
        }
    }
    return t.join(" ")
};

s = "a1b2c3d4e"
console.log(replaceDigits(s))