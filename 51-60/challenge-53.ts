// GIVEN A MATRIX OF N X N, ROTATE IT 90 DEGREES

const rotateMatrix = (matrix: number[][]): number[][] => {
  const n = matrix.length;
  const result: number[][] = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      result[i][j] = matrix[n - j - 1][i];
    }
  }
  return result;
}

console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
