import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieByTranding } from 'services/fetchMovie';
import { ItemOfImg, UlList, Title, LinkOfImg } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(movies);
  useEffect(() => {
    fetchMovieByTranding().then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <UlList>
        {movies.map(item => (
          <ItemOfImg key={item.id}>
            <LinkOfImg to={`/movies/${item.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={`movie of ${item.original_title ?? item.title}`}
              />
              <p>{item.name ?? item.title}</p>
            </LinkOfImg>
          </ItemOfImg>
        ))}
      </UlList>
    </>
  );
}
