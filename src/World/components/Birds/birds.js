import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { setupModel } from './setupModel';

async function loadBirds() {
    const loader = new GLTFLoader();

    const [parrotData, flamingoData, storkData] = await Promise.all([
        loader.loadAsync('src/World/assets/models/Parrot.glb'),
        loader.loadAsync('src/World/assets/models/Flamingo.glb'),
        loader.loadAsync('src/World/assets/models/Stork.glb'),
    ]);

    const parrot = setupModel(parrotData);
    const flamingo = setupModel(flamingoData);
    const stork = setupModel(storkData);

    parrot.position.set(0, -50, 10);
    flamingo.position.set(75, 0, -75);
    stork.position.set(-75, 0, -50);

    
    return { parrot, flamingo, stork };
}

export { loadBirds };