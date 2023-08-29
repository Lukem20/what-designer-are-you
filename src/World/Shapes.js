// Components
import { createRotatingShapes } from './components/rotatingShapes';
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

class Shapes {
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        controls = createControls(camera, renderer.domElement);
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        controls.autoRotate = true;

        const {
            sphere,
            cube
        } = createRotatingShapes();

        scene.add(sphere, cube);

        controls.addEventListener('change', () => {
            this.render();
        });

        loop.updatables.push(controls);
               
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
    
export { Shapes };