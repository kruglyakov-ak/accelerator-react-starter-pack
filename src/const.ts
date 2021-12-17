const enum AppRoute {
  Main = '/',
  Cart='/cart',
  Product='/product/:id',
  Plug='#'
}

const enum APIRoute {
  Guitars = '/guitars',
}

const enum GuitarType {
  Electric = 'electric',
  Acoustic = 'acoustic',
  Ukulele = 'ukulele',
}

export {
  AppRoute,
  APIRoute,
  GuitarType
};
