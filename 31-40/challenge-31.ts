// BUCKET SORT

const arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

const bucketSort = (arr: number[]) => {
  const bucket: number[][] = [];
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const bucketSize = (max - min) / arr.length;
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
    if (!bucket[bucketIndex]) {
      bucket[bucketIndex] = [];
    }
    bucket[bucketIndex].push(arr[i]);
  }
  const sorted = [];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i]) {
      bucket[i].sort((a, b) => a - b);
      sorted.push(...bucket[i]);
    }
  }
  return sorted;
}

console.log(bucketSort(arr));
