
const plusOne = (digits: number[]): number[] => {
    const last = digits[digits.length - 1];
    if (last === 9) {
        digits[digits.length - 1] = 0;
        return plusOne(digits);
    }
    digits[digits.length - 1] = last + 1;
    return digits;
}
console.log(plusOne([9]));
