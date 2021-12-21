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

const GuitarTypeToReadable = {
  [GuitarType.Electric]: 'Электрогитара',
  [GuitarType.Acoustic]: 'Акустическая гитара',
  [GuitarType.Ukulele]: 'Укулеле',
};

const enum SortType {
  Default = '/guitars',
  PriceAsc = '/guitars?_sort=price',
  PriceDesc = '/guitars?_sort=price',
  RatingOrderAsc = '/guitars?_sort=rating&_order=asc',
  RatingOrderDesc = '/guitars?_sort=rating&_order=desc',
}

export {
  AppRoute,
  APIRoute,
  GuitarType,
  GuitarTypeToReadable,
  SortType
};
