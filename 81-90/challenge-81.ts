// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// implement using binary search

const array = [1,3,5,6];
const target = 2;

const binarySearch = (array: number[], target: number): number => {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== target && start <= end) {
    if (target < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === target ? middle : middle + 1;
}

console.log(binarySearch(array, target));
