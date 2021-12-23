// FIND A NUMBER THAT APPEARS ONLY ONCE IN AN ARRAY

const singleNumber = (nums: number[]): number => {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
}

console.log(singleNumber([1,2,1,3,2]));
