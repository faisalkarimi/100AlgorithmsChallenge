// FIND MAXIMUM VALUE IN AN ARRAY BY EACH TWO CONSECUTIVE ELEMENTS

const array = [2,3,5,1,6];
const arrayOfSums: number[] = [];

function addEachConsecutiveElements(arr: number[]) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== undefined) {
            arrayOfSums.push(arr[i] + arr[i + 1]);
        }
    }
}

function findMax(arr: number[]) {
    addEachConsecutiveElements(arr);
    let max = arrayOfSums[0];
    for(let i = 1; i < arrayOfSums.length; i++) {
        if (arrayOfSums[i] > max) {
            max = arrayOfSums[i];
        }
    }
    return max;
}

console.log(findMax(array));