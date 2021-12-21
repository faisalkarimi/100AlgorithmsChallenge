// FIND THE MINIMUM ABSOLUTE DIFFERENCE AMONG ARRAY ELEMENTS

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const minAbsoluteDifference = (arr: number[]): number[][] => {
    let minAbsDiff = Infinity;
    let minAbsDiffPair: number[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
        const absDiff = Math.abs(arr[i] - arr[j]);
        if (absDiff < minAbsDiff) {
            minAbsDiff = absDiff;
            minAbsDiffPair = [arr[i], arr[j]];
        }
        }
    }
    return minAbsDiffPair;
}