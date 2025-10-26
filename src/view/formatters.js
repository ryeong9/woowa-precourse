const formatPositionToLine = function formatPositionToLine({ name, position }) {
  const bar = '-'.repeat(position);
  return `${name} : ${bar}`;
};

const formatRound = function formatRound(cars) {
  return cars.map((car) => formatPositionToLine(car)).join('\n');
};

const formatWinner = function formatWinner(names) {
  return `최종 우승자 : ${names.join(', ')}`;
};

export { formatRound, formatWinner };