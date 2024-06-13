import Particle from "./particle.js";
import { CircularCollider } from "./collision.js";

class GameObject {
  constructor({ x, y, renderer }) {
    // 设置particle
    this.radius = 50;
    this.particle = window.physics.addParticle(
      new Particle({ x: x, y: y, mass: 1 }),
    );
    this.particle.setCollider(
      new CircularCollider({
        parentParticle: this.particle,
        radius: this.radius,
      }),
    );

    // 设置renderer
    this.renderer = renderer;
  }

  update(deltaTime) {
    // 渲染刷新
    this.renderer.position.x = this.particle.x;
    this.renderer.position.y = this.particle.y;
  }
}

export default GameObject;
