// GIVEN AN INPUT STRING S AND A PATTERN P, IMPLEMENT REGULAR EXPRESSION MATCHING WITH SUPPORT FOR * AND .
// RETURN TRUE IF S MATCHES P, FALSE OTHERWISE
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// * returns zero or more of the preceding element.
var isMatch = function (s, p) {
    var i = 0;
    var j = 0;
    var star = -1;
    var match = 0;
    while (i < s.length) {
        if (j < p.length && (p[j] === "." || p[j] === s[i])) {
            i++;
            j++;
        }
        else if (j < p.length && p[j] === "*") {
            star = j;
            match = i;
            j++;
        }
        else if (star !== -1) {
            j = star + 1;
            match++;
            i = match;
        }
        else {
            return false;
        }
    }
    while (j < p.length && p[j] === "*") {
        j++;
    }
    return j === p.length;
};
var s = "mississippi";
var p = "mis*is*p*.";
console.log(isMatch(s, p));
