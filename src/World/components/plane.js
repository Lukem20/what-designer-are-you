import { 
    PlaneGeometry, 
    MeshStandardMaterial, 
    Mesh,
    //MathUtils, 
    //TextureLoader,
} from 'three';

function createPlane () {
    const material = new MeshStandardMaterial();
    material.roughness = 0.4;
    const geometry = new PlaneGeometry(15, 15);
    const plane = new Mesh(geometry, material);

    plane.rotateX(Math.PI * 1.5);
    plane.position.y = -3
    
    return plane;
}

export { createPlane }