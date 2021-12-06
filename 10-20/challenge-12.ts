// FIND OUT IF TWO ARRAYS ARE SIMILAR

const array1: number[] = [1, 2, 2];
const array2: number[] = [2, 1, 1];

const isSimilar = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return sumUp(arr1) === sumUp(arr2);
}

const sumUp = (arr: number[]): number => {
    return arr.reduce((acc, curr) => acc + curr);
}

console.log(isSimilar(array1, array2));
