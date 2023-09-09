import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;

  padding: 90px 150px;
`;

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 900;
  margin-bottom: 34px;

  color: #444444;
  background: #ffffff;
  text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
    1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
    4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
    4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
    7px 6px 1px #cccccc;
  color: #444444;
  background: #ffffff;
`;

export const Text = styled.p`
  font-size: 24px;

  margin-bottom: 30px;
`;

export const NavigateLink = styled(NavLink)`
  display: inline-block;

  padding: 12px 99px;

  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const Image = styled.img`
  margin-left: auto;
`;
