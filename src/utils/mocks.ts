import { datatype, image, lorem } from 'faker';
import { GuitarType } from '../const';
import { Comment } from '../types/comment';
import { Guitar } from '../types/guitar';
import { getRandomNumberInRange } from './utils';

const makeFakeGuitars = (): Guitar[] => (
  new Array(getRandomNumberInRange(1, 5)).fill(null).map(() => ({
    id: datatype.number(5),
    name: lorem.word(),
    vendorCode: lorem.word(),
    type: GuitarType.Acoustic,
    description: lorem.words(),
    previewImg: image.imageUrl(),
    stringCount: datatype.number(12),
    rating: datatype.number(5),
    price: datatype.number(1000),
  }))
);

const makeFakeComments = (): Comment[] => (
  new Array(getRandomNumberInRange(1, 5)).fill(null).map(() => ({
    id: lorem.word(),
    userName: lorem.words(),
    advantage: lorem.words(),
    disadvantage: lorem.words(),
    comment: lorem.words(),
    rating: datatype.number(5),
    createAt: String(datatype.datetime(1)),
    guitarId: datatype.number(5),
  }))
);

export {
  makeFakeGuitars,
  makeFakeComments
};
