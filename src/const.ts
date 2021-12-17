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

const GuitarTypeToReadable = {
  [GuitarType.Electric]: 'Электрогитара',
  [GuitarType.Acoustic]: 'Акустическая гитара',
  [GuitarType.Ukulele]: 'Укулеле',
};

export {
  AppRoute,
  APIRoute,
  GuitarType,
  GuitarTypeToReadable
};
