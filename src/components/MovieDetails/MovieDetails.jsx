import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovie';
import {
  ImgEl,
  LinkEl,
  NavLinkEl,
  TextInfoEl,
  WrapEl,
  WrapInfoEl,
  WrapNavLinkEl,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [film, setFilm] = useState({});
  const { id } = useParams();
  const prevLocation = useLocation();
  const location = useRef(prevLocation);

  useEffect(() => {
    fetchMovieById(id).then(data => setFilm(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WrapEl>
      <LinkEl to={location.current.state?.from}>Go back</LinkEl>
      <WrapInfoEl>
        <ImgEl
          src={
            film?.poster_path &&
            `https://image.tmdb.org/t/p/w500${film.poster_path}`
          }
          alt={film?.original_title}
        />
        <div>
          <h2>
            {film.original_title} {film.release_date}
          </h2>
          <TextInfoEl>
            Score <span>{Math.ceil((film.vote_average * 100) / 10)} %</span>
          </TextInfoEl>
          <TextInfoEl>
            Overwiew <span>{film.overview}</span>
          </TextInfoEl>
          <TextInfoEl>
            Genres
            {film.genres &&
              film.genres.map(item => <span key={item.id}>{item.name}</span>)}
          </TextInfoEl>

          <WrapNavLinkEl>
            <NavLinkEl to="cast">cast </NavLinkEl>
            <NavLinkEl to="reviews">reviews </NavLinkEl>
            <Outlet />
          </WrapNavLinkEl>
        </div>
      </WrapInfoEl>
    </WrapEl>
  );
}
