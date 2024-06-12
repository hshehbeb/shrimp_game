export const physics = {
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
  resolveContacts: () => {},
};

export function run({ on_init, on_tick }) {
  // 初始化回调
  on_init();

  // 刷新率，以秒结算
  const refreshRate = 0.1;
  const timeId = setInterval(() => {
    // 更新物理模拟
    physics.integrate({ deltaTime: refreshRate });

    // tick回调
    on_tick({ deltaTime: refreshRate });
  }, refreshRate * 1000);
}
