const enum AppRoute {
  Main = '/',
  Query = '/?',
  Cart = '/cart',
  Product = '/product/:id',
  Plug = '#'
}

const enum APIRoute {
  Guitars = '/guitars',
  Comments = '/comments',
}

const enum GuitarType {
  Electric = 'electric',
  Acoustic = 'acoustic',
  Ukulele = 'ukulele',
}


const enum GuitarTypeToReadable {
  Electric = 'Электрогитара',
  Acoustic = 'Акустическая гитара',
  Ukulele = 'Укулеле',
}

const enum StringCount {
  FourStrings = '4-strings',
  SixStrings = '6-strings',
  SevenStrings = '7-strings',
  TwelveStrings = '12-strings',
}

const enum StringCountNumber {
  FourStrings = 4,
  SixStrings = 6,
  SevenStrings = 7,
  TwelveStrings = 12,
}

const enum RatingCountNumber {
  Zero = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}

enum SortType {
  Price = 'price',
  Rating = 'rating',
}

const enum OrderType {
  Asc = 'asc',
  Desc = 'desc',
}

const enum FilterPath {
  Sort = '&_sort=',
  Order = '&_order=',
  PriceGte = '&price_gte=',
  PriceLte = '&price_lte=',
  Type = '&type_like=',
  String = '&stringCount_like=',
  PaginationStart = '&_start=',
  PaginationEnd = '&_end=',
}

const enum QueryParam {
  Sort = '_sort',
  Order = '_order',
  PriceGte = 'price_gte',
  PriceLte = 'price_lte',
  AcusticType = 'acusticType',
  ElectricType = 'electricType',
  UkuleleType = 'ukuleleType',
  FourString = '4stringCount',
  SixString = '6stringCount',
  SevenString = '7stringCount',
  TwelveString = '12stringCount',
  CurrentPageNumber = 'page',
}

const enum DefaultPriceRange {
  Min = 1000,
  Max = 30000,
}

const GUITARS_ON_PAGE = 9;

const enum BooleanToString {
  True = '1',
  False = '0'
}

const MIN_COMMENT_LENGTH = 3;

const MIN_COUNT_GUITAR_IN_CART = 1;
const MAX_COUNT_GUITAR_IN_CART = 99;

enum PromoCode {
  Unvalid = '',
  Light = 'light-333',
  Medium = 'medium-444',
  Height = 'height-555'
}

const enum PromoCodeValidate {
  Unknown = 'unknown',
  True = 'true',
  False = 'false'
}

export {
  AppRoute,
  APIRoute,
  GuitarType,
  SortType,
  OrderType,
  FilterPath,
  DefaultPriceRange,
  StringCount,
  StringCountNumber,
  GUITARS_ON_PAGE,
  QueryParam,
  BooleanToString,
  RatingCountNumber,
  GuitarTypeToReadable,
  MIN_COMMENT_LENGTH,
  MIN_COUNT_GUITAR_IN_CART,
  MAX_COUNT_GUITAR_IN_CART,
  PromoCode,
  PromoCodeValidate
};
