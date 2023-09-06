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

  console.log(descrArr.join('|'));

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

// "id": 9582,
// "year": 2008,
// "make": "Buick",
// "model": "Enclave",
// "type": "SUV",
// "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
// "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
// "fuelConsumption": "10.5",
// "engineSize": "3.6L V6",
// "accessories": [
// "Leather seats",
// "Panoramic sunroof",
// "Premium audio system"
// ],
// "functionalities": [
// "Power liftgate",
// "Remote start",
// "Blind-spot monitoring"
// ],
// "rentalPrice": "$40",
// "rentalCompany": "Luxury Car Rentals",
// "address": "123 Example Street, Kiev, Ukraine",
// "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
// "mileage": 5858
