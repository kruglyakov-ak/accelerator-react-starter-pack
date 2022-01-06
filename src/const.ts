const enum AppRoute {
  Main = '/',
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

const StringCountNumber = {
  [StringCount.FourStrings]: 4,
  [StringCount.SixStrings]: 6,
  [StringCount.SevenStrings]: 7,
  [StringCount.TwelveStrings]: 12,
};

const GuitarTypeToReadable = {
  [GuitarType.Electric]: 'Электрогитара',
  [GuitarType.Acoustic]: 'Акустическая гитара',
  [GuitarType.Ukulele]: 'Укулеле',
};

enum SortType {
  Default = '',
  Price = 'price',
  Rating = 'rating',
}

const enum OrderType {
  Default = '',
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

const enum DefaultPriceRange {
  Min = 1000,
  Max = 30000,
}

const GUITARS_ON_PAGE = 9;

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
  GUITARS_ON_PAGE
};
