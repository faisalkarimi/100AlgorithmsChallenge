// DETERMINE IF A NUMBER IS POWER OF TWO


const isPowerOfTwo = (num: number): boolean => {
    if (num === 0) return false;
    while (num % 2 === 0) {
        num /= 2;
    }
    return num === 1;
}

console.log(isPowerOfTwo(16));
