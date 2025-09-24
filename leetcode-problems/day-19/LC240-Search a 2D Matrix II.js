var searchMatrix = function(matrix, target) {
    let row_l = matrix.length
    let col_l = matrix[0].length
    let row_i = row_l -1
    let col_i = 0

    while(row_i >= 0 && col_i < col_l){
        if(matrix[row_i][col_i] === target){
            return true
        }
        if(matrix[row_i][col_i] > target){
            row_i -= 1
        }
        else{
            col_i -= 1
        }
    }
    return false
};