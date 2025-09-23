var rotate = function(matrix) {
    const n = matrix.length;

    let l = 0, r = n - 1;

    // Process layers from the outside in
    while (l < r) {
        for (let i = 0; i < r - l; i++) {
            let top = l, bottom = r;

            // Save top-left value
            const topLeft = matrix[top][l + i];

            // Move bottom-left to top-left
            matrix[top][l + i] = matrix[bottom - i][l];

            // Move bottom-right to bottom-left
            matrix[bottom - i][l] = matrix[bottom][r - i];

            // Move top-right to bottom-right
            matrix[bottom][r - i] = matrix[top + i][r];

            // Move top-left (saved) to top-right
            matrix[top + i][r] = topLeft;
        }
        l++;   // Move in to the next layer
        r--;
    }
};
