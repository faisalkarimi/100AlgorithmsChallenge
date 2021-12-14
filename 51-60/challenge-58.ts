// VALID PARENTHESES

const isValid = (str: string): boolean => {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char in map) {
        stack.push(char);
        } else if (char === map[stack.pop()]) {
        continue;
        } else {
        return false;
        }
    }
    
    return stack.length === 0;
}

console.log(isValid('()'));
