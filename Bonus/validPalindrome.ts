// DETERMINE IF A STRING IS A PALINDROME AFTER REMOVING ALL NON-ALPHANUMERIC CHARACTERS

// const validPalindrome = (s: string): boolean => {
//   const sArr = s.split('');
//   let i = 0;
//   let j = sArr.length - 1;
//   while (i < j) {
//     if (!sArr[i].match(/[a-zA-Z0-9]/)) {
//       i++;
//     } else if (!sArr[j].match(/[a-zA-Z0-9]/)) {
//       j--;
//     } else if (sArr[i].toLowerCase() !== sArr[j].toLowerCase()) {
//       return false;
//     } else {
//       i++;
//       j--;
//     }
//   }
//   return true;
// }

const ss = "A man, a plan, a canal: Panama"
console.log(ss.match(/[a-zA-Z0-9]/g));
