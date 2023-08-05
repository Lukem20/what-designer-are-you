import { OrthographicCamera } from 'three';

function createOrthographicCamera() {
    const camera = new OrthographicCamera(
        45, 1, 0.1, 500
    );
    camera.position.z = 30;

    return camera;
}

export { createOrthographicCamera }