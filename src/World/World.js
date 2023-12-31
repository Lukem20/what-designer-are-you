// Components
import { createText } from './components/text.js';
import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';

// Systems
import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js'

let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        controls = createControls(camera, renderer.domElement);
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        const text = createText(scene);

        controls.addEventListener('change', () => {
            this.render();
        });
               
        const resizer = new Resizer(container, camera, renderer);
    }

    async init() {
        
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}
    
export { World };