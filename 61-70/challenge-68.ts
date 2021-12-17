// MERGE TWO SORTED ARRAYS IN PLACE INTO ARRAY1

const array1 = [1,2,3,0,0,0];
const array2 = [2,5,6];

const merge = (array1: number[], m: number, array2: number[], n: number): number[] => {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (k >= 0) {
        if (i < 0) {
            array1[k] = array2[j];
            j--;
        } else if (j < 0) {
            array1[k] = array1[i];
            i--;
        } else if (array1[i] > array2[j]) {
            array1[k] = array1[i];
            i--;
        } else {
            array1[k] = array2[j];
            j--;
        }
        k--;
    }
    return array1;
}

console.log(merge(array1, 3, array2, 3));
