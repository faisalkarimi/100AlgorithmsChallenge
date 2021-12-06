// DETERMINE IF AN ARRAY IS ALMOST SORTED

const nums: number[] = [1,3,2];

const almostSorted = (arr: number[]): boolean => {
    let counter: number = 0;
    arr.reduce((acc, curr) => {
        if (curr < acc) {
            counter++;
        }
        return curr;
    }, 0)
    return counter > 1 ? false : true;
}

console.log(almostSorted(nums));
