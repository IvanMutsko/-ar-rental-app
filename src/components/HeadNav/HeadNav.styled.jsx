import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;

  min-height: 100px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;

  background-color: #3471ffe7;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 20px;
`;

export const LogoImage = styled.img`
  position: absolute;
  left: 120px;

  width: 400px;
`;

export const NavigateLink = styled(NavLink)`
  display: flex;
  min-width: 120px;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: #0b44cd;

  color: #fff;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background: #3470ff;
    border-color: #0b44cd;
  }
`;
