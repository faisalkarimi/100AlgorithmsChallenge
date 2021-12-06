// DEFINE A FUNCTION TO PERFORM REPLACE ALL OPERATION IN AN ARRAY

const replaceAll = (arr: any[], search: number, replace: number) => {
  return arr.map(item => item === search ? replace : item);
}

console.log(replaceAll([1,2,1], 1, 3));
