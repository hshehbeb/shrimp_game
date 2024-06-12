import {distance} from "./math";

class Contact {
  constructor({ collider1, collider2, penetration, normal }) {
    this.coliider1 = collider1;
    this.collider2 = collider2;
    this.penetration = penetration;
    this.normal = normal;
  }
}

class CircularCollider {
  constructor({ radius, parentParticle }) {
    this.radius = radius;
    this.parentParticle = parentParticle;
  }

  detectCollision(otherParticle) {
    if (otherParticle.collider instanceof CircularCollider) {
      handleCircleCircleCollision(this.parentParticle, otherParticle);
    } else {
      handleDefaultCollision(this.parentParticle, otherParticle);
    }
  }
}

/// Helpers ///
function handleCircleCircleCollision(particle1, particle2) {
  if (distance())
}

function handleDefaultCollision(particle1, particle2) {
  console.error(
    `Can't handle collision detection for ${typeof particle1.collider} and ${typeof particle2.collider}`,
  );

  return { collisionExits: false };
}
