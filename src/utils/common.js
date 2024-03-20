export const getRandomArrayElement = (points) => {
  return points[Math.floor(Math.random() * points.length)];
}

export const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

