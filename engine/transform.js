class Transform {
  constructor(x = 0, y = 0, rotation = 0, scaleX = 1, scaleY = 1) {
    this.position = { x: x, y: y };
    this.rotation = rotation; // in radians
    this.scale = { x: scaleX, y: scaleY };
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  setRotation(angle) {
    this.rotation = angle; // in radians
  }

  setScale(scaleX, scaleY) {
    this.scale.x = scaleX;
    this.scale.y = scaleY;
  }

  translate(dx, dy) {
    this.position.x += dx;
    this.position.y += dy;
  }

  rotate(deltaAngle) {
    this.rotation += deltaAngle;
  }

  scaleBy(factorX, factorY) {
    this.scale.x *= factorX;
    this.scale.y *= factorY;
  }

  getTransformationMatrix() {
    const cos = Math.cos(this.rotation);
    const sin = Math.sin(this.rotation);
    const { x, y } = this.position;

    return [
      cos * this.scale.x, -sin * this.scale.y, 0,
      sin * this.scale.x,  cos * this.scale.y, 0,
      x,                  y,                  1
    ];
  }
}

export default Transform;
