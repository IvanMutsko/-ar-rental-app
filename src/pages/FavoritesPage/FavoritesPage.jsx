import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { CardsList } from '../../components/CardsList/CardsList';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import { Container, LoadButton } from './FavoritesPage.styled';

export default function FavoritesPage({
  setFilterValues,
  filter,
  catalog,
  visibleItems,
  loadMoreItems,
  toggleModal,
  setCurrentCar,
}) {
  const [favoriteId, setFavoriteId] = useState([]);

  useEffect(() => {
    const favoriteCarsString = JSON.parse(localStorage.getItem('favoriteCars'));
    setFavoriteId(favoriteCarsString);
  }, [filter]);

  const favoriteCatalog = catalog.filter(item => favoriteId.includes(item.id));

  return (
    <Container>
      <FilterBar filterValues={setFilterValues} filterFn={filter} />
      <CardsList
        catalog={favoriteCatalog.slice(0, visibleItems)}
        toggleModal={toggleModal}
        setCurrentCar={setCurrentCar}
      />
      <LoadButton type="button" onClick={loadMoreItems}>
        Load more
      </LoadButton>
    </Container>
  );
}

FavoritesPage.propTypes = {
  setFilterValues: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  catalog: PropTypes.array.isRequired,
  visibleItems: PropTypes.number.isRequired,
  loadMoreItems: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setCurrentCar: PropTypes.func.isRequired,
};
