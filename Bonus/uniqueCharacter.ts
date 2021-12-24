// FIND FIRST UNIQUE CHARACTER IN STRING

const firstUniqChar = (str: string): number => {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return i;
        }
    }
    return -1;
}

console.log(firstUniqChar('loveleetcode'));
