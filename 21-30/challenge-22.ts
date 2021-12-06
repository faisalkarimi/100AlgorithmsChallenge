// JUMP SEARCH USING RECURSION

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const jumpSearch = (arr: number[], target: number): number => {
  const blockSize = Math.floor(Math.sqrt(arr.length));
  let start = 0;
   let next = blockSize;

   while (arr[Math.min(next, arr.length) - 1] < target) {
     start = next;
     next += blockSize;
     if (start >= arr.length) {
       return -1;
     }
   }

   for (let i = start; i < Math.min(next, arr.length); i++) {
     if (arr[i] === target) {
       return i;
     }
   }
}

console.log(jumpSearch(arr1, 11));
