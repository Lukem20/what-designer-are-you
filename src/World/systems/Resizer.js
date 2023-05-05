const setSize = (container, camera, renderer) => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
    constructor(container, camera, renderer) {
        // Set initial size on load
        setSize(container, camera, renderer);

        // Set the size again if a resize occurs
        window.addEventListener("resize", () => {
            setSize(container, camera, renderer);
            // Add custom behavior on resize
            this.onResize();
        });
    }

    onResize() {}
}

export { Resizer };