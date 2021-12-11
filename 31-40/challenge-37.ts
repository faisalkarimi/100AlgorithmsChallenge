// CAPITALIZE FIRST LETTER OF EACH WORD

const sentence2 = 'hello world, welcome to the universe';

const capitalize = (str: string) => {
  const words = str.split(' ');
    const capitalizedWords = words.map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return capitalizedWords.join(' ');

    //   for (let i = 0; i < words.length; i++) {
    //     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    //   }
    // return words.join(' ');
}

console.log(capitalize(sentence2));
