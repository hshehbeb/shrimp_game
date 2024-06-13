import { Two } from "./vendor/two.js";
import { run, physics } from "./engine";
import Particle from "./engine/particle.js";
import { CircularCollider } from "./engine/collision.js";

const two = new Two({ fullscreen: true }).appendTo(document.body);

let particle;
let renderer;

run({
  on_init: () => {
    particle = physics.addParticle(new Particle({ x: 50, y: 0, mass: 1 }));
    particle.setCollider(
      new CircularCollider({ parentParticle: particle, radius: 50 }),
    );
    // particle.addForce({ x: 0, y: 9.8 });

    var radius = 50;
    var x = particle.x;
    var y = particle.y;
    renderer = two.makeCircle(x, y, radius);

    const particle2 = physics.addParticle(
      new Particle({ x: 70, y: 0, mass: 1 }),
    );
    particle2.setCollider(
      new CircularCollider({ parentParticle: particle2, radius: 50 }),
    );
    renderer = two.makeCircle(particle2.x, particle2.y, radius);

    console.log(physics.generateContacts());
  },
  on_tick: ({ deltaTime }) => {
    renderer.position.y = particle.y;

    two.update();
  },
});
