// FIRST BAD VERSION

const solution = (isBadVersion) => {

    return (n) => {
        let low = 1;
        let high = n;
        let mid = 0;
        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            if (isBadVersion(mid)) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
}

const isBadVersion = (n) => {
    return n >= 5;
}