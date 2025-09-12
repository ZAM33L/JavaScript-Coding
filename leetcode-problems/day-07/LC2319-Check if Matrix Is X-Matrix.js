var checkXMatrix = function(grid) {
    
    let n = grid.length
    //checking diagonals first
    for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if(i === j || j === n-i-1){
            if (grid[i][j] === 0) return false
        }
        else{
            if(grid[i][j] !== 0) return false
        }
    }
    }
    return true
};