import generateRandomNumber from '../utils/generateRandomNumber.js';

const SHOULD_MOVE_THRESHOLD = 4;

const shouldMove = function shouldMove(randomNumber) {
  if (randomNumber >= SHOULD_MOVE_THRESHOLD) return true;
  return false;
};

const createCarStates = function createCarStates(carNames) {
  return carNames.map((name) => ({ name, position: 0 }));
};

const moveCarsOneRound = function moveCarsOneRound(cars, randomNumberGenerator) {
  return cars.map((car) => {
    const randomNumber = randomNumberGenerator();
    let position = car.position;

    if (shouldMove(randomNumber)) {
      position += 1;
    }
    return { name: car.name, position };
  });
};

const runRace = function runRace(carNames, tryCount, randomNumberGenerator = generateRandomNumber) {
  let cars = createCarStates(carNames);
  const roundHistory = [];

  for (let i = 0; i < tryCount; i += 1) {
    cars = moveCarsOneRound(cars, randomNumberGenerator);
    roundHistory.push(cars);
  }
  return { cars, roundHistory };
};

export default runRace;
