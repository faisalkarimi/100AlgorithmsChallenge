import { binarySearch } from './../11-20/challenge-19';
// GIVEN AN ARRAY OF NUMBERS RETURN INDICES OF TWO ITEMS THAT SUM UP TO A TARGET NUMBER
// YOU SHOULD COME UP WITH A TIME COMPLEXITY OF O(N)
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const twoSum = (numbers: number[], target: number): number[] => {
    const result: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        // const search = binarySearch(numbers, target - numbers[i]);
        const search = numbers.indexOf(target - numbers[i]);
        if (search !== -1 && search !== i) {
        result.push(i);
        result.push(search);
        break;
        }
    }
    return result;
}
