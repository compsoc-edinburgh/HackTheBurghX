const calculateViewportWidth = () => {
    return window.innerWidth || document.documentElement.clientWidth;
};

export const VIEW_PORT_WIDTH = calculateViewportWidth() - 200;
// export const VIEW_PORT_WIDTH = 200;
export const VIEW_PORT_HEIGHT = 400;
export const HALF_VIEW_PORT_WIDTH = (1 / 2) * VIEW_PORT_WIDTH;
export const THIRD_LEFT_PORT_WIDTH = (1 / 3) * VIEW_PORT_WIDTH;
export const THIRD_RIGHT_PORT_WIDTH = (2 / 3) * VIEW_PORT_WIDTH;
export const CLOUD_WIDTH = 95;
export const BIRD_WIDTH = 92;
export const TOTAL_CLOUDS = 1;
export const TOTAL_TREES = 1;
export const TOTAL_BIRDS = 1;