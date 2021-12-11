// REVERSE A STRING

const string1 = 'Hello World';

const reverseString = (str: string): string => {
    const strArray = str.split('');
    const reverseArray = [];
    for (let i = strArray.length - 1; i >= 0; i--) {
        reverseArray.push(strArray[i]);
    }
    return reverseArray.join('');
}

console.log(reverseString(string1));
