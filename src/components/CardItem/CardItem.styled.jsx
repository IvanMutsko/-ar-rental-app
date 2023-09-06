import styled from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  flex-shrink: 0;

  outline: 1px solid orange;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  flex-shrink: 0;

  overflow: hidden;

  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;

  object-fit: cover;

  flex-shrink: 0;
`;

export const Icon = styled.img`
  position: absolute;

  width: 18px;
  height: 18px;
  flex-shrink: 0;

  top: 14px;
  right: 14px;
`;

export const TitleWrap = styled.div`
  position: relative;
  width: 265px;
`;

export const Title = styled.h2`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  & .accent {
    color: #3470ff;
  }

  & .price {
    position: absolute;
    right: 0;
  }
`;

export const DescriptionWrap = styled.div`
  outline: 1px solid green;
`;
