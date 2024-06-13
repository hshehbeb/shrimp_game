export function distance({ x1, y1, x2, y2, particle1, particle2 }) {
  function internalCalculation(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  if (x1 && y1 && x2 && y2) {
    return internalCalculation(x1, y1, x2, y2);
  } else if (particle1 && particle2) {
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

// Calculate the projection from v1(x1, y1) to v2(x2, y2)
export function projection({ x1, y1, x2, y2, vector1, vector2 }) {
  function internalCalculation(x1, y1, x2, y2) {
    const dotProduct = x1 * x2 + y1 * y2;
    const magnitudeSquared = Math.sqrt(x2 * x2 + y2 * y2);
    return dotProduct / magnitudeSquared;
  }

  if (x1 && y1 && x2 && y2) {
    return internalCalculation(x1, y1, x2, y2);
  } else if (vector1 && vector2) {
    return internalCalculation(vector1.x, vector1.y, vector2.x, vector2.y);
  } else {
    console.error(
      `[projection] Invalid Parameter is given: ${JSON.stringify(arguments)}`,
    );
    return 0;
  }
}

export function normalize({ x, y }) {
  const length = Math.sqrt(x * x + y * y);
  if (length === 0) {
    return { x: 0, y: 0 }; // Avoid division by zero
  }
  return { x: x / length, y: y / length };
}
