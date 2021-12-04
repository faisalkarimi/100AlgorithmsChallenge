const absoluteValuesSumMinimizaiton = (a: number[]) => {
    const arrayLength = a.length;
    const isArrayLengthEven = arrayLength % 2 === 0;
    const middleIndex = Math.floor(arrayLength / 2);
    return isArrayLengthEven ? a[middleIndex - 1] : a[middleIndex];
}

console.log(absoluteValuesSumMinimizaiton([2, 4, 7, 1]));
