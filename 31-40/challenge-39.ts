// ANAGRAM OF TWO SENTENCES USING HISTOGRAM

const word3 = "listen";
const word4 = "";

interface Character {
    [key: string]: number;
}

const isAnagramHistogram = (word3: string, word4: string): boolean => {
  const histogram1: Character = {};
  const histogram2: Character = {};

  word3.split("").forEach(char => {
    histogram1[char] = histogram1[char] + 1 || 1;
  });

  word4.split("").forEach(char => {
    histogram2[char] = histogram2[char] + 1 || 1;
  });

  for (let key in histogram1) {
    if (!histogram2[key]) {
      return false;
    }
    if (histogram1[key] !== histogram2[key]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagramHistogram(word3, word4));
