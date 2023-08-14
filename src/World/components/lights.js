import { 
    DirectionalLight, 
    HemisphereLight, 
    AmbientLight, 
    PointLight, 
    RectAreaLight, 
    SpotLight,
    HemisphereLightHelper,
    PointLightHelper,
} from 'three';

function createLights() {
    const mainLight = new DirectionalLight(0xffffff, 2);
    const hemisphereLight = new HemisphereLight(0xff0000, 0x0000ff, 1.5);
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    const pointLight = new PointLight(0xff9000, 1);
    const rectAreaLight = new RectAreaLight(0x4e00ff, 5, 1, 1);
    const spotLight = new SpotLight(0x78ff00, 0.5, Math.PI * 0.1, 0.25, 1);
    mainLight.position.set(10, 10, 10);
    pointLight.position.set(0, -2, -2);

    const hemisphereLightHelper = new HemisphereLightHelper(hemisphereLight, 1);
    const pointLightHelper = new PointLightHelper(pointLight, 1);

    return { 
        mainLight, 
        hemisphereLight, 
        ambientLight, 
        pointLight, 
        rectAreaLight,
        spotLight,
        hemisphereLightHelper,
        pointLightHelper,
    };
}

export { createLights };