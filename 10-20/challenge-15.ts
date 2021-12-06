// FIND MAXIMAL ABSOLUTE DIFFERENCE BETWEEN ADJACENT ELEMENTS IN ARRAY

const myArray: number[] = [2,4,1,0];

const differenceInEachPair = (array: number[]): number[] => {
    const differences: number[] = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] !== undefined) {
            differences.push(Math.abs(array[i] - array[i + 1]));
        }
    }
    return differences;
}

const maxDifference = (array: number[]): number => {
    const differences = differenceInEachPair(array);
    return Math.max(...differences);
}

console.log(maxDifference(myArray));


