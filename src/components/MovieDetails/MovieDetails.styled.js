import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const WrapEl = styled.div`
  color: white;
`;

export const LinkEl = styled(Link)`
  position: fixed;
  top: 16px;
  left: 35%;
  padding: 10px 20px;
  color: white;
  border: 1px solid tomato;
  border-radius: 5px;
  text-decoration: none;
  z-index: 100;
  transition: all 0.5s ease;

  &:hover {
    background: tomato;
  }
`;

export const WrapInfoEl = styled.div`
  display: flex;
  gap: 50px;
`;

export const TextInfoEl = styled.div`
  display: flex;
  color: tomato;
  gap: 30px;
  margin-bottom: 30px;
  span {
    display: block;
    color: white;
  }
`;

export const ImgEl = styled.img`
  height: 500px;
  margin-left: 30px;
  box-shadow: inset 0px 1px 7px 1px rgb(0 0 0 / 82%),
    0px 1px 6px 0px rgb(255 255 255 / 74%),
    0px 2px 3px 0px rgb(255 255 255 / 74%);
`;
export const WrapNavLinkEl = styled.div`
  margin-top: 40px;
`;

export const NavLinkEl = styled(NavLink)`
  padding: 10px 20px;
  margin-right: 30px;
  color: white;
  border: 1px solid tomato;
  border-radius: 5px;
  text-decoration: none;
  z-index: 100;
  transition: all 0.5s ease;

  &.active {
    background: tomato;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: tomato;
    color: white;
  }
`;
