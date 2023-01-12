import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header, UlList, NavList, NavItem } from './AppBar.styled';

export default function AppBar() {
  return (
    <Header>
      <NavList>
        <UlList>
          <li>
            <NavItem to="/">Home</NavItem>
          </li>
          <li>
            <NavItem to="movies">Movies</NavItem>
          </li>
        </UlList>
      </NavList>
    </Header>
  );
}
