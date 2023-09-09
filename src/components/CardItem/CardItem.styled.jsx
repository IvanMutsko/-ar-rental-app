import styled from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  width: 274px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 21px;
`;

export const CardSubwrap = styled.div`
  margin-bottom: 28px;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 274px;
  min-height: 268px;
  margin-bottom: 14px;

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
`;

export const AddFavoriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;
  border: none;

  & .icon {
    width: 18px;
    height: 18px;
    stroke: #fff;
    fill: transparent;

    &:hover,
    &:focus {
      stroke: #3470ff;
      fill: #3470ff;
    }

    &.favorite {
      stroke: #3470ff;
      fill: #3470ff;
    }
  }
`;

export const TitleWrap = styled.div`
  width: 265px;
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;

  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  & .make {
    display: inline-block;
  }

  & .accent {
    color: #3470ff;
  }

  & .price {
    padding-left: 12px;
    display: inline-block;
  }
`;

export const Description = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const CardButton = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px;
  justify-content: center;
  align-items: center;

  border-color: transparent;

  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
