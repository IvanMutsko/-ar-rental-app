import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeadNav } from '../HeadNav/HeadNav';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <HeadNav />
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
