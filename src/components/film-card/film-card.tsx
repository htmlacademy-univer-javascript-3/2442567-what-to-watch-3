import {useNavigate} from 'react-router-dom';
import { FilmInfo } from '../../types/types';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: FilmInfo;
}

function FilmCard({film}: FilmCardProps) {
  const navigate = useNavigate();
  return (
    <article className="small-film-card catalog__films-card"
    onClick={() => navigate(`film/${film.id}`)}
    >
      <VideoPlayer src='https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
        posterSrc={film.imageSrc}
      />
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
