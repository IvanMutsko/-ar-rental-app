import PropTypes from 'prop-types';
import {
  CardWrap,
  CardSubwrap,
  ImageWrap,
  Image,
  AddFavoriteButton,
  Icon,
  DescriptionWrap,
  TitleWrap,
  Title,
  Description,
  CardButton,
} from './CardItem.styled';

import icon from '../../images/heart.svg';

export const CardItem = ({ cardData }) => {
  const {
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

  return (
    <CardWrap>
      <CardSubwrap>
        <ImageWrap>
          <Image src={img} alt={`${make} ${model}`}></Image>
          <AddFavoriteButton type="button">
            <Icon src={icon}></Icon>
          </AddFavoriteButton>
        </ImageWrap>
        <DescriptionWrap>
          <TitleWrap>
            <Title>
              {make} <span className="accent">{model}</span>, {year}{' '}
              <span className="price">{rentalPrice}</span>
            </Title>
          </TitleWrap>
          <Description>{descrArr.join(' | ')}</Description>
        </DescriptionWrap>
      </CardSubwrap>
      <CardButton type="button">Learn more</CardButton>
    </CardWrap>
  );
};

CardItem.propTypes = {
  catalog: PropTypes.object,
};
