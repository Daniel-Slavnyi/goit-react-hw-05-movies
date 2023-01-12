import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
`;

export const UlList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: 230px;
  grid-auto-flow: dense;
  grid-gap: 15px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ItemOfImg = styled.li`
  border-radius: 15px;
  position: relative;

  &:nth-of-type(2n) {
    grid-column: span 2;
    grid-row: span 2;
  }

  &:nth-of-type(5n) {
    grid-row: span 2;
  }

  &:nth-of-type(19n) {
    grid-row: span 3;
  }

  &:nth-of-type(17n) {
    grid-column: span 2;
  }

  & p {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
  }

  img {
    width: 100%;
    max-height: 100%;
    border-radius: 15px;
    object-fit: cover;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.03);
      box-shadow: inset 0px 1px 7px 1px rgb(0 0 0 / 82%),
        0px 1px 6px 0px rgb(255 255 255 / 74%),
        0px 2px 3px 0px rgb(255 255 255 / 74%);
    }
  }
`;

export const LinkOfImg = styled(Link)`
  max-width: 100%;
`;
