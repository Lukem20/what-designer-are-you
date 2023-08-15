import { 
    DirectionalLight, 
    AmbientLight, 
    PointLight, 
    SpotLight,
    PointLightHelper,
    SpotLightHelper,
    CameraHelper,
} from 'three';

function createLights() {
    const directionalLight = new DirectionalLight(0xffffff, 2);
    const ambientLight = new AmbientLight(0xffffff, 0.4);
    const pointLight = new PointLight(0xff9000, 2.2);
    const spotLight = new SpotLight(0x78ff00, 0.5, 10, Math.PI * 0.1);
   
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.far = 30;
    spotLight.castShadow = true;
    spotLight.position.set(8, 3, 5);
    pointLight.castShadow = true;
    pointLight.position.set(0, -2, 2);

    directionalLight.castShadow = false;
    spotLight.castShadow = false;
    pointLight.castShadow = false;

    const pointLightHelper = new PointLightHelper(pointLight, 0.5);
    const spotLightHelper = new SpotLightHelper(spotLight)
    const directionalLightCameraHelper = new CameraHelper(directionalLight.shadow.camera);

    return { 
        directionalLight, 
        ambientLight, 
        pointLight, 
        spotLight,
        pointLightHelper,
        spotLightHelper,
        directionalLightCameraHelper,
    };
}

export { createLights };