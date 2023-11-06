export const Setting = {
  filmGenre: 'Drama',
  filmTitle: 'The Grand Budapest Hotel',
  filmYear: 2014,
  filmImage: 'img/bg-the-grand-budapest-hotel.jpg'
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}