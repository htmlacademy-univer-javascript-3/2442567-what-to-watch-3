import {FilmInfo} from '../../types/types.ts';
import FilmCard from '../film-card/film-card.tsx';
import {useState} from 'react';

type FilmListProps = {
  films: FilmInfo[];
}

function FilmList(props: FilmListProps) {
  const [activeFilm, setActiveFilm] = useState(0);
  const handleActiveFilm = (id: number) => {
    setActiveFilm(id);
  };
  return (
    <div className="catalog__films-list">
      {
        props.films.map((film) =>
        (
        <FilmCard key={film.id} id={film.id} name={film.name} imageSrc={film.imageSrc} onActive={handleActiveFilm} />
        ))
      }
    </div>
  );
}

export default FilmList;
