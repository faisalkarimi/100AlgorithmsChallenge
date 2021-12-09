// COUNTING SORT

const arr5 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

let countingSort = (arr: number[]) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j++] = i;
            count[i]--;
        }
    }
    return arr;
};

console.log(countingSort(arr5));
