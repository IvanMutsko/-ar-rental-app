import PropTypes from 'prop-types';

import { CardItem } from '../CardItem/CardItem';

import { Container } from './CardsList.styled';

export const CardsList = ({ catalog }) => {
  return (
    <Container>
      {catalog.map(card => {
        return <CardItem key={card.id} cardData={card}></CardItem>;
      })}
    </Container>
  );
};

CardsList.propTypes = {
  catalog: PropTypes.array,
};
