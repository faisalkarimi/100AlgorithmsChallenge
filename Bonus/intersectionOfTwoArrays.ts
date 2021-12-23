// INTERSECTION OF TWO ARRAYS II
// IT SHOULD ONLY SHOW ITEMS THAT ARE IN BOTH ARRAYS WITH EXACT NUMBER OF OCCURENCES

const intersectionOfTwoArrays = (arr1: number[], arr2: number[]): number[] => {
    const result: number[] = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(...arr2.splice(j, 1));
                break;
            }
        }
    }
    return result;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

console.log(intersectionOfTwoArrays(nums1, nums2));
