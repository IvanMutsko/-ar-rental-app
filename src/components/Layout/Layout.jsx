import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <div as={Suspense} fallback={null}>
        <Outlet />
      </div>
    </Container>
  );
};
