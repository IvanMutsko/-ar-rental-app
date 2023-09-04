import styled from 'styled-components';

import autoImg from '../../images/auto-home.png';
import polygonImg from '../../images/polygon-home.png';

export const Container = styled.div`
  height: 100vh;

  padding: 130px;

  background-image: url('${autoImg}');
  background-size: 600px;
  background-position: 75% 55%;
  background-repeat: no-repeat;
`;
