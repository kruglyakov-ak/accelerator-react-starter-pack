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
  FourStrings = 4,
  SixStrings = 6,
  SevenStrings = 7,
  TwelveStrings = 12,
}

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

const SortTypePath = {
  [SortType.Default]: '',
  [SortType.Price]: '&_sort=price',
  [SortType.Rating]: '&_sort=rating',
};

const OrderTypePath = {
  [OrderType.Default]: '',
  [OrderType.Asc]: '&_order=asc',
  [OrderType.Desc]: '&_order=desc',
};

const enum FilterPath {
  PriceGte = '&price_gte=',
  PriceLte = '&price_lte=',
  Type = '&type_like=',
  String = '&stringCount_like=',
}

const enum DefaultPriceRange {
  Min = 1000,
  Max = 30000,
}


export {
  AppRoute,
  APIRoute,
  GuitarType,
  GuitarTypeToReadable,
  SortType,
  OrderType,
  SortTypePath,
  OrderTypePath,
  FilterPath,
  DefaultPriceRange,
  StringCount
};
