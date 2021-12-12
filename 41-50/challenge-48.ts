// GIVEN AN INTEGER ARRAY RETURN ALL UNIQUE THE TRIPLETS OF INTEGERS THAT CAN BE CREATED FROM THE ARRAY

const triplets = (nums: number[]): number[][] => {
    let triplets = [];
    let i = 0;
    let j = 0;
    let k = 0;

    for (k; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
            triplets.push([nums[i], nums[j], nums[k]]);
        }
        i++;
        j++;
    }
    i = nums.length - 1;
    j = nums.length - 2;
    k = nums.length - 3;
    for (k; k > 0; k--) {
        if (nums[i] + nums[j] + nums[k] === 0) {
            if (!triplets.includes([nums[i], nums[j], nums[k]])) {
                triplets.push([nums[i], nums[j], nums[k]]);
            }
        }
        i--;
        j--;
    }
    return triplets;
}

console.log(triplets([-1, 0, 1, 2, -1, -4]));
