import data from './data';

const getRandomNumbers = (min: number, max: number): number[] => {
  let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  let num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  let num3 = Math.floor(Math.random() * (max - min + 1)) + min;
  let num4 = Math.floor(Math.random() * (max - min + 1)) + min;

  if (
    num1 === num2 ||
    num1 === num3 ||
    num1 === num4 ||
    num2 === num3 ||
    num2 === num4 ||
    num3 === num4
  ) {
    getRandomNumbers(min, max);
  }

  return [num1, num2, num3, num4];
};

const getRandomCountry = (
  responseNumber?: number
): { code: string; name: string }[] => {
  const randoms = getRandomNumbers(0, 251);

  return [
    data[randoms[0]],
    data[randoms[1]],
    data[randoms[2]],
    data[randoms[3]]
  ];
};

export default getRandomCountry;
