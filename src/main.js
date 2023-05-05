import { World } from './World/World.js';

async function main() {
    const container = document.querySelector('#scene-container');
    const world = new World(container);

    // Produces a single frame (render on demand)
    //world.render() 

    // Complete async loading
    await world.init();
    
    // Start animation loop (produce a stream of frames)
    world.start();
}

main();