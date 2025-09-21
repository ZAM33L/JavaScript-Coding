var setZeroes = function(matrix) {
    let r = matrix.length;
    let l = matrix[0].length;

    let setZeroR = new Array(r).fill(false);
    let setZeroL = new Array(l).fill(false);

    // Mark rows and columns to zero
    for(let i = 0; i < r; i++) {
        for(let j = 0; j < l; j++) {
            if(matrix[i][j] === 0) {
                setZeroR[i] = true;  // Mark row i
                setZeroL[j] = true;  // Mark column j
            }
        }
    }

    // Zero marked rows
    for(let i = 0; i < r; i++) {
        if(setZeroR[i]) {
            for(let j = 0; j < l; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero marked columns
    for(let j = 0; j < l; j++) {
        if(setZeroL[j]) {
            for(let i = 0; i < r; i++) {
                matrix[i][j] = 0;
            }
        }
    }
};
