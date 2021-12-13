// LONGEST COMMON PREFIX AMONGST ITEMS OF A STRING ARRAY

const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
      
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      
    }
  }
  return prefix;
}

longestCommonPrefix(["flower", "flow", "flight"]);