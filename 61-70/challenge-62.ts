// COUNT AND SAY USING RECURSIVE FORMULA

const countAndSay = (n: number): string => {
    if (n === 1) return '1';
    let str = '11';
    for (let i = 2; i < n; i++) {
        let temp = '';
        let count = 1;
        for (let j = 1; j < str.length; j++) {
        if (str[j] === str[j - 1]) {
            count++;
        } else {
            temp += count + str[j - 1];
            count = 1;
        }
        }
        temp += count + str[str.length - 1];
        str = temp;
    }
    return str;
}

console.log(countAndSay(4));
