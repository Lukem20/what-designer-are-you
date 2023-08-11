import { OrthographicCamera } from 'three';

function createOrthographicCamera() {
    const camera = new OrthographicCamera(
        5, 5, 5, 5, 1, 100
    );
    camera.position.z = 10;

    return camera;
}

export { createOrthographicCamera }