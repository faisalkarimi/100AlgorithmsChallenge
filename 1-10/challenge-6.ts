// RETURN AN ARRAY OF STRINGS WITH LARGEST NUMBER OF CHARACTERS

const str: string[] = ["aba", "aa", "ad", "vcd", "aba"];

const largestString = (str: string[]): string[] => {
    const largest: string[] = [];
    const largestLength = str.reduce((acc, curr) => {
        return curr.length > acc ? curr.length : acc;
    }, 0);
    str.forEach((element) => {
        if (element.length === largestLength) {
        largest.push(element);
        }
    });
    return largest;
}

console.log(largestString(str));
