import { 
    PlaneGeometry, 
    MeshStandardMaterial, 
    Mesh,
    TextureLoader,
} from 'three';

function createPlane () {
    const textureLoader = new TextureLoader();
    const simpleShadow = textureLoader.load('assets/textures/shadows/simpleShadow.jpg');
   
    const material = new MeshStandardMaterial();
    const geometry = new PlaneGeometry(15, 15);
    const plane = new Mesh(geometry, material);

    plane.receiveShadow = true;
    plane.rotateX(Math.PI * 1.5);
    plane.position.y = -3
    
    return plane;
}

export { createPlane }