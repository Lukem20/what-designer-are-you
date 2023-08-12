import { PerspectiveCamera } from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        45, 1, 0.1, 500
    );
    camera.position.z = 20;

    return camera;
}

export { createCamera }