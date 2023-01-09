import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieForReviews } from 'services/fetchMovie';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieForReviews(id).then(data => setReviews(data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {reviews.length > 0 &&
        reviews.map(item => {
          return (
            <>
              <p>{item.author}</p>

              <p>{item.content}</p>
            </>
          );
        })}
    </div>
  );
}
