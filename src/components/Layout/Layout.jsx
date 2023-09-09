import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeadNav } from '../HeadNav/HeadNav';
import { Loader } from '../Loader/Loader';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <HeadNav />
      <Suspense fallback={Loader}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
