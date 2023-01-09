import React from 'react';
import { NavLink } from 'react-router-dom';
import { UlList, NavList, NavItem } from './AppBar.styled';

export default function AppBar() {
  return (
    <header>
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
    </header>
  );
}
