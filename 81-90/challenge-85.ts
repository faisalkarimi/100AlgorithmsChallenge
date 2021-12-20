// SEARCH IN ROTATED SORTED ARRAY

const searchInRotatedSortedArray = (arr: number[], target: number): number => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[left] <= arr[mid] && arr[left] <= target && target < arr[mid]) {
            right = mid - 1;
        } else if (arr[left] > arr[mid] && (target >= arr[left] || target < arr[mid])) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

const arr21 = [4, 5, 6, 7, 0, 1, 2];
console.log(searchInRotatedSortedArray(arr21, 0));