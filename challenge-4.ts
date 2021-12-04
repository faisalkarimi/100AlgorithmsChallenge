// SUM OF DIGITS IN A NUMBER

const sumDigits = (num: number): number => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumDigits(123));
