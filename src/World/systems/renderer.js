import { WebGLRenderer, LinearSRGBColorSpace, Line } from 'three';

function createRenderer() {
    const renderer = new WebGLRenderer({ 
        antialias: true,  
    });
    renderer.outputColorSpace = LinearSRGBColorSpace;
    renderer.physicallyCorrectLights = true;
    
    return renderer;
}

export { createRenderer }