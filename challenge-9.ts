// DETERMINE IF ALPHABETICAL ORDER IS PRESERVED IN A STRING AND HAS NO DUPLICATES

const myString = 'effg';

const isOrdered = (str: string): boolean => {
  const sorted = str.split('').sort().join('');
  return str === sorted;
}

const hasNoDuplicates = (str: string): boolean => {
  const unique = new Set(str.split(''));
  return str.length === unique.size;
}

const isOrderedAndHasNoDuplicates = (str: string): boolean => {
  return isOrdered(str) && hasNoDuplicates(str);
}

console.log(isOrderedAndHasNoDuplicates(myString));
