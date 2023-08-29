import {
    BoxGeometry,
    SphereGeometry,
    MeshMatcapMaterial,
    Mesh,
    TextureLoader,
    MathUtils,
} from 'three';

function createRotatingShapes () {
    const textureLoader = new TextureLoader();
    const sphereTexture = textureLoader.load('/assets/textures/matcaps/2.png');
    const cubeTexture = textureLoader.load('/assets/textures/matcaps/3.png');

    const sphereMaterial = new MeshMatcapMaterial({
        matcap: sphereTexture
    });
    const cubeMaterial = new MeshMatcapMaterial({
        matcap: cubeTexture
    });

    const sphereGeometry = new SphereGeometry(2, 32, 16);
    const cubeGeometry = new BoxGeometry(2, 2, 2);

    const sphere = new Mesh(sphereGeometry, sphereMaterial);
    const cube = new Mesh(cubeGeometry, cubeMaterial);

    sphere.position.x = 5;
    cube.position.x = -5;


    return { sphere, cube };
}

export { createRotatingShapes };