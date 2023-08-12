import {
    TextureLoader,
    TorusGeometry,
    MeshMatcapMaterial,
    Mesh,
    Group
} from 'three';

function createDonuts() {
    const textureLoader = new TextureLoader();
    const matcapTexture = textureLoader.load('src/World/assets/textures/matcaps/8.png');
    const donutGeometry = new TorusGeometry();
    const donutMaterial = new MeshMatcapMaterial({ matcap: matcapTexture });
    const group = new Group();

    const protoDonut = new Mesh(donutGeometry, donutMaterial);
    protoDonut.position.set(0, 5, -3)
    group.add(protoDonut);
    
    for (let i = 0; i < 200; i++) {
        const donut = protoDonut.clone();
        donut.position.x = (Math.random() - 0.5) * 40;
        donut.position.y = (Math.random() - 0.5) * 40;
        donut.position.z = (Math.random() - 0.5) * 40;

        donut.rotation.x = Math.random() * (Math.PI / 2);
        donut.rotation.y = Math.random() * (Math.PI / 2);

        const scale = Math.random();
        donut.scale.set(scale, scale, scale);

        group.add(donut);
    }

    return group;
}

export { createDonuts }