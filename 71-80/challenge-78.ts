// REMOVE ALL OCCURANCES OF AN ELEMENT FROM ARRAY

const removeElement = (arr: number[], element: number): number[] => {
    return arr.filter(x => x !== element);
}
console.log(removeElement([3,2,2,3], 3));
