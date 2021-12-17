// CALCULATE SQUARE ROOT OF A NUMBER USING RECURSION

function squareRoot(number: number, guess: number = 1): number {
  const average = (guess + number / guess) / 2;
  if (average === guess) {
    return average;
  }
  return squareRoot(number, average);
}

console.log(squareRoot(8));

