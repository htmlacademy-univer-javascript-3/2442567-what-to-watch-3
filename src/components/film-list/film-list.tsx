import {FilmInfo} from '../../types/types.ts';
import FilmCard from '../film-card/film-card.tsx';

type FilmListProps = {
  films: FilmInfo[];
}

function FilmList(props: FilmListProps) {
  return (
    <div className="catalog__films-list">
      {
        props.films.map((film) =>
        (
        <FilmCard key={film.id} film={film} />
        ))
      }
    </div>
  );
}

export default FilmList;
