import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieForCredits } from 'services/fetchMovie';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchMovieForCredits(id).then(data => setCast(data.cast));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {cast.length > 0 &&
        cast.map(item => (
          <img
            src={
              item.profile_path &&
              `https://image.tmdb.org/t/p/w500${item.profile_path}`
            }
            alt={`actor ${item.name}`}
          />
        ))}
    </div>
  );
}
