import PropTypes from 'prop-types';
import { CardsList } from '../../components/CardsList/CardsList';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import { Container, LoadButton } from './CatalogPage.styled';

export default function CatalogPage({
  setFilterValues,
  filter,
  catalog,
  visibleItems,
  loadMoreItems,
}) {
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

CatalogPage.propTypes = {
  setFilterValues: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  catalog: PropTypes.array.isRequired,
  visibleItems: PropTypes.number.isRequired,
  loadMoreItems: PropTypes.func.isRequired,
};
