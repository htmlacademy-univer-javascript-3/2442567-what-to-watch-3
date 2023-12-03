import {FilmInfo} from '../../types/types.ts';
import {useParams} from 'react-router-dom';
import { useState, ChangeEvent } from 'react';

type NewReviewScreenProps = {
  films: FilmInfo[];
}

function NewReviewScreen({films}: NewReviewScreenProps): JSX.Element {
  const { id } = useParams();
  const movie = (films.find((film) => film.id === +(id ?? 1)) ?? films[0]);

  const [formData, setFormData] = useState({
    score: [false, false, false, false, false, false, false, false, false, false],
    comment: '',
  });

  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{movie.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={movie.imageSrc} alt={movie.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
            {
              formData.score.map((isChecked, id) => {
                const inputValue = formData.score.length - id
                const keyValue = `star-${inputValue}`;
                return (
                  <>
                    <input className="rating__input" id={keyValue} type="radio" name="rating" value={inputValue} checked={isChecked}
                      onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                        const value = target.checked;
                        setFormData({...formData, score: [...formData.score.slice(0, id), value, ...formData.score.slice(id+1)]});}} />
                    <label className="rating__label" htmlFor={keyValue}>Rating {inputValue}</label>
                  </>
                );
              })
            } 
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            onChange={(evt) => {setFormData({...formData, comment: evt.target.value});}}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default NewReviewScreen;
