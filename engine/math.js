export function distance({ x1, y1, x2, y2, particle1, particle2 }) {
  function internalCalculation(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  if (x1 && y1 && x2 && y2) {
    return internalCalculation(x1, y1, x2, y2);
  }
  if (particle1 && particle2) {
    return internalCalculation(
      particle1.x,
      particle1.y,
      particle2.x,
      particle2.y,
    );
  } else {
    console.error(
      `[distance] Invalid Parameter is given: ${JSON.stringify(arguments)}`,
    );
    return 0;
  }
}
