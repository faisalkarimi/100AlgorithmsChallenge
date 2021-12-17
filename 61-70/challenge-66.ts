// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

function numTrees(n: number): number {
    function Helper(start: number, end: number): number {
        if (start > end) return 1;
        let count = 0;
        for (let i = start; i <= end; i++) {
            count += Helper(start, i - 1) * Helper(i + 1, end);
        }
        return count;
    }
    return Helper(1, n);
}

console.log(numTrees(3));
