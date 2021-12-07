// EXPONENTIAL SEARCH

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const exponentialSearch = (arr: number[], num: number): number => {
    let bound = 1;
    while (bound < arr.length && arr[bound] < num) {
        bound *= 2;

        let left = bound / 2;
        let right = arr.length - 1;

        return binarySearchRecursive(arr, num, left, right);
    }

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

console.log(exponentialSearch(arr2, 3));
