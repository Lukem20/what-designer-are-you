import { Scene, Color } from 'three';

function createScene() {
    const scene = new Scene();
    scene.background = new Color(0x22252D);

return scene;
}

export { createScene }