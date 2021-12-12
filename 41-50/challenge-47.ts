// ZIGZAG CONVERSION OF A STRING

const convertToZigzagString = (str: string, n: number): string => {
    let zigzag = '';
    let i = 0;
    while (i < str.length) {
        zigzag += str[i];
        if (i % n === 0) {
        zigzag += ' ';
        }
        i++;
    }
    return zigzag.trim();
}

const str2 = "PAYPALISHIRING";
const n = 3;
console.log(convertToZigzagString(str2, n));