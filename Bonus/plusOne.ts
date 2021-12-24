// GIVEN AN ARRAY OF NUMBERS AND A NUMBER

const plusOne1 = (arr: number[]): number[] => {
    let lastIndex = arr.length - 1;
    let lastNum = arr[lastIndex];
    while (lastIndex >= 0) {
        if (lastNum === 9) {
            if (lastIndex === 0) {
                arr[lastIndex] = 0;
                arr.unshift(1);
                return arr;
            }
            arr[lastIndex] = 0;
            lastIndex--;
            lastNum = arr[lastIndex];
        } else {
            arr[lastIndex] = lastNum + 1;
            break;
        }
    }
    return arr;
}

console.log(plusOne1([9, 9, 9]));
