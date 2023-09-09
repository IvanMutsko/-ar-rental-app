import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardItem } from '../CardItem/CardItem';
import { Container } from './CardsList.styled';

export const CardsList = ({ catalog, toggleModal, setCurrentCar }) => {
  const [newCatalog, setNewCatalog] = useState([]);

  useEffect(() => {
    setNewCatalog(catalog);
  }, [catalog]);

  return (
    <Container>
      {newCatalog.map(card => {
        return (
          <CardItem
            key={card.id}
            cardData={card}
            toggleModal={toggleModal}
            setCurrentCar={setCurrentCar}
          />
        );
      })}
    </Container>
  );
};

CardsList.propTypes = {
  catalog: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setCurrentCar: PropTypes.func.isRequired,
};
