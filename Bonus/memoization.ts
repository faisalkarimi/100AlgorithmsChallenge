// MEMOIZATION WITH FIBONACCI NUMBERS

const memoize = (num: number): number => {
    if (num <= 1) {
        return num;
    }
    const memo: number[] = [];

    const fib = (n: number): number => {
        if (n < 2) {
            return n;
        }
        if (memo[n]) {
            return memo[n];
        }
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }
    fib(num);
    return memo[num];
}

console.log(memoize(0));
