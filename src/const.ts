const enum AppRoute {
  Main = '/',
  Query = '/?',
  Cart = '/cart',
  Product = '/product/:id',
  Plug = '#'
}

const enum APIRoute {
  Guitars = '/guitars',
}

const enum GuitarType {
  Electric = 'electric',
  Acoustic = 'acoustic',
  Ukulele = 'ukulele',
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

const GuitarTypeToReadable = {
  [GuitarType.Electric]: 'Электрогитара',
  [GuitarType.Acoustic]: 'Акустическая гитара',
  [GuitarType.Ukulele]: 'Укулеле',
} as const;

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

export {
  AppRoute,
  APIRoute,
  GuitarType,
  GuitarTypeToReadable,
  SortType,
  OrderType,
  FilterPath,
  DefaultPriceRange,
  StringCount,
  StringCountNumber,
  GUITARS_ON_PAGE,
  QueryParam,
  BooleanToString
};
