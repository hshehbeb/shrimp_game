// import Transform from "./transform";

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
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
