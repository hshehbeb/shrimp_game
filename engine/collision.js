import { distance } from "./math.js";

export class Contact {
  constructor({ particle1, particle2, penetration, normal }) {
    this.particle1 = particle1;
    this.particle2 = particle2;
    this.penetration = penetration;
    this.normal = normal;
  }
}

export class CircularCollider {
  constructor({ radius, parentParticle }) {
    this.radius = radius;
    this.parentParticle = parentParticle;
  }

  detectCollision(otherParticle) {
    if (otherParticle.collider instanceof CircularCollider) {
      return handleCircleCircleCollision(this.parentParticle, otherParticle);
    } else {
      return handleDefaultCollision(this.parentParticle, otherParticle);
    }
  }
}

/// Helpers ///
function handleCircleCircleCollision(particle1, particle2) {
  const dist = distance({ particle1: particle1, particle2: particle2 });
  const radiusSum = particle1.collider.radius + particle2.collider.radius;
  if (dist < radiusSum) {
    return {
      collisionExits: true,
      resultingContact: new Contact({
        particle1,
        particle2,
        normal: { x: particle2.x - particle1.x, y: particle2.y - particle1.y },
        penetration: radiusSum - dist,
      }),
    };
  } else {
    return { collisionExits: false };
  }
}

function handleDefaultCollision(particle1, particle2) {
  console.error(
    `Can't handle collision detection for ${typeof particle1.collider} and ${typeof particle2.collider}`,
  );

  return { collisionExits: false };
}
