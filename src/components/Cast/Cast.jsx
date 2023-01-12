import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieForCredits } from 'services/fetchMovie';
import { ImgEl, WrapImg } from './Cast.styled';
import defualtImage from './dfi.jpg';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieForCredits(id).then(data => setCast(data.cast));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(cast);
  return (
    <WrapImg>
      {cast.length > 0 &&
        cast.map(item => (
          <ImgEl
            key={item.cast_id}
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                : defualtImage
            }
            alt={`actor ${item.name}`}
          />
        ))}
    </WrapImg>
  );
}
