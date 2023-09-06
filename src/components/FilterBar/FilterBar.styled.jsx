import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  width: 859px;
  height: 74px;
  align-items: flex-end;
  gap: 18px;

  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  & .range-wrap {
    display: flex;
  }
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  border-radius: 14px;
  background: #f7f7fb;
  border-color: transparent;

  &#brand {
    padding: 14px 89px 14px 18px;
    width: 224px;
  }

  &#price {
    padding: 14px 18px;
    width: 125px;
  }

  &#mileage {
    width: 160px;
    height: 48px;
    padding: 14px 93px 14px 24px;

    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    background: #f7f7fb;
  }

  &#endMileage {
    width: 160px;
    height: 48px;
    padding: 14px 115px 14px 24px;

    border-radius: 0px 14px 14px 0px;
    background: #f7f7fb;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border-color: transparent;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
