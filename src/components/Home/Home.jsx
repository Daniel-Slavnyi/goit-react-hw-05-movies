import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieByTranding } from 'services/fetchMovie';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieByTranding().then(data => setMovies(data.results));
  }, []);

  console.log(movies);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.name ?? item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
