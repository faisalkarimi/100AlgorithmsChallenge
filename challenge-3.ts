// SURROUND ARRAY ELEMENTS WITH ASTERISKS

const array = ["abc", "ded"];

const asteriskedArray = array.map(element => `*${element}*`);
asteriskedArray.unshift(`*****`);
asteriskedArray.push(`*****`);
const asteriskedArrayString = asteriskedArray.join("\n");

console.log(asteriskedArrayString);
