// RETURN A PASCAL TRIANGLE OF NUMBERS WITH A GIVEN HEIGHT AS AN ARGUMENT USING RECURSION

const pascalTriangle = (height: number): number[] => {
    if (height < 0) {
        return [];
    }
    if (height === 0) {
        return [1];
    }
    const prevRow = pascalTriangle(height - 1);
    const newRow = [1];
    for (let i = 0; i < prevRow.length - 1; i++) {
        newRow.push(prevRow[i] + prevRow[i + 1]);
    }
    newRow.push(1);
    return newRow;
}

console.log(pascalTriangle(3));
