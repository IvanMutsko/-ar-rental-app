import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
  z-index: 2;
`;

export const Modal = styled.div`
  margin-top: 150px;
  margin-bottom: 150px;
  border-radius: 24px;
  background: #fff;

  overflow-y: auto;

  /* РОЗІБРАТИСЬ ЗІ СКРОЛОМ */
`;

export const CardWrap = styled.div`
  position: relative;
  display: flex;
  padding: 40px;
  width: 541px;

  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background-color: transparent;
  border: none;

  & .icon {
    width: 24px;
    height: 24px;
    stroke: #121417;

    &:hover,
    &:focus {
      stroke: #3470ff;
    }
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 460px;
  min-height: 248px;
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

export const Title = styled.h2`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  margin-bottom: 8px;

  & .accent {
    color: #3470ff;
  }
`;

export const Description = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  width: 277px;
  margin-bottom: 14px;
`;

export const DescriptionText = styled.p`
  color: #121417;

  font-size: 14px;

  font-weight: 400;
  line-height: 1.43;

  margin-bottom: 24px;
`;

export const SubWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  margin-bottom: 24px;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const FunctionalitiesWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const FunctionalitiesDescription = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const RentalConditionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  margin-bottom: 24px;
`;

export const ConditionsWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ConditionText = styled.p`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  background: #f9f9f9;

  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;

  & span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const CardButton = styled.a`
  padding: 12px 50px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
