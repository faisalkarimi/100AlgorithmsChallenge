// FIND UNIQUE PATHS FROM POINT A TO POINT B IN A GRID WHERE ROBOT CAN ONLY MOVE IN A RECTANGULAR GRID

const uniquePaths = (m: number, n: number): number => {
    if (m === 1 || n === 1) {
        return 1;
    }
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
}
console.log(uniquePaths(3, 7));
