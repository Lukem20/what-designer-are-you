import { World } from './World/World.js';
import { Shapes } from './World/Shapes.js';

async function main() {
    const container1 = document.querySelector('#scene-container');
    const container2 = document.querySelector('#shape-container');
    const name = new World(container1);
    const shapes = new Shapes(container2);

    // Produces a single frame (render on demand)
    // name.render() 

    // Complete async loading
    // await world.init();
    
    // Start animation loop (produce a stream of frames)
    name.start();
    shapes.start();
}

main();