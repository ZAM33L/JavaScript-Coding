var restoreString = function(s, indices) {
    let n = s.length
    let newArr = []
    for(i=0;i<n;i++){
        index = indices[i]
        newArr[index] = s.charAt(i)
    }
    return newArr.join("").toString()
};
s = "codeleet"
indices = [4,5,6,7,0,2,1,3]
console.log(restoreString(s,indices))