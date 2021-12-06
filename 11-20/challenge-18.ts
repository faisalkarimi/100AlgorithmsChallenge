// IN AN ARRAY OF NUMBERS JUMP FROM FIRST INDEX TO THE MAX NUMBER IN THE ARRAY IN A STEADY PACE

const inputArray: number[] = [5,3,6,7,9];
const pace = 4;

function findMaximum(arr: number[]): number {
    return Math.max(...arr);
}

function countNumberOfJumps() {
    let jumpCount = 0;
    const maxElement = findMaximum(inputArray);
    if (maxElement < pace) {
        return 0;
    } else if (maxElement === pace) {
        return 1;
    } else {
        while (maxElement > jumpCount) {
            jumpCount += pace;
        }
    }

    return jumpCount/pace;
}

console.log(countNumberOfJumps());
