// REPLACE EACH ITEM IN ARRAY WITH SMALLER ITEM ON THE LEFTHAND SIDE

const items: number[] = [3,5,2,4,5];

function arrayPreviousLess(arr: number[]) {
    let result: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] < arr[i]) {
                result.push(arr[j]);
                break;
            } else {
                result.push(-1);
                break;
            }
        }
    }
    
    return result;
}

console.log(arrayPreviousLess(items));
