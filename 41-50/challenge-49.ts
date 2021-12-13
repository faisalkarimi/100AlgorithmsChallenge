// LETTER COMIBINATION OF A PHONE NUMBER
interface Phone {
    [key: number]: string[];
}
const letterCombinations = (digits: string): string[] => {
  const phone: Phone = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const result: string[] = [];
  const dfs = (str: string, index: number) => {
    if (index === digits.length) {
      result.push(str);
      return;
    }
    phone[Number(digits[index])].forEach((letter: string) => {
      dfs(str + letter, index + 1);
    });
  };
  dfs('', 0);
  return result;
}

console.log(letterCombinations('23'));
