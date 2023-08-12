import {
    TextureLoader,
    TorusKnotGeometry,
    MeshMatcapMaterial,
    Mesh,
    MathUtils,
    Group
} from 'three';

function createShapes() {
    const textureLoader = new TextureLoader();
    const matcapTexture = textureLoader.load('/assets/textures/matcaps/8.png');
    const shapeMaterial = new MeshMatcapMaterial({ matcap: matcapTexture });
    const group = new Group();

    
    for (let i = 0; i < 200; i++) {
        const shapeGeometry = new TorusKnotGeometry(10, 3, 64, 8, Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 20) + 1);
        const shape = new Mesh(shapeGeometry, shapeMaterial);
        shape.position.x = (Math.random() - 0.5) * 40;
        shape.position.y = (Math.random() - 0.5) * 40;
        shape.position.z = (Math.random() - 0.5) * 40;

        shape.rotation.x = Math.random() * (Math.PI / 2);
        shape.rotation.y = Math.random() * (Math.PI / 2);

        const randomDecimal = (Math.random() * 0.07) + 0.01;
        shape.scale.set(randomDecimal, randomDecimal, randomDecimal);

        group.add(shape);
    }

    const radiansPerSecond = MathUtils.degToRad(0.75);
    group.tick = (delta) => {
        group.rotation.z += radiansPerSecond * delta;
        group.rotation.x += radiansPerSecond * delta;
        group.rotation.y += radiansPerSecond * delta;
        
    };

    return group;
}

export { createShapes }