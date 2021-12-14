// IMPLEMENT INDEXOF IN A STRING

const strStr = (haystack: string, needle: string): number => {
    if (needle.length === 0) return 0;
    if (haystack.length === 0) return -1;
    if (needle.length > haystack.length) return -1;
    if (needle.length === haystack.length) return haystack === needle ? 0 : -1;
    let i = 0;
    let j = 0;
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
        j++;
        if (j === needle.length) return i;
        } else {
        i++;
        }
    }
    return -1;
}

const strr = 'Hello World';
const search = 'lll';

console.log(strStr(strr, search));
