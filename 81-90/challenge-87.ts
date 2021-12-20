// RESTORE SHUFFLED STRING USING INDEXES

const restoreString = (s: string, indexes: number[]): string => {
  const restoredString = [];
  for (let i = 0; i < s.length; i++) {
    restoredString[indexes[i]] = s[i];
  }
  return restoredString.join("");
}

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
