// DIVIDE A GROUP OF PEOPLE INTO TWO GROUPS AND RETURN SUM OF THEIR WEIGHTS

const people = [50, 60, 60, 45, 70];

const group1 = (arr: number[]): number[] => {
    const team1 = [];
    arr.map((person, index) => {
        if (index % 2 === 0) {
            team1.push(person);
        }
    });
    return team1;
}

const group2 = (arr: number[]): number[] => {
    const team2 = [];
    arr.map((person, index) => {
        if (index % 2 !== 0) {
            team2.push(person);
        }
    });
    return team2;
}

const sumOfWeights = (arr: number[]): number[] => {
    const sum = [];
    const team1 = group1(arr);
    const team2 = group2(arr);
    sum.push(team1.reduce((acc, curr) => acc + curr, 0));
    sum.push(team2.reduce((acc, curr) => acc + curr, 0));
    return sum;
}

console.log(sumOfWeights(people));


