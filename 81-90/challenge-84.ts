
const exist = (board: string[][], word: string): boolean => {
    const m = board.length;
    const n = board[0].length;
    const visited = Array(m).fill(Array(n).fill(false));
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    const dfs = (i: number, j: number, k: number): boolean => {
        if (k === word.length) return true;
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] !== word[k]) return false;
        visited[i][j] = true;
        for (let dir of dirs) {
        if (dfs(i + dir[0], j + dir[1], k + 1)) return true;
        }
        visited[i][j] = false;
        return false;
    }
    return dfs(0, 0, 0);
}

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word1 = "ABCCED"
console.log(exist(board, word1));