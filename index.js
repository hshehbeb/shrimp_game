import { run, two } from "./engine";
import { GameObject } from "./engine/gameObject.js";

let goList = [];

run({
  on_init: () => {
    goList = [
      new GameObject({ x: 100, y: 300, renderer: two.makeCircle(0, 0, 50) }),
      new GameObject({ x: 300, y: 300, renderer: two.makeCircle(0, 0, 50) }),
    ];
  },
  on_tick: ({ deltaTime }) => {
    // 更新gameObjects
    for (const go of goList) {
      go.update(deltaTime);
    }
  },
});
