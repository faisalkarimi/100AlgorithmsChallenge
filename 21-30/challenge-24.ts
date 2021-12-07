// BUBBLE SORT

const arr = [5, 3, 8, 6, 1, 4, 2, 7];

const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const bubbleSort = (arr: number[]) => {
  let noSwaps: boolean;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
    return arr;
}

console.log(bubbleSort(arr));
