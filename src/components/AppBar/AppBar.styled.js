import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
`;

export const NavList = styled.nav``;

export const UlList = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  border: 1px solid tomato;
  border-radius: 5px;
  color: white;
  fill: white;
  transition: all 0.5s ease;

  &.active {
    background-color: tomato;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: tomato;
    color: white;
  }
`;
