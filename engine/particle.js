class Particle {
  constructor(x, y, velocity) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
  }

  integrate(delta_time) {
    this.x += this.velocity.x * delta_time;
    this.y += this.velocity.y * delta_time;
  }
}

export default Particle;
