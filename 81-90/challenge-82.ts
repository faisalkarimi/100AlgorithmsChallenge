// JUMP GAME

const canJump = (nums: number[]): boolean => {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i <= max) {
      max = Math.max(max, i + nums[i]);
    }
  }
  return max >= nums.length - 1;
}