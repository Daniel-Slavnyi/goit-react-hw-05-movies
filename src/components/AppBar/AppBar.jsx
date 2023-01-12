import React from 'react';
import { Header, UlList, NavList, NavItem } from './AppBar.styled';
import { ReactComponent as Home } from './home.svg';
import { ReactComponent as Movie } from './movie.svg';

export default function AppBar() {
  return (
    <Header>
      <NavList>
        <UlList>
          <li>
            <NavItem to="/">
              <Home /> <span>Home</span>
            </NavItem>
          </li>
          <li>
            <NavItem to="movies">
              <Movie /> <span>Movies</span>
            </NavItem>
          </li>
        </UlList>
      </NavList>
    </Header>
  );
}
