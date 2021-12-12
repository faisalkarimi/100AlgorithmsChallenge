// GIVEN AN INPUT STRING S AND A PATTERN P, IMPLEMENT REGULAR EXPRESSION MATCHING WITH SUPPORT FOR * AND .
// RETURN TRUE IF S MATCHES P, FALSE OTHERWISE
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// * returns zero or more of the preceding element.

const isMatch = (s: string, p: string): boolean => {
    let i = 0;
    let j = 0;
    let star = -1;
    let match = 0;
    
    while (i < s.length) {
        if (j < p.length && (p[j] === "?" || p[j] === s[i])) {
        i++;
        j++;
        } else if (j < p.length && p[j] === "*") {
        star = j;
        match = i;
        j++;
        } else if (star !== -1) {
        j = star + 1;
        match++;
        i = match;
        } else {
        return false;
        }
    }
    
    while (j < p.length && p[j] === "*") {
        j++;
    }
    
    return j === p.length;
}

const s = "mississippi";
const p = "mis*is*p*.";
console.log(isMatch(s, p));