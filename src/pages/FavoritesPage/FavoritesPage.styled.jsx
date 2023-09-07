import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 150px 128px;
`;

export const LoadButton = styled.button`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  padding: 0 20px;

  border: none;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
