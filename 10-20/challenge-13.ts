// REPLACE ODD NUMBERS WITH THEIR SUM & EVEN NUMBERS WITH THEIR PRODUCT IN AN ARRAY

function generateArray(): number[] {
  let array: number[] = [];
    for (let i = 0; i < 2000; i++) {
      array.push(i);
    }
    return array;
}

const numbers = generateArray();
console.log(numbers);

function sumEven(array: number[]): number {
    let sum: number = 0;
    array.forEach(element => {
      if (element % 2 === 0) {
        sum += element;
      }
    }
    );
    return sum;
}

function producOdd(array: number[]): number {
    let product: number = 1;
    array.forEach(element => {
      if (element % 2 !== 0) {
        product *= element;
      }
    }
    );
    return product;
}

const result = numbers.map(num => {
    const sum = sumEven(numbers);
    const product = producOdd(numbers);

    num % 2 === 0 ? num = sum : num = product;
});

console.log(result);
