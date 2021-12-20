// IMPLEMENT QUICK SORT

const quickSort92 = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = arr.slice(1).filter(el => el <= pivot);
    const right = arr.slice(1).filter(el => el > pivot);
    return [...quickSort92(left), pivot, ...quickSort92(right)];;
}

const arr92 = [5, 3, 8, 6, 1, 4, 7, 9, 2];
console.log(quickSort92(arr92));