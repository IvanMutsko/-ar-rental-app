import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {
  Overlay,
  Modal,
  CardWrap,
  ImageWrap,
  Image,
  Title,
  Description,
  DescriptionText,
  FunctionalitiesWrap,
  SubTitle,
  SubWrap,
  FunctionalitiesDescription,
  ConditionsWrap,
  ConditionText,
  CardButton,
} from './ModalWindow.styled';

export const ModalWindow = ({ currentCar, toggleModal }) => {
  const {
    id,
    address,
    fuelConsumption,
    type,
    model,
    img,
    make,
    year,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = currentCar;

  const descrArr = [
    address.split(', ')[1],
    address.split(', ')[2],
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];

  const personeConditions = rentalConditions.split('\n');

  const personAge = personeConditions[0].split(': ')[1];

  useEffect(() => {
    document.body.classList.add('modal-open');

    const pressEsc = evt => {
      if (evt.code === 'Escape') {
        toggleModal();
        document.body.classList.remove('modal-open');
      }
    };

    window.addEventListener('keydown', pressEsc);

    return () => {
      window.removeEventListener('keydown', pressEsc);
    };
  }, [toggleModal]);

  const handleClick = evt => {
    if (evt.target === evt.currentTarget) {
      toggleModal();
      document.body.classList.remove('modal-open');
    }
  };

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <CardWrap>
          <ImageWrap>
            <Image src={img} alt={`${make} ${model}`} />
          </ImageWrap>
          <Title>
            {make} <span className="accent">{model}</span>, {year}
          </Title>
          <Description>{descrArr.join(' | ')}</Description>
          <DescriptionText>{description}</DescriptionText>
          <SubWrap>
            <SubTitle>Accessories and functionalities:</SubTitle>
            <FunctionalitiesWrap>
              <FunctionalitiesDescription>
                {accessories.join(' | ')}
              </FunctionalitiesDescription>
              <FunctionalitiesDescription>
                {functionalities.join(' | ')}
              </FunctionalitiesDescription>
            </FunctionalitiesWrap>
          </SubWrap>
          <SubWrap>
            <SubTitle>Rental Conditions:</SubTitle>
            <ConditionsWrap>
              <ConditionText>
                Minimum age: <span>{personAge}</span>
              </ConditionText>
              <ConditionText>{personeConditions[1]}</ConditionText>
              <ConditionText>{personeConditions[2]}</ConditionText>
              <ConditionText>
                Mileage: <span>{mileage}</span>
              </ConditionText>
              <ConditionText>
                Price: <span>{rentalPrice.slice(1)}$</span>
              </ConditionText>
            </ConditionsWrap>
          </SubWrap>
          <CardButton>Rental car</CardButton>
        </CardWrap>
      </Modal>
    </Overlay>
  );
};

ModalWindow.propTypes = {
  currentCar: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
