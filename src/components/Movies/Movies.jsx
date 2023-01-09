import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieByQery } from 'services/fetchMovie';

export default function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [qeryMovie, setQeryMovie] = useState([]);

  const onSubmit = e => {
    e.preventDefault();

    fetchMovieByQery(inputValue).then(data => setQeryMovie(data.results));
  };

  return (
    <>
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
