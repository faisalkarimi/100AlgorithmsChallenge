// MULTIPLY STRINGS

const multiplyStrings = (a: string, b: string): string => {
    const result = Number(a) * Number(b);
    return result.toString();
}

console.log(multiplyStrings('123456789', '987654321'));
