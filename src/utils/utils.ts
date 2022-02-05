import { GuitarType, GuitarTypeToReadable } from '../const';

const getRandomNumberInRange = (min = 0, max = 1, numberSymbolsAfterComma = 0): number => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const randomNumber = Math.random() * (upper - lower) + lower;
  return Number(randomNumber.toFixed(numberSymbolsAfterComma));
};

const changeGuitarTypeToReadable = (type: GuitarType) => {
  switch (type) {
    case GuitarType.Acoustic:
      return GuitarTypeToReadable.Acoustic;
    case GuitarType.Electric:
      return GuitarTypeToReadable.Electric;
    case GuitarType.Ukulele:
      return GuitarTypeToReadable.Ukulele;
  }
};

export {
  getRandomNumberInRange,
  changeGuitarTypeToReadable
};
