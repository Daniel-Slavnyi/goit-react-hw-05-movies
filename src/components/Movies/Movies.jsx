import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQery } from 'services/fetchMovie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ButtonlEl,
  FormEl,
  InputEl,
  LabelEl,
  LiEl,
  SpanEl,
  UlEl,
} from './Movies.styled';
import defualtImage from '../Cast/dfi.jpg';

const useFirstRender = () => {
  const isFirstRender = useRef(true);

  const togleRender = () => {
    isFirstRender.current = false;
  };

  return [isFirstRender.current, togleRender];
};

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [inputValue, setInputValue] = useState(query ?? '');
  const [qeryMovie, setQeryMovie] = useState([]);
  const [isFirstRender, setIsFirstRender] = useFirstRender();

  console.log('qeryMovie =>', qeryMovie);
  const location = useLocation();

  useEffect(() => {
    if (isFirstRender && !inputValue) {
      setIsFirstRender();
      return;
    }
    console.log(isFirstRender);
    fetchMovieByQery(query).then(data => setQeryMovie(data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (qeryMovie.length === 0 && inputValue && !isFirstRender) {
      toast('There is nothing to movies, please choose another value');
      // setInputValue('');
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qeryMovie]);

  const onSubmit = e => {
    e.preventDefault();

    if (!inputValue.trim()) {
      toast('There is nothing to search, please write some value');
      return;
    }
    setSearchParams(inputValue !== '' ? { query: inputValue } : {});
  };

  return (
    <>
      <ToastContainer />
      <FormEl onSubmit={onSubmit}>
        <LabelEl>
          <InputEl
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder=" "
          />
          <SpanEl>Movie</SpanEl>
        </LabelEl>
        <ButtonlEl type="submit">Seacrh</ButtonlEl>
      </FormEl>
      <UlEl>
        {qeryMovie.map(item => (
          <LiEl key={item.id}>
            <Link to={`${item.id}`} state={{ from: location }}>
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : defualtImage
                }
                alt=""
              />
            </Link>
          </LiEl>
        ))}
      </UlEl>
    </>
  );
}
