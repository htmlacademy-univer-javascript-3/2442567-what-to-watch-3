import MainScreen from '../../pages/main-srceen/main-screen';

type AppProps = {
  filmGenre: string;
  filmYear: number;
  filmTitle: string;
  filmImage: string;
}

function App(props: AppProps): JSX.Element {
  return (
    <MainScreen filmGenre={props.filmGenre} filmTitle={props.filmTitle} filmYear={props.filmYear} filmImage={props.filmImage} />
  );
}

export default App;
