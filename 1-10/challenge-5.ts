// FIND THE LARGEST ADJACENT PRODUCT IN AN ARRAY

const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];

const largestAdjacentProduct = (numbers: number[]) => {
    let currentItem: number = 0;
    let largestProduct: number = 0;
    let currentProduct: number = 1;
    const produtArray: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        currentItem = numbers[i];
        if (numbers[i + 1]) {
            currentProduct = currentItem * numbers[i + 1];
            produtArray.push(currentProduct);
        }
        
    }
    largestProduct = Math.max(...produtArray);
    return largestProduct;
}

console.log(largestAdjacentProduct(numbers));
