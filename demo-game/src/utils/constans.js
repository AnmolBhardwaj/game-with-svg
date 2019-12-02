// very wide to provide as full screen feeling
export const skyAndGroundWidth = 5000;
export const gameWidth = 800;
export const gameHeight = 1200;
export const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];

export const createInterval = 1000;

export const maxFlyingObjects = 6;

export const flyingObjectsStarterYAxis = -800;

export const SHOOT = 'SHOOT';

// ... other function constants

export const shoot = (mousePosition) => ({
  type: SHOOT,
  mousePosition,
});



export const flyingObjectsStarterPositions = [
  0,
  0,
  0,
  0,
];


