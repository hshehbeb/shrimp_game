import { projection } from "./math.js";
import { Two } from "../vendor/two.js";

window.two = new Two({ fullscreen: true }).appendTo(document.body);

window.physics = {
  particles: [],
  addParticle: (particle) => {
    physics.particles.push(particle);
    return particle;
  },
  integrate: ({ deltaTime }) => {
    for (const particle of physics.particles) {
      particle.integrate(deltaTime);
    }
  },
  generateContacts: () => {
    const contacts = [];
    for (let i = 0; i < physics.particles.length; i++) {
      for (let j = i + 1; j < physics.particles.length; j++) {
        const particle1 = physics.particles[i];
        const particle2 = physics.particles[j];
        // 碰撞检测
        const result = particle1.detectCollision(particle2);
        if (result.collisionExits) {
          contacts.push(result.resultingContact);
        }
      }
    }
    return contacts;
  },
  resolveContacts: ({ contacts }) => {
    for (const contact of contacts) {
      const [particle1, particle2] = [contact.particle1, contact.particle2];
      // 计算分离速度
      const separatingVelocity = projection({
        vector1: particle1.velocity - particle2.velocity,
        vector2: contact.normal,
      });
      const restitution = 0.9;
      const newVelocity = -separatingVelocity * restitution;
      // 应用分离速度
      const massSum = particle1.mass + particle2.mass;
      particle1.velocity += (newVelocity * particle2.mass) / massSum;
      particle2.velocity -= (newVelocity * particle1.mass) / massSum;
      // 调整位置，避免collider重叠
    }
  },
};

export function run({ on_init, on_tick }) {
  // 初始化回调
  on_init();

  // 刷新率，以秒结算
  const refreshRate = 0.5;
  const timeId = setInterval(() => {
    // 更新物理模拟
    physics.integrate({ deltaTime: refreshRate });

    // tick回调
    on_tick({ deltaTime: refreshRate });

    // 更新渲染
    two.update();
  }, refreshRate * 1000);
}
