// ROTATE ARRAY FOR LARGE NUMBERS

const rotateArray = (nums: number[], k: number): number[] => {
    if (nums.length === 1) return nums;
    if (k > nums.length) k = k % nums.length;
    const reverse = (arr: number[], start: number, end: number): number[] => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
        return arr;
    }

    reverse(nums, 0, nums.length - 1);

    reverse(nums, 0, k - 1);

    reverse(nums, k, nums.length - 1);

    return nums;
}

const nums = [-1];
const k = 2;

console.log(rotateArray(nums, k));
