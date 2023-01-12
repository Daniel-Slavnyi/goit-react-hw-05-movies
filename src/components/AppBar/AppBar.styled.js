import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header``;

export const NavList = styled.nav`
  border: 2px solid tomato;
  height: 100%;
`;

export const UlList = styled.ul`
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
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
