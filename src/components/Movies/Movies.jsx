import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieByQery } from 'services/fetchMovie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [qeryMovie, setQeryMovie] = useState([]);

  useEffect(() => {
    if (qeryMovie.length === 0 && !inputValue) {
      return;
    }

    if (qeryMovie.length === 0 && inputValue) {
      toast('There is nothing to movies, please choose another value');
      setInputValue('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qeryMovie]);

  const onSubmit = e => {
    e.preventDefault();
    if (!inputValue.trim()) {
      toast('There is nothing to search, please write some value');
      return;
    }

    fetchMovieByQery(inputValue).then(data => setQeryMovie(data.results));
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <label htmlFor="">
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </label>
        <button type="submit">Seacrh</button>
      </form>
      <ul>
        {qeryMovie.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
