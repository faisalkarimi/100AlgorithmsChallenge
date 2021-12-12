// FIND MAX AREA FOR CONTAINER WITH MOST WATER

const container = [1,8,6,2,5,4,8,3,7];

const maxArea = (container: number[]): number => {
    let max = 0;
    let i = 0;
    let j = container.length - 1;
    
    while (i < j) {
        const area = Math.min(container[i], container[j]) * (j - i);
        max = Math.max(max, area);
        if (container[i] < container[j]) {
        i++;
        } else {
        j--;
        }
    }
    return max;
}

console.log(maxArea(container));
