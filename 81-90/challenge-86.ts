// ON A 2D PLANE WITH INTEGER COORDINATES, FIND THE MINIMUM DISTANCE BETWEEN ANY TWO POINTS.

const points = [[1,1],[3,4],[-1,0]];

const minTimeToVisitAllPoints = (points: number[][]): number => {
  let time = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];
    const x = Math.abs(x1 - x2);
    const y = Math.abs(y1 - y2);
    time += Math.max(x, y);
  }
  return time;
}

console.log(minTimeToVisitAllPoints(points));
