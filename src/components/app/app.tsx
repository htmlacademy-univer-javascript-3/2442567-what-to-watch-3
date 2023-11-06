import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-srceen/main-screen';
import Error404 from '../../pages/error-404/error-404';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PersonalMoviesScreen from '../../pages/personal-movies-screen/personal-movies-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import MovieReviewScreen from '../../pages/movie-review-screen/movie-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  filmGenre: string;
  filmYear: number;
  filmTitle: string;
  filmImage: string;
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route index element={<MainScreen filmGenre={props.filmGenre} filmTitle={props.filmTitle} filmYear={props.filmYear} filmImage={props.filmImage} />} />
          <Route path={AppRoute.Login} element={<SignInScreen />} />
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <PersonalMoviesScreen />
            </PrivateRoute>
            
          } />
          <Route path={AppRoute.Film}>
            <Route index element={<MoviePageScreen />}/>
            <Route path="review" element={<MovieReviewScreen />} />
          </Route>
          <Route path={AppRoute.Player} element={<PlayerScreen />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{/* <Routes>
<Route path='/' >
  <Route index element={<MainScreen filmGenre={props.filmGenre} filmTitle={props.filmTitle} filmYear={props.filmYear} filmImage={props.filmImage} />} />
  <Route path='login' element={<SignInScreen />} />
  <Route path="mylist" element={<PersonalMoviesScreen />} />
  <Route path="films/:id">
      <Route index element={<MoviePageScreen />} />
      <Route path="/review" element={<MovieReviewScreen />} />
  </Route>
  <Route path="player/:id" element={<PlayerScreen />} />
</Route>
<Route path="*" element={<Error404 />} />
</Routes> */}