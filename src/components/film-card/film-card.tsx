import {useNavigate} from 'react-router-dom';

type FilmCardProps = {
  id: number;
  name: string;
  imageSrc: string;
  onActive: (id: number) => void;
}

function FilmCard(props: FilmCardProps) {
  const navigate = useNavigate();
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        props.onActive(props.id);
      }}
      onClick={() => navigate(`films/${props.id}`)}
    >
      <div className="small-film-card__image">
        <img src={props.imageSrc} alt={props.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{props.name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
