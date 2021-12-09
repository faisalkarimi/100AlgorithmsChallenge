// MERGE SORT

const arr3 = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];

const mergeSort = (arr: number[]) => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  function merge(left: number[], right: number[]) {
    const result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  }
  return merge(left, right);
}

console.log(mergeSort(arr3));
