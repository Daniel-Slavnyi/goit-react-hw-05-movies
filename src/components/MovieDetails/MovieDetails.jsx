import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from 'services/fetchMovie';

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
    <div>
      <Link to={location.current.state?.from}>Go back</Link>
      <img
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
        <p>Score</p>
        <p>{Math.ceil((film.vote_average * 100) / 10)} %</p>
        <p>Overwiew</p>
        <p>{film.overview}</p>
        <p>Genres</p>
        {film.genres &&
          film.genres.map(item => <p key={item.id}>{item.name}</p>)}
      </div>
      <div>
        <NavLink to="cast">cast </NavLink>
        <NavLink to="reviews">reviews </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
