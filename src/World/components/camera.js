import { PerspectiveCamera } from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        45, 1, 0.1, 100
    );

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 15;

    return camera;
}

export { createCamera }