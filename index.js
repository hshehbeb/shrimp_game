import { Two } from "./vendor/two.js";
import { run, physics } from "./engine";
import Particle from "./engine/particle.js";

const two = new Two({ fullscreen: true }).appendTo(document.body);

let particle;

run({
  on_init: () => {
    particle = physics.addParticle(new Particle(0, 0));
    particle.acceleration = { x: 0, y: 9.8 };
  },
  on_tick: ({ deltaTime }) => {
    two.clear();

    var radius = 50;
    var x = particle.x;
    var y = particle.y;
    var circle = two.makeCircle(x, y, radius);

    two.update();
  },
});
