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
}) {
  const [favoriteCatalog, setFavoriteCatalog] = useState([]);

  let favoriteId = [];

  (() => {
    const favoriteCarsString = localStorage.getItem('favoriteCars');
    const arr = favoriteCarsString ? JSON.parse(favoriteCarsString) : [];
    favoriteId = arr;
  })();

  useEffect(() => {
    setFavoriteCatalog(


      'тут треба зробити масив відфільтрований по улюбленим авто'



      
    );
  }, []);

  return (
    <Container>
      <FilterBar filterValues={setFilterValues} filterFn={filter} />
      <CardsList catalog={catalog.slice(0, visibleItems)} />
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
};
