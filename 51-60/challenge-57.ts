// GIVEN AN N PAIR OF PARENTHESES, GENERATE ALL THE POSSIBILITY OF OPENING AND CLOSING PARENTHESES

const generateParenthesis = (n: number): string[] => {
  const result: string[] = [];
  const generate = (left: number, right: number, str: string = ''): void => {
    if (left === 0 && right === 0) {
      result.push(str);
    }
    if (left > 0) {
      generate(left - 1, right + 1, str + '(');
    }
    if (right > 0) {
      generate(left, right - 1, str + ')');
    }
  };
  generate(n, 0);
  return result;
}

console.log(generateParenthesis(3));
