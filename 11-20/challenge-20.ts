// BINARY SEARCH USING ITERATIVE METHOD

const myArrIter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearchIter = (arr: number[], target: number): number => {
  let left: number = 0;
  let right: number = arr.length - 1;
  let mid: number;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearchIter(myArrIter, 5));
