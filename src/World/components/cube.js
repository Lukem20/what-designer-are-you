import { 
    BoxGeometry, 
    MeshStandardMaterial, 
    Mesh, 
    MathUtils, 
    TextureLoader 
} from 'three';

function createCube () {
    function createMaterial () {
        // Create and texture loader and load the texture
        const textureLoader = new TextureLoader();
        const textureBaseColor = textureLoader.load('src/World/assets/textures/harshbrick/harshbricks-albedo.png');
        const textureNormalMap = textureLoader.load('src/World/assets/textures/harshbrick/harshbricks-normal.png');
        const textureHeightMap = textureLoader.load('src/World/assets/textures/harshbrick/harshbricks-height5-16.png');
        const textureRoughessMap = textureLoader.load('src/World/assets/textures/harshbrick/harshbricks-roughness.png');
        const textureAmbientOcclusionMap = textureLoader.load('src/World/assets/textures/harshbrick/harshbricks-ao2.png');
        const textureMetallic = textureLoader.load('src/World/assets/textures/harshbrick/harshbricks-metalness.png');

        // Create a material using the loaded texture as a color map.
        const material = new MeshStandardMaterial({ 
            map: textureBaseColor,
            normalMap: textureNormalMap,
            displacementMap: textureHeightMap,
            displacementScale: 0.05,
            roughnessMap: textureRoughessMap,
            roughness: 0.5,
            aoMap: textureAmbientOcclusionMap,
            metalnessMap: textureMetallic,
        });

        return material;
    }

    const geometry = new BoxGeometry(3, 3, 3);
    const material = createMaterial();
    const cube = new Mesh(geometry, material);

    const clonedCube = cube.clone();
    clonedCube.position.x  = -8;

    cube.rotation.set(-0.5, -0.1, 0.8);

    const radiansPerSecond = MathUtils.degToRad(30);
    cube.tick = (delta) => {
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };
    
    return cube;
}

export { createCube }