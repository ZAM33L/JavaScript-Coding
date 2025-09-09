var checkIfExist = function(arr) {
    let n = arr.length
    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            if(arr[i] === 2*arr[j]){
                return true
            }
        }
    }
    return false
};