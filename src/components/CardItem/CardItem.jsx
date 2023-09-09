import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import icon from '../../images/sprite.svg';
import { getFavoriteCars } from '../../helpers/getFavoritesCars';
import { addFavorite } from '../../helpers/toggleFavoriteCars';

import {
  CardWrap,
  CardSubwrap,
  ImageWrap,
  Image,
  AddFavoriteButton,
  DescriptionWrap,
  TitleWrap,
  Title,
  Description,
  CardButton,
} from './CardItem.styled';

export const CardItem = ({ cardData, toggleModal, setCurrentCar }) => {
  const [isFavorite, setIsFavorite] = useState('');

  const {
    id,
    address,
    rentalCompany,
    type,
    model,
    mileage,
    functionalities,
    img,
    make,
    rentalPrice,
    year,
  } = cardData;

  const randomIndex = Math.floor(Math.random() * functionalities.length);

  const descrArr = [
    address.split(', ')[1],
    address.split(', ')[2],
    rentalCompany,
    type,
    model,
    mileage,
    functionalities[randomIndex],
  ];

  useEffect(() => {
    const favoriteCars = getFavoriteCars();
    const indexOfId = favoriteCars.indexOf(id);
    setIsFavorite(indexOfId !== -1 ? 'favorite' : '');
  }, [id]);

  return (
    <CardWrap>
      <CardSubwrap>
        <ImageWrap>
          <Image src={img} alt={`${make} ${model}`}></Image>
          <AddFavoriteButton
            type="button"
            onClick={() => addFavorite(id, getFavoriteCars, setIsFavorite)}
          >
            <svg className={`icon ${isFavorite}`}>
              <use href={`${icon}#icon-heart`}></use>
            </svg>
          </AddFavoriteButton>
        </ImageWrap>
        <DescriptionWrap>
          <TitleWrap>
            <Title>
              <span className="make">
                {make} <span className="accent">{model}</span>, {year}
              </span>
              <span className="price">{rentalPrice}</span>
            </Title>
          </TitleWrap>
          <Description>{descrArr.join(' | ')}</Description>
        </DescriptionWrap>
      </CardSubwrap>
      <CardButton
        type="button"
        onClick={() => {
          toggleModal();
          setCurrentCar(cardData);
        }}
      >
        Learn more
      </CardButton>
    </CardWrap>
  );
};

CardItem.propTypes = {
  cardData: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setCurrentCar: PropTypes.func.isRequired,
};
