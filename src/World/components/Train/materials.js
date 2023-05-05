import { MeshStandardMaterial } from "three";

function createMaterials () {
    const body = new MeshStandardMaterial({
        color: 'mediumslateblue',
        flatShading: true,
    });

    const detail = new MeshStandardMaterial({
        color: 'dimgray',
        flatShading: true,
    });

    const window = new MeshStandardMaterial({
        color: 'silver',
        flatShading: true,
    })

    return { body, detail, window };
}

export { createMaterials };