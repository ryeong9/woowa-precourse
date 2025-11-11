const getMaxPosition = function getMaxPosition(cars) {
  return cars.reduce((maxPosition, car) => Math.max(maxPosition, car.position), 0);
};

const getWinners = function getWinner(cars) {
  const max = getMaxPosition(cars);
  return cars.filter((car) => car.position === max).map((car) => car.name);
};

export default getWinners;
