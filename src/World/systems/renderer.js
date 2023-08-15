import { WebGLRenderer, LinearSRGBColorSpace, PCFShadowMap } from 'three';

function createRenderer() {
    const renderer = new WebGLRenderer({ 
        antialias: true,  
    });
    renderer.outputColorSpace = LinearSRGBColorSpace;
    renderer.physicallyCorrectLights = true;
    renderer.shadowMap.enabled = false;
    renderer.shadowMap.type = PCFShadowMap;
    
    return renderer;
}

export { createRenderer }