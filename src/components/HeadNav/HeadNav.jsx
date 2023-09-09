import { NavLink } from 'react-router-dom';

import logo from '../../images/headlamp.png';

import { Container, LogoImage, NavigateLink, LogoLink } from './HeadNav.styled';

export const HeadNav = () => {
  return (
    <Container>
      <LogoLink to="/">
        <LogoImage src={logo} />
      </LogoLink>

      <NavigateLink to="/">Home</NavigateLink>
      <NavigateLink to="/catalog">Catalog</NavigateLink>
      <NavigateLink to="/favorites">Favorites</NavigateLink>
    </Container>
  );
};
