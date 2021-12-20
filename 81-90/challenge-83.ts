// COMBINATION SUM

const combinationSum = (candidates: number[], target: number): number[][] => {
  const result: number[][] = [];
  const combination: number[] = [];
  const candidatesCopy = [...candidates];
  const candidatesLength = candidatesCopy.length;

  const combinationSumRecursive = (
    index: number,
    target: number,
    combination: number[]
  ): void => {
    if (target === 0) {
      result.push([...combination]);
      return;
    }

    for (let i = index; i < candidatesLength; i++) {
      if (candidatesCopy[i] > target) {
        break;
      }

      combination.push(candidatesCopy[i]);
      combinationSumRecursive(i, target - candidatesCopy[i], combination);
      combination.pop();
    }
  };

  combinationSumRecursive(0, target, combination);

  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
