// REVERSE ARRAY OF LETTERS USING RECURSION

const reverseString = (str: string[]): string[] => {
    const reverse = (str: string[], start: number, end: number): string[] => {
        if (start >= end) {
            return str;
        }
        const temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        return reverse(str, start + 1, end - 1);
    }
    return reverse(str, 0, str.length - 1);
}

console.log(reverseString(['a', 'b', 'c', 'd', 'e']));
