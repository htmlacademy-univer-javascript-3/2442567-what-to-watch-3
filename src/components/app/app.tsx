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
import { FilmInfo } from '../../types/types';

type AppProps = {
  film: FilmInfo[];
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route index element={<MainScreen films={props.film} />} />
          <Route path={AppRoute.Login} element={<SignInScreen />} />
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <PersonalMoviesScreen films={props.film}/>
            </PrivateRoute>
            
          } />
          <Route path={AppRoute.Film}>
            <Route index element={<MoviePageScreen films={props.film}/>}/>
            <Route path="review" element={<MovieReviewScreen films={props.film}/>} />
          </Route>
          <Route path={AppRoute.Player} element={<PlayerScreen />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
