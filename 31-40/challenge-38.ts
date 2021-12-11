// DETERMINE IF TWO SENTENCES ARE ANAGRAMS

const sentence_1 = 'listen';
const sentence_2 = 'silent';

const isAnagram = (str1: string, str2: string): boolean => {
    if ((str1 === null || str2 === null) || (str1.length !== str2.length)) {
        return false;
    }
  const str1Arr = str1.toLowerCase().split('').sort();
  const str2Arr = str2.toLowerCase().split('').sort();
  return str1Arr.join('') === str2Arr.join('');
}

console.log(isAnagram(sentence_1, sentence_2));
