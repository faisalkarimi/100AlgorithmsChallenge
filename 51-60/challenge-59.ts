// REMOVE DUPLICATES FROM SORTED ARRAY IN PLACE

const removeDuplicatesFromArray = (arr: number[]|string[]): number[] => {
    if (arr.length === 0) return [];
    let k = arr.length;
    for (let i = 0; i < k; i++) {
        if (arr[i] === arr[i + 1]) {
            arr[i] = '_';
            arr.push(arr.splice(i, 1)[0]);
            k--;
            i--;
        }
    }
    return arr;
}

console.log(removeDuplicatesFromArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

