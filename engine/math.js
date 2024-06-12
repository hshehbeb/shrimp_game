export function distance({ x1, y1, x2, y2, particle1, particle2 }) {
  if (x1 && y1 && x2 && y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }
  if (particle1 && particle2) {
    return distance({
      x1: particle1.x,
      y1: particle1.y,
      x2: particle2.x,
      y2: particle2.y,
    });
  } else {
    console.error("[distance] Invalid Parameter is given!");
  }
}
