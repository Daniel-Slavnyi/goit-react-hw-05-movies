import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovieByTranding } from 'services/fetchMovie';
import {
  SwiperWrap,
  SwiperSlideWrap,
  ItemOfImg,
  WrapOfSwiper,
} from './Home.styled';

import Swiper, { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { SwiperSlide } from 'swiper/react';

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovieByTranding().then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <div>
        <h1>Trending today</h1>
        <SwiperWrap
          style={{
            '--swiper-navigation-color': '#070707',
            '--swiper-pagination-color': '#dadada',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <ul>
            {movies.map(item => (
              <SwiperSlideWrap>
                <ItemOfImg key={item.id}>
                  <Link to={`/movies/${item.id}`} state={{ from: location }}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={`movie of ${item.original_title ?? item.title}`}
                    />
                    <p>{item.name ?? item.title}</p>
                  </Link>
                </ItemOfImg>
              </SwiperSlideWrap>
            ))}
          </ul>
        </SwiperWrap>
        <SwiperWrap
          onSwiperWrap={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <ul>
            {movies.map(item => (
              <SwiperSlideWrap>
                <li key={item.id}>
                  <Link to={`/movies/${item.id}`} state={{ from: location }}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={`movie of ${item.original_title ?? item.title}`}
                    />
                    <p>{item.name ?? item.title}</p>
                  </Link>
                </li>
              </SwiperSlideWrap>
            ))}
          </ul>
        </SwiperWrap>
      </div>
    </>
  );
}
