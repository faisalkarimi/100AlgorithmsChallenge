// RESTORE IP ADDRESS


const restoreIpAddresses = (s: string): string[] => {
    const result: string[] = [];
    const length = s.length;
    const max = Math.min(length, 4);

    function isValid(s: string): boolean {
        if (s.length > 3) return false;
        if (s.length === 3 && s[0] === '0') return false;
        if (s.length === 2 && s[0] === '0') return false;
        if (s.length === 1 && s[0] === '0') return true;
        return true;
    }

    for (let i = 1; i <= max; i++) {
        for (let j = i + 1; j <= max; j++) {
        for (let k = j + 1; k <= max; k++) {
            for (let l = k + 1; l <= max; l++) {
            const a = s.substring(0, i);
            const b = s.substring(i, j);
            const c = s.substring(j, k);
            const d = s.substring(k, l);
            const e = s.substring(l);
            if (isValid(a) && isValid(b) && isValid(c) && isValid(d) && isValid(e)) {
                result.push(`${a}.${b}.${c}.${d}.${e}`);
            }
            }
        }
        }
    }
    return result;
}
const ip = '25525511135';
console.log(restoreIpAddresses(ip));