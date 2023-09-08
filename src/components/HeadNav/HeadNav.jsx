import logo from '../../images/headlamp.png';

import { Container, LogoImage, NavigateLink } from './HeadNav.styled';

export const HeadNav = () => {
  return (
    <Container>
      <LogoImage src={logo} />

      <NavigateLink to="/">Home</NavigateLink>
      <NavigateLink to="/catalog">Catalog</NavigateLink>
      <NavigateLink to="/favorites">Favorites</NavigateLink>
    </Container>
  );
};
