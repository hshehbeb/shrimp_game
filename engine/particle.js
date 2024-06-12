// import Transform from "./transform";

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = { x: 0, y: 0 };
  }

  integrate(delta_time) {
    this.x += this.velocity.x * delta_time;
    this.y += this.velocity.y * delta_time;
  }
}

export default Particle;
