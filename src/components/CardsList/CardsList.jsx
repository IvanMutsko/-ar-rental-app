import PropTypes from 'prop-types';

import { CardItem } from '../CardItem/CardItem';

import { Container } from './CardsList.styled';

export const CardsList = ({ catalog, toggleModal, setCurrentCar }) => {
  return (
    <Container>
      {catalog.map(card => {
        return (
          <CardItem
            key={card.id}
            cardData={card}
            toggleModal={toggleModal}
            setCurrentCar={setCurrentCar}
          ></CardItem>
        );
      })}
    </Container>
  );
};

CardsList.propTypes = {
  catalog: PropTypes.array,
  toggleModal: PropTypes.func,
  setCurrentCar: PropTypes.func,
};
