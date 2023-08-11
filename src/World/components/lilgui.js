import * as lilgui from 'lil-gui'
import gsap from 'gsap'

function createGUI (mesh) {
    const parameters = {
        color: 0xff0000,
        spin: () => {
            gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + 10 })
        }
    }

    const gui = new lilgui.GUI();
    gui
        .add(mesh.position, 'y')
        .min(-3)
        .max(3)
        .step(0.01)
        .name('elevation');
    gui
        .add(mesh, 'visible');
    gui
        .add(mesh.material, 'wireframe');
    gui
        .addColor(parameters, 'color')
        .onChange(() => {
            mesh.material.color.set(parameters.color);
        });
    gui
        .add(parameters, 'spin');
    gui
        .add(mesh.material, 'metalness')
        .min(0)
        .max(1)
        .step(0.0001);
    gui
        .add(mesh.material, 'roughness')
        .min(0)
        .max(1)
        .step(0.0001);
}

export { createGUI }