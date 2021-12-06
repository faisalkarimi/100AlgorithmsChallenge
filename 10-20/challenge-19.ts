// BINARY SEARCH USING RECURSION

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (arr: number[], target: number): number => {
    return binarySearchRecursive(arr, target, 0, arr.length - 1);
    
    function binarySearchRecursive (arr: number[], target: number, left: number, right: number): number {
        if (left > right) {
            return -1;
        }
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            return binarySearchRecursive(arr, target, mid + 1, right);
        }
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}


console.log(binarySearch(myArr, 11));
