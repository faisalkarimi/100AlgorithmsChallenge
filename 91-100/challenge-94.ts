// DETERMINE IF 9X9 SUDOKU BOARD IS VALID USING RECURSION

const isValidSudoku = (board: string[][]): boolean => {
  const check = (
    board: string[][],
    row: number,
    col: number,
    num: number,
  ): boolean => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num.toString()) return false;
      if (board[i][col] === num.toString()) return false;
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[row - row % 3 + i][col - col % 3 + j] === num.toString())
          return false;
      }
    }
    return true;
  };

  const recurse = (
    board: string[][],
    row: number,
    col: number,
  ): boolean => {
    if (row === 9) return true;
    if (col === 9) return recurse(board, row + 1, 0);
    if (board[row][col] !== ".") return recurse(board, row, col + 1);
    for (let i = 1; i <= 9; i++) {
      if (check(board, row, col, i)) {
        board[row][col] = i.toString();
        if (recurse(board, row, col + 1)) return true;
      }
    }
    board[row][col] = ".";
    return false;
  };

  return recurse(board, 0, 0);
};

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board));
