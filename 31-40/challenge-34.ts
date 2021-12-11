// DETERMINE IF A STRING IS A ROTAION OF ANOTHER

const string4 = 'waterbottle';
const string5 = 'erbottlewat';

const isRotation = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }
  return (str1 + str1).includes(str2);
}

console.log(isRotation(string4, string5));
