function sum(matrix) {
  let n = matrix.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < n; i++) {
    sum1 += matrix[i][i];           // primary diagonal
    sum2 += matrix[i][n - 1 - i];   // secondary diagonal
  }

  return sum1 + sum2;
}