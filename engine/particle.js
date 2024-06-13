// import Transform from "./transform";

class Particle {
  constructor({ x, y, mass }) {
    this.x = x;
    this.y = y;
    this.mass = mass;

    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.collider = null;
  }

  setCollider(collider) {
    this.collider = collider;
  }

  detectCollision(otherParticle) {
    return this.collider.detectCollision(otherParticle);
  }

  addForce({ x, y }) {
    this.acceleration.x += x / this.mass;
    this.acceleration.y += y / this.mass;
  }

  integrate(delta_time) {
    // 更新位移
    this.x += this.velocity.x * delta_time;
    this.y += this.velocity.y * delta_time;

    // 更新速度
    this.velocity.x += this.acceleration.x * delta_time;
    this.velocity.y += this.acceleration.y * delta_time;
  }
}

export default Particle;
