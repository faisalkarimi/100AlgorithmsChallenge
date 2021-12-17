// FIND MAXIMUM SUBARRAY


function findMaxSubarray(arr: number[]): number {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}