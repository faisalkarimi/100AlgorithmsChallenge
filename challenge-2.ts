// SUM OF TWO NUMBERS

const sum = (a: number, b: number): number => a + b;

console.log(sum(1, 2));

// SUM OF VARIABLE NUMBERS OF ARGUMENTS

const sumOfNumbers = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfNumbers(1, 2, 3, 4, 5));