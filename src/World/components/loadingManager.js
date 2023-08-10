import { LoadingManager } from "three";

function createLoadingManager () {
    const loadingManager = new LoadingManager();
    loadingManager.onStart = () => {
        console.log('onStart');
    }
    loadingManager.onLoad = () => {
        console.log('onLoad');

    }
    loadingManager.onProgress = () => {
        console.log('onProgress');

    }
    loadingManager.onError = () => {
        console.log('onError');

    }
}

export { createLoadingManager }