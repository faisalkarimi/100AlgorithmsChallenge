// INSERTION SORT

const array = [5, 2, 4, 6, 1, 3];

const insertionSort = (array: number[]) => {
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

console.log(insertionSort(array));
