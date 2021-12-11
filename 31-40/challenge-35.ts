// REMOVE DUPLICATES FROM A STRING

const string6 = 'Hello, World!';

const removeDuplicates = (str: string): string => {
  const arr = str.split('');
  const unique = [...new Set(arr)];
  return unique.join('');
}


console.log(removeDuplicates(string6));