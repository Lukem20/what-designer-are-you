import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
    const mainLight = new DirectionalLight(0xffffff, 3);
    const ambientLight = new HemisphereLight(0xffffff, 'darkslategrey', 1.5)
    mainLight.position.set(10, 10, 10);

    return { mainLight, ambientLight };
}

export { createLights };