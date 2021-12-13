// IMPLEMENT POW FUNCTION FOR POSITIVE AND NEGATIVE NUMBERS USING RECURSION INCLUDING RANGE CHECKS
const pow = (base, exponent) => {
  if (exponent === 0) return 1;
  if (exponent >= Math.pow(2, 31)) {
    return 0;
  }
  if (exponent < 0) return 1 / pow(base, -exponent);
  return base * pow(base, exponent - 1);
};
// console.log(pow(0.00001, 2147483647));
console.log(Math.pow(0.00001, 2147483647));
// console.log(pow(2, 31));
