var findLucky = function(arr) {
    const map = new Map()
    arr.forEach(num=>{
        map.set(num,(map.get(num)||0)+1)
    }
    )
    let digit = 0
    let digitMax = -1
    for(i=0;i<arr.length;i++){
        if(map.get(arr[i]) === arr[i]){
            digit = arr[i]
            digitMax = Math.max(digitMax,digit)
        }
    }
    return digitMax
};