// TERNARY SEARCH USING RECURSION

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ternarySearch = (arr: number[], target: number): number => {
    return ternarySearchRec(arr, target, 0, arr.length - 1);

    function ternarySearchRec (arr: number[], target: number, left: number, right: number): number {
        if (left > right) {
            return -1;
        }
    
        const partitionSize = Math.floor((right - left) / 3);
        let mid1 = left + partitionSize;
        let mid2 = right - partitionSize;
    
        if (arr[mid1] === target) {
            return mid1;
        } else if (arr[mid2] === target) {
            return mid2;
        } else if (arr[mid1] > target) {
            return ternarySearchRec(arr, target, left, mid1 - 1);
        } else if (arr[mid2] < target) {
            return ternarySearchRec(arr, target, mid2 + 1, right);
        } else {
            return ternarySearchRec(arr, target, mid1 + 1, mid2 - 1);
        }
        
    }
}

console.log(ternarySearch(arr, 11));
