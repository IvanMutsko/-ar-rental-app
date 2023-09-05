import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const NavigateLink = styled(NavLink)`
  display: flex;
  width: 274px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: #3470ff;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
