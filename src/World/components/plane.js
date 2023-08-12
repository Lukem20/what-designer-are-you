import { 
    PlaneGeometry, 
    MeshStandardMaterial, 
    Mesh,
    MathUtils, 
    TextureLoader 
} from 'three';

function createPlane () {
    function createMaterial () {
        // Create and texture loader and load the texture
        const textureLoader = new TextureLoader();
        const textureBaseColor = textureLoader.load('/assets/textures/woodendoor/color.jpg');
        const textureNormalMap = textureLoader.load('/assets/textures/woodendoor/normal.jpg');
        const textureHeightMap = textureLoader.load('/assets/textures/woodendoor/height.jpg');
        const textureRoughessMap = textureLoader.load('/assets/textures/woodendoor/roughness.jpg');
        const textureAmbientOcclusionMap = textureLoader.load('/assets/textures/woodendoor/ambientOcclusion.jpg');
        const textureMetallic = textureLoader.load('/assets/textures/woodendoor/metalness.jpg');

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

    const geometry = new PlaneGeometry(3, 3);
    const material = createMaterial();
    const plane = new Mesh(geometry, material);

    plane.position.y = 5;

    const radiansPerSecond = MathUtils.degToRad(30);
    plane.tick = (delta) => {
        plane.rotation.z += radiansPerSecond * delta;
        plane.rotation.x += radiansPerSecond * delta;
        plane.rotation.y += radiansPerSecond * delta;
        
    };
    
    return plane;
}

export { createPlane }