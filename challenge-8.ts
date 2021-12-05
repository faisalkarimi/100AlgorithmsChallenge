// REPLACE EACH CHARACTER WITH THE ONE THAT FOLLOWS IT IN THE ALPHABET

const myStr = 'crazy';

const replaceChar = (str: string): string => {
    const newStr: string[] = [];
    str.split('').map((char, index) => {
        if (char === 'z') {
            newStr.push('a');
        } else {
            newStr.push(String.fromCharCode(char.charCodeAt(0) + 1));
        }
    });

    return newStr.join('');
}

console.log(replaceChar(myStr));
