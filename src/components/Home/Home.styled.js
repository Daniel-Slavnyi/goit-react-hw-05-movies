import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperWrap = styled(Swiper)`
  width: 600px;
`;

export const ItemOfImg = styled.li`
  width: 400px;
  margin: 0 auto;
`;

export const SwiperSlideWrap = styled(SwiperSlide)`
  width: 200px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
