// RETURN ALL POSSIBLE UNIQUE PERMUTATIONS

const uniquePermute = (nums: number[]): number[][] => {
    let permutations: number[][] = [];
    const permute = (nums: number[], permutation: number[]): void => {
        if (nums.length === 0) {
        permutations.push(permutation);
        } else {
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const newNums = [...nums];
            newNums.splice(i, 1);
            const newPermutation = [...permutation];
            newPermutation.push(num);
            permute(newNums, newPermutation);
        }
        }
    };
    permute(nums, []);
    return permutations;
}

console.log(uniquePermute([1, 1, 2]));
