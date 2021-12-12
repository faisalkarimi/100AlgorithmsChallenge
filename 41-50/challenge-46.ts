// FIND THE MEDIAN FOR TWO SORTED ARRAYS

const median = (arr1: number[], arr2: number[]): number => {
  const sorted = arr1.concat(arr2).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

const arr12 = [1, 2, 3, 4, 5];
const arr22 = [6, 7, 8, 9, 10];
console.log(median(arr12, arr22));
