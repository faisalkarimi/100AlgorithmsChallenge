// MOST REPEATED CHARACTER IN A STRING

const string7 = 'aaabcddddeeee';

interface Character {
    [key: string]: number,
}

const mostRepeatedCharacter = (string7: string): string[] => {
    const charMap: Character = {};
    for(let i = 0; i < string7.length; i++) {
        if (string7[i] in charMap) {
            charMap[string7[i]]++;
        } else {
            charMap[string7[i]] = 1;
        }
    }
    
    const charrArray = Object.values(charMap);
    
    const max = Math.max(...charrArray);
    
    const result = Object.keys(charMap).filter(x => charMap[x] === max);;

    return result;
    
}

console.log(mostRepeatedCharacter(string7));
