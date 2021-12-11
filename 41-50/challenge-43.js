// LONGEST UNIQUE SUBSTRING
var longestUniqueSubstring = function (str) {
    var longest = "";
    var current = "";
    for (var i = 0; i < str.length; i++) {
        if (current.includes(str[i])) {
            current = "";
        }
        current += str[i];
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
};
var str1 = "dvdf";
console.log(longestUniqueSubstring(str1));
