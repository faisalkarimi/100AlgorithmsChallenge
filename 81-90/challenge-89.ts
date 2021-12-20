// GIVEN AN ARRAY OF NUMBERS RETURN ALL THE NUMBERS THAT ARE MISSING IN THE ARRAY

const missingNumbers = (numbers: number[]): number[] => {
  const missing: number[] = [];
  for (let i = 1; i <= numbers.length; i++) {
    if (!numbers.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
}