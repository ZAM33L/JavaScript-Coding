var diagonalSum = function(mat) {
    let sumPd = 0
    let sumSd = 0
    let n=mat.length
    for(i=0;i<n;i++){
    sumPd += mat[i][i]
    sumSd += mat[i][n-1-i]
    }
    let sumTd = sumPd+sumSd
    if(n % 2 === 1){
        let mid = Math.floor(n/2)
        sumTd -= mat[mid][mid]
    }
    return sumTd
};