import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  border: 2px solid tomato;
`;

export const UlList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: block;
  text-align: center;

  &.active {
    background-color: tomato;
    width: 100px;
    height: 20px;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: tomato;
    color: white;
  }
`;
