// PERFORM BITWISE ADD OPERATION ON TWO STRINGS

const addBinary = (a: string, b: string): string => {
        const aArr = a.split("").reverse();
        const bArr = b.split("").reverse();
        const resultArr: number[] = [];
        let carry = 0;
        let i = 0;
        let j = 0;
        while (i < aArr.length || j < bArr.length) {
          const aNum = i < aArr.length ? parseInt(aArr[i]) : 0;
          const bNum = j < bArr.length ? parseInt(bArr[j]) : 0;
          const sum = aNum + bNum + carry;
          carry = Math.floor(sum / 2);
          resultArr.push(sum % 2);
          i++;
          j++;
        }
        if (carry) {
          resultArr.push(carry);
        }
        return resultArr.reverse().join("");
}

const a = '11';
const b = '1';
console.log(addBinary(a, b));
