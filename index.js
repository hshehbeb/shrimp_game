import { Two } from "./vendor/two.js";
import { run, physics } from "./engine";
import Particle from "./engine/particle.js";

const two = new Two({ fullscreen: true }).appendTo(document.body);

let particle;
let renderer;

run({
  on_init: () => {
    particle = physics.addParticle(new Particle({ x: 0, y: 0, mass: 1 }));
    particle.addForce({ x: 0, y: 9.8 });

    var radius = 50;
    var x = particle.x;
    var y = particle.y;
    renderer = two.makeCircle(x, y, radius);
  },
  on_tick: ({ deltaTime }) => {
    renderer.position.y = particle.y;

    two.update();
  },
});
