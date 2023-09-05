import PropTypes from 'prop-types';
import { CardWrap, ImageWrap, Image, Icon, Title } from './CardItem.styled';

import icon from '../../images/heart.svg';

export const CardItem = ({ cardData }) => {
  return (
    <CardWrap>
      <ImageWrap>
        <Image
          src={cardData.img}
          alt={`${cardData.make} ${cardData.model}`}
        ></Image>
        <Icon src={icon}></Icon>
      </ImageWrap>
      <div>
        <div>
          <Title>
            {cardData.make} <span className="accent">{cardData.model}</span>,{' '}
            {cardData.year}
          </Title>
          <Title>{cardData.rentalPrice}</Title>
              </div>
              <div>
                  
              </div>
      </div>
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
