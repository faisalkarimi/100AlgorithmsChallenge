// IMPLEMENT INDEXOF IN A STRING
var strStr = function (haystack, needle) {
    if (needle.length === 0)
        return 0;
    if (haystack.length === 0)
        return -1;
    if (needle.length > haystack.length)
        return -1;
    if (needle.length === haystack.length)
        return haystack === needle ? 0 : -1;
    var i = 0;
    var j = 0;
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            j++;
            if (j === needle.length)
                return i;
        }
        else {
            i++;
        }
    }
    return -1;
};
var strr = 'Hello World';
var search = 'lll';
console.log(strStr(strr, search));
