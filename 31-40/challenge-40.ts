// DETERMINE IF TWO WORDS ARE PALINDROMES

const word = 'kayak';

const isPalindrome = (word: string): boolean => {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

console.log(isPalindrome(word));
