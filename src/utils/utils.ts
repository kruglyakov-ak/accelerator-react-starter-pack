import { GuitarType, GuitarTypeToReadable, PromoCode } from '../const';

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

const convertPromoCodeToDiscount = (promoCode: PromoCode = PromoCode.Unvalid) => {
  switch (promoCode) {
    case PromoCode.Light:
      return 3000;
    case PromoCode.Medium:
      return 4000;
    case PromoCode.Height:
      return 5000;
    default:
      return 0;
  }
};

export {
  getRandomNumberInRange,
  changeGuitarTypeToReadable,
  convertPromoCodeToDiscount
};
