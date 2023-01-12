import AppBar from 'components/AppBar/AppBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';

export default function Layout() {
  return (
    <Wrapper>
      <AppBar />
      <Suspense fallback={false}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
}
