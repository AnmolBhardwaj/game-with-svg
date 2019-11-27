import { calculateAngle } from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
import moveBalls from './moveCannonBalls';
import checkCollisions from './checkCollisions';



function moveObjects(state, action) {
  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0,
  };

  if (!state.gameState.started) return state;

  let cannonBalls = moveBalls(state.gameState.cannonBalls);

  const newState = createFlyingObjects(state);

  const now = (new Date()).getTime();
  let flyingObjects = newState.gameState.flyingObjects.filter(object => (
    (now - object.createdAt) < 4000
  ));

  const objectsDestroyed = checkCollisions(cannonBalls, flyingObjects);
  const cannonBallsDestroyed = objectsDestroyed.map(object => (object.cannonBallId));
  const flyingDiscsDestroyed = objectsDestroyed.map(object => (object.flyingDiscId));

  cannonBalls = cannonBalls.filter(cannonBall => (cannonBallsDestroyed.indexOf(cannonBall.id)));
  flyingObjects = flyingObjects.filter(flyingDisc => (flyingDiscsDestroyed.indexOf(flyingDisc.id)));



  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);
  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      flyingObjects,
      cannonBalls,
    },
    angle,
  };
}

export default moveObjects;