// LONGEST UNIQUE SUBSTRING

const longestUniqueSubstring = (str: string): string => {
  let longest = "";
  let current = "";
  for (let i = 0; i < str.length; i++) {
    if (current.includes(str[i])) {
      current = "";
    }
    current += str[i];
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}

const str1 = "dvdf";

console.log(longestUniqueSubstring(str1));
