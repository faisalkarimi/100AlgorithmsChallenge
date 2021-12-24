// DETERMINE IS STRINGS ARE ANAGRAMS

const isAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1Sorted = str1.split('').sort().join('');
  const str2Sorted = str2.split('').sort().join('');

  return str1Sorted === str2Sorted;
}