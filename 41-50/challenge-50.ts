// IMPLEMENT POW FUNCTION FOR POSITIVE AND NEGATIVE NUMBERS USING RECURSION INCLUDING RANGE CHECKS

const pow = (x: number, n: number): number => {
    if ((n > Math.pow(2, 31)
    || n < -Math.pow(2, 31))) {
       return NaN;
   }
    if (n < 0) {
        return 1 / pow(x, -n);
    }
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }
    return x * pow(x, n - 1);
}

console.log(pow(0.00001, 2147483647));
